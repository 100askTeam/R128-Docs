# HiFi5 语音算法部署

部署算法需要完成以下四个方面的功能：

1. 创建DSP算法组件目录及编写代码
2. 在DSP上录音
3. 使用算法加速库加速算法
4. 核间通讯
5. DUMP 数据到PC

## 创建DSP算法组件目录

创建并进入目录：

```
mkdir -p lichee/rtos-components/thirdparty/my_dsp_asr/src
mkdir -p lichee/rtos-components/thirdparty/my_dsp_asr/inc
cd lichee/rtos-components/thirdparty/my_dsp_asr/
```

编写 `Kconfig` 文件：

```kconfig
menu "my dsp asr"

config COMPONENTS_MY_DSP_ASR
    bool "my dsp asr"
    depends on ARCH_DSP
    default n
    help
        to do

endmenu
```

修改 `Kconfig`后建议重新 `menuconfig`

在 `lichee/rtos-components/thirdparty/Kconfig` 中追加：

```kconfig
source "components/common/thirdparty/my_dsp_asr/Kconfig"
```

编写 `Makefile`：

```
obj-y += src/my_dsp_asr.o
#self
CFLAGS += -Icomponents/common/aw/asr_demo/inc/
```

在 `lichee/rtos-components/thirdparty/Makefile` 中追加：

```
obj-$(CONFIG_COMPONENTS_MY_DSP_ASR) += my_dsp_asr/
```

## 编写基础代码

```c
#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <string.h>
#include <console.h>
#include <FreeRTOS.h>
#include <task.h>

static void my_dsp_asr_thread(void *arg)
{
    size_t loop = (size_t)arg;
    printf("%s enter\n", __func__);
    while (loop--) {
        printf("%s %u\n", __func__, loop);
        vTaskDelay(500 / portTICK_PERIOD_MS);
    }
    printf("%s exit\n", __func__);

    vTaskDelete(NULL);
}

const char *thread_name = "my_dsp_asr_thread";
size_t stack_size = 0x4000;
size_t thread_priority = 1;
int cmd_my_dsp_asr(int argc, char *argv[])
{
    size_t loop = 10;
    TaskHandle_t handle = NULL;

    printf("%s enter\n", __func__);
    if(xTaskCreate(my_dsp_asr_thread, thread_name, stack_size, (void *)loop, thread_priority, &handle) != pdPASS) {
        printf("xTaskCreate %s failed!\n", thread_name);
    }
    printf("%s exit\n", __func__);

    return 0;
}
FINSH_FUNCTION_EXPORT_CMD(cmd_my_dsp_asr, my_dsp_asr, my dsp asr);
```

`./build.sh menuconfig`，选择以下配置：

```
CONFIG_COMPONENTS_MY_DSP_ASR
```

（会根据 `Kconfig` 的 `select` 字段自动选上依赖的组件）

检查是否编译进固件：

```
grep -r cmd_my_dsp_asr ./out/ --include=*.bin
```

可以看到：

```
lichee/dsp$ grep -r cmd_my_dsp_asr ./out/ --include=*.bin
Binary file ./out/r128s3/evb1/r128s2_dsp0_evb1.bin matches
Binary file ./out/r128s3/evb1/r128s2_dsp0_evb1_raw.bin matches
Binary file ./out/r128s3/evb1/r128s2_dsp0_evb1_xcc.bin matches
```

烧录固件即可在串口终端输入：

```
rpccli dsp my_dsp_asr
```

后期可以添加开机自启：

```diff
diff --git a/arch/sun20iw2/init-sun20iw2.c b/arch/sun20iw2/init-sun20iw2.c
index cfb2d45d..9b5c2a5d 100644
--- a/arch/sun20iw2/init-sun20iw2.c
+++ b/arch/sun20iw2/init-sun20iw2.c
@@ -160,5 +160,10 @@ void app_init(void)
        rpdata_ctrl_init();
 #endif

+#ifdef CONFIG_COMPONENTS_MY_DSP_ASR
+       int cmd_my_dsp_asr(int argc, char *argv[]);
+       cmd_my_dsp_asr(0, NULL);
+#endif
+
 }
```

## 在DSP上录音

在Kconfig中添加：

```patch
     bool "my dsp asr"
     depends on ARCH_DSP
+    select COMPONENTS_AW_AUDIO_SYSTEM
     default n
     help
```

在Makefile中添加

```
#audio system
CFLAGS += -Icomponents/common/aw/AudioSystem/include/
```

参考代码：

```c
#include "AudioRecord.h"
#define MS_PER_FRAME    (10)
#define RECORD_RATE     (16000)
#define RECORD_NAME "capture"
static const size_t record_time_ms = 10 * 1000;
static const uint32_t rate = RECORD_RATE;
static const uint8_t channels = 3;
static const uint8_t bitwidth = 16;
static int16_t record_buffer[RECORD_RATE * MS_PER_FRAME * 3 / 1000];
static void my_record_thread(void *arg)
{
    tAudioRecord *pAudioRecord = NULL;
    int ret;
    size_t time_ms = 0;

    printf("%s enter\n", __func__);
    pAudioRecord = AudioRecordCreate(RECORD_NAME);
    if (!pAudioRecord) {
        printf("%s:%u error!\n", __func__, __LINE__);
        // TODO
    }

    ret = AudioRecordSetup(pAudioRecord, rate, channels, bitwidth);
    if (ret) {
        printf("%s:%u error!\n", __func__, __LINE__);
        // TODO
    }

    while (time_ms < record_time_ms) {
        ret = AudioRecordRead(pAudioRecord, record_buffer, sizeof(record_buffer));
        if (ret < 0) {
            printf("%s:%u error!\n", __func__, __LINE__);
            // TODO
        }
        time_ms += MS_PER_FRAME;
        printf("%ums: read %d\n", time_ms, ret);
    }

    AudioRecordStop(pAudioRecord);
    AudioRecordDestroy(pAudioRecord);
    printf("%s exit\n", __func__);

    vTaskDelete(NULL);
}
```

## 使用算法加速库

**本节只是代码演示，对于有HIFI5授权的客户可以向 Candence 获取 NatureDSP_Signal 和 xa_nnlib_api 的源码包，其中包含api的说明文档：**

- `libxa_nnlib/doc/HiFi5-NNLib-ProgrammersGuide-API.pdf`
- `hifi5_library/doc/NatureDSP_Signal_Library_Reference_HiFi5.pdf`

在Kconfig中添加：

```
     bool "my dsp asr"
     depends on ARCH_DSP
     select COMPONENTS_AW_AUDIO_SYSTEM
+    select COMPONENTS_XTENSA_HIFI5_NNLIB_LIBRARY
+    select COMPONENTS_XTENSA_HIFI5_VFPU_LIBRARY
     default n
     help
```

在Makefile中添加

```
CFLAGS +=  -I components/thirdparty/xtensa/hifi5_nn_v170_library/include
CFLAGS +=  -I components/thirdparty/xtensa/hifi5_vfpu_v200_library/include
```

（链接加速库的动作已经在 `lichee/dsp/Makefile` 中添加，无需重复添加）

FFT 参考代码：

```c
#include <math.h>
#include "NatureDSP_Signal.h"
#include "xa_nnlib_api.h"

#ifndef PI
#define PI             (3.141592653f)
#endif

struct cplxf_t {
    float r;
    float i;
};

static inline void make_src_cplxf_from_record_buffer(struct cplxf_t *output, int16_t *input, int N, uint8_t chs, uint8_t ch_index)
{
    int i = 0;
    for (i = 0; i < N; i++) {
        output[i].r = input[i * chs + ch_index];
        output[i].i = 0.0f;
    }
}

// N*3/4 *twdstep
static inline void make_twd_cplxf(struct cplxf_t *output, const int N, const int twdstep)
{
    int n, m;
    for (n = 0; n < (twdstep * N) / 4; n++) {
        for (m = 0; m < 3; m++) {
            float phi = 2 * PI * (m + 1) * n / (twdstep * N);
            output[n * 3 + m].r = cosf(phi);
            output[n * 3 + m].i = sinf(phi);
        }
    }
}

int get_max(const struct cplxf_t *input_cplxf, int N)
{
    float max = 0.0f;
    float index = 0;
    int i = 0;
    for (i = 0; i < N; i++) {
        float cur = input_cplxf[i].r * input_cplxf[i].r + input_cplxf[i].i * input_cplxf[i].i;
        if (cur > max) {
            max = cur;
            index = i;
        }
    }

    return index;
}

#define FFT_SIZE    (1024)
static struct cplxf_t g_tmp_cplxf[FFT_SIZE];
static int record_data_handler(struct cplxf_t *output_cplxf, const struct cplxf_t *input_cplxf, const struct cplxf_t *twd_cplxf, int N)
{
    if (N != FFT_SIZE) {
        printf("%s incorrect data length: %d\n", __func__, N);
        return -1;
    }

    memcpy(g_tmp_cplxf, input_cplxf, sizeof(g_tmp_cplxf));
    fft_cplxf_ie(
        (complex_float *)output_cplxf,
        (complex_float *)g_tmp_cplxf,
        (const complex_float *)twd_cplxf,
        1,
        FFT_SIZE);

    return 0;
}
```

在录音代码中添加：

```c
     ret = AudioRecordSetup(pAudioRecord, rate, channels, bitwidth);
     if (ret) {
         printf("%s:%u error!\n", __func__, __LINE__);
         // TODO
     }

+    static struct cplxf_t g_input_cplxf[FFT_SIZE];
+    static struct cplxf_t g_output_cplxf[FFT_SIZE];
+    static struct cplxf_t g_twd_cplxf[FFT_SIZE];
+    int N = rate * MS_PER_FRAME / 1000;
+    int twdstep = 1;
+    int max_index = -1;
+    make_twd_cplxf(g_twd_cplxf, N, twdstep);

     while (time_ms < record_time_ms) {
         ret = AudioRecordRead(pAudioRecord, record_buffer, sizeof(record_buffer));
         if (ret < 0) {
             printf("%s:%u error!\n", __func__, __LINE__);
             // TODO
         }
         time_ms += MS_PER_FRAME;
+        max_index = -1;
+        make_src_cplxf_from_record_buffer(g_input_cplxf, record_buffer, N, channels, 0);
+        if( !record_data_handler(g_output_cplxf, g_input_cplxf, g_twd_cplxf, N)) {
+            max_index = get_max(g_output_cplxf, N);
+        }
         printf("%ums: read %d, max: %d\n", time_ms, ret, max_index);
     }
```

## 核间通讯

**代码仅供参考，不包含实际业务代码**

在Kconfig中添加：

```
     bool "my dsp asr"
     depends on ARCH_DSP
     select COMPONENTS_AW_AUDIO_SYSTEM
+    select COMPONENTS_RPDATA
     select COMPONENTS_XTENSA_HIFI5_NNLIB_LIBRARY
     select COMPONENTS_XTENSA_HIFI5_VFPU_LIBRARY
     default n
     help
```

在Makefile中添加

```
#rpdata
CFLAGS += -Icomponents/common/aw/rpdata/include/
```

**由于核间通讯需要RV核配合，故还需编写RV端控制及接收数据的组件，可以参照编写DSP算法组件的方法编写：** Kconfig：

```kconfig
menu "my rv asr"

config COMPONENTS_MY_RV_ASR
    bool "my RV asr"
    depends on !ARCH_DSP
    select COMPONENTS_RPDATA
    default n
    help
        to do

endmenu
```

(注意是 `!ARCH_DSP`)

其它修改类似第一节内容，不再重复说明； rv 端 menuconfig命令为 `mrtos_menuconfig` rv端执行代码不需要"rpccli dsp"；

通用代码：

```c
#include <rpdata.h>

struct my_rpd_t {
    rpdata_t *rpd; // both
    void *addr; // both
    size_t buf_len; // send
    void (*cb)(void *priv, void *data, unsigned int data_len); // recv
    void *priv; // recv
};

struct my_rpd_cfg_t {
    int dir; // both
    const char *type; // both
    const char *name; // both
    size_t buf_len; // send
    void (*cb)(void *priv, void *data, unsigned int data_len); // recv
    void *priv; // recv
};

static void rpd_ch_deinit(struct my_rpd_t *hdl)
{
    if (hdl->rpd) {
        rpdata_t *rpd = hdl->rpd;
        hdl->cb = NULL;
        hdl->priv = NULL;
        hdl->buf_len = 0;
        hdl->addr = NULL;
        hdl->rpd = NULL;
        rpdata_destroy(rpd);
    }
}

static int rpd_recv_ch_callback(rpdata_t *rpd, void *data, unsigned int data_len)
{
    struct my_rpd_t *hdl = (struct my_rpd_t *)rpdata_get_private_data(rpd);

    if (hdl->cb)
        hdl->cb(hdl->priv, data, data_len);

    return 0;
}

static struct rpdata_cbs rpd_recv_cb = {
    .recv_cb = rpd_recv_ch_callback,
};

static int rpd_recv_ch_init(struct my_rpd_t *hdl, struct my_rpd_cfg_t *cfg)
{
    printf("recv rpd dir:%d, type:%s, name:%s\n", cfg->dir, cfg->type, cfg->name);

    hdl->rpd = rpdata_connect(cfg->dir, cfg->type, cfg->name);
    if (!hdl->rpd) {
        printf("rpdata_connect failed!\n");
        return -1;
    }

    hdl->addr = rpdata_buffer_addr(hdl->rpd);
    if (!hdl->addr) {
        printf("rpdata_buffer_addr failed!\n");
        rpd_ch_deinit(hdl);
        return -1;
    }

    hdl->cb = cfg->cb;
    hdl->priv = cfg->priv;

    rpdata_set_private_data(hdl->rpd, hdl);
    rpdata_set_recv_cb(hdl->rpd, &rpd_recv_cb);
    return 0;
}

static int rpd_send_ch_init(struct my_rpd_t *hdl, struct my_rpd_cfg_t *cfg)
{
    printf("send rpd dir:%d, type:%s, name:%s, buf_len:%u\n", cfg->dir, cfg->type, cfg->name, cfg->buf_len);

    hdl->rpd = rpdata_create(cfg->dir, cfg->type, cfg->name, cfg->buf_len);
    if (!hdl->rpd) {
        printf("rpdata_create failed!\n");
        goto err;
    }

    hdl->addr = rpdata_buffer_addr(hdl->rpd);
    if (!hdl->addr) {
        printf("rpdata_buffer_addr failed!\n");
        goto err;
    }

    hdl->buf_len = cfg->buf_len;

    return 0;
err:
    rpd_ch_deinit(hdl);
    return -1;
}

static int rpd_send(struct my_rpd_t *hdl, void *data)
{
    memcpy(hdl->addr, data, hdl->buf_len);

    rpdata_wait_connect(hdl->rpd);

    return rpdata_send(hdl->rpd, 0, hdl->buf_len);
}

// RV to DSP 控制通道
#define RPD_CTL_TYPE                ("RVtoDSPCtl")
#define RPD_CTL_NAME                ("RVtoDSPCtlCh")
#define RPD_CTL_SIZE                (4)

// DSP to RV 数据通道
#define RPD_DATA_TYPE               ("DSPtoRVData")
#define RPD_DATA_NAME               ("DSPtoRVDataCh")
#define RPD_DATA_SIZE               (64)
```

DSP端代码：

```c
static int g_run = 0;
static void my_rpd_dsp_recv_cb(void *priv, void *data, unsigned int data_len)
{
    printf("%s recv:%d\n", __func__, data_len);

    memcpy(&g_run, data, sizeof(g_run));
}

static void my_rpd_thread(void *arg)
{
    struct my_rpd_t send_ch;
    struct my_rpd_cfg_t send_cfg = {
        .dir = 2,
        .type = RPD_DATA_TYPE,
        .name = RPD_DATA_NAME,
        .buf_len = RPD_DATA_SIZE,
    };
    struct my_rpd_t recv_ch;
    struct my_rpd_cfg_t recv_cfg = {
        .dir = 2,
        .type = RPD_CTL_TYPE,
        .name = RPD_CTL_NAME,
        .cb = my_rpd_dsp_recv_cb,
        .priv = NULL,
    };
    unsigned char data[RPD_DATA_SIZE];
    int i = 0;
    for (i = 0; i < RPD_DATA_SIZE; i++) {
        data[i] = '0' + 1;
    }

    g_run  = 1;

    printf("%s start\n", __func__);

    if (rpd_send_ch_init(&send_ch, &send_cfg)) {
        printf("%s:%u error!\n", __func__, __LINE__);
        // TODO
    }

    if (rpd_recv_ch_init(&recv_ch, &recv_cfg)) {
        printf("%s:%u error!\n", __func__, __LINE__);
        // TODO
    }

    while(g_run) {
        rpd_send(&send_ch, data);
        vTaskDelay(500 / portTICK_PERIOD_MS);
    }

    rpd_ch_deinit(&recv_ch);
    rpd_ch_deinit(&send_ch);
    printf("%s exit\n", __func__);

    vTaskDelete(NULL);
}
```

**RV端代码：**

```c
static int g_run = 0;

static void my_rpd_rv_recv_cb(void *priv, void *data, unsigned int data_len)
{
    printf("%s recv:%d\n", __func__, data_len);
}

static void my_rpd_thread(void *arg)
{
    struct my_rpd_t send_ch;
    struct my_rpd_cfg_t send_cfg = {
        .dir = 3,
        .type = RPD_CTL_TYPE,
        .name = RPD_CTL_NAME,
        .buf_len = RPD_CTL_SIZE,
    };
    struct my_rpd_t recv_ch;
    struct my_rpd_cfg_t recv_cfg = {
        .dir = 3,
        .type = RPD_DATA_TYPE,
        .name = RPD_DATA_NAME,
        .cb = my_rpd_rv_recv_cb,
        .priv = NULL,
    };
    g_run = 1;

    printf("%s start\n", __func__);
    if (rpd_send_ch_init(&send_ch, &send_cfg)) {
        printf("%s:%u error!\n", __func__, __LINE__);
        // TODO
    }

    if (rpd_recv_ch_init(&recv_ch, &recv_cfg)) {
        printf("%s:%u error!\n", __func__, __LINE__);
        // TODO
    }

    while(1) {
        int run = g_run;
        rpd_send(&send_ch, &run);
        if (!run)
            break;
        vTaskDelay(500 / portTICK_PERIOD_MS);
    }

    rpd_ch_deinit(&recv_ch);
    rpd_ch_deinit(&send_ch);
    printf("%s exit\n", __func__);

    vTaskDelete(NULL);
}
```

RV 端和 DSP 端各自创建处理线程；

DSP 定时将数据发给 RV，RV 定时将运行标志发给 DSP；

RV 端修改 g_run 的值为 0，RV 将 g_run 的值发送给 DSP 后退出，DSP 收到 g_run 也将退出；

## DUMP 数据到PC

**DSP 端没有文件系统，所以数据需要先通过核间通讯发送给 RV 核，再由 RV 核通过某种方式保存或发送；**

在 **RV核上** 可以使用 `adb forward` 实时将数据传输到 `PC`，或者也可以保存数据到 `flash`，然后使用 `adb pull` 到 PC；

**本节的代码都是跑在RV核上的**；

可以使用现有封装接口：

```c
// file_path和port只需指定一个即可，另一个填NULL或0
// 指定file_path表示保存数据到flash，指定port表示提供adb传输数据到PC
void *data_save_create(const char *name, const char *file_path, int port);
void data_save_destroy(void *_hdl);
int data_save_request(void *_hdl, void *data, int size, int timeout_ms);
// 需要保存后续数据到另一文件时调用，用于分割音频数据
int data_save_flush(void *_hdl, int timeout_ms);
```

可以复制 `lichee/rtos-components/aw/asr_demo/inc/data_save.h` 和 `lichee/rtos-components/aw/asr_demo/src/data_save.c` 到自己的组件中使用，或者选上 `CONFIG_COMPONENTS_ASR_DEMO` 时可以直接使用；

1. 通过标准文件操作接口保存到`flash`或`data_save`组件指定文件路径保存到 `flash`
2. 按以下步骤通过 `adb forward` 传输数据到 `PC`：

① 设备端：

```
reboot(重启设备)
（等待设备重启完成）
adb shell af -p [代码中填写的port] -r
```

② PC端：

```
adb forward tcp:11112 tcp:[代码中填写的port]
adb_record.py（或adb_record_3.py，2个文件都在lichee/rtos-components/aw/asr_demo/tools/，接收到的数据会保存在脚本执行目录下）
```

③ 设备端开始调用`data_save`接口创建通道并发送数据（可以参照第一节添加start和stop传输的命令）