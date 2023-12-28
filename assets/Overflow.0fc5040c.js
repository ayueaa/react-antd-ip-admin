import{K as R,r as n,O as W,_ as w,c as fe,n as b,w as He,P as y,Y as qe,d as Je,M as Ze}from"./index.db5181c7.js";import{a as et}from"./index.9c20e89e.js";import{R as _e}from"./index.e721e410.js";import{a as tt}from"./useSize.70a35bba.js";const rt=new R("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),nt=new R("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),at=new R("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),st=new R("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),it=new R("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ot=new R("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),ft=new R("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),lt=new R("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ut={"slide-up":{inKeyframes:rt,outKeyframes:nt},"slide-down":{inKeyframes:at,outKeyframes:st},"slide-left":{inKeyframes:it,outKeyframes:ot},"slide-right":{inKeyframes:ft,outKeyframes:lt}},It=(e,i)=>{const{antCls:l}=e,s=`${l}-${i}`,{inKeyframes:f,outKeyframes:a}=ut[i];return[et(s,f,a,e.motionDurationMid),{[`
      ${s}-enter,
      ${s}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,["&-prepare"]:{transform:"scale(1)"}},[`${s}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var ct=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],N=void 0;function mt(e,i){var l=e.prefixCls,s=e.invalidate,f=e.item,a=e.renderItem,u=e.responsive,g=e.responsiveDisabled,m=e.registerSize,_=e.itemKey,C=e.className,B=e.style,H=e.children,q=e.display,d=e.order,U=e.component,K=U===void 0?"div":U,D=W(e,ct),v=u&&!q;function X(S){m(_,S)}n.exports.useEffect(function(){return function(){X(null)}},[]);var J=a&&f!==N?a(f):H,I;s||(I={opacity:v?0:1,height:v?0:N,overflowY:v?"hidden":N,order:u?d:N,pointerEvents:v?"none":N,position:v?"absolute":N});var Y={};v&&(Y["aria-hidden"]=!0);var x=n.exports.createElement(K,w({className:fe(!s&&l,C),style:b(b({},I),B)},Y,D,{ref:i}),J);return u&&(x=n.exports.createElement(_e,{onResize:function(Z){var A=Z.offsetWidth;X(A)},disabled:g},x)),x}var $=n.exports.forwardRef(mt);$.displayName="Item";function dt(e){if(typeof MessageChannel=="undefined")He(e);else{var i=new MessageChannel;i.port1.onmessage=function(){return e()},i.port2.postMessage(void 0)}}function vt(){var e=n.exports.useRef(null),i=function(s){e.current||(e.current=[],dt(function(){qe.exports.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(s)};return i}function P(e,i){var l=n.exports.useState(i),s=y(l,2),f=s[0],a=s[1],u=tt(function(g){e(function(){a(g)})});return[f,u]}var G=Je.createContext(null),pt=["component"],yt=["className"],gt=["className"],St=function(i,l){var s=n.exports.useContext(G);if(!s){var f=i.component,a=f===void 0?"div":f,u=W(i,pt);return n.exports.createElement(a,w({},u,{ref:l}))}var g=s.className,m=W(s,yt),_=i.className,C=W(i,gt);return n.exports.createElement(G.Provider,{value:null},n.exports.createElement($,w({ref:l,className:fe(g,_)},m,C)))},Ce=n.exports.forwardRef(St);Ce.displayName="RawItem";var Rt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Ie="responsive",Oe="invalidate";function xt(e){return"+ ".concat(e.length," ...")}function Et(e,i){var l=e.prefixCls,s=l===void 0?"rc-overflow":l,f=e.data,a=f===void 0?[]:f,u=e.renderItem,g=e.renderRawItem,m=e.itemKey,_=e.itemWidth,C=_===void 0?10:_,B=e.ssr,H=e.style,q=e.className,d=e.maxCount,U=e.renderRest,K=e.renderRawRest,D=e.suffix,v=e.component,X=v===void 0?"div":v,J=e.itemComponent,I=e.onVisibleChange,Y=W(e,Rt),x=B==="full",S=vt(),Z=P(S,null),A=y(Z,2),F=A[0],Ne=A[1],E=F||0,be=P(S,new Map),le=y(be,2),ue=le[0],Ke=le[1],De=P(S,0),ce=y(De,2),Me=ce[0],ze=ce[1],Pe=P(S,0),me=y(Pe,2),L=me[0],We=me[1],$e=P(S,0),de=y($e,2),T=de[0],Ue=de[1],Xe=n.exports.useState(null),ve=y(Xe,2),ee=ve[0],pe=ve[1],Ye=n.exports.useState(null),ye=y(Ye,2),V=ye[0],Ae=ye[1],O=n.exports.useMemo(function(){return V===null&&x?Number.MAX_SAFE_INTEGER:V||0},[V,F]),Fe=n.exports.useState(!1),ge=y(Fe,2),Le=ge[0],Te=ge[1],te="".concat(s,"-item"),Se=Math.max(Me,L),re=d===Ie,p=a.length&&re,Re=d===Oe,Ve=p||typeof d=="number"&&a.length>d,h=n.exports.useMemo(function(){var t=a;return p?F===null&&x?t=a:t=a.slice(0,Math.min(a.length,E/C)):typeof d=="number"&&(t=a.slice(0,d)),t},[a,C,F,d,p]),ne=n.exports.useMemo(function(){return p?a.slice(O+1):a.slice(h.length)},[a,h,p,O]),k=n.exports.useCallback(function(t,r){var o;return typeof m=="function"?m(t):(o=m&&(t==null?void 0:t[m]))!==null&&o!==void 0?o:r},[m]),ke=n.exports.useCallback(u||function(t){return t},[u]);function j(t,r,o){V===t&&(r===void 0||r===ee)||(Ae(t),o||(Te(t<a.length-1),I==null||I(t)),r!==void 0&&pe(r))}function je(t,r){Ne(r.clientWidth)}function xe(t,r){Ke(function(o){var c=new Map(o);return r===null?c.delete(t):c.set(t,r),c})}function Ge(t,r){We(r),ze(L)}function Qe(t,r){Ue(r)}function ae(t){return ue.get(k(h[t],t))}Ze(function(){if(E&&typeof Se=="number"&&h){var t=T,r=h.length,o=r-1;if(!r){j(0,null);return}for(var c=0;c<r;c+=1){var z=ae(c);if(x&&(z=z||0),z===void 0){j(c-1,void 0,!0);break}if(t+=z,o===0&&t<=E||c===o-1&&t+ae(o)<=E){j(o,null);break}else if(t+Se>E){j(c-1,t-z-T+L);break}}D&&ae(0)+T>E&&pe(null)}},[E,ue,L,T,k,h]);var Ee=Le&&!!ne.length,he={};ee!==null&&p&&(he={position:"absolute",left:ee,top:0});var M={prefixCls:te,responsive:p,component:J,invalidate:Re},Be=g?function(t,r){var o=k(t,r);return n.exports.createElement(G.Provider,{key:o,value:b(b({},M),{},{order:r,item:t,itemKey:o,registerSize:xe,display:r<=O})},g(t,r))}:function(t,r){var o=k(t,r);return n.exports.createElement($,w({},M,{order:r,key:o,item:t,renderItem:ke,itemKey:o,registerSize:xe,display:r<=O}))},se,we={order:Ee?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Ge,display:Ee};if(K)K&&(se=n.exports.createElement(G.Provider,{value:b(b({},M),we)},K(ne)));else{var ie=U||xt;se=n.exports.createElement($,w({},M,we),typeof ie=="function"?ie(ne):ie)}var oe=n.exports.createElement(X,w({className:fe(!Re&&s,q),style:H,ref:i},Y),h.map(Be),Ve?se:null,D&&n.exports.createElement($,w({},M,{responsive:re,responsiveDisabled:!p,order:O,className:"".concat(te,"-suffix"),registerSize:Qe,display:!0,style:he}),D));return re&&(oe=n.exports.createElement(_e,{onResize:je,disabled:!p},oe)),oe}var Q=n.exports.forwardRef(Et);Q.displayName="Overflow";Q.Item=Ce;Q.RESPONSIVE=Ie;Q.INVALIDATE=Oe;export{Q as F,at as a,nt as b,st as c,It as i,rt as s};