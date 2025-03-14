"use strict";(self.webpackChunkit_knowledge_sharing=self.webpackChunkit_knowledge_sharing||[]).push([[1807],{2902:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"msoffice/excel/formular_basic","title":"Excel Formulas: \u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23 \u0e25\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e25\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14","description":"\u0e1a\u0e17\u0e19\u0e33","source":"@site/docs/msoffice/excel/formular_basic.md","sourceDirName":"msoffice/excel","slug":"/msoffice/excel/formular_basic","permalink":"/IT-Knowledge-Sharing/docs/msoffice/excel/formular_basic","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"msoffice","previous":{"title":"Flash Fill","permalink":"/IT-Knowledge-Sharing/docs/msoffice/excel/flashfill"},"next":{"title":"IF Function","permalink":"/IT-Knowledge-Sharing/docs/msoffice/excel/formular_if"}}');var c=l(4848),i=l(8453);const r={},d="Excel Formulas: \u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23 \u0e25\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e25\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",h={},x=[{value:"\u0e1a\u0e17\u0e19\u0e33",id:"\u0e1a\u0e17\u0e19\u0e33",level:2},{value:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13",id:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13",level:2},{value:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e17\u0e32\u0e07\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e40\u0e1a\u0e37\u0e49\u0e2d\u0e07\u0e15\u0e49\u0e19",id:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e17\u0e32\u0e07\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e40\u0e1a\u0e37\u0e49\u0e2d\u0e07\u0e15\u0e49\u0e19",level:2},{value:"1. SUM: \u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21",id:"1-sum-\u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21",level:3},{value:"2. COUNT: \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02",id:"2-count-\u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02",level:3},{value:"3. COUNTA: \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07",id:"3-counta-\u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07",level:3},{value:"4. AVERAGE: \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22",id:"4-average-\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22",level:3},{value:"5. MIN: \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",id:"5-min-\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",level:3},{value:"6. MAX: \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",id:"6-max-\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",level:3},{value:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21",id:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"excel-formulas-\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23-\u0e25\u0e14\u0e40\u0e27\u0e25\u0e32-\u0e25\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",children:"Excel Formulas: \u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23 \u0e25\u0e14\u0e40\u0e27\u0e25\u0e32 \u0e25\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14"})}),"\n",(0,c.jsx)(n.h2,{id:"\u0e1a\u0e17\u0e19\u0e33",children:"\u0e1a\u0e17\u0e19\u0e33"}),"\n",(0,c.jsx)(n.p,{children:"Excel \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e17\u0e35\u0e48\u0e17\u0e23\u0e07\u0e1e\u0e25\u0e31\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13 \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e2a\u0e39\u0e15\u0e23\u0e43\u0e19 Excel \u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e17\u0e33\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27\u0e41\u0e25\u0e30\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33 \u0e25\u0e14\u0e40\u0e27\u0e25\u0e32\u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e14\u0e49\u0e27\u0e22\u0e21\u0e37\u0e2d \u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e19\u0e35\u0e49\u0e08\u0e30\u0e41\u0e19\u0e30\u0e19\u0e33\u0e2a\u0e39\u0e15\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e17\u0e32\u0e07\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e40\u0e1a\u0e37\u0e49\u0e2d\u0e07\u0e15\u0e49\u0e19\u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e23\u0e39\u0e49 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 Excel \u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e"}),"\n",(0,c.jsx)(n.h2,{id:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13",children:"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e01\u0e32\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e01\u0e32\u0e23\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e43\u0e19 Excel \u0e19\u0e31\u0e49\u0e19\u0e07\u0e48\u0e32\u0e22\u0e21\u0e32\u0e01 \u0e40\u0e1e\u0e35\u0e22\u0e07\u0e41\u0e04\u0e48\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e2a\u0e39\u0e15\u0e23 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e1a (",(0,c.jsx)(n.code,{children:"="}),") \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23 \u0e2b\u0e23\u0e37\u0e2d \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e43\u0e19\u0e41\u0e16\u0e1a\u0e2a\u0e39\u0e15\u0e23\u0e14\u0e49\u0e32\u0e19\u0e1a\u0e19\u0e02\u0e2d\u0e07 Excel \u0e01\u0e47\u0e44\u0e14\u0e49 \u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e2a\u0e39\u0e15\u0e23\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49 \u0e41\u0e25\u0e30\u0e01\u0e14 Enter \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e2a\u0e39\u0e15\u0e23\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\n\u0e40\u0e0a\u0e48\u0e19 \u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"=SUM(A1:A10)"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c A1 \u0e16\u0e36\u0e07 A10 \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e2a\u0e39\u0e15\u0e23\u0e19\u0e35\u0e49\u0e41\u0e25\u0e49\u0e27 \u0e01\u0e14 Enter \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c \u0e2b\u0e23\u0e37\u0e2d \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"=AVERAGE(B1:B5)"})," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c B1 \u0e16\u0e36\u0e07 B5 \u0e41\u0e25\u0e30\u0e01\u0e14 Enter \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c \u0e2b\u0e23\u0e37\u0e2d\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e2a\u0e39\u0e15\u0e23\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23:"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e2a\u0e39\u0e15\u0e23"}),"\n",(0,c.jsxs)(n.li,{children:["\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e1a (",(0,c.jsx)(n.code,{children:"="}),") \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2a\u0e39\u0e15\u0e23"]}),"\n",(0,c.jsxs)(n.li,{children:["\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e39\u0e15\u0e23\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49 \u0e40\u0e0a\u0e48\u0e19 ",(0,c.jsx)(n.code,{children:"SUM"}),", ",(0,c.jsx)(n.code,{children:"AVERAGE"}),", ",(0,c.jsx)(n.code,{children:"MIN"}),", ",(0,c.jsx)(n.code,{children:"MAX"})]}),"\n",(0,c.jsx)(n.li,{children:"\u0e23\u0e30\u0e1a\u0e38\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e2a\u0e39\u0e15\u0e23 \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e08\u0e38\u0e25\u0e20\u0e32\u0e04 (,) \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e04\u0e25\u0e2d\u0e19 (:) \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e22\u0e01\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c"}),"\n",(0,c.jsx)(n.li,{children:"\u0e01\u0e14 Enter \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e2a\u0e39\u0e15\u0e23\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0e1e\u0e34\u0e21\u0e1e\u0e4c ",(0,c.jsx)(n.code,{children:"=SUM(A1:A10)"})," \u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c A1 \u0e16\u0e36\u0e07 A10"]}),"\n",(0,c.jsxs)(n.li,{children:["\u0e1e\u0e34\u0e21\u0e1e\u0e4c ",(0,c.jsx)(n.code,{children:"=AVERAGE(B1:B5)"})," \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c B1 \u0e16\u0e36\u0e07 B5"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e17\u0e32\u0e07\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e40\u0e1a\u0e37\u0e49\u0e2d\u0e07\u0e15\u0e49\u0e19",children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e04\u0e33\u0e19\u0e27\u0e13\u0e17\u0e32\u0e07\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e40\u0e1a\u0e37\u0e49\u0e2d\u0e07\u0e15\u0e49\u0e19"}),"\n",(0,c.jsx)(n.h3,{id:"1-sum-\u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21",children:"1. SUM: \u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"SUM"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a:"})," ",(0,c.jsx)(n.code,{children:"=SUM(number1, [number2], ...)"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=SUM(A1:A10)"}),": \u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c A1 \u0e16\u0e36\u0e07 A10"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=SUM(B2, B5, B8)"}),": \u0e2b\u0e32\u0e1c\u0e25\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c B2, B5 \u0e41\u0e25\u0e30 B8"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"2-count-\u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02",children:"2. COUNT: \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"COUNT"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a:"})," ",(0,c.jsx)(n.code,{children:"=COUNT(value1, [value2], ...)"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=COUNT(C1:C20)"}),": \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c C1 \u0e16\u0e36\u0e07 C20"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"3-counta-\u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07",children:"3. COUNTA: \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"COUNTA"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07 (\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25) \u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a:"})," ",(0,c.jsx)(n.code,{children:"=COUNTA(value1, [value2], ...)"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=COUNTA(D1:D15)"}),": \u0e19\u0e31\u0e1a\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c D1 \u0e16\u0e36\u0e07 D15"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"4-average-\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22",children:"4. AVERAGE: \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"AVERAGE"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a:"})," ",(0,c.jsx)(n.code,{children:"=AVERAGE(number1, [number2], ...)"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=AVERAGE(E1:E12)"}),": \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c E1 \u0e16\u0e36\u0e07 E12"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"5-min-\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",children:"5. MIN: \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"MIN"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a:"})," ",(0,c.jsx)(n.code,{children:"=MIN(number1, [number2], ...)"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=MIN(F1:F18)"}),": \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c F1 \u0e16\u0e36\u0e07 F18"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"6-max-\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",children:"6. MAX: \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14"}),"\n",(0,c.jsxs)(n.p,{children:["\u0e2a\u0e39\u0e15\u0e23 ",(0,c.jsx)(n.code,{children:"MAX"})," \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2b\u0e32\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a:"})," ",(0,c.jsx)(n.code,{children:"=MAX(number1, [number2], ...)"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"=MAX(G1:G25)"}),": \u0e2b\u0e32\u0e04\u0e48\u0e32\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c G1 \u0e16\u0e36\u0e07 G25"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21",children:"\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c: \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e04\u0e25\u0e2d\u0e19 (:) \u0e40\u0e0a\u0e48\u0e19 ",(0,c.jsx)(n.code,{children:"A1:A10"})]}),"\n",(0,c.jsx)(n.li,{children:"\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e08\u0e38\u0e25\u0e20\u0e32\u0e04 (,): \u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e08\u0e38\u0e25\u0e20\u0e32\u0e04\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e22\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e43\u0e19\u0e2a\u0e39\u0e15\u0e23"}),"\n",(0,c.jsx)(n.li,{children:"\u0e01\u0e32\u0e23\u0e14\u0e39\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c: \u0e01\u0e14 Enter \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e2a\u0e39\u0e15\u0e23\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u0e01\u0e32\u0e23\u0e1d\u0e36\u0e01\u0e1d\u0e19\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e04\u0e25\u0e48\u0e2d\u0e07\u0e41\u0e04\u0e25\u0e48\u0e27\u0e43\u0e19\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49 Excel \u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e\u0e21\u0e32\u0e01\u0e22\u0e34\u0e48\u0e07\u0e02\u0e36\u0e49\u0e19"}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e15\u0e23\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e15\u0e32\u0e21\u0e44\u0e1f\u0e25\u0e4c Excel \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48\u0e41\u0e19\u0e1a\n",(0,c.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:l(2506).A+"",children:"\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"})]})})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},2506:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/files/formular_basic-e536c5fa903428159091be04619d80ca.xlsx"},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>d});var s=l(6540);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);