import{V as h}from"./index.c59c8c2c.js";import{r as o,e as g,_ as v,b5 as w,u as x,b as n,b4 as r,j as t}from"./index.2caff867.js";import{c as D}from"./document.d519cf75.js";import{D as l}from"./index.b507fe6b.js";import{C as L}from"./index.c84478ec.js";import{T as E}from"./index.ea9fca54.js";import{E as y}from"./EditOutlined.6b7f7b6b.js";import"./styleChecker.18564737.js";var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},b=F,A=function(a,s){return o.exports.createElement(g,v({},a,{ref:s,icon:b}))},B=o.exports.forwardRef(A);const{Title:O}=E,$=()=>{const[e,a]=o.exports.useState({title:"",content:"",doc_id:"",updated_at:""}),[s,u]=o.exports.useState(!0),{docId:i}=w(),c=x();o.exports.useEffect(()=>{(async()=>{if(i){const{status:m,result:f}=await D(i);m&&(console.log(e),a(f),u(!1))}})()},[i]);const d=()=>{c(`/document/edit/${i}`)},p=()=>{c(-1)};return n("div",{children:[n(r.Group,{shape:"circle",style:{right:24},children:[t(r,{icon:t(y,{}),tooltip:"\u7F16\u8F91",onClick:d}),t(r,{icon:t(B,{}),tooltip:"\u8FD4\u56DE\u6587\u6863\u5217\u8868",onClick:p}),t(r.BackTop,{tooltip:"\u56DE\u5230\u9876\u90E8",visibilityHeight:0})]}),n("div",{style:{width:"80%",maxWidth:"1200px",margin:"0 auto",padding:"24px"},children:[t(O,{level:2,children:e.title}),t(l,{size:"small",column:1,children:t(l.Item,{label:"\u66F4\u65B0\u65F6\u95F4",children:e.updated_at})}),t(L,{loading:s,children:t(h,{initialValue:e.content})})]})]})};export{$ as default};
