"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[277],{3869:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var _=t(5893),r=t(1151);const s={},i="Crypto Engine",a={id:"developer-guide/part2/chapter1",title:"Crypto Engine",description:"\u6a21\u5757\u4ecb\u7ecd",source:"@site/docs/developer-guide/part2/chapter1.md",sourceDirName:"developer-guide/part2",slug:"/developer-guide/part2/chapter1",permalink:"/developer-guide/part2/chapter1",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/R128-Docs/tree/main/docs/developer-guide/part2/chapter1.md",tags:[],version:"current",frontMatter:{},sidebar:"classpartoneSidebar",previous:{title:"SDK HAL \u6a21\u5757\u5f00\u53d1\u6307\u5357",permalink:"/category/sdk-hal-\u6a21\u5757\u5f00\u53d1\u6307\u5357"},next:{title:"IR",permalink:"/developer-guide/part2/chapter10"}},c={},d=[{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"\u6a21\u5757\u914d\u7f6e",id:"\u6a21\u5757\u914d\u7f6e",level:2},{value:"\u6e90\u7801\u7ed3\u6784",id:"\u6e90\u7801\u7ed3\u6784",level:2},{value:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",level:2},{value:"CE \u521d\u59cb\u5316\u63a5\u53e3",id:"ce-\u521d\u59cb\u5316\u63a5\u53e3",level:3},{value:"CE \u53bb\u521d\u59cb\u5316\u63a5\u53e3",id:"ce-\u53bb\u521d\u59cb\u5316\u63a5\u53e3",level:3},{value:"AES \u7b97\u6cd5\u52a0\u89e3\u5bc6\u63a5\u53e3",id:"aes-\u7b97\u6cd5\u52a0\u89e3\u5bc6\u63a5\u53e3",level:3},{value:"HASH \u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",id:"hash-\u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",level:3},{value:"RSA \u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",id:"rsa-\u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",level:3},{value:"RNG \u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",id:"rng-\u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",level:3},{value:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(e.h1,{id:"crypto-engine",children:"Crypto Engine"}),"\n",(0,_.jsx)(e.h2,{id:"\u6a21\u5757\u4ecb\u7ecd",children:"\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,_.jsx)(e.p,{children:"CE \u6a21\u5757\u4e3b\u8981\u652f\u6301\u5bf9\u79f0\u7b97\u6cd5\u3001\u975e\u5bf9\u79f0\u7b97\u6cd5\u3001\u6458\u8981\u7b97\u6cd5\u8fdb\u884c\u6570\u636e\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u529f\u80fd\u3002"}),"\n",(0,_.jsx)(e.p,{children:"CE \u6a21\u5757\u4e3b\u8981\u652f\u6301\u7684\u7b97\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"AES \u7b97\u6cd5 ECB/CBC/CTR/CTS/OFB/CFB/CBC-MAC/XTS \u7b49\u6a21\u5f0f."}),"\n",(0,_.jsx)(e.li,{children:"HASH \u7b97\u6cd5 MD5/SHA1/SHA224/SHA256/SHA384/SHA512/HMAC-SHA1/HMAC-SHA256."}),"\n",(0,_.jsx)(e.li,{children:"\u975e\u5bf9\u79f0\u7b97\u6cd5 RSA512/1024/2048/3072/4096."}),"\n"]}),"\n",(0,_.jsx)(e.h2,{id:"\u6a21\u5757\u914d\u7f6e",children:"\u6a21\u5757\u914d\u7f6e"}),"\n",(0,_.jsx)(e.p,{children:"\u5176menuconfig \u7684\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"Kernel Setup ---\x3e\n    Drivers Setup ---\x3e\n        SoC HAL Drivers ---\x3e\n            CE devices ---\x3e\n                [*] enable ce driver\n                [*] enbale ce hal APIs Test command\n"})}),"\n",(0,_.jsx)(e.h2,{id:"\u6e90\u7801\u7ed3\u6784",children:"\u6e90\u7801\u7ed3\u6784"}),"\n",(0,_.jsxs)(e.p,{children:["CE \u9a71\u52a8\u4f4d\u4e8e ",(0,_.jsx)(e.code,{children:"source/drivers/hal/source/ce/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"hal/\n\u251c\u2500\u2500 source\n\u2502 \u251c\u2500\u2500 ce\n\u2502 \u2502 \u251c\u2500\u2500 ce_common.c    # CE\u516c\u7528\u64cd\u4f5c\u63a5\u53e3\u51fd\u6570\u6587\u4ef6\n\u2502 \u2502 \u251c\u2500\u2500 ce_common.h    # CE\u64cd\u4f5c\u63a5\u53e3\u51fd\u6570\u5934\u6587\u4ef6\n\u2502 \u2502 \u251c\u2500\u2500 hal_ce.c       # CE\u5e95\u5c42\u9a71\u52a8\u6587\u4ef6\n\u2502 \u2502 \u251c\u2500\u2500 hal_ce.h       # CE\u5e95\u5c42\u9a71\u52a8\u5934\u6587\u4ef6\n\u2502 \u2502 \u251c\u2500\u2500 Makefile\n\u2502 \u2502 \u2514\u2500\u2500 platform.h     # \u5e73\u53f0\u914d\u7f6e\u5934\u6587\u4ef6\n| \u251c\u2500\u2500 platform\n\u2502 \u2514\u2500\u2500 ce_sun20iw2.h    # \u5177\u4f53\u7684\u5e73\u53f0\u914d\u7f6e\u5934\u6587\u4ef6\n\u251c\u2500\u2500 include/hal\n  \u2514\u2500\u2500 sunxi_hal_ce.h   # CE\u516c\u7528\u64cd\u4f5c\u63a5\u53e3\u51fd\u6570\u5934\u6587\u4ef6\n"})}),"\n",(0,_.jsx)(e.h2,{id:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e",children:"\u6a21\u5757\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,_.jsx)(e.p,{children:"\u5934\u6587\u4ef6"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"#include <sunxi_hal_ce.h>\n"})}),"\n",(0,_.jsx)(e.h3,{id:"ce-\u521d\u59cb\u5316\u63a5\u53e3",children:"CE \u521d\u59cb\u5316\u63a5\u53e3"}),"\n",(0,_.jsx)(e.p,{children:"CE \u6a21\u5757\u521d\u59cb\u5316\uff0c\u4e3b\u8981\u7533\u8bf7\u4e2d\u65ad\u3001clk \u521d\u59cb\u5316\u7b49"}),"\n",(0,_.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"int sunxi_ce_init(void)\n"})}),"\n",(0,_.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"\u65e0"}),"\n"]}),"\n",(0,_.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,_.jsx)(e.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,_.jsx)(e.h3,{id:"ce-\u53bb\u521d\u59cb\u5316\u63a5\u53e3",children:"CE \u53bb\u521d\u59cb\u5316\u63a5\u53e3"}),"\n",(0,_.jsx)(e.p,{children:"CE \u6a21\u5757\u53bb\u521d\u59cb\u5316\uff0c\u4e3b\u8981\u6ce8\u9500\u4e2d\u65ad\u7b49"}),"\n",(0,_.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"int sunxi_ce_uninit(void)\n"})}),"\n",(0,_.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"\u65e0"}),"\n"]}),"\n",(0,_.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,_.jsx)(e.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,_.jsx)(e.h3,{id:"aes-\u7b97\u6cd5\u52a0\u89e3\u5bc6\u63a5\u53e3",children:"AES \u7b97\u6cd5\u52a0\u89e3\u5bc6\u63a5\u53e3"}),"\n",(0,_.jsx)(e.p,{children:"\u4e3b\u8981\u5b9e\u73b0\u5bf9 AES \u7b97\u6cd5\u8fdb\u884c\u52a0\u89e3\u5bc6"}),"\n",(0,_.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"int do_aes_crypto(crypto_aes_req_ctx_t *req_ctx)\n"})}),"\n",(0,_.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"req_ctx: \u4e3a AES \u7b97\u6cd5\u4e0a\u4e0b\u6587\u7684\u7ed3\u6784\u4f53"}),"\n"]}),"\n",(0,_.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,_.jsx)(e.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"typedef struct {\n    uint8_t *src_buffer;\n    uint32_t src_length;\n    uint8_t *dst_buffer;\n    uint32_t dst_length;\n    uint8_t *iv;\n    uint8_t *iv_next;\n    uint8_t *key;\n    uint32_t key_length;\n    __aligned(CACHELINE_LEN) uint8_t padding[AES_BLOCK_SIZE];\n    uint32_t padding_len;\n    uint32_t dir;           /*0--\u52a0\u5bc6\uff0c1--\u89e3\u5bc6*/\n    uint32_t mode;          /*AES\u7b97\u6cd5\u7684\u6a21\u5f0f*/\n    uint32_t bitwidth;\n} crypto_aes_req_ctx_t;\n"})}),"\n",(0,_.jsx)(e.h3,{id:"hash-\u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",children:"HASH \u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3"}),"\n",(0,_.jsx)(e.p,{children:"\u4e3b\u8981\u5b9e\u73b0\u5bf9HASH \u7b97\u6cd5\u8fdb\u884c\u8fd0\u7b97"}),"\n",(0,_.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"int do_hash_crypto(crypto_hash_req_ctx_t *req_ctx)\n"})}),"\n",(0,_.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"req_ctx: \u4e3aHASH \u7b97\u6cd5\u4e0a\u4e0b\u6587\u7684\u7ed3\u6784\u4f53"}),"\n"]}),"\n",(0,_.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,_.jsx)(e.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"typedef struct {\n    uint8_t *src_buffer;\n    uint32_t src_length;\n    uint8_t *dst_buffer;\n    uint32_t dst_length;\n    __aligned(CACHELINE_LEN) uint8_t md[SHA_MAX_DIGEST_SIZE];\n    uint32_t md_size;\n    __aligned(CACHELINE_LEN) uint8_t padding[SHA512_BLOCK_SIZE * 2];\n    uint32_t padding_len;\n    uint32_t type;          /*hash\u7b97\u6cd5\u7684\u6a21\u5f0f*/\n    uint32_t dir;\n    uint32_t padding_mode;  /*hash\u7b97\u6cd5\u7684\u586b\u5145\u6a21\u5f0f*/\n} crypto_hash_req_ctx_t;\n"})}),"\n",(0,_.jsx)(e.h3,{id:"rsa-\u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",children:"RSA \u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3"}),"\n",(0,_.jsx)(e.p,{children:"\u4e3b\u8981\u5b9e\u73b0\u5bf9RSA \u7b97\u6cd5\u8fdb\u884c\u52a0\u89e3\u5bc6"}),"\n",(0,_.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"int do_rsa_crypto(crypto_rsa_req_ctx_t *req_ctx)\n"})}),"\n",(0,_.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"req_ctx: \u4e3a RSA\u7b97\u6cd5\u4e0a\u4e0b\u6587\u7684\u7ed3\u6784\u4f53"}),"\n"]}),"\n",(0,_.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,_.jsx)(e.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"typedef struct {\n    uint8_t *key_n;    /*\u516c\u94a5\u6a21\u6570*/\n    uint32_t n_len;\n    uint8_t *key_e;    /*\u516c\u94a5\u6307\u6570*/\n    uint32_t e_len;\n    uint8_t *key_d;    /*\u79c1\u94a5*/\n    uint32_t d_len;\n    uint8_t *src_buffer;\n    uint32_t src_length;\n    uint8_t *dst_buffer;\n    uint32_t dst_length;\n    uint32_t dir;      /*0--\u52a0\u5bc6\uff0c1--\u89e3\u5bc6*/\n    uint32_t type;     /*RSA\u7b97\u6cd5\u7684\u6a21\u5f0f*/\n    uint32_t bitwidth; /*RSA\u7b97\u6cd5\u4f4d\u5bbd*/\n} crypto_rsa_req_ctx_t;\n"})}),"\n",(0,_.jsx)(e.h3,{id:"rng-\u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3",children:"RNG \u7b97\u6cd5\u8fd0\u7b97\u63a5\u53e3"}),"\n",(0,_.jsx)(e.p,{children:"\u4e3b\u8981\u5b9e\u73b0\u968f\u673a\u6570\u7684\u751f\u6210"}),"\n",(0,_.jsx)(e.p,{children:"\u51fd\u6570\u539f\u578b\uff1a"}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"int do_rng_gen(crypto_rsa_req_ctx_t *req_ctx)\n"})}),"\n",(0,_.jsx)(e.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"req_ctx: \u4e3a RNG \u7b97\u6cd5\u4e0a\u4e0b\u6587\u7684\u7ed3\u6784\u4f53"}),"\n"]}),"\n",(0,_.jsx)(e.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,_.jsxs)(e.ul,{children:["\n",(0,_.jsx)(e.li,{children:"0\uff1a\u6210\u529f"}),"\n",(0,_.jsx)(e.li,{children:"\u8d1f\u6570\uff1a\u5931\u8d25"}),"\n"]}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:"typedef struct {\n    uint8_t *rng_buf;\n    uint32_t rng_len;\n    uint32_t mode;\n    uint8_t *key;\n    uint32_t key_len;\n} crypto_rng_req_ctx_t;\n"})}),"\n",(0,_.jsx)(e.h2,{id:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b",children:"\u6a21\u5757\u4f7f\u7528\u8303\u4f8b"}),"\n",(0,_.jsxs)(e.p,{children:["\u7531\u4e8e\u6d4b\u8bd5\u7528\u4f8b\u8f83\u5927\uff0c\u6240\u4ee5\u5c06\u5176\u62c6\u5206\u8fdb\u5165\u4e00\u4e2a\u5934\u6587\u4ef6\u5185\uff0c\u53ef\u4ee5\u4ece\u8fd9\u91cc\u4e0b\u8f7d\uff1a",(0,_.jsx)(e.a,{href:"https://r128.docs.aw-ol.com/sdk_module/ce/sdk_module/assets/demo/ce/test_ce.h",children:"test_ce.h"})]}),"\n",(0,_.jsx)(e.pre,{children:(0,_.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <string.h>\n#include <unistd.h>\n\n#include <hal_cmd.h>\n#include <hal_mem.h>\n#include <sunxi_hal_ce.h>\n#include "test_ce.h"\n\n#define AES_MODE_ECB (0)\n#define AES_MODE_CBC (1)\n#define AES_MODE_CTR (2)\n#define AES_MODE_CTS (3)\n#define AES_MODE_OFB (4)\n#define AES_MODE_CFB (5)\n\n#define AES_DIR_ENCRYPT (0)\n#define AES_DIR_DECRYPT (1)\n\n#define HASH_METHOD_MD5 (16)\n#define HASH_METHOD_SHA1 (17)\n#define HASH_METHOD_SHA224 (18)\n#define HASH_METHOD_SHA256 (19)\n#define HASH_METHOD_SHA384 (20)\n#define HASH_METHOD_SHA512 (21)\n\nvoid ce_dump(char *str, unsigned char *data, int len, int align) {\n  int i = 0;\n  if (str) printf("\\n%s: ", str);\n  for (i = 0; i < len; i++) {\n    if ((i % align) == 0) {\n      printf("\\n");\n      printf("0x08%x: ", data + i * align);\n    }\n    printf("%02x ", *(data++));\n  }\n  printf("\\n");\n}\n\nint aes_test(void) {\n  int ret = -1;\n  int i = 0;\n  int j = 0;\n  int m = 0;\n  uint8_t *enc_buffer = 0;\n  uint32_t enc_len = 0;\n  uint32_t blk_num = 0;\n  __aligned(CACHELINE_LEN) uint8_t iv_next[AES_BLOCK_SIZE] = {0};\n  uint8_t *(*aes_enc[])[5] = {aes_ecb, aes_cbc, aes_ctr,\n                              aes_cbc, aes_ofb, aes_cfb8};\n  crypto_aes_req_ctx_t *aes_ctx = NULL;\n\n  aes_ctx = (crypto_aes_req_ctx_t *)hal_malloc_align(\n      sizeof(crypto_aes_req_ctx_t), max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (aes_ctx == NULL) {\n    printf(" malloc data buffer fail\\n");\n    return -1;\n  }\n  memset(aes_ctx, 0x0, sizeof(crypto_aes_req_ctx_t));\n\n  aes_ctx->dst_buffer =\n      (u8 *)hal_malloc_align(512, max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (aes_ctx->dst_buffer == NULL) {\n    printf(" malloc dest buffer fail\\n");\n    ret = -1;\n    goto out;\n  }\n\n  for (m = AES_MODE_ECB; m < AES_MODE_CFB + 1; m++) {\n    for (i = 0; i < sizeof(aes_key_len) / sizeof(aes_key_len[0]); i++) {\n      for (j = 0; j < sizeof(aes_src) / sizeof(aes_src[0]); j++) {\n        /* aes encrypt */\n        aes_ctx->src_buffer = aes_src[j];\n        aes_ctx->src_length = aes_src_len[j];\n        aes_ctx->key = aes_key[i];\n        aes_ctx->key_length = aes_key_len[i];\n        if (m == AES_MODE_ECB)\n          aes_ctx->iv = NULL;\n        else\n          aes_ctx->iv = aes_iv;\n        if (m == AES_MODE_CTR) {\n          memset(iv_next, 0, AES_BLOCK_SIZE);\n          aes_ctx->iv_next = iv_next;\n        } else\n          aes_ctx->iv_next = NULL;\n        if (m == AES_MODE_CFB)\n          aes_ctx->bitwidth = 8;\n        else\n          aes_ctx->bitwidth = 0;\n        aes_ctx->mode = m;\n        aes_ctx->dir = AES_DIR_ENCRYPT;\n        aes_ctx->dst_length = CE_ROUND_UP(aes_ctx->src_length, AES_BLOCK_SIZE);\n\n        printf(\n            "###############AES, mode: %d, ksize %d, src len %d, "\n            "begin###############\\n",\n            m, aes_key_len[i], aes_src_len[j]);\n\n        ret = do_aes_crypto(aes_ctx);\n        if (ret < 0) {\n          printf("aes encrypt fail %d\\n", ret);\n          goto out;\n        }\n\n        // for ecb/cbc/cts, enc data len should be 16 bytes aligned\n        if (m == AES_MODE_ECB || m == AES_MODE_CBC || m == AES_MODE_CTS)\n          enc_len = aes_ctx->dst_length;\n        else\n          enc_len = aes_src_len[j];\n\n        // openssl enc do not support cts, so create enc data manually.\n        if (m == AES_MODE_CTS) {\n          enc_buffer = (uint8_t *)hal_malloc_align(\n              enc_len, max(CE_ALIGN_SIZE, CACHELINE_LEN));\n          if (enc_buffer == NULL) {\n            printf("malloc ctr buffer fail\\n");\n            ret = -1;\n            goto out;\n          }\n\n          blk_num = enc_len / AES_BLOCK_SIZE;\n          if (blk_num > 1) {\n            if (blk_num > 2)\n              memcpy(enc_buffer, aes_enc[m - AES_MODE_ECB][i][j],\n                     (blk_num - 2) * AES_BLOCK_SIZE);\n            memcpy(enc_buffer + (blk_num - 2) * AES_BLOCK_SIZE,\n                   aes_enc[m - AES_MODE_ECB][i][j] +\n                       (blk_num - 1) * AES_BLOCK_SIZE,\n                   AES_BLOCK_SIZE);\n            memcpy(enc_buffer + (blk_num - 1) * AES_BLOCK_SIZE,\n                   aes_enc[m - AES_MODE_ECB][i][j] +\n                       (blk_num - 2) * AES_BLOCK_SIZE,\n                   AES_BLOCK_SIZE);\n          } else {\n            memcpy(enc_buffer, aes_enc[m - AES_MODE_ECB][i][j], enc_len);\n          }\n        } else\n          enc_buffer = aes_enc[m - AES_MODE_ECB][i][j];\n\n        if (memcmp(aes_ctx->dst_buffer, enc_buffer, enc_len) != 0) {\n          ce_dump("want data: ", enc_buffer, enc_len, 16);\n          ce_dump("calc data: ", aes_ctx->dst_buffer, enc_len, 16);\n          printf(\n              "###############AES ENC, mode: %d, ksize %d, src len %d, "\n              "fail###############\\n",\n              m, aes_key_len[i], aes_src_len[j]);\n          ret = -1;\n          goto out;\n        }\n\n        /* aes decrypt */\n        memset(aes_ctx->dst_buffer, 0x0, aes_ctx->dst_length);\n        aes_ctx->dir = AES_DIR_DECRYPT;\n        aes_ctx->src_buffer = enc_buffer;\n        aes_ctx->src_length = enc_len;\n\n        ret = do_aes_crypto(aes_ctx);\n        if (ret < 0) {\n          printf("aes decrypt fail %d\\n", ret);\n          goto out;\n        }\n\n        if (memcmp(aes_ctx->dst_buffer, aes_src[j], aes_src_len[j]) != 0) {\n          ce_dump("want data: ", aes_src[j], aes_src_len[j], 16);\n          ce_dump("calc data: ", aes_ctx->dst_buffer, aes_src_len[j], 16);\n          printf(\n              "###############AES DEC, mode: %d, ksize %d, src len %d, "\n              "fail###############\\n",\n              m, aes_key_len[i], aes_src_len[j]);\n          ret = -1;\n          goto out;\n        }\n\n        if (m == AES_MODE_CTS) {\n          if (enc_buffer) hal_free_align(enc_buffer);\n        }\n\n        printf(\n            "###############AES, mode: %d, ksize %d, src len %d, "\n            "pass###############\\n\\n\\n",\n            m, aes_key_len[i], aes_src_len[j]);\n      }\n    }\n  }\n\nout:\n  if (aes_ctx->dst_buffer != NULL) {\n    hal_free_align(aes_ctx->dst_buffer);\n  }\n  if (m == AES_MODE_CTS) {\n    if (enc_buffer) hal_free_align(enc_buffer);\n  }\n\n  hal_free_align(aes_ctx);\n\n  return ret;\n}\n\nint hash_test(void) {\n  int i = 0;\n  int j = 0;\n  uint8_t *dst_data = NULL;\n  // uint32_t data_size = 512; SHA_MAX_DIGEST_SIZE\n  uint32_t data_size = SHA_MAX_DIGEST_SIZE;\n  uint32_t hash_length = 0;\n  int ret = -1;\n  uint8_t *(*hash_digest[]) = {hash_md5,    hash_sha1,   hash_sha224,\n                               hash_sha256, hash_sha384, hash_sha512};\n  crypto_hash_req_ctx_t *hash_ctx = NULL;\n\n  hash_ctx = (crypto_hash_req_ctx_t *)hal_malloc_align(\n      sizeof(crypto_hash_req_ctx_t), max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (hash_ctx == NULL) {\n    printf(" malloc hash_ctx fail\\n");\n    ret = -1;\n    goto out;\n  }\n\n  /*malloc dst buf*/\n  dst_data =\n      (u8 *)hal_malloc_align(data_size, max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (dst_data == NULL) {\n    printf(" malloc dst buffer fail\\n");\n    ret = -1;\n    goto out;\n  }\n\n  for (i = HASH_METHOD_MD5; i < HASH_METHOD_SHA512 + 1; i++) {\n    for (j = 0; j < sizeof(hash_src_len) / sizeof(hash_src_len[0]); j++) {\n      memset(hash_ctx, 0x0, sizeof(crypto_hash_req_ctx_t));\n      hash_ctx->src_buffer = hash_src[j];\n      hash_ctx->src_length = hash_src_len[j];\n      memset(dst_data, 0x0, data_size);\n      hash_ctx->dst_buffer = dst_data;\n      hash_ctx->type = i;\n      hash_ctx->md_size = 0;\n      switch (i) {\n        case HASH_METHOD_MD5:\n          hash_ctx->dst_length = MD5_DIGEST_SIZE;\n          hash_length = MD5_DIGEST_SIZE;\n          break;\n        case HASH_METHOD_SHA1:\n          hash_ctx->dst_length = SHA1_DIGEST_SIZE;\n          hash_length = SHA1_DIGEST_SIZE;\n          break;\n        case HASH_METHOD_SHA224:\n          hash_ctx->dst_length = SHA256_DIGEST_SIZE;\n          hash_length = SHA224_DIGEST_SIZE;\n          break;\n        case HASH_METHOD_SHA256:\n          hash_ctx->dst_length = SHA256_DIGEST_SIZE;\n          hash_length = SHA256_DIGEST_SIZE;\n          break;\n        case HASH_METHOD_SHA384:\n          hash_ctx->dst_length = SHA512_DIGEST_SIZE;\n          hash_length = SHA384_DIGEST_SIZE;\n          break;\n        case HASH_METHOD_SHA512:\n          hash_ctx->dst_length = SHA512_DIGEST_SIZE;\n          hash_length = SHA512_DIGEST_SIZE;\n          break;\n        default:\n          break;\n      }\n\n      printf("############hash type: %d, src len: %d, begin#############\\n", i,\n             hash_src_len[j]);\n\n      ret = do_hash_crypto(hash_ctx);\n      if (ret < 0) {\n        printf("do_hash_crypto fail\\n");\n        goto out;\n      }\n\n      if (memcmp(hash_ctx->dst_buffer, hash_digest[i - HASH_METHOD_MD5][j],\n                 hash_length) == 0) {\n        printf(\n            "############hash type: %d, src len: %d, pass#############\\n\\n\\n",\n            i, hash_src_len[j]);\n      } else {\n        ce_dump("want digest: ", hash_digest[i - HASH_METHOD_MD5][j],\n                hash_length, 16);\n        ce_dump("calc digest: ", hash_ctx->dst_buffer, hash_length, 16);\n        printf(\n            "############hash type: %d, src len: %d, fail#############\\n\\n\\n",\n            i, hash_src_len[j]);\n        ret = -1;\n        goto out;\n      }\n    }\n  }\n\nout:\n  if (hash_ctx != NULL) {\n    hal_free_align(hash_ctx);\n  }\n\n  if (dst_data != NULL) {\n    hal_free_align(dst_data);\n  }\n\n  return ret;\n}\n\n#ifndef CONFIG_ARCH_SUN20IW2\nint rng_test(void) {\n  int ret = 0;\n  int i = 0;\n  uint8_t *rng_buf = NULL;\n  uint32_t rng_size[] = {16, 31, 32, 8100};\n  __aligned(CACHELINE_LEN) uint8_t key[24] = {\n      0xa1, 0xb7, 0x78, 0xf7, 0xbf, 0x2c, 0xfa, 0xad, 0x6a, 0x46, 0x79, 0xc2,\n      0xd2, 0x9c, 0x45, 0x1f, 0x3f, 0xcb, 0xef, 0xa5, 0x4e, 0x0e, 0xc3, 0x51};\n  uint32_t key_len = 24;\n  crypto_rng_req_ctx_t *rng_ctx = NULL;\n\n  rng_ctx = (crypto_rng_req_ctx_t *)hal_malloc_align(\n      sizeof(crypto_rng_req_ctx_t), max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (rng_ctx == NULL) {\n    printf(" malloc rng ctx fail\\n");\n    ret = -1;\n    goto out;\n  }\n\n  /*malloc trng buf*/\n  rng_buf = (u8 *)hal_malloc_align(8192, max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (rng_buf == NULL) {\n    printf("malloc rng buffer fail\\n");\n    ret = -1;\n    goto out;\n  }\n\n#ifndef CE_FPGA_TEST\n  /* FPGA do not support TRNG, so enable CE_FPGA_TEST when do CE FPGA\n   * verification */\n  /*TRNG test*/\n  for (i = 0; i < sizeof(rng_size) / sizeof(uint32_t); i++) {\n    printf("############TRNG, len: %d, begin#############\\n", rng_size[i]);\n    memset(rng_buf, 0, 8192);\n    rng_ctx->rng_buf = rng_buf;\n    rng_ctx->rng_len = rng_size[i];\n    rng_ctx->mode = 0x30; /*CE_METHOD_TRNG*/\n    rng_ctx->key = NULL;\n    rng_ctx->key_len = 0;\n    ret = do_rng_gen(rng_ctx);\n    if (ret < 0) {\n      printf("############TRNG, len: %d, fail#############\\n\\n\\n", rng_size[i]);\n      goto out;\n    }\n#if 0\n        if (rng_size[i] < 100)\n            ce_dump("trng:", rng_buf, rng_size[i], 16);\n#endif\n    printf("############TRNG, len: %d, pass#############\\n\\n\\n", rng_size[i]);\n  }\n#endif\n\n  /*PRNG test*/\n  for (i = 0; i < sizeof(rng_size) / sizeof(uint32_t); i++) {\n    printf("############PRNG, len: %d, begin#############\\n", rng_size[i]);\n    memset(rng_buf, 0, 8192);\n    rng_ctx->rng_buf = rng_buf;\n    rng_ctx->rng_len = rng_size[i];\n    rng_ctx->mode = 0x31; /*CE_METHOD_PRNG*/\n    rng_ctx->key = key;\n    rng_ctx->key_len = key_len;\n    ret = do_rng_gen(rng_ctx);\n    if (ret < 0) {\n      printf("############PRNG, len: %d, fail#############\\n\\n\\n", rng_size[i]);\n      goto out;\n    }\n#if 0\n        if (rng_size[i] < 100)\n            ce_dump("prng:", rng_buf, rng_size[i], 16);\n#endif\n    printf("############PRNG, len: %d, pass#############\\n\\n\\n", rng_size[i]);\n  }\n\nout:\n  if (rng_ctx) hal_free_align(rng_ctx);\n\n  if (rng_buf) hal_free_align(rng_buf);\n\n  return ret;\n}\n#else\nint rng_test(void) {\n  printf("sun20iw2 crypto engine do not support rng, please use hal_trng.\\n");\n\n  return 0;\n}\n#endif\n\nint rsa_test(void) {\n  int ret = 0;\n  int i = 0;\n  __aligned(CACHELINE_LEN) uint8_t dst_buffer[256] = {0};\n  crypto_rsa_req_ctx_t *rsa_ctx = NULL;\n\n  rsa_ctx = (crypto_rsa_req_ctx_t *)hal_malloc_align(\n      sizeof(crypto_rsa_req_ctx_t), max(CE_ALIGN_SIZE, CACHELINE_LEN));\n  if (rsa_ctx == NULL) {\n    printf(" malloc rsa ctx fail\\n");\n    return -1;\n  }\n\n  /*rsa enc and dec*/\n  for (i = 0; i < sizeof(rsa_bitwidth) / sizeof(rsa_bitwidth[0]); i++) {\n    /* enc with public key*/\n    printf("############RSA ENC/DEC, len: %d, begin#############\\n",\n           rsa_bitwidth[i]);\n    memset(dst_buffer, 0, 256);\n    memset(rsa_ctx, 0, sizeof(crypto_rsa_req_ctx_t));\n\n    rsa_ctx->key_n = rsa_keyn[i];\n    rsa_ctx->n_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_e = rsa_keye[i];\n    rsa_ctx->e_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_d = 0;\n    rsa_ctx->d_len = 0;\n\n    rsa_ctx->src_buffer = rsa_src[i];\n    rsa_ctx->src_length = rsa_bitwidth[i] / 8;\n    rsa_ctx->dst_buffer = dst_buffer;\n    rsa_ctx->dst_length = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->dir = 0;\n    rsa_ctx->type = 0x20; /*CE_METHOD_RSA*/\n    rsa_ctx->bitwidth = rsa_bitwidth[i];\n\n    ret = do_rsa_crypto(rsa_ctx);\n    if (ret < 0) {\n      printf("do rsa crypto failed: %d\\n", ret);\n      goto out;\n    }\n\n    ret = memcmp(rsa_ctx->dst_buffer, rsa_enc[i], rsa_bitwidth[i] / 8);\n    if (ret) {\n      printf("rsa encrypt failed\\n");\n      ce_dump("want data: ", rsa_enc[i], rsa_bitwidth[i] / 8, 16);\n      ce_dump("calc data: ", rsa_ctx->dst_buffer, rsa_ctx->dst_length, 16);\n      printf("############RSA ENC, len: %d, fail#############\\n\\n\\n",\n             rsa_bitwidth[i]);\n      goto out;\n    }\n\n    /* dec with private key */\n    memset(dst_buffer, 0, 256);\n    memset(rsa_ctx, 0, sizeof(crypto_rsa_req_ctx_t));\n\n    rsa_ctx->key_n = rsa_keyn[i];\n    rsa_ctx->n_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_e = 0;\n    rsa_ctx->e_len = 0;\n    rsa_ctx->key_d = rsa_keyd[i];\n    rsa_ctx->d_len = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->src_buffer = rsa_enc[i];\n    rsa_ctx->src_length = rsa_bitwidth[i] / 8;\n    rsa_ctx->dst_buffer = dst_buffer;\n    rsa_ctx->dst_length = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->dir = 0;\n    rsa_ctx->type = 0x20; /*CE_METHOD_RSA*/\n    rsa_ctx->bitwidth = rsa_bitwidth[i];\n\n    ret = do_rsa_crypto(rsa_ctx);\n    if (ret < 0) {\n      printf("do rsa crypto failed: %d\\n", ret);\n      goto out;\n    }\n\n    ret = memcmp(rsa_ctx->dst_buffer, rsa_src[i], rsa_bitwidth[i] / 8);\n    if (ret) {\n      printf("rsa decrypt failed\\n");\n      ce_dump("want data: ", rsa_src[i], rsa_bitwidth[i] / 8, 16);\n      ce_dump("calc data: ", rsa_ctx->dst_buffer, rsa_ctx->dst_length, 16);\n      printf("############RSA DEC, len: %d, fail#############\\n\\n\\n",\n             rsa_bitwidth[i]);\n      goto out;\n    }\n\n    printf("############RSA ENC/DEC, len: %d, pass#############\\n\\n\\n",\n           rsa_bitwidth[i]);\n  }\n\n  /* rsa sign/verify sha256 value */\n  for (i = 0; i < sizeof(rsa_bitwidth) / sizeof(rsa_bitwidth[0]); i++) {\n    /* sign with private key */\n    printf("############RSA SIGN/VERIFY SHA256, len: %d, begin#############\\n",\n           rsa_bitwidth[i]);\n    memset(dst_buffer, 0, 256);\n    memset(rsa_ctx, 0, sizeof(crypto_rsa_req_ctx_t));\n\n    rsa_ctx->key_n = rsa_keyn[i];\n    rsa_ctx->n_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_e = 0;\n    rsa_ctx->e_len = 0;\n    rsa_ctx->key_d = rsa_keyd[i];\n    rsa_ctx->d_len = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->src_buffer = rsa_sha256_raw[i];\n    rsa_ctx->src_length = rsa_bitwidth[i] / 8;\n    rsa_ctx->dst_buffer = dst_buffer;\n    rsa_ctx->dst_length = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->dir = 0;\n    rsa_ctx->type = 0x20; /*CE_METHOD_RSA*/\n    rsa_ctx->bitwidth = rsa_bitwidth[i];\n\n    ret = do_rsa_crypto(rsa_ctx);\n    if (ret < 0) {\n      printf("do rsa crypto failed: %d\\n", ret);\n      goto out;\n    }\n\n    ret = memcmp(rsa_ctx->dst_buffer, rsa_sha256_sign[i], rsa_bitwidth[i] / 8);\n    if (ret) {\n      printf("rsa encrypt failed\\n");\n      ce_dump("want data: ", rsa_sha256_sign[i], rsa_bitwidth[i] / 8, 16);\n      ce_dump("calc data: ", rsa_ctx->dst_buffer, rsa_ctx->dst_length, 16);\n      printf("############RSA SIGN SHA256, len: %d, fail#############\\n\\n\\n",\n             rsa_bitwidth[i]);\n      // goto out;\n    }\n\n    /* verify with public key */\n    memset(dst_buffer, 0, 256);\n    memset(rsa_ctx, 0, sizeof(crypto_rsa_req_ctx_t));\n\n    rsa_ctx->key_n = rsa_keyn[i];\n    rsa_ctx->n_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_e = rsa_keye[i];\n    rsa_ctx->e_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_d = 0;\n    rsa_ctx->d_len = 0;\n\n    rsa_ctx->src_buffer = rsa_sha256_sign[i];\n    rsa_ctx->src_length = rsa_bitwidth[i] / 8;\n    rsa_ctx->dst_buffer = dst_buffer;\n    rsa_ctx->dst_length = 256 / 8;\n\n    rsa_ctx->dir = 0;\n    rsa_ctx->type = 0x20; /*CE_METHOD_RSA*/\n    rsa_ctx->bitwidth = rsa_bitwidth[i];\n\n    ret = do_rsa_crypto(rsa_ctx);\n    if (ret < 0) {\n      printf("do rsa crypto failed: %d\\n", ret);\n      goto out;\n    }\n\n    ret = memcmp(rsa_ctx->dst_buffer, rsa_sha256[i], 256 / 8);\n    if (ret) {\n      printf("rsa decrypt failed\\n");\n      ce_dump("want data: ", rsa_sha256[i], 256 / 8, 16);\n      ce_dump("calc data: ", rsa_ctx->dst_buffer, rsa_ctx->dst_length, 16);\n      printf("############RSA VERIFY SHA256, len: %d, fail#############\\n\\n\\n",\n             rsa_bitwidth[i]);\n      goto out;\n    }\n\n    printf("############RSA SIGN/VERIFY SHA256, len: %d, pass#############\\n\\n\\n",rsa_bitwidth[i]);\n  }\n\n  /* rsa sign/verify */\n  for (i = 0; i < sizeof(rsa_bitwidth) / sizeof(rsa_bitwidth[0]); i++) {\n    /* sign with private key */\n    printf("############RSA SIGN/VERIFY, len: %d, begin#############\\n",\n           rsa_bitwidth[i]);\n    memset(dst_buffer, 0, 256);\n    memset(rsa_ctx, 0, sizeof(crypto_rsa_req_ctx_t));\n\n    rsa_ctx->key_n = rsa_keyn[i];\n    rsa_ctx->n_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_e = 0;\n    rsa_ctx->e_len = 0;\n    rsa_ctx->key_d = rsa_keyd[i];\n    rsa_ctx->d_len = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->src_buffer = rsa_sign_raw[i];\n    rsa_ctx->src_length = rsa_bitwidth[i] / 8;\n    rsa_ctx->dst_buffer = dst_buffer;\n    rsa_ctx->dst_length = rsa_bitwidth[i] / 8;\n\n    rsa_ctx->dir = 0;\n    rsa_ctx->type = 0x20; /*CE_METHOD_RSA*/\n    rsa_ctx->bitwidth = rsa_bitwidth[i];\n\n    ret = do_rsa_crypto(rsa_ctx);\n    if (ret < 0) {\n      printf("do rsa crypto failed: %d\\n", ret);\n      goto out;\n    }\n\n    ret = memcmp(rsa_ctx->dst_buffer, rsa_signature[i], rsa_bitwidth[i] / 8);\n    if (ret) {\n      printf("rsa encrypt failed\\n");\n      ce_dump("want data: ", rsa_signature[i], rsa_bitwidth[i] / 8, 16);\n      ce_dump("calc data: ", rsa_ctx->dst_buffer, rsa_ctx->dst_length, 16);\n      printf("############RSA SIGN, len: %d, fail#############\\n\\n\\n",\n             rsa_bitwidth[i]);\n      // goto out;\n    }\n\n    /* verify with public key */\n    memset(dst_buffer, 0, 256);\n    memset(rsa_ctx, 0, sizeof(crypto_rsa_req_ctx_t));\n\n    rsa_ctx->key_n = rsa_keyn[i];\n    rsa_ctx->n_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_e = rsa_keye[i];\n    rsa_ctx->e_len = rsa_bitwidth[i] / 8;\n    rsa_ctx->key_d = 0;\n    rsa_ctx->d_len = 0;\n\n    rsa_ctx->src_buffer = rsa_signature[i];\n    rsa_ctx->src_length = rsa_bitwidth[i] / 8;\n    rsa_ctx->dst_buffer = dst_buffer;\n    rsa_ctx->dst_length = 256 / 8;\n\n    rsa_ctx->dir = 0;\n    rsa_ctx->type = 0x20; /*CE_METHOD_RSA*/\n    rsa_ctx->bitwidth = rsa_bitwidth[i];\n\n    ret = do_rsa_crypto(rsa_ctx);\n    if (ret < 0) {\n      printf("do rsa crypto failed: %d\\n", ret);\n      goto out;\n    }\n\n    ret = memcmp(rsa_ctx->dst_buffer, rsa_sha256[i], 256 / 8);\n    if (ret) {\n      printf("rsa decrypt failed\\n");\n      ce_dump("want data: ", rsa_sha256[i], 256 / 8, 16);\n      ce_dump("calc data: ", rsa_ctx->dst_buffer, rsa_ctx->dst_length, 16);\n      printf("############RSA VERIFY, len: %d, fail#############\\n\\n\\n",\n             rsa_bitwidth[i]);\n      goto out;\n    }\n\n    printf("############RSA SIGN/VERIFY, len: %d, pass#############\\n\\n\\n",\n           rsa_bitwidth[i]);\n  }\n\nout:\n  if (rsa_ctx) hal_free_align(rsa_ctx);\n\n  return ret;\n}\n\n#ifndef configAPPLICATION_NORMAL_PRIORITY\n#define configAPPLICATION_NORMAL_PRIORITY (15)\n#endif\nstatic void aes_task(void *pvParameters) {\n  int ret = 0;\n\n  ret = aes_test();\n  if (ret) {\n    printf("ERROR: aes test failed\\n");\n  }\n\n  vTaskDelete(NULL);\n}\nstatic void hash_task(void *pvParameters) {\n  int ret = 0;\n\n  ret = hash_test();\n  if (ret) {\n    printf("ERROR: hash test failed\\n");\n  }\n\n  vTaskDelete(NULL);\n}\nstatic void rsa_task(void *pvParameters) {\n  int ret = 0;\n\n  ret = rsa_test();\n  if (ret) {\n    printf("ERROR: rsa test failed\\n");\n  }\n\n  vTaskDelete(NULL);\n}\nstatic void rng_task(void *pvParameters) {\n  int ret = 0;\n\n  ret = rng_test();\n  if (ret) {\n    printf("ERROR: rng test failed\\n");\n  }\n\n  vTaskDelete(NULL);\n}\n\nint cmd_test_ce(int argc, const char *argv[]) {\n  int ret = 0;\n\n  if (argc != 2) {\n    printf("Parameter number Error!\\n");\n    printf("Usage: hal_ce <aes|hash|rsa|rng>\\n");\n    return -1;\n  }\n\n  sunxi_ce_init();\n\n  if (strcmp(argv[1], "aes") == 0) {\n    ret = aes_test();\n  } else if (strcmp(argv[1], "hash") == 0) {\n    ret = hash_test();\n  } else if (strcmp(argv[1], "rsa") == 0) {\n    ret = rsa_test();\n  } else if (strcmp(argv[1], "rng") == 0) {\n    ret = rng_test();\n  } else if (strcmp(argv[1], "all") == 0) {\n    TaskHandle_t task0, task1, task2, task3;\n    portBASE_TYPE ret0, ret1, ret2, ret3;\n\n    printf("******************************************************\\n");\n    printf("* NOTE: please enable CE_NO_IRQ when doing this test *\\n");\n    printf("******************************************************\\n");\n\n    ret0 = xTaskCreate(aes_task, (signed portCHAR *)"aes test", 4096, NULL,\n                       configAPPLICATION_NORMAL_PRIORITY, &task0);\n    if (ret0 != pdPASS) {\n      printf("create aes task failed\\n");\n      return -1;\n    }\n    ret1 = xTaskCreate(hash_task, (signed portCHAR *)"hash test", 4096, NULL,\n                       configAPPLICATION_NORMAL_PRIORITY, &task1);\n    if (ret1 != pdPASS) {\n      printf("create hash task failed\\n");\n      return -1;\n    }\n    ret2 = xTaskCreate(rsa_task, (signed portCHAR *)"rsa test", 4096, NULL,\n                       configAPPLICATION_NORMAL_PRIORITY, &task2);\n    if (ret2 != pdPASS) {\n      printf("create rsa task failed\\n");\n      return -1;\n    }\n    ret3 = xTaskCreate(rng_task, (signed portCHAR *)"rng test", 4096, NULL,\n                       configAPPLICATION_NORMAL_PRIORITY, &task3);\n    if (ret3 != pdPASS) {\n      printf("create rng task failed\\n");\n      return -1;\n    }\n\n  } else {\n    printf("Parameter Error!\\n");\n    printf("Usage: hal_ce <aes|hash|rsa|rng|all>\\n");\n    ret = -1;\n  }\n\n  if (strcmp(argv[1], "all")) {\n    sunxi_ce_uninit();\n  }\n\n  return ret;\n}\n\nFINSH_FUNCTION_EXPORT_CMD(cmd_test_ce, hal_ce, tina rtos ce test demo)\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,_.jsx)(e,{...n,children:(0,_.jsx)(l,{...n})}):l(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>i});var _=t(7294);const r={},s=_.createContext(r);function i(n){const e=_.useContext(s);return _.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),_.createElement(s.Provider,{value:e},n.children)}}}]);