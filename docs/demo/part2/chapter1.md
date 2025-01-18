# 添加自己的方案

R128平台通过执行 lunch_rtos 载入（切换）方案，那么如何添加自己的方案呢？本文带你解决这个问题。

在这里我们以添加自己的RGB方案为例，命名为 `r128-devkit-100ask-rgb`。

建议用百问网提供的 [r128-devkit-100ask-rgb](https://gitee.com/weidongshan/100ask_r128_demos/tree/master/other/RGB_LCD) 方案进行实验，仓库地址:

- Gitee： [https://gitee.com/weidongshan/100ask_r128_demos/tree/master/other/RGB_LCD](https://gitee.com/weidongshan/100ask_r128_demos/tree/master/other/RGB_LCD)
- GitHub：[https://github.com/100askTeam/100ask_r128_demos/tree/master/other/RGB_LCD](https://github.com/100askTeam/100ask_r128_demos/tree/master/other/RGB_LCD)

> 本章节**视频教程**：[https://www.bilibili.com/video/BV1oC4y1w7AH?p=21](https://www.bilibili.com/video/BV1oC4y1w7AH?p=21)

## 添加板级配置

在 `SDK/board` 目录下添加自己的板子配置，我们以r128s2芯片为例。

进入到 `SDK/board/r128s2` 目录下，将上面仓库中提供的 `r128-devkit-100ask-rgb` 方案下的 **board/r128s2/** 下的目录复制过来；或者复制相近的配置目录，比如 devkit 配置，并命名为你的方案名称，这里是：`r128-devkit-100ask-rgb`。


## 添加SOC方案工程

进入到 `SDK/lichee/rtos/projects` 目录，将上面仓库中提供的 `r128-devkit-100ask-rgb` 方案下的 **lichee/rtos/projects/r128s2/** 下的两个目录复制过来；或者复制相近的方案目录，比如 r128s2 方案，并命名为你的方案名称，这里是：`r128-devkit-100ask-rgb-c906` 和 `r128-devkit-100ask-rgb-m33` 。**注意两个要成对出现（C906和M33）**。

> projects 目录下的每一个子目录代表一个SoC 类别，每个 SoC 类别下面存放对应的方案，每个方案都有 m33 与c906 目录，在这些目录下面实现各处理器上第一个任务，选择不同的 project 编译出来的 bin 具有不同功能。每个 project 有独立的 FreeRTOSConfig 配置。

打开 `SDK/lichee/rtos/projects/Kconfig` 文件，在第一个choice的最后添加你的方案，如下所示：

```shell
choice

.......

config PROJECT_R128S2_DEVKIT_100ASK_RGB_C906
    bool "r128s2 Devkit 100ASK RGB c906 system"
	select PROJECT_R128S2
    ---help---
        r128s2 pro c906 system

config PROJECT_R128S2_DEVKIT_100ASK_RGB_M33
    bool "r128s2 Devkit 100ASK RGB m33 system"
	select PROJECT_R128S2
    ---help---
        r128s2 pro m33 system
        
endchoice

```

打开 `SDK/lichee/rtos/projects/r128s2/Makefile` 文件，添加编译包含，如下所示：

```shell
obj-$(CONFIG_PROJECT_R128S2_DEVKIT_100ASK_RGB_C906) += devkit_100ask_rgb_c906/
obj-$(CONFIG_PROJECT_R128S2_DEVKIT_100ASK_RGB_M33) += devkit_100ask_rgb_m33/
```

## 结果

到这里方案已经创建完成，重新按照下面的命令执行即可看到新的方案：

```shell
source envsetup.sh  # 重新加载环境变量
lunch_rtos          # 选择新添加的方案
mrtos_menuconfig    # 配置menuconfig
m -j8               # 编译
p                   # 打包
```