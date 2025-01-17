---
sidebar_position: 5
---

# RTOS 使用说明

## 使用串口访问设备

![image1](pic/part3/chapter5/image1.jpg)

使用USB TypeC 连接线连接开发板 USB转串口 的接口，安装串口驱动程序：[CH341SER.EXE](https://www.wch.cn/download/CH341SER_EXE.html)

![image2](pic/part3/chapter5/image2.png)

到设备管理器找到需要的串口，这里是 `COM8`

![image3](pic/part3/chapter5/image3.png)

使用串口访问工具 PuTTY 打开串口，这里是 COM8，波特率 115200。

![image4](pic/part3/chapter5/image4.png)

打开之后回车即可访问控制台。

![image5](pic/part3/chapter5/image5.png)

可以输入 `help` 命令查看支持的命令。

![image6](pic/part3/chapter5/image6.png)

## 查看三个核心运行频率

连接开发板的时候可以点击 RESET 按钮重置 CPU，查看输出。

![image7](pic/part3/chapter5/image7.jpg)

这里可以看到 M33 核心运行频率 192MHz，DSP 运行频率 400MHz，C906 运行频率 480MHz

![image8](pic/part3/chapter5/image8.png)

## 系统调试命令

### help

```
help
```

获取系统支持的终端命令

![image9](pic/part3/chapter5/image9.png)

### backtrace

查看指定任务堆栈回溯信息

```
backtrace [taskname | tasknumber]
```

![image10](pic/part3/chapter5/image10.png)

### top

查看系统任务状态

```
top [‑d 2]
```

![image11](pic/part3/chapter5/image11.png)

### ts

展示所有FreeRTOS任务的状态

```
ts
```

![image12](pic/part3/chapter5/image12.png)

### list_irq

列出所有支持的中断及其状态

````
list_irq
````

![image13](pic/part3/chapter5/image13.png)

### free

查看系统堆的内存

```
free
```

![image14](pic/part3/chapter5/image14.png)

### p

读取地址 `reg_start_addr` 对应长度 `len` 的内容

```
p [reg_start_addr] [len]
```

![image15](pic/part3/chapter5/image15.png)

### m

向地址 `reg_address` 写值 `reg_value`

```
m [reg_address] [reg_value]
```

![image16](pic/part3/chapter5/image16.png)

### forkarg

修改fork命令参数，可设置fork命令创建的任务的优先级及其栈大小

```
forkarg [‑p priority] [‑s size]
```

![image17](pic/part3/chapter5/image17.png)

### fork

不占用控制台任务，在后台运行命令

```
fork command [arg1 ...]
```

![image18](pic/part3/chapter5/image18.png)

## 文件系统命令

### df

查看文件系统剩余空间

```
df [path]
```

![image19](pic/part3/chapter5/image19.png)

### ls

列出指定文件或者目录信息

```
ls [‑h] [‑l] [‑k] [file1]
```

![image20](pic/part3/chapter5/image20.png)

### cat

以ACSII码的形式，读取指定的文件

```
cat <file>
```

![image21](pic/part3/chapter5/image21.png)

### hexdump

查看二进制文件内容

```
hexdump [‑n num] [‑C] file
```

![image22](pic/part3/chapter5/image22.png)

