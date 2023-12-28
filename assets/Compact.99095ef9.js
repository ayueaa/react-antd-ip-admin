import{g as h,m as w,r,c as S,C as O}from"./index.db5181c7.js";import{u as N,t as P}from"./useSize.70a35bba.js";const D=e=>{const{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}};var L=D;const j=e=>{const{componentCls:t}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"}}}},E=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}};var M=h("Space",e=>{const t=w(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[j(t),E(t),L(t)]},()=>({}),{resetStyle:!1}),x=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)t.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(a[o[c]]=e[o[c]]);return a};const m=r.exports.createContext(null),H=(e,t)=>{const a=r.exports.useContext(m),o=r.exports.useMemo(()=>{if(!a)return"";const{compactDirection:c,isFirstItem:d,isLastItem:u}=a,l=c==="vertical"?"-vertical-":"-";return S(`${e}-compact${l}item`,{[`${e}-compact${l}first-item`]:d,[`${e}-compact${l}last-item`]:u,[`${e}-compact${l}item-rtl`]:t==="rtl"})},[e,t,a]);return{compactSize:a==null?void 0:a.compactSize,compactDirection:a==null?void 0:a.compactDirection,compactItemClassnames:o}},R=e=>{let{children:t}=e;return r.exports.createElement(m.Provider,{value:null},t)},F=e=>{var{children:t}=e,a=x(e,["children"]);return r.exports.createElement(m.Provider,{value:a},t)},T=e=>{const{getPrefixCls:t,direction:a}=r.exports.useContext(O),{size:o,direction:c,block:d,prefixCls:u,className:l,rootClassName:C,children:v}=e,f=x(e,["size","direction","block","prefixCls","className","rootClassName","children"]),y=N(i=>o!=null?o:i),n=t("space-compact",u),[I,z]=M(n),G=S(n,z,{[`${n}-rtl`]:a==="rtl",[`${n}-block`]:d,[`${n}-vertical`]:c==="vertical"},l,C),s=r.exports.useContext(m),p=P(v),b=r.exports.useMemo(()=>p.map((i,g)=>{const $=i&&i.key||`${n}-item-${g}`;return r.exports.createElement(F,{key:$,compactSize:y,compactDirection:c,isFirstItem:g===0&&(!s||(s==null?void 0:s.isFirstItem)),isLastItem:g===p.length-1&&(!s||(s==null?void 0:s.isLastItem))},i)}),[o,p,s]);return p.length===0?null:I(r.exports.createElement("div",Object.assign({className:G},f),b))};var X=T;export{X as C,R as N,M as a,H as u};
