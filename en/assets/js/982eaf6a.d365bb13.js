"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[783],{2414:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=d(5893),i=d(1151);const r={},c="RTOS \u5b58\u50a8\u7b80\u4ecb",l={id:"developer-guide/part1/chapter12",title:"RTOS \u5b58\u50a8\u7b80\u4ecb",description:"FreeRTOS \u8bbe\u8ba1\u7684\u5b8c\u6574\u7684 IO \u6808\u5305\u62ec iobox\u3001vfs\u3001fs\u3001blkpart\u3001flash driver\u3002\u8003\u8651\u5230 RTOS \u6bd4 Linux \u66f4\u7cbe\u5c0f\u9ad8\u6548\u548c Flash \u4e0d\u9700\u8981\u8003\u8651\u5bfb\u5740\u7684\u7279\u70b9\uff0c\u5e76\u6ca1\u53c2\u8003 Linux \u8bbe\u8ba1 Page Cache \u548c IO\u8c03\u5ea6\u5668\uff0c\u4f46\u5728 Flash driver \u6dfb\u52a0\u4e86 Cache \u4ee5\u52a0\u901f\u6027\u80fd\u3002",source:"@site/docs/developer-guide/part1/chapter12.md",sourceDirName:"developer-guide/part1",slug:"/developer-guide/part1/chapter12",permalink:"/en/developer-guide/part1/chapter12",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/R128-Docs/tree/main/docs/developer-guide/part1/chapter12.md",tags:[],version:"current",frontMatter:{},sidebar:"classpartoneSidebar",previous:{title:"RTOS \u5f02\u6784\u591a\u6838\u901a\u4fe1",permalink:"/en/developer-guide/part1/chapter11"},next:{title:"RTOS \u591a\u5a92\u4f53\u7f16\u7801",permalink:"/en/developer-guide/part1/chapter2"}},t={},h=[{value:"iobox\u7b80\u4ecb",id:"iobox\u7b80\u4ecb",level:2},{value:"VFS\u7b80\u4ecb",id:"vfs\u7b80\u4ecb",level:2},{value:"FS\u7b80\u4ecb",id:"fs\u7b80\u4ecb",level:2},{value:"spiffs \u548c littlefs",id:"spiffs-\u548c-littlefs",level:3},{value:"\u6253\u5305FS\u8d44\u6e90\u6587\u4ef6",id:"\u6253\u5305fs\u8d44\u6e90\u6587\u4ef6",level:3},{value:"devfs",id:"devfs",level:3},{value:"\u6587\u4ef6\u64cd\u4f5c\u65b9\u5f0f",id:"\u6587\u4ef6\u64cd\u4f5c\u65b9\u5f0f",level:2},{value:"\u666e\u901a\u6587\u4ef6\u8bfb\u5199\u63a5\u53e3",id:"\u666e\u901a\u6587\u4ef6\u8bfb\u5199\u63a5\u53e3",level:3},{value:"\u8bbe\u5907\u5206\u533a\u6587\u4ef6\u64cd\u4f5c",id:"\u8bbe\u5907\u5206\u533a\u6587\u4ef6\u64cd\u4f5c",level:3},{value:"blkpart\u7b80\u4ecb",id:"blkpart\u7b80\u4ecb",level:2},{value:"Flash \u9a71\u52a8",id:"flash-\u9a71\u52a8",level:2},{value:"SPI NOR",id:"spi-nor",level:3},{value:"Cache",id:"cache",level:4},{value:"\u5199\u4fdd\u62a4",id:"\u5199\u4fdd\u62a4",level:4},{value:"\u65b0\u7269\u6599\u7684\u652f\u6301\u548c\u6d4b\u8bd5",id:"\u65b0\u7269\u6599\u7684\u652f\u6301\u548c\u6d4b\u8bd5",level:4},{value:"SPI NAND",id:"spi-nand",level:3},{value:"eMMC / SD Card / SD Nand \u9a71\u52a8",id:"emmc--sd-card--sd-nand-\u9a71\u52a8",level:2}];function x(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rtos-\u5b58\u50a8\u7b80\u4ecb",children:"RTOS \u5b58\u50a8\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:["FreeRTOS \u8bbe\u8ba1\u7684\u5b8c\u6574\u7684 IO \u6808\u5305\u62ec ",(0,s.jsx)(n.strong,{children:"iobox\u3001vfs\u3001fs\u3001blkpart\u3001flash driver"}),"\u3002\u8003\u8651\u5230 RTOS \u6bd4 Linux \u66f4\u7cbe\u5c0f\u9ad8\u6548\u548c Flash \u4e0d\u9700\u8981\u8003\u8651\u5bfb\u5740\u7684\u7279\u70b9\uff0c\u5e76\u6ca1\u53c2\u8003 Linux \u8bbe\u8ba1 Page Cache \u548c IO\u8c03\u5ea6\u5668\uff0c\u4f46\u5728 Flash driver \u6dfb\u52a0\u4e86 Cache \u4ee5\u52a0\u901f\u6027\u80fd\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u7cfb\u7edf\u4e2d\uff0c\u90fd\u4f1a\u4e3a Flash \u8bbe\u5907\u4e13\u95e8\u8bbe\u8ba1 MTD \u5c42\uff0c\u8d77\u5230\u5bf9 flash driver \u8fdb\u4e00\u6b65\u5c01\u88c5\u3002\u5728 RTOS \u7684 IO \u6808\u4e2d\uff0cblkpart \u5c31\u5b9e\u73b0\u4e86MTD\u5c42\u7684\u529f\u80fd\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u5b9e\u73b0\u4e86\u5206\u533a\u89e3\u6790\u548c\u64cd\u4f5c\u3002\u4e3a\u4e86\u517c\u5bb9\u548c\u7b26\u5408\u89c4\u8303\uff0c\u5728\u5c06\u6765\u7684\u8fed\u4ee3\u4e2d\u53ef\u4ee5\u8003\u8651\u628a blkpart \u62c6\u5206\u51fa MTD \u5c42\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"iobox\u7b80\u4ecb",children:"iobox\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:["iobox \u662f\u5728 RTOS \u5b9e\u73b0\u7684\u4e00\u5957\u7b80\u5355\u7684 IO \u547d\u4ee4\u7684\u96c6\u5408\u3002\u5176\u5728 ",(0,s.jsx)(n.code,{children:"menuconfig"})," \u4e2d\u7684\u8def\u5f84\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"System components\n    |-> aw components\n        |-> iobox\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u547d\u4ee4"}),(0,s.jsx)(n.th,{children:"\u529f\u80fd"}),(0,s.jsx)(n.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ls"})}),(0,s.jsx)(n.td,{children:"\u5217\u51fa\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ls /data"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ll"})}),(0,s.jsx)(n.td,{children:"\u7b49\u6548\u4e8els -lk"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ll /data"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cat"})}),(0,s.jsx)(n.td,{children:"\u8bfb\u53d6\u5e76\u6253\u5370\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cat /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hexdump"})}),(0,s.jsx)(n.td,{children:"\u5341\u516d\u8fdb\u5236\u663e\u793a\u6587\u4ef6\u5185\u5bb9"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hexdump /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hd"})}),(0,s.jsx)(n.td,{children:"\u7b49\u6548\u4e8ehexdump -C"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hd /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cp"})}),(0,s.jsx)(n.td,{children:"\u590d\u5236\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cp /data/demo /data/demo1"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mv"})}),(0,s.jsx)(n.td,{children:"\u91cd\u547d\u540d\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mv /data/demo /data/demo1"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rm"})}),(0,s.jsx)(n.td,{children:"\u5220\u9664\u6587\u4ef6"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rm /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"unlink"})}),(0,s.jsx)(n.td,{children:"\u53d6\u6d88\u786c\u94fe\u63a5(\u7b49\u6548\u4e8e\u5220\u9664\u6587\u4ef6)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"unlink /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"link"})}),(0,s.jsx)(n.td,{children:"\u521b\u5efa\u786c\u94fe\u63a5"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"link /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rwcheck"})}),(0,s.jsx)(n.td,{children:"\u8bfb\u5199\u6d4b\u8bd5"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rwcheck -d /data -s 256k -s 1000000"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rwspeed"})}),(0,s.jsx)(n.td,{children:"\u987a\u5e8f\u8bfb\u5199\u6027\u80fd\u6d4b\u8bd5"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rwspeed -d /data -s 128k -t 3"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vi"})}),(0,s.jsx)(n.td,{children:"vi\u6587\u672c\u7f16\u8f91\u5668"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"vi /data/demo"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"df"})}),(0,s.jsx)(n.td,{children:"\u663e\u793afs\u4fe1\u606f"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"df /data"})})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"-h\u53c2\u6570\u53ef\u4ee5\u83b7\u53d6\u8be6\u7ec6\u7684\u4f7f\u7528\u8bf4\u660e"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vfs\u7b80\u4ecb",children:"VFS\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:["VFS \u7c7b\u4f3c\u4e0e Linux VFS\uff0c\u662f\u4e3a\u6240\u6709\u7684 FS \u63d0\u4f9b\u7edf\u4e00\u7684\u6807\u51c6\uff0c\u5411\u4e0a\u6ce8\u518c\u548c\u63d0\u4f9b\u7cfb\u7edf\u8c03\u7528\u3002\u6b63\u56e0\u4e3a\u6709 VFS \u7684\u5b58\u5728\uff0c\u7528\u6237\u624d\u53ef\u4ee5\u5ffd\u7565\u6587\u4ef6\u7cfb\u7edf\u7684\u5dee\u5f02\uff0c\u53ea\u9700\u8981\u8c03\u7528\u89c4\u8303\u7684 IO \u51fd\u6570\u5373\u53ef\u5b9e\u73b0 IO \u64cd\u4f5c\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"read()"}),"\uff0c",(0,s.jsx)(n.code,{children:"ioctl()"}),"\uff0c",(0,s.jsx)(n.code,{children:"rename()"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["RTOS \u7684 VFS \u79fb\u690d\u81ea\u7b2c\u4e09\u65b9\u7684\u5f00\u6e90 VFS\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"menuconfig"})," \u7684\u9009\u62e9\u8def\u5f84\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"System components\n    |-> thirdparty components\n        |-> Virtual Filesystem\n"})}),"\n",(0,s.jsx)(n.h2,{id:"fs\u7b80\u4ecb",children:"FS\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.h3,{id:"spiffs-\u548c-littlefs",children:"spiffs \u548c littlefs"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u524d\uff0cRTOS \u652f\u6301 spiffs \u548c littlefs \u4e24\u79cd\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,s.jsxs)(n.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c",(0,s.jsx)(n.strong,{children:"\u63a8\u8350\u4f7f\u7528littlefs"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"spiffs"})," \u5728 ",(0,s.jsx)(n.code,{children:"menuconfig"})," \u7684\u8def\u5f84\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"System components\n    |-> thirdparty components\n        |-> SPIFFS Filesystem\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"littlefs"})," \u5728 ",(0,s.jsx)(n.code,{children:"menuconfig"})," \u7684\u8def\u5f84\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"System components\n    |-> thirdparty components\n        |-> LittleFS Filesystem\n            |-> LFS Codes Version (v2.2.1)\n"})}),"\n",(0,s.jsx)(n.p,{children:"RTOS \u4e2d\u6682\u4e0d\u652f\u6301 Linux \u4e0a\u5e38\u89c1\u7684 flash \u6587\u4ef6\u7cfb\u7edf\uff0c\u4f8b\u5982 yaffs\uff0cjffs2\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a \u5f00\u6e90\u534f\u8bae \u548c \u4f53\u91cf\u81c3\u80bf \u7684\u8003\u8651\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0e Linux \u76f8\u4f3c\uff0c\u6587\u4ef6\u7cfb\u7edf\u9700\u8981\u4f7f\u7528\u5fc5\u987b\u5148\u6302\u8f7d\u3002littlefs \u548c spiffs\u63d0\u4f9b\u7684\u6302\u8f7d/\u5378\u8f7d\u63a5\u53e3\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#include <spiffs.h>\nint spiffs_mount(const char *source, const char *target, bool format);\nint spiffs_umount(const char *target);\n\n#incldue <littlefs.h>\nint littlefs_mount(const char *dev, const char *mnt, bool format);\nint littlefs_umount(const char *mnt);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6253\u5305fs\u8d44\u6e90\u6587\u4ef6",children:"\u6253\u5305FS\u8d44\u6e90\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9879\u76ee\u4e2d\uff0c\u5982\u679c\u9700\u8981\u5728\u7f16\u8bd1\u65f6\u521b\u5efa\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u8d44\u6e90\u955c\u50cf\u5305\uff0c\u5728\u70e7\u5f55\u7684\u65f6\u5019\u76f4\u63a5\u5199\u5165\u5206\u533a\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4fee\u6539\u5206\u533a\u6587\u4ef6\uff0c\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"downloadfile"})," \u914d\u7f6e"]}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u8d44\u6e90\u76ee\u5f55\u521b\u5efa\u4e0e\u5206\u533a\u540d\u540c\u540d\u7684\u6587\u4ef6\u5939\uff0c\u5e76\u628a\u8d44\u6e90\u6587\u4ef6\u653e\u5165\u6b64\u6587\u4ef6\u5939"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8e RTOS \u7cfb\u7edf\u9ed8\u8ba4\u4f7f\u7528 littlefs\uff0c\u56e0\u6b64\u521b\u5efa\u7684\u8d44\u6e90\u6587\u4ef6\u5305\u4e5f\u662f\u57fa\u4e8e littlefs \u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u9700\u8981\u5728UDISK\u5206\u533a\u521b\u5efa\u8d44\u6e90\u5305\uff0c\u53ef\u4ee5\u8fd9\u4e48\u6539\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"sys_partition{_NOR}.fex"})," \u4e2d\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"UDISK"})," \u5206\u533a\u9879\u4e2d\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"downloadfile"})," \u914d\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"data_"})," \u5f00\u5934\u7684\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[partition]\n     name         = UDISK\n     downloadfile = "data_udisk.fex"\n     user_type    = 0x8100\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u80fd\u4e86 ",(0,s.jsx)(n.code,{children:"CONFIG_XIP"}),"\uff0c\u5219\u8be5\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\u4e3a",(0,s.jsx)(n.code,{children:"sys_partition_xip_{_NOR}.fex"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8d44\u6e90\u6587\u4ef6\u540d\u5fc5\u987b\u4ee5data_\u5f00\u5934\uff0c\u8fd9\u662f\u89e6\u53d1\u811a\u672c\u6253\u5305\u8d44\u6e90\u6587\u4ef6\u7684\u6807\u8bc6\u3002\u5176\u4f59\u7684\u540d\u5b57\u4e0d\u9650\u5236\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6b65\uff0c\u5728",(0,s.jsx)(n.code,{children:"tina-rt/tools/data"}),"\u4e2d\u521b\u5efa\u4e0e",(0,s.jsx)(n.strong,{children:"\u5206\u533a\u540d"}),"\u76f8\u540c\u540d\u5b57\u7684\u6587\u4ef6\u5939\uff0c\u4f8b\u5982"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ mkdir -p board/<chip_name>/<project_name>/data/UDISK\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5e76\u628a\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u8fdb\u53bb\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"devfs",children:"devfs"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 RTOS \u91cc\uff0c\u6709\u5b9e\u73b0 devfs \u7684\u8bbe\u5907\u6587\u4ef6\u7cfb\u7edf\u3002\u6b63\u56e0\u4e3a ",(0,s.jsx)(n.code,{children:"devfs"})," \u7684\u5b58\u5728\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"/dev"})," \u76ee\u5f55\u4e0b\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u8bbe\u5907\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"OTA\u66f4\u65b0\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\u8bbe\u5907\u8282\u70b9\uff0c\u4ee5\u5b9e\u73b0\u5206\u533a\u7ea7\u522b\u7684\u66f4\u65b0\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u9a71\u52a8\u53ef\u80fd\u5728 ",(0,s.jsx)(n.code,{children:"/dev"})," \u4e0b\u6ce8\u518c\u4e86 \u8bbe\u5907\u8282\u70b9\u548c\u5206\u533a\u540d\u8282\u70b9\uff0c\u4e5f\u53ef\u80fd\u5728 ",(0,s.jsx)(n.code,{children:"/dev"})," \u4e0b\u6ce8\u518c\u4e86\u8bbe\u5907\u8282\u70b9\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"/dev/by-name"})," \u4e0b\u6ce8\u518c\u522b\u540d\u8282\u70b9\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/dev/UDISK\n/dev/by-name/UDISK\n/dev/nand0p5\n/dev/NOR\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"ls /dev"})," \u547d\u4ee4\u786e\u8ba4\u9a71\u52a8\u628a\u8bbe\u5907\u6ce8\u518c\u5728\u54ea\u91cc\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6587\u4ef6\u64cd\u4f5c\u65b9\u5f0f",children:"\u6587\u4ef6\u64cd\u4f5c\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.h3,{id:"\u666e\u901a\u6587\u4ef6\u8bfb\u5199\u63a5\u53e3",children:"\u666e\u901a\u6587\u4ef6\u8bfb\u5199\u63a5\u53e3"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u7684 Posix \u64cd\u4f5c\u63a5\u53e3\uff0c\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ssize_t read (int __fd, void *__buf, size_t __nbytes);\nssize_t write (int __fd, const void *__buf, size_t __n);\nint close (int __fd);\nint open (char *name, int flag);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u4f7f\u7528 C \u5e93\u7684\u6587\u4ef6\u64cd\u4f5c\u63a5\u53e3\uff0c\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"size_t fread (void *__restrict __ptr, size_t __size, size_t __n, FILE *__restrict __stream);\nsize_t fwrite (const void *__restrict __ptr, size_t __size, size_t __n, FILE *__restrict __s);\nFILE *fopen (const char *__restrict __filename, const char *__restrict __modes);\nint fclose (FILE *__stream);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bbe\u5907\u5206\u533a\u6587\u4ef6\u64cd\u4f5c",children:"\u8bbe\u5907\u5206\u533a\u6587\u4ef6\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.p,{children:"\u5b58\u50a8\u5206\u533a\u8bbe\u5907\u8282\u70b9\u53ef\u4ee5\u88ab\u5f53\u524d\u4e00\u4e2a\u666e\u901a\u6587\u4ef6\u6765\u8bfb\u5199\uff0c\u5982\u4ee5\u4e0b\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// \u8be5\u4f8b\u5b50\u53ef\u7528\u4e8e\u8bfb\u53d6 env \u5206\u533a\u4e2d\u7684\u5185\u5bb9\nchar buffer[32];\nint fd = open("/dev/env", O_RDONLY);\nread(fd, buffer, sizeof(buffer));\nclose(fd);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"blkpart\u7b80\u4ecb",children:"blkpart\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u4e0a\u6240\u5c5e\uff0cRTOS \u8bbe\u8ba1\u7684 blkpart \u7c7b\u4f3c\u4e0e MTD\uff0c\u8d77\u5230\u5bf9 flash driver \u8fdb\u4e00\u6b65\u5c01\u88c5\u7684\u529f\u80fd\uff0c\u6b64\u5916\u8fd8\u5b9e\u73b0\u4e86\u5206\u533a\u89e3\u6790\u548c\u5206\u533a\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"blkpart\u4e0eMTD\u8bbe\u8ba1\u7684\u51fa\u53d1\u70b9\u6709\u4e9b\u4e0d\u540c\uff0cblkpart\u5982\u5176\u540d\uff0c\u4e3b\u8981\u662f\u628a\u5b58\u50a8\u7a7a\u95f4\u6309\u5757\u8bbe\u5907\u5206\u533a\u7684\u903b\u8f91\u7ba1\u7406\uff0c\u800cMTD\u66f4\u591a\u53ea\u662f\u89c4\u8303flash\u9a71\u52a8\u7684\u6ce8\u518c\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u671f\u5f85\u5c06\u6765\u7684\u8fed\u4ee3\u4e2d\u80fd\u5bf9blkpart\u8fdb\u4e00\u6b65\u89c4\u8303\uff0c\u62c6\u79bb\u51faMTD\u5c42\uff0c\u8ba9\u5f00\u53d1\u8005\u66f4\u597d\u7406\u89e3\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["blkpart\u5728 ",(0,s.jsx)(n.code,{children:"menuconfig"})," \u7684\u8def\u5f84\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"System components\n    |-> aw components\n        |-> Block Partition\n            |-> Partition Table Size (KB) # \u914d\u7f6eGPT\u5206\u533a\u8868\u7684\u5b58\u50a8\u7a7a\u95f4\u5927\u5c0f\n            |-> Logical Partition Start Address (KB) # \u5206\u533a\u8868\u8d77\u4f5c\u7528\u7684\u5f00\u59cb\u504f\u79fb\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9a71\u52a8\u901a\u8fc7\u8c03\u7528\u4ee5\u4e0b\u63a5\u53e3\u6ce8\u518c\u548c\u6ce8\u9500\u8bbe\u5907\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"int add_blkpart(struct blkpart *blk);\nvoid del_blkpart(struct blkpart *blk);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u518c\u8bbe\u5907\u540e\uff0cblkpart\u4f1a\u81ea\u884c\u89e3\u6790\u5206\u533a\uff0c\u5e76\u5411\u4e0a\u6ce8\u518c\u3002\u4e0a\u5c42\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u8bbf\u95ee\u8bbe\u5907\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ssize_t blkpart_read(struct part *, uint32_t, uint32_t, void *);\nssize_t blkpart_write(struct part *, uint32_t, uint32_t, const void *);\nint blkpart_erase(struct part *, uint32_t, uint32_t);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u51e0\u4e2a\u63a5\u53e3\u5c31\u7c7b\u4f3c\u4e8eMTD\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"mtd_read/mtd_write/mtd_erase"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"flash-\u9a71\u52a8",children:"Flash \u9a71\u52a8"}),"\n",(0,s.jsx)(n.p,{children:"RTOS \u4e3b\u8981\u652f\u6301 SPINOR \u548c SPINAND \u4e24\u7c7b\u5b58\u50a8\u4ecb\u8d28\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"spi-nor",children:"SPI NOR"}),"\n",(0,s.jsx)(n.p,{children:"NOR \u9a71\u52a8\u76f8\u5bf9\u7b80\u5355\uff0c\u53ea\u662f\u6309\u7167\u534f\u8bae\u901a\u8fc7 spi \u53d1\u9001\u64cd\u4f5c\u6307\u4ee4\u3002\u5176\u4e2d\u4e3a\u4e86\u52a0\u5feb\u6027\u80fd\uff0c\u5728 NOR \u9a71\u52a8\u4e0a\u6dfb\u52a0\u4e86\u7b80\u5355\u7684Cache\u5c42\u3002\u90e8\u5206 Flash \u7269\u6599\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e9b\u6389\u7535\u573a\u666f\u4e0b\u4f1a\u6389\u7801\u95ee\u9898\uff0c\u56e0\u6b64\u82e5\u8be5\u7269\u6599\u652f\u6301\u5199\u4fdd\u62a4\u529f\u80fd\uff0c\u5219\u53ef\u4ee5\u4f7f\u80fd\u5199\u4fdd\u62a4\u6765\u907f\u514d\u6389\u7535\u573a\u666f\u4e0b\u51fa\u73b0\u6389\u7801\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"cache",children:"Cache"}),"\n",(0,s.jsx)(n.p,{children:"Cache \u5c42\u7684\u4ee3\u7801\uff0c\u662f\u4e3a\u4e86\u5c3d\u53ef\u80fd\u5408\u5e76\u8fde\u7eed\u5199\u5165\u7684\u6570\u636e\uff0c\u518d\u4e00\u6b21\u6027\u5199\u5165\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["NOR \u5199\u4e4b\u524d\u5fc5\u987b\u5148\u64e6\u9664\uff0c\u666e\u904d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Sector Erase"}),"\uff0c",(0,s.jsx)(n.code,{children:"32KB Block Erase"})," \uff0c",(0,s.jsx)(n.code,{children:"64KB Block Erase"})," \u548c ",(0,s.jsx)(n.code,{children:"Chip Erase"}),"\u7684\u56db\u79cd\u64e6\u9664\u65b9\u5f0f\u3002\u67e5\u770b NOR \u7684\u89c4\u683c\u4e66\u53d1\u73b0\uff0c\u9664\u4e86\u64e6\u9664\u5927\u5c0f\u4e0d\u4e00\u81f4\u5916\uff0c\u64e6\u9664\u6027\u80fd\u4e5f\u6709\u5f88\u5927\u5dee\u522b\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5382\u5bb6"}),(0,s.jsx)(n.th,{children:"\u5199(ms)"}),(0,s.jsx)(n.th,{children:"4K\u64e6\u9664(ms)"}),(0,s.jsx)(n.th,{children:"32K\u64e6\u9664(ms)"}),(0,s.jsx)(n.th,{children:"64K\u64e6\u9664(ms)"}),(0,s.jsx)(n.th,{children:"\u5168\u76d8\u64e6\u9664(s)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MXIC"}),(0,s.jsx)(n.td,{children:"0.33~1.2"}),(0,s.jsx)(n.td,{children:"25~120"}),(0,s.jsx)(n.td,{children:"140~650"}),(0,s.jsx)(n.td,{children:"250~650"}),(0,s.jsx)(n.td,{children:"26~60"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Winbond"}),(0,s.jsx)(n.td,{children:"0.7~3"}),(0,s.jsx)(n.td,{children:"45~400"}),(0,s.jsx)(n.td,{children:"120~1600"}),(0,s.jsx)(n.td,{children:"150~2000"}),(0,s.jsx)(n.td,{children:"40~200"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GD"}),(0,s.jsx)(n.td,{children:"0.5~2.4"}),(0,s.jsx)(n.td,{children:"50~400"}),(0,s.jsx)(n.td,{children:"160~800"}),(0,s.jsx)(n.td,{children:"300~1200"}),(0,s.jsx)(n.td,{children:"50~120"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ESMT"}),(0,s.jsx)(n.td,{children:"0.5~3"}),(0,s.jsx)(n.td,{children:"40~300"}),(0,s.jsx)(n.td,{children:"200~1000"}),(0,s.jsx)(n.td,{children:"300~2000"}),(0,s.jsx)(n.td,{children:"60~200"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c\u64e6\u9664\u6027\u80fd ",(0,s.jsx)(n.code,{children:"Chip Erase > 64KB Block Erase > 32KB Block Erase > Sector Erase"}),"\u3002\u800c\u4e00\u6b21\u5199\u64cd\u4f5c\u7684\u8017\u65f6\u4e3b\u8981\u662f\u64e6\u9664\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u4f18\u5316\u5199\u6027\u80fd\uff0c\u9700\u8981\u5c3d\u53ef\u80fd\u4f7f\u7528\u66f4\u5927\u7684\u64e6\u9664\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8003\u8651\u5230\u6587\u4ef6\u7cfb\u7edf\u7684\u7a7a\u95f4\u6d6a\u8d39\u60c5\u51b5\uff0c\u6587\u4ef6\u7cfb\u7edf\u9700\u8981\u91c7\u7528 4K \u7684\u5757\u5927\u5c0f\uff0c\u8fdb\u4e00\u6b65\u5bfc\u81f4\u9a71\u52a8\u5fc5\u987b ",(0,s.jsx)(n.code,{children:"Sector Erase"}),", \u4e5f\u5c31\u662f4K\u64e6\u9664\u3002\u8fd9\u6837\u7684\u77db\u76fe\u5bfc\u81f4 NOR \u7684\u5199\u6027\u80fd\u504f\u4f4e\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u521b\u5efa\u4e86 64K Block \u5927\u5c0f\u7684 Cache, \u6bcf\u4e00\u6b21\u6587\u4ef6\u7cfb\u7edf\u7684\u5199\u548c\u64e6\u9664\u64cd\u4f5c\u90fd\u7f13\u5b58\u8d77\u6765\uff0c\u5728\u5408\u9002\u65f6\u673a\u4e00\u6b21\u5199\u64e6\u9664\u548c\u5199\u5165\u3002\u4e3a\u4e86\u9632\u6b62 Cache \u7684\u5b58\u5728\u5bfc\u81f4\u6587\u4ef6\u7cfb\u7edf\u4e22\u6570\u636e\uff0c\u5408\u9002\u65f6\u673a\u7684\u9009\u62e9\u975e\u5e38\u91cd\u8981\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5b9e\u73b0\u4e2d\u5145\u5206\u8003\u8651\u7684 littlefs \u7684\u673a\u5236\uff0c\u5728\u4ee5\u4e0b\u65f6\u673a\u5199\u5165\u4fdd\u8bc1\u4e86\u4e0d\u4f1a\u4e22\u5931\u6570\u636e\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"FS\u4e3b\u52a8\u8c03\u7528 sync \u8981\u6c42\u56de\u5237\u6570\u636e\u65f6"}),"\n",(0,s.jsx)(n.li,{children:"Cache\u7f13\u5b58\u7684\u6570\u636e\u6ee1\u8db364K Block\u6216\u800532K Block\u4e86"}),"\n",(0,s.jsx)(n.li,{children:"FS \u5199\u5165\u7684\u5730\u5740\u8de8\u4e86\u53e6\u5916\u4e00\u4e2aBlock"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4ed6\u6587\u4ef6\u7cfb\u7edf\u7684\u652f\u6301\uff0c\u9700\u8981\u7ed3\u5408\u6587\u4ef6\u7cfb\u7edf\u7684\u5b9e\u73b0\uff0c\u4ee5\u8bc4\u4f30\u662f\u5426\u4f1a\u4e22\u5931\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u5199\u4fdd\u62a4",children:"\u5199\u4fdd\u62a4"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6d4b\u8bd5\u4e2d\u53d1\u73b0\uff0c\u6389\u7535\u65f6\u5982\u679c\u4e3b\u63a7\u4f9d\u7136\u5728\u53d1\u9001\u6570\u636e\uff0cNOR\u5f88\u5927\u6982\u7387\u4f1a\u9020\u6210\u8bef\u5199\uff0c\u628a\u6570\u636e\u5199\u5165\u5176\u4ed6\u5730\u5740\uff0c\u5bfc\u81f4\u6570\u636e\u88ab\u635f\u574f\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9664\u4e86\u786c\u4ef6\u5b9e\u73b0\u6389\u7535\u65f6\u9a6c\u4e0a\u590d\u4f4d\u7684\u65b9\u6cd5\u5916\uff0c\u8f6f\u4ef6\u4e0a\u4e5f\u53ef\u4ee5\u4f7f\u80fd\u5199\u4fdd\u62a4\uff0c\u8ba9NOR\u5728\u8bef\u5199\u65f6\u65e0\u6cd5\u5199\u5165\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u53d1\u73b0\u7684\u5199\u4fdd\u62a4\u673a\u5236\u6709\u4e24\u79cd\uff0c\u4e00\u4e2a\u662f\u533a\u95f4\u4fdd\u62a4\uff0c\u4e00\u4e2a\u662f\u72ec\u7acb\u5757\u4fdd\u62a4\uff0c\u4e24\u8005\u7684\u5dee\u522b\u4e3b\u8981\u662f\u4fdd\u62a4\u548c\u89e3\u4fdd\u62a4\u7684\u6700\u5c0f\u9897\u7c92\u4e0d\u540c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u533a\u95f4\u4fdd\u62a4(Status Register Memory Protection, \u6216\u63cf\u8ff0\u4e3abp\u5199\u4fdd\u62a4\uff0cBlock Protect\uff0cBlock Lock protection mode\uff0cprotect area\u7b49)\u6309\u4ece\u4f4e\u6216\u9ad8\u5730\u5740\u5f00\u59cb\u7684\u4e00\u6bb5\u8fde\u7eed\u7a7a\u95f4\u4fdd\u62a4\u3002\u4ee5 16M \u5bb9\u91cf\u7684NOR\u4e3a\u4f8b\uff0c\u914d\u7f6e\u4e3a\u4ece\u4f4e\u5730\u5740\u5f00\u59cb\u76848M\u7a7a\u95f4\uff0c\u53ef\u5b9e\u73b00-8M\u7684\u7a7a\u95f4\u65e0\u6cd5\u5199\u5165\uff0c\u4f46\u65e0\u6cd5\u4fdd\u62a4 8-16M \u7684\u7a7a\u95f4\u3002\u4e0d\u540c\u5382\u5bb6\u5212\u5206\u7684\u4fdd\u62a4\u533a\u95f4\u53ef\u80fd\u6709\u7a0d\u8bb8\u4e0d\u540c\uff0c\u4f46\u90fd\u65e0\u6cd5\u505a\u5230\u7cbe\u7ec6\u4fdd\u62a4\u3002\u4f8b\u5982\u5982\u679c\u9700\u8981\u5199\u7b2c7M\u5730\u5740\u7684\u6570\u636e\uff0c\u6b64\u65f6\u53ea\u80fd\u628a\u4fdd\u62a4\u8303\u56f4\u7f29\u51cf\u4e3a 0-4M\uff0c\u4f7f\u5f97 4-16M \u53ef\u5199\uff0c\u6b64\u65f6\u4f9d\u7136\u4f1a\u6709\u5927\u6982\u7387\u4f1a\u8bef\u5199\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u72ec\u7acb\u5757\u4fdd\u62a4(Individual Block Memory Protect\uff0c\u6216\u63cf\u8ff0\u4e3aIndividual Sector Protection mode\u7b49)\u662f\u4ee5\u5757\u4e3a\u5355\u4f4d\u5355\u72ec\u63a7\u5236\u662f\u5426\u4fdd\u62a4\u3002\u4e00\u822c\u800c\u8a00\uff0c\u5757\u5927\u5c0f\u662f64K\uff0c\u5373\u4e00\u6b21\u53ef\u4ee5\u505a\u5230\u53ea\u89e3\u4fdd\u62a464K\u7684\u5c0f\u8303\u56f4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u7406\u8bba\u5206\u6790\uff0c\u72ec\u7acb\u5757\u4fdd\u62a4\u7684\u6389\u7535\u8bef\u5199\u98ce\u9669\u8fdc\u6bd4\u533a\u95f4\u4fdd\u62a4\u5c0f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u542f\u7528\u5199\u4fdd\u62a4\u529f\u80fd\uff0c\u8fd8\u9700\u8981\u8003\u8651\u9891\u7e41\u4fdd\u62a4\u4e0e\u89e3\u4fdd\u62a4\u4f1a\u5e26\u6765\u591a\u5927\u7684\u6027\u80fd\u635f\u5931\u548c\u5bff\u547d\u635f\u5931\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u533a\u95f4\u4fdd\u62a4\u4fee\u6539\u7684\u72b6\u6001\u5bc4\u5b58\u5668\u8ddfNOR\u4e00\u6837\uff0c\u53ea\u670910W\u6b21\u7684\u64e6\u5199\u5bff\u547d\uff0c\u4e14\u5199\u5165\u65f6\u95f4\u5728ms\u7ea7\u522b\u3002\u5982\u679c\u4f7f\u7528\u533a\u95f4\u4fdd\u62a4\uff0c\u9891\u7e41\u7684\u4fee\u6539\u4fdd\u62a4\u533a\u95f4\uff0c\u4f1a\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\uff0c\u4e14\u4f1a\u52a0\u901f\u72b6\u6001\u5bc4\u5b58\u5668\u7684\u78e8\u635f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u72ec\u7acb\u5757\u4fdd\u62a4\u4fee\u6539\u7684\u662fSRAM\u72b6\u6001\u4f4d\uff0c\u65e0\u660e\u663e\u64e6\u5199\u5bff\u547d\u9650\u5236\uff0c\u4e14\u5199\u5165\u65f6\u95f4\u5728ns\u7ea7\u522b\uff0c\u5373\u4f7f\u9891\u7e41\u4fee\u6539\u4fdd\u62a4\u72b6\u6001\uff0c\u5bf9\u6027\u80fd\u5f71\u54cd\u975e\u5e38\u5fae\u5f31\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5982\u679cNOR\u652f\u6301\uff0c\u63a8\u8350\u4f7f\u7528\u72ec\u7acb\u5757\u4fdd\u62a4\u3002\u533a\u95f4\u4fdd\u62a4\u66f4\u9002\u7528\u4e8e\u4e0d\u9700\u8981\u9891\u7e41\u89e3\u4fdd\u62a4\u7684\u573a\u666f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u603b\u7684\u6765\u8bf4\uff0c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679cNOR\u652f\u6301\u72ec\u7acb\u5757\u4fdd\u62a4\uff0c\u5219\u91c7\u7528\u72ec\u7acb\u5757\u4fdd\u62a4\uff0c\u518d\u6839\u636e\u9884\u7b97\u51b3\u5b9a\u662f\u5426\u91c7\u7528\u786c\u4ef6\u590d\u4f4d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679cNOR\u4e0d\u652f\u6301\u72ec\u7acb\u5757\u4fdd\u62a4\uff0c\u5efa\u8bae\u91c7\u7528\u786c\u4ef6\u590d\u4f4d\uff0c\u53d6\u6d88\u8f6f\u4ef6\u5199\u4fdd\u62a4\u4ee5\u63d0\u9ad8\u6027\u80fd\u548c\u51cf\u5c11\u78e8\u635f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u65b0\u7269\u6599\u7684\u652f\u6301\u548c\u6d4b\u8bd5",children:"\u65b0\u7269\u6599\u7684\u652f\u6301\u548c\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u5199\u4fdd\u62a4\u7684\u5b58\u5728\uff0c\u5bfc\u81f4\u65b0\u7269\u6599\u9002\u914d\u66f4\u52a0\u590d\u6742\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"uboot"}),": \u70e7\u5f55\u6240\u7528\u7684 ",(0,s.jsx)(n.code,{children:"uboot"})," \u9700\u8981\u9002\u914d\u89e3\u9501\u64cd\u4f5c\u3002\u4e3b\u8981\u662f\u5728 ",(0,s.jsx)(n.code,{children:"drivers/mtd/spi/spi-NOR-ids.c"})," \u4e2d\u7ed9\u5bf9\u5e94\u7269\u6599\u914d\u7f6e\u4e0a ",(0,s.jsx)(n.code,{children:"SPI_NOR_HAS_LOCK"}),"(\u652f\u6301\u5199\u4fdd\u62a4) \u548c ",(0,s.jsx)(n.code,{children:"SPI_NOR_INDIVIDUAL_LOCK"}),"(\u5757\u4fdd\u62a4) \u7b49\u6807\u5fd7\uff0c\u5e76\u5b9e\u73b0\u5bf9\u5e94\u7684\u9501\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"rtos"}),": \u6dfb\u52a0\u65b0\u7269\u6599\u7684\u652f\u6301\uff0c\u4e3b\u8981\u662f\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"struct NOR_info NOR_ids[]"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"struct NOR_info {\n    char *name;\n    unsigned char id[MAX_ID_LEN];\n    unsigned int blk_size;\n    unsigned int blk_cnt;\n\n    struct NOR_protection *pt;\n    unsigned int pt_len;\n    unsigned int pt_def;\n\n    int flag;\n #define EN_IO_PROG_X4 BIT(1)\n #define EN_IO_READ_X2 BIT(2)\n #define EN_IO_READ_X4 BIT(3)\n #define EN_INDIVIDUAL_PROTECT_MODE BIT(4)\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u8003\u8651\u5199\u4fdd\u62a4\uff0c\u53ea\u9700\u8981\u628a\u524d4\u9879\u6839\u636e SPEC \u4fe1\u606f\u586b\u5199\u5373\u53ef\u3002\u5176\u4e2dblk_size\u5bf9\u5e94\u6587\u4ef6\u7cfb\u7edf\u7684\u5757\u5927\u5c0f\uff0c\u56e0\u6b64\u5efa\u8bae\u8bbe\u7f6e\u4e3a4096\uff0c\u56e0\u6b64 ",(0,s.jsx)(n.code,{children:"blk_cnt"})," \u5c31\u662fNOR\u603b\u5927\u5c0f\u9664\u4ee54096\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"pt\uff0cpt_len\u548cpt_def\u9002\u7528\u4e8e\u533a\u95f4\u4fdd\u62a4\u3002\u7531\u4e8e\u4e0d\u518d\u63a8\u8350\u4f7f\u7528\u533a\u95f4\u4fdd\u62a4\uff0c\u56e0\u6b64\u4e0d\u5c55\u5f00\u4ecb\u7ecd\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["flag\u901a\u8fc7\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"EN_INDIVIDUAL_PROTECT_MODE BIT"})," \u4ee5\u652f\u6301\u72ec\u7acb\u5757\u4fdd\u62a4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5728\u65b0\u7269\u6599\u9002\u914d\u540e\uff0c\u9700\u8981\u8fdb\u884c\u5927\u91cf\u538b\u6d4b\uff0c\u4ee5\u786e\u4fdd\u8db3\u591f\u7a33\u5b9a"})}),"\n",(0,s.jsx)(n.h3,{id:"spi-nand",children:"SPI NAND"}),"\n",(0,s.jsx)(n.p,{children:"SPINAND\u7684\u7269\u7406\u7279\u6027\u6bd4 SPINOR \u590d\u6742\uff0c\u5bf9\u9a71\u52a8\u8981\u6c42\u66f4\u9ad8\u3002RTOS \u901a\u8fc7\u9002\u914d\u5168\u5fd7\u81ea\u7814\u7684NFTL\uff0c\u5b9e\u73b0\u5728 RTOS \u4e0a\u652f\u6301SPINAND\u3002"}),"\n",(0,s.jsx)(n.p,{children:"NFTL\u5b9e\u73b0\u53ea\u63d0\u4f9b\u9759\u6001\u5e93\uff0c\u7ed3\u5408\u5df2\u7ecf\u5f00\u6e90\u7684\u7269\u7406\u5c42\u4ee3\u7801\uff0c\u5373\u53ef\u5728 RTOS \u4e0a\u652f\u6301SPINAND\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"emmc--sd-card--sd-nand-\u9a71\u52a8",children:"eMMC / SD Card / SD Nand \u9a71\u52a8"}),"\n",(0,s.jsx)(n.p,{children:"eMMC / SD Card / SD Nand \u4f7f\u7528\u7684\u662f\u6807\u51c6\u7684 SDIO \u63a5\u53e3\uff0cBROM \u652f\u6301\u4ece\u652f\u6301\u7684 MMC \u50a8\u5b58\u5668\u542f\u52a8\u3002\u652f\u6301 TF \u5361\u542f\u52a8\uff0ceMMC \u542f\u52a8\uff0cSD Nand \u542f\u52a8\uff0c\u4e5f\u652f\u6301\u901a\u8fc7 SDIO \u8bfb\u53d6\u76f8\u5173\u5b58\u50a8\u8bbe\u5907\u7684\u6570\u636e\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,n,d)=>{d.d(n,{Z:()=>l,a:()=>c});var s=d(7294);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);