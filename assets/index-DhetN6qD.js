(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=a(d);fetch(d.href,f)}})();function kp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ss={exports:{}},pi={},us={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Nm(){if(Hd)return ae;Hd=1;var r=Symbol.for("react.element"),l=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),E=Symbol.iterator;function P(k){return k===null||typeof k!="object"?null:(k=E&&k[E]||k["@@iterator"],typeof k=="function"?k:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,O={};function z(k,R,re){this.props=k,this.context=R,this.refs=O,this.updater=re||A}z.prototype.isReactComponent={},z.prototype.setState=function(k,R){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,R,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function M(){}M.prototype=z.prototype;function q(k,R,re){this.props=k,this.context=R,this.refs=O,this.updater=re||A}var F=q.prototype=new M;F.constructor=q,$(F,z.prototype),F.isPureReactComponent=!0;var J=Array.isArray,ne=Object.prototype.hasOwnProperty,ee={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function be(k,R,re){var ie,se={},le=null,he=null;if(R!=null)for(ie in R.ref!==void 0&&(he=R.ref),R.key!==void 0&&(le=""+R.key),R)ne.call(R,ie)&&!Y.hasOwnProperty(ie)&&(se[ie]=R[ie]);var ue=arguments.length-2;if(ue===1)se.children=re;else if(1<ue){for(var pe=Array(ue),Be=0;Be<ue;Be++)pe[Be]=arguments[Be+2];se.children=pe}if(k&&k.defaultProps)for(ie in ue=k.defaultProps,ue)se[ie]===void 0&&(se[ie]=ue[ie]);return{$$typeof:r,type:k,key:le,ref:he,props:se,_owner:ee.current}}function we(k,R){return{$$typeof:r,type:k.type,key:R,ref:k.ref,props:k.props,_owner:k._owner}}function Fe(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function ft(k){var R={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(re){return R[re]})}var ht=/\/+/g;function Je(k,R){return typeof k=="object"&&k!==null&&k.key!=null?ft(""+k.key):R.toString(36)}function at(k,R,re,ie,se){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(le){case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case r:case l:he=!0}}if(he)return he=k,se=se(he),k=ie===""?"."+Je(he,0):ie,J(se)?(re="",k!=null&&(re=k.replace(ht,"$&/")+"/"),at(se,R,re,"",function(Be){return Be})):se!=null&&(Fe(se)&&(se=we(se,re+(!se.key||he&&he.key===se.key?"":(""+se.key).replace(ht,"$&/")+"/")+k)),R.push(se)),1;if(he=0,ie=ie===""?".":ie+":",J(k))for(var ue=0;ue<k.length;ue++){le=k[ue];var pe=ie+Je(le,ue);he+=at(le,R,re,pe,se)}else if(pe=P(k),typeof pe=="function")for(k=pe.call(k),ue=0;!(le=k.next()).done;)le=le.value,pe=ie+Je(le,ue++),he+=at(le,R,re,pe,se);else if(le==="object")throw R=String(k),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return he}function mt(k,R,re){if(k==null)return k;var ie=[],se=0;return at(k,ie,"","",function(le){return R.call(re,le,se++)}),ie}function Ve(k){if(k._status===-1){var R=k._result;R=R(),R.then(function(re){(k._status===0||k._status===-1)&&(k._status=1,k._result=re)},function(re){(k._status===0||k._status===-1)&&(k._status=2,k._result=re)}),k._status===-1&&(k._status=0,k._result=R)}if(k._status===1)return k._result.default;throw k._result}var ve={current:null},D={transition:null},K={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:D,ReactCurrentOwner:ee};function B(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:mt,forEach:function(k,R,re){mt(k,function(){R.apply(this,arguments)},re)},count:function(k){var R=0;return mt(k,function(){R++}),R},toArray:function(k){return mt(k,function(R){return R})||[]},only:function(k){if(!Fe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ae.Component=z,ae.Fragment=a,ae.Profiler=d,ae.PureComponent=q,ae.StrictMode=c,ae.Suspense=g,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ae.act=B,ae.cloneElement=function(k,R,re){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ie=$({},k.props),se=k.key,le=k.ref,he=k._owner;if(R!=null){if(R.ref!==void 0&&(le=R.ref,he=ee.current),R.key!==void 0&&(se=""+R.key),k.type&&k.type.defaultProps)var ue=k.type.defaultProps;for(pe in R)ne.call(R,pe)&&!Y.hasOwnProperty(pe)&&(ie[pe]=R[pe]===void 0&&ue!==void 0?ue[pe]:R[pe])}var pe=arguments.length-2;if(pe===1)ie.children=re;else if(1<pe){ue=Array(pe);for(var Be=0;Be<pe;Be++)ue[Be]=arguments[Be+2];ie.children=ue}return{$$typeof:r,type:k.type,key:se,ref:le,props:ie,_owner:he}},ae.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:f,_context:k},k.Consumer=k},ae.createElement=be,ae.createFactory=function(k){var R=be.bind(null,k);return R.type=k,R},ae.createRef=function(){return{current:null}},ae.forwardRef=function(k){return{$$typeof:x,render:k}},ae.isValidElement=Fe,ae.lazy=function(k){return{$$typeof:C,_payload:{_status:-1,_result:k},_init:Ve}},ae.memo=function(k,R){return{$$typeof:w,type:k,compare:R===void 0?null:R}},ae.startTransition=function(k){var R=D.transition;D.transition={};try{k()}finally{D.transition=R}},ae.unstable_act=B,ae.useCallback=function(k,R){return ve.current.useCallback(k,R)},ae.useContext=function(k){return ve.current.useContext(k)},ae.useDebugValue=function(){},ae.useDeferredValue=function(k){return ve.current.useDeferredValue(k)},ae.useEffect=function(k,R){return ve.current.useEffect(k,R)},ae.useId=function(){return ve.current.useId()},ae.useImperativeHandle=function(k,R,re){return ve.current.useImperativeHandle(k,R,re)},ae.useInsertionEffect=function(k,R){return ve.current.useInsertionEffect(k,R)},ae.useLayoutEffect=function(k,R){return ve.current.useLayoutEffect(k,R)},ae.useMemo=function(k,R){return ve.current.useMemo(k,R)},ae.useReducer=function(k,R,re){return ve.current.useReducer(k,R,re)},ae.useRef=function(k){return ve.current.useRef(k)},ae.useState=function(k){return ve.current.useState(k)},ae.useSyncExternalStore=function(k,R,re){return ve.current.useSyncExternalStore(k,R,re)},ae.useTransition=function(){return ve.current.useTransition()},ae.version="18.3.1",ae}var Wd;function zs(){return Wd||(Wd=1,us.exports=Nm()),us.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function Cm(){if(Vd)return pi;Vd=1;var r=zs(),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(x,g,w){var C,E={},P=null,A=null;w!==void 0&&(P=""+w),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(A=g.ref);for(C in g)c.call(g,C)&&!f.hasOwnProperty(C)&&(E[C]=g[C]);if(x&&x.defaultProps)for(C in g=x.defaultProps,g)E[C]===void 0&&(E[C]=g[C]);return{$$typeof:l,type:x,key:P,ref:A,props:E,_owner:d.current}}return pi.Fragment=a,pi.jsx=m,pi.jsxs=m,pi}var Qd;function Em(){return Qd||(Qd=1,ss.exports=Cm()),ss.exports}var u=Em(),N=zs();const tn=kp(N);var Mo={},cs={exports:{}},lt={},ds={exports:{}},ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Pm(){return qd||(qd=1,function(r){function l(D,K){var B=D.length;D.push(K);e:for(;0<B;){var k=B-1>>>1,R=D[k];if(0<d(R,K))D[k]=K,D[B]=R,B=k;else break e}}function a(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var K=D[0],B=D.pop();if(B!==K){D[0]=B;e:for(var k=0,R=D.length,re=R>>>1;k<re;){var ie=2*(k+1)-1,se=D[ie],le=ie+1,he=D[le];if(0>d(se,B))le<R&&0>d(he,se)?(D[k]=he,D[le]=B,k=le):(D[k]=se,D[ie]=B,k=ie);else if(le<R&&0>d(he,B))D[k]=he,D[le]=B,k=le;else break e}}return K}function d(D,K){var B=D.sortIndex-K.sortIndex;return B!==0?B:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var m=Date,x=m.now();r.unstable_now=function(){return m.now()-x}}var g=[],w=[],C=1,E=null,P=3,A=!1,$=!1,O=!1,z=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(D){for(var K=a(w);K!==null;){if(K.callback===null)c(w);else if(K.startTime<=D)c(w),K.sortIndex=K.expirationTime,l(g,K);else break;K=a(w)}}function J(D){if(O=!1,F(D),!$)if(a(g)!==null)$=!0,Ve(ne);else{var K=a(w);K!==null&&ve(J,K.startTime-D)}}function ne(D,K){$=!1,O&&(O=!1,M(be),be=-1),A=!0;var B=P;try{for(F(K),E=a(g);E!==null&&(!(E.expirationTime>K)||D&&!ft());){var k=E.callback;if(typeof k=="function"){E.callback=null,P=E.priorityLevel;var R=k(E.expirationTime<=K);K=r.unstable_now(),typeof R=="function"?E.callback=R:E===a(g)&&c(g),F(K)}else c(g);E=a(g)}if(E!==null)var re=!0;else{var ie=a(w);ie!==null&&ve(J,ie.startTime-K),re=!1}return re}finally{E=null,P=B,A=!1}}var ee=!1,Y=null,be=-1,we=5,Fe=-1;function ft(){return!(r.unstable_now()-Fe<we)}function ht(){if(Y!==null){var D=r.unstable_now();Fe=D;var K=!0;try{K=Y(!0,D)}finally{K?Je():(ee=!1,Y=null)}}else ee=!1}var Je;if(typeof q=="function")Je=function(){q(ht)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,mt=at.port2;at.port1.onmessage=ht,Je=function(){mt.postMessage(null)}}else Je=function(){z(ht,0)};function Ve(D){Y=D,ee||(ee=!0,Je())}function ve(D,K){be=z(function(){D(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_continueExecution=function(){$||A||($=!0,Ve(ne))},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return a(g)},r.unstable_next=function(D){switch(P){case 1:case 2:case 3:var K=3;break;default:K=P}var B=P;P=K;try{return D()}finally{P=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=P;P=D;try{return K()}finally{P=B}},r.unstable_scheduleCallback=function(D,K,B){var k=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?k+B:k):B=k,D){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,D={id:C++,callback:K,priorityLevel:D,startTime:B,expirationTime:R,sortIndex:-1},B>k?(D.sortIndex=B,l(w,D),a(g)===null&&D===a(w)&&(O?(M(be),be=-1):O=!0,ve(J,B-k))):(D.sortIndex=R,l(g,D),$||A||($=!0,Ve(ne))),D},r.unstable_shouldYield=ft,r.unstable_wrapCallback=function(D){var K=P;return function(){var B=P;P=K;try{return D.apply(this,arguments)}finally{P=B}}}}(ps)),ps}var Kd;function Rm(){return Kd||(Kd=1,ds.exports=Pm()),ds.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function _m(){if(Gd)return lt;Gd=1;var r=zs(),l=Rm();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function f(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},E={};function P(e){return g.call(E,e)?!0:g.call(C,e)?!1:w.test(e)?E[e]=!0:(C[e]=!0,!1)}function A(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $(e,t,n,i){if(t===null||typeof t>"u"||A(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,i,o,s,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=p}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,q);z[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,q);z[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,q);z[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,t,n,i){var o=z.hasOwnProperty(t)?z[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($(t,n,o,i)&&(n=null),i||o===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var J=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),ee=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),be=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),ft=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),D=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,k;function R(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var re=!1;function ie(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var i=b}Reflect.construct(e,[],t)}else{try{t.call()}catch(b){i=b}e.call(t.prototype)}else{try{throw Error()}catch(b){i=b}e()}}catch(b){if(b&&i&&typeof b.stack=="string"){for(var o=b.stack.split(`
`),s=i.stack.split(`
`),p=o.length-1,h=s.length-1;1<=p&&0<=h&&o[p]!==s[h];)h--;for(;1<=p&&0<=h;p--,h--)if(o[p]!==s[h]){if(p!==1||h!==1)do if(p--,h--,0>h||o[p]!==s[h]){var v=`
`+o[p].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=p&&0<=h);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function se(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case ee:return"Portal";case we:return"Profiler";case be:return"StrictMode";case Je:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ft:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mt:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===be?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Be(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){i=""+p,s.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){e._valueTracker||(e._valueTracker=Be(e))}function jt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=pe(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Js(e,t){t=t.checked,t!=null&&F(e,"checked",t,!1)}function gl(e,t){Js(e,t);var n=ue(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Hn(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Er(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function eu(e,t){var n=ue(t.value),i=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ri,ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rf=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){Rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rr[t]=Rr[e]})});function iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+t).trim():t+"px"}function ou(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=iu(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var _f=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(_f[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,Wn=null,Vn=null;function lu(e){if(e=Jr(e)){if(typeof bl!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Xi(t),bl(e.stateNode,e.type,t))}}function au(e){Wn?Vn?Vn.push(e):Vn=[e]:Wn=e}function su(){if(Wn){var e=Wn,t=Vn;if(Vn=Wn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function uu(e,t){return e(t)}function cu(){}var Nl=!1;function du(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return uu(e,t,n)}finally{Nl=!1,(Wn!==null||Vn!==null)&&(cu(),su())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var i=Xi(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Cl=!1;if(x)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Cl=!1}function Tf(e,t,n,i,o,s,p,h,v){var b=Array.prototype.slice.call(arguments,3);try{t.apply(n,b)}catch(T){this.onError(T)}}var Lr=!1,_i=null,Ti=!1,El=null,Lf={onError:function(e){Lr=!0,_i=e}};function zf(e,t,n,i,o,s,p,h,v){Lr=!1,_i=null,Tf.apply(Lf,arguments)}function If(e,t,n,i,o,s,p,h,v){if(zf.apply(this,arguments),Lr){if(Lr){var b=_i;Lr=!1,_i=null}else throw Error(a(198));Ti||(Ti=!0,El=b)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(En(e)!==e)throw Error(a(188))}function Af(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return fu(o),e;if(s===i)return fu(o),t;s=s.sibling}throw Error(a(188))}if(n.return!==i.return)n=o,i=s;else{for(var p=!1,h=o.child;h;){if(h===n){p=!0,n=o,i=s;break}if(h===i){p=!0,i=o,n=s;break}h=h.sibling}if(!p){for(h=s.child;h;){if(h===n){p=!0,n=s,i=o;break}if(h===i){p=!0,i=s,n=o;break}h=h.sibling}if(!p)throw Error(a(189))}}if(n.alternate!==i)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function hu(e){return e=Af(e),e!==null?mu(e):null}function mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mu(e);if(t!==null)return t;e=e.sibling}return null}var gu=l.unstable_scheduleCallback,vu=l.unstable_cancelCallback,Ff=l.unstable_shouldYield,Of=l.unstable_requestPaint,_e=l.unstable_now,Mf=l.unstable_getCurrentPriorityLevel,Pl=l.unstable_ImmediatePriority,yu=l.unstable_UserBlockingPriority,Li=l.unstable_NormalPriority,Df=l.unstable_LowPriority,xu=l.unstable_IdlePriority,zi=null,Ot=null;function $f(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Hf,Bf=Math.log,Uf=Math.LN2;function Hf(e){return e>>>=0,e===0?32:31-(Bf(e)/Uf|0)|0}var Ii=64,Ai=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,s=e.pingedLanes,p=n&268435455;if(p!==0){var h=p&~o;h!==0?i=zr(h):(s&=p,s!==0&&(i=zr(s)))}else p=n&~o,p!==0?i=zr(p):s!==0&&(i=zr(s));if(i===0)return 0;if(t!==0&&t!==i&&(t&o)===0&&(o=i&-i,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-bt(t),o=1<<n,i|=e[n],t&=~o;return i}function Wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var p=31-bt(s),h=1<<p,v=o[p];v===-1?((h&n)===0||(h&i)!==0)&&(o[p]=Wf(h,t)):v<=t&&(e.expiredLanes|=h),s&=~h}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wu(){var e=Ii;return Ii<<=1,(Ii&4194240)===0&&(Ii=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function Qf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-bt(n),s=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~s}}function Tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var ge=0;function ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Su,Ll,ju,bu,Nu,zl=!1,Oi=[],ln=null,an=null,sn=null,Ar=new Map,Fr=new Map,un=[],qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function Or(e,t,n,i,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Jr(t),t!==null&&Ll(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Kf(e,t,n,i,o){switch(t){case"focusin":return ln=Or(ln,e,t,n,i,o),!0;case"dragenter":return an=Or(an,e,t,n,i,o),!0;case"mouseover":return sn=Or(sn,e,t,n,i,o),!0;case"pointerover":var s=o.pointerId;return Ar.set(s,Or(Ar.get(s)||null,e,t,n,i,o)),!0;case"gotpointercapture":return s=o.pointerId,Fr.set(s,Or(Fr.get(s)||null,e,t,n,i,o)),!0}return!1}function Eu(e){var t=Pn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=pu(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){ju(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Sl=i,n.target.dispatchEvent(i),Sl=null}else return t=Jr(n),t!==null&&Ll(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){Mi(e)&&n.delete(t)}function Gf(){zl=!1,ln!==null&&Mi(ln)&&(ln=null),an!==null&&Mi(an)&&(an=null),sn!==null&&Mi(sn)&&(sn=null),Ar.forEach(Pu),Fr.forEach(Pu)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Gf)))}function Dr(e){function t(o){return Mr(o,e)}if(0<Oi.length){Mr(Oi[0],e);for(var n=1;n<Oi.length;n++){var i=Oi[n];i.blockedOn===e&&(i.blockedOn=null)}}for(ln!==null&&Mr(ln,e),an!==null&&Mr(an,e),sn!==null&&Mr(sn,e),Ar.forEach(t),Fr.forEach(t),n=0;n<un.length;n++)i=un[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Eu(n),n.blockedOn===null&&un.shift()}var Qn=J.ReactCurrentBatchConfig,Di=!0;function Yf(e,t,n,i){var o=ge,s=Qn.transition;Qn.transition=null;try{ge=1,Il(e,t,n,i)}finally{ge=o,Qn.transition=s}}function Jf(e,t,n,i){var o=ge,s=Qn.transition;Qn.transition=null;try{ge=4,Il(e,t,n,i)}finally{ge=o,Qn.transition=s}}function Il(e,t,n,i){if(Di){var o=Al(e,t,n,i);if(o===null)Xl(e,t,i,$i,n),Cu(e,i);else if(Kf(o,e,t,n,i))i.stopPropagation();else if(Cu(e,i),t&4&&-1<qf.indexOf(e)){for(;o!==null;){var s=Jr(o);if(s!==null&&Su(s),s=Al(e,t,n,i),s===null&&Xl(e,t,i,$i,n),s===o)break;o=s}o!==null&&i.stopPropagation()}else Xl(e,t,i,null,n)}}var $i=null;function Al(e,t,n,i){if($i=null,e=jl(i),e=Pn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function Ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mf()){case Pl:return 1;case yu:return 4;case Li:case Df:return 16;case xu:return 536870912;default:return 16}default:return 16}}var cn=null,Fl=null,Bi=null;function _u(){if(Bi)return Bi;var e,t=Fl,n=t.length,i,o="value"in cn?cn.value:cn.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===o[s-i];i++);return Bi=o.slice(e,1<i?1-i:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Tu(){return!1}function st(e){function t(n,i,o,s,p){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hi:Tu,this.isPropagationStopped=Tu,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=st(qn),$r=B({},qn,{view:0,detail:0}),Xf=st($r),Ml,Dl,Br,Wi=B({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(Ml=e.screenX-Br.screenX,Dl=e.screenY-Br.screenY):Dl=Ml=0,Br=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),Lu=st(Wi),Zf=B({},Wi,{dataTransfer:0}),eh=st(Zf),th=B({},$r,{relatedTarget:0}),$l=st(th),nh=B({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),rh=st(nh),ih=B({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oh=st(ih),lh=B({},qn,{data:0}),zu=st(lh),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uh[e])?!!t[e]:!1}function Bl(){return ch}var dh=B({},$r,{key:function(e){if(e.key){var t=ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=st(dh),fh=B({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=st(fh),hh=B({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),mh=st(hh),gh=B({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vh=st(gh),yh=B({},Wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=st(yh),wh=[9,13,27,32],Ul=x&&"CompositionEvent"in window,Ur=null;x&&"documentMode"in document&&(Ur=document.documentMode);var kh=x&&"TextEvent"in window&&!Ur,Au=x&&(!Ul||Ur&&8<Ur&&11>=Ur),Fu=" ",Ou=!1;function Mu(e,t){switch(e){case"keyup":return wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function Sh(e,t){switch(e){case"compositionend":return Du(t);case"keypress":return t.which!==32?null:(Ou=!0,Fu);case"textInput":return e=t.data,e===Fu&&Ou?null:e;default:return null}}function jh(e,t){if(Kn)return e==="compositionend"||!Ul&&Mu(e,t)?(e=_u(),Bi=Fl=cn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Au&&t.locale!=="ko"?null:t.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bh[e.type]:t==="textarea"}function Bu(e,t,n,i){au(i),t=Gi(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Hr=null,Wr=null;function Nh(e){oc(e,0)}function Vi(e){var t=Zn(e);if(jt(t))return e}function Ch(e,t){if(e==="change")return t}var Uu=!1;if(x){var Hl;if(x){var Wl="oninput"in document;if(!Wl){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),Wl=typeof Hu.oninput=="function"}Hl=Wl}else Hl=!1;Uu=Hl&&(!document.documentMode||9<document.documentMode)}function Wu(){Hr&&(Hr.detachEvent("onpropertychange",Vu),Wr=Hr=null)}function Vu(e){if(e.propertyName==="value"&&Vi(Wr)){var t=[];Bu(t,Wr,e,jl(e)),du(Nh,t)}}function Eh(e,t,n){e==="focusin"?(Wu(),Hr=t,Wr=n,Hr.attachEvent("onpropertychange",Vu)):e==="focusout"&&Wu()}function Ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Wr)}function Rh(e,t){if(e==="click")return Vi(t)}function _h(e,t){if(e==="input"||e==="change")return Vi(t)}function Th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Th;function Vr(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!g.call(t,o)||!Nt(e[o],t[o]))return!1}return!0}function Qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,t){var n=Qu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qu(n)}}function Ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(){for(var e=window,t=Pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pi(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lh(e){var t=Gu(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ku(n.ownerDocument.documentElement,n)){if(i!==null&&Vl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(i.start,o);i=i.end===void 0?s:Math.min(i.end,o),!e.extend&&s>i&&(o=i,i=s,s=o),o=qu(n,s);var p=qu(n,i);o&&p&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>i?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zh=x&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ql=null,Qr=null,ql=!1;function Yu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||Gn==null||Gn!==Pi(i)||(i=Gn,"selectionStart"in i&&Vl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qr&&Vr(Qr,i)||(Qr=i,i=Gi(Ql,"onSelect"),0<i.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Gn)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Kl={},Ju={};x&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function qi(e){if(Kl[e])return Kl[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ju)return Kl[e]=t[n];return e}var Xu=qi("animationend"),Zu=qi("animationiteration"),ec=qi("animationstart"),tc=qi("transitionend"),nc=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){nc.set(e,t),f(t,[e])}for(var Gl=0;Gl<rc.length;Gl++){var Yl=rc[Gl],Ih=Yl.toLowerCase(),Ah=Yl[0].toUpperCase()+Yl.slice(1);dn(Ih,"on"+Ah)}dn(Xu,"onAnimationEnd"),dn(Zu,"onAnimationIteration"),dn(ec,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(tc,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function ic(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,If(i,t,void 0,e),e.currentTarget=null}function oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var p=i.length-1;0<=p;p--){var h=i[p],v=h.instance,b=h.currentTarget;if(h=h.listener,v!==s&&o.isPropagationStopped())break e;ic(o,h,b),s=v}else for(p=0;p<i.length;p++){if(h=i[p],v=h.instance,b=h.currentTarget,h=h.listener,v!==s&&o.isPropagationStopped())break e;ic(o,h,b),s=v}}}if(Ti)throw e=El,Ti=!1,El=null,e}function ke(e,t){var n=t[ia];n===void 0&&(n=t[ia]=new Set);var i=e+"__bubble";n.has(i)||(lc(t,e,2,!1),n.add(i))}function Jl(e,t,n){var i=0;t&&(i|=4),lc(n,e,i,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[Ki]){e[Ki]=!0,c.forEach(function(n){n!=="selectionchange"&&(Fh.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,Jl("selectionchange",!1,t))}}function lc(e,t,n,i){switch(Ru(t)){case 1:var o=Yf;break;case 4:o=Jf;break;default:o=Il}n=o.bind(null,t,n,e),o=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xl(e,t,n,i,o){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var h=i.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(p===4)for(p=i.return;p!==null;){var v=p.tag;if((v===3||v===4)&&(v=p.stateNode.containerInfo,v===o||v.nodeType===8&&v.parentNode===o))return;p=p.return}for(;h!==null;){if(p=Pn(h),p===null)return;if(v=p.tag,v===5||v===6){i=s=p;continue e}h=h.parentNode}}i=i.return}du(function(){var b=s,T=jl(n),L=[];e:{var _=nc.get(e);if(_!==void 0){var U=Ol,W=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":U=ph;break;case"focusin":W="focus",U=$l;break;case"focusout":W="blur",U=$l;break;case"beforeblur":case"afterblur":U=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=mh;break;case Xu:case Zu:case ec:U=rh;break;case tc:U=vh;break;case"scroll":U=Xf;break;case"wheel":U=xh;break;case"copy":case"cut":case"paste":U=oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Iu}var V=(t&4)!==0,Te=!V&&e==="scroll",S=V?_!==null?_+"Capture":null:_;V=[];for(var y=b,j;y!==null;){j=y;var I=j.stateNode;if(j.tag===5&&I!==null&&(j=I,S!==null&&(I=_r(y,S),I!=null&&V.push(Gr(y,I,j)))),Te)break;y=y.return}0<V.length&&(_=new U(_,W,null,n,T),L.push({event:_,listeners:V}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&n!==Sl&&(W=n.relatedTarget||n.fromElement)&&(Pn(W)||W[Vt]))break e;if((U||_)&&(_=T.window===T?T:(_=T.ownerDocument)?_.defaultView||_.parentWindow:window,U?(W=n.relatedTarget||n.toElement,U=b,W=W?Pn(W):null,W!==null&&(Te=En(W),W!==Te||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=b),U!==W)){if(V=Lu,I="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(V=Iu,I="onPointerLeave",S="onPointerEnter",y="pointer"),Te=U==null?_:Zn(U),j=W==null?_:Zn(W),_=new V(I,y+"leave",U,n,T),_.target=Te,_.relatedTarget=j,I=null,Pn(T)===b&&(V=new V(S,y+"enter",W,n,T),V.target=j,V.relatedTarget=Te,I=V),Te=I,U&&W)t:{for(V=U,S=W,y=0,j=V;j;j=Jn(j))y++;for(j=0,I=S;I;I=Jn(I))j++;for(;0<y-j;)V=Jn(V),y--;for(;0<j-y;)S=Jn(S),j--;for(;y--;){if(V===S||S!==null&&V===S.alternate)break t;V=Jn(V),S=Jn(S)}V=null}else V=null;U!==null&&ac(L,_,U,V,!1),W!==null&&Te!==null&&ac(L,Te,W,V,!0)}}e:{if(_=b?Zn(b):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var Q=Ch;else if($u(_))if(Uu)Q=_h;else{Q=Ph;var X=Eh}else(U=_.nodeName)&&U.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(Q=Rh);if(Q&&(Q=Q(e,b))){Bu(L,Q,n,T);break e}X&&X(e,_,b),e==="focusout"&&(X=_._wrapperState)&&X.controlled&&_.type==="number"&&vl(_,"number",_.value)}switch(X=b?Zn(b):window,e){case"focusin":($u(X)||X.contentEditable==="true")&&(Gn=X,Ql=b,Qr=null);break;case"focusout":Qr=Ql=Gn=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,Yu(L,n,T);break;case"selectionchange":if(zh)break;case"keydown":case"keyup":Yu(L,n,T)}var Z;if(Ul)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Kn?Mu(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Au&&n.locale!=="ko"&&(Kn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Kn&&(Z=_u()):(cn=T,Fl="value"in cn?cn.value:cn.textContent,Kn=!0)),X=Gi(b,te),0<X.length&&(te=new zu(te,e,null,n,T),L.push({event:te,listeners:X}),Z?te.data=Z:(Z=Du(n),Z!==null&&(te.data=Z)))),(Z=kh?Sh(e,n):jh(e,n))&&(b=Gi(b,"onBeforeInput"),0<b.length&&(T=new zu("onBeforeInput","beforeinput",null,n,T),L.push({event:T,listeners:b}),T.data=Z))}oc(L,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=_r(e,n),s!=null&&i.unshift(Gr(e,s,o)),s=_r(e,t),s!=null&&i.push(Gr(e,s,o))),e=e.return}return i}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ac(e,t,n,i,o){for(var s=t._reactName,p=[];n!==null&&n!==i;){var h=n,v=h.alternate,b=h.stateNode;if(v!==null&&v===i)break;h.tag===5&&b!==null&&(h=b,o?(v=_r(n,s),v!=null&&p.unshift(Gr(n,v,h))):o||(v=_r(n,s),v!=null&&p.push(Gr(n,v,h)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Oh=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function sc(e){return(typeof e=="string"?e:""+e).replace(Oh,`
`).replace(Mh,"")}function Yi(e,t,n){if(t=sc(t),sc(e)!==t&&n)throw Error(a(425))}function Ji(){}var Zl=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,Dh=typeof clearTimeout=="function"?clearTimeout:void 0,uc=typeof Promise=="function"?Promise:void 0,$h=typeof queueMicrotask=="function"?queueMicrotask:typeof uc<"u"?function(e){return uc.resolve(null).then(e).catch(Bh)}:na;function Bh(e){setTimeout(function(){throw e})}function ra(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),Dr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Dr(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Xn,Yr="__reactProps$"+Xn,Vt="__reactContainer$"+Xn,ia="__reactEvents$"+Xn,Uh="__reactListeners$"+Xn,Hh="__reactHandles$"+Xn;function Pn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cc(e);e!==null;){if(n=e[Mt])return n;e=cc(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[Mt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Xi(e){return e[Yr]||null}var oa=[],er=-1;function fn(e){return{current:e}}function Se(e){0>er||(e.current=oa[er],oa[er]=null,er--)}function ye(e,t){er++,oa[er]=e.current,e.current=t}var hn={},Qe=fn(hn),tt=fn(!1),Rn=hn;function tr(e,t){var n=e.type.contextTypes;if(!n)return hn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function nt(e){return e=e.childContextTypes,e!=null}function Zi(){Se(tt),Se(Qe)}function dc(e,t,n){if(Qe.current!==hn)throw Error(a(168));ye(Qe,t),ye(tt,n)}function pc(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(a(108,he(e)||"Unknown",o));return B({},n,i)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Rn=Qe.current,ye(Qe,e),ye(tt,tt.current),!0}function fc(e,t,n){var i=e.stateNode;if(!i)throw Error(a(169));n?(e=pc(e,t,Rn),i.__reactInternalMemoizedMergedChildContext=e,Se(tt),Se(Qe),ye(Qe,e)):Se(tt),ye(tt,n)}var Qt=null,to=!1,la=!1;function hc(e){Qt===null?Qt=[e]:Qt.push(e)}function Wh(e){to=!0,hc(e)}function mn(){if(!la&&Qt!==null){la=!0;var e=0,t=ge;try{var n=Qt;for(ge=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Qt=null,to=!1}catch(o){throw Qt!==null&&(Qt=Qt.slice(e+1)),gu(Pl,mn),o}finally{ge=t,la=!1}}return null}var nr=[],rr=0,no=null,ro=0,gt=[],vt=0,_n=null,qt=1,Kt="";function Tn(e,t){nr[rr++]=ro,nr[rr++]=no,no=e,ro=t}function mc(e,t,n){gt[vt++]=qt,gt[vt++]=Kt,gt[vt++]=_n,_n=e;var i=qt;e=Kt;var o=32-bt(i)-1;i&=~(1<<o),n+=1;var s=32-bt(t)+o;if(30<s){var p=o-o%5;s=(i&(1<<p)-1).toString(32),i>>=p,o-=p,qt=1<<32-bt(t)+o|n<<o|i,Kt=s+e}else qt=1<<s|n<<o|i,Kt=e}function aa(e){e.return!==null&&(Tn(e,1),mc(e,1,0))}function sa(e){for(;e===no;)no=nr[--rr],nr[rr]=null,ro=nr[--rr],nr[rr]=null;for(;e===_n;)_n=gt[--vt],gt[vt]=null,Kt=gt[--vt],gt[vt]=null,qt=gt[--vt],gt[vt]=null}var ut=null,ct=null,Ne=!1,Ct=null;function gc(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ct=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(Ne){var t=ct;if(t){var n=t;if(!vc(e,t)){if(ua(e))throw Error(a(418));t=pn(n.nextSibling);var i=ut;t&&vc(e,t)?gc(i,n):(e.flags=e.flags&-4097|2,Ne=!1,ut=e)}}else{if(ua(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ne=!1,ut=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function io(e){if(e!==ut)return!1;if(!Ne)return yc(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=ct)){if(ua(e))throw xc(),Error(a(418));for(;t;)gc(e,t),t=pn(t.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?pn(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=ct;e;)e=pn(e.nextSibling)}function ir(){ct=ut=null,Ne=!1}function da(e){Ct===null?Ct=[e]:Ct.push(e)}var Vh=J.ReactCurrentBatchConfig;function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var i=n.stateNode}if(!i)throw Error(a(147,e));var o=i,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(p){var h=o.refs;p===null?delete h[s]:h[s]=p},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wc(e){var t=e._init;return t(e._payload)}function kc(e){function t(S,y){if(e){var j=S.deletions;j===null?(S.deletions=[y],S.flags|=16):j.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function i(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function o(S,y){return S=jn(S,y),S.index=0,S.sibling=null,S}function s(S,y,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<y?(S.flags|=2,y):j):(S.flags|=2,y)):(S.flags|=1048576,y)}function p(S){return e&&S.alternate===null&&(S.flags|=2),S}function h(S,y,j,I){return y===null||y.tag!==6?(y=ns(j,S.mode,I),y.return=S,y):(y=o(y,j),y.return=S,y)}function v(S,y,j,I){var Q=j.type;return Q===Y?T(S,y,j.props.children,I,j.key):y!==null&&(y.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ve&&wc(Q)===y.type)?(I=o(y,j.props),I.ref=Xr(S,y,j),I.return=S,I):(I=_o(j.type,j.key,j.props,null,S.mode,I),I.ref=Xr(S,y,j),I.return=S,I)}function b(S,y,j,I){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=rs(j,S.mode,I),y.return=S,y):(y=o(y,j.children||[]),y.return=S,y)}function T(S,y,j,I,Q){return y===null||y.tag!==7?(y=Dn(j,S.mode,I,Q),y.return=S,y):(y=o(y,j),y.return=S,y)}function L(S,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ns(""+y,S.mode,j),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ne:return j=_o(y.type,y.key,y.props,null,S.mode,j),j.ref=Xr(S,null,y),j.return=S,j;case ee:return y=rs(y,S.mode,j),y.return=S,y;case Ve:var I=y._init;return L(S,I(y._payload),j)}if(Er(y)||K(y))return y=Dn(y,S.mode,j,null),y.return=S,y;oo(S,y)}return null}function _(S,y,j,I){var Q=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Q!==null?null:h(S,y,""+j,I);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:return j.key===Q?v(S,y,j,I):null;case ee:return j.key===Q?b(S,y,j,I):null;case Ve:return Q=j._init,_(S,y,Q(j._payload),I)}if(Er(j)||K(j))return Q!==null?null:T(S,y,j,I,null);oo(S,j)}return null}function U(S,y,j,I,Q){if(typeof I=="string"&&I!==""||typeof I=="number")return S=S.get(j)||null,h(y,S,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ne:return S=S.get(I.key===null?j:I.key)||null,v(y,S,I,Q);case ee:return S=S.get(I.key===null?j:I.key)||null,b(y,S,I,Q);case Ve:var X=I._init;return U(S,y,j,X(I._payload),Q)}if(Er(I)||K(I))return S=S.get(j)||null,T(y,S,I,Q,null);oo(y,I)}return null}function W(S,y,j,I){for(var Q=null,X=null,Z=y,te=y=0,De=null;Z!==null&&te<j.length;te++){Z.index>te?(De=Z,Z=null):De=Z.sibling;var fe=_(S,Z,j[te],I);if(fe===null){Z===null&&(Z=De);break}e&&Z&&fe.alternate===null&&t(S,Z),y=s(fe,y,te),X===null?Q=fe:X.sibling=fe,X=fe,Z=De}if(te===j.length)return n(S,Z),Ne&&Tn(S,te),Q;if(Z===null){for(;te<j.length;te++)Z=L(S,j[te],I),Z!==null&&(y=s(Z,y,te),X===null?Q=Z:X.sibling=Z,X=Z);return Ne&&Tn(S,te),Q}for(Z=i(S,Z);te<j.length;te++)De=U(Z,S,te,j[te],I),De!==null&&(e&&De.alternate!==null&&Z.delete(De.key===null?te:De.key),y=s(De,y,te),X===null?Q=De:X.sibling=De,X=De);return e&&Z.forEach(function(bn){return t(S,bn)}),Ne&&Tn(S,te),Q}function V(S,y,j,I){var Q=K(j);if(typeof Q!="function")throw Error(a(150));if(j=Q.call(j),j==null)throw Error(a(151));for(var X=Q=null,Z=y,te=y=0,De=null,fe=j.next();Z!==null&&!fe.done;te++,fe=j.next()){Z.index>te?(De=Z,Z=null):De=Z.sibling;var bn=_(S,Z,fe.value,I);if(bn===null){Z===null&&(Z=De);break}e&&Z&&bn.alternate===null&&t(S,Z),y=s(bn,y,te),X===null?Q=bn:X.sibling=bn,X=bn,Z=De}if(fe.done)return n(S,Z),Ne&&Tn(S,te),Q;if(Z===null){for(;!fe.done;te++,fe=j.next())fe=L(S,fe.value,I),fe!==null&&(y=s(fe,y,te),X===null?Q=fe:X.sibling=fe,X=fe);return Ne&&Tn(S,te),Q}for(Z=i(S,Z);!fe.done;te++,fe=j.next())fe=U(Z,S,te,fe.value,I),fe!==null&&(e&&fe.alternate!==null&&Z.delete(fe.key===null?te:fe.key),y=s(fe,y,te),X===null?Q=fe:X.sibling=fe,X=fe);return e&&Z.forEach(function(bm){return t(S,bm)}),Ne&&Tn(S,te),Q}function Te(S,y,j,I){if(typeof j=="object"&&j!==null&&j.type===Y&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ne:e:{for(var Q=j.key,X=y;X!==null;){if(X.key===Q){if(Q=j.type,Q===Y){if(X.tag===7){n(S,X.sibling),y=o(X,j.props.children),y.return=S,S=y;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ve&&wc(Q)===X.type){n(S,X.sibling),y=o(X,j.props),y.ref=Xr(S,X,j),y.return=S,S=y;break e}n(S,X);break}else t(S,X);X=X.sibling}j.type===Y?(y=Dn(j.props.children,S.mode,I,j.key),y.return=S,S=y):(I=_o(j.type,j.key,j.props,null,S.mode,I),I.ref=Xr(S,y,j),I.return=S,S=I)}return p(S);case ee:e:{for(X=j.key;y!==null;){if(y.key===X)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){n(S,y.sibling),y=o(y,j.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else t(S,y);y=y.sibling}y=rs(j,S.mode,I),y.return=S,S=y}return p(S);case Ve:return X=j._init,Te(S,y,X(j._payload),I)}if(Er(j))return W(S,y,j,I);if(K(j))return V(S,y,j,I);oo(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,y!==null&&y.tag===6?(n(S,y.sibling),y=o(y,j),y.return=S,S=y):(n(S,y),y=ns(j,S.mode,I),y.return=S,S=y),p(S)):n(S,y)}return Te}var or=kc(!0),Sc=kc(!1),lo=fn(null),ao=null,lr=null,pa=null;function fa(){pa=lr=ao=null}function ha(e){var t=lo.current;Se(lo),e._currentValue=t}function ma(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){ao=e,pa=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(ao===null)throw Error(a(308));lr=e,ao.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Ln=null;function ga(e){Ln===null?Ln=[e]:Ln.push(e)}function jc(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,ga(t)):(n.next=o.next,o.next=n),t.interleaved=n,Gt(e,i)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Gt(e,n)}return o=i.interleaved,o===null?(t.next=t,ga(i)):(t.next=o.next,o.next=t),i.interleaved=t,Gt(e,n)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Tl(e,n)}}function Nc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=p:s=s.next=p,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,i){var o=e.updateQueue;gn=!1;var s=o.firstBaseUpdate,p=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var v=h,b=v.next;v.next=null,p===null?s=b:p.next=b,p=v;var T=e.alternate;T!==null&&(T=T.updateQueue,h=T.lastBaseUpdate,h!==p&&(h===null?T.firstBaseUpdate=b:h.next=b,T.lastBaseUpdate=v))}if(s!==null){var L=o.baseState;p=0,T=b=v=null,h=s;do{var _=h.lane,U=h.eventTime;if((i&_)===_){T!==null&&(T=T.next={eventTime:U,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var W=e,V=h;switch(_=t,U=n,V.tag){case 1:if(W=V.payload,typeof W=="function"){L=W.call(U,L,_);break e}L=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=V.payload,_=typeof W=="function"?W.call(U,L,_):W,_==null)break e;L=B({},L,_);break e;case 2:gn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[h]:_.push(h))}else U={eventTime:U,lane:_,tag:h.tag,payload:h.payload,callback:h.callback,next:null},T===null?(b=T=U,v=L):T=T.next=U,p|=_;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;_=h,h=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);if(T===null&&(v=L),o.baseState=v,o.firstBaseUpdate=b,o.lastBaseUpdate=T,t=o.shared.interleaved,t!==null){o=t;do p|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);An|=p,e.lanes=p,e.memoizedState=L}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(a(191,o));o.call(i)}}}var Zr={},Dt=fn(Zr),ei=fn(Zr),ti=fn(Zr);function zn(e){if(e===Zr)throw Error(a(174));return e}function ya(e,t){switch(ye(ti,t),ye(ei,e),ye(Dt,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Se(Dt),ye(Dt,t)}function sr(){Se(Dt),Se(ei),Se(ti)}function Ec(e){zn(ti.current);var t=zn(Dt.current),n=xl(t,e.type);t!==n&&(ye(ei,e),ye(Dt,n))}function xa(e){ei.current===e&&(Se(Dt),Se(ei))}var Ee=fn(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function ka(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var po=J.ReactCurrentDispatcher,Sa=J.ReactCurrentBatchConfig,In=0,Pe=null,Ie=null,Oe=null,fo=!1,ni=!1,ri=0,Qh=0;function qe(){throw Error(a(321))}function ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function ba(e,t,n,i,o,s){if(In=s,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?Yh:Jh,e=n(i,o),ni){s=0;do{if(ni=!1,ri=0,25<=s)throw Error(a(301));s+=1,Oe=Ie=null,t.updateQueue=null,po.current=Xh,e=n(i,o)}while(ni)}if(po.current=go,t=Ie!==null&&Ie.next!==null,In=0,Oe=Ie=Pe=null,fo=!1,t)throw Error(a(300));return e}function Na(){var e=ri!==0;return ri=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Pe.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function xt(){if(Ie===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Oe===null?Pe.memoizedState:Oe.next;if(t!==null)Oe=t,Ie=e;else{if(e===null)throw Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Oe===null?Pe.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ii(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=xt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var i=Ie,o=i.baseQueue,s=n.pending;if(s!==null){if(o!==null){var p=o.next;o.next=s.next,s.next=p}i.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,i=i.baseState;var h=p=null,v=null,b=s;do{var T=b.lane;if((In&T)===T)v!==null&&(v=v.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),i=b.hasEagerState?b.eagerState:e(i,b.action);else{var L={lane:T,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};v===null?(h=v=L,p=i):v=v.next=L,Pe.lanes|=T,An|=T}b=b.next}while(b!==null&&b!==s);v===null?p=i:v.next=h,Nt(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseState=p,t.baseQueue=v,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do s=o.lane,Pe.lanes|=s,An|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=xt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var p=o=o.next;do s=e(s,p.action),p=p.next;while(p!==o);Nt(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Pc(){}function Rc(e,t){var n=Pe,i=xt(),o=t(),s=!Nt(i.memoizedState,o);if(s&&(i.memoizedState=o,rt=!0),i=i.queue,Pa(Lc.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,oi(9,Tc.bind(null,n,i,o,t),void 0,null),Me===null)throw Error(a(349));(In&30)!==0||_c(n,t,o)}return o}function _c(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tc(e,t,n,i){t.value=n,t.getSnapshot=i,zc(t)&&Ic(e)}function Lc(e,t,n){return n(function(){zc(t)&&Ic(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function Ic(e){var t=Gt(e,1);t!==null&&_t(t,e,1,-1)}function Ac(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=Gh.bind(null,Pe,e),[t.memoizedState,e]}function oi(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Fc(){return xt().memoizedState}function ho(e,t,n,i){var o=$t();Pe.flags|=e,o.memoizedState=oi(1|t,n,void 0,i===void 0?null:i)}function mo(e,t,n,i){var o=xt();i=i===void 0?null:i;var s=void 0;if(Ie!==null){var p=Ie.memoizedState;if(s=p.destroy,i!==null&&ja(i,p.deps)){o.memoizedState=oi(t,n,s,i);return}}Pe.flags|=e,o.memoizedState=oi(1|t,n,s,i)}function Oc(e,t){return ho(8390656,8,e,t)}function Pa(e,t){return mo(2048,8,e,t)}function Mc(e,t){return mo(4,2,e,t)}function Dc(e,t){return mo(4,4,e,t)}function $c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bc(e,t,n){return n=n!=null?n.concat([e]):null,mo(4,4,$c.bind(null,t,e),n)}function Ra(){}function Uc(e,t){var n=xt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ja(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Hc(e,t){var n=xt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ja(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Wc(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(Nt(n,t)||(n=wu(),Pe.lanes|=n,An|=n,e.baseState=!0),t)}function qh(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var i=Sa.transition;Sa.transition={};try{e(!1),t()}finally{ge=n,Sa.transition=i}}function Vc(){return xt().memoizedState}function Kh(e,t,n){var i=kn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qc(e))qc(t,n);else if(n=jc(e,t,n,i),n!==null){var o=Ze();_t(n,e,i,o),Kc(n,t,i)}}function Gh(e,t,n){var i=kn(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))qc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var p=t.lastRenderedState,h=s(p,n);if(o.hasEagerState=!0,o.eagerState=h,Nt(h,p)){var v=t.interleaved;v===null?(o.next=o,ga(t)):(o.next=v.next,v.next=o),t.interleaved=o;return}}catch{}finally{}n=jc(e,t,o,i),n!==null&&(o=Ze(),_t(n,e,i,o),Kc(n,t,i))}}function Qc(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function qc(e,t){ni=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kc(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Tl(e,n)}}var go={readContext:yt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Yh={readContext:yt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ho(4194308,4,$c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=$t();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Kh.bind(null,Pe,e),[i.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:Ra,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=qh.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Pe,o=$t();if(Ne){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Me===null)throw Error(a(349));(In&30)!==0||_c(i,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Oc(Lc.bind(null,i,s,e),[e]),i.flags|=2048,oi(9,Tc.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=$t(),t=Me.identifierPrefix;if(Ne){var n=Kt,i=qt;n=(i&~(1<<32-bt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jh={readContext:yt,useCallback:Uc,useContext:yt,useEffect:Pa,useImperativeHandle:Bc,useInsertionEffect:Mc,useLayoutEffect:Dc,useMemo:Hc,useReducer:Ca,useRef:Fc,useState:function(){return Ca(ii)},useDebugValue:Ra,useDeferredValue:function(e){var t=xt();return Wc(t,Ie.memoizedState,e)},useTransition:function(){var e=Ca(ii)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:Rc,useId:Vc,unstable_isNewReconciler:!1},Xh={readContext:yt,useCallback:Uc,useContext:yt,useEffect:Pa,useImperativeHandle:Bc,useInsertionEffect:Mc,useLayoutEffect:Dc,useMemo:Hc,useReducer:Ea,useRef:Fc,useState:function(){return Ea(ii)},useDebugValue:Ra,useDeferredValue:function(e){var t=xt();return Ie===null?t.memoizedState=e:Wc(t,Ie.memoizedState,e)},useTransition:function(){var e=Ea(ii)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:Rc,useId:Vc,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _a(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vo={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ze(),o=kn(e),s=Yt(i,o);s.payload=t,n!=null&&(s.callback=n),t=vn(e,s,o),t!==null&&(_t(t,e,o,i),so(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ze(),o=kn(e),s=Yt(i,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vn(e,s,o),t!==null&&(_t(t,e,o,i),so(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),i=kn(e),o=Yt(n,i);o.tag=2,t!=null&&(o.callback=t),t=vn(e,o,i),t!==null&&(_t(t,e,i,n),so(t,e,i))}};function Gc(e,t,n,i,o,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,p):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,i)||!Vr(o,s):!0}function Yc(e,t,n){var i=!1,o=hn,s=t.contextType;return typeof s=="object"&&s!==null?s=yt(s):(o=nt(t)?Rn:Qe.current,i=t.contextTypes,s=(i=i!=null)?tr(e,o):hn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vo,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Jc(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&vo.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},va(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=yt(s):(s=nt(t)?Rn:Qe.current,o.context=tr(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(_a(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vo.enqueueReplaceState(o,o.state,null),uo(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",i=t;do n+=se(i),i=i.return;while(i);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function La(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zh=typeof WeakMap=="function"?WeakMap:Map;function Xc(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){bo||(bo=!0,Ka=i),za(e,t)},n}function Zc(e,t,n){n=Yt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){za(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof i!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),n}function ed(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Zh;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=fm.bind(null,e,t,n),t.then(e,e))}function td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,n,i,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var em=J.ReactCurrentOwner,rt=!1;function Xe(e,t,n,i){t.child=e===null?Sc(t,null,n,i):or(t,e.child,n,i)}function rd(e,t,n,i,o){n=n.render;var s=t.ref;return ar(t,o),i=ba(e,t,n,i,s,o),n=Na(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(Ne&&n&&aa(t),t.flags|=1,Xe(e,t,i,o),t.child)}function id(e,t,n,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!ts(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,od(e,t,s,i,o)):(e=_o(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&o)===0){var p=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(p,i)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=jn(s,i),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,i,o){if(e!==null){var s=e.memoizedProps;if(Vr(s,i)&&e.ref===t.ref)if(rt=!1,t.pendingProps=i=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return Ia(e,t,n,i,o)}function ld(e,t,n){var i=t.pendingProps,o=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(dr,dt),dt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(dr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ye(dr,dt),dt|=i}else s!==null?(i=s.baseLanes|n,t.memoizedState=null):i=n,ye(dr,dt),dt|=i;return Xe(e,t,o,n),t.child}function ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ia(e,t,n,i,o){var s=nt(n)?Rn:Qe.current;return s=tr(t,s),ar(t,o),n=ba(e,t,n,i,s,o),i=Na(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(Ne&&i&&aa(t),t.flags|=1,Xe(e,t,n,o),t.child)}function sd(e,t,n,i,o){if(nt(n)){var s=!0;eo(t)}else s=!1;if(ar(t,o),t.stateNode===null)xo(e,t),Yc(t,n,i),Ta(t,n,i,o),i=!0;else if(e===null){var p=t.stateNode,h=t.memoizedProps;p.props=h;var v=p.context,b=n.contextType;typeof b=="object"&&b!==null?b=yt(b):(b=nt(n)?Rn:Qe.current,b=tr(t,b));var T=n.getDerivedStateFromProps,L=typeof T=="function"||typeof p.getSnapshotBeforeUpdate=="function";L||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(h!==i||v!==b)&&Jc(t,p,i,b),gn=!1;var _=t.memoizedState;p.state=_,uo(t,i,p,o),v=t.memoizedState,h!==i||_!==v||tt.current||gn?(typeof T=="function"&&(_a(t,n,T,i),v=t.memoizedState),(h=gn||Gc(t,n,h,i,_,v,b))?(L||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=v),p.props=i,p.state=v,p.context=b,i=h):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{p=t.stateNode,bc(e,t),h=t.memoizedProps,b=t.type===t.elementType?h:Et(t.type,h),p.props=b,L=t.pendingProps,_=p.context,v=n.contextType,typeof v=="object"&&v!==null?v=yt(v):(v=nt(n)?Rn:Qe.current,v=tr(t,v));var U=n.getDerivedStateFromProps;(T=typeof U=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(h!==L||_!==v)&&Jc(t,p,i,v),gn=!1,_=t.memoizedState,p.state=_,uo(t,i,p,o);var W=t.memoizedState;h!==L||_!==W||tt.current||gn?(typeof U=="function"&&(_a(t,n,U,i),W=t.memoizedState),(b=gn||Gc(t,n,b,i,_,W,v)||!1)?(T||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(i,W,v),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(i,W,v)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=W),p.props=i,p.state=W,p.context=v,i=b):(typeof p.componentDidUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),i=!1)}return Aa(e,t,n,i,s,o)}function Aa(e,t,n,i,o,s){ad(e,t);var p=(t.flags&128)!==0;if(!i&&!p)return o&&fc(t,n,!1),Jt(e,t,s);i=t.stateNode,em.current=t;var h=p&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&p?(t.child=or(t,e.child,null,s),t.child=or(t,null,h,s)):Xe(e,t,h,s),t.memoizedState=i.state,o&&fc(t,n,!0),t.child}function ud(e){var t=e.stateNode;t.pendingContext?dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dc(e,t.context,!1),ya(e,t.containerInfo)}function cd(e,t,n,i,o){return ir(),da(o),t.flags|=256,Xe(e,t,n,i),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function dd(e,t,n){var i=t.pendingProps,o=Ee.current,s=!1,p=(t.flags&128)!==0,h;if((h=p)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ye(Ee,o&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=i.children,e=i.fallback,s?(i=t.mode,s=t.child,p={mode:"hidden",children:p},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=p):s=To(p,i,0,null),e=Dn(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Oa(n),t.memoizedState=Fa,e):Ma(t,p));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return tm(e,t,p,i,h,o,n);if(s){s=i.fallback,p=t.mode,o=e.child,h=o.sibling;var v={mode:"hidden",children:i.children};return(p&1)===0&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=v,t.deletions=null):(i=jn(o,v),i.subtreeFlags=o.subtreeFlags&14680064),h!==null?s=jn(h,s):(s=Dn(s,p,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,p=e.child.memoizedState,p=p===null?Oa(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},s.memoizedState=p,s.childLanes=e.childLanes&~n,t.memoizedState=Fa,i}return s=e.child,e=s.sibling,i=jn(s,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ma(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,i){return i!==null&&da(i),or(t,e.child,null,n),e=Ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tm(e,t,n,i,o,s,p){if(n)return t.flags&256?(t.flags&=-257,i=La(Error(a(422))),yo(e,t,p,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=i.fallback,o=t.mode,i=To({mode:"visible",children:i.children},o,0,null),s=Dn(s,o,p,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,(t.mode&1)!==0&&or(t,e.child,null,p),t.child.memoizedState=Oa(p),t.memoizedState=Fa,s);if((t.mode&1)===0)return yo(e,t,p,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var h=i.dgst;return i=h,s=Error(a(419)),i=La(s,i,void 0),yo(e,t,p,i)}if(h=(p&e.childLanes)!==0,rt||h){if(i=Me,i!==null){switch(p&-p){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(i.suspendedLanes|p))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Gt(e,o),_t(i,e,o,-1))}return es(),i=La(Error(a(421))),yo(e,t,p,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=hm.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,ct=pn(o.nextSibling),ut=t,Ne=!0,Ct=null,e!==null&&(gt[vt++]=qt,gt[vt++]=Kt,gt[vt++]=_n,qt=e.id,Kt=e.overflow,_n=t),t=Ma(t,i.children),t.flags|=4096,t)}function pd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ma(e.return,t,n)}function Da(e,t,n,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=o)}function fd(e,t,n){var i=t.pendingProps,o=i.revealOrder,s=i.tail;if(Xe(e,t,i.children,n),i=Ee.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,n,t);else if(e.tag===19)pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ye(Ee,i),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Da(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&co(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Da(t,!0,n,null,s);break;case"together":Da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nm(e,t,n){switch(t.tag){case 3:ud(t),ir();break;case 5:Ec(t);break;case 1:nt(t.type)&&eo(t);break;case 4:ya(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;ye(lo,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ye(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?dd(e,t,n):(ye(Ee,Ee.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ye(Ee,Ee.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return fd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ye(Ee,Ee.current),i)break;return null;case 22:case 23:return t.lanes=0,ld(e,t,n)}return Jt(e,t,n)}var hd,$a,md,gd;hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},$a=function(){},md=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,zn(Dt.current);var s=null;switch(n){case"input":o=ml(e,o),i=ml(e,i),s=[];break;case"select":o=B({},o,{value:void 0}),i=B({},i,{value:void 0}),s=[];break;case"textarea":o=yl(e,o),i=yl(e,i),s=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ji)}wl(n,i);var p;n=null;for(b in o)if(!i.hasOwnProperty(b)&&o.hasOwnProperty(b)&&o[b]!=null)if(b==="style"){var h=o[b];for(p in h)h.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(d.hasOwnProperty(b)?s||(s=[]):(s=s||[]).push(b,null));for(b in i){var v=i[b];if(h=o!=null?o[b]:void 0,i.hasOwnProperty(b)&&v!==h&&(v!=null||h!=null))if(b==="style")if(h){for(p in h)!h.hasOwnProperty(p)||v&&v.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in v)v.hasOwnProperty(p)&&h[p]!==v[p]&&(n||(n={}),n[p]=v[p])}else n||(s||(s=[]),s.push(b,n)),n=v;else b==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,h=h?h.__html:void 0,v!=null&&h!==v&&(s=s||[]).push(b,v)):b==="children"?typeof v!="string"&&typeof v!="number"||(s=s||[]).push(b,""+v):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(d.hasOwnProperty(b)?(v!=null&&b==="onScroll"&&ke("scroll",e),s||h===v||(s=[])):(s=s||[]).push(b,v))}n&&(s=s||[]).push("style",n);var b=s;(t.updateQueue=b)&&(t.flags|=4)}},gd=function(e,t,n,i){n!==i&&(t.flags|=4)};function li(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function rm(e,t,n){var i=t.pendingProps;switch(sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return nt(t.type)&&Zi(),Ke(t),null;case 3:return i=t.stateNode,sr(),Se(tt),Se(Qe),ka(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ja(Ct),Ct=null))),$a(e,t),Ke(t),null;case 5:xa(t);var o=zn(ti.current);if(n=t.type,e!==null&&t.stateNode!=null)md(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(a(166));return Ke(t),null}if(e=zn(Dt.current),io(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Mt]=t,i[Yr]=s,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",i),ke("close",i);break;case"iframe":case"object":case"embed":ke("load",i);break;case"video":case"audio":for(o=0;o<qr.length;o++)ke(qr[o],i);break;case"source":ke("error",i);break;case"img":case"image":case"link":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"input":Ys(i,s),ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ke("invalid",i);break;case"textarea":Zs(i,s),ke("invalid",i)}wl(n,s),o=null;for(var p in s)if(s.hasOwnProperty(p)){var h=s[p];p==="children"?typeof h=="string"?i.textContent!==h&&(s.suppressHydrationWarning!==!0&&Yi(i.textContent,h,e),o=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&Yi(i.textContent,h,e),o=["children",""+h]):d.hasOwnProperty(p)&&h!=null&&p==="onScroll"&&ke("scroll",i)}switch(n){case"input":Wt(i),Xs(i,s,!0);break;case"textarea":Wt(i),tu(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ji)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{p=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=p.createElement(n,{is:i.is}):(e=p.createElement(n),n==="select"&&(p=e,i.multiple?p.multiple=!0:i.size&&(p.size=i.size))):e=p.createElementNS(e,n),e[Mt]=t,e[Yr]=i,hd(e,t,!1,!1),t.stateNode=e;e:{switch(p=kl(n,i),n){case"dialog":ke("cancel",e),ke("close",e),o=i;break;case"iframe":case"object":case"embed":ke("load",e),o=i;break;case"video":case"audio":for(o=0;o<qr.length;o++)ke(qr[o],e);o=i;break;case"source":ke("error",e),o=i;break;case"img":case"image":case"link":ke("error",e),ke("load",e),o=i;break;case"details":ke("toggle",e),o=i;break;case"input":Ys(e,i),o=ml(e,i),ke("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=B({},i,{value:void 0}),ke("invalid",e);break;case"textarea":Zs(e,i),o=yl(e,i),ke("invalid",e);break;default:o=i}wl(n,o),h=o;for(s in h)if(h.hasOwnProperty(s)){var v=h[s];s==="style"?ou(e,v):s==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&ru(e,v)):s==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&Pr(e,v):typeof v=="number"&&Pr(e,""+v):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(d.hasOwnProperty(s)?v!=null&&s==="onScroll"&&ke("scroll",e):v!=null&&F(e,s,v,p))}switch(n){case"input":Wt(e),Xs(e,i,!1);break;case"textarea":Wt(e),tu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ue(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?Hn(e,!!i.multiple,s,!1):i.defaultValue!=null&&Hn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ji)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)gd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(a(166));if(n=zn(ti.current),zn(Dt.current),io(t)){if(i=t.stateNode,n=t.memoizedProps,i[Mt]=t,(s=i.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Yi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(i.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mt]=t,t.stateNode=i}return Ke(t),null;case 13:if(Se(Ee),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)xc(),ir(),t.flags|=98560,s=!1;else if(s=io(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Mt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),s=!1}else Ct!==null&&(Ja(Ct),Ct=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Ae===0&&(Ae=3):es())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return sr(),$a(e,t),e===null&&Kr(t.stateNode.containerInfo),Ke(t),null;case 10:return ha(t.type._context),Ke(t),null;case 17:return nt(t.type)&&Zi(),Ke(t),null;case 19:if(Se(Ee),s=t.memoizedState,s===null)return Ke(t),null;if(i=(t.flags&128)!==0,p=s.rendering,p===null)if(i)li(s,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=co(e),p!==null){for(t.flags|=128,li(s,!1),i=p.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,p=s.alternate,p===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=p.childLanes,s.lanes=p.lanes,s.child=p.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=p.memoizedProps,s.memoizedState=p.memoizedState,s.updateQueue=p.updateQueue,s.type=p.type,e=p.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Ee,Ee.current&1|2),t.child}e=e.sibling}s.tail!==null&&_e()>pr&&(t.flags|=128,i=!0,li(s,!1),t.lanes=4194304)}else{if(!i)if(e=co(p),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!p.alternate&&!Ne)return Ke(t),null}else 2*_e()-s.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,i=!0,li(s,!1),t.lanes=4194304);s.isBackwards?(p.sibling=t.child,t.child=p):(n=s.last,n!==null?n.sibling=p:t.child=p,s.last=p)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_e(),t.sibling=null,n=Ee.current,ye(Ee,i?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return Za(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function im(e,t){switch(sa(t),t.tag){case 1:return nt(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),Se(tt),Se(Qe),ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(Se(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ee),null;case 4:return sr(),null;case 10:return ha(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var wo=!1,Ge=!1,om=typeof WeakSet=="function"?WeakSet:Set,H=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Re(e,t,i)}else n.current=null}function Ba(e,t,n){try{n()}catch(i){Re(e,t,i)}}var vd=!1;function lm(e,t){if(Zl=Di,e=Gu(),Vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var p=0,h=-1,v=-1,b=0,T=0,L=e,_=null;t:for(;;){for(var U;L!==n||o!==0&&L.nodeType!==3||(h=p+o),L!==s||i!==0&&L.nodeType!==3||(v=p+i),L.nodeType===3&&(p+=L.nodeValue.length),(U=L.firstChild)!==null;)_=L,L=U;for(;;){if(L===e)break t;if(_===n&&++b===o&&(h=p),_===s&&++T===i&&(v=p),(U=L.nextSibling)!==null)break;L=_,_=L.parentNode}L=U}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},Di=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var W=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var V=W.memoizedProps,Te=W.memoizedState,S=t.stateNode,y=S.getSnapshotBeforeUpdate(t.elementType===t.type?V:Et(t.type,V),Te);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(I){Re(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return W=vd,vd=!1,W}function ai(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Ba(t,n,s)}o=o.next}while(o!==i)}}function ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yd(e){var t=e.alternate;t!==null&&(e.alternate=null,yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Yr],delete t[ia],delete t[Uh],delete t[Hh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xd(e){return e.tag===5||e.tag===3||e.tag===4}function wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji));else if(i!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Wa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var Ue=null,Pt=!1;function yn(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:Ge||cr(n,t);case 6:var i=Ue,o=Pt;Ue=null,yn(e,t,n),Ue=i,Pt=o,Ue!==null&&(Pt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Pt?(e=Ue,n=n.stateNode,e.nodeType===8?ra(e.parentNode,n):e.nodeType===1&&ra(e,n),Dr(e)):ra(Ue,n.stateNode));break;case 4:i=Ue,o=Pt,Ue=n.stateNode.containerInfo,Pt=!0,yn(e,t,n),Ue=i,Pt=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var s=o,p=s.destroy;s=s.tag,p!==void 0&&((s&2)!==0||(s&4)!==0)&&Ba(n,t,p),o=o.next}while(o!==i)}yn(e,t,n);break;case 1:if(!Ge&&(cr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(h){Re(n,t,h)}yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:n.mode&1?(Ge=(i=Ge)||n.memoizedState!==null,yn(e,t,n),Ge=i):yn(e,t,n);break;default:yn(e,t,n)}}function Sd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new om),t.forEach(function(i){var o=mm.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var s=e,p=t,h=p;e:for(;h!==null;){switch(h.tag){case 5:Ue=h.stateNode,Pt=!1;break e;case 3:Ue=h.stateNode.containerInfo,Pt=!0;break e;case 4:Ue=h.stateNode.containerInfo,Pt=!0;break e}h=h.return}if(Ue===null)throw Error(a(160));kd(s,p,o),Ue=null,Pt=!1;var v=o.alternate;v!==null&&(v.return=null),o.return=null}catch(b){Re(o,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jd(t,e),t=t.sibling}function jd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Bt(e),i&4){try{ai(3,e,e.return),ko(3,e)}catch(V){Re(e,e.return,V)}try{ai(5,e,e.return)}catch(V){Re(e,e.return,V)}}break;case 1:Rt(t,e),Bt(e),i&512&&n!==null&&cr(n,n.return);break;case 5:if(Rt(t,e),Bt(e),i&512&&n!==null&&cr(n,n.return),e.flags&32){var o=e.stateNode;try{Pr(o,"")}catch(V){Re(e,e.return,V)}}if(i&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,p=n!==null?n.memoizedProps:s,h=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&Js(o,s),kl(h,p);var b=kl(h,s);for(p=0;p<v.length;p+=2){var T=v[p],L=v[p+1];T==="style"?ou(o,L):T==="dangerouslySetInnerHTML"?ru(o,L):T==="children"?Pr(o,L):F(o,T,L,b)}switch(h){case"input":gl(o,s);break;case"textarea":eu(o,s);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var U=s.value;U!=null?Hn(o,!!s.multiple,U,!1):_!==!!s.multiple&&(s.defaultValue!=null?Hn(o,!!s.multiple,s.defaultValue,!0):Hn(o,!!s.multiple,s.multiple?[]:"",!1))}o[Yr]=s}catch(V){Re(e,e.return,V)}}break;case 6:if(Rt(t,e),Bt(e),i&4){if(e.stateNode===null)throw Error(a(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(V){Re(e,e.return,V)}}break;case 3:if(Rt(t,e),Bt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(V){Re(e,e.return,V)}break;case 4:Rt(t,e),Bt(e);break;case 13:Rt(t,e),Bt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(qa=_e())),i&4&&Sd(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(b=Ge)||T,Rt(t,e),Ge=b):Rt(t,e),Bt(e),i&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!T&&(e.mode&1)!==0)for(H=e,T=e.child;T!==null;){for(L=H=T;H!==null;){switch(_=H,U=_.child,_.tag){case 0:case 11:case 14:case 15:ai(4,_,_.return);break;case 1:cr(_,_.return);var W=_.stateNode;if(typeof W.componentWillUnmount=="function"){i=_,n=_.return;try{t=i,W.props=t.memoizedProps,W.state=t.memoizedState,W.componentWillUnmount()}catch(V){Re(i,n,V)}}break;case 5:cr(_,_.return);break;case 22:if(_.memoizedState!==null){Cd(L);continue}}U!==null?(U.return=_,H=U):Cd(L)}T=T.sibling}e:for(T=null,L=e;;){if(L.tag===5){if(T===null){T=L;try{o=L.stateNode,b?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=L.stateNode,v=L.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null,h.style.display=iu("display",p))}catch(V){Re(e,e.return,V)}}}else if(L.tag===6){if(T===null)try{L.stateNode.nodeValue=b?"":L.memoizedProps}catch(V){Re(e,e.return,V)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;T===L&&(T=null),L=L.return}T===L&&(T=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Rt(t,e),Bt(e),i&4&&Sd(e);break;case 21:break;default:Rt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xd(n)){var i=n;break e}n=n.return}throw Error(a(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Pr(o,""),i.flags&=-33);var s=wd(e);Wa(e,s,o);break;case 3:case 4:var p=i.stateNode.containerInfo,h=wd(e);Ha(e,h,p);break;default:throw Error(a(161))}}catch(v){Re(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function am(e,t,n){H=e,bd(e)}function bd(e,t,n){for(var i=(e.mode&1)!==0;H!==null;){var o=H,s=o.child;if(o.tag===22&&i){var p=o.memoizedState!==null||wo;if(!p){var h=o.alternate,v=h!==null&&h.memoizedState!==null||Ge;h=wo;var b=Ge;if(wo=p,(Ge=v)&&!b)for(H=o;H!==null;)p=H,v=p.child,p.tag===22&&p.memoizedState!==null?Ed(o):v!==null?(v.return=p,H=v):Ed(o);for(;s!==null;)H=s,bd(s),s=s.sibling;H=o,wo=h,Ge=b}Nd(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,H=s):Nd(e)}}function Nd(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||ko(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ge)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Cc(t,s,i);break;case 3:var p=t.updateQueue;if(p!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,p,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var T=b.memoizedState;if(T!==null){var L=T.dehydrated;L!==null&&Dr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ge||t.flags&512&&Ua(t)}catch(_){Re(t,t.return,_)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Cd(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Ed(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ko(4,t)}catch(v){Re(t,n,v)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(v){Re(t,o,v)}}var s=t.return;try{Ua(t)}catch(v){Re(t,s,v)}break;case 5:var p=t.return;try{Ua(t)}catch(v){Re(t,p,v)}}}catch(v){Re(t,t.return,v)}if(t===e){H=null;break}var h=t.sibling;if(h!==null){h.return=t.return,H=h;break}H=t.return}}var sm=Math.ceil,So=J.ReactCurrentDispatcher,Va=J.ReactCurrentOwner,wt=J.ReactCurrentBatchConfig,de=0,Me=null,Le=null,He=0,dt=0,dr=fn(0),Ae=0,si=null,An=0,jo=0,Qa=0,ui=null,it=null,qa=0,pr=1/0,Xt=null,bo=!1,Ka=null,xn=null,No=!1,wn=null,Co=0,ci=0,Ga=null,Eo=-1,Po=0;function Ze(){return(de&6)!==0?_e():Eo!==-1?Eo:Eo=_e()}function kn(e){return(e.mode&1)===0?1:(de&2)!==0&&He!==0?He&-He:Vh.transition!==null?(Po===0&&(Po=wu()),Po):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ru(e.type)),e)}function _t(e,t,n,i){if(50<ci)throw ci=0,Ga=null,Error(a(185));Ir(e,n,i),((de&2)===0||e!==Me)&&(e===Me&&((de&2)===0&&(jo|=n),Ae===4&&Sn(e,He)),ot(e,i),n===1&&de===0&&(t.mode&1)===0&&(pr=_e()+500,to&&mn()))}function ot(e,t){var n=e.callbackNode;Vf(e,t);var i=Fi(e,e===Me?He:0);if(i===0)n!==null&&vu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&vu(n),t===1)e.tag===0?Wh(Rd.bind(null,e)):hc(Rd.bind(null,e)),$h(function(){(de&6)===0&&mn()}),n=null;else{switch(ku(i)){case 1:n=Pl;break;case 4:n=yu;break;case 16:n=Li;break;case 536870912:n=xu;break;default:n=Li}n=Od(n,Pd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pd(e,t){if(Eo=-1,Po=0,(de&6)!==0)throw Error(a(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var i=Fi(e,e===Me?He:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ro(e,i);else{t=i;var o=de;de|=2;var s=Td();(Me!==e||He!==t)&&(Xt=null,pr=_e()+500,On(e,t));do try{dm();break}catch(h){_d(e,h)}while(!0);fa(),So.current=s,de=o,Le!==null?t=0:(Me=null,He=0,t=Ae)}if(t!==0){if(t===2&&(o=Rl(e),o!==0&&(i=o,t=Ya(e,o))),t===1)throw n=si,On(e,0),Sn(e,i),ot(e,_e()),n;if(t===6)Sn(e,i);else{if(o=e.current.alternate,(i&30)===0&&!um(o)&&(t=Ro(e,i),t===2&&(s=Rl(e),s!==0&&(i=s,t=Ya(e,s))),t===1))throw n=si,On(e,0),Sn(e,i),ot(e,_e()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(a(345));case 2:Mn(e,it,Xt);break;case 3:if(Sn(e,i),(i&130023424)===i&&(t=qa+500-_e(),10<t)){if(Fi(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=na(Mn.bind(null,e,it,Xt),t);break}Mn(e,it,Xt);break;case 4:if(Sn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var p=31-bt(i);s=1<<p,p=t[p],p>o&&(o=p),i&=~s}if(i=o,i=_e()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sm(i/1960))-i,10<i){e.timeoutHandle=na(Mn.bind(null,e,it,Xt),i);break}Mn(e,it,Xt);break;case 5:Mn(e,it,Xt);break;default:throw Error(a(329))}}}return ot(e,_e()),e.callbackNode===n?Pd.bind(null,e):null}function Ya(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=it,it=n,t!==null&&Ja(t)),e}function Ja(e){it===null?it=e:it.push.apply(it,e)}function um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],s=o.getSnapshot;o=o.value;try{if(!Nt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Qa,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),i=1<<n;e[n]=-1,t&=~i}}function Rd(e){if((de&6)!==0)throw Error(a(327));fr();var t=Fi(e,0);if((t&1)===0)return ot(e,_e()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var i=Rl(e);i!==0&&(t=i,n=Ya(e,i))}if(n===1)throw n=si,On(e,0),Sn(e,t),ot(e,_e()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,it,Xt),ot(e,_e()),null}function Xa(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(pr=_e()+500,to&&mn())}}function Fn(e){wn!==null&&wn.tag===0&&(de&6)===0&&fr();var t=de;de|=1;var n=wt.transition,i=ge;try{if(wt.transition=null,ge=1,e)return e()}finally{ge=i,wt.transition=n,de=t,(de&6)===0&&mn()}}function Za(){dt=dr.current,Se(dr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dh(n)),Le!==null)for(n=Le.return;n!==null;){var i=n;switch(sa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zi();break;case 3:sr(),Se(tt),Se(Qe),ka();break;case 5:xa(i);break;case 4:sr();break;case 13:Se(Ee);break;case 19:Se(Ee);break;case 10:ha(i.type._context);break;case 22:case 23:Za()}n=n.return}if(Me=e,Le=e=jn(e.current,null),He=dt=t,Ae=0,si=null,Qa=jo=An=0,it=ui=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,s=n.pending;if(s!==null){var p=s.next;s.next=o,i.next=p}n.pending=i}Ln=null}return e}function _d(e,t){do{var n=Le;try{if(fa(),po.current=go,fo){for(var i=Pe.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}fo=!1}if(In=0,Oe=Ie=Pe=null,ni=!1,ri=0,Va.current=null,n===null||n.return===null){Ae=1,si=t,Le=null;break}e:{var s=e,p=n.return,h=n,v=t;if(t=He,h.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var b=v,T=h,L=T.tag;if((T.mode&1)===0&&(L===0||L===11||L===15)){var _=T.alternate;_?(T.updateQueue=_.updateQueue,T.memoizedState=_.memoizedState,T.lanes=_.lanes):(T.updateQueue=null,T.memoizedState=null)}var U=td(p);if(U!==null){U.flags&=-257,nd(U,p,h,s,t),U.mode&1&&ed(s,b,t),t=U,v=b;var W=t.updateQueue;if(W===null){var V=new Set;V.add(v),t.updateQueue=V}else W.add(v);break e}else{if((t&1)===0){ed(s,b,t),es();break e}v=Error(a(426))}}else if(Ne&&h.mode&1){var Te=td(p);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),nd(Te,p,h,s,t),da(ur(v,h));break e}}s=v=ur(v,h),Ae!==4&&(Ae=2),ui===null?ui=[s]:ui.push(s),s=p;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=Xc(s,v,t);Nc(s,S);break e;case 1:h=v;var y=s.type,j=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(xn===null||!xn.has(j)))){s.flags|=65536,t&=-t,s.lanes|=t;var I=Zc(s,h,t);Nc(s,I);break e}}s=s.return}while(s!==null)}zd(n)}catch(Q){t=Q,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Td(){var e=So.current;return So.current=go,e===null?go:e}function es(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Me===null||(An&268435455)===0&&(jo&268435455)===0||Sn(Me,He)}function Ro(e,t){var n=de;de|=2;var i=Td();(Me!==e||He!==t)&&(Xt=null,On(e,t));do try{cm();break}catch(o){_d(e,o)}while(!0);if(fa(),de=n,So.current=i,Le!==null)throw Error(a(261));return Me=null,He=0,Ae}function cm(){for(;Le!==null;)Ld(Le)}function dm(){for(;Le!==null&&!Ff();)Ld(Le)}function Ld(e){var t=Fd(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?zd(e):Le=t,Va.current=null}function zd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=rm(n,t,dt),n!==null){Le=n;return}}else{if(n=im(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Ae===0&&(Ae=5)}function Mn(e,t,n){var i=ge,o=wt.transition;try{wt.transition=null,ge=1,pm(e,t,n,i)}finally{wt.transition=o,ge=i}return null}function pm(e,t,n,i){do fr();while(wn!==null);if((de&6)!==0)throw Error(a(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qf(e,s),e===Me&&(Le=Me=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||No||(No=!0,Od(Li,function(){return fr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=wt.transition,wt.transition=null;var p=ge;ge=1;var h=de;de|=4,Va.current=null,lm(e,n),jd(n,e),Lh(ea),Di=!!Zl,ea=Zl=null,e.current=n,am(n),Of(),de=h,ge=p,wt.transition=s}else e.current=n;if(No&&(No=!1,wn=e,Co=o),s=e.pendingLanes,s===0&&(xn=null),$f(n.stateNode),ot(e,_e()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=Ka,Ka=null,e;return(Co&1)!==0&&e.tag!==0&&fr(),s=e.pendingLanes,(s&1)!==0?e===Ga?ci++:(ci=0,Ga=e):ci=0,mn(),null}function fr(){if(wn!==null){var e=ku(Co),t=wt.transition,n=ge;try{if(wt.transition=null,ge=16>e?16:e,wn===null)var i=!1;else{if(e=wn,wn=null,Co=0,(de&6)!==0)throw Error(a(331));var o=de;for(de|=4,H=e.current;H!==null;){var s=H,p=s.child;if((H.flags&16)!==0){var h=s.deletions;if(h!==null){for(var v=0;v<h.length;v++){var b=h[v];for(H=b;H!==null;){var T=H;switch(T.tag){case 0:case 11:case 15:ai(8,T,s)}var L=T.child;if(L!==null)L.return=T,H=L;else for(;H!==null;){T=H;var _=T.sibling,U=T.return;if(yd(T),T===b){H=null;break}if(_!==null){_.return=U,H=_;break}H=U}}}var W=s.alternate;if(W!==null){var V=W.child;if(V!==null){W.child=null;do{var Te=V.sibling;V.sibling=null,V=Te}while(V!==null)}}H=s}}if((s.subtreeFlags&2064)!==0&&p!==null)p.return=s,H=p;else e:for(;H!==null;){if(s=H,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ai(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var y=e.current;for(H=y;H!==null;){p=H;var j=p.child;if((p.subtreeFlags&2064)!==0&&j!==null)j.return=p,H=j;else e:for(p=y;H!==null;){if(h=H,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ko(9,h)}}catch(Q){Re(h,h.return,Q)}if(h===p){H=null;break e}var I=h.sibling;if(I!==null){I.return=h.return,H=I;break e}H=h.return}}if(de=o,mn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(zi,e)}catch{}i=!0}return i}finally{ge=n,wt.transition=t}}return!1}function Id(e,t,n){t=ur(n,t),t=Xc(e,t,1),e=vn(e,t,1),t=Ze(),e!==null&&(Ir(e,1,t),ot(e,t))}function Re(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xn===null||!xn.has(i))){e=ur(n,e),e=Zc(t,e,1),t=vn(t,e,1),e=Ze(),t!==null&&(Ir(t,1,e),ot(t,e));break}}t=t.return}}function fm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(He&n)===n&&(Ae===4||Ae===3&&(He&130023424)===He&&500>_e()-qa?On(e,0):Qa|=n),ot(e,t)}function Ad(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ai,Ai<<=1,(Ai&130023424)===0&&(Ai=4194304)));var n=Ze();e=Gt(e,t),e!==null&&(Ir(e,t,n),ot(e,n))}function hm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ad(e,n)}function mm(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}i!==null&&i.delete(t),Ad(e,n)}var Fd;Fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,nm(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Ne&&(t.flags&1048576)!==0&&mc(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;xo(e,t),e=t.pendingProps;var o=tr(t,Qe.current);ar(t,n),o=ba(null,t,i,e,o,n);var s=Na();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(i)?(s=!0,eo(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,va(t),o.updater=vo,t.stateNode=o,o._reactInternals=t,Ta(t,i,e,n),t=Aa(null,t,i,!0,s,n)):(t.tag=0,Ne&&s&&aa(t),Xe(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(xo(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=vm(i),e=Et(i,e),o){case 0:t=Ia(null,t,i,e,n);break e;case 1:t=sd(null,t,i,e,n);break e;case 11:t=rd(null,t,i,e,n);break e;case 14:t=id(null,t,i,Et(i.type,e),n);break e}throw Error(a(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Et(i,o),Ia(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Et(i,o),sd(e,t,i,o,n);case 3:e:{if(ud(t),e===null)throw Error(a(387));i=t.pendingProps,s=t.memoizedState,o=s.element,bc(e,t),uo(t,i,null,n);var p=t.memoizedState;if(i=p.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=ur(Error(a(423)),t),t=cd(e,t,i,n,o);break e}else if(i!==o){o=ur(Error(a(424)),t),t=cd(e,t,i,n,o);break e}else for(ct=pn(t.stateNode.containerInfo.firstChild),ut=t,Ne=!0,Ct=null,n=Sc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),i===o){t=Jt(e,t,n);break e}Xe(e,t,i,n)}t=t.child}return t;case 5:return Ec(t),e===null&&ca(t),i=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,p=o.children,ta(i,o)?p=null:s!==null&&ta(i,s)&&(t.flags|=32),ad(e,t),Xe(e,t,p,n),t.child;case 6:return e===null&&ca(t),null;case 13:return dd(e,t,n);case 4:return ya(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=or(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Et(i,o),rd(e,t,i,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,s=t.memoizedProps,p=o.value,ye(lo,i._currentValue),i._currentValue=p,s!==null)if(Nt(s.value,p)){if(s.children===o.children&&!tt.current){t=Jt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var h=s.dependencies;if(h!==null){p=s.child;for(var v=h.firstContext;v!==null;){if(v.context===i){if(s.tag===1){v=Yt(-1,n&-n),v.tag=2;var b=s.updateQueue;if(b!==null){b=b.shared;var T=b.pending;T===null?v.next=v:(v.next=T.next,T.next=v),b.pending=v}}s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),ma(s.return,n,t),h.lanes|=n;break}v=v.next}}else if(s.tag===10)p=s.type===t.type?null:s.child;else if(s.tag===18){if(p=s.return,p===null)throw Error(a(341));p.lanes|=n,h=p.alternate,h!==null&&(h.lanes|=n),ma(p,n,t),p=s.sibling}else p=s.child;if(p!==null)p.return=s;else for(p=s;p!==null;){if(p===t){p=null;break}if(s=p.sibling,s!==null){s.return=p.return,p=s;break}p=p.return}s=p}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,ar(t,n),o=yt(o),i=i(o),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return i=t.type,o=Et(i,t.pendingProps),o=Et(i.type,o),id(e,t,i,o,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Et(i,o),xo(e,t),t.tag=1,nt(i)?(e=!0,eo(t)):e=!1,ar(t,n),Yc(t,i,o),Ta(t,i,o,n),Aa(null,t,i,!0,e,n);case 19:return fd(e,t,n);case 22:return ld(e,t,n)}throw Error(a(156,t.tag))};function Od(e,t){return gu(e,t)}function gm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,i){return new gm(e,t,n,i)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vm(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===mt)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,i,o,s){var p=2;if(i=e,typeof e=="function")ts(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case Y:return Dn(n.children,o,s,t);case be:p=8,o|=8;break;case we:return e=kt(12,n,t,o|2),e.elementType=we,e.lanes=s,e;case Je:return e=kt(13,n,t,o),e.elementType=Je,e.lanes=s,e;case at:return e=kt(19,n,t,o),e.elementType=at,e.lanes=s,e;case ve:return To(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:p=10;break e;case ft:p=9;break e;case ht:p=11;break e;case mt:p=14;break e;case Ve:p=16,i=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=kt(p,n,t,o),t.elementType=e,t.type=i,t.lanes=s,t}function Dn(e,t,n,i){return e=kt(7,e,i,t),e.lanes=n,e}function To(e,t,n,i){return e=kt(22,e,i,t),e.elementType=ve,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function is(e,t,n,i,o,s,p,h,v){return e=new ym(e,t,n,h,v),t===1?(t=1,s===!0&&(t|=8)):t=0,s=kt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(s),e}function xm(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Md(e){if(!e)return hn;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(nt(n))return pc(e,n,t)}return t}function Dd(e,t,n,i,o,s,p,h,v){return e=is(n,i,!0,e,o,s,p,h,v),e.context=Md(null),n=e.current,i=Ze(),o=kn(n),s=Yt(i,o),s.callback=t??null,vn(n,s,o),e.current.lanes=o,Ir(e,o,i),ot(e,i),e}function Lo(e,t,n,i){var o=t.current,s=Ze(),p=kn(o);return n=Md(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(s,p),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=vn(o,t,p),e!==null&&(_t(e,o,p,s),so(e,o,p)),p}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function os(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function wm(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ls(e){this._internalRoot=e}Io.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Lo(e,t,null,null)},Io.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Lo(null,e,null,null)}),t[Vt]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Eu(e)}};function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function km(e,t,n,i,o){if(o){if(typeof i=="function"){var s=i;i=function(){var b=zo(p);s.call(b)}}var p=Dd(t,i,e,0,null,!1,!1,"",Ud);return e._reactRootContainer=p,e[Vt]=p.current,Kr(e.nodeType===8?e.parentNode:e),Fn(),p}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var h=i;i=function(){var b=zo(v);h.call(b)}}var v=is(e,0,!1,null,null,!1,!1,"",Ud);return e._reactRootContainer=v,e[Vt]=v.current,Kr(e.nodeType===8?e.parentNode:e),Fn(function(){Lo(t,v,n,i)}),v}function Fo(e,t,n,i,o){var s=n._reactRootContainer;if(s){var p=s;if(typeof o=="function"){var h=o;o=function(){var v=zo(p);h.call(v)}}Lo(t,p,e,o)}else p=km(n,t,e,o,i);return zo(p)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Tl(t,n|1),ot(t,_e()),(de&6)===0&&(pr=_e()+500,mn()))}break;case 13:Fn(function(){var i=Gt(e,1);if(i!==null){var o=Ze();_t(i,e,1,o)}}),os(e,1)}},Ll=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Ze();_t(t,e,134217728,n)}os(e,134217728)}},ju=function(e){if(e.tag===13){var t=kn(e),n=Gt(e,t);if(n!==null){var i=Ze();_t(n,e,t,i)}os(e,t)}},bu=function(){return ge},Nu=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},bl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=Xi(i);if(!o)throw Error(a(90));jt(i),gl(i,o)}}}break;case"textarea":eu(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}},uu=Xa,cu=Fn;var Sm={usingClientEntryPoint:!1,Events:[Jr,Zn,Xi,au,su,Xa]},di={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jm={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{zi=Oo.inject(jm),Ot=Oo}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!as(t))throw Error(a(200));return xm(e,t,null,n)},lt.createRoot=function(e,t){if(!as(e))throw Error(a(299));var n=!1,i="",o=Bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=is(e,1,!1,null,null,n,!1,i,o),e[Vt]=t.current,Kr(e.nodeType===8?e.parentNode:e),new ls(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Fn(e)},lt.hydrate=function(e,t,n){if(!Ao(t))throw Error(a(200));return Fo(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!as(e))throw Error(a(405));var i=n!=null&&n.hydratedSources||null,o=!1,s="",p=Bd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),t=Dd(t,null,e,1,n??null,o,!1,s,p),e[Vt]=t.current,Kr(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Io(t)},lt.render=function(e,t,n){if(!Ao(t))throw Error(a(200));return Fo(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(a(40));return e._reactRootContainer?(Fn(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},lt.unstable_batchedUpdates=Xa,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Ao(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Fo(e,t,n,!1,i)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Yd;function Tm(){if(Yd)return cs.exports;Yd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(l){console.error(l)}}return r(),cs.exports=_m(),cs.exports}var Jd;function Lm(){if(Jd)return Mo;Jd=1;var r=Tm();return Mo.createRoot=r.createRoot,Mo.hydrateRoot=r.hydrateRoot,Mo}var zm=Lm(),Xd="popstate";function Im(r={}){function l(c,d){let{pathname:f,search:m,hash:x}=c.location;return Ss("",{pathname:f,search:m,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function a(c,d){return typeof d=="string"?d:ki(d)}return Fm(l,a,null,r)}function Ce(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}function It(r,l){if(!r){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Am(){return Math.random().toString(36).substring(2,10)}function Zd(r,l){return{usr:r.state,key:r.key,idx:l}}function Ss(r,l,a=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof l=="string"?Sr(l):l,state:a,key:l&&l.key||c||Am()}}function ki({pathname:r="/",search:l="",hash:a=""}){return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function Sr(r){let l={};if(r){let a=r.indexOf("#");a>=0&&(l.hash=r.substring(a),r=r.substring(0,a));let c=r.indexOf("?");c>=0&&(l.search=r.substring(c),r=r.substring(0,c)),r&&(l.pathname=r)}return l}function Fm(r,l,a,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,m=d.history,x="POP",g=null,w=C();w==null&&(w=0,m.replaceState({...m.state,idx:w},""));function C(){return(m.state||{idx:null}).idx}function E(){x="POP";let z=C(),M=z==null?null:z-w;w=z,g&&g({action:x,location:O.location,delta:M})}function P(z,M){x="PUSH";let q=Ss(O.location,z,M);w=C()+1;let F=Zd(q,w),J=O.createHref(q);try{m.pushState(F,"",J)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;d.location.assign(J)}f&&g&&g({action:x,location:O.location,delta:1})}function A(z,M){x="REPLACE";let q=Ss(O.location,z,M);w=C();let F=Zd(q,w),J=O.createHref(q);m.replaceState(F,"",J),f&&g&&g({action:x,location:O.location,delta:0})}function $(z){return Om(z)}let O={get action(){return x},get location(){return r(d,m)},listen(z){if(g)throw new Error("A history only accepts one active listener");return d.addEventListener(Xd,E),g=z,()=>{d.removeEventListener(Xd,E),g=null}},createHref(z){return l(d,z)},createURL:$,encodeLocation(z){let M=$(z);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:P,replace:A,go(z){return m.go(z)}};return O}function Om(r,l=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(a,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:ki(r);return c=c.replace(/ $/,"%20"),!l&&c.startsWith("//")&&(c=a+c),new URL(c,a)}function Sp(r,l,a="/"){return Mm(r,l,a,!1)}function Mm(r,l,a,c){let d=typeof l=="string"?Sr(l):l,f=on(d.pathname||"/",a);if(f==null)return null;let m=jp(r);Dm(m);let x=null;for(let g=0;x==null&&g<m.length;++g){let w=Ym(f);x=Km(m[g],w,c)}return x}function jp(r,l=[],a=[],c=""){let d=(f,m,x)=>{let g={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};g.relativePath.startsWith("/")&&(Ce(g.relativePath.startsWith(c),`Absolute route path "${g.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(c.length));let w=rn([c,g.relativePath]),C=a.concat(g);f.children&&f.children.length>0&&(Ce(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),jp(f.children,l,C,w)),!(f.path==null&&!f.index)&&l.push({path:w,score:Qm(w,f.index),routesMeta:C})};return r.forEach((f,m)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,m);else for(let g of bp(f.path))d(f,m,g)}),l}function bp(r){let l=r.split("/");if(l.length===0)return[];let[a,...c]=l,d=a.endsWith("?"),f=a.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let m=bp(c.join("/")),x=[];return x.push(...m.map(g=>g===""?f:[f,g].join("/"))),d&&x.push(...m),x.map(g=>r.startsWith("/")&&g===""?"/":g)}function Dm(r){r.sort((l,a)=>l.score!==a.score?a.score-l.score:qm(l.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}var $m=/^:[\w-]+$/,Bm=3,Um=2,Hm=1,Wm=10,Vm=-2,ep=r=>r==="*";function Qm(r,l){let a=r.split("/"),c=a.length;return a.some(ep)&&(c+=Vm),l&&(c+=Um),a.filter(d=>!ep(d)).reduce((d,f)=>d+($m.test(f)?Bm:f===""?Hm:Wm),c)}function qm(r,l){return r.length===l.length&&r.slice(0,-1).every((c,d)=>c===l[d])?r[r.length-1]-l[l.length-1]:0}function Km(r,l,a=!1){let{routesMeta:c}=r,d={},f="/",m=[];for(let x=0;x<c.length;++x){let g=c[x],w=x===c.length-1,C=f==="/"?l:l.slice(f.length)||"/",E=Xo({path:g.relativePath,caseSensitive:g.caseSensitive,end:w},C),P=g.route;if(!E&&w&&a&&!c[c.length-1].route.index&&(E=Xo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},C)),!E)return null;Object.assign(d,E.params),m.push({params:d,pathname:rn([f,E.pathname]),pathnameBase:eg(rn([f,E.pathnameBase])),route:P}),E.pathnameBase!=="/"&&(f=rn([f,E.pathnameBase]))}return m}function Xo(r,l){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,c]=Gm(r.path,r.caseSensitive,r.end),d=l.match(a);if(!d)return null;let f=d[0],m=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:c.reduce((w,{paramName:C,isOptional:E},P)=>{if(C==="*"){let $=x[P]||"";m=f.slice(0,f.length-$.length).replace(/(.)\/+$/,"$1")}const A=x[P];return E&&!A?w[C]=void 0:w[C]=(A||"").replace(/%2F/g,"/"),w},{}),pathname:f,pathnameBase:m,pattern:r}}function Gm(r,l=!1,a=!0){It(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,g)=>(c.push({paramName:x,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,l?void 0:"i"),c]}function Ym(r){try{return r.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return It(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),r}}function on(r,l){if(l==="/")return r;if(!r.toLowerCase().startsWith(l.toLowerCase()))return null;let a=l.endsWith("/")?l.length-1:l.length,c=r.charAt(a);return c&&c!=="/"?null:r.slice(a)||"/"}function Jm(r,l="/"){let{pathname:a,search:c="",hash:d=""}=typeof r=="string"?Sr(r):r;return{pathname:a?a.startsWith("/")?a:Xm(a,l):l,search:tg(c),hash:ng(d)}}function Xm(r,l){let a=l.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?a.length>1&&a.pop():d!=="."&&a.push(d)}),a.length>1?a.join("/"):"/"}function fs(r,l,a,c){return`Cannot include a '${r}' character in a manually specified \`to.${l}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zm(r){return r.filter((l,a)=>a===0||l.route.path&&l.route.path.length>0)}function Is(r){let l=Zm(r);return l.map((a,c)=>c===l.length-1?a.pathname:a.pathnameBase)}function As(r,l,a,c=!1){let d;typeof r=="string"?d=Sr(r):(d={...r},Ce(!d.pathname||!d.pathname.includes("?"),fs("?","pathname","search",d)),Ce(!d.pathname||!d.pathname.includes("#"),fs("#","pathname","hash",d)),Ce(!d.search||!d.search.includes("#"),fs("#","search","hash",d)));let f=r===""||d.pathname==="",m=f?"/":d.pathname,x;if(m==null)x=a;else{let E=l.length-1;if(!c&&m.startsWith("..")){let P=m.split("/");for(;P[0]==="..";)P.shift(),E-=1;d.pathname=P.join("/")}x=E>=0?l[E]:"/"}let g=Jm(d,x),w=m&&m!=="/"&&m.endsWith("/"),C=(f||m===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(w||C)&&(g.pathname+="/"),g}var rn=r=>r.join("/").replace(/\/\/+/g,"/"),eg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),tg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ng=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function rg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Np=["POST","PUT","PATCH","DELETE"];new Set(Np);var ig=["GET",...Np];new Set(ig);var jr=N.createContext(null);jr.displayName="DataRouter";var ll=N.createContext(null);ll.displayName="DataRouterState";var Cp=N.createContext({isTransitioning:!1});Cp.displayName="ViewTransition";var og=N.createContext(new Map);og.displayName="Fetchers";var lg=N.createContext(null);lg.displayName="Await";var At=N.createContext(null);At.displayName="Navigation";var bi=N.createContext(null);bi.displayName="Location";var Ft=N.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Fs=N.createContext(null);Fs.displayName="RouteError";function ag(r,{relative:l}={}){Ce(br(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:c}=N.useContext(At),{hash:d,pathname:f,search:m}=Ni(r,{relative:l}),x=f;return a!=="/"&&(x=f==="/"?a:rn([a,f])),c.createHref({pathname:x,search:m,hash:d})}function br(){return N.useContext(bi)!=null}function Ht(){return Ce(br(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(bi).location}var Ep="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pp(r){N.useContext(At).static||N.useLayoutEffect(r)}function Rp(){let{isDataRoute:r}=N.useContext(Ft);return r?wg():sg()}function sg(){Ce(br(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(jr),{basename:l,navigator:a}=N.useContext(At),{matches:c}=N.useContext(Ft),{pathname:d}=Ht(),f=JSON.stringify(Is(c)),m=N.useRef(!1);return Pp(()=>{m.current=!0}),N.useCallback((g,w={})=>{if(It(m.current,Ep),!m.current)return;if(typeof g=="number"){a.go(g);return}let C=As(g,JSON.parse(f),d,w.relative==="path");r==null&&l!=="/"&&(C.pathname=C.pathname==="/"?l:rn([l,C.pathname])),(w.replace?a.replace:a.push)(C,w.state,w)},[l,a,f,d,r])}N.createContext(null);function _p(){let{matches:r}=N.useContext(Ft),l=r[r.length-1];return l?l.params:{}}function Ni(r,{relative:l}={}){let{matches:a}=N.useContext(Ft),{pathname:c}=Ht(),d=JSON.stringify(Is(a));return N.useMemo(()=>As(r,JSON.parse(d),c,l==="path"),[r,d,c,l])}function ug(r,l){return Tp(r,l)}function Tp(r,l,a,c){var q;Ce(br(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:f}=N.useContext(At),{matches:m}=N.useContext(Ft),x=m[m.length-1],g=x?x.params:{},w=x?x.pathname:"/",C=x?x.pathnameBase:"/",E=x&&x.route;{let F=E&&E.path||"";Lp(w,!E||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let P=Ht(),A;if(l){let F=typeof l=="string"?Sr(l):l;Ce(C==="/"||((q=F.pathname)==null?void 0:q.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${F.pathname}" was given in the \`location\` prop.`),A=F}else A=P;let $=A.pathname||"/",O=$;if(C!=="/"){let F=C.replace(/^\//,"").split("/");O="/"+$.replace(/^\//,"").split("/").slice(F.length).join("/")}let z=!f&&a&&a.matches&&a.matches.length>0?a.matches:Sp(r,{pathname:O});It(E||z!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),It(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=hg(z&&z.map(F=>Object.assign({},F,{params:Object.assign({},g,F.params),pathname:rn([C,d.encodeLocation?d.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?C:rn([C,d.encodeLocation?d.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),m,a,c);return l&&M?N.createElement(bi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},M):M}function cg(){let r=xg(),l=rg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:f},"ErrorBoundary")," or"," ",N.createElement("code",{style:f},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},l),a?N.createElement("pre",{style:d},a):null,m)}var dg=N.createElement(cg,null),pg=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error!==void 0?N.createElement(Ft.Provider,{value:this.props.routeContext},N.createElement(Fs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fg({routeContext:r,match:l,children:a}){let c=N.useContext(jr);return c&&c.static&&c.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=l.route.id),N.createElement(Ft.Provider,{value:r},a)}function hg(r,l=[],a=null,c=null){if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(l.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let d=r,f=a==null?void 0:a.errors;if(f!=null){let g=d.findIndex(w=>w.route.id&&(f==null?void 0:f[w.route.id])!==void 0);Ce(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let m=!1,x=-1;if(a)for(let g=0;g<d.length;g++){let w=d[g];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(x=g),w.route.id){let{loaderData:C,errors:E}=a,P=w.route.loader&&!C.hasOwnProperty(w.route.id)&&(!E||E[w.route.id]===void 0);if(w.route.lazy||P){m=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((g,w,C)=>{let E,P=!1,A=null,$=null;a&&(E=f&&w.route.id?f[w.route.id]:void 0,A=w.route.errorElement||dg,m&&(x<0&&C===0?(Lp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),P=!0,$=null):x===C&&(P=!0,$=w.route.hydrateFallbackElement||null)));let O=l.concat(d.slice(0,C+1)),z=()=>{let M;return E?M=A:P?M=$:w.route.Component?M=N.createElement(w.route.Component,null):w.route.element?M=w.route.element:M=g,N.createElement(fg,{match:w,routeContext:{outlet:g,matches:O,isDataRoute:a!=null},children:M})};return a&&(w.route.ErrorBoundary||w.route.errorElement||C===0)?N.createElement(pg,{location:a.location,revalidation:a.revalidation,component:A,error:E,children:z(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):z()},null)}function Os(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mg(r){let l=N.useContext(jr);return Ce(l,Os(r)),l}function gg(r){let l=N.useContext(ll);return Ce(l,Os(r)),l}function vg(r){let l=N.useContext(Ft);return Ce(l,Os(r)),l}function Ms(r){let l=vg(r),a=l.matches[l.matches.length-1];return Ce(a.route.id,`${r} can only be used on routes that contain a unique "id"`),a.route.id}function yg(){return Ms("useRouteId")}function xg(){var c;let r=N.useContext(Fs),l=gg("useRouteError"),a=Ms("useRouteError");return r!==void 0?r:(c=l.errors)==null?void 0:c[a]}function wg(){let{router:r}=mg("useNavigate"),l=Ms("useNavigate"),a=N.useRef(!1);return Pp(()=>{a.current=!0}),N.useCallback(async(d,f={})=>{It(a.current,Ep),a.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:l,...f}))},[r,l])}var tp={};function Lp(r,l,a){!l&&!tp[r]&&(tp[r]=!0,It(!1,a))}N.memo(kg);function kg({routes:r,future:l,state:a}){return Tp(r,void 0,a,l)}function zp({to:r,replace:l,state:a,relative:c}){Ce(br(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=N.useContext(At);It(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=N.useContext(Ft),{pathname:m}=Ht(),x=Rp(),g=As(r,Is(f),m,c==="path"),w=JSON.stringify(g);return N.useEffect(()=>{x(JSON.parse(w),{replace:l,state:a,relative:c})},[x,w,c,l,a]),null}function Zt(r){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Sg({basename:r="/",children:l=null,location:a,navigationType:c="POP",navigator:d,static:f=!1}){Ce(!br(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),x=N.useMemo(()=>({basename:m,navigator:d,static:f,future:{}}),[m,d,f]);typeof a=="string"&&(a=Sr(a));let{pathname:g="/",search:w="",hash:C="",state:E=null,key:P="default"}=a,A=N.useMemo(()=>{let $=on(g,m);return $==null?null:{location:{pathname:$,search:w,hash:C,state:E,key:P},navigationType:c}},[m,g,w,C,E,P,c]);return It(A!=null,`<Router basename="${m}"> is not able to match the URL "${g}${w}${C}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:N.createElement(At.Provider,{value:x},N.createElement(bi.Provider,{children:l,value:A}))}function jg({children:r,location:l}){return ug(js(r),l)}function js(r,l=[]){let a=[];return N.Children.forEach(r,(c,d)=>{if(!N.isValidElement(c))return;let f=[...l,d];if(c.type===N.Fragment){a.push.apply(a,js(c.props.children,f));return}Ce(c.type===Zt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!c.props.index||!c.props.children,"An index route cannot have child routes.");let m={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=js(c.props.children,f)),a.push(m)}),a}var Ho="get",Wo="application/x-www-form-urlencoded";function al(r){return r!=null&&typeof r.tagName=="string"}function bg(r){return al(r)&&r.tagName.toLowerCase()==="button"}function Ng(r){return al(r)&&r.tagName.toLowerCase()==="form"}function Cg(r){return al(r)&&r.tagName.toLowerCase()==="input"}function Eg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Pg(r,l){return r.button===0&&(!l||l==="_self")&&!Eg(r)}var Do=null;function Rg(){if(Do===null)try{new FormData(document.createElement("form"),0),Do=!1}catch{Do=!0}return Do}var _g=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hs(r){return r!=null&&!_g.has(r)?(It(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wo}"`),null):r}function Tg(r,l){let a,c,d,f,m;if(Ng(r)){let x=r.getAttribute("action");c=x?on(x,l):null,a=r.getAttribute("method")||Ho,d=hs(r.getAttribute("enctype"))||Wo,f=new FormData(r)}else if(bg(r)||Cg(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||x.getAttribute("action");if(c=g?on(g,l):null,a=r.getAttribute("formmethod")||x.getAttribute("method")||Ho,d=hs(r.getAttribute("formenctype"))||hs(x.getAttribute("enctype"))||Wo,f=new FormData(x,r),!Rg()){let{name:w,type:C,value:E}=r;if(C==="image"){let P=w?`${w}.`:"";f.append(`${P}x`,"0"),f.append(`${P}y`,"0")}else w&&f.append(w,E)}}else{if(al(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Ho,c=null,d=Wo,m=r}return f&&d==="text/plain"&&(m=f,f=void 0),{action:c,method:a.toLowerCase(),encType:d,formData:f,body:m}}function Ds(r,l){if(r===!1||r===null||typeof r>"u")throw new Error(l)}async function Lg(r,l){if(r.id in l)return l[r.id];try{let a=await import(r.module);return l[r.id]=a,a}catch(a){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zg(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ig(r,l,a){let c=await Promise.all(r.map(async d=>{let f=l.routes[d.route.id];if(f){let m=await Lg(f,a);return m.links?m.links():[]}return[]}));return Mg(c.flat(1).filter(zg).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function np(r,l,a,c,d,f){let m=(g,w)=>a[w]?g.route.id!==a[w].route.id:!0,x=(g,w)=>{var C;return a[w].pathname!==g.pathname||((C=a[w].route.path)==null?void 0:C.endsWith("*"))&&a[w].params["*"]!==g.params["*"]};return f==="assets"?l.filter((g,w)=>m(g,w)||x(g,w)):f==="data"?l.filter((g,w)=>{var E;let C=c.routes[g.route.id];if(!C||!C.hasLoader)return!1;if(m(g,w)||x(g,w))return!0;if(g.route.shouldRevalidate){let P=g.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((E=a[0])==null?void 0:E.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function Ag(r,l,{includeHydrateFallback:a}={}){return Fg(r.map(c=>{let d=l.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),a&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Fg(r){return[...new Set(r)]}function Og(r){let l={},a=Object.keys(r).sort();for(let c of a)l[c]=r[c];return l}function Mg(r,l){let a=new Set;return new Set(l),r.reduce((c,d)=>{let f=JSON.stringify(Og(d));return a.has(f)||(a.add(f),c.push({key:f,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Dg=new Set([100,101,204,205]);function $g(r,l){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname="_root.data":l&&on(a.pathname,l)==="/"?a.pathname=`${l.replace(/\/$/,"")}/_root.data`:a.pathname=`${a.pathname.replace(/\/$/,"")}.data`,a}function Ip(){let r=N.useContext(jr);return Ds(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Bg(){let r=N.useContext(ll);return Ds(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $s=N.createContext(void 0);$s.displayName="FrameworkContext";function Ap(){let r=N.useContext($s);return Ds(r,"You must render this element inside a <HydratedRouter> element"),r}function Ug(r,l){let a=N.useContext($s),[c,d]=N.useState(!1),[f,m]=N.useState(!1),{onFocus:x,onBlur:g,onMouseEnter:w,onMouseLeave:C,onTouchStart:E}=l,P=N.useRef(null);N.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let O=M=>{M.forEach(q=>{m(q.isIntersecting)})},z=new IntersectionObserver(O,{threshold:.5});return P.current&&z.observe(P.current),()=>{z.disconnect()}}},[r]),N.useEffect(()=>{if(c){let O=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(O)}}},[c]);let A=()=>{d(!0)},$=()=>{d(!1),m(!1)};return a?r!=="intent"?[f,P,{}]:[f,P,{onFocus:fi(x,A),onBlur:fi(g,$),onMouseEnter:fi(w,A),onMouseLeave:fi(C,$),onTouchStart:fi(E,A)}]:[!1,P,{}]}function fi(r,l){return a=>{r&&r(a),a.defaultPrevented||l(a)}}function Hg({page:r,...l}){let{router:a}=Ip(),c=N.useMemo(()=>Sp(a.routes,r,a.basename),[a.routes,r,a.basename]);return c?N.createElement(Vg,{page:r,matches:c,...l}):null}function Wg(r){let{manifest:l,routeModules:a}=Ap(),[c,d]=N.useState([]);return N.useEffect(()=>{let f=!1;return Ig(r,l,a).then(m=>{f||d(m)}),()=>{f=!0}},[r,l,a]),c}function Vg({page:r,matches:l,...a}){let c=Ht(),{manifest:d,routeModules:f}=Ap(),{basename:m}=Ip(),{loaderData:x,matches:g}=Bg(),w=N.useMemo(()=>np(r,l,g,d,c,"data"),[r,l,g,d,c]),C=N.useMemo(()=>np(r,l,g,d,c,"assets"),[r,l,g,d,c]),E=N.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let $=new Set,O=!1;if(l.forEach(M=>{var F;let q=d.routes[M.route.id];!q||!q.hasLoader||(!w.some(J=>J.route.id===M.route.id)&&M.route.id in x&&((F=f[M.route.id])!=null&&F.shouldRevalidate)||q.hasClientLoader?O=!0:$.add(M.route.id))}),$.size===0)return[];let z=$g(r,m);return O&&$.size>0&&z.searchParams.set("_routes",l.filter(M=>$.has(M.route.id)).map(M=>M.route.id).join(",")),[z.pathname+z.search]},[m,x,c,d,w,l,r,f]),P=N.useMemo(()=>Ag(C,d),[C,d]),A=Wg(C);return N.createElement(N.Fragment,null,E.map($=>N.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...a})),P.map($=>N.createElement("link",{key:$,rel:"modulepreload",href:$,...a})),A.map(({key:$,link:O})=>N.createElement("link",{key:$,...O})))}function Qg(...r){return l=>{r.forEach(a=>{typeof a=="function"?a(l):a!=null&&(a.current=l)})}}var Fp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fp&&(window.__reactRouterVersion="7.6.0")}catch{}function qg({basename:r,children:l,window:a}){let c=N.useRef();c.current==null&&(c.current=Im({window:a,v5Compat:!0}));let d=c.current,[f,m]=N.useState({action:d.action,location:d.location}),x=N.useCallback(g=>{N.startTransition(()=>m(g))},[m]);return N.useLayoutEffect(()=>d.listen(x),[d,x]),N.createElement(Sg,{basename:r,children:l,location:f.location,navigationType:f.action,navigator:d})}var Op=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sl=N.forwardRef(function({onClick:l,discover:a="render",prefetch:c="none",relative:d,reloadDocument:f,replace:m,state:x,target:g,to:w,preventScrollReset:C,viewTransition:E,...P},A){let{basename:$}=N.useContext(At),O=typeof w=="string"&&Op.test(w),z,M=!1;if(typeof w=="string"&&O&&(z=w,Fp))try{let we=new URL(window.location.href),Fe=w.startsWith("//")?new URL(we.protocol+w):new URL(w),ft=on(Fe.pathname,$);Fe.origin===we.origin&&ft!=null?w=ft+Fe.search+Fe.hash:M=!0}catch{It(!1,`<Link to="${w}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=ag(w,{relative:d}),[F,J,ne]=Ug(c,P),ee=Yg(w,{replace:m,state:x,target:g,preventScrollReset:C,relative:d,viewTransition:E});function Y(we){l&&l(we),we.defaultPrevented||ee(we)}let be=N.createElement("a",{...P,...ne,href:z||q,onClick:M||f?l:Y,ref:Qg(A,J),target:g,"data-discover":!O&&a==="render"?"true":void 0});return F&&!O?N.createElement(N.Fragment,null,be,N.createElement(Hg,{page:q})):be});sl.displayName="Link";var Mp=N.forwardRef(function({"aria-current":l="page",caseSensitive:a=!1,className:c="",end:d=!1,style:f,to:m,viewTransition:x,children:g,...w},C){let E=Ni(m,{relative:w.relative}),P=Ht(),A=N.useContext(ll),{navigator:$,basename:O}=N.useContext(At),z=A!=null&&tv(E)&&x===!0,M=$.encodeLocation?$.encodeLocation(E).pathname:E.pathname,q=P.pathname,F=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;a||(q=q.toLowerCase(),F=F?F.toLowerCase():null,M=M.toLowerCase()),F&&O&&(F=on(F,O)||F);const J=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let ne=q===M||!d&&q.startsWith(M)&&q.charAt(J)==="/",ee=F!=null&&(F===M||!d&&F.startsWith(M)&&F.charAt(M.length)==="/"),Y={isActive:ne,isPending:ee,isTransitioning:z},be=ne?l:void 0,we;typeof c=="function"?we=c(Y):we=[c,ne?"active":null,ee?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof f=="function"?f(Y):f;return N.createElement(sl,{...w,"aria-current":be,className:we,ref:C,style:Fe,to:m,viewTransition:x},typeof g=="function"?g(Y):g)});Mp.displayName="NavLink";var Kg=N.forwardRef(({discover:r="render",fetcherKey:l,navigate:a,reloadDocument:c,replace:d,state:f,method:m=Ho,action:x,onSubmit:g,relative:w,preventScrollReset:C,viewTransition:E,...P},A)=>{let $=Zg(),O=ev(x,{relative:w}),z=m.toLowerCase()==="get"?"get":"post",M=typeof x=="string"&&Op.test(x),q=F=>{if(g&&g(F),F.defaultPrevented)return;F.preventDefault();let J=F.nativeEvent.submitter,ne=(J==null?void 0:J.getAttribute("formmethod"))||m;$(J||F.currentTarget,{fetcherKey:l,method:ne,navigate:a,replace:d,state:f,relative:w,preventScrollReset:C,viewTransition:E})};return N.createElement("form",{ref:A,method:z,action:O,onSubmit:c?g:q,...P,"data-discover":!M&&r==="render"?"true":void 0})});Kg.displayName="Form";function Gg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dp(r){let l=N.useContext(jr);return Ce(l,Gg(r)),l}function Yg(r,{target:l,replace:a,state:c,preventScrollReset:d,relative:f,viewTransition:m}={}){let x=Rp(),g=Ht(),w=Ni(r,{relative:f});return N.useCallback(C=>{if(Pg(C,l)){C.preventDefault();let E=a!==void 0?a:ki(g)===ki(w);x(r,{replace:E,state:c,preventScrollReset:d,relative:f,viewTransition:m})}},[g,x,w,a,c,l,r,d,f,m])}var Jg=0,Xg=()=>`__${String(++Jg)}__`;function Zg(){let{router:r}=Dp("useSubmit"),{basename:l}=N.useContext(At),a=yg();return N.useCallback(async(c,d={})=>{let{action:f,method:m,encType:x,formData:g,body:w}=Tg(c,l);if(d.navigate===!1){let C=d.fetcherKey||Xg();await r.fetch(C,a,d.action||f,{preventScrollReset:d.preventScrollReset,formData:g,body:w,formMethod:d.method||m,formEncType:d.encType||x,flushSync:d.flushSync})}else await r.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:g,body:w,formMethod:d.method||m,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:a,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,l,a])}function ev(r,{relative:l}={}){let{basename:a}=N.useContext(At),c=N.useContext(Ft);Ce(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...Ni(r||".",{relative:l})},m=Ht();if(r==null){f.search=m.search;let x=new URLSearchParams(f.search),g=x.getAll("index");if(g.some(C=>C==="")){x.delete("index"),g.filter(E=>E).forEach(E=>x.append("index",E));let C=x.toString();f.search=C?`?${C}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(f.pathname=f.pathname==="/"?a:rn([a,f.pathname])),ki(f)}function tv(r,l={}){let a=N.useContext(Cp);Ce(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Dp("useViewTransitionState"),d=Ni(r,{relative:l.relative});if(!a.isTransitioning)return!1;let f=on(a.currentLocation.pathname,c)||a.currentLocation.pathname,m=on(a.nextLocation.pathname,c)||a.nextLocation.pathname;return Xo(d.pathname,m)!=null||Xo(d.pathname,f)!=null}[...Dg];var ms={exports:{}},gs,rp;function nv(){if(rp)return gs;rp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return gs=r,gs}var vs,ip;function rv(){if(ip)return vs;ip=1;var r=nv();function l(){}function a(){}return a.resetWarningCache=l,vs=function(){function c(m,x,g,w,C,E){if(E!==r){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}c.isRequired=c;function d(){return c}var f={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:a,resetWarningCache:l};return f.PropTypes=f,f},vs}var op;function iv(){return op||(op=1,ms.exports=rv()()),ms.exports}var ov=iv();const G=kp(ov),$p=N.createContext({isDarkMode:!0,toggleTheme:()=>{}}),lv=()=>N.useContext($p),av="theme",sv=()=>document.documentElement.dataset.theme!=="light",Bp=({children:r})=>{const[l,a]=N.useState(sv);N.useEffect(()=>{const d=l?"dark":"light";document.documentElement.dataset.theme=d;try{window.localStorage.setItem(av,d)}catch{}},[l]);const c=()=>a(d=>!d);return u.jsx($p.Provider,{value:{isDarkMode:l,toggleTheme:c},children:r})};Bp.propTypes={children:G.node.isRequired};var Ye=function(){return Ye=Object.assign||function(l){for(var a,c=1,d=arguments.length;c<d;c++){a=arguments[c];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(l[f]=a[f])}return l},Ye.apply(this,arguments)};function Si(r,l,a){if(a||arguments.length===2)for(var c=0,d=l.length,f;c<d;c++)(f||!(c in l))&&(f||(f=Array.prototype.slice.call(l,0,c)),f[c]=l[c]);return r.concat(f||Array.prototype.slice.call(l))}var je="-ms-",yi="-moz-",me="-webkit-",Up="comm",ul="rule",Bs="decl",uv="@import",Hp="@keyframes",cv="@layer",Wp=Math.abs,Us=String.fromCharCode,bs=Object.assign;function dv(r,l){return $e(r,0)^45?(((l<<2^$e(r,0))<<2^$e(r,1))<<2^$e(r,2))<<2^$e(r,3):0}function Vp(r){return r.trim()}function en(r,l){return(r=l.exec(r))?r[0]:r}function oe(r,l,a){return r.replace(l,a)}function Vo(r,l,a){return r.indexOf(l,a)}function $e(r,l){return r.charCodeAt(l)|0}function vr(r,l,a){return r.slice(l,a)}function Ut(r){return r.length}function Qp(r){return r.length}function gi(r,l){return l.push(r),r}function pv(r,l){return r.map(l).join("")}function lp(r,l){return r.filter(function(a){return!en(a,l)})}var cl=1,yr=1,qp=0,St=0,ze=0,Nr="";function dl(r,l,a,c,d,f,m,x){return{value:r,root:l,parent:a,type:c,props:d,children:f,line:cl,column:yr,length:m,return:"",siblings:x}}function Nn(r,l){return bs(dl("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},l)}function hr(r){for(;r.root;)r=Nn(r.root,{children:[r]});gi(r,r.siblings)}function fv(){return ze}function hv(){return ze=St>0?$e(Nr,--St):0,yr--,ze===10&&(yr=1,cl--),ze}function zt(){return ze=St<qp?$e(Nr,St++):0,yr++,ze===10&&(yr=1,cl++),ze}function Bn(){return $e(Nr,St)}function Qo(){return St}function pl(r,l){return vr(Nr,r,l)}function Ns(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mv(r){return cl=yr=1,qp=Ut(Nr=r),St=0,[]}function gv(r){return Nr="",r}function ys(r){return Vp(pl(St-1,Cs(r===91?r+2:r===40?r+1:r)))}function vv(r){for(;(ze=Bn())&&ze<33;)zt();return Ns(r)>2||Ns(ze)>3?"":" "}function yv(r,l){for(;--l&&zt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return pl(r,Qo()+(l<6&&Bn()==32&&zt()==32))}function Cs(r){for(;zt();)switch(ze){case r:return St;case 34:case 39:r!==34&&r!==39&&Cs(ze);break;case 40:r===41&&Cs(r);break;case 92:zt();break}return St}function xv(r,l){for(;zt()&&r+ze!==57;)if(r+ze===84&&Bn()===47)break;return"/*"+pl(l,St-1)+"*"+Us(r===47?r:zt())}function wv(r){for(;!Ns(Bn());)zt();return pl(r,St)}function kv(r){return gv(qo("",null,null,null,[""],r=mv(r),0,[0],r))}function qo(r,l,a,c,d,f,m,x,g){for(var w=0,C=0,E=m,P=0,A=0,$=0,O=1,z=1,M=1,q=0,F="",J=d,ne=f,ee=c,Y=F;z;)switch($=q,q=zt()){case 40:if($!=108&&$e(Y,E-1)==58){Vo(Y+=oe(ys(q),"&","&\f"),"&\f",Wp(w?x[w-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:Y+=ys(q);break;case 9:case 10:case 13:case 32:Y+=vv($);break;case 92:Y+=yv(Qo()-1,7);continue;case 47:switch(Bn()){case 42:case 47:gi(Sv(xv(zt(),Qo()),l,a,g),g);break;default:Y+="/"}break;case 123*O:x[w++]=Ut(Y)*M;case 125*O:case 59:case 0:switch(q){case 0:case 125:z=0;case 59+C:M==-1&&(Y=oe(Y,/\f/g,"")),A>0&&Ut(Y)-E&&gi(A>32?sp(Y+";",c,a,E-1,g):sp(oe(Y," ","")+";",c,a,E-2,g),g);break;case 59:Y+=";";default:if(gi(ee=ap(Y,l,a,w,C,d,x,F,J=[],ne=[],E,f),f),q===123)if(C===0)qo(Y,l,ee,ee,J,f,E,x,ne);else switch(P===99&&$e(Y,3)===110?100:P){case 100:case 108:case 109:case 115:qo(r,ee,ee,c&&gi(ap(r,ee,ee,0,0,d,x,F,d,J=[],E,ne),ne),d,ne,E,x,c?J:ne);break;default:qo(Y,ee,ee,ee,[""],ne,0,x,ne)}}w=C=A=0,O=M=1,F=Y="",E=m;break;case 58:E=1+Ut(Y),A=$;default:if(O<1){if(q==123)--O;else if(q==125&&O++==0&&hv()==125)continue}switch(Y+=Us(q),q*O){case 38:M=C>0?1:(Y+="\f",-1);break;case 44:x[w++]=(Ut(Y)-1)*M,M=1;break;case 64:Bn()===45&&(Y+=ys(zt())),P=Bn(),C=E=Ut(F=Y+=wv(Qo())),q++;break;case 45:$===45&&Ut(Y)==2&&(O=0)}}return f}function ap(r,l,a,c,d,f,m,x,g,w,C,E){for(var P=d-1,A=d===0?f:[""],$=Qp(A),O=0,z=0,M=0;O<c;++O)for(var q=0,F=vr(r,P+1,P=Wp(z=m[O])),J=r;q<$;++q)(J=Vp(z>0?A[q]+" "+F:oe(F,/&\f/g,A[q])))&&(g[M++]=J);return dl(r,l,a,d===0?ul:x,g,w,C,E)}function Sv(r,l,a,c){return dl(r,l,a,Up,Us(fv()),vr(r,2,-2),0,c)}function sp(r,l,a,c,d){return dl(r,l,a,Bs,vr(r,0,c),vr(r,c+1,-1),c,d)}function Kp(r,l,a){switch(dv(r,l)){case 5103:return me+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+r+r;case 4789:return yi+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return me+r+yi+r+je+r+r;case 5936:switch($e(r,l+11)){case 114:return me+r+je+oe(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return me+r+je+oe(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return me+r+je+oe(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return me+r+je+r+r;case 6165:return me+r+je+"flex-"+r+r;case 5187:return me+r+oe(r,/(\w+).+(:[^]+)/,me+"box-$1$2"+je+"flex-$1$2")+r;case 5443:return me+r+je+"flex-item-"+oe(r,/flex-|-self/g,"")+(en(r,/flex-|baseline/)?"":je+"grid-row-"+oe(r,/flex-|-self/g,""))+r;case 4675:return me+r+je+"flex-line-pack"+oe(r,/align-content|flex-|-self/g,"")+r;case 5548:return me+r+je+oe(r,"shrink","negative")+r;case 5292:return me+r+je+oe(r,"basis","preferred-size")+r;case 6060:return me+"box-"+oe(r,"-grow","")+me+r+je+oe(r,"grow","positive")+r;case 4554:return me+oe(r,/([^-])(transform)/g,"$1"+me+"$2")+r;case 6187:return oe(oe(oe(r,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),r,"")+r;case 5495:case 3959:return oe(r,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return oe(oe(r,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+r+r;case 4200:if(!en(r,/flex-|baseline/))return je+"grid-column-align"+vr(r,l)+r;break;case 2592:case 3360:return je+oe(r,"template-","")+r;case 4384:case 3616:return a&&a.some(function(c,d){return l=d,en(c.props,/grid-\w+-end/)})?~Vo(r+(a=a[l].value),"span",0)?r:je+oe(r,"-start","")+r+je+"grid-row-span:"+(~Vo(a,"span",0)?en(a,/\d+/):+en(a,/\d+/)-+en(r,/\d+/))+";":je+oe(r,"-start","")+r;case 4896:case 4128:return a&&a.some(function(c){return en(c.props,/grid-\w+-start/)})?r:je+oe(oe(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return oe(r,/(.+)-inline(.+)/,me+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(r)-1-l>6)switch($e(r,l+1)){case 109:if($e(r,l+4)!==45)break;case 102:return oe(r,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+yi+($e(r,l+3)==108?"$3":"$2-$3"))+r;case 115:return~Vo(r,"stretch",0)?Kp(oe(r,"stretch","fill-available"),l,a)+r:r}break;case 5152:case 5920:return oe(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,f,m,x,g,w){return je+d+":"+f+w+(m?je+d+"-span:"+(x?g:+g-+f)+w:"")+r});case 4949:if($e(r,l+6)===121)return oe(r,":",":"+me)+r;break;case 6444:switch($e(r,$e(r,14)===45?18:11)){case 120:return oe(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+($e(r,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+je+"$2box$3")+r;case 100:return oe(r,":",":"+je)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(r,"scroll-","scroll-snap-")+r}return r}function Zo(r,l){for(var a="",c=0;c<r.length;c++)a+=l(r[c],c,r,l)||"";return a}function jv(r,l,a,c){switch(r.type){case cv:if(r.children.length)break;case uv:case Bs:return r.return=r.return||r.value;case Up:return"";case Hp:return r.return=r.value+"{"+Zo(r.children,c)+"}";case ul:if(!Ut(r.value=r.props.join(",")))return""}return Ut(a=Zo(r.children,c))?r.return=r.value+"{"+a+"}":""}function bv(r){var l=Qp(r);return function(a,c,d,f){for(var m="",x=0;x<l;x++)m+=r[x](a,c,d,f)||"";return m}}function Nv(r){return function(l){l.root||(l=l.return)&&r(l)}}function Cv(r,l,a,c){if(r.length>-1&&!r.return)switch(r.type){case Bs:r.return=Kp(r.value,r.length,a);return;case Hp:return Zo([Nn(r,{value:oe(r.value,"@","@"+me)})],c);case ul:if(r.length)return pv(a=r.props,function(d){switch(en(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hr(Nn(r,{props:[oe(d,/:(read-\w+)/,":"+yi+"$1")]})),hr(Nn(r,{props:[d]})),bs(r,{props:lp(a,c)});break;case"::placeholder":hr(Nn(r,{props:[oe(d,/:(plac\w+)/,":"+me+"input-$1")]})),hr(Nn(r,{props:[oe(d,/:(plac\w+)/,":"+yi+"$1")]})),hr(Nn(r,{props:[oe(d,/:(plac\w+)/,je+"input-$1")]})),hr(Nn(r,{props:[d]})),bs(r,{props:lp(a,c)});break}return""})}}var Ev={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pt={},xr=typeof process<"u"&&pt!==void 0&&(pt.REACT_APP_SC_ATTR||pt.SC_ATTR)||"data-styled",Gp="active",Yp="data-styled-version",fl="6.1.14",Hs=`/*!sc*/
`,el=typeof window<"u"&&"HTMLElement"in window,Pv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pt!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==""?pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&pt!==void 0&&pt.SC_DISABLE_SPEEDY!==void 0&&pt.SC_DISABLE_SPEEDY!==""&&pt.SC_DISABLE_SPEEDY!=="false"&&pt.SC_DISABLE_SPEEDY),Rv={},hl=Object.freeze([]),wr=Object.freeze({});function Jp(r,l,a){return a===void 0&&(a=wr),r.theme!==a.theme&&r.theme||l||a.theme}var Xp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_v=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tv=/(^-|-$)/g;function up(r){return r.replace(_v,"-").replace(Tv,"")}var Lv=/(a)(d)/gi,$o=52,cp=function(r){return String.fromCharCode(r+(r>25?39:97))};function Es(r){var l,a="";for(l=Math.abs(r);l>$o;l=l/$o|0)a=cp(l%$o)+a;return(cp(l%$o)+a).replace(Lv,"$1-$2")}var xs,Zp=5381,gr=function(r,l){for(var a=l.length;a;)r=33*r^l.charCodeAt(--a);return r},ef=function(r){return gr(Zp,r)};function tf(r){return Es(ef(r)>>>0)}function zv(r){return r.displayName||r.name||"Component"}function ws(r){return typeof r=="string"&&!0}var nf=typeof Symbol=="function"&&Symbol.for,rf=nf?Symbol.for("react.memo"):60115,Iv=nf?Symbol.for("react.forward_ref"):60112,Av={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},of={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ov=((xs={})[Iv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xs[rf]=of,xs);function dp(r){return("type"in(l=r)&&l.type.$$typeof)===rf?of:"$$typeof"in r?Ov[r.$$typeof]:Av;var l}var Mv=Object.defineProperty,Dv=Object.getOwnPropertyNames,pp=Object.getOwnPropertySymbols,$v=Object.getOwnPropertyDescriptor,Bv=Object.getPrototypeOf,fp=Object.prototype;function lf(r,l,a){if(typeof l!="string"){if(fp){var c=Bv(l);c&&c!==fp&&lf(r,c,a)}var d=Dv(l);pp&&(d=d.concat(pp(l)));for(var f=dp(r),m=dp(l),x=0;x<d.length;++x){var g=d[x];if(!(g in Fv||a&&a[g]||m&&g in m||f&&g in f)){var w=$v(l,g);try{Mv(r,g,w)}catch{}}}}return r}function kr(r){return typeof r=="function"}function Ws(r){return typeof r=="object"&&"styledComponentId"in r}function $n(r,l){return r&&l?"".concat(r," ").concat(l):r||l||""}function Ps(r,l){if(r.length===0)return"";for(var a=r[0],c=1;c<r.length;c++)a+=r[c];return a}function ji(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Rs(r,l,a){if(a===void 0&&(a=!1),!a&&!ji(r)&&!Array.isArray(r))return l;if(Array.isArray(l))for(var c=0;c<l.length;c++)r[c]=Rs(r[c],l[c]);else if(ji(l))for(var c in l)r[c]=Rs(r[c],l[c]);return r}function Vs(r,l){Object.defineProperty(r,"toString",{value:l})}function Ci(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var Uv=function(){function r(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}return r.prototype.indexOfGroup=function(l){for(var a=0,c=0;c<l;c++)a+=this.groupSizes[c];return a},r.prototype.insertRules=function(l,a){if(l>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,f=d;l>=f;)if((f<<=1)<0)throw Ci(16,"".concat(l));this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(var m=d;m<f;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(l+1),g=(m=0,a.length);m<g;m++)this.tag.insertRule(x,a[m])&&(this.groupSizes[l]++,x++)},r.prototype.clearGroup=function(l){if(l<this.length){var a=this.groupSizes[l],c=this.indexOfGroup(l),d=c+a;this.groupSizes[l]=0;for(var f=c;f<d;f++)this.tag.deleteRule(c)}},r.prototype.getGroup=function(l){var a="";if(l>=this.length||this.groupSizes[l]===0)return a;for(var c=this.groupSizes[l],d=this.indexOfGroup(l),f=d+c,m=d;m<f;m++)a+="".concat(this.tag.getRule(m)).concat(Hs);return a},r}(),Ko=new Map,tl=new Map,Go=1,Bo=function(r){if(Ko.has(r))return Ko.get(r);for(;tl.has(Go);)Go++;var l=Go++;return Ko.set(r,l),tl.set(l,r),l},Hv=function(r,l){Go=l+1,Ko.set(r,l),tl.set(l,r)},Wv="style[".concat(xr,"][").concat(Yp,'="').concat(fl,'"]'),Vv=new RegExp("^".concat(xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qv=function(r,l,a){for(var c,d=a.split(","),f=0,m=d.length;f<m;f++)(c=d[f])&&r.registerName(l,c)},qv=function(r,l){for(var a,c=((a=l.textContent)!==null&&a!==void 0?a:"").split(Hs),d=[],f=0,m=c.length;f<m;f++){var x=c[f].trim();if(x){var g=x.match(Vv);if(g){var w=0|parseInt(g[1],10),C=g[2];w!==0&&(Hv(C,w),Qv(r,C,g[3]),r.getTag().insertRules(w,d)),d.length=0}else d.push(x)}}},hp=function(r){for(var l=document.querySelectorAll(Wv),a=0,c=l.length;a<c;a++){var d=l[a];d&&d.getAttribute(xr)!==Gp&&(qv(r,d),d.parentNode&&d.parentNode.removeChild(d))}};function Kv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var af=function(r){var l=document.head,a=r||l,c=document.createElement("style"),d=function(x){var g=Array.from(x.querySelectorAll("style[".concat(xr,"]")));return g[g.length-1]}(a),f=d!==void 0?d.nextSibling:null;c.setAttribute(xr,Gp),c.setAttribute(Yp,fl);var m=Kv();return m&&c.setAttribute("nonce",m),a.insertBefore(c,f),c},Gv=function(){function r(l){this.element=af(l),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var c=document.styleSheets,d=0,f=c.length;d<f;d++){var m=c[d];if(m.ownerNode===a)return m}throw Ci(17)}(this.element),this.length=0}return r.prototype.insertRule=function(l,a){try{return this.sheet.insertRule(a,l),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},r.prototype.getRule=function(l){var a=this.sheet.cssRules[l];return a&&a.cssText?a.cssText:""},r}(),Yv=function(){function r(l){this.element=af(l),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(l,a){if(l<=this.length&&l>=0){var c=document.createTextNode(a);return this.element.insertBefore(c,this.nodes[l]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},r.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},r}(),Jv=function(){function r(l){this.rules=[],this.length=0}return r.prototype.insertRule=function(l,a){return l<=this.length&&(this.rules.splice(l,0,a),this.length++,!0)},r.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},r.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},r}(),mp=el,Xv={isServer:!el,useCSSOMInjection:!Pv},nl=function(){function r(l,a,c){l===void 0&&(l=wr),a===void 0&&(a={});var d=this;this.options=Ye(Ye({},Xv),l),this.gs=a,this.names=new Map(c),this.server=!!l.isServer,!this.server&&el&&mp&&(mp=!1,hp(this)),Vs(this,function(){return function(f){for(var m=f.getTag(),x=m.length,g="",w=function(E){var P=function(M){return tl.get(M)}(E);if(P===void 0)return"continue";var A=f.names.get(P),$=m.getGroup(E);if(A===void 0||!A.size||$.length===0)return"continue";var O="".concat(xr,".g").concat(E,'[id="').concat(P,'"]'),z="";A!==void 0&&A.forEach(function(M){M.length>0&&(z+="".concat(M,","))}),g+="".concat($).concat(O,'{content:"').concat(z,'"}').concat(Hs)},C=0;C<x;C++)w(C);return g}(d)})}return r.registerId=function(l){return Bo(l)},r.prototype.rehydrate=function(){!this.server&&el&&hp(this)},r.prototype.reconstructWithOptions=function(l,a){return a===void 0&&(a=!0),new r(Ye(Ye({},this.options),l),this.gs,a&&this.names||void 0)},r.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(l=function(a){var c=a.useCSSOMInjection,d=a.target;return a.isServer?new Jv(d):c?new Gv(d):new Yv(d)}(this.options),new Uv(l)));var l},r.prototype.hasNameForId=function(l,a){return this.names.has(l)&&this.names.get(l).has(a)},r.prototype.registerName=function(l,a){if(Bo(l),this.names.has(l))this.names.get(l).add(a);else{var c=new Set;c.add(a),this.names.set(l,c)}},r.prototype.insertRules=function(l,a,c){this.registerName(l,a),this.getTag().insertRules(Bo(l),c)},r.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},r.prototype.clearRules=function(l){this.getTag().clearGroup(Bo(l)),this.clearNames(l)},r.prototype.clearTag=function(){this.tag=void 0},r}(),Zv=/&/g,ey=/^\s*\/\/.*$/gm;function sf(r,l){return r.map(function(a){return a.type==="rule"&&(a.value="".concat(l," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(l," ")),a.props=a.props.map(function(c){return"".concat(l," ").concat(c)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=sf(a.children,l)),a})}function ty(r){var l,a,c,d=wr,f=d.options,m=f===void 0?wr:f,x=d.plugins,g=x===void 0?hl:x,w=function(P,A,$){return $.startsWith(a)&&$.endsWith(a)&&$.replaceAll(a,"").length>0?".".concat(l):P},C=g.slice();C.push(function(P){P.type===ul&&P.value.includes("&")&&(P.props[0]=P.props[0].replace(Zv,a).replace(c,w))}),m.prefix&&C.push(Cv),C.push(jv);var E=function(P,A,$,O){A===void 0&&(A=""),$===void 0&&($=""),O===void 0&&(O="&"),l=O,a=A,c=new RegExp("\\".concat(a,"\\b"),"g");var z=P.replace(ey,""),M=kv($||A?"".concat($," ").concat(A," { ").concat(z," }"):z);m.namespace&&(M=sf(M,m.namespace));var q=[];return Zo(M,bv(C.concat(Nv(function(F){return q.push(F)})))),q};return E.hash=g.length?g.reduce(function(P,A){return A.name||Ci(15),gr(P,A.name)},Zp).toString():"",E}var ny=new nl,_s=ty(),uf=tn.createContext({shouldForwardProp:void 0,styleSheet:ny,stylis:_s});uf.Consumer;tn.createContext(void 0);function Ts(){return N.useContext(uf)}var ry=function(){function r(l,a){var c=this;this.inject=function(d,f){f===void 0&&(f=_s);var m=c.name+f.hash;d.hasNameForId(c.id,m)||d.insertRules(c.id,m,f(c.rules,m,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=a,Vs(this,function(){throw Ci(12,String(c.name))})}return r.prototype.getName=function(l){return l===void 0&&(l=_s),this.name+l.hash},r}(),iy=function(r){return r>="A"&&r<="Z"};function gp(r){for(var l="",a=0;a<r.length;a++){var c=r[a];if(a===1&&c==="-"&&r[0]==="-")return r;iy(c)?l+="-"+c.toLowerCase():l+=c}return l.startsWith("ms-")?"-"+l:l}var cf=function(r){return r==null||r===!1||r===""},df=function(r){var l,a,c=[];for(var d in r){var f=r[d];r.hasOwnProperty(d)&&!cf(f)&&(Array.isArray(f)&&f.isCss||kr(f)?c.push("".concat(gp(d),":"),f,";"):ji(f)?c.push.apply(c,Si(Si(["".concat(d," {")],df(f),!1),["}"],!1)):c.push("".concat(gp(d),": ").concat((l=d,(a=f)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||l in Ev||l.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return c};function Cn(r,l,a,c){if(cf(r))return[];if(Ws(r))return[".".concat(r.styledComponentId)];if(kr(r)){if(!kr(f=r)||f.prototype&&f.prototype.isReactComponent||!l)return[r];var d=r(l);return Cn(d,l,a,c)}var f;return r instanceof ry?a?(r.inject(a,c),[r.getName(c)]):[r]:ji(r)?df(r):Array.isArray(r)?Array.prototype.concat.apply(hl,r.map(function(m){return Cn(m,l,a,c)})):[r.toString()]}function pf(r){for(var l=0;l<r.length;l+=1){var a=r[l];if(kr(a)&&!Ws(a))return!1}return!0}var oy=ef(fl),ly=function(){function r(l,a,c){this.rules=l,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&pf(l),this.componentId=a,this.baseHash=gr(oy,a),this.baseStyle=c,nl.registerId(a)}return r.prototype.generateAndInjectStyles=function(l,a,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,a,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))d=$n(d,this.staticRulesId);else{var f=Ps(Cn(this.rules,l,a,c)),m=Es(gr(this.baseHash,f)>>>0);if(!a.hasNameForId(this.componentId,m)){var x=c(f,".".concat(m),void 0,this.componentId);a.insertRules(this.componentId,m,x)}d=$n(d,m),this.staticRulesId=m}else{for(var g=gr(this.baseHash,c.hash),w="",C=0;C<this.rules.length;C++){var E=this.rules[C];if(typeof E=="string")w+=E;else if(E){var P=Ps(Cn(E,l,a,c));g=gr(g,P+C),w+=P}}if(w){var A=Es(g>>>0);a.hasNameForId(this.componentId,A)||a.insertRules(this.componentId,A,c(w,".".concat(A),void 0,this.componentId)),d=$n(d,A)}}return d},r}(),Qs=tn.createContext(void 0);Qs.Consumer;var ks={};function ay(r,l,a){var c=Ws(r),d=r,f=!ws(r),m=l.attrs,x=m===void 0?hl:m,g=l.componentId,w=g===void 0?function(J,ne){var ee=typeof J!="string"?"sc":up(J);ks[ee]=(ks[ee]||0)+1;var Y="".concat(ee,"-").concat(tf(fl+ee+ks[ee]));return ne?"".concat(ne,"-").concat(Y):Y}(l.displayName,l.parentComponentId):g,C=l.displayName,E=C===void 0?function(J){return ws(J)?"styled.".concat(J):"Styled(".concat(zv(J),")")}(r):C,P=l.displayName&&l.componentId?"".concat(up(l.displayName),"-").concat(l.componentId):l.componentId||w,A=c&&d.attrs?d.attrs.concat(x).filter(Boolean):x,$=l.shouldForwardProp;if(c&&d.shouldForwardProp){var O=d.shouldForwardProp;if(l.shouldForwardProp){var z=l.shouldForwardProp;$=function(J,ne){return O(J,ne)&&z(J,ne)}}else $=O}var M=new ly(a,P,c?d.componentStyle:void 0);function q(J,ne){return function(ee,Y,be){var we=ee.attrs,Fe=ee.componentStyle,ft=ee.defaultProps,ht=ee.foldedComponentIds,Je=ee.styledComponentId,at=ee.target,mt=tn.useContext(Qs),Ve=Ts(),ve=ee.shouldForwardProp||Ve.shouldForwardProp,D=Jp(Y,mt,ft)||wr,K=function(se,le,he){for(var ue,pe=Ye(Ye({},le),{className:void 0,theme:he}),Be=0;Be<se.length;Be+=1){var Wt=kr(ue=se[Be])?ue(pe):ue;for(var jt in Wt)pe[jt]=jt==="className"?$n(pe[jt],Wt[jt]):jt==="style"?Ye(Ye({},pe[jt]),Wt[jt]):Wt[jt]}return le.className&&(pe.className=$n(pe.className,le.className)),pe}(we,Y,D),B=K.as||at,k={};for(var R in K)K[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&K.theme===D||(R==="forwardedAs"?k.as=K.forwardedAs:ve&&!ve(R,B)||(k[R]=K[R]));var re=function(se,le){var he=Ts(),ue=se.generateAndInjectStyles(le,he.styleSheet,he.stylis);return ue}(Fe,K),ie=$n(ht,Je);return re&&(ie+=" "+re),K.className&&(ie+=" "+K.className),k[ws(B)&&!Xp.has(B)?"class":"className"]=ie,be&&(k.ref=be),N.createElement(B,k)}(F,J,ne)}q.displayName=E;var F=tn.forwardRef(q);return F.attrs=A,F.componentStyle=M,F.displayName=E,F.shouldForwardProp=$,F.foldedComponentIds=c?$n(d.foldedComponentIds,d.styledComponentId):"",F.styledComponentId=P,F.target=c?d.target:r,Object.defineProperty(F,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=c?function(ne){for(var ee=[],Y=1;Y<arguments.length;Y++)ee[Y-1]=arguments[Y];for(var be=0,we=ee;be<we.length;be++)Rs(ne,we[be],!0);return ne}({},d.defaultProps,J):J}}),Vs(F,function(){return".".concat(F.styledComponentId)}),f&&lf(F,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),F}function vp(r,l){for(var a=[r[0]],c=0,d=l.length;c<d;c+=1)a.push(l[c],r[c+1]);return a}var yp=function(r){return Object.assign(r,{isCss:!0})};function rl(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];if(kr(r)||ji(r))return yp(Cn(vp(hl,Si([r],l,!0))));var c=r;return l.length===0&&c.length===1&&typeof c[0]=="string"?Cn(c):yp(Cn(vp(c,l)))}function Ls(r,l,a){if(a===void 0&&(a=wr),!l)throw Ci(1,l);var c=function(d){for(var f=[],m=1;m<arguments.length;m++)f[m-1]=arguments[m];return r(l,a,rl.apply(void 0,Si([d],f,!1)))};return c.attrs=function(d){return Ls(r,l,Ye(Ye({},a),{attrs:Array.prototype.concat(a.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return Ls(r,l,Ye(Ye({},a),d))},c}var ff=function(r){return Ls(ay,r)},ce=ff;Xp.forEach(function(r){ce[r]=ff(r)});var sy=function(){function r(l,a){this.rules=l,this.componentId=a,this.isStatic=pf(l),nl.registerId(this.componentId+1)}return r.prototype.createStyles=function(l,a,c,d){var f=d(Ps(Cn(this.rules,a,c,d)),""),m=this.componentId+l;c.insertRules(m,m,f)},r.prototype.removeStyles=function(l,a){a.clearRules(this.componentId+l)},r.prototype.renderStyles=function(l,a,c,d){l>2&&nl.registerId(this.componentId+l),this.removeStyles(l,c),this.createStyles(l,a,c,d)},r}();function uy(r){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];var c=rl.apply(void 0,Si([r],l,!1)),d="sc-global-".concat(tf(JSON.stringify(c))),f=new sy(c,d),m=function(g){var w=Ts(),C=tn.useContext(Qs),E=tn.useRef(w.styleSheet.allocateGSInstance(d)).current;return w.styleSheet.server&&x(E,g,w.styleSheet,C,w.stylis),tn.useLayoutEffect(function(){if(!w.styleSheet.server)return x(E,g,w.styleSheet,C,w.stylis),function(){return f.removeStyles(E,w.styleSheet)}},[E,g,w.styleSheet,C,w.stylis]),null};function x(g,w,C,E,P){if(f.isStatic)f.renderStyles(g,Rv,C,P);else{var A=Ye(Ye({},w),{theme:Jp(w,E,m.defaultProps)});f.renderStyles(g,A,C,P)}}return tn.memo(m)}const cy=uy`
  :root,
  :root[data-theme='dark'] {
    color-scheme: dark;
    --bg: #0f0f0d;
    --bg-raised: #181815;
    --ink: #ecebe6;
    --ink-muted: #a09d95;
    --ink-faint: #83807a;
    --rule: #2b2a26;
    --rule-strong: #46443f;
    --accent: #ff5a1f;
    --on-accent: #0f0f0d;
  }

  :root[data-theme='light'] {
    color-scheme: light;
    --bg: #f2f0ea;
    --bg-raised: #e8e5dc;
    --ink: #151513;
    --ink-muted: #58554f;
    --ink-faint: #6e6a62;
    --rule: #d8d4ca;
    --rule-strong: #b2ada2;
    --accent: #c73c0b;
    --on-accent: #f2f0ea;
  }

  :root {
    --font-sans: 'Archivo Variable', 'Archivo', system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace;
    --gutter: 16px;
    --header-h: 56px;
    --max: 1280px;
    --cell: 24px; /* inner padding beside a vertical rule */
  }

  @media (min-width: 768px) {
    :root {
      --gutter: 32px;
    }
  }

  @media (min-width: 1024px) {
    :root {
      --cell: 32px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-h) + 16px);
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  ::selection {
    background: var(--accent);
    color: var(--on-accent);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Page frame: content column with hairline rules either side on wide screens. */
  .container {
    width: 100%;
    max-width: var(--max);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  @media (min-width: 1024px) {
    .container {
      border-inline: 1px solid var(--rule);
    }
  }

  /* Vertical breathing room between sections that keeps the frame rules unbroken. */
  .section::before {
    content: '';
    display: block;
    height: var(--section-gap, 96px);
    max-width: var(--max);
    margin-inline: auto;
  }

  @media (min-width: 1024px) {
    .section::before {
      border-inline: 1px solid var(--rule);
    }
  }

  @media (max-width: 767px) {
    .section {
      --section-gap: 48px;
    }
  }

  /* Shared 12-column grid, so vertical rules line up from section to section.
     The main text column starts at column 4 (the 25% line) on every page.
     Children set --span (and optionally --start); below 640px everything stacks.
     Wrapped in :where() so these defaults have zero specificity: any page or component
     rule overrides them regardless of the order styles are injected (it differs in dev). */
  :where(.grid-12) {
    --span: 12;
    --start: auto;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  :where(.grid-12) > :where(*) {
    grid-column: var(--start) / span var(--span);
    min-width: 0;
  }

  /* A cell that opens with a vertical rule. */
  :where(.grid-12) > :where(.ruled) {
    border-left: 1px solid var(--rule);
    padding-left: var(--cell);
  }

  :where(.grid-12) > :where(.pad-r) {
    padding-right: var(--cell);
  }

  @media (max-width: 639px) {
    :where(.grid-12) {
      grid-template-columns: minmax(0, 1fr);
    }

    :where(.grid-12) > :where(*) {
      grid-column: 1 / -1;
    }

    :where(.grid-12) > :where(.ruled) {
      border-left: 0;
      padding-left: 0;
    }

    :where(.grid-12) > :where(.pad-r) {
      padding-right: 0;
    }
  }

  @media (max-width: 639px) {
    .hide-phone {
      display: none !important;
    }
  }

  @media (min-width: 640px) {
    .phone-only {
      display: none !important;
    }
  }

  /* Small monospace caption used for indices, metadata and form labels. */
  .label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.4;
    color: var(--ink-muted);
  }

  /* Photos sit in greyscale with the rest of the page and reveal colour on hover.
     Touch devices (no hover) always get full colour. */
  @media (hover: hover) {
    .photo img {
      filter: grayscale(1) contrast(1.05);
      transition: filter 0.3s ease;
    }

    .photo:hover img {
      filter: none;
    }
  }

  /* Underlined inline text link. */
  .text-link {
    text-decoration: underline;
    text-decoration-color: var(--rule-strong);
    text-underline-offset: 0.2em;
    transition: color 0.15s ease, text-decoration-color 0.15s ease;

    &:hover {
      color: var(--accent);
      text-decoration-color: var(--accent);
    }
  }

  /* On touch screens, give inline text links a finger-sized hit area without changing the layout much. */
  @media (pointer: coarse), (max-width: 767px) {
    .text-link {
      display: inline-block;
      padding-block: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`,dy=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/projects",label:"Projects"},{to:"/notes",label:"Notes"},{to:"/contact",label:"Contact"}],py=ce.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--rule);

  .bar {
    display: flex;
    align-items: center;
    gap: 24px;
    height: var(--header-h);
  }

  .brand {
    display: inline-flex;
    padding-block: 12px;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: var(--accent);
    }
  }

  nav {
    margin-left: auto;
  }

  nav ul {
    display: flex;
  }

  nav a,
  .control {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-muted);
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover {
      color: var(--ink);
    }
  }

  nav .num {
    color: var(--ink-faint);
  }

  nav a.active {
    color: var(--ink);

    .num {
      color: var(--accent);
    }
  }

  .control {
    border: 1px solid var(--rule-strong);

    &:hover {
      border-color: var(--ink);
    }
  }

  .swatch {
    width: 8px;
    height: 8px;
    border: 1px solid currentColor;
    background: linear-gradient(90deg, currentColor 50%, transparent 50%);
  }

  .menu-toggle,
  .menu-theme {
    display: none;
  }

  @media (max-width: 767px) {
    .menu-toggle {
      display: inline-flex;
    }

    .bar {
      gap: 8px;
    }

    /* On phones the theme switch lives in the menu panel instead of the bar. */
    .bar > .theme {
      display: none;
    }

    .menu-toggle {
      margin-left: auto;
    }

    .menu-theme {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--gutter);

      .control {
        min-height: 44px;
        padding-inline: 16px;
      }
    }

    nav {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: calc(100dvh - var(--header-h));
      overflow-y: auto;
      display: none;
      background: var(--bg);
      border-bottom: 1px solid var(--rule);
    }

    nav.open {
      display: block;
    }

    nav ul {
      flex-direction: column;
      padding: 8px var(--gutter) 24px;
    }

    nav a {
      width: 100%;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid var(--rule);
      font-family: var(--font-sans);
      font-size: 1.75rem;
      font-stretch: 112%;
      letter-spacing: -0.02em;
      text-transform: none;
      color: var(--ink);
    }

    nav .num {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      letter-spacing: 0.08em;
    }
  }
`;function fy(){const[r,l]=N.useState(!1),{isDarkMode:a,toggleTheme:c}=lv(),{pathname:d}=Ht();N.useEffect(()=>l(!1),[d]);const f=u.jsxs("button",{type:"button",className:"control theme",onClick:c,"aria-label":a?"Switch to light theme":"Switch to dark theme",children:[u.jsx("span",{className:"swatch","aria-hidden":"true"}),a?"Dark":"Light"]});return u.jsx(py,{children:u.jsxs("div",{className:"container bar",children:[u.jsx(sl,{to:"/",className:"brand",children:"Michael Hills"}),u.jsxs("nav",{id:"site-nav",className:r?"open":void 0,"aria-label":"Main",children:[u.jsx("ul",{children:dy.map(({to:m,label:x},g)=>u.jsx("li",{children:u.jsxs(Mp,{to:m,end:m==="/",children:[u.jsx("span",{className:"num",children:String(g).padStart(2,"0")}),x]})},m))}),u.jsxs("div",{className:"menu-theme",children:[u.jsx("span",{className:"label",children:"Theme"}),f]})]}),f,u.jsx("button",{type:"button",className:"control menu-toggle",onClick:()=>l(m=>!m),"aria-expanded":r,"aria-controls":"site-nav",children:r?"Close":"Menu"})]})})}function xe({href:r,children:l,...a}){if(r.startsWith("/")&&!a.download)return u.jsx(sl,{to:r,...a,children:l});const c=/^https?:/.test(r)?{target:"_blank",rel:"noreferrer"}:{};return u.jsx("a",{href:r,...c,...a,children:l})}xe.propTypes={href:G.string.isRequired,children:G.node.isRequired,download:G.bool};const Tt={email:"mjhills1@btinternet.com",location:"London, United Kingdom",mapUrl:"https://www.google.com/maps/place/London/@51.5286416,-0.1015987,11z"},qs=[{label:"LinkedIn",url:"https://www.linkedin.com/in/michaeljhills1/"},{label:"GitHub",url:"https://github.com/Michael-Hills"}],hf="/Personal-Portfolio/Michael-Hills-CV.pdf",hy=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Projects",href:"/projects"},{label:"Notes",href:"/notes"},{label:"Contact",href:"/contact"}],my=[{label:Tt.email,href:`mailto:${Tt.email}`},{label:"London, UK",href:Tt.mapUrl}],gy=ce.footer.attrs({className:"section"})`
  .ruled {
    border-top: 1px solid var(--rule);
  }

  .cols {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .col {
    grid-column: span 3;
    padding: 32px var(--cell) 48px 0;

    & + .col {
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);
    }

    &:last-child {
      padding-right: 0;
    }
  }

  .name {
    font-size: 1.5rem;
    font-weight: 600;
    font-stretch: 118%;
    letter-spacing: -0.02em;
  }

  .tagline {
    margin-top: 8px;
    max-width: 32ch;
    color: var(--ink-muted);
    font-size: 0.9375rem;
  }

  h2 {
    margin-bottom: 16px;
  }

  li + li {
    margin-top: 6px;
  }

  @media (pointer: coarse), (max-width: 767px) {
    li + li {
      margin-top: 0;
    }
  }

  .col a {
    font-size: 0.9375rem;
    overflow-wrap: anywhere;
  }

  .colophon {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;
    padding-block: 16px;
    border-top: 1px solid var(--rule);

    .back-to-top {
      margin-left: auto;
    }
  }

  @media (max-width: 899px) {
    .cols {
      grid-template-columns: 1fr 1fr;
    }

    .col {
      grid-column: auto;
      padding-right: 0;
    }

    .col:first-child {
      grid-column: 1 / -1;
      border-bottom: 1px solid var(--rule);
    }

    .col + .col {
      padding-left: 0;
      border-left: 0;
    }

    .col:last-child {
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);
    }

    .col:nth-child(3) {
      grid-column: 1 / -1;
      order: 3;
      border-top: 1px solid var(--rule);
    }
  }

  /* Phones: one short strip. The Contact section above already gives the email. */
  @media (max-width: 639px) {
    .cols {
      grid-template-columns: 1fr;
      padding-block: 20px 8px;
    }

    .col,
    .col:last-child {
      grid-column: 1 / -1;
      order: 0;
      padding: 0;
      border: 0;
    }

    .col.intro,
    .col.contact-col,
    .col h2 {
      display: none;
    }

    .col ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
    }

    .col li + li {
      margin-top: 0;
    }

    .colophon .set-in {
      display: none;
    }
  }
`;function Yo({title:r,links:l,className:a}){return u.jsxs("div",{className:a?`col ${a}`:"col",children:[u.jsx("h2",{className:"label",children:r}),u.jsx("ul",{children:l.map(({label:c,href:d})=>u.jsx("li",{children:u.jsx(xe,{href:d,className:"text-link",children:c})},d))})]})}Yo.propTypes={title:G.string.isRequired,className:G.string,links:G.arrayOf(G.shape({label:G.string.isRequired,href:G.string.isRequired})).isRequired};function vy(){return u.jsxs(gy,{children:[u.jsx("div",{className:"ruled",children:u.jsxs("div",{className:"container cols",children:[u.jsxs("div",{className:"col intro",children:[u.jsx("p",{className:"name",children:"Michael Hills"}),u.jsx("p",{className:"tagline",children:"Backend engineer building and running systems in production. Based in London."})]}),u.jsx(Yo,{title:"Sitemap",links:hy}),u.jsx(Yo,{title:"Contact",links:my,className:"contact-col"}),u.jsx(Yo,{title:"Elsewhere",links:qs.map(({label:r,url:l})=>({label:r,href:l}))})]})}),u.jsxs("div",{className:"container colophon",children:[u.jsxs("span",{className:"label",children:["© ",new Date().getFullYear()," Michael Hills"]}),u.jsxs("span",{className:"label set-in",children:["Built with React and Vite, hosted on GitHub Pages."," ",u.jsx(xe,{href:"https://github.com/Michael-Hills/Personal-Portfolio",className:"text-link",children:"Source ↗"})]}),u.jsx("a",{href:"#top",className:"label back-to-top text-link",children:"Back to top ↑"})]})]})}function yy(){const{pathname:r,hash:l}=Ht();return N.useEffect(()=>{const a=l&&document.getElementById(decodeURIComponent(l.slice(1)));a?a.scrollIntoView({behavior:"instant"}):window.scrollTo({top:0,behavior:"instant"})},[r,l]),null}const mf="Michael Hills",xy=`${mf} | Backend Engineer`;function Un(r){N.useEffect(()=>{document.title=r?`${r} | ${mf}`:xy},[r])}const gf="/notes/serendipity",wy={slug:"serendipity",title:"Live transcription and analysis platform",org:"Serendipity AI",intro:"The backend of a platform that transcribes live sessions, analyses them as they happen and produces reports across a whole event. It is used by the World Economic Forum.",spec:[{term:"Role",value:"Sole application backend engineer"},{term:"Client",value:"World Economic Forum"},{term:"Period",value:"Jul 2025 – Present"}],stack:["Python","FastAPI","Socket.IO","Azure Speech","Azure OpenAI","PostgreSQL (pgvector)","Redis","BERTopic and HDBSCAN","Kubernetes (AWS EKS)"],overview:["I was the sole application backend engineer, taking the platform from prototype to launch. A DevOps colleague built the infrastructure it deploys onto.","The service takes three kinds of input: audio streamed from a browser, Zoom meetings, and recorded webcasts. It turns each into a timestamped, speaker-labelled transcript, extracts insights with supporting quotes, and builds reports across the whole event."],flow:[{stage:"Input",nodes:[{name:"Browser audio",detail:"16 kHz PCM over Socket.IO"},{name:"Zoom meetings",detail:"Real-time media streams, started by webhook"},{name:"Webcasts and uploads",detail:"Scheduled and background jobs"}]},{stage:"API",note:"FastAPI and python-socketio, several Kubernetes pods",nodes:[{name:"Live transcription",detail:"Azure Speech, speaker diarization"},{name:"Recorded transcription",detail:"ffmpeg, Azure batch transcription"}]},{stage:"State",nodes:[{name:"PostgreSQL + pgvector",detail:"Events, themes, sessions, transcripts, insights"},{name:"Redis",detail:"Cross-pod messaging, job status, finished reports"}]},{stage:"Analysis",note:"Azure OpenAI",nodes:[{name:"Insight extraction",detail:"At most every 5 minutes, once enough new speech has built up"},{name:"Theme clustering",detail:"BERTopic bundles, then one LLM call organises them into themes"},{name:"Whole-event reports",detail:"Convergence, tensions and open questions across up to 500 transcripts"},{name:"Evaluation harness",detail:"Production code graded on fixed transcripts"}]}],architecture:[{term:"Ingest",text:"Browsers send microphone audio over Socket.IO, and each connection gets its own transcription session. Zoom meetings arrive through Zoom’s real-time media streams, started by a webhook that can land on any pod. Recorded webcasts are fetched by a scheduled job, converted with ffmpeg and sent to Azure’s batch transcription; uploaded audio and pasted text go through the same pipeline as background jobs."},{term:"Transcription",text:"Live audio feeds the Azure Speech conversation transcriber, with speaker diarization and a phrase list for names and domain terms. The SDK calls back on its own threads, so results cross into asyncio through a queue drained by a single coroutine."},{term:"State",text:"Transcript segments are written to PostgreSQL as they arrive, with sessions grouped into themes and themes into events. Redis carries Socket.IO messages between pods, so a viewer on one pod sees a session recorded on another, and holds background job status and finished reports."},{term:"Analysis",text:"At most every five minutes, once enough new speech has built up, each live session’s recent transcript goes to Azure OpenAI, which extracts insights with supporting quotes. Report jobs surface areas of convergence, unresolved tensions and open questions no session answered, across up to 500 transcripts per event. An evaluation harness grades the extraction and summary stages, so changes to prompts or models are judged on evidence."},{term:"Runtime",text:"Docker images deployed to Kubernetes on AWS EKS by Jenkins, with an autoscaled API and scheduled jobs for webcast fetching and abandoned-session clean-up. Errors go to Rollbar, traces to OpenTelemetry."}],challenges:[{title:"One writer per live session across several pods",problem:"The API runs on several pods. A user can open a session in a second tab, reconnect to a different pod after a network drop, or have a Zoom webhook land on a pod that never saw the session. Without coordination, two captures could write into the same transcript.",approach:"I put a claim token on the session row and made every transcript, analysis and status write conditional on it, so a displaced writer’s writes match nothing and it learns from the refusal that it has lost the session. The holder sends a heartbeat every 20 seconds and the claim lapses after 60 seconds without one; a scheduled sweep pauses stale sessions and closes abandoned ones. Each live recording also re-checks the user’s access every 30 seconds, so revoking access stops their writes mid-recording.",result:"The database row is the single source of truth for who may write, whichever pod holds the connection. Integration tests cover the claim, takeover and release paths against a real PostgreSQL."},{title:"Ordered, recoverable real-time streaming",problem:"The speech SDK calls back on native threads while the service is asyncio, and transcript segments are appended in order, so concurrent writes could commit out of order. Connections also drop, both between the browser and the server and between the server and Azure.",approach:"Results cross into the event loop through one consumer coroutine, and each write is awaited before the next, so queue order is commit order. The browser keeps about 2.5 minutes of audio in a ring buffer and replays it after reconnecting. If Azure drops the connection, the recogniser is rebuilt once, and a second failure within a minute stops cleanly. Messages to other pods go through a bounded background queue that discards stale updates, so a slow Redis cannot hold up transcript writes.",result:"Transcripts stay in spoken order. A short drop between browser and server is covered by the replay buffer, and a single Azure failure is recovered automatically instead of ending transcription."},{title:"Whole-event reports in minutes, not weeks",problem:"Reporting across a whole event took weeks. An event can produce up to 500 transcripts, far more than one model call can read, and far too long a job to run inside a web request.",approach:"I built a cross-session reporting pipeline that surfaces areas of convergence, unresolved tensions and open questions no session answered. Reports run as background jobs: the API returns a job id straight away, progress is pushed to the user’s browser stage by stage over Socket.IO, and the finished report is stored for retrieval. Every quote comes from insight extraction, where the model picks transcript sentences by number and the quote is assembled from them, so it always matches what was said.",result:"Whole-event reports are generated in minutes, across up to 500 transcripts per event."},{title:"Clustering from one theme to a whole event",problem:"A theme might hold a dozen insights and an event thousands. HDBSCAN needs a density that small inputs lack, and one model call cannot read thousands of insights.",approach:"Within a theme, a small set of insights is grouped in one LLM call, and a larger one is clustered with BERTopic and HDBSCAN. For the whole-event reports, clustering comes first and the model second: BERTopic splits the insights into labelled bundles, and one LLM call organises those labels into themes and sub-themes. Any bundle the model leaves out is placed under its nearest sub-theme by embedding similarity.",result:"The model reasons over bundle labels instead of thousands of raw insights, and every insight ends up in a theme."},{title:"Measuring LLM output quality",problem:"Prompt or model changes to summaries and insight extraction could quietly make the output worse, and LLM output varies between runs.",approach:"I built an evaluation harness that runs the production summary and extraction code on fixed public transcripts, then grades the results with deterministic checks and a separate judge model scoring over repeated runs, separating consistent failures from flaky ones.",result:"Model and prompt choices for each pipeline stage are made from evaluation results rather than by inspection."}],results:["In use by the World Economic Forum at events and internal meetings","Live sessions run concurrently across pods, with one writer per session","Whole-event reports generated in minutes as background jobs, rather than weeks","Over 1,100 automated tests across unit and integration suites"]},ky=ce(xe)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid var(--ink);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  ${({$variant:r})=>r==="primary"?rl`
          background: var(--ink);
          color: var(--bg);
        `:rl`
          background: transparent;
          color: var(--ink);
        `}

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--on-accent);
  }

  .icon {
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1;
  }
`;function nn({to:r,children:l,icon:a="→",variant:c="primary",download:d=!1}){return u.jsxs(ky,{href:r,$variant:c,download:d||void 0,children:[l,u.jsx("span",{className:"icon","aria-hidden":"true",children:a})]})}nn.propTypes={to:G.string.isRequired,children:G.node.isRequired,icon:G.string,variant:G.oneOf(["primary","secondary"]),download:G.bool};const Sy=ce.div`
  border-block: 1px solid var(--rule);

  /* Large outlined index in the first quarter, title in the main text column. */
  .num {
    --span: 3;
    align-self: end;
    padding-block: 28px 20px;
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 700;
    font-stretch: 125%;
    font-variant-numeric: tabular-nums;
    line-height: 0.8;
    letter-spacing: -0.04em;
    color: transparent;
    -webkit-text-stroke: 1.25px var(--ink-muted);
  }

  .head {
    --span: 9;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    padding-block: 28px 20px;
  }

  h2 {
    font-size: clamp(1.75rem, 3.6vw, 3.25rem);
    font-weight: 600;
    font-stretch: 115%;
    letter-spacing: -0.03em;
    line-height: 0.95;
  }

  h2 {
    position: relative;
  }

  /* Permalink: faint on touch screens, revealed on hover elsewhere. */
  .anchor {
    margin-left: 0.4em;
    font-family: var(--font-mono);
    font-size: 0.45em;
    font-weight: 400;
    vertical-align: 0.35em;
    color: var(--ink-faint);
    transition: color 0.15s ease, opacity 0.15s ease;

    &:hover,
    &:focus-visible {
      color: var(--accent);
    }
  }

  @media (hover: hover) {
    .anchor {
      opacity: 0;
    }

    h2:hover .anchor,
    .anchor:focus-visible {
      opacity: 1;
    }
  }

  .meta {
    flex-shrink: 0;
    text-align: right;
  }

  @media (max-width: 639px) {
    .container {
      display: flex;
      align-items: flex-end;
      gap: 14px;
    }

    .num {
      padding-block: 20px 16px;
      font-size: 2.5rem;
    }

    .head {
      flex: 1;
      padding-block: 20px 16px;
    }

    h2 {
      font-size: 1.75rem;
    }
  }

  /* The meta text is supplementary; drop it rather than let it wrap on narrow phones. */
  @media (max-width: 479px) {
    .meta {
      display: none;
    }
  }
`,jy=r=>r.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function et({index:r,phoneIndex:l,title:a,meta:c}){const d=jy(a);return u.jsx(Sy,{id:d,children:u.jsxs("div",{className:"container grid-12",children:[u.jsx("span",{className:"num","aria-hidden":"true",children:l?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"hide-phone",children:r}),u.jsx("span",{className:"phone-only",children:l})]}):r}),u.jsxs("div",{className:"head ruled",children:[u.jsxs("h2",{children:[a,u.jsx("a",{href:`#${d}`,className:"anchor","aria-label":`Link to ${a}`,children:"§"})]}),c&&u.jsx("span",{className:"label meta",children:c})]})]})})}et.propTypes={index:G.string.isRequired,phoneIndex:G.string,title:G.string.isRequired,meta:G.string};const by="/Personal-Portfolio/assets/freestyle-skiing-C9u3BXUl.jpg",Ny="/Personal-Portfolio/assets/customer-support-BCpLka5L.jpg",Cy="/Personal-Portfolio/assets/mythology-s_JTqrCm.jpg",Ey="/Personal-Portfolio/assets/colab-CW_vc6EQ.jpg",Py="/Personal-Portfolio/assets/backgammle-D2VKu10A.png",Ry="/Personal-Portfolio/assets/backgammle-thumb-0xPHz_Pc.jpg",_y="/notes/backgammle",Ty={slug:"backgammle",title:"Backgammle puzzle pipeline",org:"Personal project",intro:"A daily backgammon puzzle: one position, three tries to find the best move. This note covers the pipeline that picks, grades and explains each puzzle, and how it is published and served.",spec:[{term:"Role",value:"Design, development and operations"},{term:"Live",value:"backgammle.com",href:"https://backgammle.com"},{term:"Period",value:"Oct 2026 – Present"}],stats:[{value:"23",label:"Puzzles published, 30 Oct to 21 Nov 2026"},{value:"407",label:"Legal moves analysed and graded across them"},{value:"192",label:"Automated tests (138 frontend, 54 pipeline)"},{value:"4",label:"Scheduled publish runs a day"}],stack:["Python","GNU Backgammon (gnubg)","Claude API","React","TypeScript","Cloudflare Pages","Cloudflare D1","GitHub Actions"],overview:["Each day’s puzzle is a position from a game played out from the opening by GNU Backgammon. The pipeline keeps a position only if its best move is ahead of the next by a set margin without being obvious, ranks every legal move, and grades each one by how much equity it gives up. Claude then writes a short explanation from figures the engine computed, and the pipeline rejects any explanation that quotes a number those figures don’t contain.","A scheduled GitHub Actions workflow runs the tests, generates the puzzles that are due, commits them and deploys the site to Cloudflare Pages. The browser checks answers locally against the puzzle file, so the site needs no game server. Puzzles are generated about two days ahead, but a Pages Function keeps each one private until its date has started somewhere in the world."],flow:[{stage:"Generate",note:"Python, run by GitHub Actions",nodes:[{name:"Picker",detail:"Plays games from the opening, seeded by date"},{name:"Analysis",detail:"gnubg ranks every legal move at 3-ply"},{name:"Grading",detail:"Best, close, error or blunder by equity lost"}]},{stage:"Explain",nodes:[{name:"Facts",detail:"Shots, blots, chances and points for two moves"},{name:"Claude",detail:"Headline and text from the facts only"},{name:"Checks",detail:"Numbers, wording, length and notation"}]},{stage:"Publish",nodes:[{name:"Tests",detail:"Pipeline and frontend tests gate each run"},{name:"Commit",detail:"One JSON file per date in the repo"},{name:"Deploy",detail:"Static site plus a Function for future dates"}]},{stage:"Play",note:"In the browser",nodes:[{name:"Answer check",detail:"Replays the move and matches the result"},{name:"Storage",detail:"Tries and statistics kept on the device"},{name:"Tally",detail:"Finished games counted in D1, no IDs"}]}],architecture:[{term:"Picker and analysis",text:"The picker plays games from the opening, choosing at random among moves within 0.05 equity of the best at 0-ply, and stops 4 to 40 moves in at a position where the two sides are still in contact. The date seeds the random choices, so a rerun gives the same puzzle. gnubg then evaluates every legal move, cubeful for a money game, with its move filters widened so none is pruned early."},{term:"Facts and explanations",text:"For the best move and the next best, the pipeline computes the position after each: win and gammon chances, blots and the opponent’s rolls that hit them, points made, given up or slotted, builders, the longest prime and the pip count. Claude Opus 5.5 receives only these facts, as JSON with equity removed, and returns a headline and text through structured output."},{term:"Publishing",text:"One workflow generates and deploys, because pushes made with the workflow’s own token don’t trigger other workflows. Each puzzle is a JSON file named by date. Files carry a revision number, so a replaced puzzle resets games saved against the old one. A push to the qa branch deploys a separate QA site that uses production’s puzzles."},{term:"Frontend",text:"React and TypeScript, built with Vite. The browser loads the puzzle for the player’s local date, replays each move the player makes, and matches the resulting position against the graded moves. Tries, streaks and statistics are kept in localStorage. Sharing produces a numbered result with coloured squares, in the style of other daily puzzles."},{term:"Pages Functions",text:"Three small Functions run alongside the static site: one counts finished games in a D1 table (date, number of tries, solved or not), one returns that day’s totals for the result screen, and one serves puzzles that were deployed before their date had started."}],challenges:[{title:"Positions with one best move that isn’t obvious",problem:"A puzzle needs a best move that is genuinely ahead, but if every other move is a blunder the answer is obvious and the grades can’t show a player getting closer. Some positions passed both tests yet couldn’t be explained honestly: the next best move had the same or better chances, and the best move only came out ahead once the doubling cube was counted.",approach:"The picker requires 4 to 60 legal moves, a best move no further than 0.9 equity from even, a lead of at least 0.01 equity over the next best, and a next best move that isn’t a blunder. A later rule skips positions whose best move doesn’t come out ahead in win or gammon chances, in the whole percentages players see. Analysis moved from 2-ply to 3-ply after comparing the two on the first 22 puzzles.",result:"At 3-ply the best move changed on 2 of the 22 puzzles, and both were near-ties of the kind the new rule now skips. Picking a puzzle at 3-ply took 12 to 62 seconds per date in testing, against 1 to 3 seconds at 2-ply."},{title:"Keeping the explanations grounded",problem:"An LLM explaining a backgammon move can invent figures or describe the position wrongly. A review of the first 10 explanations found the numbers accurate but one description wrong: it said a move added a checker to the 4-point, when it slotted an empty 4-point and gave up the 6-point. Others listed statistics without saying why the best move was better.",approach:"Every number in an answer must appear in the facts, apart from “of 36” for the rolls in a turn. Wording that implies a change (“raises”, “cuts”, “from 50% to 55%”) is rejected, because the facts compare two moves rather than a before and after. The next best move must be written in its exact notation. A rejected answer is retried once with the reason. If only the headline fails, the text is kept; if both attempts fail, the puzzle keeps a placeholder and later runs try again. The facts gained points given up and slotted, and an “edge” saying where the best move comes out ahead.",result:"All 24 puzzles generated so far have an explanation with a headline. The checks caught real failures during development, including a headline over the 40-character limit that failed a scheduled run, and a next best move written as “8/6” instead of “bar/20 8/6”."},{title:"Publishing on time in every time zone",problem:"A date’s puzzle must be live before that date starts in UTC+14, which is 10:00 UTC the day before. GitHub often starts scheduled runs hours late and occasionally skips one. Puzzle numbers must have no gaps, or streaks break.",approach:"Four scheduled runs a day (06:00, 08:00, 12:00 and 16:00 UTC), most of which find nothing due. Each run writes every unpublished date up to tomorrow in UTC+14, so a rerun writes nothing and a missed run is caught up by the next. Tests run before anything is committed, and if generating fails partway, the dates already finished are still published.",result:"The 24 puzzles are numbered 1 to 24 with no gaps, and a test fails the build if a gap or repeat appears."},{title:"Keeping future answers private",problem:"Puzzles are generated about two days ahead and were deployed as public files, so tomorrow’s answer could be read at a predictable address.",approach:"Removing future files at deploy time failed on timing: a puzzle has to be live by 10:00 UTC the day before, and late scheduled runs could miss that. A Function checking each request was the next attempt, but local testing showed encoded addresses such as /%70uzzles/ reached the static files without passing through it. The final design moves every puzzle dated after today out of the public files at deploy and bundles them into the Function, which serves each one once its date has started somewhere, with 10 minutes’ grace for fast clocks. A generated _routes.json sends only those dates to the Function, so earlier puzzles stay static.",result:"On the QA site, the next day’s puzzle returned 404 for its plain and encoded addresses at 00:29 UTC, and was served from the Function after it unlocked, by 14:47 UTC."}],results:["23 puzzles published daily from 30 October to 21 November 2026, numbered without gaps.","Every legal move graded: 6 to 40 per puzzle, 407 in total.","All generated puzzles have a checked explanation; none currently shows the placeholder.","Future puzzles are deployed early but unreadable until their date starts.","192 automated tests across the pipeline and frontend."]},Lt=[{id:7,img:Py,thumb:Ry,title:"Backgammle",year:"2026",context:"Personal",status:"Live",short_category:["Full-stack"],long_category:["Full-stack","Game","Data Pipeline","LLM","Serverless"],short_desc:"A daily backgammon puzzle: find the best move in three tries. Positions are chosen and graded by the gnubg engine, with explanations written by Claude from the engine’s figures.",long_desc:"Backgammle is a daily backgammon puzzle in the spirit of Wordle. Each day there is one position and roll, and players have three tries to find the best move. A Python pipeline generates the puzzles: it plays games from the opening with the GNU Backgammon (gnubg) engine to find realistic positions, keeps only those whose best move is ahead by a set margin without being obvious, and grades every legal move by the equity it gives up (at 3-ply since November 2026). Claude then writes a short explanation of what the best move gains and gives up against the next best, working only from figures computed by the engine, and the pipeline rejects any explanation that quotes a number not found in those facts. The frontend is built with React and TypeScript on Cloudflare Pages, with Pages Functions and a D1 database alongside it, and a scheduled GitHub Actions workflow tests, generates and publishes the puzzles, keeping each one private until its date starts. Puzzles have been published daily since 30 October 2026.",tech_stack:["Python","gnubg","Claude API","TypeScript","React","Cloudflare Pages"],liveLink:"https://backgammle.com",note:_y},{id:2,img:by,title:"Freestyle Skiing Fall Detection",year:"2024",context:"MSci dissertation",short_category:["AI/ML"],long_category:["AI/ML","Deep Learning","Time Series","Computer Vision","Classification"],short_desc:"Compared CNNs (ResNet50, AlexNet) on Gramian Angular Field images of smartphone IMU signals against LSTM and CNN-LSTM networks on the raw time series. ResNet50 reached 92% accuracy.",long_desc:"Fall detection for freestyle skiing, where general-purpose methods tend to mistake high-impact tricks for falls. I collected a labelled dataset of accelerometer and gyroscope readings from skiers' smartphones and used a public dataset for transfer learning. Two approaches were compared: CNNs (ResNet50 and AlexNet) on Gramian Angular Field images of the signal, and LSTM and CNN-LSTM networks on the raw time series. The best image-based model, ResNet50, reached 92% accuracy (F1 78%, recall 81%, precision 76%). The best signal-based model, the CNN-LSTM, reached 91% accuracy (F1 75%).",tech_stack:["Python","PyTorch","TensorFlow"],githubLink:"https://github.com/Michael-Hills/Freestyle-Skiing-Fall-Detection",reportLink:"https://raw.githubusercontent.com/Michael-Hills/Freestyle-Skiing-Fall-Detection/main/Report.pdf"},{id:3,img:Cy,title:"Mythology Semantic Clustering",year:"2023",context:"Third-year project",short_category:["AI/ML"],long_category:["AI/ML","NLP","Web Scraping","Clustering","Bayesian Optimisation"],short_desc:"Scraped 2,988 pages from the Myths and Folklore Wiki and clustered them into 107 themes with SBERT, UMAP and HDBSCAN. Myths from geographically close cultures clustered together most often.",long_desc:"Clusters the Myths and Folklore Wiki to find themes shared across cultures. I scraped 2,988 pages with Beautiful Soup, embedded the main text of each with SBERT, reduced it with UMAP and clustered it with HDBSCAN, tuning both with Bayesian optimisation against a cluster confidence score. This produced 107 clusters, with only 15% of myths placed below 5% certainty. Labelling each cluster by its most frequent words showed that gods (34 clusters) and creatures (19) were the most common themes. Cultures that are geographically close clustered together: one cluster of death gods was entirely Greek and Roman, while another held African and Asian gods. The main limitation was the Wiki itself, where Greek, Norse and European myths make up 42% of pages, so larger cultures tended to dominate the clusters they appeared in.",tech_stack:["Python","SBERT","Beautiful Soup","UMAP","HDBSCAN","hyperopt","spaCy"],githubLink:"https://github.com/Michael-Hills/Mythology-NLP-Clustering",reportLink:"https://raw.githubusercontent.com/Michael-Hills/Mythology-NLP-Clustering/main/Final_Report.pdf"},{id:4,img:Ny,title:"Customer Support Analysis",year:"2024",context:"Coursework",short_category:["AI/ML"],long_category:["AI/ML","NLP","Clustering","Sentiment Analysis","Topic Modelling","Bayesian Optimisation"],short_desc:"An NLP triage tool for customer support tweets: topic modelling sorts each brand’s messages into specific issues, and VADER sentiment analysis separates complaints from praise so the most urgent can be answered first.",long_desc:"Combines topic modelling and sentiment analysis to triage customer support messages, using a public dataset of over 3 million tweets to more than 100 brands. I built the topic model step by step: SBERT embeddings, UMAP for dimensionality reduction and HDBSCAN for clustering, tuned with Bayesian optimisation, then class-based TF-IDF to label each cluster. For Apple, Amazon and Uber, the three brands with the most inquiries, it found 361, 288 and 189 topics, from iCloud backups and iMessage errors to being charged twice or leaving a phone in a car, with only about 1% of clustered tweets below 80% membership confidence. VADER then scores the tone of each tweet, so a complaint and a thank-you about the same order are treated differently. The main limitations were that about 30% of tweets fitted no topic, and that VADER misreads sarcasm.",tech_stack:["Python","SBERT","UMAP","HDBSCAN","VADER","c-TF-IDF"],githubLink:"https://github.com/Michael-Hills/Social-Networks-and-Text-Analysis",reportLink:"https://raw.githubusercontent.com/Michael-Hills/Social-Networks-and-Text-Analysis/main/Report.pdf"},{id:6,img:Ey,title:"CoLab Charity Internal System",year:"2024",context:"Group project",short_category:["Backend"],long_category:["Backend","Web Development","API","SQL"],short_desc:"A Django web platform built to replace CoLab’s spreadsheet system, covering client tracking, workshop scheduling and data analysis.",long_desc:"A group project to replace the spreadsheet-based system used by CoLab, a wellbeing charity in Exeter, with a Django web application, built as a proof of concept. As lead backend engineer, I worked on client profile tracking, workshop scheduling and data analysis, so staff can give more personalised support to people with complex needs. Built with Django, HTML and CSS.",tech_stack:["Python","Django","SQL","HTML","CSS"],githubLink:"https://github.com/Michael-Hills/Group-Software-Project-4th"}],il=r=>String(Lt.indexOf(r)+1).padStart(2,"0"),Ly=ce.ol`
  li {
    border-bottom: 1px solid var(--rule);
  }

  /* Rows sit on the shared 12-column grid: number | thumbnail | text from column 4 | specs. */
  .row {
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;
    padding-block: 20px;
  }

  /* Accent bar slides in on hover. */
  .row::before {
    content: '';
    position: absolute;
    left: calc(var(--gutter) * -1);
    top: -1px;
    bottom: -1px;
    width: 3px;
    background: var(--accent);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.2s ease;
  }

  .row:hover::before,
  .row:focus-visible::before {
    transform: scaleY(1);
  }

  .no {
    grid-column: span 1;
    align-self: start;
  }

  .thumb {
    grid-column: span 2;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--bg-raised);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.25s ease, transform 0.4s ease;
    }
  }

  /* Greyscale until hovered, on devices that can hover; touch screens see colour. */
  @media (hover: hover) {
    .thumb img {
      filter: grayscale(1) contrast(1.05);
    }

    .row:hover .thumb img {
      filter: none;
      transform: scale(1.04);
    }
  }

  .main {
    grid-column: span 6;
    padding-inline: var(--cell);
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 12px;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: 108%;
    letter-spacing: -0.015em;
    line-height: 1.15;
  }

  .status {
    color: var(--accent);
  }

  .desc {
    display: -webkit-box;
    margin-top: 8px;
    max-width: 60ch;
    overflow: hidden;
    color: var(--ink-muted);
    font-size: 0.9375rem;
    line-height: 1.5;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .side {
    grid-column: span 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .specs {
    display: grid;
    gap: 6px;
  }

  .stack {
    color: var(--ink-faint);
  }

  .arrow {
    font-size: 1.25rem;
    color: var(--ink-faint);
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .row:hover .arrow {
    color: var(--accent);
    transform: translateX(4px);
  }

  @media (max-width: 1023px) {
    .main {
      grid-column: span 8;
      padding-right: 0;
    }

    .side {
      grid-column: span 1;
      justify-content: flex-end;
    }

    .specs {
      display: none;
    }
  }

  /* Phones: full-width image cards. */
  @media (max-width: 639px) {
    .row {
      grid-template-columns: auto minmax(0, 1fr);
      grid-template-areas:
        'thumb thumb'
        'no side'
        'main main';
      gap: 14px 12px;
      padding-block: 24px 28px;
    }

    .row::before {
      display: none;
    }

    .thumb {
      grid-area: thumb;
      aspect-ratio: 3 / 2;
    }

    .no {
      grid-area: no;
      align-self: center;
    }

    .side {
      grid-area: side;
      justify-content: space-between;
    }

    .specs {
      display: flex;
      gap: 12px;
    }

    .stack {
      display: none;
    }

    .main {
      grid-area: main;
      padding: 0;
    }

    .title {
      font-size: 1.375rem;
    }

    .desc {
      -webkit-line-clamp: 3;
    }

    /* Compact list (home page): small thumbnail, title and category only. */
    &.compact {
      .row {
        grid-template-columns: 88px minmax(0, 1fr) auto;
        grid-template-areas:
          'thumb main arrow'
          'thumb specs arrow';
        gap: 4px 16px;
        padding-block: 16px;
      }

      .thumb {
        aspect-ratio: 4 / 3;
      }

      .no,
      .desc {
        display: none;
      }

      .main {
        align-self: end;
      }

      .title {
        font-size: 1.125rem;
      }

      .side {
        display: contents;
      }

      &.with-desc .row {
        grid-template-areas:
          'thumb main arrow'
          'thumb specs arrow'
          'desc desc desc';
        row-gap: 4px;
      }

      &.with-desc .main {
        display: contents;
      }

      &.with-desc .title {
        grid-area: main;
        align-self: end;
      }

      &.with-desc .desc {
        display: -webkit-box;
        grid-area: desc;
        margin-top: 10px;
        -webkit-line-clamp: 2;
      }

      .specs {
        grid-area: specs;
        align-self: start;
      }

      .arrow {
        grid-area: arrow;
        align-self: center;
      }
    }
  }
`;function ol({projects:r,compact:l=!1,withDesc:a=!1}){const c=[l&&"compact",l&&a&&"with-desc"].filter(Boolean).join(" ");return u.jsx(Ly,{className:c||void 0,children:r.map(d=>u.jsx("li",{children:u.jsxs(xe,{href:`/project/${d.id}`,className:"row",children:[u.jsx("span",{className:"label no",children:il(d)}),u.jsx("span",{className:"thumb",children:u.jsx("img",{src:d.thumb??d.img,alt:"",loading:"lazy"})}),u.jsxs("span",{className:"main",children:[u.jsxs("span",{className:"title",children:[d.title,d.status&&u.jsx("span",{className:"label status",children:d.status})]}),u.jsx("span",{className:"desc",children:d.short_desc})]}),u.jsxs("span",{className:"side",children:[u.jsxs("span",{className:"specs",children:[u.jsx("span",{className:"label cat",children:d.short_category.join(" / ")}),u.jsx("span",{className:"label stack",children:d.tech_stack.slice(0,3).join(" · ")})]}),u.jsx("span",{className:"arrow","aria-hidden":"true",children:"→"})]})]})},d.id))})}ol.propTypes={compact:G.bool,withDesc:G.bool,projects:G.arrayOf(G.shape({id:G.number.isRequired,title:G.string.isRequired,img:G.string.isRequired,thumb:G.string,short_desc:G.string.isRequired,short_category:G.arrayOf(G.string).isRequired,tech_stack:G.arrayOf(G.string).isRequired,status:G.string})).isRequired};const zy=ce.ol`
  /* Period in the first quarter, details in the main text column (shared 12-column grid). */
  li.entry {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    border-bottom: 1px solid var(--rule);
  }

  .period {
    grid-column: span 3;
    padding-block: 28px;
    padding-right: var(--cell);
  }

  .detail {
    grid-column: span 9;
    padding: 28px 0 32px var(--cell);
    border-left: 1px solid var(--rule);
  }

  h3 {
    font-size: 1.375rem;
    font-stretch: 108%;
  }

  .org {
    margin-top: 4px;
    color: var(--ink-muted);
  }

  .entry-link {
    margin-top: 12px;
  }

  .note,
  .group-name {
    margin-top: 20px;
  }

  .group-name {
    color: var(--ink);
  }

  .points {
    margin-top: 10px;
    max-width: 68ch;
    color: var(--ink-muted);
    font-size: 0.9375rem;

    li {
      position: relative;
      padding-left: 20px;
    }

    li + li {
      margin-top: 6px;
    }

    li::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 0.65em;
      width: 5px;
      height: 5px;
      background: var(--ink-faint);
    }
  }

  .toggle {
    display: none;
  }

  @media (max-width: 639px) {
    h3 {
      font-size: 1.1875rem;
    }

    /* Long entries collapse on phones; the toggle reveals the bullet points. */
    .points-wrap.collapsed {
      display: none;
    }

    .toggle {
      display: inline-block;
      margin-top: 8px;
      padding-block: 10px;
      color: var(--ink);
      text-decoration: underline;
      text-decoration-color: var(--rule-strong);
      text-underline-offset: 0.2em;
    }

    li.entry {
      grid-template-columns: 1fr;
      padding-block: 24px;
    }

    .period,
    .detail {
      grid-column: 1 / -1;
      padding: 0;
      border-left: 0;
    }

    .detail {
      margin-top: 8px;
    }
  }
`,Iy=2;function vf({entry:r,compact:l}){const[a,c]=N.useState(!1),d=r.groups.reduce((m,x)=>m+x.points.length,0),f=!l&&d>Iy;return u.jsxs("li",{className:"entry",children:[u.jsx("span",{className:"label period",children:r.period}),u.jsxs("div",{className:"detail",children:[u.jsx("h3",{children:r.role}),u.jsx("p",{className:"org",children:r.org}),r.link&&u.jsx("p",{className:"entry-link",children:u.jsx(xe,{href:r.link.href,className:"label text-link",children:r.link.label})}),!l&&u.jsxs("div",{className:f&&!a?"points-wrap collapsed":"points-wrap",children:[r.note&&u.jsx("p",{className:"label note",children:r.note}),r.groups.map((m,x)=>u.jsxs("div",{children:[m.name&&u.jsx("p",{className:"label group-name",children:m.name}),u.jsx("ul",{className:"points",children:m.points.map(g=>u.jsx("li",{children:g},g))})]},m.name??x))]}),f&&u.jsx("button",{type:"button",className:"label toggle","aria-expanded":a,onClick:()=>c(m=>!m),children:a?"Hide details ↑":`Show details (${d}) ↓`})]})]})}vf.propTypes={entry:G.object.isRequired,compact:G.bool};function xi({entries:r,compact:l=!1}){return u.jsx(zy,{children:r.map(a=>u.jsx(vf,{entry:a,compact:l},a.role))})}xi.propTypes={entries:G.arrayOf(G.shape({period:G.string.isRequired,role:G.string.isRequired,org:G.string.isRequired,note:G.string,link:G.shape({href:G.string.isRequired,label:G.string.isRequired}),groups:G.arrayOf(G.shape({name:G.string,points:G.arrayOf(G.string).isRequired})).isRequired})).isRequired,compact:G.bool};const Ay=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",timeZoneName:"short"});function Fy(){const[r,l]=N.useState(()=>new Date);return N.useEffect(()=>{const a=setInterval(()=>l(new Date),3e4);return()=>clearInterval(a)},[]),u.jsx("time",{dateTime:r.toISOString(),children:Ay.format(r)})}const Oy=ce.button`
  min-width: 7.5em;
  padding: 6px 10px;
  border: 1px solid var(--rule-strong);
  color: var(--ink-muted);
  text-align: center;
  vertical-align: middle;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: var(--ink);
    border-color: var(--ink);
  }

  &[data-state='copied'] {
    color: var(--accent);
    border-color: var(--accent);
  }
`,My={idle:"Copy",copied:"Copied ✓",failed:"Copy failed"};function Ks({text:r,className:l}){const[a,c]=N.useState("idle");N.useEffect(()=>{if(a==="idle")return;const f=setTimeout(()=>c("idle"),2e3);return()=>clearTimeout(f)},[a]);const d=async()=>{try{await navigator.clipboard.writeText(r),c("copied")}catch{c("failed")}};return u.jsx(Oy,{type:"button",className:l?`label ${l}`:"label","data-state":a,onClick:d,"aria-label":a==="idle"?`Copy ${r}`:void 0,children:u.jsx("span",{"aria-live":"polite",children:My[a]})})}Ks.propTypes={text:G.string.isRequired,className:G.string};const Dy="/Personal-Portfolio/assets/portrait-C9D8bwfn.jpg",yf="Backend engineer with two years’ experience building and running systems in production.",mr={org:"Serendipity AI",headline:"Live transcription and analysis platform used by the World Economic Forum",body:"Sole application backend engineer, taking the platform from prototype to launch. It transcribes live sessions at events and internal meetings and delivers summaries, key themes and insights, built as part of a wider agentic platform.",stats:[{value:"15+",label:"Concurrent live sessions"},{value:"3,000+",label:"Sessions analysed to date"},{value:"500",label:"Transcripts per event, up to"},{value:"Weeks → mins",label:"Whole-event reporting time"}],stack:["Python","BERTopic","HDBSCAN","AWS","Kubernetes","Redis","Azure"]},Jo=[{code:"BE",title:"Backend",desc:"Real-time services and REST APIs in async Python, backed by PostgreSQL and Redis, and run in production.",tools:["FastAPI","Django","PostgreSQL","Redis","WebSockets","async Python","REST API design"],deploy:["AWS","Azure","Docker","Kubernetes","Jenkins","GitHub Actions","Prometheus","Grafana","Cloudflare Pages"]},{code:"ML",title:"ML and data",desc:"NLP and analysis pipelines: topic modelling, clustering, sentiment analysis, and LLM pipelines and evaluation.",tools:["PyTorch","TensorFlow","BERTopic","HDBSCAN","UMAP","sentence-transformers","Hugging Face","Claude API"]},{code:"FE",title:"Frontend",desc:"React frontends for the products behind the APIs, including Backgammle and this site.",tools:["React","TypeScript","Vite"]},{code:"LG",title:"Languages",tools:["Python","SQL","TypeScript","JavaScript","Java"]}],xf=[{period:"Jul 2025 – Present",role:"Software Engineer",org:"Serendipity AI",link:{href:gf,label:"Read the case study →"},groups:[{points:["Sole application backend engineer on a live transcription and analysis platform used by the World Economic Forum at events and internal meetings, transcribing live sessions and delivering summaries, key themes and insights, built as part of a wider agentic platform","Set the architecture and technical direction of the service, working directly with the client to scope each event","Designed and built the live analysis layer, supporting 15+ concurrent sessions: speaker recognition from voice profiles, topic and insight extraction, and clustering of thousands of micro-topics into readable themes using BERTopic and HDBSCAN","Reduced whole-event reporting from weeks to minutes with a cross-session pipeline that surfaces areas of convergence, unresolved tensions and open questions no session answered, across up to 500 transcripts per event and 3,000+ sessions to date","Integrated Zoom’s real-time media streams into the transcription pipeline, streaming Zoom’s live meeting transcripts through the same analysis path as in-app capture, with OAuth token lifecycle, credential encryption and session recovery","Run the service on AWS using Docker and Kubernetes, Redis for state and caching, Jenkins for CI/CD, and Prometheus and Grafana for monitoring, with Azure hosting the underlying speech and language models"]}]},{period:"Sep 2024 – Jul 2025",role:"Associate Software Engineer",org:"Fitch Group",groups:[{points:["Contributed to a full-stack application (FastAPI, PostgreSQL, React) replacing Excel-based workflows for 100+ BMI country risk and industry research analysts, working across API design, frontend and data transformation","Created a telemetry and ROI tracker used by senior leadership to monitor usage, cost and adoption of Fitch Genie, the GenAI assistant on Fitch Ratings PRO, integrating Qlik ETL scripts, AngularJS and Qlik APIs","Developed a product recommendation system using semantic text clustering and market basket analysis to drive upsell from behavioural data"]}]}],$y=[{period:"2020 – 2024",role:"MSci Computer Science, First Class",org:"University of Exeter",groups:[{points:["Two Dean’s Commendations for Exceptional Performance (Stages 1 and 2)"]}]},{period:"2013 – 2020",role:"A Levels: Maths (A*), Further Maths (A*), Physics (A*), Geology (A*)",org:"Reading Blue Coat School",groups:[]}],By=[{period:"2021 – 2023",role:"Vice President (Trips) and Social Secretary",org:"Snowsports Exeter",groups:[{points:["Led all UK and European trips for 1,500+ members, managing a £150k+ events budget and directing transport, accommodation, schedules and partner negotiations for around 1,000 people on European trips"]}]}],Uy=["Alpine & freestyle skiing","Climbing"],xp=r=>String(r).padStart(2,"0"),Hy=ce.section`
  .topline {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-block: 20px;

    .index {
      color: var(--accent);
      margin-right: 12px;
    }
  }

  .name {
    padding-block: 8px 32px;
    font-size: clamp(3.5rem, 13.5vw, 11.5rem);
    font-stretch: 125%;
    font-weight: 700;
    line-height: 0.86;
    letter-spacing: -0.045em;
    text-transform: uppercase;
  }

  .grid-12 {
    border-top: 1px solid var(--rule);
  }

  .grid-12 > * {
    padding-block: 32px;
  }

  .facts {
    --span: 3;
  }

  .intro {
    --span: 6;
  }

  figure {
    --span: 3;
  }

  dl div + div {
    margin-top: 16px;
  }

  dd {
    margin-top: 2px;
    font-size: 0.9375rem;
  }

  .lede {
    max-width: 24ch;
    font-size: clamp(1.625rem, 3vw, 2.375rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;

    em {
      font-style: normal;
      color: var(--accent);
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 40px;
  }

  figure img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: 50% 35%;
  }

  figcaption {
    margin-top: 10px;
  }

  /* Tablets and phones: statement first, then the photo beside the facts. */
  @media (max-width: 1023px) {
    .intro {
      --span: 12;
      order: -1;
      padding-inline: 0;
      border-left: 0;
      border-bottom: 1px solid var(--rule);
    }

    .grid-12 > figure {
      --span: 4;
      order: 0;
      padding-left: 0;
      padding-right: var(--cell);
      border-left: 0;
    }

    .facts {
      --span: 8;
      order: 1;
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);
    }
  }

  @media (max-width: 639px) {
    .name {
      font-size: 16vw;
    }

    .grid-12 {
      grid-template-columns: 5fr 7fr;
    }

    .grid-12 > * {
      padding-block: 24px;
    }

    .intro {
      grid-column: 1 / -1;
    }

    figure {
      grid-column: 1;
      align-self: start;
    }

    .facts {
      grid-column: 2;
    }

    dl div + div {
      margin-top: 12px;
    }

    .actions {
      margin-top: 28px;

      > * {
        flex: 1;
      }
    }
  }
`,Wy=ce.div`
  > * {
    padding-block: 32px;
  }

  .context {
    --span: 3;
    display: grid;
    align-content: start;
    gap: 16px;
  }

  .org {
    color: var(--accent);
  }

  .stack {
    color: var(--ink);
    line-height: 1.8;
  }

  .text {
    --span: 6;
  }

  h3 {
    max-width: 20ch;
    font-size: clamp(1.75rem, 3.2vw, 2.75rem);
    font-stretch: 112%;
    letter-spacing: -0.025em;
  }

  .body {
    margin-top: 20px;
    max-width: 52ch;
    color: var(--ink-muted);
  }

  .links {
    margin-top: 24px;
  }

  dl {
    --span: 3;
    display: grid;
    align-content: start;
  }

  dl > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-block: 18px;
    border-bottom: 1px solid var(--rule);
  }

  dl > div:first-child {
    padding-top: 0;
  }

  dl > div:last-child {
    border-bottom: 0;
  }

  dd {
    order: -1;
    font-size: clamp(2rem, 3.4vw, 3rem);
    font-stretch: 118%;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  /* A figure in words rather than a number (e.g. "Weeks → mins") is set smaller to fit. */
  dd.words {
    font-size: clamp(1.5rem, 2.2vw, 2rem);
  }

  @media (max-width: 1023px) {
    .text {
      --span: 9;
      padding-right: 0;
    }

    dl {
      --start: 4;
      --span: 9;
      grid-template-columns: 1fr 1fr;
      padding-top: 0;
    }

    dl > div:first-child {
      padding-top: 18px;
    }

    dl > div:nth-last-child(2) {
      border-bottom: 0;
    }
  }

  @media (max-width: 639px) {
    > * {
      padding-block: 24px;
    }

    .context {
      padding-bottom: 16px;
    }

    .context .stack {
      display: none;
    }

    .text,
    dl {
      padding-top: 0;
    }
  }
`,Vy=ce.ul`
  li {
    --span: 3;
    padding-block: 28px 36px;
  }

  .code {
    color: var(--accent);
  }

  h3 {
    margin-top: 32px;
    font-size: 1.5rem;
    font-stretch: 112%;
  }

  p {
    margin-top: 12px;
    color: var(--ink-muted);
    font-size: 0.9375rem;
  }

  .tools {
    margin-top: 20px;
    color: var(--ink);
  }

  .deploy {
    margin-top: 12px;
    color: var(--ink-muted);
  }

  @media (max-width: 1023px) {
    li {
      --span: 6;
    }

    li:nth-child(2) {
      padding-right: 0;
    }

    li:nth-child(3) {
      border-left: 0;
      padding-left: 0;
    }

    li:nth-child(n + 3) {
      border-top: 1px solid var(--rule);
    }
  }

  /* Phones: a compact name / tools table. */
  @media (max-width: 639px) {
    li {
      display: grid;
      grid-template-columns: 8.5rem minmax(0, 1fr);
      gap: 16px;
      align-items: baseline;
      padding-block: 16px;
    }

    li + li {
      border-top: 1px solid var(--rule);
    }

    .code,
    p:not(.tools) {
      display: none;
    }

    h3 {
      margin-top: 0;
      font-size: 1.125rem;
    }

    .tools {
      grid-column: 2;
      margin-top: 0;
      font-family: var(--font-sans);
      font-size: 0.9375rem;
      letter-spacing: 0;
      text-transform: none;
      line-height: 1.5;
      color: var(--ink-muted);
    }
  }
`,hi=ce.section.attrs({className:"section"})`
  .more {
    padding-block: 24px;
  }
`,wp=ce.div`
  > * {
    padding-block: 32px;
  }

  .aside {
    --span: 3;
    display: grid;
    align-content: start;
    gap: 12px;
  }

  .main {
    --span: 9;
  }

  .bio {
    max-width: 34ch;
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  p.big {
    font-size: clamp(2rem, 5.5vw, 4.5rem);
    font-stretch: 112%;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .email-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 20px;
    margin-top: 24px;
  }

  .email {
    display: inline-block;
    font-size: clamp(1.125rem, 3vw, 2rem);
    overflow-wrap: anywhere;
  }

  @media (max-width: 639px) {
    > * {
      padding-block: 24px;
    }

    .aside {
      order: 2;
      padding-top: 0;
    }
  }
`;function Qy(){return Un(),u.jsxs(u.Fragment,{children:[u.jsxs(Hy,{children:[u.jsxs("div",{className:"container topline",children:[u.jsxs("span",{className:"label",children:[u.jsx("span",{className:"index",children:"00"}),"Home"]}),u.jsxs("span",{className:"label",children:["Portfolio / Rev. ",new Date().getFullYear()]})]}),u.jsx("div",{className:"container",children:u.jsxs("h1",{className:"name",children:["Michael",u.jsx("br",{}),"Hills"]})}),u.jsxs("div",{className:"container grid-12",children:[u.jsxs("dl",{className:"facts pad-r",children:[u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Role"}),u.jsx("dd",{children:"Software Engineer"})]}),u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Currently"}),u.jsx("dd",{children:"Serendipity AI"})]}),u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Based"}),u.jsx("dd",{children:"London, UK"})]}),u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Local time"}),u.jsx("dd",{children:u.jsx(Fy,{})})]}),u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Education"}),u.jsx("dd",{children:"MSci Computer Science, First Class"})]})]}),u.jsxs("div",{className:"intro ruled pad-r",children:[u.jsxs("p",{className:"lede",children:["Backend engineer building and running systems in production, from"," ",u.jsx("em",{children:"real-time streaming pipelines through to NLP analysis."})]}),u.jsxs("div",{className:"actions",children:[u.jsx(nn,{to:"/projects",children:"View projects"}),u.jsx(nn,{to:hf,variant:"secondary",icon:"↓",download:!0,children:"Download CV"})]})]}),u.jsxs("figure",{className:"photo ruled",children:[u.jsx("img",{src:Dy,alt:"Portrait of Michael Hills, smiling"}),u.jsx("figcaption",{className:"label",children:"Fig. 01: Michael Hills"})]})]})]}),u.jsxs(hi,{children:[u.jsx(et,{index:"01",title:"Current work"}),u.jsxs(Wy,{className:"container grid-12",children:[u.jsxs("div",{className:"context pad-r",children:[u.jsx("p",{className:"label org",children:mr.org}),u.jsx("p",{className:"label stack",children:mr.stack.join(" / ")})]}),u.jsxs("div",{className:"text ruled pad-r",children:[u.jsx("h3",{children:mr.headline}),u.jsx("p",{className:"body",children:mr.body}),u.jsx("p",{className:"links",children:u.jsx(xe,{href:gf,className:"label text-link",children:"Read the case study →"})})]}),u.jsx("dl",{className:"ruled",children:mr.stats.map(r=>u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:r.label}),u.jsx("dd",{className:/^\d/.test(r.value)?void 0:"words",children:r.value})]},r.label))})]})]}),u.jsxs(hi,{children:[u.jsx(et,{index:"02",title:"Skills",meta:`${xp(Jo.length)} areas`}),u.jsx(Vy,{className:"container grid-12",children:Jo.map((r,l)=>u.jsxs("li",{className:[l>0&&"ruled",l<Jo.length-1&&"pad-r"].filter(Boolean).join(" "),children:[u.jsx("span",{className:"label code",children:r.code}),u.jsx("h3",{children:r.title}),r.desc&&u.jsx("p",{children:r.desc}),u.jsx("p",{className:"label tools",children:r.tools.join(" / ")}),r.deploy&&u.jsxs("p",{className:"label tools deploy",children:["Deploy: ",r.deploy.join(" / ")]})]},r.code))})]}),u.jsxs(hi,{children:[u.jsx(et,{index:"03",title:"Selected projects",meta:`${xp(Lt.length)} entries`}),u.jsxs("div",{className:"container",children:[u.jsx(ol,{projects:Lt,compact:!0}),u.jsx("p",{className:"more",children:u.jsx(xe,{href:"/projects",className:"label text-link",children:"Search & filter all projects →"})})]})]}),u.jsxs(hi,{className:"hide-phone",children:[u.jsx(et,{index:"04",title:"Profile"}),u.jsxs(wp,{className:"container grid-12",children:[u.jsx("div",{className:"aside pad-r",children:u.jsx(xe,{href:"/about",className:"label text-link",children:"Full profile →"})}),u.jsx("div",{className:"main ruled",children:u.jsxs("p",{className:"bio",children:[yf," First-Class MSci in Computer Science."]})})]}),u.jsx("div",{className:"container",children:u.jsx(xi,{entries:xf,compact:!0})})]}),u.jsxs(hi,{children:[u.jsx(et,{index:"05",phoneIndex:"04",title:"Contact"}),u.jsxs(wp,{className:"container grid-12",children:[u.jsx("div",{className:"aside pad-r",children:u.jsx(xe,{href:"/contact",className:"label text-link",children:"Use the contact form →"})}),u.jsxs("div",{className:"main ruled",children:[u.jsx("p",{className:"big",children:"Get in touch."}),u.jsxs("p",{className:"email-row",children:[u.jsx("a",{href:`mailto:${Tt.email}`,className:"email text-link",children:Tt.email}),u.jsx(Ks,{text:Tt.email})]})]})]})]})]})}const qy=ce.header`
  .container {
    padding-block: 64px 48px;
  }

  .label .index {
    color: var(--accent);
    margin-right: 12px;
  }

  h1 {
    margin-top: 20px;
    font-size: clamp(3rem, 9vw, 7rem);
    font-stretch: 118%;
    font-weight: 600;
    line-height: 0.95;
    letter-spacing: -0.035em;
  }

  .intro {
    margin-top: 28px;
    max-width: 56ch;
    font-size: clamp(1.125rem, 1.8vw, 1.375rem);
    line-height: 1.35;
    color: var(--ink-muted);
  }

  @media (max-width: 767px) {
    .container {
      padding-block: 40px 32px;
    }
  }
`;function Cr({index:r,kicker:l,title:a,children:c}){return u.jsx(qy,{children:u.jsxs("div",{className:"container",children:[u.jsxs("p",{className:"label",children:[u.jsx("span",{className:"index",children:r}),l]}),u.jsx("h1",{children:a}),c&&u.jsx("p",{className:"intro",children:c})]})})}Cr.propTypes={index:G.string.isRequired,kicker:G.string.isRequired,title:G.string.isRequired,children:G.node};const Ky="/Personal-Portfolio/assets/portrait-mountain-VRWMxWa9.jpg",Gy="/Personal-Portfolio/assets/ski-big-air-Cv0Iay9N.jpg",Yy="/Personal-Portfolio/assets/ski-backflip-D6-q1Ihg.jpg",Jy=ce.div`
  border-top: 1px solid var(--rule);

  > * {
    padding-block: 32px 48px;
  }

  .actions {
    --span: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .copy {
    --span: 6;
  }

  .copy p {
    max-width: 62ch;
    color: var(--ink-muted);
  }

  .copy p + p {
    margin-top: 1.1em;
  }

  .copy p:first-child {
    max-width: 52ch;
    color: var(--ink);
    font-size: clamp(1.125rem, 1.6vw, 1.3125rem);
    line-height: 1.35;
    letter-spacing: -0.01em;
  }

  figure {
    --span: 3;
  }

  figure img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: 20% 62%;
  }

  figcaption {
    margin-top: 10px;
  }

  @media (max-width: 1023px) {
    .copy {
      --span: 9;
      padding-right: 0;
    }

    figure {
      --start: 4;
      --span: 6;
      padding-top: 0;
    }
  }

  /* Phones: bio first, then the photo beside the buttons. */
  @media (max-width: 639px) {
    grid-template-columns: 5fr 7fr;

    > * {
      padding-block: 24px;
    }

    .copy {
      grid-column: 1 / -1;
      order: -1;
      border-bottom: 1px solid var(--rule);
    }

    figure {
      grid-column: 1;
      order: 0;
      padding-top: 24px;
    }

    .actions {
      grid-column: 2;
      order: 1;
      align-items: stretch;
      padding-left: var(--cell);
      border-left: 1px solid var(--rule);

      > * {
        justify-content: space-between;
      }
    }
  }
`,mi=ce.section.attrs({className:"section"})`
  --section-gap: 64px;

  @media (max-width: 767px) {
    --section-gap: 48px;
  }
`,Xy=ce.div`
  > * {
    padding-top: 32px;
  }

  figure {
    display: flex;
    flex-direction: column;
  }

  .wide {
    --span: 9;
  }

  .tall {
    --span: 3;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .wide img {
    aspect-ratio: 3 / 2;
  }

  .tall img {
    flex: 1 1 0;
    min-height: 0;
  }

  figcaption {
    margin-top: 10px;
  }

  /* Phones: the two photos side by side, cropped to the same shape. */
  @media (max-width: 639px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    .wide,
    .tall {
      grid-column: auto;
    }

    .wide img,
    .tall img {
      flex: none;
      aspect-ratio: 4 / 5;
    }

    .wide img {
      object-position: 30% 50%;
    }
  }
`,Zy=ce.dl`
  > div {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    border-bottom: 1px solid var(--rule);
  }

  dt {
    grid-column: span 3;
    padding: 22px var(--cell) 22px 0;
  }

  dd {
    grid-column: span 9;
    padding: 18px 0 18px var(--cell);
    border-left: 1px solid var(--rule);
    font-size: 1.125rem;
  }

  @media (max-width: 639px) {
    > div {
      grid-template-columns: 1fr;
      padding-block: 18px;
    }

    dt,
    dd {
      grid-column: 1 / -1;
      padding: 0;
      border-left: 0;
    }

    dd {
      margin-top: 6px;
    }
  }
`;function e0(){return Un("About"),u.jsxs(u.Fragment,{children:[u.jsxs(Cr,{index:"01",kicker:"About",title:"About",children:[yf," First-Class MSci in Computer Science."]}),u.jsxs(Jy,{className:"container grid-12",children:[u.jsxs("div",{className:"actions pad-r",children:[u.jsx(nn,{to:hf,icon:"↓",download:!0,children:"Download CV"}),qs.map(({label:r,url:l})=>u.jsx(nn,{to:l,variant:"secondary",icon:"↗",children:r},r))]}),u.jsxs("div",{className:"copy ruled pad-r",children:[u.jsx("p",{children:"Sole application backend engineer on a live transcription and analysis platform used by the World Economic Forum, taken from prototype to launch, spanning real-time streaming pipelines through to NLP analysis."}),u.jsx("p",{children:"My journey into coding started back in secondary school. What began as curiosity quickly grew into a passion, especially for building things that solve real-world problems, whether that’s automating repetitive tasks, improving safety in sports, or uncovering useful insights through data."})]}),u.jsxs("figure",{className:"photo ruled",children:[u.jsx("img",{src:Ky,alt:"Michael Hills at a mountain restaurant terrace on a sunny day"}),u.jsx("figcaption",{className:"label",children:"Fig. 02: Michael Hills"})]})]}),u.jsxs(mi,{children:[u.jsx(et,{index:"A",title:"Experience"}),u.jsx("div",{className:"container",children:u.jsx(xi,{entries:xf})})]}),u.jsxs(mi,{children:[u.jsx(et,{index:"B",title:"Education"}),u.jsx("div",{className:"container",children:u.jsx(xi,{entries:$y})})]}),u.jsxs(mi,{children:[u.jsx(et,{index:"C",title:"Leadership"}),u.jsx("div",{className:"container",children:u.jsx(xi,{entries:By})})]}),u.jsxs(mi,{children:[u.jsx(et,{index:"D",title:"Skills"}),u.jsx("div",{className:"container",children:u.jsx(Zy,{children:Jo.flatMap(r=>[u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:r.title}),u.jsx("dd",{children:r.tools.join(", ")})]},r.code),r.deploy&&u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Deployment"}),u.jsx("dd",{children:r.deploy.join(", ")})]},`${r.code}-deploy`)])})})]}),u.jsxs(mi,{children:[u.jsx(et,{index:"E",title:"Off the clock",meta:Uy.join(" / ")}),u.jsxs(Xy,{className:"container grid-12",children:[u.jsxs("figure",{className:"photo wide pad-r",children:[u.jsx("img",{src:Gy,alt:"Freestyle skier mid-air over a jump at a park event",loading:"lazy"}),u.jsx("figcaption",{className:"label",children:"Fig. 03: Big air, park event"})]}),u.jsxs("figure",{className:"photo tall ruled",children:[u.jsx("img",{src:Yy,alt:"Freestyle skier upside down mid-backflip",loading:"lazy"}),u.jsx("figcaption",{className:"label",children:"Fig. 04: Backflip"})]})]})]})]})}const t0=ce.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    padding: 14px var(--cell) 14px 0;
    border-bottom: 1px solid var(--rule-strong);
    font-weight: 400;
    white-space: nowrap;
  }

  td {
    padding: 16px var(--cell) 16px 0;
    border-bottom: 1px solid var(--rule);
    vertical-align: baseline;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
    text-align: right;
  }

  .num,
  .year {
    color: var(--ink-muted);
    white-space: nowrap;
  }

  .title a {
    font-size: 1.0625rem;
    font-stretch: 108%;
    transition: color 0.15s ease;

    &:hover {
      color: var(--accent);
    }
  }

  .context {
    color: var(--ink-muted);
  }

  td.stack {
    color: var(--ink-muted);
    font-size: 0.875rem;
  }

  .links {
    white-space: nowrap;

    a + a {
      margin-left: 16px;
    }
  }

  @media (max-width: 1023px) {
    .stack {
      display: none;
    }
  }

  /* Phones: number, project and year only; the project page has the rest. */
  @media (max-width: 639px) {
    .context,
    .links {
      display: none;
    }

    .year {
      text-align: right;
      padding-right: 0;
    }
  }
`;function wf({projects:r}){return u.jsxs(t0,{children:[u.jsx("thead",{children:u.jsxs("tr",{className:"label",children:[u.jsx("th",{className:"num",scope:"col",children:"No."}),u.jsx("th",{className:"year",scope:"col",children:"Year"}),u.jsx("th",{scope:"col",children:"Project"}),u.jsx("th",{className:"context",scope:"col",children:"Context"}),u.jsx("th",{className:"stack",scope:"col",children:"Built with"}),u.jsx("th",{className:"links",scope:"col",children:"Links"})]})}),u.jsx("tbody",{children:r.map(l=>u.jsxs("tr",{children:[u.jsx("td",{className:"label num",children:il(l)}),u.jsx("td",{className:"label year",children:l.year??""}),u.jsx("td",{className:"title",children:u.jsx(xe,{href:`/project/${l.id}`,children:l.title})}),u.jsx("td",{className:"context",children:l.context}),u.jsx("td",{className:"stack",children:l.tech_stack.join(", ")}),u.jsxs("td",{className:"links label",children:[l.liveLink&&u.jsx(xe,{href:l.liveLink,className:"text-link",children:"Live ↗"}),l.githubLink&&u.jsx(xe,{href:l.githubLink,className:"text-link",children:"Code ↗"}),l.reportLink&&u.jsx(xe,{href:l.reportLink,className:"text-link",download:!0,children:"Report ↓"})]})]},l.id))})]})}wf.propTypes={projects:G.arrayOf(G.object).isRequired};const n0=["All",...new Set(Lt.flatMap(r=>r.short_category))],r0=r=>r==="All"?Lt.length:Lt.filter(l=>l.short_category.includes(r)).length,i0=ce.div`
  border-block: 1px solid var(--rule);

  > * {
    padding-block: 20px;
  }

  .search {
    --span: 3;
    display: grid;
    gap: 6px;
  }

  .chips {
    --span: 9;
    align-self: end;
  }

  @media (max-width: 639px) {
    /* One swipeable row (attribute selector outranks the base .chips rule below). */
    .chips[role='group'] {
      flex-wrap: nowrap;
      margin-right: calc(var(--gutter) * -1);
      padding-top: 0;
      padding-right: var(--gutter);
      overflow-x: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      button {
        flex-shrink: 0;
      }
    }
  }

  input {
    width: 100%;
    padding: 8px 0;
    border: 0;
    border-bottom: 1px solid var(--rule-strong);
    border-radius: 0;
    background: transparent;
    font-size: 1.125rem;

    &:focus {
      outline: none;
      border-bottom-color: var(--accent);
    }
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .chips button {
    min-height: 36px;
    padding: 0 12px;
    border: 1px solid var(--rule-strong);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-muted);
    transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;

    &:hover {
      color: var(--ink);
      border-color: var(--ink);
    }

    &[aria-pressed='true'] {
      background: var(--ink);
      border-color: var(--ink);
      color: var(--bg);
    }

    .count {
      margin-left: 8px;
      opacity: 0.6;
    }
  }

  /* View switch, pushed to the end of the chip row. */
  .views {
    display: flex;
    margin-left: auto;
  }

  .views button + button {
    margin-left: -1px;
  }
`,o0=ce.div`
  @media (max-width: 639px) {
    display: none;
  }
`,l0=ce.p`
  padding-block: 48px;
  color: var(--ink-muted);
`;function a0(){Un("Projects");const[r,l]=N.useState(""),[a,c]=N.useState("All"),[d,f]=N.useState("list"),m=r.trim().toLowerCase(),x=Lt.filter(g=>(!m||g.title.toLowerCase().includes(m))&&(a==="All"||g.short_category.includes(a)));return u.jsxs(u.Fragment,{children:[u.jsx(Cr,{index:"02",kicker:"Projects",title:"Projects",children:"Machine learning, backend and full-stack projects from university and beyond."}),u.jsxs("div",{className:"container",children:[u.jsxs(i0,{className:"grid-12",children:[u.jsxs("label",{className:"search pad-r",htmlFor:"projectSearch",children:[u.jsx("span",{className:"label",children:"Search by name"}),u.jsx("input",{id:"projectSearch",type:"search",value:r,onChange:g=>l(g.target.value),placeholder:"e.g. clustering"})]}),u.jsxs("div",{className:"chips ruled",role:"group","aria-label":"Filter by category",children:[n0.map(g=>u.jsxs("button",{type:"button","aria-pressed":a===g,onClick:()=>c(g),children:[g,u.jsx("span",{className:"count",children:r0(g)})]},g)),u.jsx("span",{className:"views hide-phone",role:"group","aria-label":"View as",children:["list","table"].map(g=>u.jsx("button",{type:"button","aria-pressed":d===g,onClick:()=>f(g),children:g},g))})]})]}),x.length===0?u.jsx(l0,{children:"No projects match your search."}):d==="table"?u.jsxs(u.Fragment,{children:[u.jsx(o0,{children:u.jsx(wf,{projects:x})}),u.jsx("div",{className:"phone-only",children:u.jsx(ol,{projects:x,compact:!0,withDesc:!0})})]}):u.jsx(ol,{projects:x,compact:!0,withDesc:!0})]})]})}const s0=ce.article`
  .crumb {
    padding-top: 40px;

    a {
      margin-right: 8px;
    }
  }

  h1 {
    margin-top: 20px;
    max-width: 16ch;
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-stretch: 118%;
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.035em;
  }

  .status {
    display: inline-block;
    margin-top: 20px;
    color: var(--accent);
  }

  .body {
    margin-top: 48px;
    border-top: 1px solid var(--rule);
  }

  .body > * {
    padding-block: 40px;
  }

  .desc {
    --span: 9;
    max-width: 68ch;
    font-size: 1.125rem;
    line-height: 1.65;
  }

  .side {
    --span: 3;
  }

  .spec {
    > div {
      padding-block: 14px;
      border-bottom: 1px solid var(--rule);
    }

    > div:first-child {
      padding-top: 0;
    }

    dd {
      margin-top: 6px;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
      padding: 3px 8px;
      border: 1px solid var(--rule-strong);
      font-family: var(--font-mono);
      font-size: 0.75rem;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }

  figure {
    border-top: 1px solid var(--rule);
    padding-top: 32px;
  }

  figure img {
    width: 100%;
    max-height: 640px;
    object-fit: cover;
  }

  figcaption {
    margin-top: 10px;
  }

  .pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 64px;
    border-block: 1px solid var(--rule);

    a {
      display: block;
      padding-block: 24px;
      transition: color 0.15s ease;

      &:hover {
        color: var(--accent);
      }
    }

    a + a,
    .next {
      text-align: right;
    }

    .title {
      display: block;
      margin-top: 6px;
      font-size: 1.25rem;
      font-stretch: 108%;
    }
  }

  @media (max-width: 1023px) {
    .desc {
      --span: 12;
      max-width: none;
    }

    .side {
      --span: 12;
      padding-top: 0;
      border-left: 0;
      padding-left: 0;
    }
  }
`;function u0(){const{id:r}=_p(),l=Lt.findIndex(f=>f.id===Number(r)),a=Lt[l];if(Un(a?a.title:"Project not found"),!a)return u.jsx(Cr,{index:"404",kicker:"Not found",title:"Project not found",children:u.jsx(xe,{href:"/projects",className:"text-link",children:"Back to all projects →"})});const c=Lt[l-1],d=Lt[l+1];return u.jsx(s0,{children:u.jsxs("div",{className:"container",children:[u.jsxs("p",{className:"label crumb",children:[u.jsx(xe,{href:"/projects",className:"text-link",children:"Projects"}),"/ ",il(a)]}),u.jsx("h1",{children:a.title}),a.status&&u.jsxs("span",{className:"label status",children:["● ",a.status]}),u.jsxs("div",{className:"body grid-12",children:[u.jsx("p",{className:"desc pad-r",children:a.long_desc}),u.jsxs("div",{className:"side ruled",children:[u.jsxs("dl",{className:"spec",children:[u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Discipline"}),u.jsx("dd",{children:u.jsx("ul",{className:"tags",children:a.long_category.map(f=>u.jsx("li",{children:f},f))})})]}),u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Stack"}),u.jsx("dd",{children:u.jsx("ul",{className:"tags",children:a.tech_stack.map(f=>u.jsx("li",{children:f},f))})})]})]}),(a.liveLink||a.note||a.githubLink||a.reportLink)&&u.jsxs("div",{className:"actions",children:[a.liveLink&&u.jsx(nn,{to:a.liveLink,icon:"↗",children:"Visit live site"}),a.note&&u.jsx(nn,{to:a.note,variant:"secondary",children:"Engineering note"}),a.githubLink&&u.jsx(nn,{to:a.githubLink,variant:a.liveLink?"secondary":"primary",icon:"↗",children:"Source on GitHub"}),a.reportLink&&u.jsx(nn,{to:a.reportLink,variant:"secondary",icon:"↓",download:!0,children:"Report"})]})]})]}),u.jsxs("figure",{children:[u.jsx("img",{src:a.img,alt:""}),u.jsxs("figcaption",{className:"label",children:["Fig. ",il(a),": ",a.title]})]}),u.jsxs("nav",{className:"pager","aria-label":"More projects",children:[c?u.jsxs(xe,{href:`/project/${c.id}`,children:[u.jsx("span",{className:"label",children:"← Previous"}),u.jsx("span",{className:"title",children:c.title})]}):u.jsx("span",{}),d&&u.jsxs(xe,{href:`/project/${d.id}`,className:"next",children:[u.jsx("span",{className:"label",children:"Next →"}),u.jsx("span",{className:"title",children:d.title})]})]})]})})}class Ei{constructor(l=0,a="Network Error"){this.status=l,this.text=a}}const c0=()=>{if(!(typeof localStorage>"u"))return{get:r=>Promise.resolve(localStorage.getItem(r)),set:(r,l)=>Promise.resolve(localStorage.setItem(r,l)),remove:r=>Promise.resolve(localStorage.removeItem(r))}},We={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:c0()},Gs=r=>r?typeof r=="string"?{publicKey:r}:r.toString()==="[object Object]"?r:{}:{},d0=(r,l="https://api.emailjs.com")=>{if(!r)return;const a=Gs(r);We.publicKey=a.publicKey,We.blockHeadless=a.blockHeadless,We.storageProvider=a.storageProvider,We.blockList=a.blockList,We.limitRate=a.limitRate,We.origin=a.origin||l},kf=async(r,l,a={})=>{const c=await fetch(We.origin+r,{method:"POST",headers:a,body:l}),d=await c.text(),f=new Ei(c.status,d);if(c.ok)return f;throw f},Sf=(r,l,a)=>{if(!r||typeof r!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l||typeof l!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},p0=r=>{if(r&&r.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},jf=r=>r.webdriver||!r.languages||r.languages.length===0,bf=()=>new Ei(451,"Unavailable For Headless Browser"),f0=(r,l)=>{if(!Array.isArray(r))throw"The BlockList list has to be an array";if(typeof l!="string")throw"The BlockList watchVariable has to be a string"},h0=r=>{var l;return!((l=r.list)!=null&&l.length)||!r.watchVariable},m0=(r,l)=>r instanceof FormData?r.get(l):r[l],Nf=(r,l)=>{if(h0(r))return!1;f0(r.list,r.watchVariable);const a=m0(l,r.watchVariable);return typeof a!="string"?!1:r.list.includes(a)},Cf=()=>new Ei(403,"Forbidden"),g0=(r,l)=>{if(typeof r!="number"||r<0)throw"The LimitRate throttle has to be a positive number";if(l&&typeof l!="string")throw"The LimitRate ID has to be a non-empty string"},v0=async(r,l,a)=>{const c=Number(await a.get(r)||0);return l-Date.now()+c},Ef=async(r,l,a)=>{if(!l.throttle||!a)return!1;g0(l.throttle,l.id);const c=l.id||r;return await v0(c,l.throttle,a)>0?!0:(await a.set(c,Date.now().toString()),!1)},Pf=()=>new Ei(429,"Too Many Requests"),y0=async(r,l,a,c)=>{const d=Gs(c),f=d.publicKey||We.publicKey,m=d.blockHeadless||We.blockHeadless,x=d.storageProvider||We.storageProvider,g={...We.blockList,...d.blockList},w={...We.limitRate,...d.limitRate};return m&&jf(navigator)?Promise.reject(bf()):(Sf(f,r,l),p0(a),a&&Nf(g,a)?Promise.reject(Cf()):await Ef(location.pathname,w,x)?Promise.reject(Pf()):kf("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:f,service_id:r,template_id:l,template_params:a}),{"Content-type":"application/json"}))},x0=r=>{if(!r||r.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},w0=r=>typeof r=="string"?document.querySelector(r):r,k0=async(r,l,a,c)=>{const d=Gs(c),f=d.publicKey||We.publicKey,m=d.blockHeadless||We.blockHeadless,x=We.storageProvider||d.storageProvider,g={...We.blockList,...d.blockList},w={...We.limitRate,...d.limitRate};if(m&&jf(navigator))return Promise.reject(bf());const C=w0(a);Sf(f,r,l),x0(C);const E=new FormData(C);return Nf(g,E)?Promise.reject(Cf()):await Ef(location.pathname,w,x)?Promise.reject(Pf()):(E.append("lib_version","4.4.1"),E.append("service_id",r),E.append("template_id",l),E.append("user_id",f),kf("/api/v1.0/email/send-form",E))},S0={init:d0,send:y0,sendForm:k0,EmailJSResponseStatus:Ei},j0=ce.div`
  position: fixed;
  right: var(--gutter);
  bottom: var(--gutter);
  z-index: 100;
  max-width: min(360px, calc(100vw - 2 * var(--gutter)));
  padding: 14px 18px 14px 20px;
  border-left: 3px solid var(--accent);
  background: var(--ink);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  animation: toast-in 0.25s ease-out;

  &.success {
    border-left-color: #3fb27f;
  }

  @keyframes toast-in {
    from {
      transform: translateY(8px);
      opacity: 0;
    }
  }
`,b0=ce.form`
  display: grid;
  gap: 28px;

  label {
    display: grid;
    gap: 8px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 0;
    border: 0;
    border-bottom: 1px solid var(--rule-strong);
    border-radius: 0;
    background: transparent;
    font-size: 1.125rem;
    transition: border-color 0.15s ease;

    &:hover {
      border-bottom-color: var(--ink-muted);
    }

    &:focus {
      outline: none;
      border-bottom-color: var(--accent);
    }
  }

  textarea {
    min-height: 160px;
    resize: vertical;
  }

  button[type='submit'] {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
    padding: 0 18px;
    border: 1px solid var(--ink);
    background: var(--ink);
    color: var(--bg);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

    &:hover:not(:disabled) {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--on-accent);
    }

    &:disabled {
      opacity: 0.6;
      cursor: wait;
    }
  }
`;function N0(){const[r,l]=N.useState(""),[a,c]=N.useState(""),[d,f]=N.useState(""),[m,x]=N.useState(""),[g,w]=N.useState(!1);N.useEffect(()=>{if(m){const P=setTimeout(()=>{x("")},3e3);return()=>clearTimeout(P)}},[m]);const C=async P=>{if(P.preventDefault(),!r.trim()||!a.trim()||!d.trim()){x("validation");return}w(!0);try{(await S0.send("service_k3lv3yt","template_6jr1qvs",{name:r,email:a,title:"Portfolio Contact Form",message:d},"Rf6SCQU7futwW0J48")).status===200?(x("success"),l(""),c(""),f("")):x("error")}catch(A){console.error("Failed to send email:",A),x("error")}finally{w(!1)}},E={success:"Message sent. Thanks, I’ll get back to you soon.",validation:"Please fill in all fields before sending.",error:"Message failed to send. Please try again or email me directly."};return u.jsxs(u.Fragment,{children:[u.jsxs(b0,{onSubmit:C,children:[u.jsxs("label",{htmlFor:"name",children:[u.jsx("span",{className:"label",children:"Name"}),u.jsx("input",{type:"text",id:"name",name:"name",value:r,onChange:P=>l(P.target.value)})]}),u.jsxs("label",{htmlFor:"email",children:[u.jsx("span",{className:"label",children:"Email"}),u.jsx("input",{type:"email",id:"email",name:"email",value:a,onChange:P=>c(P.target.value)})]}),u.jsxs("label",{htmlFor:"message",children:[u.jsx("span",{className:"label",children:"Message"}),u.jsx("textarea",{id:"message",name:"message",value:d,onChange:P=>f(P.target.value)})]}),u.jsxs("button",{type:"submit",disabled:g,children:[g?"Sending…":"Send message",u.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),m&&u.jsx(j0,{role:"status",className:m,children:E[m]})]})}const C0=[{term:"Email",label:Tt.email,href:`mailto:${Tt.email}`,copy:Tt.email},{term:"Location",label:Tt.location,href:Tt.mapUrl},...qs.map(({label:r,url:l})=>({term:r,label:l.replace(/^https:\/\/(www\.)?/,""),href:l}))],E0=ce.div`
  border-top: 1px solid var(--rule);

  > * {
    --span: 6;
    padding-block: 40px;
  }

  dl > div {
    padding-block: 16px;
    border-bottom: 1px solid var(--rule);
  }

  dl > div:first-child {
    padding-top: 0;
  }

  dd {
    margin-top: 4px;
    font-size: 1.125rem;
    overflow-wrap: anywhere;
  }

  .copy {
    margin-left: 14px;
  }

  @media (max-width: 639px) {
    > * + * {
      border-top: 1px solid var(--rule);
    }
  }
`;function P0(){return Un("Contact"),u.jsxs(u.Fragment,{children:[u.jsx(Cr,{index:"04",kicker:"Contact",title:"Contact",children:"Send a message using the form, or reach me directly."}),u.jsx("div",{className:"container",children:u.jsxs(E0,{className:"grid-12",children:[u.jsx("dl",{className:"pad-r",children:C0.map(({term:r,label:l,href:a,copy:c})=>u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:r}),u.jsxs("dd",{children:[u.jsx(xe,{href:a,className:"text-link",children:l}),c&&u.jsx(Ks,{text:c,className:"copy"})]})]},r))}),u.jsx("div",{className:"ruled",children:u.jsx(N0,{})})]})})]})}const vi="/notes",wi=[{...wy,stats:mr.stats},Ty].map((r,l)=>({...r,number:String(l+1).padStart(2,"0"),path:`${vi}/${r.slug}`})),R0=r=>wi.find(l=>l.slug===r),_0=ce.ol`
  border-top: 1px solid var(--rule);

  li {
    border-bottom: 1px solid var(--rule);
  }

  a {
    padding-block: 28px;
    transition: color 0.15s ease;

    &:hover h2,
    &:hover .arrow {
      color: var(--accent);
    }
  }

  .num {
    --span: 3;
    padding-top: 0.35em;
    color: var(--accent);
  }

  .main {
    --span: 6;
  }

  h2 {
    font-size: clamp(1.5rem, 2.6vw, 2.25rem);
    font-stretch: 112%;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.05;
    transition: color 0.15s ease;
  }

  .org {
    margin-top: 8px;
  }

  .intro {
    margin-top: 14px;
    max-width: 56ch;
    color: var(--ink-muted);
  }

  .side {
    --span: 3;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .stack {
    color: var(--ink-muted);
    line-height: 1.8;
  }

  .arrow {
    font-size: 1.25rem;
    transition: color 0.15s ease;
  }

  @media (max-width: 639px) {
    a {
      padding-block: 22px;
    }

    .num {
      padding: 0 0 8px;
    }

    .side {
      margin-top: 14px;
    }
  }
`;function T0(){return Un("Notes"),u.jsxs(u.Fragment,{children:[u.jsx(Cr,{index:"03",kicker:"Notes",title:"Notes",children:"Engineering write-ups of systems I have built: how they work, what was hard, and how it turned out."}),u.jsx("div",{className:"container",children:u.jsx(_0,{children:wi.map(r=>u.jsx("li",{children:u.jsxs(xe,{href:r.path,className:"grid-12",children:[u.jsxs("span",{className:"label num",children:["Note ",r.number]}),u.jsxs("div",{className:"main pad-r",children:[u.jsx("h2",{children:r.title}),u.jsx("p",{className:"label org",children:r.org}),u.jsx("p",{className:"intro",children:r.intro})]}),u.jsxs("div",{className:"side ruled",children:[u.jsx("p",{className:"label stack",children:r.stack.slice(0,5).join(" / ")}),u.jsx("span",{className:"arrow","aria-hidden":"true",children:"→"})]})]})},r.slug))})})]})}const L0=ce.header`
  .crumb {
    padding-top: 40px;
  }

  .crumb a {
    margin-right: 8px;
  }

  h1 {
    margin-top: 20px;
    max-width: 18ch;
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-stretch: 118%;
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.035em;
  }

  .body {
    margin-top: 48px;
    border-top: 1px solid var(--rule);
  }

  .body > * {
    padding-block: 40px;
  }

  .intro {
    --span: 9;
    max-width: 40ch;
    font-size: clamp(1.25rem, 2.2vw, 1.75rem);
    line-height: 1.3;
    letter-spacing: -0.015em;
  }

  .side {
    --span: 3;
  }

  .spec > div {
    padding-block: 14px;
    border-bottom: 1px solid var(--rule);
  }

  .spec > div:first-child {
    padding-top: 0;
  }

  .spec dd {
    margin-top: 6px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    li {
      padding: 3px 8px;
      border: 1px solid var(--rule-strong);
      font-family: var(--font-mono);
      font-size: 0.75rem;
    }
  }

  /* Headline figures across the four quarters. */
  .stats {
    border-top: 1px solid var(--rule);
  }

  .stats > div {
    --span: 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-block: 28px;
  }

  .stats dd {
    order: -1;
    font-size: clamp(2rem, 3.4vw, 3rem);
    font-stretch: 118%;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .stats dd.words {
    font-size: clamp(1.5rem, 2.4vw, 2.125rem);
    line-height: 1.15;
  }

  @media (max-width: 1023px) {
    .intro,
    .side {
      --span: 12;
    }

    .side {
      padding-top: 0;
      padding-left: 0;
      border-left: 0;
    }

    .stats > div {
      --span: 6;
    }

    .stats > div:nth-child(3) {
      padding-left: 0;
      border-left: 0;
    }

    .stats > div:nth-child(n + 3) {
      border-top: 1px solid var(--rule);
    }
  }

  @media (max-width: 639px) {
    .crumb {
      padding-top: 32px;
    }

    .body {
      margin-top: 32px;
    }

    .body > * {
      padding-block: 28px;
    }

    .side {
      padding-top: 0;
    }

    /* Figures in a 2 × 2 grid rather than four full-width rows. */
    .stats {
      grid-template-columns: 1fr 1fr;
    }

    .stats > div {
      grid-column: auto;
      padding: 20px 12px 20px 0;
    }

    .stats > div:nth-child(even) {
      padding-left: 16px;
      border-left: 1px solid var(--rule);
    }
  }
`,Uo=ce.section.attrs({className:"section"})`
  --section-gap: 80px;

  @media (max-width: 767px) {
    --section-gap: 48px;
  }
`,z0=ce.div`
  > div {
    --start: 4;
    --span: 7;
    padding-block: 32px 8px;
  }

  p {
    max-width: 64ch;
    font-size: 1.125rem;
    line-height: 1.65;
  }

  p + p {
    margin-top: 1.1em;
    color: var(--ink-muted);
  }

  @media (max-width: 639px) {
    > div {
      padding-block: 24px 0;
    }

    p {
      font-size: 1.0625rem;
    }
  }
`,I0=ce.ol`
  padding-top: 32px;

  > li {
    position: relative;
  }

  > li + li {
    margin-top: 28px;
  }

  /* Arrow between stages, on the 25% line. */
  > li + li::before {
    content: '↓';
    position: absolute;
    top: -26px;
    left: calc(25% + var(--cell) + 12px);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--accent);
  }

  .stage {
    --span: 3;
    padding-top: 14px;
  }

  .stage .note {
    display: block;
    margin-top: 6px;
    color: var(--ink-faint);
    text-transform: none;
    letter-spacing: 0;
  }

  .nodes {
    --span: 9;
    padding-left: var(--cell);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }

  .node {
    padding: 14px 16px;
    border: 1px solid var(--rule-strong);
    background: var(--bg-raised);
  }

  .node strong {
    display: block;
    font-weight: 500;
    font-stretch: 108%;
  }

  .node span {
    display: block;
    margin-top: 4px;
    font-size: 0.875rem;
    color: var(--ink-muted);
  }

  @media (max-width: 639px) {
    > li + li {
      margin-top: 36px;
    }

    > li + li::before {
      top: -30px;
      left: 0;
    }

    .stage {
      padding-top: 0;
      padding-bottom: 10px;
    }

    .nodes {
      padding-left: 0;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .node {
      padding: 12px 14px;
    }
  }
`,A0=ce.dl`
  margin-top: 48px;
  border-top: 1px solid var(--rule);

  > div {
    border-bottom: 1px solid var(--rule);
  }

  dt {
    --span: 3;
    padding: 22px var(--cell) 22px 0;
  }

  dd {
    --span: 9;
    max-width: 72ch;
    padding-block: 18px;
    color: var(--ink-muted);
  }

  @media (max-width: 639px) {
    margin-top: 32px;

    > div {
      padding-block: 18px;
    }

    dt,
    dd {
      padding: 0;
    }

    dd {
      margin-top: 6px;
    }
  }
`,F0=ce.ol`
  > li {
    border-bottom: 1px solid var(--rule);
  }

  .num {
    --span: 3;
    align-self: start;
    padding-block: 32px;
    color: var(--accent);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }

  .detail {
    --span: 9;
    padding-block: 28px 36px;
  }

  h3 {
    font-size: clamp(1.375rem, 2.2vw, 1.75rem);
    font-stretch: 108%;
    letter-spacing: -0.015em;
  }

  .part {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: 16px;
    margin-top: 18px;
    max-width: 78ch;
  }

  .part .label {
    padding-top: 0.3em;
  }

  .part p {
    color: var(--ink-muted);
  }

  .part.result p {
    color: var(--ink);
  }

  @media (max-width: 639px) {
    > li {
      padding-block: 24px;
    }

    .num,
    .detail {
      padding: 0;
    }

    .detail {
      margin-top: 8px;
    }

    .part {
      grid-template-columns: 1fr;
      gap: 4px;
      margin-top: 16px;
    }
  }
`,O0=ce.ul`
  li {
    --start: 4;
    --span: 9;
    padding: 18px 0 18px var(--cell);
    display: flex;
    gap: 14px;
    border-bottom: 1px solid var(--rule);
    font-size: 1.125rem;
  }

  li::before {
    content: '';
    flex: none;
    width: 8px;
    height: 8px;
    margin-top: 0.5em;
    background: var(--accent);
  }

  @media (max-width: 639px) {
    li {
      padding-left: 0;
      font-size: 1rem;
    }
  }
`,M0=ce.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 64px;
  border-block: 1px solid var(--rule);

  a {
    display: block;
    padding-block: 24px;
    transition: color 0.15s ease;

    &:hover {
      color: var(--accent);
    }
  }

  a + a {
    text-align: right;
  }

  .title {
    display: block;
    margin-top: 6px;
    font-size: 1.25rem;
    font-stretch: 108%;
  }
`,D0=[["problem","Problem"],["approach","What I did"],["result","Result"]];function $0(){const{slug:r}=_p(),l=R0(r);if(Un(l?`Note ${l.number}: ${l.title}`:"Notes"),!l)return u.jsx(zp,{to:vi,replace:!0});const a=wi.indexOf(l),c=wi[a-1],d=wi[a+1];return u.jsxs("article",{children:[u.jsxs(L0,{className:"container",children:[u.jsxs("p",{className:"label crumb",children:[u.jsx(xe,{href:vi,className:"text-link",children:"Notes"}),"/ Note ",l.number," / ",l.org]}),u.jsx("h1",{children:l.title}),u.jsxs("div",{className:"body grid-12",children:[u.jsx("p",{className:"intro pad-r",children:l.intro}),u.jsx("div",{className:"side ruled",children:u.jsxs("dl",{className:"spec",children:[l.spec.map(f=>u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:f.term}),u.jsx("dd",{children:f.href?u.jsxs(xe,{href:f.href,className:"text-link",children:[f.value," ↗"]}):f.value})]},f.term)),u.jsxs("div",{children:[u.jsx("dt",{className:"label",children:"Stack"}),u.jsx("dd",{children:u.jsx("ul",{className:"tags",children:l.stack.map(f=>u.jsx("li",{children:f},f))})})]})]})})]}),l.stats&&u.jsx("dl",{className:"stats grid-12",children:l.stats.map((f,m)=>u.jsxs("div",{className:[m>0&&"ruled","pad-r"].filter(Boolean).join(" "),children:[u.jsx("dt",{className:"label",children:f.label}),u.jsx("dd",{className:/^\d/.test(f.value)?void 0:"words",children:f.value})]},f.label))})]}),u.jsxs(Uo,{children:[u.jsx(et,{index:"01",title:"Overview"}),u.jsx(z0,{className:"container grid-12",children:u.jsx("div",{className:"ruled pad-r",children:l.overview.map(f=>u.jsx("p",{children:f},f))})})]}),u.jsxs(Uo,{children:[u.jsx(et,{index:"02",title:"Architecture",meta:"Data flow"}),u.jsxs("div",{className:"container",children:[u.jsx(I0,{"aria-label":"Data flow, from input to analysis",children:l.flow.map(f=>u.jsxs("li",{className:"grid-12",children:[u.jsxs("p",{className:"label stage pad-r",children:[f.stage,f.note&&u.jsx("span",{className:"note",children:f.note})]}),u.jsx("ul",{className:"nodes",children:f.nodes.map(m=>u.jsxs("li",{className:"node",children:[u.jsx("strong",{children:m.name}),u.jsx("span",{children:m.detail})]},m.name))})]},f.stage))}),u.jsx(A0,{children:l.architecture.map(f=>u.jsxs("div",{className:"grid-12",children:[u.jsx("dt",{className:"label",children:f.term}),u.jsx("dd",{className:"ruled",children:f.text})]},f.term))})]})]}),u.jsxs(Uo,{children:[u.jsx(et,{index:"03",title:"Challenges",meta:`${String(l.challenges.length).padStart(2,"0")} problems`}),u.jsx("div",{className:"container",children:u.jsx(F0,{children:l.challenges.map((f,m)=>u.jsxs("li",{id:`challenge-${m+1}`,className:"grid-12",children:[u.jsxs("a",{href:`#challenge-${m+1}`,className:"label num","aria-label":`Link to challenge 3.${m+1}`,children:["§ 3.",m+1]}),u.jsxs("div",{className:"detail ruled",children:[u.jsx("h3",{children:f.title}),D0.map(([x,g])=>u.jsxs("div",{className:`part ${x}`,children:[u.jsx("span",{className:"label",children:g}),u.jsx("p",{children:f[x]})]},x))]})]},f.title))})})]}),u.jsxs(Uo,{children:[u.jsx(et,{index:"04",title:"Results"}),u.jsxs("div",{className:"container",children:[u.jsx(O0,{className:"grid-12",children:l.results.map(f=>u.jsx("li",{children:f},f))}),u.jsxs(M0,{"aria-label":"More notes",children:[c?u.jsxs(xe,{href:c.path,children:[u.jsxs("span",{className:"label",children:["← Note ",c.number]}),u.jsx("span",{className:"title",children:c.title})]}):u.jsxs(xe,{href:vi,children:[u.jsx("span",{className:"label",children:"← Back"}),u.jsx("span",{className:"title",children:"All notes"})]}),d?u.jsxs(xe,{href:d.path,children:[u.jsxs("span",{className:"label",children:["Note ",d.number," →"]}),u.jsx("span",{className:"title",children:d.title})]}):u.jsxs(xe,{href:vi,children:[u.jsx("span",{className:"label",children:"All notes →"}),u.jsx("span",{className:"title",children:"Notes"})]})]})]})]})]})}function B0(){return u.jsxs(Bp,{children:[u.jsx(cy,{}),u.jsxs(qg,{basename:"/Personal-Portfolio/",children:[u.jsx(yy,{}),u.jsx(fy,{}),u.jsx("main",{children:u.jsxs(jg,{children:[u.jsx(Zt,{path:"/",element:u.jsx(Qy,{})}),u.jsx(Zt,{path:"/about",element:u.jsx(e0,{})}),u.jsx(Zt,{path:"/projects",element:u.jsx(a0,{})}),u.jsx(Zt,{path:"/project/:id",element:u.jsx(u0,{})}),u.jsx(Zt,{path:"/notes",element:u.jsx(T0,{})}),u.jsx(Zt,{path:"/notes/:slug",element:u.jsx($0,{})}),u.jsx(Zt,{path:"/contact",element:u.jsx(P0,{})}),u.jsx(Zt,{path:"*",element:u.jsx(zp,{to:"/",replace:!0})})]})}),u.jsx(vy,{})]})]})}zm.createRoot(document.getElementById("root")).render(u.jsx(N.StrictMode,{children:u.jsx(B0,{})}));
