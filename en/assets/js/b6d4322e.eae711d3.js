"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3232],{7236:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=l(5893),i=l(1151);const r={},s="DMA Controller",c={id:"developer-guide/part2/chapter4",title:"DMA Controller",description:"\u672c\u6587\u4ecb\u7ecdRTOS \u4e2dDMA \u9a71\u52a8\u7684\u63a5\u53e3\u53ca\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3aDMA \u7684\u4f7f\u7528\u8005\u63d0\u4f9b\u53c2\u8003\u3002",source:"@site/docs/developer-guide/part2/chapter4.md",sourceDirName:"developer-guide/part2",slug:"/developer-guide/part2/chapter4",permalink:"/en/developer-guide/part2/chapter4",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/R128-Docs/tree/main/docs/developer-guide/part2/chapter4.md",tags:[],version:"current",frontMatter:{},sidebar:"classpartoneSidebar",previous:{title:"CCU",permalink:"/en/developer-guide/part2/chapter3"},next:{title:"Flash Controller",permalink:"/en/developer-guide/part2/chapter5"}},a={},h=[{value:"\u6587\u6863\u7ea6\u5b9a",id:"\u6587\u6863\u7ea6\u5b9a",level:2},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u6e90\u7801\u7ed3\u6784",id:"\u6e90\u7801\u7ed3\u6784",level:2},{value:"\u9a71\u52a8\u6846\u67b6",id:"\u9a71\u52a8\u6846\u67b6",level:2},{value:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u7533\u8bf7 DMA \u901a\u9053",id:"\u7533\u8bf7-dma-\u901a\u9053",level:3},{value:"\u91ca\u653e DMA \u901a\u9053",id:"\u91ca\u653e-dma-\u901a\u9053",level:3},{value:"\u91ca\u653e DMA \u901a\u9053\u63cf\u8ff0\u7b26",id:"\u91ca\u653e-dma-\u901a\u9053\u63cf\u8ff0\u7b26",level:3},{value:"\u521d\u59cb\u5316\u73af\u5f62 DMA \u4f20\u8f93",id:"\u521d\u59cb\u5316\u73af\u5f62-dma-\u4f20\u8f93",level:3},{value:"\u521d\u59cb\u5316 memory to memory DMA \u4f20\u8f93",id:"\u521d\u59cb\u5316-memory-to-memory-dma-\u4f20\u8f93",level:3},{value:"\u521d\u59cb\u5316\u901a\u7528 DMA \u4f20\u8f93",id:"\u521d\u59cb\u5316\u901a\u7528-dma-\u4f20\u8f93",level:3},{value:"\u6ce8\u518c DMA \u56de\u8c03\u51fd\u6570",id:"\u6ce8\u518c-dma-\u56de\u8c03\u51fd\u6570",level:3},{value:"\u914d\u7f6e DMA \u63cf\u8ff0\u7b26\u4f20\u8f93\u4fe1\u606f",id:"\u914d\u7f6e-dma-\u63cf\u8ff0\u7b26\u4f20\u8f93\u4fe1\u606f",level:3},{value:"\u83b7\u53d6 DMA \u53d1\u9001\u72b6\u6001",id:"\u83b7\u53d6-dma-\u53d1\u9001\u72b6\u6001",level:3},{value:"\u542f\u52a8 DMA \u4f20\u8f93",id:"\u542f\u52a8-dma-\u4f20\u8f93",level:3},{value:"\u505c\u6b62 DMA \u4f20\u8f93",id:"\u505c\u6b62-dma-\u4f20\u8f93",level:3},{value:"\u521d\u59cb\u5316 DMA \u63a7\u5236\u5668\u9a71\u52a8",id:"\u521d\u59cb\u5316-dma-\u63a7\u5236\u5668\u9a71\u52a8",level:3},{value:"\u7533\u8bf7\u4e00\u81f4\u6027\u5185\u5b58",id:"\u7533\u8bf7\u4e00\u81f4\u6027\u5185\u5b58",level:3},{value:"\u91ca\u653e\u4e00\u81f4\u6027\u5185\u5b58",id:"\u91ca\u653e\u4e00\u81f4\u6027\u5185\u5b58",level:3},{value:"\u8c03\u8bd5\u8282\u70b9",id:"\u8c03\u8bd5\u8282\u70b9",level:2},{value:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function _(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"dma-controller",children:"DMA Controller"}),"\n",(0,d.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecdRTOS \u4e2dDMA \u9a71\u52a8\u7684\u63a5\u53e3\u53ca\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3aDMA \u7684\u4f7f\u7528\u8005\u63d0\u4f9b\u53c2\u8003\u3002"}),"\n",(0,d.jsx)(e.p,{children:"DMA \u4e3b\u8981\u5b9e\u73b0\u8bbe\u5907\u4e0e\u8bbe\u5907\u3001\u8bbe\u5907\u4e0e memory\u3001memory \u4e0e memory \u4e4b\u95f4\u7684\u6570\u636e\u642c\u8fd0\u4e0e\u4f20\u8f93\uff1bBSP DMA \u9a71\u52a8\u4e3b\u8981\u5b9e\u73b0\u8bbe\u5907\u9a71\u52a8\u7684\u5e95\u5c42\u7ec6\u8282\uff0c\u5e76\u4e3a\u4e0a\u5c42\u63d0\u4f9b\u4e00\u5957\u6807\u51c6\u7684 API \u63a5\u53e3\u4ee5\u4f9b\u4f7f\u7528\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u6587\u6863\u7ea6\u5b9a",children:"\u6587\u6863\u7ea6\u5b9a"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{style:{textAlign:"left"},children:"\u6570\u636e"}),(0,d.jsx)(e.th,{style:{textAlign:"left"},children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{style:{textAlign:"left"},children:"DRQSRC_XXX"}),(0,d.jsx)(e.td,{style:{textAlign:"left"},children:"\u6e90 DRQ \u53f7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{style:{textAlign:"left"},children:"DRQDST_XXX"}),(0,d.jsx)(e.td,{style:{textAlign:"left"},children:"\u76ee\u7684 DRQ \u53f7"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"Drivers Options \u2014>\n    soc related device drivers \u2014>\n        DMA Devices \u2014>\n            [*] enable dma driver\n            [*]     enable dma hal API test command\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u6e90\u7801\u7ed3\u6784",children:"\u6e90\u7801\u7ed3\u6784"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal/source/dma/       ---- \u9a71\u52a8\u6e90\u7801\n\u251c\u2500\u2500 hal_dma.c\n\u251c\u2500\u2500 Kconfig\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 platform\n\u2502   \u2514\u2500\u2500 dma-sun20iw3.h\n\u251c\u2500\u2500 platform-dma.h\n\ninclude/hal/          ---- \u9a71\u52a8APIs\u58f0\u660e\u5934\u6587\u4ef6\n\u2514\u2500\u2500 hal_dma.h\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u9a71\u52a8\u6846\u67b6",children:"\u9a71\u52a8\u6846\u67b6"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:"http://photos.100ask.net/aw-r128-docs/rtos/developer-guide/part2/chapter4/image1.jpg",alt:"image1"})}),"\n",(0,d.jsx)(e.h2,{id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",children:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,d.jsx)(e.p,{children:"\u5934\u6587\u4ef6\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"#include <hal_dma.h>\n#include <sunxi_hal_common.h>\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u7533\u8bf7-dma-\u901a\u9053",children:"\u7533\u8bf7 DMA \u901a\u9053"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_chan_status_t hal_dma_chan_request(struct sunxi_dma_chan **dma_chan)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"dma_chan: \u5b58\u653e DMA \u901a\u9053\u7684\u6307\u9488\u53d8\u91cf"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_CHAN_STATUS_BUSY: \u7533\u8bf7\u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_CHAN_STATUS_FREE: \u7533\u8bf7\u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u91ca\u653e-dma-\u901a\u9053",children:"\u91ca\u653e DMA \u901a\u9053"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_chan_free(struct sunxi_dma_chan *chan)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"chan: \u8981\u91ca\u653e\u7684 DMA \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u91ca\u653e-dma-\u901a\u9053\u63cf\u8ff0\u7b26",children:"\u91ca\u653e DMA \u901a\u9053\u63cf\u8ff0\u7b26"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_chan_desc_free(struct sunxi_dma_chan *chan)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"chan: \u8981\u91ca\u653e\u7684 DMA \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u521d\u59cb\u5316\u73af\u5f62-dma-\u4f20\u8f93",children:"\u521d\u59cb\u5316\u73af\u5f62 DMA \u4f20\u8f93"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_prep_cyclic(struct sunxi_dma_chan *chan, uint32_t buf_addr, uint32_t buf_len, uint32_t period_len, enum dma_transfer_direction dir)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n",(0,d.jsx)(e.li,{children:"buf_addr: \u6570\u636e\u7f13\u51b2\u533a"}),"\n",(0,d.jsx)(e.li,{children:"buf_len: \u6570\u636e\u7f13\u51b2\u533a\u957f\u5ea6"}),"\n",(0,d.jsx)(e.li,{children:"period_len: \u5355\u6b21 DMA \u642c\u8fd0\u957f\u5ea6"}),"\n",(0,d.jsxs)(e.li,{children:["dir",":DMA"," \u4f20\u8f93\u65b9\u5411"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u521d\u59cb\u5316-memory-to-memory-dma-\u4f20\u8f93",children:"\u521d\u59cb\u5316 memory to memory DMA \u4f20\u8f93"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_prep_memcpy(struct sunxi_dma_chan *chan, uint32_t dest, uint32_t src, uint32_t len)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n",(0,d.jsx)(e.li,{children:"dest: \u76ee\u7684\u5730\u5740"}),"\n",(0,d.jsx)(e.li,{children:"src: \u6e90\u5730\u5740"}),"\n",(0,d.jsx)(e.li,{children:"len: \u4f20\u8f93\u957f\u5ea6"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u521d\u59cb\u5316\u901a\u7528-dma-\u4f20\u8f93",children:"\u521d\u59cb\u5316\u901a\u7528 DMA \u4f20\u8f93"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_prep_device(struct sunxi_dma_chan *chan, uint32_t dest, uint32_t src, uint32_t len, enum dma_transfer_direction dir)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n",(0,d.jsx)(e.li,{children:"dest: \u76ee\u7684\u5730\u5740"}),"\n",(0,d.jsx)(e.li,{children:"src: \u6e90\u5730\u5740"}),"\n",(0,d.jsx)(e.li,{children:"len: \u4f20\u8f93\u957f\u5ea6"}),"\n",(0,d.jsxs)(e.li,{children:["dir",":DMA"," \u4f20\u8f93\u65b9\u5411"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u6ce8\u518c-dma-\u56de\u8c03\u51fd\u6570",children:"\u6ce8\u518c DMA \u56de\u8c03\u51fd\u6570"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_callback_install(struct sunxi_dma_chan *chan, dma_callback callback, void *callback_param)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n",(0,d.jsx)(e.li,{children:"callback: \u56de\u8c03\u51fd\u6570 handler"}),"\n",(0,d.jsx)(e.li,{children:"callback_param: \u56de\u8c03\u51fd\u6570\u4f20\u53c2"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u914d\u7f6e-dma-\u63cf\u8ff0\u7b26\u4f20\u8f93\u4fe1\u606f",children:"\u914d\u7f6e DMA \u63cf\u8ff0\u7b26\u4f20\u8f93\u4fe1\u606f"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_slave_config(struct sunxi_dma_chan *chan, struct dma_slave_config *config)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n",(0,d.jsxs)(e.li,{children:["config",":DMA"," \u63cf\u8ff0\u7b26\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u83b7\u53d6-dma-\u53d1\u9001\u72b6\u6001",children:"\u83b7\u53d6 DMA \u53d1\u9001\u72b6\u6001"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"enum dma_status hal_dma_tx_status(struct sunxi_dma_chan *chan, uint32_t *left_size)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8"]}),"\n",(0,d.jsx)(e.li,{children:"left_size: \u5b58\u653e\u5269\u4f59\u957f\u5ea6\u7684\u6307\u9488\u53d8\u91cf"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"DMA_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"DMA_IN_PROGRESS: \u6b63\u5728\u8fdb\u884c"}),"\n",(0,d.jsx)(e.li,{children:"DMA_COMPLETE: \u4f20\u8f93\u5b8c\u6210"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u542f\u52a8-dma-\u4f20\u8f93",children:"\u542f\u52a8 DMA \u4f20\u8f93"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_start(struct sunxi_dma_chan *chan)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u505c\u6b62-dma-\u4f20\u8f93",children:"\u505c\u6b62 DMA \u4f20\u8f93"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"hal_dma_status_t hal_dma_stop(struct sunxi_dma_chan *chan)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["chan",":DMA"," \u901a\u9053\u7ed3\u6784\u4f53\u6307\u9488\u53d8\u91cf"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_INVALID_PARAMETER: \u53c2\u6570\u975e\u6cd5"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_ERROR: \u5931\u8d25"}),"\n",(0,d.jsx)(e.li,{children:"HAL_DMA_STATUS_OK: \u6210\u529f"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u521d\u59cb\u5316-dma-\u63a7\u5236\u5668\u9a71\u52a8",children:"\u521d\u59cb\u5316 DMA \u63a7\u5236\u5668\u9a71\u52a8"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void hal_dma_init(void)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u65e0"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u65e0"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u7533\u8bf7\u4e00\u81f4\u6027\u5185\u5b58",children:"\u7533\u8bf7\u4e00\u81f4\u6027\u5185\u5b58"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void *dma_alloc_coherent(size_t size)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"size: \u7533\u8bf7\u5185\u5b58\u7684\u5927\u5c0f"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"ptr: \u5185\u5b58\u7f13\u51b2\u533a\u6307\u9488"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"\u91ca\u653e\u4e00\u81f4\u6027\u5185\u5b58",children:"\u91ca\u653e\u4e00\u81f4\u6027\u5185\u5b58"}),"\n",(0,d.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"void dma_free_coherent(void *addr)\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"addr: \u5185\u5b58\u7f13\u51b2\u533a\u6307\u9488"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u65e0"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u8c03\u8bd5\u8282\u70b9",children:"\u8c03\u8bd5\u8282\u70b9"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.code,{children:"menuconfig"})," \u9009\u62e9\u6d4b\u8bd5\u6587\u4ef6",(0,d.jsx)(e.code,{children:"CONFIG_HAL_TEST_DMA"})]}),"\n",(0,d.jsxs)(e.li,{children:["s\u7cfb\u7edf\u542f\u52a8\u540e\u6267\u884c",(0,d.jsx)(e.code,{children:"hal_dma"}),"\u5373\u53ef\uff0c\u82e5\u7ed3\u679c\u4e3a \u201cPASS\u201d, \u5219\u8868\u660e\u5f53\u524d DMA \u57fa\u672c\u529f\u80fd\u662f\u5426\u6b63\u5e38"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",children:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include <hal_log.h>\n#include <hal_cmd.h>\n#include <hal_mem.h>\n#include <hal_cache.h>\n#include <hal_dma.h>\n\n#include <sunxi_hal_common.h>\n\n#define DMA_TEST_LEN    1024\nstatic void dma_test_cb(void *param)\n{\n    hal_log_info("DMA finished, callback to do something...\\n");\n}\n\nint cmd_test_dma(int argc, char **argv)\n{\n    int ret, i;\n    struct sunxi_dma_chan *hdma = NULL;\n    char *buf1 = NULL,*buf2 = NULL;\n    struct dma_slave_config config = {0};\n    uint32_t size = 0;\n\n    hal_log_info("run in dma test");\n\n    buf2 = dma_alloc_coherent(DMA_TEST_LEN);\n    buf1 = dma_alloc_coherent(DMA_TEST_LEN);\n\n    if (buf1 == NULL) {\n        hal_log_err("malloc buf1 error!");\n        goto end;\n    }\n\n    if (buf2 == NULL) {\n        hal_log_err("malloc buf2 error!");\n        goto end;\n    }\n\n    memset(buf1, 0, DMA_TEST_LEN);\n    memset(buf2, 0, DMA_TEST_LEN);\n\n    for (i = 0;i < DMA_TEST_LEN; i++)\n        buf1[i] = i & 0xff;\n\n    hal_dcache_clean_invalidate((unsigned long)buf1, DMA_TEST_LEN);\n    hal_dcache_clean_invalidate((unsigned long)buf2, DMA_TEST_LEN);\n\n    /* request dma chan */\n    ret = hal_dma_chan_request(&hdma);\n    if (ret == HAL_DMA_CHAN_STATUS_BUSY) {\n        hal_log_err("dma channel busy!");\n        goto end;\n    }\n\n    /* register dma callback */\n    ret = hal_dma_callback_install(hdma, dma_test_cb, hdma);\n    if (ret != HAL_DMA_STATUS_OK) {\n        hal_log_err("register dma callback failed!");\n        goto end;\n    }\n\n    config.direction = DMA_MEM_TO_MEM;\n    config.dst_addr_width = DMA_SLAVE_BUSWIDTH_8_BYTES;\n    config.src_addr_width = DMA_SLAVE_BUSWIDTH_8_BYTES;\n    config.dst_maxburst = DMA_SLAVE_BURST_16;\n    config.src_maxburst = DMA_SLAVE_BURST_16;\n    config.slave_id = sunxi_slave_id(DRQDST_SDRAM, DRQSRC_SDRAM);\n\n    ret = hal_dma_slave_config(hdma, &config);\n\n    if (ret != HAL_DMA_STATUS_OK) {\n        hal_log_err("dma config error, ret:%d", ret);\n        goto end;\n    }\n\n    ret = hal_dma_prep_memcpy(hdma, (unsigned long)buf2, (unsigned long)buf1, DMA_TEST_LEN);\n    if (ret != HAL_DMA_STATUS_OK) {\n        hal_log_err("dma prep error, ret:%d", ret);\n        goto end;\n    }\n\n    ret = hal_dma_start(hdma);\n    if (ret != HAL_DMA_STATUS_OK) {\n        hal_log_err("dma start error, ret:%d", ret);\n        goto end;\n    }\n\n    while (hal_dma_tx_status(hdma, &size)!= 0);\n\n    ret = hal_dma_stop(hdma);\n    if (ret != HAL_DMA_STATUS_OK) {\n        hal_log_err("dma stop error, ret:%d", ret);\n        goto end;\n    }\n\n    ret = hal_dma_chan_free(hdma);\n    if (ret != HAL_DMA_STATUS_OK) {\n        hal_log_err("dma free error, ret:%d", ret);\n        goto end;\n    }\n\n    hal_dcache_invalidate((unsigned long)buf2, DMA_TEST_LEN);\n\n    hal_log_info("src buf:\\n");\n    for (i = 0;i < DMA_TEST_LEN; i++) {\n        if (i % 16 == 0)\n            printf("\\n");\n        printf("%02x ", buf1[i]);\n    }\n    printf("\\n\\n\\n");\n    hal_log_info("dst buf:\\n");\n    for (i = 0;i < DMA_TEST_LEN; i++) {\n        if (i % 16 == 0)\n            printf("\\n");\n        printf("%02x ", buf2[i]);\n    }\n    printf("\\n\\n\\n");\n\n    if (memcmp(buf1, buf2, DMA_TEST_LEN) != 0)\n        printf("dma test fail\\n");\n    else\n        printf("dma test pass\\n");\n\nend:\n    dma_free_coherent(buf1);\n    dma_free_coherent(buf2);\n\n    return 0;\n}\n\nFINSH_FUNCTION_EXPORT_CMD(cmd_test_dma, hal_dma, dma hal APIs tests)\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsx)(e.li,{children:"\u4f7f\u7528\u65f6\u51fa\u73b0\u6570\u636e\u642c\u8fd0\u540e\u6570\u636e\u4e3a 0 \u7684\u60c5\u51b5"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u786e\u4fdd\u4f20\u8f93\u5185\u5b58\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"dma_alloc_coherent"})," \u7533\u8bf7"]})]})}function t(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(_,{...n})}):_(n)}},1151:(n,e,l)=>{l.d(e,{Z:()=>c,a:()=>s});var d=l(7294);const i={},r=d.createContext(i);function s(n){const e=d.useContext(r);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);