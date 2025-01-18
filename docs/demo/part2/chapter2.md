# NWatch（DIY智能手表）

本项目基于[DShanMCU-R128s2-DevKit](https://item.taobao.com/item.htm?id=736154682975)开发，用意是提供一个综合的示例进行学习参考。

本项目基于ZakKemble的开源项目-NWatch，GitHub仓库地址：[https://github.com/ZakKemble/NWatch](https://github.com/ZakKemble/NWatch)，原作者博客地址：[https://blog.zakkemble.net/diy-digital-wristwatch](https://blog.zakkemble.net/diy-digital-wristwatch)

> 与原作者的NWatch不一样的是，将其移植到[DShanMCU-R128s2-DevKit开发板](https://item.taobao.com/item.htm?id=736154682975)上，同时相比于原作者添加了一些功能，比如恢复出厂设置功能，后续有时间会慢慢增加更多的功能。

> 本章节**视频教程**：[https://www.bilibili.com/video/BV1oC4y1w7AH?p=26](https://www.bilibili.com/video/BV1oC4y1w7AH?p=26)

## 运行效果

[点击这里观看视频。](https://bbs.aw-ol.com/topic/4413/%E7%A7%BB%E6%A4%8Dnwatch%E5%88%B0r128-devkit/3)

![](https://forums.100ask.net/uploads/default/optimized/2X/1/1f6b489b0b2918a08f6818cfd7f957dd686e93fb_2_1035x582.jpeg)

## 硬件准备

- [DShanMCU-R128s2-DevKit开发板](https://item.taobao.com/item.htm?id=736154682975)：[https://item.taobao.com/item.htm?id=736154682975](https://item.taobao.com/item.htm?id=736154682975)
- 0.96寸OLED（SSD1306）
- EC11旋转编码器模块
- 红外接收模块+红外遥控器
- 无源蜂鸣器模块
- DHT11温湿度模块

## 源码获取

仓库源码：

- Gitee：[https://gitee.com/weidongshan/100ask_r128_demos/tree/master/nwatch](https://gitee.com/weidongshan/100ask_r128_demos/tree/master/nwatch)
- GitHub：[https://github.com/100askTeam/100ask_r128_demos/tree/master/nwatch](https://github.com/100askTeam/100ask_r128_demos/tree/master/nwatch)

## 固件获取

如果你不想自己编译或者不需要二次开发，那么可以从这里获取固件，烧写固件到[DShanMCU-R128s2-DevKit](https://item.taobao.com/item.htm?id=736154682975)后开机会自动启动NWatch任务，如果没有自动启动在串口终端输入命令然后按回车即可： `nwatch_100ask 3`。模块接线请阅读[模块接线](#模块接线)小节。

Releases获取：

- Gitee：[https://gitee.com/weidongshan/100ask_r128_demos/releases/tag/v0.0.1](https://gitee.com/weidongshan/100ask_r128_demos/releases/tag/v0.0.1)
- GitHub：[https://github.com/100askTeam/100ask_r128_demos/releases/tag/v0.0.1](https://github.com/100askTeam/100ask_r128_demos/releases/tag/v0.0.1)


## 二次开发

### 修改 sys_config.fex

打开 `R128-S2-SDK/board/r128s2/pro/configs/sys_config.fex` ，进行如下的修改：

IIC引脚配置:

```ini
[twi1]
twi1_sck        = port:PB00<3><1><default><default>
twi1_sda        = port:PB01<3><1><default><default>
```

PWM配置：

```ini
[pwm6]
pwm_used        = 1
pwm_positive    = port:PA26<4><0><2><default>
```

### 添加100ask_r128_demos

从git仓库获取源码：

- Gitee：[https://gitee.com/weidongshan/100ask_r128_demos/tree/master/nwatch](https://gitee.com/weidongshan/100ask_r128_demos/tree/master/nwatch)
- GitHub：[https://github.com/100askTeam/100ask_r128_demos/tree/master/nwatch](https://github.com/100askTeam/100ask_r128_demos/tree/master/nwatch)

1. clone仓库或者下载仓库压缩包到本地，并将仓库目录放在sdk的这个目录下面：

```shell
R128-S2-SDK/lichee/rtos-components/thirdparty/100ask_r128_demos
```

> 一定要确保文件夹名称是 `100ask_r128_demos`

2. 打开文件 `R128-S2-SDK/lichee/rtos-components/thirdparty/Makefile` 进行编辑，在文件的最后面或最前一行加入下面的内容：

```shell
obj-$(CONFIG_COMPONENTS_100ASK_R128_DEMOS) += 100ask_r128_demos/
```

3. 打开文件 `R128-S2-SDK/lichee/rtos-components/thirdparty/Kconfig` 进行编辑，在文件的最后或最前一行加入下面的内容：

```shell
source components/common/thirdparty/100ask_r128_demos/Kconfig
```

### 配置menuconfig
1. 执行 **mrtos_menuconfig** 进入到下面所示的位置进行配置：

选择载入 r128s2_module_c906 方案，并进入 menuconfig：

```shell
$ source envsetup.sh 
$ lunch_rtos 1
$ mrtos_menuconfig
```


打开IIC：

```shell
System components  --->
    Drivers Options  --->
        soc related device drivers  --->
        	TWI Devices  --->
                -*- enable twi driver
                [ ]   enable twi hal APIs test command
```

打开PWM：

```shell
System components  --->
    Drivers Options  --->
        soc related device drivers  --->
            PWM devices --->
                [*] enable pwm driver
                [ ]   enable pwm hal APIs test command
```

打开GPIO及其中断：

```shell
System components  --->
    Drivers Options  --->
        soc related device drivers  --->
            GPIO devices --->
                [*] enable GPIO driver
                [ ]   enable gpio hal APIs test command
                [ ] enable gpio chip aw9523
                [*] enable amp gpio irq
```

配置 100ask_r128_demos：

```shell
System components  --->
    thirdparty components  --->
        USE 100ask_r128_demos  --->
            --- USE 100ask_r128_demos
            [*]   USE USE_100ASK_MODULE_DRIVER  --->
            	[*]   USE USE_100ASK_MODULE_DRIVER_IIC_OLED  --->
            	[ ]   USE USE_100ASK_MODULE_DRIVER_SPI_LCD  ----
            	[*]   USE USE_100ASK_MODULE_DRIVER_PASSIVE_BUZZER  --->
            	[*]   USE USE_100ASK_MODULE_DRIVER_ROTARY_ENCODER  ----
            	[*]   USE USE_100ASK_MODULE_DRIVER_IR_RECEIVER  --->
            	[*]   USE USE_100ASK_MODULE_DRIVER_SPI_FLASH  ---> 
            	[*]   USE USE_100ASK_MODULE_DRIVER_DHT11  ----
            [ ]   100ask lvgl desktop
            [*]   NWatch demo
            ......
```

### 开机启动

如果省略这一步，那么在开机之后，在串口终端输入命令然后按回车运行 NWatch 任务： `nwatch_100ask 3`

如果需要开机自启动 NWatch 任务，按照如下步骤操作：

1. 打开 `R128-S2-SDK/lichee/rtos/projects/r128s2/pro_c906/src/main.c` ，文件
2. 在 **main函数** 中如下位置添加如下代码：

```c
void cpu0_app_entry(void *param)
{
    ......
#ifdef CONFIG_NWATCH_100ASK
    int argc = 2;
	char *argv[] = {
		"nwatch_100ask",
		"3",
	};
    nwatch_100ask_main(argc, argv);
#endif
    vTaskDelete(NULL);
}

```

最后，编译、打包： **mrtos && pack**

编译出来的镜像存放位置：`R128-S2-SDK/out/r128s2/pro/rtos_freertos_r128s2_pro_uart0_16Mnor.img`

通过烧写工具将其烧写到开发板上，下一步，对各个模块进行接线。

## 模块接线

IIC OLED模块接线：

```shell
SCK ------- PB00
SDA ------- PB01
```

EC11旋转编码器接线：

```shell
S1   -------  PA24
S2   -------  PA25
KEY  -------  PA29
```

蜂鸣器模块接线：

```shell
BEEP DATA PIN ------- PA26
```

红外接收模块接线：

```shell
IR DATA PIN   -------   PA10
```

DHT11模块：

```shell
DHT11 DATA PIN   -------   PA6
```

## 技术交流

- Allwinne: [https://bbs.aw-ol.com](https://bbs.aw-ol.com/recent?cid[]=2)
- 100ASK: [https://forums.100ask.net](https://forums.100ask.net)
