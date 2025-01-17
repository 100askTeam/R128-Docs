---
sidebar_position: 6
---

# Hello World!

本文将介绍使用 R128 开发板从串口输出 Hello World 的方式介绍 SDK 软件开发流程。

## 载入方案

我们使用的开发板是 R128-Devkit，需要开发 C906 核心的应用程序，所以载入方案选择`r128s2_module_c906`

```bash
$ source envsetup.sh 
$ lunch_rtos 1
```

![image1](pic/part3/chapter6/image1.png)

## 编辑程序

打开你喜欢的编辑器，修改文件：`lichee/rtos/projects/r128s2/module_c906/src/main.c`

![image2](pic/part3/chapter6/image2.png)

由于是 FreeRTOS，我们在最后一行 `vTaskDelete(NULL)` 前加上 

```c
printf("HelloWrold!\n");
```

![image3](pic/part3/chapter6/image3.png)

使用命令 `mp` 编译打包，可以看到刚才修改的 `main.c` 编译进去了

![image4](pic/part3/chapter6/image4.png)

## 烧录程序

打开 PhoenixSuit 选择刚才编译出来的固件

![image5](pic/part3/chapter6/image5.png)

开发板插入 USB OTG 和 串口，OTG用于烧录，串口用于查看输出。

![image6](pic/part3/chapter6/image6.jpg)

然后按住 `FEL` 按键，轻点 `RESET` 按键开始烧录

![image7](pic/part3/chapter6/image7.jpg)

烧录中，可以松开`FEL`按键了

![image8](pic/part3/chapter6/image8.png)

烧录过程中串口会输出烧录的日志，对于排错很有帮助

![image9](pic/part3/chapter6/image9.png)

## 查看结果

烧录完成后可以在日志中找到刚才编写的 Hello World 输出

![image10](pic/part3/chapter6/image10.png)

