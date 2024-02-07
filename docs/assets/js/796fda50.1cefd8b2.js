"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[104],{7028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>N,default:()=>D,frontMatter:()=>V,metadata:()=>E,toc:()=>_});var r=t(7624),l=t(2172),s=t(1504),a=t(5456),i=t(3943),c=t(5592),d=t(5288),o=t(632),u=t(7128),h=t(1148);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,u.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.Uz)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._M)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=x(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,o]=b({queryString:t,groupId:r}),[u,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,h.IN)(t);return[r,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),j=(()=>{const e=c??u;return m({value:e,tabValues:l})?e:null})();(0,d.c)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),p(e)}),[o,p,l]),tabValues:l}}var f=t(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.MV)(),u=e=>{const n=e.currentTarget,t=d.indexOf(n),r=c[t].value;r!==l&&(o(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,r.jsx)(v,{...e,...n}),(0,r.jsx)(y,{...e,...n})]})}function k(e){const n=(0,f.c)();return(0,r.jsx)(w,{...e,children:p(e.children)},String(n))}const A={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.c)(A.tabItem,l),hidden:t,children:n})}const V={id:"describe",sidebar_label:"MD5\u4ecb\u7ecd\u5199\u6cd5\u4ecb\u7ecd",title:"MD5\u4ecb\u7ecd"},N=void 0,E={id:"describe",title:"MD5\u4ecb\u7ecd",description:"1.\u5e38\u89c1markdown\u5199\u6cd5",source:"@site/docs/md5\u4ecb\u7ecd.mdx",sourceDirName:".",slug:"/describe",permalink:"/kosmos_page/describe",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/md5\u4ecb\u7ecd.mdx",tags:[],version:"current",frontMatter:{id:"describe",sidebar_label:"MD5\u4ecb\u7ecd\u5199\u6cd5\u4ecb\u7ecd",title:"MD5\u4ecb\u7ecd"},sidebar:"tutorialSidebar",next:{title:"\u94fe\u63a5\u5185\u5bb9",permalink:"/kosmos_page/test"}},T={},_=[{value:"1.\u5e38\u89c1markdown\u5199\u6cd5",id:"1\u5e38\u89c1markdown\u5199\u6cd5",level:2},{value:"2.\u5176\u4ed6\u53ef\u80fd\u7528\u5230\u7684\u5176\u4ed6\u6837\u5f0f\u5199\u6cd5",id:"2\u5176\u4ed6\u53ef\u80fd\u7528\u5230\u7684\u5176\u4ed6\u6837\u5f0f\u5199\u6cd5",level:2},{value:"1.\u56fe\u7247\u663e\u793a",id:"1\u56fe\u7247\u663e\u793a",level:3},{value:"2;\u6298\u53e0\u663e\u793a",id:"2\u6298\u53e0\u663e\u793a",level:3},{value:"3.\u5e38\u89c1\u4ee3\u7801\u7f16\u5199\u663e\u793a",id:"3\u5e38\u89c1\u4ee3\u7801\u7f16\u5199\u663e\u793a",level:3},{value:"1.\u4e00\u822c\u4ee3\u7801\u5c55\u793a",id:"1\u4e00\u822c\u4ee3\u7801\u5c55\u793a",level:4},{value:"2.\u5e26\u6807\u9898\u4ee3\u7801\u5c55\u793a",id:"2\u5e26\u6807\u9898\u4ee3\u7801\u5c55\u793a",level:4},{value:"3.\u51f8\u663e\u7279\u6b8a\u884c\u53f7",id:"3\u51f8\u663e\u7279\u6b8a\u884c\u53f7",level:4},{value:"4.tabBar\u5207\u6362\u5c55\u793a\u663e\u793a",id:"4tabbar\u5207\u6362\u5c55\u793a\u663e\u793a",level:3},{value:"5.\u8bf4\u660e\u663e\u793a",id:"5\u8bf4\u660e\u663e\u793a",level:3},{value:"1.\u4fe1\u606f\u8bf4\u660e",id:"1\u4fe1\u606f\u8bf4\u660e",level:4},{value:"2.tip\u4fe1\u606f",id:"2tip\u4fe1\u606f",level:4},{value:"3.\u8b66\u544a\u4fe1\u606f",id:"3\u8b66\u544a\u4fe1\u606f",level:4},{value:"4.\u5907\u6ce8\u4fe1\u606f",id:"4\u5907\u6ce8\u4fe1\u606f",level:4},{value:"6.\u8bf4\u660e\u6587\u5b57\u663e\u793a",id:"6\u8bf4\u660e\u6587\u5b57\u663e\u793a",level:3},{value:"7.\u8868\u683c\u663e\u793a",id:"7\u8868\u683c\u663e\u793a",level:3},{value:"8.gif\u652f\u6301",id:"8gif\u652f\u6301",level:3}];function q(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1\u5e38\u89c1markdown\u5199\u6cd5",children:"1.\u5e38\u89c1markdown\u5199\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u662f\u5e38\u89c1",(0,r.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/517670740?utm_id=0",children:"markdown\u5199\u6cd5"})]}),"\n",(0,r.jsx)(n.h2,{id:"2\u5176\u4ed6\u53ef\u80fd\u7528\u5230\u7684\u5176\u4ed6\u6837\u5f0f\u5199\u6cd5",children:"2.\u5176\u4ed6\u53ef\u80fd\u7528\u5230\u7684\u5176\u4ed6\u6837\u5f0f\u5199\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"1\u56fe\u7247\u663e\u793a",children:"1.\u56fe\u7247\u663e\u793a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u56fe\u7247\u5c55\u793a",src:t(5804).c+"",width:"3014",height:"1556"})}),"\n",(0,r.jsx)(n.h3,{id:"2\u6298\u53e0\u663e\u793a",children:"2;\u6298\u53e0\u663e\u793a"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u6298\u53e0\u6548\u679c"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"\u8fd9\u662f\u6298\u53e0\u6548\u679c\u5185\u5bb9\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"3\u5e38\u89c1\u4ee3\u7801\u7f16\u5199\u663e\u793a",children:"3.\u5e38\u89c1\u4ee3\u7801\u7f16\u5199\u663e\u793a"}),"\n",(0,r.jsx)(n.h4,{id:"1\u4e00\u822c\u4ee3\u7801\u5c55\u793a",children:"1.\u4e00\u822c\u4ee3\u7801\u5c55\u793a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:"vela addon enable ~/.vela/addons/velaux\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2\u5e26\u6807\u9898\u4ee3\u7801\u5c55\u793a",children:"2.\u5e26\u6807\u9898\u4ee3\u7801\u5c55\u793a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import 'dotenv/config';\n\nexport default {\n  title: '...',\n  url: process.env.URL,\n  customFields: {\n    teamEmail: process.env.EMAIL,\n  }\n};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"3\u51f8\u663e\u7279\u6b8a\u884c\u53f7",children:"3.\u51f8\u663e\u7279\u6b8a\u884c\u53f7"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers {2,5}",children:"kind: Application\nmetadata:\n  name: gateway-app\nspec:\n  components:\n    - name: comp-namespace\n      type: k8s-objects\n      properties:\n        objects:\n          - apiVersion: v1\n            kind: Namespace\n            metadata:\n              name: test-ns1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4tabbar\u5207\u6362\u5c55\u793a\u663e\u793a",children:"4.tabBar\u5207\u6362\u5c55\u793a\u663e\u793a"}),"\n",(0,r.jsxs)(k,{children:[(0,r.jsx)(I,{value:"centos",label:"Centos",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum install -y java-1.8.0-openjdk unzip\n"})})}),(0,r.jsx)(I,{value:"ubuntu",label:"Ubuntu",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt update\napt install -y openjdk-8-jre-headless unzip\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"5\u8bf4\u660e\u663e\u793a",children:"5.\u8bf4\u660e\u663e\u793a"}),"\n",(0,r.jsx)(n.h4,{id:"1\u4fe1\u606f\u8bf4\u660e",children:"1.\u4fe1\u606f\u8bf4\u660e"}),"\n",(0,r.jsx)(n.admonition,{title:"\u8bf4\u660e",type:"info",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c31\u662f\u4fe1\u606f\u8bf4\u660e:\n\u51f8\u663e\u6587\u5b57\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"\u7279\u6b8a\u7b26\u5408"})]})}),"\n",(0,r.jsx)(n.h4,{id:"2tip\u4fe1\u606f",children:"2.tip\u4fe1\u606f"}),"\n",(0,r.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c31\u662ftip\u8bf4\u660e:\n\u51f8\u663e\u6587\u5b57\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"\u7279\u6b8a\u7b26\u5408"})]})}),"\n",(0,r.jsx)(n.h4,{id:"3\u8b66\u544a\u4fe1\u606f",children:"3.\u8b66\u544a\u4fe1\u606f"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c31\u662f\u8b66\u544a\u8bf4\u660e:\n\u51f8\u663e\u6587\u5b57\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"\u7279\u6b8a\u7b26\u5408"})]})}),"\n",(0,r.jsx)(n.h4,{id:"4\u5907\u6ce8\u4fe1\u606f",children:"4.\u5907\u6ce8\u4fe1\u606f"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c31\u662f\u5907\u6ce8\u8bf4\u660e:\n\u51f8\u663e\u6587\u5b57\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"\u7279\u6b8a\u7b26\u5408"})]})}),"\n",(0,r.jsx)(n.h3,{id:"6\u8bf4\u660e\u6587\u5b57\u663e\u793a",children:"6.\u8bf4\u660e\u6587\u5b57\u663e\u793a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u8ba4\u4f60\u5df2\u5b8c\u6210\u7684\u5b89\u88c5\uff0c\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"./test",children:"\u5b89\u88c5\u6307\u5bfc\u6587\u6863"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"7\u8868\u683c\u663e\u793a",children:"7.\u8868\u683c\u663e\u793a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"\u5e94\u7528"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"\u5de5\u4f5c\u6d41"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"runningWorkflow"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"executing"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u5de5\u4f5c\u6d41\u6b63\u5728\u6267\u884c\u65f6\uff0c\u5e94\u7528\u7684\u72b6\u6001\u4e3a runningWorkflow"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"workflowSuspending"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"suspending"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u5de5\u4f5c\u6d41\u6682\u505c\u65f6\uff0c\u5e94\u7528\u7684\u72b6\u6001\u4e3a workflowSuspending"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"workflowTerminated"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"terminated"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u5de5\u4f5c\u6d41\u88ab\u7ec8\u6b62\u65f6\uff0c\u5e94\u7528\u7684\u72b6\u6001\u4e3a workflowTerminated"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"workflowFailed"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"failed"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u5de5\u4f5c\u6d41\u6267\u884c\u5b8c\u6210\uff0c\u4e14\u6709\u6b65\u9aa4\u5931\u8d25\u65f6\uff0c\u5e94\u7528\u7684\u72b6\u6001\u4e3a workflowFailed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"running"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"succeeded"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u5f53\u5de5\u4f5c\u6d41\u4e2d\u6240\u6709\u6b65\u9aa4\u90fd\u6210\u529f\u6267\u884c\u540e\uff0c\u5e94\u7528\u7684\u72b6\u6001\u4e3a  running"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"8gif\u652f\u6301",children:"8.gif\u652f\u6301"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://static.kubevela.net/images/1.4/debug-workflow.gif",alt:""})})]})}function D(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}},5804:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/png1-9ba83bca36410a4ef7c57033f3070aaa.png"},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>a});var r=t(1504);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);