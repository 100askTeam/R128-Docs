---
sidebar_position: 2
---

# 启动与资源划分

下面简单介绍一下 R128 方案的资源划分与启动流程。

## 资源划分

### CPU 资源划分

**这只是默认配置方案，CPU 资源划分可以按照需求任意修改**

| CPU   | 功能说明                                                     |
| ----- | ------------------------------------------------------------ |
| M33   | 控制核。运行 WI-FI/BT 固件、协议栈、驱动、休眠唤醒、安全启动、安全控制 |
| C906  | 应用核。运行大部分驱动与主要应用，控制台                     |
| HIFI5 | 算法核。运行音频相关驱动与算法                               |

### 内存配置

R128 方案目前三个核 OS 运行的地址范围如下表。

**这只是默认配置方案，CPU 资源划分可以按照需求任意修改。**

| CPU   | 内存使用地址                                  |
| ----- | --------------------------------------------- |
| M33   | `lspsram`，运行地址范围 0x8000000 - 0x8300000 |
| C906  | `lspsram`，运行地址范围 0x8300000 - 0x8800000 |
| HIFI5 | `hspsram`，运行地址范围 0xC000660 - 0xC0A0660 |

## 启动流程

R128 方案非安全启动流程如下，其中 M33 为启动核：

> 这只是默认配置方案，启动流程可以按照需求任意修改。

1. BROM
   1. 加载 M33 BOOT0 至 SRAM
   2. 跳转 M33 BOOT0 运行
2. M33 BOOT0
   1. 初始化 LSPSRAM 与 HSPSRAM
   2. 加载 M33 RTOS 至 LSPSRAM
   3. 加载 C906 RTOS 至 LSPSRAM
   4. 加载 HIFI5 RTOS 至 HSPSRAM
   5. 跳转运行 M33 RTOS
3. M33 RTOS
   1. 启动运行 C906 RTOS
   2. 启动运行 HIFI5 RTOS
4. C906 RTOS
   1. 启动运行用户程序

```mermaid
sequenceDiagram
    BROM-->>SRAM: load M33 Core BOOT0 to SRAM
    BROM-->>BOOT0: Boot BOOT0 on M33
    BOOT0-->>LSPSRAM: init LSPSRAM
    BOOT0-->>HSPSRAM: init HSPSRAM
    BOOT0-->>LSPSRAM: load M33 RTOS to LSPSRAM
    BOOT0-->>LSPSRAM: load C906 RTOS to LSPSRAM
    BOOT0-->>HSPSRAM: load HIFI5 RTOS to HSPSRAM
    BOOT0-->>M33: BOOT0 Boot M33 RTOS
    M33-->>C906: Boot C906 RTOS
    C906-->>LSPSRAM: C906 RTOS Running on LSPSRAM
    M33-->>HIFI5: Boot HIFI5 RTOS
    HIFI5-->>HSPSRAM: HIFI5 RTOS Running on HSPSRAM
    C906-->>HSPSRAM: APP Running on HSPSRAM
```

## 修改运行核心

系统有三个不同的核心，分别是 M33，C906，HIFI5，其中M33是启动核心不可以关闭，另外两个核心都可以关闭。当不需要使用 C906 核心或者 HIFI5 DSP 核心的时候，可以将这两个核心关闭。方法如下：

### 关闭 HIFI5 核心

首先，选择好 M33 的方案，因为 HIFI5 是由 M33 来启动的。

```
source envsetup.sh
lunch_rtos r128s2_m33
```

直接取消勾选即可：

![image1](pic/part4/chapter2/image1.jpeg)

### 关闭 C906 核心

首先，选择好 M33 的方案，因为 C906 是由 M33 来启动的。

```
source envsetup.sh
lunch_rtos r128s2_m33
```

直接取消勾选即可：

![image1](pic/part4/chapter2/image1.jpeg)

## 修改核心运行内存空间

### 修改到 HSPSRAM 运行

R128 的 M33 和 C906 两个核运行的系统都是默认运行在 LSPSRAM，这里示例如何修改到 HSPSRAM

1. 关闭启动 HIFI5 核心

首先，选择好 M33 的方案，因为 HIFI5 是由 M33 来启动的。

```
source envsetup.sh
lunch_rtos r128s2_m33
```

由于默认 HIFI5 是运行在 HSPSRAM 的，这里需要释放 HSPSRAM。运行 `mrtos_menuconfig` 启动配置。

直接取消勾选即可。

![image1](pic/part4/chapter2/image1.jpeg)

2. 将 M33 和 C906 设置成在 HSPSRAM 运行

首先选择 M33 的方案：

```
source envsetup.sh
lunch_rtos r128s2_m33
```

接着运行 `mrtos_menuconfig` 修改启动地址，所需要修改的配置如下图所示：

![image2](pic/part4/chapter2/image2.jpeg)

> lspsram 地址空间为 0x8000000-0x87fffff，hspsram 地址空间为 0xc000000-0xc7fffff。

这里将所需要的修改的核的地址，将8改成c即可。如修改 M33 的起始地址，将 `0x08004000`，修改成`0x0c004000` 即可，如下图。

![image3](pic/part4/chapter2/image3.jpeg)

然后保存配置，重新编译 M33 方案。接下来修改 C906 的地址，选择 C906 的方案

```
source envsetup.sh
lunch_rtos r128s2_c906
```

接着运行 `mrtos_menuconfig` 修改启动地址，所需要修改的配置如下图所示：

![image4](pic/part4/chapter2/image4.jpeg)

然后保存配置，重新编译 C906 方案。

3. 修改配置文件

首先，确认自己方案使用的 `image_header` 文件，运行一次打包的命令 `pack`，从打包的 `log` 中能看出方案所选的文件，如下图：

![image4-1](pic/part4/chapter2/image4-1.jpeg)

如果需要修改 M33 的地址，则只修改 M33 的即可，C906同理。如果取消启动 DSP，则直接注销掉 DSP的配置代码。

最后，修改 M33 和 C906 在 HSPSRAM 运行，并且取消运行 HIFI5 的 `image_header` 文件修改可如下所示：

```diff
diff --git a/r128s2/pro/configs/image_header_xip.cfg b/r128s2/pro/configs/image_header_xip.cfg
index 5c83ac1..fc87d06 100755
--- a/r128s2/pro/configs/image_header_xip.cfg
+++ b/r128s2/pro/configs/image_header_xip.cfg
@@ -30,9 +30,9 @@
         {"id": "0xa5e05a00", "bin": "boot0_spinor.fex", "attr": "0x01", "sram_offs": "0x40b0000", "ep": "0x40b0080"},
         {"id": "0xa5e05a00", "bin": "boot0_sdcard.fex", "attr": "0x01", "sram_offs": "0x40b0000", "ep": "0x40b0080"},
         {"id": "0xa5e15a01", "bin": "freertos-gz.fex", "attr": "0x01"},
-        {"id": "0xa5e05a01", "bin": "rtos_arm.fex", "attr": "0x01", "sram_offs": "0x8004000", "ep": "0x8004000"},
-        {"id": "0xa5e05a01", "bin": "rtos_riscv.fex", "attr": "0x01", "sram_offs": "0x8200000", "ep": "0x8200000"},
-           {"id": "0xa5e05a01", "bin": "rtos_dsp.fex", "attr": "0x01", "sram_offs": "0xc000000", "ep": "0xc000660"},
+        {"id": "0xa5e05a01", "bin": "rtos_arm.fex", "attr": "0x01", "sram_offs": "0xc004000", "ep": "0xc004000"},
+        {"id": "0xa5e05a01", "bin": "rtos_riscv.fex", "attr": "0x01", "sram_offs": "0xc200000", "ep": "0xc200000"},
+       //    {"id": "0xa5e05a01", "bin": "rtos_dsp.fex", "attr": "0x01", "sram_offs": "0xc000000", "ep": "0xc000660"},
         {"id": "0xa5e05a01", "bin": "etf.fex", "attr": "0x01", "sram_offs": "0x4000000", "ep": "0x4000000"},
         {"id": "0xa5e05a01", "bin": "rtos_xip_rv.fex", "attr": "0x02"},
         {}
```

## 查看代码内存分布

可以在 SDK 中运行 kamp 命令查看代码的内存分布

![image](pic/part4/chapter2/image5.png)

可以在最后查看内存的总使用情况

![image](pic/part4/chapter2/image6.png)

## 配置XIP

R128-S2 内置 NOR FLASH，可以将运行效率要求不高的代码保存在 XIP 段中，减少内存的占用。

配置 XIP 需要把对应的函数和库文件加入 xip.lds.S 中，具体语法请参照 ld 语法。

![image](pic/part4/chapter2/image7.png)

![image](pic/part4/chapter2/image8.png)

## 配置多个堆内存

有些时候当不需要使用 DSP 核心或者 DSP 核心内存使用量较少时，可以配置多个堆内存，将一部分内存放置于不同的 RAM 上使用。这里以 R128-S2 关闭 DSP 核心并将 HSPSRAM 分配给 C906 核心使用为例：

### 配置前内存分布情况

配置前进入 C906 核心运行 free 命令查看当前内存使用分布情况。

![image](pic/part4/chapter2/image9.png)

### 关闭 DSP 核心

首先，选择好 M33 的方案，因为 DSP 是由 M33 来启动的。

```shell
source envsetup.sh
lunch_rtos r128s2_m33
```

由于默认 DSP 是运行在 HSPSRAM 的，这里需要释放 HSPSRAM。运行 mrtos_menuconfig 启动配置。

直接取消勾选即可。

![image](pic/part4/chapter2/image10.png)

修改后请重新编译 M33 核心的固件。

![image](pic/part4/chapter2/image11.png)

### 将 HPSRAM 全部分配给 C906 使用

选择好 C906 的方案，运行配置界面

```shell
source envsetup.sh
lunch_rtos r128s2_c906
image-20231017135824514
```

![image](pic/part4/chapter2/image12.png)

找到 Kernel Options

![image](pic/part4/chapter2/image13.png)

找到 Heap Memory Manager (Use heap-4 to allocate memory) --->

![image](pic/part4/chapter2/image14.png)

选中 Use heap-multiple to allocate memory

![image](pic/part4/chapter2/image15.png)

配置 Default Heap Ram 为 heap in lpsram 配置默认内存堆为 lpsram

![image](pic/part4/chapter2/image16.png)

勾选 lpsram heap 和 lpsram heap dynamic address，意思是 lpsram 的内存是动态分布的

![image](pic/part4/chapter2/image17.png)

配置 lpsram heap size 的大小是0x600000，因为前面 2M 给 M33 使用，所以剩下 6M

![image](pic/part4/chapter2/image18.png)

配置 hpsram heap 使能 HPSRAM，并配置 hpsram heap start address 为 0xc000000，hpsram heap size 为 0x7FFFFF 表示将 HPSRAM 全部分配给 C906 核心使用。

![image](pic/part4/chapter2/image19.png)

### 将 HPSRAM 部分分配给 C906 使用

如果 HPSRAM 需要运行 DSP，可以分配部分给 C906 使用，配置 hpsram heap start address为 0xc400000，0xc000000 是 HPSRAM 的开始地址，前面 4M 已经分配给 DSP 使用；并配置 hpsram heap size 为 0x400000 意思是可以用的 HPSRAM 大小是 4M。

![image](pic/part4/chapter2/image20.png)

### 配置后的内存分布情况

编译打包烧录后，可以使用 free 命令查看配置后的内存分布情况。可以看到 HPSRAM 的8M内存全部分配给 C906 使用了，C906 一共可以用 4M LPSRAM + 8M HPSRAM = 12M RAM

![image](pic/part4/chapter2/image21.png)
