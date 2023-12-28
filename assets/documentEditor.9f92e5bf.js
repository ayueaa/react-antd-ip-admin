import{d as m}from"./index.c59c8c2c.js";import{r as o,e as v,_ as p,b5 as f,u as h,b as x,j as u,a9 as g,B as w}from"./index.2caff867.js";import{c as S,d as D,e as y}from"./document.d519cf75.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},B=E,V=function(c,t){return o.exports.createElement(v,p({},c,{ref:t,icon:B}))},z=o.exports.forwardRef(V);const M=()=>{const[e,c]=o.exports.useState({title:"",content:""}),{docId:t}=f(),d=h(),i=o.exports.useRef(null);o.exports.useEffect(()=>{(async()=>{var n;if(t){const{status:s,result:r}=await S(t);s&&(c({title:r.title,content:r.content}),(n=i.current)==null||n.getInstance().setMarkdown(r.content))}})()},[t]);const l=async()=>{var s;const a=(s=i.current)==null?void 0:s.getInstance(),n=(a==null?void 0:a.getMarkdown())||"";t?(await D({...e,content:n,doc_id:t}),d(`/document/${t}`)):(await y({...e,content:n}),d("/documentation"))};return x("div",{children:[u(g,{placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",value:e.title,onChange:a=>c({...e,title:a.target.value})}),u(m,{ref:i,initialValue:e.content,previewStyle:"vertical",height:"600px",initialEditType:"markdown",useCommandShortcut:!0}),u(w,{type:"primary",icon:u(z,{}),onClick:l,style:{position:"fixed",right:"24px",bottom:"24px",zIndex:1e3},children:t?"\u66F4\u65B0\u6587\u7AE0":"\u4FDD\u5B58\u6587\u7AE0"})]})};export{M as default};