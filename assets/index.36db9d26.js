import{r as s,w as O,x as T,y as P,d as E,z as k,_ as j,D as M,g as L,E as W,m as A,h as R,G as X,C as K,H as _,k as B,W as F,L as G}from"./index.cca6eaae.js";var Q=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],z=s.exports.forwardRef(function(n,e){var c,t=n.prefixCls,a=t===void 0?"rc-switch":t,o=n.className,r=n.checked,i=n.defaultChecked,l=n.disabled,p=n.loadingIcon,x=n.checkedChildren,w=n.unCheckedChildren,d=n.onClick,m=n.onChange,u=n.onKeyDown,g=O(n,Q),C=T(!1,{value:r,defaultValue:i}),I=P(C,2),S=I[0],y=I[1];function $(h,f){var b=S;return l||(b=h,y(b),m==null||m(b,f)),b}function v(h){h.which===M.LEFT?$(!1,h):h.which===M.RIGHT&&$(!0,h),u==null||u(h)}function H(h){var f=$(!S,h);d==null||d(f,h)}var N=E(a,o,(c={},k(c,"".concat(a,"-checked"),S),k(c,"".concat(a,"-disabled"),l),c));return s.exports.createElement("button",j({},g,{type:"button",role:"switch","aria-checked":S,disabled:l,className:N,ref:e,onKeyDown:v,onClick:H}),p,s.exports.createElement("span",{className:"".concat(a,"-inner")},s.exports.createElement("span",{className:"".concat(a,"-inner-checked")},x),s.exports.createElement("span",{className:"".concat(a,"-inner-unchecked")},w)))});z.displayName="Switch";const V=n=>{const{componentCls:e,trackHeightSM:c,trackPadding:t,trackMinWidthSM:a,innerMinMarginSM:o,innerMaxMarginSM:r,handleSizeSM:i}=n,l=`${e}-inner`;return{[e]:{[`&${e}-small`]:{minWidth:a,height:c,lineHeight:`${c}px`,[`${e}-inner`]:{paddingInlineStart:r,paddingInlineEnd:o,[`${l}-checked`]:{marginInlineStart:`calc(-100% + ${i+t*2}px - ${r*2}px)`,marginInlineEnd:`calc(100% - ${i+t*2}px + ${r*2}px)`},[`${l}-unchecked`]:{marginTop:-c,marginInlineStart:0,marginInlineEnd:0}},[`${e}-handle`]:{width:i,height:i},[`${e}-loading-icon`]:{top:(i-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize},[`&${e}-checked`]:{[`${e}-inner`]:{paddingInlineStart:o,paddingInlineEnd:r,[`${l}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${l}-unchecked`]:{marginInlineStart:`calc(100% - ${i+t*2}px + ${r*2}px)`,marginInlineEnd:`calc(-100% + ${i+t*2}px - ${r*2}px)`}},[`${e}-handle`]:{insetInlineStart:`calc(100% - ${i+t}px)`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${l}`]:{[`${l}-unchecked`]:{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2}},[`&${e}-checked ${l}`]:{[`${l}-checked`]:{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2}}}}}}},q=n=>{const{componentCls:e,handleSize:c}=n;return{[e]:{[`${e}-loading-icon${n.iconCls}`]:{position:"relative",top:(c-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${e}-checked ${e}-loading-icon`]:{color:n.switchColor}}}},J=n=>{const{componentCls:e,motion:c,trackPadding:t,handleBg:a,handleShadow:o,handleSize:r}=n,i=`${e}-handle`;return{[e]:{[i]:{position:"absolute",top:t,insetInlineStart:t,width:r,height:r,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:r/2,boxShadow:o,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${e}-checked ${i}`]:{insetInlineStart:`calc(100% - ${r+t}px)`},[`&:not(${e}-disabled):active`]:c?{[`${i}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${e}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}:{}}}},U=n=>{const{componentCls:e,trackHeight:c,trackPadding:t,innerMinMargin:a,innerMaxMargin:o,handleSize:r}=n,i=`${e}-inner`;return{[e]:{[i]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:o,paddingInlineEnd:a,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${i}-checked, ${i}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none"},[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${r+t*2}px - ${o*2}px)`,marginInlineEnd:`calc(100% - ${r+t*2}px + ${o*2}px)`},[`${i}-unchecked`]:{marginTop:-c,marginInlineStart:0,marginInlineEnd:0}},[`&${e}-checked ${i}`]:{paddingInlineStart:a,paddingInlineEnd:o,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${r+t*2}px + ${o*2}px)`,marginInlineEnd:`calc(-100% + ${r+t*2}px - ${o*2}px)`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:t*2,marginInlineEnd:-t*2}},[`&${e}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:-t*2,marginInlineEnd:t*2}}}}}},Y=n=>{const{componentCls:e,trackHeight:c,trackMinWidth:t}=n;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},R(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t,height:c,lineHeight:`${c}px`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${e}-disabled)`]:{background:n.colorTextTertiary}}),X(n)),{[`&${e}-checked`]:{background:n.switchColor,[`&:hover:not(${e}-disabled)`]:{background:n.colorPrimaryHover}},[`&${e}-loading, &${e}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${e}-rtl`]:{direction:"rtl"}})}};var Z=L("Switch",n=>{const e=A(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:n.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[Y(e),U(e),J(e),q(e),V(e)]},n=>{const{fontSize:e,lineHeight:c,controlHeight:t,colorWhite:a}=n,o=e*c,r=t/2,i=2,l=o-i*2,p=r-i*2;return{trackHeight:o,trackHeightSM:r,trackMinWidth:l*2+i*4,trackMinWidthSM:p*2+i*2,trackPadding:i,handleBg:a,handleSize:l,handleSizeSM:p,handleShadow:`0 2px 4px 0 ${new W("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:l/2,innerMaxMargin:l+i+i*2,innerMinMarginSM:p/2,innerMaxMarginSM:p+i+i*2}}),nn=globalThis&&globalThis.__rest||function(n,e){var c={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(c[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(c[t[a]]=n[t[a]]);return c};const D=s.exports.forwardRef((n,e)=>{const{prefixCls:c,size:t,disabled:a,loading:o,className:r,rootClassName:i,style:l}=n,p=nn(n,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:x,direction:w,switch:d}=s.exports.useContext(K),m=s.exports.useContext(_),u=(a!=null?a:m)||o,g=x("switch",c),C=s.exports.createElement("div",{className:`${g}-handle`},o&&s.exports.createElement(G,{className:`${g}-loading-icon`})),[I,S]=Z(g),y=B(t),$=E(d==null?void 0:d.className,{[`${g}-small`]:y==="small",[`${g}-loading`]:o,[`${g}-rtl`]:w==="rtl"},r,i,S),v=Object.assign(Object.assign({},d==null?void 0:d.style),l);return I(s.exports.createElement(F,{component:"Switch"},s.exports.createElement(z,Object.assign({},p,{prefixCls:g,className:$,style:v,disabled:u,ref:e,loadingIcon:C}))))});D.__ANT_SWITCH=!0;var tn=D;export{tn as S};