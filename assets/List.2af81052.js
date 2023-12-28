import{r as t,n as k,N as O,_ as Qe,c as Me,P as T,w as K,G as xt,F as Rt,I as Mt,M as me,J as Pe,O as bt,Y as Ge}from"./index.db5181c7.js";import{R as et}from"./index.e721e410.js";import{a as Ue}from"./useSize.70a35bba.js";var tt=t.exports.forwardRef(function(e,s){var r=e.height,c=e.offsetY,p=e.offsetX,n=e.children,f=e.prefixCls,d=e.onInnerResize,g=e.innerProps,b=e.rtl,h=e.extra,a={},u={display:"flex",flexDirection:"column"};if(c!==void 0){var o;a={height:r,position:"relative",overflow:"hidden"},u=k(k({},u),{},(o={transform:"translateY(".concat(c,"px)")},O(o,b?"marginRight":"marginLeft",-p),O(o,"position","absolute"),O(o,"left",0),O(o,"right",0),O(o,"top",0),o))}return t.exports.createElement("div",{style:a},t.exports.createElement(et,{onResize:function(S){var v=S.offsetHeight;v&&d&&d()}},t.exports.createElement("div",Qe({style:u,className:Me(O({},"".concat(f,"-holder-inner"),f)),ref:s},g),n,h)))});tt.displayName="Filler";function je(e,s){var r="touches"in e?e.touches[0]:e;return r[s?"pageX":"pageY"]}var Je=t.exports.forwardRef(function(e,s){var r,c=e.prefixCls,p=e.rtl,n=e.scrollOffset,f=e.scrollRange,d=e.onStartMove,g=e.onStopMove,b=e.onScroll,h=e.horizontal,a=e.spinSize,u=e.containerSize,o=e.style,m=e.thumbStyle,S=t.exports.useState(!1),v=T(S,2),R=v[0],M=v[1],C=t.exports.useState(null),_=T(C,2),N=_[0],W=_[1],y=t.exports.useState(null),A=T(y,2),D=A[0],Y=A[1],P=!p,Q=t.exports.useRef(),E=t.exports.useRef(),F=t.exports.useState(!1),ee=T(F,2),te=ee[0],j=ee[1],I=t.exports.useRef(),X=function(){clearTimeout(I.current),j(!0),I.current=setTimeout(function(){j(!1)},3e3)},re=f-u||0,ie=u-a||0,ne=re>0,V=t.exports.useMemo(function(){if(n===0||re===0)return 0;var H=n/re;return H*ie},[n,re,ie]),be=function(z){z.stopPropagation(),z.preventDefault()},le=t.exports.useRef({top:V,dragging:R,pageY:N,startTop:D});le.current={top:V,dragging:R,pageY:N,startTop:D};var se=function(z){M(!0),W(je(z,h)),Y(le.current.top),d(),z.stopPropagation(),z.preventDefault()};t.exports.useEffect(function(){var H=function(ve){ve.preventDefault()},z=Q.current,U=E.current;return z.addEventListener("touchstart",H),U.addEventListener("touchstart",se),function(){z.removeEventListener("touchstart",H),U.removeEventListener("touchstart",se)}},[]);var ce=t.exports.useRef();ce.current=re;var fe=t.exports.useRef();fe.current=ie,t.exports.useEffect(function(){if(R){var H,z=function(ve){var de=le.current,ye=de.dragging,ue=de.pageY,Ee=de.startTop;if(K.cancel(H),ye){var he=je(ve,h)-ue,ae=Ee;!P&&h?ae-=he:ae+=he;var Re=ce.current,oe=fe.current,J=oe?ae/oe:0,$=Math.ceil(J*Re);$=Math.max($,0),$=Math.min($,Re),H=K(function(){b($,h)})}},U=function(){M(!1),g()};return window.addEventListener("mousemove",z),window.addEventListener("touchmove",z),window.addEventListener("mouseup",U),window.addEventListener("touchend",U),function(){window.removeEventListener("mousemove",z),window.removeEventListener("touchmove",z),window.removeEventListener("mouseup",U),window.removeEventListener("touchend",U),K.cancel(H)}}},[R]),t.exports.useEffect(function(){X()},[n]),t.exports.useImperativeHandle(s,function(){return{delayHidden:X}});var G="".concat(c,"-scrollbar"),w={position:"absolute",visibility:te&&ne?null:"hidden"},B={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return h?(w.height=8,w.left=0,w.right=0,w.bottom=0,B.height="100%",B.width=a,P?B.left=V:B.right=V):(w.width=8,w.top=0,w.bottom=0,P?w.right=0:w.left=0,B.width="100%",B.height=a,B.top=V),t.exports.createElement("div",{ref:Q,className:Me(G,(r={},O(r,"".concat(G,"-horizontal"),h),O(r,"".concat(G,"-vertical"),!h),O(r,"".concat(G,"-visible"),te),r)),style:k(k({},w),o),onMouseDown:be,onMouseMove:X},t.exports.createElement("div",{ref:E,className:Me("".concat(G,"-thumb"),O({},"".concat(G,"-thumb-moving"),R)),style:k(k({},B),m),onMouseDown:se}))});function yt(e){var s=e.children,r=e.setRef,c=t.exports.useCallback(function(p){r(p)},[]);return t.exports.cloneElement(s,{ref:c})}function Et(e,s,r,c,p,n,f){var d=f.getKey;return e.slice(s,r+1).map(function(g,b){var h=s+b,a=n(g,h,{style:{width:c}}),u=d(g);return t.exports.createElement(yt,{key:u,setRef:function(m){return p(g,m)}},a)})}var wt=function(){function e(){Rt(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return xt(e,[{key:"set",value:function(r,c){this.maps[r]=c,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}();function zt(e,s,r){var c=t.exports.useState(0),p=T(c,2),n=p[0],f=p[1],d=t.exports.useRef(new Map),g=t.exports.useRef(new wt),b=t.exports.useRef();function h(){K.cancel(b.current)}function a(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;h();var m=function(){d.current.forEach(function(v,R){if(v&&v.offsetParent){var M=Mt(v),C=M.offsetHeight;g.current.get(R)!==C&&g.current.set(R,M.offsetHeight)}}),f(function(v){return v+1})};o?m():b.current=K(m)}function u(o,m){var S=e(o),v=d.current.get(S);m?(d.current.set(S,m),a()):d.current.delete(S),!v!=!m&&(m?s==null||s(o):r==null||r(o))}return t.exports.useEffect(function(){return h},[]),[u,a,g.current,n]}var Lt=10;function _t(e,s,r,c,p,n,f,d){var g=t.exports.useRef(),b=t.exports.useState(null),h=T(b,2),a=h[0],u=h[1];return me(function(){if(a&&a.times<Lt){if(!e.current){u(function(X){return k({},X)});return}n();var o=a.targetAlign,m=a.originAlign,S=a.index,v=a.offset,R=e.current.clientHeight,M=!1,C=o,_=null;if(R){for(var N=o||m,W=0,y=0,A=0,D=Math.min(s.length-1,S),Y=0;Y<=D;Y+=1){var P=p(s[Y]);y=W;var Q=r.get(P);A=y+(Q===void 0?c:Q),W=A}for(var E=N==="top"?v:R-v,F=D;F>=0;F-=1){var ee=p(s[F]),te=r.get(ee);if(te===void 0){M=!0;break}if(E-=te,E<=0)break}switch(N){case"top":_=y-v;break;case"bottom":_=A-R+v;break;default:{var j=e.current.scrollTop,I=j+R;y<j?C="top":A>I&&(C="bottom")}}_!==null&&f(_),_!==a.lastTop&&(M=!0)}M&&u(function(X){return k(k({},X),{},{times:X.times+1,targetAlign:C,lastTop:_})})}},[a,e.current]),function(o){if(o==null){d();return}if(K.cancel(g.current),typeof o=="number")f(o);else if(o&&Pe(o)==="object"){var m,S=o.align;"index"in o?m=o.index:m=s.findIndex(function(M){return p(M)===o.key});var v=o.offset,R=v===void 0?0:v;u({times:0,index:m,offset:R,originAlign:S})}}}function Ht(e,s,r){var c=e.length,p=s.length,n,f;if(c===0&&p===0)return null;c<p?(n=e,f=s):(n=s,f=e);var d={__EMPTY_ITEM__:!0};function g(m){return m!==void 0?r(m):d}for(var b=null,h=Math.abs(c-p)!==1,a=0;a<f.length;a+=1){var u=g(n[a]),o=g(f[a]);if(u!==o){b=a,h=h||u!==g(f[a+1]);break}}return b===null?null:{index:b,multiple:h}}function Tt(e,s,r){var c=t.exports.useState(e),p=T(c,2),n=p[0],f=p[1],d=t.exports.useState(null),g=T(d,2),b=g[0],h=g[1];return t.exports.useEffect(function(){var a=Ht(n||[],e||[],s);(a==null?void 0:a.index)!==void 0&&(r==null||r(a.index),h(e[a.index])),f(e)},[e]),[b]}var Ze=(typeof navigator=="undefined"?"undefined":Pe(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),rt=function(e,s){var r=t.exports.useRef(!1),c=t.exports.useRef(null);function p(){clearTimeout(c.current),r.current=!0,c.current=setTimeout(function(){r.current=!1},50)}var n=t.exports.useRef({top:e,bottom:s});return n.current.top=e,n.current.bottom=s,function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=f<0&&n.current.top||f>0&&n.current.bottom;return d&&g?(clearTimeout(c.current),r.current=!1):(!g||r.current)&&p(),!r.current&&g}};function Ct(e,s,r,c,p){var n=t.exports.useRef(0),f=t.exports.useRef(null),d=t.exports.useRef(null),g=t.exports.useRef(!1),b=rt(s,r);function h(v,R){K.cancel(f.current),n.current+=R,d.current=R,!b(R)&&(Ze||v.preventDefault(),f.current=K(function(){var M=g.current?10:1;p(n.current*M),n.current=0}))}function a(v,R){p(R,!0),Ze||v.preventDefault()}var u=t.exports.useRef(null),o=t.exports.useRef(null);function m(v){if(!!e){K.cancel(o.current),o.current=K(function(){u.current=null},2);var R=v.deltaX,M=v.deltaY,C=v.shiftKey,_=R,N=M;(u.current==="sx"||!u.current&&(C||!1)&&M&&!R)&&(_=M,N=0,u.current="sx");var W=Math.abs(_),y=Math.abs(N);u.current===null&&(u.current=c&&W>y?"x":"y"),u.current==="y"?h(v,N):a(v,_)}}function S(v){!e||(g.current=v.detail===d.current)}return[m,S]}var Dt=14/15;function Pt(e,s,r){var c=t.exports.useRef(!1),p=t.exports.useRef(0),n=t.exports.useRef(null),f=t.exports.useRef(null),d,g=function(u){if(c.current){var o=Math.ceil(u.touches[0].pageY),m=p.current-o;p.current=o,r(m)&&u.preventDefault(),clearInterval(f.current),f.current=setInterval(function(){m*=Dt,(!r(m,!0)||Math.abs(m)<=.1)&&clearInterval(f.current)},16)}},b=function(){c.current=!1,d()},h=function(u){d(),u.touches.length===1&&!c.current&&(c.current=!0,p.current=Math.ceil(u.touches[0].pageY),n.current=u.target,n.current.addEventListener("touchmove",g),n.current.addEventListener("touchend",b))};d=function(){n.current&&(n.current.removeEventListener("touchmove",g),n.current.removeEventListener("touchend",b))},me(function(){return e&&s.current.addEventListener("touchstart",h),function(){var a;(a=s.current)===null||a===void 0||a.removeEventListener("touchstart",h),d(),clearInterval(f.current)}},[e])}var It=20;function qe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/s*100;return isNaN(r)&&(r=0),r=Math.max(r,It),r=Math.min(r,e/2),Math.floor(r)}function Ot(e,s,r,c){var p=t.exports.useMemo(function(){return[new Map,[]]},[e,r.id,c]),n=T(p,2),f=n[0],d=n[1],g=function(h){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h,u=f.get(h),o=f.get(a);if(u===void 0||o===void 0)for(var m=e.length,S=d.length;S<m;S+=1){var v,R=e[S],M=s(R);f.set(M,S);var C=(v=r.get(M))!==null&&v!==void 0?v:c;if(d[S]=(d[S-1]||0)+C,M===h&&(u=S),M===a&&(o=S),u!==void 0&&o!==void 0)break}return{top:d[u-1]||0,bottom:d[o]}};return g}var kt=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Nt=[],Yt={overflowY:"auto",overflowAnchor:"none"};function Ft(e,s){var r=e.prefixCls,c=r===void 0?"rc-virtual-list":r,p=e.className,n=e.height,f=e.itemHeight,d=e.fullHeight,g=d===void 0?!0:d,b=e.style,h=e.data,a=e.children,u=e.itemKey,o=e.virtual,m=e.direction,S=e.scrollWidth,v=e.component,R=v===void 0?"div":v,M=e.onScroll,C=e.onVirtualScroll,_=e.onVisibleChange,N=e.innerProps,W=e.extraRender,y=e.styles,A=bt(e,kt),D=!!(o!==!1&&n&&f),Y=D&&h&&(f*h.length>n||!!S),P=m==="rtl",Q=Me(c,O({},"".concat(c,"-rtl"),P),p),E=h||Nt,F=t.exports.useRef(),ee=t.exports.useRef(),te=t.exports.useState(0),j=T(te,2),I=j[0],X=j[1],re=t.exports.useState(0),ie=T(re,2),ne=ie[0],V=ie[1],be=t.exports.useState(!1),le=T(be,2),se=le[0],ce=le[1],fe=function(){ce(!0)},G=function(){ce(!1)},w=t.exports.useCallback(function(i){return typeof u=="function"?u(i):i==null?void 0:i[u]},[u]),B={getKey:w};function H(i){X(function(l){var x;typeof i=="function"?x=i(l):x=i;var L=ut(x);return F.current.scrollTop=L,L})}var z=t.exports.useRef({start:0,end:E.length}),U=t.exports.useRef(),xe=Tt(E,w),ve=T(xe,1),de=ve[0];U.current=de;var ye=zt(w,null,null),ue=T(ye,4),Ee=ue[0],he=ue[1],ae=ue[2],Re=ue[3],oe=t.exports.useMemo(function(){if(!D)return{scrollHeight:void 0,start:0,end:E.length-1,offset:void 0};if(!Y){var i;return{scrollHeight:((i=ee.current)===null||i===void 0?void 0:i.offsetHeight)||0,start:0,end:E.length-1,offset:void 0}}for(var l=0,x,L,q,pt=E.length,ge=0;ge<pt;ge+=1){var gt=E[ge],mt=w(gt),Ae=ae.get(mt),De=l+(Ae===void 0?f:Ae);De>=I&&x===void 0&&(x=ge,L=l),De>I+n&&q===void 0&&(q=ge),l=De}return x===void 0&&(x=0,L=0,q=Math.ceil(n/f)),q===void 0&&(q=E.length-1),q=Math.min(q+1,E.length-1),{scrollHeight:l,start:x,end:q,offset:L}},[Y,D,I,E,Re,n]),J=oe.scrollHeight,$=oe.start,Se=oe.end,Ie=oe.offset;z.current.start=$,z.current.end=Se;var nt=t.exports.useState({width:0,height:n}),Oe=T(nt,2),Z=Oe[0],at=Oe[1],ot=function(l){at({width:l.width||l.offsetWidth,height:l.height||l.offsetHeight})},ke=t.exports.useRef(),Ne=t.exports.useRef(),it=t.exports.useMemo(function(){return qe(Z.width,S)},[Z.width,S]),lt=t.exports.useMemo(function(){return qe(Z.height,J)},[Z.height,J]),we=J-n,ze=t.exports.useRef(we);ze.current=we;function ut(i){var l=i;return Number.isNaN(ze.current)||(l=Math.min(l,ze.current)),l=Math.max(l,0),l}var Ye=I<=0,Fe=I>=we,st=rt(Ye,Fe),Le=function(){return{x:P?-ne:ne,y:I}},_e=t.exports.useRef(Le()),He=Ue(function(){if(C){var i=Le();(_e.current.x!==i.x||_e.current.y!==i.y)&&(C(i),_e.current=i)}});function $e(i,l){var x=i;l?(Ge.exports.flushSync(function(){V(x)}),He()):H(x)}function ct(i){var l=i.currentTarget.scrollTop;l!==I&&H(l),M==null||M(i),He()}var Te=function(l){var x=l,L=S-Z.width;return x=Math.max(x,0),x=Math.min(x,L),x},ft=Ue(function(i,l){l?(Ge.exports.flushSync(function(){V(function(x){var L=x+(P?-i:i);return Te(L)})}),He()):H(function(x){var L=x+i;return L})}),vt=Ct(D,Ye,Fe,!!S,ft),We=T(vt,2),Ce=We[0],Xe=We[1];Pt(D,F,function(i,l){return st(i,l)?!1:(Ce({preventDefault:function(){},deltaY:i}),!0)}),me(function(){function i(x){D&&x.preventDefault()}var l=F.current;return l.addEventListener("wheel",Ce),l.addEventListener("DOMMouseScroll",Xe),l.addEventListener("MozMousePixelScroll",i),function(){l.removeEventListener("wheel",Ce),l.removeEventListener("DOMMouseScroll",Xe),l.removeEventListener("MozMousePixelScroll",i)}},[D]),me(function(){S&&V(function(i){return Te(i)})},[Z.width,S]);var Ve=function(){var l,x;(l=ke.current)===null||l===void 0||l.delayHidden(),(x=Ne.current)===null||x===void 0||x.delayHidden()},Be=_t(F,E,ae,f,w,function(){return he(!0)},H,Ve);t.exports.useImperativeHandle(s,function(){return{getScrollInfo:Le,scrollTo:function(l){function x(L){return L&&Pe(L)==="object"&&("left"in L||"top"in L)}x(l)?(l.left!==void 0&&V(Te(l.left)),Be(l.top)):Be(l)}}}),me(function(){if(_){var i=E.slice($,Se+1);_(i,E)}},[$,Se,E]);var dt=Ot(E,w,ae,f),ht=W==null?void 0:W({start:$,end:Se,virtual:Y,offsetX:ne,offsetY:Ie,rtl:P,getSize:dt}),St=Et(E,$,Se,S,Ee,a,B),pe=null;n&&(pe=k(O({},g?"height":"maxHeight",n),Yt),D&&(pe.overflowY="hidden",S&&(pe.overflowX="hidden"),se&&(pe.pointerEvents="none")));var Ke={};return P&&(Ke.dir="rtl"),t.exports.createElement("div",Qe({style:k(k({},b),{},{position:"relative"}),className:Q},Ke,A),t.exports.createElement(et,{onResize:ot},t.exports.createElement(R,{className:"".concat(c,"-holder"),style:pe,ref:F,onScroll:ct,onMouseEnter:Ve},t.exports.createElement(tt,{prefixCls:c,height:J,offsetX:ne,offsetY:Ie,scrollWidth:S,onInnerResize:he,ref:ee,innerProps:N,rtl:P,extra:ht},St))),Y&&J>n&&t.exports.createElement(Je,{ref:ke,prefixCls:c,scrollOffset:I,scrollRange:J,rtl:P,onScroll:$e,onStartMove:fe,onStopMove:G,spinSize:lt,containerSize:Z.height,style:y==null?void 0:y.verticalScrollBar,thumbStyle:y==null?void 0:y.verticalScrollBarThumb}),Y&&S&&t.exports.createElement(Je,{ref:Ne,prefixCls:c,scrollOffset:ne,scrollRange:S,rtl:P,onScroll:$e,onStartMove:fe,onStopMove:G,spinSize:it,containerSize:Z.width,horizontal:!0,style:y==null?void 0:y.horizontalScrollBar,thumbStyle:y==null?void 0:y.horizontalScrollBarThumb}))}var $t=t.exports.forwardRef(Ft);$t.displayName="List";export{$t as L};