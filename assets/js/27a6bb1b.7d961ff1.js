"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2370],{1748:(d,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var s=r(5893),n=r(1151);const l={sidebar_position:1},c="\u914d\u7f6e\u5f15\u811a\u590d\u7528",t={id:"quick-start/part4/chapter1",title:"\u914d\u7f6e\u5f15\u811a\u590d\u7528",description:"\u672c\u6587\u4e2d\u7684\u7ea6\u5b9a",source:"@site/docs/quick-start/part4/chapter1.md",sourceDirName:"quick-start/part4",slug:"/quick-start/part4/chapter1",permalink:"/quick-start/part4/chapter1",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/R128-Docs/tree/main/docs/quick-start/part4/chapter1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"boardquickstartSidebar",previous:{title:"\u8f6f\u4ef6\u914d\u7f6e",permalink:"/category/\u8f6f\u4ef6\u914d\u7f6e"},next:{title:"\u542f\u52a8\u4e0e\u8d44\u6e90\u5212\u5206",permalink:"/quick-start/part4/chapter2"}},i={},h=[{value:"\u672c\u6587\u4e2d\u7684\u7ea6\u5b9a",id:"\u672c\u6587\u4e2d\u7684\u7ea6\u5b9a",level:2},{value:"\u5f15\u811a\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u590d\u7528",id:"\u5f15\u811a\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u590d\u7528",level:2},{value:"GPIO\u63cf\u8ff0\u683c\u5f0f",id:"gpio\u63cf\u8ff0\u683c\u5f0f",level:3},{value:"[product]",id:"product",level:3},{value:"[target]",id:"target",level:3},{value:"[platform]",id:"platform",level:3},{value:"[uart_para]",id:"uart_para",level:3},{value:"[uartX]",id:"uartx",level:3},{value:"[twiX]",id:"twix",level:3},{value:"[sdcX]",id:"sdcx",level:3},{value:"[sdcXdet_para]",id:"sdcxdet_para",level:3},{value:"[usbX]",id:"usbx",level:3},{value:"[audiocodec]",id:"audiocodec",level:3},{value:"[daudio0]",id:"daudio0",level:3},{value:"[dram_para]",id:"dram_para",level:3},{value:"[lcd_fb0]",id:"lcd_fb0",level:3}];function x(d){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...d.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u914d\u7f6e\u5f15\u811a\u590d\u7528",children:"\u914d\u7f6e\u5f15\u811a\u590d\u7528"}),"\n",(0,s.jsx)(e.h2,{id:"\u672c\u6587\u4e2d\u7684\u7ea6\u5b9a",children:"\u672c\u6587\u4e2d\u7684\u7ea6\u5b9a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u63cf\u8ff0 GPIO \u914d\u7f6e\u7684\u5f62\u5f0f\uff1a",(0,s.jsx)(e.code,{children:"Port:\u7aef\u53e3 + \u7ec4\u5185\u5e8f\u53f7<\u529f\u80fd\u5206\u914d><\u5185\u90e8\u7535\u963b\u72b6\u6001><\u9a71\u52a8\u80fd\u529b><\u8f93\u51fa\u7535\u5e73\u72b6\u6001>"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u6587\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"<X>=0,1,2,3,4,5\u2026.."}),"\uff0c\u5982 twi0\uff0ctwi1\u2026.\uff1buart0\uff0cuart1\u2026.\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6587\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"{PROJECT}"})," \u4ee3\u8868\u4e0d\u540c\u7684\u65b9\u6848\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:"module"})," \u65b9\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5f15\u811a\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u590d\u7528",children:"\u5f15\u811a\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u590d\u7528"}),"\n",(0,s.jsxs)(e.p,{children:["R128 \u5e73\u53f0\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"sys_config.fex"})," \u4f5c\u4e3a\u5f15\u811a\u914d\u7f6e\u6587\u4ef6\uff0c\u4ed6\u4f1a\u5728\u6253\u5305\u65f6\u6253\u5305\u7f16\u8bd1\u8fdb\u5165\u7cfb\u7edf\uff0c\u5728\u7cfb\u7edf\u8fd0\u884c\u65f6\u4f1a\u89e3\u6790\u5e76\u914d\u7f6e\uff0c\u7cfb\u7edf\u89e3\u6790 ",(0,s.jsx)(e.code,{children:"sys_config.fex"})," \u7684\u9a71\u52a8\u914d\u7f6e\u4f4d\u4e8e ",(0,s.jsx)(e.code,{children:"lichee\\rtos-components\\aw\\sys_config_script"})," \u4e2d\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u914d\u7f6e\u5f15\u811a\u590d\u7528\uff0c\u53ea\u9700\u8981\u4fee\u6539  ",(0,s.jsx)(e.code,{children:"board\\r128s2\\{PROJECT}\\config\\sys_config.fex"}),"  \u6587\u4ef6\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"gpio\u63cf\u8ff0\u683c\u5f0f",children:"GPIO\u63cf\u8ff0\u683c\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Port:\u7aef\u53e3 + \u7ec4\u5185\u5e8f\u53f7<\u529f\u80fd\u5206\u914d><\u5185\u90e8\u7535\u963b\u72b6\u6001><\u9a71\u52a8\u80fd\u529b><\u8f93\u51fa\u7535\u5e73\u72b6\u6001>\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"uart_tx = port:PA16<5><1><2><0>\n                |----------------------\x3e \u7aef\u53e3\u53f7 PA\n                  |--------------------\x3e \u5e8f\u53f7 19\n                    |------------------\x3e \u529f\u80fd\u5206\u914d 5 \uff08\u53c2\u8003 PINMUX\uff09\n                       |---------------\x3e \u5185\u90e8\u7535\u963b\u72b6\u6001\u4e3a 1  \n                          |------------\x3e \u9a71\u52a8\u80fd\u529b\u4e3a 2\n                             |---------\x3e \u9ed8\u8ba4\u8f93\u51fa\u7535\u5e73 0\n"})}),"\n",(0,s.jsx)(e.h3,{id:"product",children:"[product]"}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6e\u6587\u4ef6\u4fe1\u606f"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"version"}),(0,s.jsx)(e.td,{children:"\u914d\u7f6e\u7684\u7248\u672c\u53f7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"machine"}),(0,s.jsx)(e.td,{children:"\u65b9\u6848\u540d\u5b57"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:'[product]\nversion = "100"\nmachine = "module"\n'})}),"\n",(0,s.jsx)(e.h3,{id:"target",children:"[target]"}),"\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8\u4ecb\u8d28\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"storage_type"}),(0,s.jsxs)(e.td,{children:["\u542f\u52a8\u4ecb\u8d28\u9009\u62e9 ",(0,s.jsx)("br",{}),"0",":nand"," ",(0,s.jsx)("br",{}),"1",":sd",(0,s.jsx)("br",{}),"2",":emmc",(0,s.jsx)("br",{}),"3",":spinor"," ",(0,s.jsx)("br",{}),"4",":emmc"," ",(0,s.jsx)("br",{}),"5",":spinand"," ",(0,s.jsx)("br",{}),"6",":sd"," ",(0,s.jsx)("br",{}),"-1:(defualt) \u81ea\u52a8\u626b\u63cf\u542f\u52a8\u4ecb\u8d28"]})]})})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[target]\nstorage_type    = 3\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u5185\u7f6e SPI NOR \u7684 R128 \u5e73\u53f0\uff0c\u8bf7\u914d\u7f6e\u4e3a ",(0,s.jsx)(e.code,{children:"3"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"platform",children:"[platform]"}),"\n",(0,s.jsx)(e.p,{children:"\u914d\u7f6e boot0 \u8c03\u8bd5\u4fe1\u606f\u6253\u5370"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"debug_mode"}),(0,s.jsx)(e.td,{children:"\u914d\u7f6e0\u65f6\uff0cboot0 \u4e0d\u6253\u5370\u8c03\u8bd5\u4fe1\u606f\uff0c\u914d\u7f6e\u4e0d\u4e3a0\u65f6\u6253\u5370"})]})})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[platform]\ndebug_mode = 2\n"})}),"\n",(0,s.jsx)(e.h3,{id:"uart_para",children:"[uart_para]"}),"\n",(0,s.jsx)(e.p,{children:"boot0 \u8c03\u8bd5\u4e32\u53e3\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uart_debug_port"}),(0,s.jsx)(e.td,{children:"boot0 \u8c03\u8bd5\u8f93\u51fa\u4e32\u53e3\u4f7f\u7528\u7684\u4e32\u53e3\u53f7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uart_debug_tx"}),(0,s.jsx)(e.td,{children:"boot0 \u8c03\u8bd5\u4e32\u53e3 tx \u4f7f\u7528\u7684\u5f15\u811a"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uart_debug_rx"}),(0,s.jsx)(e.td,{children:"boot0 \u8c03\u8bd5\u4e32\u53e3 rx \u4f7f\u7528\u7684\u5f15\u811a"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[uart_para]\nuart_debug_port = 0\nuart_debug_tx   = port:PA16<5><1><default><default>\nuart_debug_rx   = port:PA17<5><1><default><default>\n"})}),"\n",(0,s.jsx)(e.h3,{id:"uartx",children:"[uartX]"}),"\n",(0,s.jsx)(e.p,{children:"UART \u5f15\u811a\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uart_tx"}),(0,s.jsx)(e.td,{children:"UART TX \u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uart_rx"}),(0,s.jsx)(e.td,{children:"UART RX \u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uart_type"}),(0,s.jsx)(e.td,{children:"UART \u7c7b\u578b\uff0c\u6709\u6548\u503c\u4e3a\uff1a2/4/8; \u8868\u793a 2/4/8 \u7ebf\u6a21\u5f0f"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[uart0]\nuart_tx         = port:PA16<5><1><default><default>\nuart_rx         = port:PA17<5><1><default><default>\n"})}),"\n",(0,s.jsx)(e.h3,{id:"twix",children:"[twiX]"}),"\n",(0,s.jsx)(e.p,{children:"TWI \u5f15\u811a\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"twiX_sck"}),(0,s.jsx)(e.td,{children:"TWI \u7684\u65f6\u949f\u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"twiX_sda"}),(0,s.jsx)(e.td,{children:"TWI \u7684\u6570\u636e\u7684 GPIO \u914d\u7f6e"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"sdcx",children:"[sdcX]"}),"\n",(0,s.jsx)(e.p,{children:"SDIO\uff0cMMC \u5f15\u811a\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"card_ctrl"}),(0,s.jsx)(e.td,{children:"\u63a7\u5236\u5668"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"card_high_speed"}),(0,s.jsx)(e.td,{children:"\u901f\u5ea6\u6a21\u5f0f 0 \u4e3a\u4f4e\u901f\uff0c1 \u4e3a\u9ad8\u901f"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"card_line"}),(0,s.jsx)(e.td,{children:"1\uff0c4 \u7ebf\u5361\u53ef\u4ee5\u9009\u62e9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdc_d1"}),(0,s.jsx)(e.td,{children:"sdc \u5361\u6570\u636e 1 \u7ebf\u4fe1\u53f7\u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdc_d0"}),(0,s.jsx)(e.td,{children:"sdc \u5361\u6570\u636e 2 \u7ebf\u4fe1\u53f7\u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdc_clk"}),(0,s.jsx)(e.td,{children:"sdc \u5361\u65f6\u949f\u4fe1\u53f7\u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdc_cmd"}),(0,s.jsx)(e.td,{children:"sdc \u547d\u4ee4\u4fe1\u53f7\u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdc_d3"}),(0,s.jsx)(e.td,{children:"sdc \u5361\u6570\u636e 3 \u7ebf\u4fe1\u53f7\u7684 GPIO \u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdc_d2"}),(0,s.jsx)(e.td,{children:"sdc \u5361\u6570\u636e 4 \u7ebf\u4fe1\u53f7\u7684 GPIO \u914d\u7f6e"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[sdc0]\ncard_ctrl       = 0\ncard_high_speed = 0\ncard_line       = 4\nsdc_d1          = port:PA27<2><1><3><default>\nsdc_d0          = port:PA26<2><1><3><default>\nsdc_clk         = port:PA29<2><1><3><default>\nsdc_cmd         = port:PA25<2><1><3><default>\nsdc_d3          = port:PA24<2><1><3><default>\nsdc_d2          = port:PA28<2><1><3><default>\n"})}),"\n",(0,s.jsx)(e.h3,{id:"sdcxdet_para",children:"[sdcXdet_para]"}),"\n",(0,s.jsx)(e.p,{children:"\u5361\u68c0\u6d4b\u5f15\u811a\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sdcX_det"}),(0,s.jsx)(e.td,{children:"\u5361\u63d2\u5165\u68c0\u6d4b\u811a"})]})})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[sdc0det_para]\nsdc0_det        = port:PA23<0><1><3><default>\n"})}),"\n",(0,s.jsx)(e.h3,{id:"usbx",children:"[usbX]"}),"\n",(0,s.jsx)(e.p,{children:"USB \u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_used"}),(0,s.jsx)(e.td,{children:"USB\u4f7f\u80fd\u6807\u5fd7\u3002\u7f6e1\uff0c\u8868\u793a\u7cfb\u7edf\u4e2dUSB\u6a21\u5757\u53ef\u7528,\u7f6e0,\u5219\u8868\u793a\u7cfb\u7edfUSB\u7981\u7528\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_port_type"}),(0,s.jsx)(e.td,{children:"USB\u7aef\u53e3\u7684\u4f7f\u7528\u60c5\u51b5\u3002 0: device only;1: host only;2: OTG"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_detect_type"}),(0,s.jsx)(e.td,{children:"USB\u7aef\u53e3\u7684\u68c0\u67e5\u65b9\u5f0f\u30020: \u4e0d\u505a\u68c0\u6d4b;1: vbus/id\u68c0\u67e5;2: id/dpdm\u68c0\u67e5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_detect_mode"}),(0,s.jsx)(e.td,{children:"USB\u7aef\u53e3\u7684\u68c0\u67e5\u65b9\u5f0f\u30020: \u7ebf\u7a0b\u8f6e\u8be2;1: id\u4e2d\u65ad\u89e6\u53d1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_id_gpio"}),(0,s.jsx)(e.td,{children:"USB ID pin\u811a\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_det_vbus_gpio"}),(0,s.jsx)(e.td,{children:"USB DET_VBUS pin\u811a\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_drv_vbus_type"}),(0,s.jsx)(e.td,{children:"vbus\u8bbe\u7f6e\u65b9\u5f0f\u30020: \u65e0; 1: gpio; 2: axp\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usb_det_vbus_gpio"}),(0,s.jsx)(e.td,{children:'"axp_ctrl",\u8868\u793a axp \u63d0\u4f9b\u3002'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usbh_driver_level"}),(0,s.jsx)(e.td,{children:"usb\u9a71\u52a8\u80fd\u529b\u7b49\u7ea7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usbh_irq_flag"}),(0,s.jsx)(e.td,{children:"usb\u4e2d\u65ad\u6807\u5fd7"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[usbc0]\nusb_used                = 1\nusb_port_type           = 2\nusb_detect_type         = 1\nusb_detect_mode         = 0\nusb_id_gpio             = port:PB04<0><0><default><default>\nusb_det_vbus_gpio       = port:PA24<0><0><default><default>\nusb_drv_vbus_gpio       = port:PA29<0><0><default><default>\nusb_drv_vbus_type       = 1\nusbh_driver_level       = 5\nusbh_irq_flag           = 0\n"})}),"\n",(0,s.jsx)(e.h3,{id:"audiocodec",children:"[audiocodec]"}),"\n",(0,s.jsx)(e.p,{children:"\u5185\u7f6e audiocodec \u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dacl_vol"}),(0,s.jsx)(e.td,{children:"DAC L \u97f3\u91cf"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dacr_vol"}),(0,s.jsx)(e.td,{children:"DAC R \u97f3\u91cf"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lineout_vol"}),(0,s.jsx)(e.td,{children:"LINEOUT \u97f3\u91cf"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lineoutl_en"}),(0,s.jsx)(e.td,{children:"LINEOUTL \u4f7f\u80fd"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lineoutr_en"}),(0,s.jsx)(e.td,{children:"LINEOUTR \u4f7f\u80fd"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mic1_gain"}),(0,s.jsx)(e.td,{children:"MIC1 \u589e\u76ca"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mic2_gain"}),(0,s.jsx)(e.td,{children:"MIC2 \u589e\u76ca"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mic3_gain"}),(0,s.jsx)(e.td,{children:"MIC3 \u589e\u76ca"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mic1_en"}),(0,s.jsx)(e.td,{children:"MIC1 \u542f\u7528"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mic2_en"}),(0,s.jsx)(e.td,{children:"MIC2 \u542f\u7528"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mic3_en"}),(0,s.jsx)(e.td,{children:"MIC3 \u542f\u7528"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mad_bind_en"}),(0,s.jsx)(e.td,{children:"MAD \u6a21\u5757\u7ed1\u5b9a"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pa_pin_msleep"}),(0,s.jsx)(e.td,{children:"\u529f\u653e\u4f7f\u80fd\u5f15\u811a\u5ef6\u65f6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pa_pin"}),(0,s.jsx)(e.td,{children:"\u529f\u653e\u4f7f\u80fd\u5f15\u811a"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[audiocodec]\ndacl_vol\t= 129\ndacr_vol\t= 129\nlineout_vol\t= 5\nlineoutl_en\t= 1\nlineoutr_en\t= 0\nmic1_gain\t= 19\nmic2_gain\t= 19\nmic3_gain\t= 0\nmic1_en\t\t= 1\nmic2_en\t\t= 1\nmic3_en\t\t= 1\nmad_bind_en\t= 0\npa_pin_msleep\t= 10\npa_pin\t\t= port:PB3<1><default><1><1>\n"})}),"\n",(0,s.jsx)(e.h3,{id:"daudio0",children:"[daudio0]"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u5b57\u97f3\u9891\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"i2s_mclk"}),(0,s.jsx)(e.td,{children:"I2S MCLK \u5f15\u811a\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"i2s_bclk"}),(0,s.jsx)(e.td,{children:"I2S BCLK \u5f15\u811a\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"i2s_lrck"}),(0,s.jsx)(e.td,{children:"I2S LRCK \u5f15\u811a\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"i2s_dout0"}),(0,s.jsx)(e.td,{children:"I2S DOUT0 \u5f15\u811a\u914d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"i2s_din0"}),(0,s.jsx)(e.td,{children:"I2S DIN0 \u5f15\u811a\u914d\u7f6e"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[daudio0]\ni2s_mclk                    = port:PA23<2><0><1><default>\ni2s_bclk                    = port:PA20<2><0><1><default>\ni2s_lrck                    = port:PA19<2><0><1><default>\ni2s_dout0                   = port:PA22<2><0><1><default>\ni2s_din0                    = port:PA21<2><0><1><default>\n"})}),"\n",(0,s.jsx)(e.h3,{id:"dram_para",children:"[dram_para]"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6b64\u9879\u914d\u7f6e\u4ec5\u4e3a\u517c\u5bb9\u914d\u7f6e\uff0c\u5b9e\u9645\u6709\u7528\u914d\u7f6e\u9879\u4e3a ",(0,s.jsx)(e.code,{children:"dram_clk"}),"\uff0c",(0,s.jsx)(e.code,{children:"dram_no_lpsram"})," \uff0c\u5176\u4f59 ",(0,s.jsx)(e.code,{children:"dram_para"})," \u53c2\u6570\u6ca1\u6709\u5b9e\u9645\u610f\u4e49\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dram_clk"}),(0,s.jsx)(e.td,{children:"\u5982\u679c\u4e0d\u4e3a 0\uff0c\u521d\u59cb\u5316 hspsram"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dram_no_lpsram"}),(0,s.jsx)(e.td,{children:"\u5982\u679c\u4e3a 0\uff0c\u521d\u59cb\u5316 lspsram"})]})]})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ini",children:"[dram_para]\ndram_clk       = 800\ndram_type      = 0xB\ndram_zq        = 0x3dbdfda0\ndram_odt_en    = 0x1\ndram_para1     = 0x000010f2\ndram_para2     = 0x02000000\ndram_mr0       = 0x1c70\ndram_mr1       = 0x42\ndram_mr2       = 0x8\ndram_mr3       = 0x0\ndram_tpr0      = 0x004A2195\ndram_tpr1      = 0x02423190\ndram_tpr2      = 0x0008B061\ndram_tpr3      = 0xB4787896\ndram_tpr4      = 0x0\ndram_tpr5      = 0x48484848\ndram_tpr6      = 0x48\ndram_tpr7      = 0x1\ndram_tpr8      = 0x0\ndram_tpr9      = 0x00\ndram_tpr10     = 0x0\ndram_tpr11     = 0x00000000\ndram_tpr12     = 0x00000000\ndram_tpr13     = 0x34050f00\ndram_no_lpsram = 0x0\n"})}),"\n",(0,s.jsx)(e.h3,{id:"lcd_fb0",children:"[lcd_fb0]"}),"\n",(0,s.jsx)(e.p,{children:"SPI LCD  \u914d\u7f6e"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["SPI LCD \u914d\u7f6e\u9879\u76ee\u8f83\u591a\uff0c\u90e8\u5206\u8be6\u7ec6\u63cf\u8ff0\u53ef\u4ee5\u53c2\u7167 ",(0,s.jsx)(e.a,{href:"/sdk_base/disp",children:"\u663e\u793a\u6846\u67b6"})]}),"\n"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(e.th,{children:"\u914d\u7f6e\u9879\u542b\u4e49"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_used"}),(0,s.jsx)(e.td,{children:"\u542f\u7528 LCD"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_model_name"}),(0,s.jsx)(e.td,{children:"lcd \u5c4f\u6a21\u578b\u540d\u5b57\uff0c\u975e\u5fc5\u987b\uff0c\u53ef\u4ee5\u7528\u4e8e\u540c\u4e2a\u5c4f\u9a71\u52a8\u4e2d\u8fdb\u4e00\u6b65\u533a\u5206\u4e0d\u540c\u5c4f\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_driver_name"}),(0,s.jsxs)(e.td,{children:["lcd\u9762\u677f\u9a71\u52a8\u540d\u79f0\uff0c\u5fc5\u987b\u4e0e\u5c4f\u9a71\u52a8\u4e2d",(0,s.jsx)(e.code,{children:"strcut __lcd_panel"}),"\u53d8\u91cf\u7684",(0,s.jsx)(e.code,{children:"name"}),"\u6210\u5458\u4e00\u81f4\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_x"}),(0,s.jsx)(e.td,{children:"lcd X\u50cf\u7d20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_y"}),(0,s.jsx)(e.td,{children:"lcd Y\u50cf\u7d20"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_width"}),(0,s.jsx)(e.td,{children:"lcd \u7269\u7406\u5bbd\u5ea6\uff08\u5355\u4f4dmm\uff09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_height"}),(0,s.jsx)(e.td,{children:"lcd \u7269\u7406\u9ad8\u5ea6\uff08\u5355\u4f4dmm\uff09"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_data_speed"}),(0,s.jsx)(e.td,{children:"lcd \u6570\u636e\u901f\u7387"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_pwm_used"}),(0,s.jsx)(e.td,{children:"lcd \u80cc\u5149\u4f7f\u7528 pwm"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_pwm_ch"}),(0,s.jsx)(e.td,{children:"lcd \u80cc\u5149\u4f7f\u7528\u7684 pwm \u901a\u9053"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_pwm_freq"}),(0,s.jsx)(e.td,{children:"lcd \u80cc\u5149\u4f7f\u7528\u7684\u9891\u7387"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_pwm_pol"}),(0,s.jsx)(e.td,{children:"lcd \u80cc\u5149\u4f7f\u7528\u7684\u76f8\u4f4d"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_if"}),(0,s.jsxs)(e.td,{children:["0\uff1aSPI\u63a5\u53e3\uff08spi \u63a5\u53e3\u5c31\u662f\u4fd7\u79f0\u7684 4 \u7ebf\u6a21\u5f0f\uff0c\u8fd9\u662f\u56e0\u4e3a\u53d1\u9001\u6570\u636e\u65f6\u9700\u8981\u989d\u5916\u501f\u52a9 DC \u7ebf\u6765\u533a\u5206\u547d\u4ee4\u548c\u6570\u636e\uff0c\u4e0esclk\uff0ccs \u548c sda \u5171\u56db\u7ebf\uff09",(0,s.jsx)("br",{}),"1\uff1aDBI\u63a5\u53e3\uff08\u5982\u679c\u8bbe\u7f6e\u4e86 dbi \u63a5\u53e3\uff0c\u90a3\u4e48\u8fd8\u9700\u8981\u8fdb\u4e00\u6b65\u533a\u5206 dbi \u63a5\u53e3\uff0c\u9700\u8981\u8bbe\u7f6elcd_dbi_if\uff09"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_pixel_fmt"}),(0,s.jsx)(e.td,{children:"\u9009\u62e9\u4f20\u8f93\u6570\u636e\u7684\u50cf\u7d20\u683c\u5f0f"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_dbi_fmt"}),(0,s.jsxs)(e.td,{children:["0\uff1aRGB111",(0,s.jsx)("br",{}),"1\uff1aRGB444",(0,s.jsx)("br",{}),"2\uff1aRGB565",(0,s.jsx)("br",{}),"3\uff1aRGB666",(0,s.jsx)("br",{}),"4\uff1aRGB888"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_dbi_clk_mode"}),(0,s.jsx)(e.td,{children:"\u9009\u62e9 dbi \u65f6\u949f\u7684\u884c\u4e3a\u6a21\u5f0f"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_dbi_te"}),(0,s.jsx)(e.td,{children:"\u4f7f\u80fd te \u89e6\u53d1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"fb_buffer_num"}),(0,s.jsx)(e.td,{children:"\u663e\u793a framebuffer \u6570\u91cf\uff0c\u4e3a\u4e86\u5e73\u6ed1\u663e\u793a\uff0c\u8fd9\u91cc\u4e00\u822c\u662f 2 \u4e2a\uff0c\u4e3a\u4e86\u7701\u5185\u5b58\u4e5f\u53ef\u4ee5\u6539\u6210 1\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_dbi_if"}),(0,s.jsxs)(e.td,{children:["0\uff1aL3I1",(0,s.jsx)("br",{}),"1\uff1aL3I2",(0,s.jsx)("br",{}),"2\uff1aL4I1",(0,s.jsx)("br",{}),"3\uff1aL4I2",(0,s.jsx)("br",{}),"4\uff1aD2L1"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_rgb_order"}),(0,s.jsx)(e.td,{children:"\u8f93\u5165\u56fe\u50cf\u6570\u636e rgb \u987a\u5e8f\u8bc6\u522b\u8bbe\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_fps"}),(0,s.jsx)(e.td,{children:"\u8bbe\u7f6e\u5c4f\u7684\u5237\u65b0\u7387\uff0c\u5355\u4f4d Hz"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_spi_bus_num"}),(0,s.jsx)(e.td,{children:"\u9009\u62e9 spi \u603b\u7ebf id"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_frm"}),(0,s.jsx)(e.td,{children:"frm\u6296\u52a8\u63a7\u5236"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_gamma_en"}),(0,s.jsx)(e.td,{children:"gamma\u63a7\u5236\u4f7f\u80fd"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_backlight"}),(0,s.jsx)(e.td,{children:"\u80cc\u5149"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"lcd_gpio_0"}),(0,s.jsx)(e.td,{children:"\u7528\u6237\u5b9a\u4e49IO\u5b9a\u4e49\uff0c\u4e00\u822c\u4f5c\u4e3aRST"})]})]})]})]})}function j(d={}){const{wrapper:e}={...(0,n.a)(),...d.components};return e?(0,s.jsx)(e,{...d,children:(0,s.jsx)(x,{...d})}):x(d)}},1151:(d,e,r)=>{r.d(e,{Z:()=>t,a:()=>c});var s=r(7294);const n={},l=s.createContext(n);function c(d){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function t(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(n):d.components||n:c(d.components),s.createElement(l.Provider,{value:e},d.children)}}}]);