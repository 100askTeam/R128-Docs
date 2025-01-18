"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9601],{8652:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var s=i(5893),d=i(1151);const r={sidebar_position:2},c="SDK \u5165\u95e8",t={id:"quick-start/part3/chapter2",title:"SDK \u5165\u95e8",description:"\u672c\u7ae0\u4ecb\u7ecd\u57fa\u7840\u7684SDK\u7f16\u8bd1\uff0c\u6253\u5305\u7b49\u64cd\u4f5c\uff0c\u65b9\u4fbf\u5feb\u901f\u4e0a\u624b SDK \u5f00\u53d1\u3002",source:"@site/docs/quick-start/part3/chapter2.md",sourceDirName:"quick-start/part3",slug:"/quick-start/part3/chapter2",permalink:"/en/quick-start/part3/chapter2",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/R128-Docs/tree/main/docs/quick-start/part3/chapter2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"boardquickstartSidebar",previous:{title:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",permalink:"/en/quick-start/part3/chapter1"},next:{title:"SDK \u67b6\u6784\u4e0e\u76ee\u5f55\u7ed3\u6784",permalink:"/en/quick-start/part3/chapter3"}},l={},a=[{value:"SDK \u57fa\u7840\u77e5\u8bc6",id:"sdk-\u57fa\u7840\u77e5\u8bc6",level:2},{value:"SDK \u76ee\u5f55\u67b6\u6784",id:"sdk-\u76ee\u5f55\u67b6\u6784",level:3},{value:"\u521d\u59cb\u5316SDK\u73af\u5883",id:"\u521d\u59cb\u5316sdk\u73af\u5883",level:2},{value:"\u8f7d\u5165\u9879\u76ee\u65b9\u6848",id:"\u8f7d\u5165\u9879\u76ee\u65b9\u6848",level:2},{value:"\u66f4\u6362\u9879\u76ee\u65b9\u6848",id:"\u66f4\u6362\u9879\u76ee\u65b9\u6848",level:2},{value:"\u914d\u7f6e RTOS \u57fa\u672c\u8bbe\u7f6e\u4e0e\u8f6f\u4ef6\u5305\u914d\u7f6e",id:"\u914d\u7f6e-rtos-\u57fa\u672c\u8bbe\u7f6e\u4e0e\u8f6f\u4ef6\u5305\u914d\u7f6e",level:2},{value:"\u7f16\u8bd1\u7cfb\u7edf",id:"\u7f16\u8bd1\u7cfb\u7edf",level:2},{value:"\u6253\u5305\u7cfb\u7edf",id:"\u6253\u5305\u7cfb\u7edf",level:2},{value:"\u6269\u5c55\u547d\u4ee4",id:"\u6269\u5c55\u547d\u4ee4",level:2},{value:"\u4e00\u952e\u7f16\u8bd1 + \u6253\u5305",id:"\u4e00\u952e\u7f16\u8bd1--\u6253\u5305",level:3},{value:"\u7f16\u8bd1 <code>U-boot</code>",id:"\u7f16\u8bd1-u-boot",level:3},{value:"\u7f16\u8bd1 <code>boot0</code>",id:"\u7f16\u8bd1-boot0",level:3},{value:"\u7f16\u8bd1 <code>U-boot</code> + <code>boot0</code>",id:"\u7f16\u8bd1-u-boot--boot0",level:3},{value:"\u6587\u4ef6\u5939\u8df3\u8f6c\u5feb\u6377\u547d\u4ee4",id:"\u6587\u4ef6\u5939\u8df3\u8f6c\u5feb\u6377\u547d\u4ee4",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sdk-\u5165\u95e8",children:"SDK \u5165\u95e8"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u4ecb\u7ecd\u57fa\u7840\u7684SDK\u7f16\u8bd1\uff0c\u6253\u5305\u7b49\u64cd\u4f5c\uff0c\u65b9\u4fbf\u5feb\u901f\u4e0a\u624b SDK \u5f00\u53d1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"sdk-\u57fa\u7840\u77e5\u8bc6",children:"SDK \u57fa\u7840\u77e5\u8bc6"}),"\n",(0,s.jsx)(n.p,{children:"R128 \u5e73\u53f0\u62e5\u6709\u4e09\u4e2a\u6838\u5fc3\uff0cCortex M33 \u6838\u5fc3\u4f5c\u4e3a\u542f\u52a8\u548c\u5b89\u5168\u6838\u5fc3\uff0cXuanTie C906 \u6838\u5fc3\u4f5c\u4e3a\u5e94\u7528\u6838\u8fd0\u884c\u7528\u6237 APP\uff0cHIFI5 \u4f5c\u4e3a\u7b97\u6cd5\u6838\u8fd0\u884cDSP\u7b97\u6cd5\u3002\u7531\u4e8e\u67b6\u6784\u4e0d\u540c\uff0c\u4e0d\u540c\u7684\u6838\u5fc3\u9700\u8981\u8fd0\u884c\u4e0d\u540c\u7684 RTOS\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d Cortex M33 \u548c C906 \u8fd0\u884c\u7684\u662f ",(0,s.jsx)(n.code,{children:"FreeRTOS V10.4.3"})," \u540c\u4e00\u4e2a\u5185\u6838\u652f\u6301\u4e24\u4e2a\u4e0d\u540c\u67b6\u6784\u7684\u6838\u5fc3\uff0c\u5176\u5916\u8bbe\u3001\u7ec4\u4ef6\u3001\u9a71\u52a8\u662f\u76f8\u540c\u7684\u3002\u7279\u6027\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 Cortex-M33\uff08Armv8-M\uff09\u3001C906\uff08Riscv-64\uff09 \u67b6\u6784"}),"\n",(0,s.jsx)(n.li,{children:"FreeRTOS V10.4.3 \u5185\u6838"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u6807\u51c6 posix \u63a5\u53e3"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u7cfb\u7edf\u63a5\u53e3\uff0c\u7528\u4e8e\u5185\u6838\u4ee5\u5916\u7684\u6a21\u5757\u8c03\u7528\u5185\u6838\u51fd\u6570\u7684\u63a5\u53e3"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u6587\u4ef6\u7cfb\u7edf\uff0c\u5305\u542b\u8bbe\u5907\u7ba1\u7406\u5668\u3001\u5206\u533a\u7ba1\u7406\u5668\u3001\u6587\u4ef6\u7cfb\u7edf\u5b9e\u4f53\u7ba1\u7406\u5668\u7b49\uff0c\u4f8b\u5982 littlefs\u3001fat \u7b49\uff0c\u5b9e\u73b0\u5bf9\u4e0d\u540c\u8bbe\u5907\u7c7b\u578b\u3001\u5206\u533a\u7c7b\u578b\u3001\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\u7684\u96c6\u6210"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 newlibc \u5e93"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u800c HIFI5 \u8fd0\u884c\u7684\u662f Cadence \u6240\u63a8\u8350\u7684 ",(0,s.jsx)(n.code,{children:"FreeRTOS V10.2.0"})," \u5185\u6838\uff0c\u5176\u90e8\u5206\u7ec4\u4ef6\u4e0e M33/C906 \u6838\u5fc3\u4e0d\u540c\u3002\u7279\u6027\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 Xtensa HIFI5 \u67b6\u6784"}),"\n",(0,s.jsx)(n.li,{children:"FreeRTOS V10.2.0 \u5185\u6838"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u7cfb\u7edf\u63a5\u53e3\uff0c\u7528\u4e8e\u5185\u6838\u4ee5\u5916\u7684\u6a21\u5757\u8c03\u7528\u5185\u6838\u51fd\u6570\u7684\u63a5\u53e3"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301 VFPU/NN \u7b97\u6cd5\u5e93"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4ee5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0cM33/C906 \u4f7f\u7528\u7684\u662f\u4e00\u5957 FreeRTOS SDK\uff0cHIFI5 \u4f7f\u7528\u7684\u662f\u53e6\u5916\u7684\u4e00\u5957 FreeRTOS SDK\u3002\u8fd9\u91cc\u5c06\u4ecb\u7ecd M33/C906 \u7684\u5f00\u53d1\u5165\u95e8\uff0cHIFI5\u7684\u76f8\u5173\u5f00\u53d1\u5c06\u5728 DSP \u7ae0\u8282\u4ecb\u7ecd\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f02\u6784\u8ba1\u7b97\u76f8\u5173\u5728"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sdk-\u76ee\u5f55\u67b6\u6784",children:"SDK \u76ee\u5f55\u67b6\u6784"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8868\u662f\u7b80\u5316\u7248\u672c\u7684 SDK \u76ee\u5f55\u7ed3\u6784\uff0c\u5177\u4f53\u7684\u8bf4\u660e\u5728 \u3010",(0,s.jsx)(n.a,{href:"/r128/sdk_tree?id=sdk-%E6%9E%B6%E6%9E%84%E4%B8%8E%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84",children:"SDK\u5165\u95e8 - SDK \u67b6\u6784\u4e0e\u76ee\u5f55\u7ed3\u6784"}),"\u3011\u4e2d\u8bf4\u660e\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:".\n\u251c\u2500\u2500 board               # \u677f\u7ea7\u914d\u7f6e\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 common          # \u516c\u5171\u677f\u7ea7\u914d\u7f6e\u76ee\u5f55\n\u2502   \u2502   \u251c\u2500\u2500 configs     # \u516c\u5171\u677f\u7ea7\u914d\u7f6e\n\u2502   \u2502   \u2514\u2500\u2500 data        # \u516c\u5171\u6570\u636e\n\u2502   \u2514\u2500\u2500 r128s2          # R128 S2 \u82af\u7247\u914d\u7f6e\u76ee\u5f55\n\u2502       \u2514\u2500\u2500 module      # R128 S2 Module \u6a21\u5757\u677f\u7ea7\u914d\u7f6e\u76ee\u5f55\n\u251c\u2500\u2500 lichee              # \u7cfb\u7edf\u6e90\u7801\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 brandy-2.0      # \u542f\u52a8\u76f8\u5173\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 dsp             # HIFI5 FreeRTOS \u7cfb\u7edf\u3001\u7ec4\u4ef6\u3001\u5e94\u7528\n\u2502   \u251c\u2500\u2500 rtos            # M33/C906 FreeRTOS \u7cfb\u7edf\u3001\u7ec4\u4ef6\u3001\u5e94\u7528\n\u2502   \u251c\u2500\u2500 rtos-components # \u516c\u5171\u5e94\u7528\u7ec4\u4ef6\uff0clibc\u3001\u591a\u5a92\u4f53\u3001lvgl\u7b49\n\u2502   \u2514\u2500\u2500 rtos-hal        # RTOS HAL\u9a71\u52a8\n\u251c\u2500\u2500 out                 # \u6253\u5305\u8f93\u51fa\u7684\u4e34\u65f6\u6587\u4ef6\u4e0e\u6700\u7ec8\u955c\u50cf\u6587\u4ef6\n\u2514\u2500\u2500 tools               # \u7528\u4e8e\u5b58\u653e\u6253\u5305\u76f8\u5173\u7684\u811a\u672c\u3001\u5de5\u5177\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u521d\u59cb\u5316sdk\u73af\u5883",children:"\u521d\u59cb\u5316SDK\u73af\u5883"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7f16\u8bd1\u4e4b\u524d\uff0c\u9700\u8981\u521d\u59cb\u5316 SDK \u7684\u73af\u5883\uff0c\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u521d\u59cb\u5316\u73af\u5883\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source envsetup.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image1",src:i(9967).Z+"",width:"604",height:"56"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f7d\u5165\u9879\u76ee\u65b9\u6848",children:"\u8f7d\u5165\u9879\u76ee\u65b9\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u8f7d\u5165\u65b9\u6848"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lunch_rtos\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image2",src:i(4350).Z+"",width:"538",height:"196"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u5f00\u53d1\u7684\u662f ",(0,s.jsx)(n.code,{children:"r128s2_module_c906"})," \u65b9\u6848\uff0c\u5bf9\u5e94\u7684\u662f R128 \u6a21\u5757\u7684\u6700\u5c0f\u5316\u7cfb\u7edf\u5f00\u53d1\u677f\u7684 C906 \u6838\u5fc3\u7684 RTOS\u3002\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"1"})," \u56de\u8f66\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e00\u6b21\u8f7d\u5165\u65b9\u6848\u4f1a\u89e3\u538b\u5de5\u5177\u94fe\uff0c\u89e3\u538b\u5b8c\u6210\u540e\u4f1a\u63d0\u793a\u65b9\u6848\u8f7d\u5165\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image3",src:i(8010).Z+"",width:"531",height:"258"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u6b21\u5f00\u59cb\u5c31\u4f1a\u8df3\u8fc7\u89e3\u538b\u5de5\u5177\u94fe\uff0c\u5e76\u4e14\u4f1a\u8bb0\u5f55\u4e0a\u4e00\u6b21\u9009\u62e9\u7684\u65b9\u6848\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image4",src:i(8789).Z+"",width:"1096",height:"443"})}),"\n",(0,s.jsx)(n.h2,{id:"\u66f4\u6362\u9879\u76ee\u65b9\u6848",children:"\u66f4\u6362\u9879\u76ee\u65b9\u6848"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5982\u679c\u9700\u8981\u5f00\u53d1 M33 \u6838\u5fc3\u65b9\u6848\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c ",(0,s.jsx)(n.code,{children:" lunch_rtos"})," \u9009\u62e9 M33 \u65b9\u6848\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image5",src:i(1472).Z+"",width:"1094",height:"443"})}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e-rtos-\u57fa\u672c\u8bbe\u7f6e\u4e0e\u8f6f\u4ef6\u5305\u914d\u7f6e",children:"\u914d\u7f6e RTOS \u57fa\u672c\u8bbe\u7f6e\u4e0e\u8f6f\u4ef6\u5305\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["SDK \u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"mrtos_menuconfig"})," \u547d\u4ee4\u6765\u914d\u7f6e\u57fa\u672cSDK\u914d\u7f6e\u4e0e\u8f6f\u4ef6\u5305\u3002\u76f8\u5173\u6587\u6863\u4f4d\u4e8e ",(0,s.jsx)(n.a,{href:"https://yuzukihd.top/R128Module/#/sdk_base/rtos_package",children:"RTOS\u8f6f\u4ef6\u5305\u914d\u7f6e"}),"\u3002\u4e0b\u56fe\u4e3a\u8fdb\u5165\u7684\u914d\u7f6e\u754c\u9762\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image6",src:i(5236).Z+"",width:"1087",height:"580"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7f16\u8bd1\u7cfb\u7edf",children:"\u7f16\u8bd1\u7cfb\u7edf"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"m"})," \u547d\u4ee4\u6216\u8005 ",(0,s.jsx)(n.code,{children:"mrtos"})," \u547d\u4ee4\u7f16\u8bd1RTOS\u7cfb\u7edf\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image7",src:i(1473).Z+"",width:"1100",height:"394"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6253\u5305\u7cfb\u7edf",children:"\u6253\u5305\u7cfb\u7edf"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"p"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"pack"})," \u547d\u4ee4\u6253\u5305\u7cfb\u7edf"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image8",src:i(3925).Z+"",width:"959",height:"556"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u6253\u5305\u5982\u679c\u51fa\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"err: failed to open bin file rtos_xxx.fex\nGenerate image file failed\nERROR: mkimage run error\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5219\u662f\u56e0\u4e3a\u7cfb\u7edf\u914d\u7f6e\u52fe\u9009\u542f\u7528\u4e86\u8fd9\u4e2a\u6838\u5fc3\u4f46\u662f\u5b9e\u9645\u6ca1\u6709\u7f16\u8bd1\u8fd9\u4e2a\u6838\u5fc3\u7684 RTOS \u7cfb\u7edf\uff0c\u5bfc\u81f4\u627e\u4e0d\u5230\u8fd9\u4e2a\u6838\u5fc3\u7684 RTOS \u7684\u56fa\u4ef6\u3002\u8fd9\u65f6\u5019\u9700\u8981\u7f16\u8bd1\u5b8c\u6210 RTOS \u7cfb\u7edf\u7136\u540e\u91cd\u65b0\u6253\u5305\u3002\u4f8b\u5982\u62a5\u9519 ",(0,s.jsx)(n.code,{children:"err: failed to open bin file rtos_arm.fex"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image9",src:i(6499).Z+"",width:"455",height:"201"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5219\u9700\u8981\u7f16\u8bd1\u5bf9\u5e94\u7684 ",(0,s.jsx)(n.code,{children:"arm"})," \u6838\u5fc3\u7684\u56fa\u4ef6\uff0c\u5728\u8fd9\u91cc\u662f m33 \u6838\u5fc3\u3002",(0,s.jsx)(n.code,{children:"lunch_rtos"})," \u9009\u62e9 ",(0,s.jsx)(n.code,{children:"M33"})," \u6838\u5fc3\uff0c\u7136\u540e ",(0,s.jsx)(n.code,{children:"m"})," \u7f16\u8bd1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image10",src:i(4275).Z+"",width:"1099",height:"502"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65f6 ",(0,s.jsx)(n.code,{children:"pack"})," \u5c31\u53ef\u4ee5\u901a\u8fc7\u4e86"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image8",src:i(3925).Z+"",width:"959",height:"556"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6269\u5c55\u547d\u4ee4",children:"\u6269\u5c55\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:"\u4e86\u89e3\u4e0a\u9762\u7684\u547d\u4ee4\u5373\u53ef\u5f00\u59cb\u5f00\u53d1 RTOS \uff0c\u4e0d\u8fc7 SDK \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5176\u4ed6\u547d\u4ee4\u7b80\u5316\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e00\u952e\u7f16\u8bd1--\u6253\u5305",children:"\u4e00\u952e\u7f16\u8bd1 + \u6253\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["SDK \u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"mp"})," \u547d\u4ee4\u4ee5\u4f9b\u4e00\u952e\u7f16\u8bd1 + \u6253\u5305\u65b9\u6848\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u7f16\u8bd1-u-boot",children:["\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"U-boot"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"muboot"})," \u547d\u4ee4\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"u-boot"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image11",src:i(3404).Z+"",width:"1089",height:"420"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u62f7\u8d1d\u751f\u6210\u7684\u955c\u50cf\u5230\u6307\u5b9a\u4f4d\u7f6e\u7b49\u5f85\u6253\u5305"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image12",src:i(1494).Z+"",width:"865",height:"135"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u7f16\u8bd1-boot0",children:["\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"boot0"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"mboot0"})," \u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"boot0"}),"\uff0c\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u62f7\u8d1d\u751f\u6210\u7684\u955c\u50cf\u5230\u6307\u5b9a\u4f4d\u7f6e\u7b49\u5f85\u6253\u5305"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image13",src:i(1207).Z+"",width:"1095",height:"136"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u7f16\u8bd1-u-boot--boot0",children:["\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"U-boot"})," + ",(0,s.jsx)(n.code,{children:"boot0"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"mboot"})," \u547d\u4ee4\u7f16\u8bd1  ",(0,s.jsx)(n.code,{children:"U-boot"})," + ",(0,s.jsx)(n.code,{children:"boot0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image14",src:i(8595).Z+"",width:"1095",height:"448"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u62f7\u8d1d\u751f\u6210\u7684\u955c\u50cf\u5230\u6307\u5b9a\u4f4d\u7f6e\u7b49\u5f85\u6253\u5305"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image15",src:i(8779).Z+"",width:"1089",height:"244"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6587\u4ef6\u5939\u8df3\u8f6c\u5feb\u6377\u547d\u4ee4",children:"\u6587\u4ef6\u5939\u8df3\u8f6c\u5feb\u6377\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- croot:        Jump to the top of the tree.\n- cboot:        Jump to uboot.\n- cboot0:       Jump to boot0.\n- cbin:         Jump to uboot/boot0 bin directory.\n- cconfigs:     Jump to configs of target.\n- cout:         Jump to out directory of target.\n- cdsp:         Jump to dsp.\n- chal:         Jump to rtos-hal.\n- ccomponents:  Jump to rtos-components.\n- cbuild:       Jump to rtos build dir.\n- cprojects:    Jump to rtos projects dir.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},9967:(e,n,i)=>{i.d(n,{Z:()=>s});const s="data:image/png;base64,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"},4275:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image10-c7ae2663e07f8f1da6868e893bfac83f.png"},3404:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image11-23bd3ac38e22e2e96fe01cc6a9d3a96d.png"},1494:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image12-eb8ff1eb1a4716c131202b3794b16e7e.png"},1207:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image13-d2013f218839d288143e43a22837f713.png"},8595:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image14-d765370cd7879a1ed33c8cae1b03bb4c.png"},8779:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image15-1076f6746ea0451fa8af0ebafaef416a.png"},4350:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image2-7ac9aa06414ad1e7c44d981d9f334eaf.png"},8010:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image3-bca41de40ee91e60983604147e24c876.png"},8789:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image4-1d52ac37da79797926db11e473797bb0.png"},1472:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image5-fcc7cb502298ecf4fbf59c788a6c3e5c.png"},5236:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image6-322debc5d5a5e95a3f593b907fe1f788.png"},1473:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image7-690db074741f24bd4af4abb05a7bd184.png"},3925:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image8-848ea6c52c6f0991248b020d16f555ac.png"},6499:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/image9-08aeedd724d830315c57b4ea46ba8826.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>c});var s=i(7294);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);