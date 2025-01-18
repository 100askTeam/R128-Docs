# 应用示例合集-100ASK_R128_DEMO

100ask_r128_demos 的定位是作为R128的第三方库使用，因此其是基于R128SDK提供的底层接口而编写的应用示例，包括下表所示的几大部分：

| 名称 | 说明 |
| :--- | :--- |
|get_started | 入门示例 |
|lv_100ask_desktop | LVGL示例 |
|module_driver | 包含各种传感器、模块的示例 |
|nwatch | NWatch示例 |
|更多内容正在施工... | 更多内容正在施工... |


仓库地址：

- GitHub: [https://github.com/100askTeam/100ask_r128_demos](https://github.com/100askTeam/100ask_r128_demos)
- Gitee: [https://gitee.com/weidongshan/100ask_r128_demos](https://gitee.com/weidongshan/100ask_r128_demos)

# 用法

作为R128的第三方库， 100ask_r128_demos 使用起来非常简单：

1. 将 100ask_r128_demos 目录复制到sdk的此目录下 `R128-S2-SDK/lichee/rtos-components/thirdparty`
2. 打开文件 `R128-S2-SDK/lichee/rtos-components/thirdparty/Makefile` 进行编辑，在文件的最后一行加入下面的内容：

```shell
obj-$(CONFIG_COMPONENTS_100ASK_R128_DEMOS) += 100ask_r128_demos/
```

3. 打开文件 `R128-S2-SDK/lichee/rtos-components/thirdparty/Kconfig` 进行编辑，在文件的最后一行加入下面的内容：

```shell
source components/common/thirdparty/100ask_r128_demos/Kconfig
```

4. 执行 **mrtos_menuconfig** 进入到下面所示的位置进行配置：

```shell
System components  --->
    thirdparty components  --->
        USE 100ask_r128_demos  --->
            --- USE 100ask_r128_demos
            [*]   USE USE_100ASK_MODULE_DRIVER  --->
            [ ]   100ask lvgl desktop
            [*]   NWatch demo
            ......
```

5. 编译、打包： 

```
mrtos && pack  # 方法一：分开两条命令，编译再打包
mp             # 方法二：一条命令完成编译打包操作
```



# 技术交流

- 100ASK: [https://forums.100ask.net](https://forums.100ask.net)
- Allwinne: [https://bbs.aw-ol.com](https://bbs.aw-ol.com/recent?cid[]=2)

