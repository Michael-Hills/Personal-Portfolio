(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();function vf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ns={exports:{}},ui={},rs={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function mm(){if(Dd)return ae;Dd=1;var i=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),N=Symbol.iterator;function R(k){return k===null||typeof k!="object"?null:(k=N&&k[N]||k["@@iterator"],typeof k=="function"?k:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,O={};function I(k,_,re){this.props=k,this.context=_,this.refs=O,this.updater=re||F}I.prototype.isReactComponent={},I.prototype.setState=function(k,_){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,_,"setState")},I.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function D(){}D.prototype=I.prototype;function K(k,_,re){this.props=k,this.context=_,this.refs=O,this.updater=re||F}var M=K.prototype=new D;M.constructor=K,$(M,I.prototype),M.isPureReactComponent=!0;var q=Array.isArray,ne=Object.prototype.hasOwnProperty,ee={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function Se(k,_,re){var ie,se={},oe=null,pe=null;if(_!=null)for(ie in _.ref!==void 0&&(pe=_.ref),_.key!==void 0&&(oe=""+_.key),_)ne.call(_,ie)&&!Y.hasOwnProperty(ie)&&(se[ie]=_[ie]);var ue=arguments.length-2;if(ue===1)se.children=re;else if(1<ue){for(var de=Array(ue),$e=0;$e<ue;$e++)de[$e]=arguments[$e+2];se.children=de}if(k&&k.defaultProps)for(ie in ue=k.defaultProps,ue)se[ie]===void 0&&(se[ie]=ue[ie]);return{$$typeof:i,type:k,key:oe,ref:pe,props:se,_owner:ee.current}}function ye(k,_){return{$$typeof:i,type:k.type,key:_,ref:k.ref,props:k.props,_owner:k._owner}}function Fe(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function pt(k){var _={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(re){return _[re]})}var ht=/\/+/g;function qe(k,_){return typeof k=="object"&&k!==null&&k.key!=null?pt(""+k.key):_.toString(36)}function lt(k,_,re,ie,se){var oe=typeof k;(oe==="undefined"||oe==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(oe){case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case i:case a:pe=!0}}if(pe)return pe=k,se=se(pe),k=ie===""?"."+qe(pe,0):ie,q(se)?(re="",k!=null&&(re=k.replace(ht,"$&/")+"/"),lt(se,_,re,"",function($e){return $e})):se!=null&&(Fe(se)&&(se=ye(se,re+(!se.key||pe&&pe.key===se.key?"":(""+se.key).replace(ht,"$&/")+"/")+k)),_.push(se)),1;if(pe=0,ie=ie===""?".":ie+":",q(k))for(var ue=0;ue<k.length;ue++){oe=k[ue];var de=ie+qe(oe,ue);pe+=lt(oe,_,re,de,se)}else if(de=R(k),typeof de=="function")for(k=de.call(k),ue=0;!(oe=k.next()).done;)oe=oe.value,de=ie+qe(oe,ue++),pe+=lt(oe,_,re,de,se);else if(oe==="object")throw _=String(k),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return pe}function mt(k,_,re){if(k==null)return k;var ie=[],se=0;return lt(k,ie,"","",function(oe){return _.call(re,oe,se++)}),ie}function We(k){if(k._status===-1){var _=k._result;_=_(),_.then(function(re){(k._status===0||k._status===-1)&&(k._status=1,k._result=re)},function(re){(k._status===0||k._status===-1)&&(k._status=2,k._result=re)}),k._status===-1&&(k._status=0,k._result=_)}if(k._status===1)return k._result.default;throw k._result}var ge={current:null},A={transition:null},G={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:A,ReactCurrentOwner:ee};function B(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:mt,forEach:function(k,_,re){mt(k,function(){_.apply(this,arguments)},re)},count:function(k){var _=0;return mt(k,function(){_++}),_},toArray:function(k){return mt(k,function(_){return _})||[]},only:function(k){if(!Fe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ae.Component=I,ae.Fragment=o,ae.Profiler=c,ae.PureComponent=K,ae.StrictMode=u,ae.Suspense=v,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ae.act=B,ae.cloneElement=function(k,_,re){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ie=$({},k.props),se=k.key,oe=k.ref,pe=k._owner;if(_!=null){if(_.ref!==void 0&&(oe=_.ref,pe=ee.current),_.key!==void 0&&(se=""+_.key),k.type&&k.type.defaultProps)var ue=k.type.defaultProps;for(de in _)ne.call(_,de)&&!Y.hasOwnProperty(de)&&(ie[de]=_[de]===void 0&&ue!==void 0?ue[de]:_[de])}var de=arguments.length-2;if(de===1)ie.children=re;else if(1<de){ue=Array(de);for(var $e=0;$e<de;$e++)ue[$e]=arguments[$e+2];ie.children=ue}return{$$typeof:i,type:k.type,key:se,ref:oe,props:ie,_owner:pe}},ae.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:p,_context:k},k.Consumer=k},ae.createElement=Se,ae.createFactory=function(k){var _=Se.bind(null,k);return _.type=k,_},ae.createRef=function(){return{current:null}},ae.forwardRef=function(k){return{$$typeof:x,render:k}},ae.isValidElement=Fe,ae.lazy=function(k){return{$$typeof:P,_payload:{_status:-1,_result:k},_init:We}},ae.memo=function(k,_){return{$$typeof:w,type:k,compare:_===void 0?null:_}},ae.startTransition=function(k){var _=A.transition;A.transition={};try{k()}finally{A.transition=_}},ae.unstable_act=B,ae.useCallback=function(k,_){return ge.current.useCallback(k,_)},ae.useContext=function(k){return ge.current.useContext(k)},ae.useDebugValue=function(){},ae.useDeferredValue=function(k){return ge.current.useDeferredValue(k)},ae.useEffect=function(k,_){return ge.current.useEffect(k,_)},ae.useId=function(){return ge.current.useId()},ae.useImperativeHandle=function(k,_,re){return ge.current.useImperativeHandle(k,_,re)},ae.useInsertionEffect=function(k,_){return ge.current.useInsertionEffect(k,_)},ae.useLayoutEffect=function(k,_){return ge.current.useLayoutEffect(k,_)},ae.useMemo=function(k,_){return ge.current.useMemo(k,_)},ae.useReducer=function(k,_,re){return ge.current.useReducer(k,_,re)},ae.useRef=function(k){return ge.current.useRef(k)},ae.useState=function(k){return ge.current.useState(k)},ae.useSyncExternalStore=function(k,_,re){return ge.current.useSyncExternalStore(k,_,re)},ae.useTransition=function(){return ge.current.useTransition()},ae.version="18.3.1",ae}var Ad;function Rs(){return Ad||(Ad=1,rs.exports=mm()),rs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d;function gm(){if($d)return ui;$d=1;var i=Rs(),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(x,v,w){var P,N={},R=null,F=null;w!==void 0&&(R=""+w),v.key!==void 0&&(R=""+v.key),v.ref!==void 0&&(F=v.ref);for(P in v)u.call(v,P)&&!p.hasOwnProperty(P)&&(N[P]=v[P]);if(x&&x.defaultProps)for(P in v=x.defaultProps,v)N[P]===void 0&&(N[P]=v[P]);return{$$typeof:a,type:x,key:R,ref:F,props:N,_owner:c.current}}return ui.Fragment=o,ui.jsx=m,ui.jsxs=m,ui}var Bd;function vm(){return Bd||(Bd=1,ns.exports=gm()),ns.exports}var f=vm(),j=Rs();const en=vf(j);var bl={},is={exports:{}},it={},ls={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function ym(){return Ud||(Ud=1,function(i){function a(A,G){var B=A.length;A.push(G);e:for(;0<B;){var k=B-1>>>1,_=A[k];if(0<c(_,G))A[k]=G,A[B]=_,B=k;else break e}}function o(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var G=A[0],B=A.pop();if(B!==G){A[0]=B;e:for(var k=0,_=A.length,re=_>>>1;k<re;){var ie=2*(k+1)-1,se=A[ie],oe=ie+1,pe=A[oe];if(0>c(se,B))oe<_&&0>c(pe,se)?(A[k]=pe,A[oe]=B,k=oe):(A[k]=se,A[ie]=B,k=ie);else if(oe<_&&0>c(pe,B))A[k]=pe,A[oe]=B,k=oe;else break e}}return G}function c(A,G){var B=A.sortIndex-G.sortIndex;return B!==0?B:A.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var m=Date,x=m.now();i.unstable_now=function(){return m.now()-x}}var v=[],w=[],P=1,N=null,R=3,F=!1,$=!1,O=!1,I=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(A){for(var G=o(w);G!==null;){if(G.callback===null)u(w);else if(G.startTime<=A)u(w),G.sortIndex=G.expirationTime,a(v,G);else break;G=o(w)}}function q(A){if(O=!1,M(A),!$)if(o(v)!==null)$=!0,We(ne);else{var G=o(w);G!==null&&ge(q,G.startTime-A)}}function ne(A,G){$=!1,O&&(O=!1,D(Se),Se=-1),F=!0;var B=R;try{for(M(G),N=o(v);N!==null&&(!(N.expirationTime>G)||A&&!pt());){var k=N.callback;if(typeof k=="function"){N.callback=null,R=N.priorityLevel;var _=k(N.expirationTime<=G);G=i.unstable_now(),typeof _=="function"?N.callback=_:N===o(v)&&u(v),M(G)}else u(v);N=o(v)}if(N!==null)var re=!0;else{var ie=o(w);ie!==null&&ge(q,ie.startTime-G),re=!1}return re}finally{N=null,R=B,F=!1}}var ee=!1,Y=null,Se=-1,ye=5,Fe=-1;function pt(){return!(i.unstable_now()-Fe<ye)}function ht(){if(Y!==null){var A=i.unstable_now();Fe=A;var G=!0;try{G=Y(!0,A)}finally{G?qe():(ee=!1,Y=null)}}else ee=!1}var qe;if(typeof K=="function")qe=function(){K(ht)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=ht,qe=function(){mt.postMessage(null)}}else qe=function(){I(ht,0)};function We(A){Y=A,ee||(ee=!0,qe())}function ge(A,G){Se=I(function(){A(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(A){A.callback=null},i.unstable_continueExecution=function(){$||F||($=!0,We(ne))},i.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<A?Math.floor(1e3/A):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return o(v)},i.unstable_next=function(A){switch(R){case 1:case 2:case 3:var G=3;break;default:G=R}var B=R;R=G;try{return A()}finally{R=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(A,G){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=R;R=A;try{return G()}finally{R=B}},i.unstable_scheduleCallback=function(A,G,B){var k=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?k+B:k):B=k,A){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=B+_,A={id:P++,callback:G,priorityLevel:A,startTime:B,expirationTime:_,sortIndex:-1},B>k?(A.sortIndex=B,a(w,A),o(v)===null&&A===o(w)&&(O?(D(Se),Se=-1):O=!0,ge(q,B-k))):(A.sortIndex=_,a(v,A),$||F||($=!0,We(ne))),A},i.unstable_shouldYield=pt,i.unstable_wrapCallback=function(A){var G=R;return function(){var B=R;R=G;try{return A.apply(this,arguments)}finally{R=B}}}}(os)),os}var Hd;function xm(){return Hd||(Hd=1,ls.exports=ym()),ls.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function wm(){if(Wd)return it;Wd=1;var i=Rs(),a=xm();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(c[e]=t,e=0;e<t.length;e++)u.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},N={};function R(e){return v.call(N,e)?!0:v.call(P,e)?!1:w.test(e)?N[e]=!0:(P[e]=!0,!1)}function F(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $(e,t,n,r){if(t===null||typeof t>"u"||F(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,l,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,K);I[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,K);I[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,K);I[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,n,r){var l=I.hasOwnProperty(t)?I[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($(t,n,l,r)&&(n=null),r||l===null?R(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var q=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),ee=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),pt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),A=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,k;function _(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var re=!1;function ie(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),s=r.stack.split(`
`),d=l.length-1,h=s.length-1;1<=d&&0<=h&&l[d]!==s[h];)h--;for(;1<=d&&0<=h;d--,h--)if(l[d]!==s[h]){if(d!==1||h!==1)do if(d--,h--,0>h||l[d]!==s[h]){var g=`
`+l[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=h);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_(e):""}function se(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case ee:return"Portal";case ye:return"Profiler";case Se:return"StrictMode";case qe:return"Suspense";case lt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pt:return(e.displayName||"Context")+".Consumer";case Fe:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mt:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=de(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){r=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){e._valueTracker||(e._valueTracker=$e(e))}function Et(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function so(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qs(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function uo(e,t){Qs(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?co(e,t.type,n):t.hasOwnProperty("defaultValue")&&co(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function co(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(Cr(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function Ys(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function po(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xp=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Zs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Zs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var wp=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var go=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yo=null,Hn=null,Wn=null;function tu(e){if(e=Gr(e)){if(typeof yo!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Yi(t),yo(e.stateNode,e.type,t))}}function nu(e){Hn?Wn?Wn.push(e):Wn=[e]:Hn=e}function ru(){if(Hn){var e=Hn,t=Wn;if(Wn=Hn=null,tu(e),t)for(e=0;e<t.length;e++)tu(t[e])}}function iu(e,t){return e(t)}function lu(){}var xo=!1;function ou(e,t,n){if(xo)return e(t,n);xo=!0;try{return iu(e,t,n)}finally{xo=!1,(Hn!==null||Wn!==null)&&(lu(),ru())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var wo=!1;if(x)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{wo=!1}function kp(e,t,n,r,l,s,d,h,g){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(T){this.onError(T)}}var _r=!1,Ni=null,Ri=!1,ko=null,Sp={onError:function(e){_r=!0,Ni=e}};function Ep(e,t,n,r,l,s,d,h,g){_r=!1,Ni=null,kp.apply(Sp,arguments)}function Cp(e,t,n,r,l,s,d,h,g){if(Ep.apply(this,arguments),_r){if(_r){var C=Ni;_r=!1,Ni=null}else throw Error(o(198));Ri||(Ri=!0,ko=C)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(Pn(e)!==e)throw Error(o(188))}function jp(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return su(l),e;if(s===r)return su(l),t;s=s.sibling}throw Error(o(188))}if(n.return!==r.return)n=l,r=s;else{for(var d=!1,h=l.child;h;){if(h===n){d=!0,n=l,r=s;break}if(h===r){d=!0,r=l,n=s;break}h=h.sibling}if(!d){for(h=s.child;h;){if(h===n){d=!0,n=s,r=l;break}if(h===r){d=!0,r=s,n=l;break}h=h.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function uu(e){return e=jp(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cu(e);if(t!==null)return t;e=e.sibling}return null}var du=a.unstable_scheduleCallback,fu=a.unstable_cancelCallback,Pp=a.unstable_shouldYield,Np=a.unstable_requestPaint,_e=a.unstable_now,Rp=a.unstable_getCurrentPriorityLevel,So=a.unstable_ImmediatePriority,pu=a.unstable_UserBlockingPriority,_i=a.unstable_NormalPriority,_p=a.unstable_LowPriority,hu=a.unstable_IdlePriority,Li=null,Ot=null;function Lp(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Ip,Tp=Math.log,zp=Math.LN2;function Ip(e){return e>>>=0,e===0?32:31-(Tp(e)/zp|0)|0}var Ti=64,zi=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var h=d&~l;h!==0?r=Lr(h):(s&=d,s!==0&&(r=Lr(s)))}else d=n&~l,d!==0?r=Lr(d):s!==0&&(r=Lr(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),l=1<<n,r|=e[n],t&=~l;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-Ct(s),h=1<<d,g=l[d];g===-1?((h&n)===0||(h&r)!==0)&&(l[d]=bp(h,t)):g<=t&&(e.expiredLanes|=h),s&=~h}}function Eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),e}function Co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ct(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var me=0;function gu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vu,Po,yu,xu,wu,No=!1,bi=[],rn=null,ln=null,on=null,zr=new Map,Ir=new Map,an=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function br(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Gr(t),t!==null&&Po(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Dp(e,t,n,r,l){switch(t){case"focusin":return rn=br(rn,e,t,n,r,l),!0;case"dragenter":return ln=br(ln,e,t,n,r,l),!0;case"mouseover":return on=br(on,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return zr.set(s,br(zr.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Ir.set(s,br(Ir.get(s)||null,e,t,n,r,l)),!0}return!1}function Su(e){var t=Nn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=au(n),t!==null){e.blockedOn=t,wu(e.priority,function(){yu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);go=r,n.target.dispatchEvent(r),go=null}else return t=Gr(n),t!==null&&Po(t),e.blockedOn=n,!1;t.shift()}return!0}function Eu(e,t,n){Fi(e)&&n.delete(t)}function Ap(){No=!1,rn!==null&&Fi(rn)&&(rn=null),ln!==null&&Fi(ln)&&(ln=null),on!==null&&Fi(on)&&(on=null),zr.forEach(Eu),Ir.forEach(Eu)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ap)))}function Mr(e){function t(l){return Fr(l,e)}if(0<bi.length){Fr(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Fr(rn,e),ln!==null&&Fr(ln,e),on!==null&&Fr(on,e),zr.forEach(t),Ir.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Su(n),n.blockedOn===null&&an.shift()}var Vn=q.ReactCurrentBatchConfig,Mi=!0;function $p(e,t,n,r){var l=me,s=Vn.transition;Vn.transition=null;try{me=1,Ro(e,t,n,r)}finally{me=l,Vn.transition=s}}function Bp(e,t,n,r){var l=me,s=Vn.transition;Vn.transition=null;try{me=4,Ro(e,t,n,r)}finally{me=l,Vn.transition=s}}function Ro(e,t,n,r){if(Mi){var l=_o(e,t,n,r);if(l===null)Qo(e,t,r,Oi,n),ku(e,r);else if(Dp(l,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<Op.indexOf(e)){for(;l!==null;){var s=Gr(l);if(s!==null&&vu(s),s=_o(e,t,n,r),s===null&&Qo(e,t,r,Oi,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else Qo(e,t,r,null,n)}}var Oi=null;function _o(e,t,n,r){if(Oi=null,e=vo(r),e=Nn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oi=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rp()){case So:return 1;case pu:return 4;case _i:case _p:return 16;case hu:return 536870912;default:return 16}default:return 16}}var sn=null,Lo=null,Di=null;function ju(){if(Di)return Di;var e,t=Lo,n=t.length,r,l="value"in sn?sn.value:sn.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===l[s-r];r++);return Di=l.slice(e,1<r?1-r:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function Pu(){return!1}function ot(e){function t(n,r,l,s,d){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$i:Pu,this.isPropagationStopped=Pu,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=ot(Qn),Or=B({},Qn,{view:0,detail:0}),Up=ot(Or),zo,Io,Dr,Bi=B({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(zo=e.screenX-Dr.screenX,Io=e.screenY-Dr.screenY):Io=zo=0,Dr=e),zo)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),Nu=ot(Bi),Hp=B({},Bi,{dataTransfer:0}),Wp=ot(Hp),Vp=B({},Or,{relatedTarget:0}),bo=ot(Vp),Qp=B({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=ot(Qp),Gp=B({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=ot(Gp),qp=B({},Qn,{data:0}),Ru=ot(qp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function Fo(){return eh}var th=B({},Or,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nh=ot(th),rh=B({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=ot(rh),ih=B({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),lh=ot(ih),oh=B({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=ot(oh),sh=B({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=ot(sh),ch=[9,13,27,32],Mo=x&&"CompositionEvent"in window,Ar=null;x&&"documentMode"in document&&(Ar=document.documentMode);var dh=x&&"TextEvent"in window&&!Ar,Lu=x&&(!Mo||Ar&&8<Ar&&11>=Ar),Tu=" ",zu=!1;function Iu(e,t){switch(e){case"keyup":return ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function fh(e,t){switch(e){case"compositionend":return bu(t);case"keypress":return t.which!==32?null:(zu=!0,Tu);case"textInput":return e=t.data,e===Tu&&zu?null:e;default:return null}}function ph(e,t){if(Kn)return e==="compositionend"||!Mo&&Iu(e,t)?(e=ju(),Di=Lo=sn=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lu&&t.locale!=="ko"?null:t.data;default:return null}}var hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hh[e.type]:t==="textarea"}function Mu(e,t,n,r){nu(r),t=Qi(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $r=null,Br=null;function mh(e){ec(e,0)}function Ui(e){var t=Jn(e);if(Et(t))return e}function gh(e,t){if(e==="change")return t}var Ou=!1;if(x){var Oo;if(x){var Do="oninput"in document;if(!Do){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),Do=typeof Du.oninput=="function"}Oo=Do}else Oo=!1;Ou=Oo&&(!document.documentMode||9<document.documentMode)}function Au(){$r&&($r.detachEvent("onpropertychange",$u),Br=$r=null)}function $u(e){if(e.propertyName==="value"&&Ui(Br)){var t=[];Mu(t,Br,e,vo(e)),ou(mh,t)}}function vh(e,t,n){e==="focusin"?(Au(),$r=t,Br=n,$r.attachEvent("onpropertychange",$u)):e==="focusout"&&Au()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(Br)}function xh(e,t){if(e==="click")return Ui(t)}function wh(e,t){if(e==="input"||e==="change")return Ui(t)}function kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:kh;function Ur(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!v.call(t,l)||!jt(e[l],t[l]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var n=Bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=Wu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hu(n.ownerDocument.documentElement,n)){if(r!==null&&Ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=Uu(n,s);var d=Uu(n,r);l&&d&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eh=x&&"documentMode"in document&&11>=document.documentMode,Gn=null,$o=null,Hr=null,Bo=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bo||Gn==null||Gn!==ji(r)||(r=Gn,"selectionStart"in r&&Ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Ur(Hr,r)||(Hr=r,r=Qi($o,"onSelect"),0<r.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Uo={},Qu={};x&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Wi(e){if(Uo[e])return Uo[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qu)return Uo[e]=t[n];return e}var Ku=Wi("animationend"),Gu=Wi("animationiteration"),Yu=Wi("animationstart"),qu=Wi("transitionend"),Xu=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Xu.set(e,t),p(t,[e])}for(var Ho=0;Ho<Ju.length;Ho++){var Wo=Ju[Ho],Ch=Wo.toLowerCase(),jh=Wo[0].toUpperCase()+Wo.slice(1);un(Ch,"on"+jh)}un(Ku,"onAnimationEnd"),un(Gu,"onAnimationIteration"),un(Yu,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(qu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cp(r,t,void 0,e),e.currentTarget=null}function ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var d=r.length-1;0<=d;d--){var h=r[d],g=h.instance,C=h.currentTarget;if(h=h.listener,g!==s&&l.isPropagationStopped())break e;Zu(l,h,C),s=g}else for(d=0;d<r.length;d++){if(h=r[d],g=h.instance,C=h.currentTarget,h=h.listener,g!==s&&l.isPropagationStopped())break e;Zu(l,h,C),s=g}}}if(Ri)throw e=ko,Ri=!1,ko=null,e}function xe(e,t){var n=t[Jo];n===void 0&&(n=t[Jo]=new Set);var r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}function Vo(e,t,n){var r=0;t&&(r|=4),tc(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Vi]){e[Vi]=!0,u.forEach(function(n){n!=="selectionchange"&&(Ph.has(n)||Vo(n,!1,e),Vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Vo("selectionchange",!1,t))}}function tc(e,t,n,r){switch(Cu(t)){case 1:var l=$p;break;case 4:l=Bp;break;default:l=Ro}n=l.bind(null,t,n,e),l=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Qo(e,t,n,r,l){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var h=r.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(d===4)for(d=r.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;d=d.return}for(;h!==null;){if(d=Nn(h),d===null)return;if(g=d.tag,g===5||g===6){r=s=d;continue e}h=h.parentNode}}r=r.return}ou(function(){var C=s,T=vo(n),z=[];e:{var L=Xu.get(e);if(L!==void 0){var U=To,W=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":U=nh;break;case"focusin":W="focus",U=bo;break;case"focusout":W="blur",U=bo;break;case"beforeblur":case"afterblur":U=bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=lh;break;case Ku:case Gu:case Yu:U=Kp;break;case qu:U=ah;break;case"scroll":U=Up;break;case"wheel":U=uh;break;case"copy":case"cut":case"paste":U=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=_u}var V=(t&4)!==0,Le=!V&&e==="scroll",S=V?L!==null?L+"Capture":null:L;V=[];for(var y=C,E;y!==null;){E=y;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,S!==null&&(b=Nr(y,S),b!=null&&V.push(Qr(y,b,E)))),Le)break;y=y.return}0<V.length&&(L=new U(L,W,null,n,T),z.push({event:L,listeners:V}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",L&&n!==go&&(W=n.relatedTarget||n.fromElement)&&(Nn(W)||W[Vt]))break e;if((U||L)&&(L=T.window===T?T:(L=T.ownerDocument)?L.defaultView||L.parentWindow:window,U?(W=n.relatedTarget||n.toElement,U=C,W=W?Nn(W):null,W!==null&&(Le=Pn(W),W!==Le||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=C),U!==W)){if(V=Nu,b="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(V=_u,b="onPointerLeave",S="onPointerEnter",y="pointer"),Le=U==null?L:Jn(U),E=W==null?L:Jn(W),L=new V(b,y+"leave",U,n,T),L.target=Le,L.relatedTarget=E,b=null,Nn(T)===C&&(V=new V(S,y+"enter",W,n,T),V.target=E,V.relatedTarget=Le,b=V),Le=b,U&&W)t:{for(V=U,S=W,y=0,E=V;E;E=qn(E))y++;for(E=0,b=S;b;b=qn(b))E++;for(;0<y-E;)V=qn(V),y--;for(;0<E-y;)S=qn(S),E--;for(;y--;){if(V===S||S!==null&&V===S.alternate)break t;V=qn(V),S=qn(S)}V=null}else V=null;U!==null&&nc(z,L,U,V,!1),W!==null&&Le!==null&&nc(z,Le,W,V,!0)}}e:{if(L=C?Jn(C):window,U=L.nodeName&&L.nodeName.toLowerCase(),U==="select"||U==="input"&&L.type==="file")var Q=gh;else if(Fu(L))if(Ou)Q=wh;else{Q=yh;var X=vh}else(U=L.nodeName)&&U.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(Q=xh);if(Q&&(Q=Q(e,C))){Mu(z,Q,n,T);break e}X&&X(e,L,C),e==="focusout"&&(X=L._wrapperState)&&X.controlled&&L.type==="number"&&co(L,"number",L.value)}switch(X=C?Jn(C):window,e){case"focusin":(Fu(X)||X.contentEditable==="true")&&(Gn=X,$o=C,Hr=null);break;case"focusout":Hr=$o=Gn=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,Vu(z,n,T);break;case"selectionchange":if(Eh)break;case"keydown":case"keyup":Vu(z,n,T)}var J;if(Mo)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Kn?Iu(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Lu&&n.locale!=="ko"&&(Kn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Kn&&(J=ju()):(sn=T,Lo="value"in sn?sn.value:sn.textContent,Kn=!0)),X=Qi(C,te),0<X.length&&(te=new Ru(te,e,null,n,T),z.push({event:te,listeners:X}),J?te.data=J:(J=bu(n),J!==null&&(te.data=J)))),(J=dh?fh(e,n):ph(e,n))&&(C=Qi(C,"onBeforeInput"),0<C.length&&(T=new Ru("onBeforeInput","beforeinput",null,n,T),z.push({event:T,listeners:C}),T.data=J))}ec(z,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Nr(e,n),s!=null&&r.unshift(Qr(e,s,l)),s=Nr(e,t),s!=null&&r.push(Qr(e,s,l))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nc(e,t,n,r,l){for(var s=t._reactName,d=[];n!==null&&n!==r;){var h=n,g=h.alternate,C=h.stateNode;if(g!==null&&g===r)break;h.tag===5&&C!==null&&(h=C,l?(g=Nr(n,s),g!=null&&d.unshift(Qr(n,g,h))):l||(g=Nr(n,s),g!=null&&d.push(Qr(n,g,h)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Nh=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function rc(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(Rh,"")}function Ki(e,t,n){if(t=rc(t),rc(e)!==t&&n)throw Error(o(425))}function Gi(){}var Ko=null,Go=null;function Yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qo=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,ic=typeof Promise=="function"?Promise:void 0,Lh=typeof queueMicrotask=="function"?queueMicrotask:typeof ic<"u"?function(e){return ic.resolve(null).then(e).catch(Th)}:qo;function Th(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Mr(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Xn,Kr="__reactProps$"+Xn,Vt="__reactContainer$"+Xn,Jo="__reactEvents$"+Xn,zh="__reactListeners$"+Xn,Ih="__reactHandles$"+Xn;function Nn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lc(e);e!==null;){if(n=e[Dt])return n;e=lc(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[Dt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Yi(e){return e[Kr]||null}var Zo=[],Zn=-1;function dn(e){return{current:e}}function we(e){0>Zn||(e.current=Zo[Zn],Zo[Zn]=null,Zn--)}function ve(e,t){Zn++,Zo[Zn]=e.current,e.current=t}var fn={},Ve=dn(fn),Ze=dn(!1),Rn=fn;function er(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function et(e){return e=e.childContextTypes,e!=null}function qi(){we(Ze),we(Ve)}function oc(e,t,n){if(Ve.current!==fn)throw Error(o(168));ve(Ve,t),ve(Ze,n)}function ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(o(108,pe(e)||"Unknown",l));return B({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Rn=Ve.current,ve(Ve,e),ve(Ze,Ze.current),!0}function sc(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=ac(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,we(Ze),we(Ve),ve(Ve,e)):we(Ze),ve(Ze,n)}var Qt=null,Ji=!1,ea=!1;function uc(e){Qt===null?Qt=[e]:Qt.push(e)}function bh(e){Ji=!0,uc(e)}function pn(){if(!ea&&Qt!==null){ea=!0;var e=0,t=me;try{var n=Qt;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Ji=!1}catch(l){throw Qt!==null&&(Qt=Qt.slice(e+1)),du(So,pn),l}finally{me=t,ea=!1}}return null}var tr=[],nr=0,Zi=null,el=0,gt=[],vt=0,_n=null,Kt=1,Gt="";function Ln(e,t){tr[nr++]=el,tr[nr++]=Zi,Zi=e,el=t}function cc(e,t,n){gt[vt++]=Kt,gt[vt++]=Gt,gt[vt++]=_n,_n=e;var r=Kt;e=Gt;var l=32-Ct(r)-1;r&=~(1<<l),n+=1;var s=32-Ct(t)+l;if(30<s){var d=l-l%5;s=(r&(1<<d)-1).toString(32),r>>=d,l-=d,Kt=1<<32-Ct(t)+l|n<<l|r,Gt=s+e}else Kt=1<<s|n<<l|r,Gt=e}function ta(e){e.return!==null&&(Ln(e,1),cc(e,1,0))}function na(e){for(;e===Zi;)Zi=tr[--nr],tr[nr]=null,el=tr[--nr],tr[nr]=null;for(;e===_n;)_n=gt[--vt],gt[vt]=null,Gt=gt[--vt],gt[vt]=null,Kt=gt[--vt],gt[vt]=null}var at=null,st=null,Ee=!1,Pt=null;function dc(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,st=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Kt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,st=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ia(e){if(Ee){var t=st;if(t){var n=t;if(!fc(e,t)){if(ra(e))throw Error(o(418));t=cn(n.nextSibling);var r=at;t&&fc(e,t)?dc(r,n):(e.flags=e.flags&-4097|2,Ee=!1,at=e)}}else{if(ra(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ee=!1,at=e}}}function pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function tl(e){if(e!==at)return!1;if(!Ee)return pc(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yo(e.type,e.memoizedProps)),t&&(t=st)){if(ra(e))throw hc(),Error(o(418));for(;t;)dc(e,t),t=cn(t.nextSibling)}if(pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=at?cn(e.stateNode.nextSibling):null;return!0}function hc(){for(var e=st;e;)e=cn(e.nextSibling)}function rr(){st=at=null,Ee=!1}function la(e){Pt===null?Pt=[e]:Pt.push(e)}var Fh=q.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var h=l.refs;d===null?delete h[s]:h[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function nl(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mc(e){var t=e._init;return t(e._payload)}function gc(e){function t(S,y){if(e){var E=S.deletions;E===null?(S.deletions=[y],S.flags|=16):E.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function r(S,y){for(S=new Map;y!==null;)y.key!==null?S.set(y.key,y):S.set(y.index,y),y=y.sibling;return S}function l(S,y){return S=kn(S,y),S.index=0,S.sibling=null,S}function s(S,y,E){return S.index=E,e?(E=S.alternate,E!==null?(E=E.index,E<y?(S.flags|=2,y):E):(S.flags|=2,y)):(S.flags|=1048576,y)}function d(S){return e&&S.alternate===null&&(S.flags|=2),S}function h(S,y,E,b){return y===null||y.tag!==6?(y=qa(E,S.mode,b),y.return=S,y):(y=l(y,E),y.return=S,y)}function g(S,y,E,b){var Q=E.type;return Q===Y?T(S,y,E.props.children,b,E.key):y!==null&&(y.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===We&&mc(Q)===y.type)?(b=l(y,E.props),b.ref=Yr(S,y,E),b.return=S,b):(b=Pl(E.type,E.key,E.props,null,S.mode,b),b.ref=Yr(S,y,E),b.return=S,b)}function C(S,y,E,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Xa(E,S.mode,b),y.return=S,y):(y=l(y,E.children||[]),y.return=S,y)}function T(S,y,E,b,Q){return y===null||y.tag!==7?(y=Dn(E,S.mode,b,Q),y.return=S,y):(y=l(y,E),y.return=S,y)}function z(S,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qa(""+y,S.mode,E),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ne:return E=Pl(y.type,y.key,y.props,null,S.mode,E),E.ref=Yr(S,null,y),E.return=S,E;case ee:return y=Xa(y,S.mode,E),y.return=S,y;case We:var b=y._init;return z(S,b(y._payload),E)}if(Cr(y)||G(y))return y=Dn(y,S.mode,E,null),y.return=S,y;nl(S,y)}return null}function L(S,y,E,b){var Q=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return Q!==null?null:h(S,y,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:return E.key===Q?g(S,y,E,b):null;case ee:return E.key===Q?C(S,y,E,b):null;case We:return Q=E._init,L(S,y,Q(E._payload),b)}if(Cr(E)||G(E))return Q!==null?null:T(S,y,E,b,null);nl(S,E)}return null}function U(S,y,E,b,Q){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(E)||null,h(y,S,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ne:return S=S.get(b.key===null?E:b.key)||null,g(y,S,b,Q);case ee:return S=S.get(b.key===null?E:b.key)||null,C(y,S,b,Q);case We:var X=b._init;return U(S,y,E,X(b._payload),Q)}if(Cr(b)||G(b))return S=S.get(E)||null,T(y,S,b,Q,null);nl(y,b)}return null}function W(S,y,E,b){for(var Q=null,X=null,J=y,te=y=0,De=null;J!==null&&te<E.length;te++){J.index>te?(De=J,J=null):De=J.sibling;var fe=L(S,J,E[te],b);if(fe===null){J===null&&(J=De);break}e&&J&&fe.alternate===null&&t(S,J),y=s(fe,y,te),X===null?Q=fe:X.sibling=fe,X=fe,J=De}if(te===E.length)return n(S,J),Ee&&Ln(S,te),Q;if(J===null){for(;te<E.length;te++)J=z(S,E[te],b),J!==null&&(y=s(J,y,te),X===null?Q=J:X.sibling=J,X=J);return Ee&&Ln(S,te),Q}for(J=r(S,J);te<E.length;te++)De=U(J,S,te,E[te],b),De!==null&&(e&&De.alternate!==null&&J.delete(De.key===null?te:De.key),y=s(De,y,te),X===null?Q=De:X.sibling=De,X=De);return e&&J.forEach(function(Sn){return t(S,Sn)}),Ee&&Ln(S,te),Q}function V(S,y,E,b){var Q=G(E);if(typeof Q!="function")throw Error(o(150));if(E=Q.call(E),E==null)throw Error(o(151));for(var X=Q=null,J=y,te=y=0,De=null,fe=E.next();J!==null&&!fe.done;te++,fe=E.next()){J.index>te?(De=J,J=null):De=J.sibling;var Sn=L(S,J,fe.value,b);if(Sn===null){J===null&&(J=De);break}e&&J&&Sn.alternate===null&&t(S,J),y=s(Sn,y,te),X===null?Q=Sn:X.sibling=Sn,X=Sn,J=De}if(fe.done)return n(S,J),Ee&&Ln(S,te),Q;if(J===null){for(;!fe.done;te++,fe=E.next())fe=z(S,fe.value,b),fe!==null&&(y=s(fe,y,te),X===null?Q=fe:X.sibling=fe,X=fe);return Ee&&Ln(S,te),Q}for(J=r(S,J);!fe.done;te++,fe=E.next())fe=U(J,S,te,fe.value,b),fe!==null&&(e&&fe.alternate!==null&&J.delete(fe.key===null?te:fe.key),y=s(fe,y,te),X===null?Q=fe:X.sibling=fe,X=fe);return e&&J.forEach(function(hm){return t(S,hm)}),Ee&&Ln(S,te),Q}function Le(S,y,E,b){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ne:e:{for(var Q=E.key,X=y;X!==null;){if(X.key===Q){if(Q=E.type,Q===Y){if(X.tag===7){n(S,X.sibling),y=l(X,E.props.children),y.return=S,S=y;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===We&&mc(Q)===X.type){n(S,X.sibling),y=l(X,E.props),y.ref=Yr(S,X,E),y.return=S,S=y;break e}n(S,X);break}else t(S,X);X=X.sibling}E.type===Y?(y=Dn(E.props.children,S.mode,b,E.key),y.return=S,S=y):(b=Pl(E.type,E.key,E.props,null,S.mode,b),b.ref=Yr(S,y,E),b.return=S,S=b)}return d(S);case ee:e:{for(X=E.key;y!==null;){if(y.key===X)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(S,y.sibling),y=l(y,E.children||[]),y.return=S,S=y;break e}else{n(S,y);break}else t(S,y);y=y.sibling}y=Xa(E,S.mode,b),y.return=S,S=y}return d(S);case We:return X=E._init,Le(S,y,X(E._payload),b)}if(Cr(E))return W(S,y,E,b);if(G(E))return V(S,y,E,b);nl(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(S,y.sibling),y=l(y,E),y.return=S,S=y):(n(S,y),y=qa(E,S.mode,b),y.return=S,S=y),d(S)):n(S,y)}return Le}var ir=gc(!0),vc=gc(!1),rl=dn(null),il=null,lr=null,oa=null;function aa(){oa=lr=il=null}function sa(e){var t=rl.current;we(rl),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){il=e,oa=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(il===null)throw Error(o(308));lr=e,il.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Tn=null;function ca(e){Tn===null?Tn=[e]:Tn.push(e)}function yc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ca(t)):(n.next=l.next,l.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ce&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Yt(e,n)}return l=r.interleaved,l===null?(t.next=t,ca(r)):(t.next=l.next,l.next=t),r.interleaved=t,Yt(e,n)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jo(e,n)}}function wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var l=e.updateQueue;hn=!1;var s=l.firstBaseUpdate,d=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var g=h,C=g.next;g.next=null,d===null?s=C:d.next=C,d=g;var T=e.alternate;T!==null&&(T=T.updateQueue,h=T.lastBaseUpdate,h!==d&&(h===null?T.firstBaseUpdate=C:h.next=C,T.lastBaseUpdate=g))}if(s!==null){var z=l.baseState;d=0,T=C=g=null,h=s;do{var L=h.lane,U=h.eventTime;if((r&L)===L){T!==null&&(T=T.next={eventTime:U,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var W=e,V=h;switch(L=t,U=n,V.tag){case 1:if(W=V.payload,typeof W=="function"){z=W.call(U,z,L);break e}z=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=V.payload,L=typeof W=="function"?W.call(U,z,L):W,L==null)break e;z=B({},z,L);break e;case 2:hn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,L=l.effects,L===null?l.effects=[h]:L.push(h))}else U={eventTime:U,lane:L,tag:h.tag,payload:h.payload,callback:h.callback,next:null},T===null?(C=T=U,g=z):T=T.next=U,d|=L;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;L=h,h=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);if(T===null&&(g=z),l.baseState=g,l.firstBaseUpdate=C,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do d|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);bn|=d,e.lanes=d,e.memoizedState=z}}function kc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(o(191,l));l.call(r)}}}var qr={},At=dn(qr),Xr=dn(qr),Jr=dn(qr);function zn(e){if(e===qr)throw Error(o(174));return e}function fa(e,t){switch(ve(Jr,t),ve(Xr,e),ve(At,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:po(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=po(t,e)}we(At),ve(At,t)}function ar(){we(At),we(Xr),we(Jr)}function Sc(e){zn(Jr.current);var t=zn(At.current),n=po(t,e.type);t!==n&&(ve(Xr,e),ve(At,n))}function pa(e){Xr.current===e&&(we(At),we(Xr))}var je=dn(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function ma(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var sl=q.ReactCurrentDispatcher,ga=q.ReactCurrentBatchConfig,In=0,Pe=null,Ie=null,Me=null,ul=!1,Zr=!1,ei=0,Mh=0;function Qe(){throw Error(o(321))}function va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,l,s){if(In=s,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sl.current=e===null||e.memoizedState===null?$h:Bh,e=n(r,l),Zr){s=0;do{if(Zr=!1,ei=0,25<=s)throw Error(o(301));s+=1,Me=Ie=null,t.updateQueue=null,sl.current=Uh,e=n(r,l)}while(Zr)}if(sl.current=fl,t=Ie!==null&&Ie.next!==null,In=0,Me=Ie=Pe=null,ul=!1,t)throw Error(o(300));return e}function xa(){var e=ei!==0;return ei=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Pe.memoizedState=Me=e:Me=Me.next=e,Me}function xt(){if(Ie===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Me===null?Pe.memoizedState:Me.next;if(t!==null)Me=t,Ie=e;else{if(e===null)throw Error(o(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Me===null?Pe.memoizedState=Me=e:Me=Me.next=e}return Me}function ti(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=xt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=Ie,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var d=l.next;l.next=s.next,s.next=d}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var h=d=null,g=null,C=s;do{var T=C.lane;if((In&T)===T)g!==null&&(g=g.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var z={lane:T,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};g===null?(h=g=z,d=r):g=g.next=z,Pe.lanes|=T,bn|=T}C=C.next}while(C!==null&&C!==s);g===null?d=r:g.next=h,jt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,Pe.lanes|=s,bn|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=xt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var d=l=l.next;do s=e(s,d.action),d=d.next;while(d!==l);jt(s,t.memoizedState)||(tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ec(){}function Cc(e,t){var n=Pe,r=xt(),l=t(),s=!jt(r.memoizedState,l);if(s&&(r.memoizedState=l,tt=!0),r=r.queue,Sa(Nc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,ni(9,Pc.bind(null,n,r,l,t),void 0,null),Oe===null)throw Error(o(349));(In&30)!==0||jc(n,t,l)}return l}function jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pc(e,t,n,r){t.value=n,t.getSnapshot=r,Rc(t)&&_c(e)}function Nc(e,t,n){return n(function(){Rc(t)&&_c(e)})}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function _c(e){var t=Yt(e,1);t!==null&&Lt(t,e,1,-1)}function Lc(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Ah.bind(null,Pe,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tc(){return xt().memoizedState}function cl(e,t,n,r){var l=$t();Pe.flags|=e,l.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var l=xt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var d=Ie.memoizedState;if(s=d.destroy,r!==null&&va(r,d.deps)){l.memoizedState=ni(t,n,s,r);return}}Pe.flags|=e,l.memoizedState=ni(1|t,n,s,r)}function zc(e,t){return cl(8390656,8,e,t)}function Sa(e,t){return dl(2048,8,e,t)}function Ic(e,t){return dl(4,2,e,t)}function bc(e,t){return dl(4,4,e,t)}function Fc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,Fc.bind(null,t,e),n)}function Ea(){}function Oc(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dc(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(jt(n,t)||(n=mu(),Pe.lanes|=n,bn|=n,e.baseState=!0),t)}function Oh(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{me=n,ga.transition=r}}function $c(){return xt().memoizedState}function Dh(e,t,n){var r=xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bc(e))Uc(t,n);else if(n=yc(e,t,n,r),n!==null){var l=Je();Lt(n,e,r,l),Hc(n,t,r)}}function Ah(e,t,n){var r=xn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Uc(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,h=s(d,n);if(l.hasEagerState=!0,l.eagerState=h,jt(h,d)){var g=t.interleaved;g===null?(l.next=l,ca(t)):(l.next=g.next,g.next=l),t.interleaved=l;return}}catch{}finally{}n=yc(e,t,l,r),n!==null&&(l=Je(),Lt(n,e,r,l),Hc(n,t,r))}}function Bc(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Uc(e,t){Zr=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jo(e,n)}}var fl={readContext:yt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},$h={readContext:yt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:zc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cl(4194308,4,Fc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return cl(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dh.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Lc,useDebugValue:Ea,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Lc(!1),t=e[0];return e=Oh.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,l=$t();if(Ee){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Oe===null)throw Error(o(349));(In&30)!==0||jc(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,zc(Nc.bind(null,r,s,e),[e]),r.flags|=2048,ni(9,Pc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=$t(),t=Oe.identifierPrefix;if(Ee){var n=Gt,r=Kt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bh={readContext:yt,useCallback:Oc,useContext:yt,useEffect:Sa,useImperativeHandle:Mc,useInsertionEffect:Ic,useLayoutEffect:bc,useMemo:Dc,useReducer:wa,useRef:Tc,useState:function(){return wa(ti)},useDebugValue:Ea,useDeferredValue:function(e){var t=xt();return Ac(t,Ie.memoizedState,e)},useTransition:function(){var e=wa(ti)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:Cc,useId:$c,unstable_isNewReconciler:!1},Uh={readContext:yt,useCallback:Oc,useContext:yt,useEffect:Sa,useImperativeHandle:Mc,useInsertionEffect:Ic,useLayoutEffect:bc,useMemo:Dc,useReducer:ka,useRef:Tc,useState:function(){return ka(ti)},useDebugValue:Ea,useDeferredValue:function(e){var t=xt();return Ie===null?t.memoizedState=e:Ac(t,Ie.memoizedState,e)},useTransition:function(){var e=ka(ti)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:Cc,useId:$c,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),l=xn(e),s=qt(r,l);s.payload=t,n!=null&&(s.callback=n),t=mn(e,s,l),t!==null&&(Lt(t,e,l,r),ll(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),l=xn(e),s=qt(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=mn(e,s,l),t!==null&&(Lt(t,e,l,r),ll(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=xn(e),l=qt(n,r);l.tag=2,t!=null&&(l.callback=t),t=mn(e,l,r),t!==null&&(Lt(t,e,r,n),ll(t,e,r))}};function Wc(e,t,n,r,l,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,d):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(l,s):!0}function Vc(e,t,n){var r=!1,l=fn,s=t.contextType;return typeof s=="object"&&s!==null?s=yt(s):(l=et(t)?Rn:Ve.current,r=t.contextTypes,s=(r=r!=null)?er(e,l):fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function Qc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},da(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=yt(s):(s=et(t)?Rn:Ve.current,l.context=er(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ca(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&pl.enqueueReplaceState(l,l.state,null),ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=se(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function Pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hh=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,t,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,Ua=r),Na(e,t)},n}function Gc(e,t,n){n=qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Na(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function Yc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hh;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=rm.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xc(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Wh=q.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?vc(t,null,n,r):ir(t,e.child,n,r)}function Jc(e,t,n,r,l){n=n.render;var s=t.ref;return or(t,l),r=ya(e,t,n,r,s,l),n=xa(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xt(e,t,l)):(Ee&&n&&ta(t),t.flags|=1,Xe(e,t,r,l),t.child)}function Zc(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ya(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ed(e,t,s,r,l)):(e=Pl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&l)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(d,r)&&e.ref===t.ref)return Xt(e,t,l)}return t.flags|=1,e=kn(s,r),e.ref=t.ref,e.return=t,t.child=e}function ed(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(Ur(s,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=s,(e.lanes&l)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Xt(e,t,l)}return Ra(e,t,n,r,l)}function td(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(cr,ut),ut|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(cr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(cr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ve(cr,ut),ut|=r;return Xe(e,t,l,n),t.child}function nd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,n,r,l){var s=et(n)?Rn:Ve.current;return s=er(t,s),or(t,l),n=ya(e,t,n,r,s,l),r=xa(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xt(e,t,l)):(Ee&&r&&ta(t),t.flags|=1,Xe(e,t,n,l),t.child)}function rd(e,t,n,r,l){if(et(n)){var s=!0;Xi(t)}else s=!1;if(or(t,l),t.stateNode===null)ml(e,t),Vc(t,n,r),ja(t,n,r,l),r=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var g=d.context,C=n.contextType;typeof C=="object"&&C!==null?C=yt(C):(C=et(n)?Rn:Ve.current,C=er(t,C));var T=n.getDerivedStateFromProps,z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function";z||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==r||g!==C)&&Qc(t,d,r,C),hn=!1;var L=t.memoizedState;d.state=L,ol(t,r,d,l),g=t.memoizedState,h!==r||L!==g||Ze.current||hn?(typeof T=="function"&&(Ca(t,n,T,r),g=t.memoizedState),(h=hn||Wc(t,n,h,r,L,g,C))?(z||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),d.props=r,d.state=g,d.context=C,r=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,xc(e,t),h=t.memoizedProps,C=t.type===t.elementType?h:Nt(t.type,h),d.props=C,z=t.pendingProps,L=d.context,g=n.contextType,typeof g=="object"&&g!==null?g=yt(g):(g=et(n)?Rn:Ve.current,g=er(t,g));var U=n.getDerivedStateFromProps;(T=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==z||L!==g)&&Qc(t,d,r,g),hn=!1,L=t.memoizedState,d.state=L,ol(t,r,d,l);var W=t.memoizedState;h!==z||L!==W||Ze.current||hn?(typeof U=="function"&&(Ca(t,n,U,r),W=t.memoizedState),(C=hn||Wc(t,n,C,r,L,W,g)||!1)?(T||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,W,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,W,g)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=W),d.props=r,d.state=W,d.context=g,r=C):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return _a(e,t,n,r,s,l)}function _a(e,t,n,r,l,s){nd(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return l&&sc(t,n,!1),Xt(e,t,s);r=t.stateNode,Wh.current=t;var h=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=ir(t,e.child,null,s),t.child=ir(t,null,h,s)):Xe(e,t,h,s),t.memoizedState=r.state,l&&sc(t,n,!0),t.child}function id(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),fa(e,t.containerInfo)}function ld(e,t,n,r,l){return rr(),la(l),t.flags|=256,Xe(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function od(e,t,n){var r=t.pendingProps,l=je.current,s=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(l&2)!==0),h?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ve(je,l&1),e===null)return ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,s?(r=t.mode,s=t.child,d={mode:"hidden",children:d},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Nl(d,r,0,null),e=Dn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ta(n),t.memoizedState=La,e):za(t,d));if(l=e.memoizedState,l!==null&&(h=l.dehydrated,h!==null))return Vh(e,t,d,r,h,l,n);if(s){s=r.fallback,d=t.mode,l=e.child,h=l.sibling;var g={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=kn(l,g),r.subtreeFlags=l.subtreeFlags&14680064),h!==null?s=kn(h,s):(s=Dn(s,d,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,d=e.child.memoizedState,d=d===null?Ta(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,t.memoizedState=La,r}return s=e.child,e=s.sibling,r=kn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function za(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hl(e,t,n,r){return r!==null&&la(r),ir(t,e.child,null,n),e=za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vh(e,t,n,r,l,s,d){if(n)return t.flags&256?(t.flags&=-257,r=Pa(Error(o(422))),hl(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),s=Dn(s,l,d,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&ir(t,e.child,null,d),t.child.memoizedState=Ta(d),t.memoizedState=La,s);if((t.mode&1)===0)return hl(e,t,d,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var h=r.dgst;return r=h,s=Error(o(419)),r=Pa(s,r,void 0),hl(e,t,d,r)}if(h=(d&e.childLanes)!==0,tt||h){if(r=Oe,r!==null){switch(d&-d){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|d))!==0?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Yt(e,l),Lt(r,e,l,-1))}return Ga(),r=Pa(Error(o(421))),hl(e,t,d,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=im.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,st=cn(l.nextSibling),at=t,Ee=!0,Pt=null,e!==null&&(gt[vt++]=Kt,gt[vt++]=Gt,gt[vt++]=_n,Kt=e.id,Gt=e.overflow,_n=t),t=za(t,r.children),t.flags|=4096,t)}function ad(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function Ia(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function sd(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(Xe(e,t,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ad(e,n,t);else if(e.tag===19)ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(je,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ia(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&al(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ia(t,!0,n,null,s);break;case"together":Ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ml(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qh(e,t,n){switch(t.tag){case 3:id(t),rr();break;case 5:Sc(t);break;case 1:et(t.type)&&Xi(t);break;case 4:fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ve(rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(je,je.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?od(e,t,n):(ve(je,je.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);ve(je,je.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return sd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ve(je,je.current),r)break;return null;case 22:case 23:return t.lanes=0,td(e,t,n)}return Xt(e,t,n)}var ud,ba,cd,dd;ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ba=function(){},cd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zn(At.current);var s=null;switch(n){case"input":l=so(e,l),r=so(e,r),s=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":l=fo(e,l),r=fo(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}ho(n,r);var d;n=null;for(C in l)if(!r.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var h=l[C];for(d in h)h.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(c.hasOwnProperty(C)?s||(s=[]):(s=s||[]).push(C,null));for(C in r){var g=r[C];if(h=l!=null?l[C]:void 0,r.hasOwnProperty(C)&&g!==h&&(g!=null||h!=null))if(C==="style")if(h){for(d in h)!h.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in g)g.hasOwnProperty(d)&&h[d]!==g[d]&&(n||(n={}),n[d]=g[d])}else n||(s||(s=[]),s.push(C,n)),n=g;else C==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(s=s||[]).push(C,g)):C==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(C,""+g):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(c.hasOwnProperty(C)?(g!=null&&C==="onScroll"&&xe("scroll",e),s||h===g||(s=[])):(s=s||[]).push(C,g))}n&&(s=s||[]).push("style",n);var C=s;(t.updateQueue=C)&&(t.flags|=4)}},dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ri(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kh(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return et(t.type)&&qi(),Ke(t),null;case 3:return r=t.stateNode,ar(),we(Ze),we(Ve),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(tl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(Va(Pt),Pt=null))),ba(e,t),Ke(t),null;case 5:pa(t);var l=zn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)cd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}if(e=zn(At.current),tl(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Dt]=t,r[Kr]=s,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(l=0;l<Wr.length;l++)xe(Wr[l],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Vs(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":Gs(r,s),xe("invalid",r)}ho(n,s),l=null;for(var d in s)if(s.hasOwnProperty(d)){var h=s[d];d==="children"?typeof h=="string"?r.textContent!==h&&(s.suppressHydrationWarning!==!0&&Ki(r.textContent,h,e),l=["children",h]):typeof h=="number"&&r.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&Ki(r.textContent,h,e),l=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&xe("scroll",r)}switch(n){case"input":Wt(r),Ks(r,s,!0);break;case"textarea":Wt(r),qs(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gi)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[Dt]=t,e[Kr]=r,ud(e,t,!1,!1),t.stateNode=e;e:{switch(d=mo(n,r),n){case"dialog":xe("cancel",e),xe("close",e),l=r;break;case"iframe":case"object":case"embed":xe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Wr.length;l++)xe(Wr[l],e);l=r;break;case"source":xe("error",e),l=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),l=r;break;case"details":xe("toggle",e),l=r;break;case"input":Vs(e,r),l=so(e,r),xe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Gs(e,r),l=fo(e,r),xe("invalid",e);break;default:l=r}ho(n,l),h=l;for(s in h)if(h.hasOwnProperty(s)){var g=h[s];s==="style"?eu(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Js(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&jr(e,g):typeof g=="number"&&jr(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(c.hasOwnProperty(s)?g!=null&&s==="onScroll"&&xe("scroll",e):g!=null&&M(e,s,g,d))}switch(n){case"input":Wt(e),Ks(e,r,!1);break;case"textarea":Wt(e),qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Un(e,!!r.multiple,s,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=zn(Jr.current),zn(At.current),tl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(s=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Ke(t),null;case 13:if(we(je),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&st!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hc(),rr(),t.flags|=98560,s=!1;else if(s=tl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Dt]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),s=!1}else Pt!==null&&(Va(Pt),Pt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(je.current&1)!==0?be===0&&(be=3):Ga())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return ar(),ba(e,t),e===null&&Vr(t.stateNode.containerInfo),Ke(t),null;case 10:return sa(t.type._context),Ke(t),null;case 17:return et(t.type)&&qi(),Ke(t),null;case 19:if(we(je),s=t.memoizedState,s===null)return Ke(t),null;if(r=(t.flags&128)!==0,d=s.rendering,d===null)if(r)ri(s,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=al(e),d!==null){for(t.flags|=128,ri(s,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(je,je.current&1|2),t.child}e=e.sibling}s.tail!==null&&_e()>dr&&(t.flags|=128,r=!0,ri(s,!1),t.lanes=4194304)}else{if(!r)if(e=al(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Ee)return Ke(t),null}else 2*_e()-s.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,ri(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(n=s.last,n!==null?n.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_e(),t.sibling=null,n=je.current,ve(je,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return Ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Gh(e,t){switch(na(t),t.tag){case 1:return et(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),we(Ze),we(Ve),ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return pa(t),null;case 13:if(we(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(je),null;case 4:return ar(),null;case 10:return sa(t.type._context),null;case 22:case 23:return Ka(),null;case 24:return null;default:return null}}var gl=!1,Ge=!1,Yh=typeof WeakSet=="function"?WeakSet:Set,H=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){Re(e,t,r)}}var fd=!1;function qh(e,t){if(Ko=Mi,e=Wu(),Ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,h=-1,g=-1,C=0,T=0,z=e,L=null;t:for(;;){for(var U;z!==n||l!==0&&z.nodeType!==3||(h=d+l),z!==s||r!==0&&z.nodeType!==3||(g=d+r),z.nodeType===3&&(d+=z.nodeValue.length),(U=z.firstChild)!==null;)L=z,z=U;for(;;){if(z===e)break t;if(L===n&&++C===l&&(h=d),L===s&&++T===r&&(g=d),(U=z.nextSibling)!==null)break;z=L,L=z.parentNode}z=U}n=h===-1||g===-1?null:{start:h,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Go={focusedElem:e,selectionRange:n},Mi=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var W=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var V=W.memoizedProps,Le=W.memoizedState,S=t.stateNode,y=S.getSnapshotBeforeUpdate(t.elementType===t.type?V:Nt(t.type,V),Le);S.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(b){Re(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return W=fd,fd=!1,W}function ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&Fa(t,n,s)}l=l.next}while(l!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Kr],delete t[Jo],delete t[zh],delete t[Ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hd(e){return e.tag===5||e.tag===3||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function Da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}var Be=null,Rt=!1;function gn(e,t,n){for(n=n.child;n!==null;)gd(e,t,n),n=n.sibling}function gd(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Li,n)}catch{}switch(n.tag){case 5:Ge||ur(n,t);case 6:var r=Be,l=Rt;Be=null,gn(e,t,n),Be=r,Rt=l,Be!==null&&(Rt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Rt?(e=Be,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),Mr(e)):Xo(Be,n.stateNode));break;case 4:r=Be,l=Rt,Be=n.stateNode.containerInfo,Rt=!0,gn(e,t,n),Be=r,Rt=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Fa(n,t,d),l=l.next}while(l!==r)}gn(e,t,n);break;case 1:if(!Ge&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(h){Re(n,t,h)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,gn(e,t,n),Ge=r):gn(e,t,n);break;default:gn(e,t,n)}}function vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yh),t.forEach(function(r){var l=lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:Be=h.stateNode,Rt=!1;break e;case 3:Be=h.stateNode.containerInfo,Rt=!0;break e;case 4:Be=h.stateNode.containerInfo,Rt=!0;break e}h=h.return}if(Be===null)throw Error(o(160));gd(s,d,l),Be=null,Rt=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(C){Re(l,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Bt(e),r&4){try{ii(3,e,e.return),vl(3,e)}catch(V){Re(e,e.return,V)}try{ii(5,e,e.return)}catch(V){Re(e,e.return,V)}}break;case 1:_t(t,e),Bt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(_t(t,e),Bt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var l=e.stateNode;try{jr(l,"")}catch(V){Re(e,e.return,V)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,h=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&Qs(l,s),mo(h,d);var C=mo(h,s);for(d=0;d<g.length;d+=2){var T=g[d],z=g[d+1];T==="style"?eu(l,z):T==="dangerouslySetInnerHTML"?Js(l,z):T==="children"?jr(l,z):M(l,T,z,C)}switch(h){case"input":uo(l,s);break;case"textarea":Ys(l,s);break;case"select":var L=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var U=s.value;U!=null?Un(l,!!s.multiple,U,!1):L!==!!s.multiple&&(s.defaultValue!=null?Un(l,!!s.multiple,s.defaultValue,!0):Un(l,!!s.multiple,s.multiple?[]:"",!1))}l[Kr]=s}catch(V){Re(e,e.return,V)}}break;case 6:if(_t(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(V){Re(e,e.return,V)}}break;case 3:if(_t(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(V){Re(e,e.return,V)}break;case 4:_t(t,e),Bt(e);break;case 13:_t(t,e),Bt(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Ba=_e())),r&4&&vd(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(C=Ge)||T,_t(t,e),Ge=C):_t(t,e),Bt(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!T&&(e.mode&1)!==0)for(H=e,T=e.child;T!==null;){for(z=H=T;H!==null;){switch(L=H,U=L.child,L.tag){case 0:case 11:case 14:case 15:ii(4,L,L.return);break;case 1:ur(L,L.return);var W=L.stateNode;if(typeof W.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,W.props=t.memoizedProps,W.state=t.memoizedState,W.componentWillUnmount()}catch(V){Re(r,n,V)}}break;case 5:ur(L,L.return);break;case 22:if(L.memoizedState!==null){kd(z);continue}}U!==null?(U.return=L,H=U):kd(z)}T=T.sibling}e:for(T=null,z=e;;){if(z.tag===5){if(T===null){T=z;try{l=z.stateNode,C?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=z.stateNode,g=z.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=Zs("display",d))}catch(V){Re(e,e.return,V)}}}else if(z.tag===6){if(T===null)try{z.stateNode.nodeValue=C?"":z.memoizedProps}catch(V){Re(e,e.return,V)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;T===z&&(T=null),z=z.return}T===z&&(T=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:_t(t,e),Bt(e),r&4&&vd(e);break;case 21:break;default:_t(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hd(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(jr(l,""),r.flags&=-33);var s=md(e);Da(e,s,l);break;case 3:case 4:var d=r.stateNode.containerInfo,h=md(e);Oa(e,h,d);break;default:throw Error(o(161))}}catch(g){Re(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xh(e,t,n){H=e,xd(e)}function xd(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var l=H,s=l.child;if(l.tag===22&&r){var d=l.memoizedState!==null||gl;if(!d){var h=l.alternate,g=h!==null&&h.memoizedState!==null||Ge;h=gl;var C=Ge;if(gl=d,(Ge=g)&&!C)for(H=l;H!==null;)d=H,g=d.child,d.tag===22&&d.memoizedState!==null?Sd(l):g!==null?(g.return=d,H=g):Sd(l);for(;s!==null;)H=s,xd(s),s=s.sibling;H=l,gl=h,Ge=C}wd(e)}else(l.subtreeFlags&8772)!==0&&s!==null?(s.return=l,H=s):wd(e)}}function wd(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&kc(t,s,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kc(t,d,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var T=C.memoizedState;if(T!==null){var z=T.dehydrated;z!==null&&Mr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ge||t.flags&512&&Ma(t)}catch(L){Re(t,t.return,L)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function kd(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Sd(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(g){Re(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(g){Re(t,l,g)}}var s=t.return;try{Ma(t)}catch(g){Re(t,s,g)}break;case 5:var d=t.return;try{Ma(t)}catch(g){Re(t,d,g)}}}catch(g){Re(t,t.return,g)}if(t===e){H=null;break}var h=t.sibling;if(h!==null){h.return=t.return,H=h;break}H=t.return}}var Jh=Math.ceil,yl=q.ReactCurrentDispatcher,Aa=q.ReactCurrentOwner,wt=q.ReactCurrentBatchConfig,ce=0,Oe=null,Te=null,Ue=0,ut=0,cr=dn(0),be=0,li=null,bn=0,xl=0,$a=0,oi=null,nt=null,Ba=0,dr=1/0,Jt=null,wl=!1,Ua=null,vn=null,kl=!1,yn=null,Sl=0,ai=0,Ha=null,El=-1,Cl=0;function Je(){return(ce&6)!==0?_e():El!==-1?El:El=_e()}function xn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Ue!==0?Ue&-Ue:Fh.transition!==null?(Cl===0&&(Cl=mu()),Cl):(e=me,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e)}function Lt(e,t,n,r){if(50<ai)throw ai=0,Ha=null,Error(o(185));Tr(e,n,r),((ce&2)===0||e!==Oe)&&(e===Oe&&((ce&2)===0&&(xl|=n),be===4&&wn(e,Ue)),rt(e,r),n===1&&ce===0&&(t.mode&1)===0&&(dr=_e()+500,Ji&&pn()))}function rt(e,t){var n=e.callbackNode;Fp(e,t);var r=Ii(e,e===Oe?Ue:0);if(r===0)n!==null&&fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fu(n),t===1)e.tag===0?bh(Cd.bind(null,e)):uc(Cd.bind(null,e)),Lh(function(){(ce&6)===0&&pn()}),n=null;else{switch(gu(r)){case 1:n=So;break;case 4:n=pu;break;case 16:n=_i;break;case 536870912:n=hu;break;default:n=_i}n=zd(n,Ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ed(e,t){if(El=-1,Cl=0,(ce&6)!==0)throw Error(o(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Ii(e,e===Oe?Ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jl(e,r);else{t=r;var l=ce;ce|=2;var s=Pd();(Oe!==e||Ue!==t)&&(Jt=null,dr=_e()+500,Mn(e,t));do try{tm();break}catch(h){jd(e,h)}while(!0);aa(),yl.current=s,ce=l,Te!==null?t=0:(Oe=null,Ue=0,t=be)}if(t!==0){if(t===2&&(l=Eo(e),l!==0&&(r=l,t=Wa(e,l))),t===1)throw n=li,Mn(e,0),wn(e,r),rt(e,_e()),n;if(t===6)wn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Zh(l)&&(t=jl(e,r),t===2&&(s=Eo(e),s!==0&&(r=s,t=Wa(e,s))),t===1))throw n=li,Mn(e,0),wn(e,r),rt(e,_e()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:On(e,nt,Jt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=Ba+500-_e(),10<t)){if(Ii(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=qo(On.bind(null,e,nt,Jt),t);break}On(e,nt,Jt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var d=31-Ct(r);s=1<<d,d=t[d],d>l&&(l=d),r&=~s}if(r=l,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jh(r/1960))-r,10<r){e.timeoutHandle=qo(On.bind(null,e,nt,Jt),r);break}On(e,nt,Jt);break;case 5:On(e,nt,Jt);break;default:throw Error(o(329))}}}return rt(e,_e()),e.callbackNode===n?Ed.bind(null,e):null}function Wa(e,t){var n=oi;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=jl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Va(t)),e}function Va(e){nt===null?nt=e:nt.push.apply(nt,e)}function Zh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!jt(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~$a,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function Cd(e){if((ce&6)!==0)throw Error(o(327));fr();var t=Ii(e,0);if((t&1)===0)return rt(e,_e()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var r=Eo(e);r!==0&&(t=r,n=Wa(e,r))}if(n===1)throw n=li,Mn(e,0),wn(e,t),rt(e,_e()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,nt,Jt),rt(e,_e()),null}function Qa(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(dr=_e()+500,Ji&&pn())}}function Fn(e){yn!==null&&yn.tag===0&&(ce&6)===0&&fr();var t=ce;ce|=1;var n=wt.transition,r=me;try{if(wt.transition=null,me=1,e)return e()}finally{me=r,wt.transition=n,ce=t,(ce&6)===0&&pn()}}function Ka(){ut=cr.current,we(cr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_h(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:ar(),we(Ze),we(Ve),ma();break;case 5:pa(r);break;case 4:ar();break;case 13:we(je);break;case 19:we(je);break;case 10:sa(r.type._context);break;case 22:case 23:Ka()}n=n.return}if(Oe=e,Te=e=kn(e.current,null),Ue=ut=t,be=0,li=null,$a=xl=bn=0,nt=oi=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var d=s.next;s.next=l,r.next=d}n.pending=r}Tn=null}return e}function jd(e,t){do{var n=Te;try{if(aa(),sl.current=fl,ul){for(var r=Pe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(In=0,Me=Ie=Pe=null,Zr=!1,ei=0,Aa.current=null,n===null||n.return===null){be=1,li=t,Te=null;break}e:{var s=e,d=n.return,h=n,g=t;if(t=Ue,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var C=g,T=h,z=T.tag;if((T.mode&1)===0&&(z===0||z===11||z===15)){var L=T.alternate;L?(T.updateQueue=L.updateQueue,T.memoizedState=L.memoizedState,T.lanes=L.lanes):(T.updateQueue=null,T.memoizedState=null)}var U=qc(d);if(U!==null){U.flags&=-257,Xc(U,d,h,s,t),U.mode&1&&Yc(s,C,t),t=U,g=C;var W=t.updateQueue;if(W===null){var V=new Set;V.add(g),t.updateQueue=V}else W.add(g);break e}else{if((t&1)===0){Yc(s,C,t),Ga();break e}g=Error(o(426))}}else if(Ee&&h.mode&1){var Le=qc(d);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Xc(Le,d,h,s,t),la(sr(g,h));break e}}s=g=sr(g,h),be!==4&&(be=2),oi===null?oi=[s]:oi.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=Kc(s,g,t);wc(s,S);break e;case 1:h=g;var y=s.type,E=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(vn===null||!vn.has(E)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=Gc(s,h,t);wc(s,b);break e}}s=s.return}while(s!==null)}Rd(n)}catch(Q){t=Q,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Pd(){var e=yl.current;return yl.current=fl,e===null?fl:e}function Ga(){(be===0||be===3||be===2)&&(be=4),Oe===null||(bn&268435455)===0&&(xl&268435455)===0||wn(Oe,Ue)}function jl(e,t){var n=ce;ce|=2;var r=Pd();(Oe!==e||Ue!==t)&&(Jt=null,Mn(e,t));do try{em();break}catch(l){jd(e,l)}while(!0);if(aa(),ce=n,yl.current=r,Te!==null)throw Error(o(261));return Oe=null,Ue=0,be}function em(){for(;Te!==null;)Nd(Te)}function tm(){for(;Te!==null&&!Pp();)Nd(Te)}function Nd(e){var t=Td(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Rd(e):Te=t,Aa.current=null}function Rd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Kh(n,t,ut),n!==null){Te=n;return}}else{if(n=Gh(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);be===0&&(be=5)}function On(e,t,n){var r=me,l=wt.transition;try{wt.transition=null,me=1,nm(e,t,n,r)}finally{wt.transition=l,me=r}return null}function nm(e,t,n,r){do fr();while(yn!==null);if((ce&6)!==0)throw Error(o(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mp(e,s),e===Oe&&(Te=Oe=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||kl||(kl=!0,zd(_i,function(){return fr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=wt.transition,wt.transition=null;var d=me;me=1;var h=ce;ce|=4,Aa.current=null,qh(e,n),yd(n,e),Sh(Go),Mi=!!Ko,Go=Ko=null,e.current=n,Xh(n),Np(),ce=h,me=d,wt.transition=s}else e.current=n;if(kl&&(kl=!1,yn=e,Sl=l),s=e.pendingLanes,s===0&&(vn=null),Lp(n.stateNode),rt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(wl)throw wl=!1,e=Ua,Ua=null,e;return(Sl&1)!==0&&e.tag!==0&&fr(),s=e.pendingLanes,(s&1)!==0?e===Ha?ai++:(ai=0,Ha=e):ai=0,pn(),null}function fr(){if(yn!==null){var e=gu(Sl),t=wt.transition,n=me;try{if(wt.transition=null,me=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,Sl=0,(ce&6)!==0)throw Error(o(331));var l=ce;for(ce|=4,H=e.current;H!==null;){var s=H,d=s.child;if((H.flags&16)!==0){var h=s.deletions;if(h!==null){for(var g=0;g<h.length;g++){var C=h[g];for(H=C;H!==null;){var T=H;switch(T.tag){case 0:case 11:case 15:ii(8,T,s)}var z=T.child;if(z!==null)z.return=T,H=z;else for(;H!==null;){T=H;var L=T.sibling,U=T.return;if(pd(T),T===C){H=null;break}if(L!==null){L.return=U,H=L;break}H=U}}}var W=s.alternate;if(W!==null){var V=W.child;if(V!==null){W.child=null;do{var Le=V.sibling;V.sibling=null,V=Le}while(V!==null)}}H=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,H=d;else e:for(;H!==null;){if(s=H,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ii(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var y=e.current;for(H=y;H!==null;){d=H;var E=d.child;if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,H=E;else e:for(d=y;H!==null;){if(h=H,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:vl(9,h)}}catch(Q){Re(h,h.return,Q)}if(h===d){H=null;break e}var b=h.sibling;if(b!==null){b.return=h.return,H=b;break e}H=h.return}}if(ce=l,pn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Li,e)}catch{}r=!0}return r}finally{me=n,wt.transition=t}}return!1}function _d(e,t,n){t=sr(n,t),t=Kc(e,t,1),e=mn(e,t,1),t=Je(),e!==null&&(Tr(e,1,t),rt(e,t))}function Re(e,t,n){if(e.tag===3)_d(e,e,n);else for(;t!==null;){if(t.tag===3){_d(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=sr(n,e),e=Gc(t,e,1),t=mn(t,e,1),e=Je(),t!==null&&(Tr(t,1,e),rt(t,e));break}}t=t.return}}function rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ue&n)===n&&(be===4||be===3&&(Ue&130023424)===Ue&&500>_e()-Ba?Mn(e,0):$a|=n),rt(e,t)}function Ld(e,t){t===0&&((e.mode&1)===0?t=1:(t=zi,zi<<=1,(zi&130023424)===0&&(zi=4194304)));var n=Je();e=Yt(e,t),e!==null&&(Tr(e,t,n),rt(e,n))}function im(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ld(e,n)}function lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),Ld(e,n)}var Td;Td=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,Qh(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Ee&&(t.flags&1048576)!==0&&cc(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ml(e,t),e=t.pendingProps;var l=er(t,Ve.current);or(t,n),l=ya(null,t,r,e,l,n);var s=xa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(s=!0,Xi(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,da(t),l.updater=pl,t.stateNode=l,l._reactInternals=t,ja(t,r,e,n),t=_a(null,t,r,!0,s,n)):(t.tag=0,Ee&&s&&ta(t),Xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ml(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=am(r),e=Nt(r,e),l){case 0:t=Ra(null,t,r,e,n);break e;case 1:t=rd(null,t,r,e,n);break e;case 11:t=Jc(null,t,r,e,n);break e;case 14:t=Zc(null,t,r,Nt(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Ra(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),rd(e,t,r,l,n);case 3:e:{if(id(t),e===null)throw Error(o(387));r=t.pendingProps,s=t.memoizedState,l=s.element,xc(e,t),ol(t,r,null,n);var d=t.memoizedState;if(r=d.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=sr(Error(o(423)),t),t=ld(e,t,r,n,l);break e}else if(r!==l){l=sr(Error(o(424)),t),t=ld(e,t,r,n,l);break e}else for(st=cn(t.stateNode.containerInfo.firstChild),at=t,Ee=!0,Pt=null,n=vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===l){t=Xt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Sc(t),e===null&&ia(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,d=l.children,Yo(r,l)?d=null:s!==null&&Yo(r,s)&&(t.flags|=32),nd(e,t),Xe(e,t,d,n),t.child;case 6:return e===null&&ia(t),null;case 13:return od(e,t,n);case 4:return fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),Jc(e,t,r,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,d=l.value,ve(rl,r._currentValue),r._currentValue=d,s!==null)if(jt(s.value,d)){if(s.children===l.children&&!Ze.current){t=Xt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var h=s.dependencies;if(h!==null){d=s.child;for(var g=h.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=qt(-1,n&-n),g.tag=2;var C=s.updateQueue;if(C!==null){C=C.shared;var T=C.pending;T===null?g.next=g:(g.next=T.next,T.next=g),C.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),ua(s.return,n,t),h.lanes|=n;break}g=g.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(o(341));d.lanes|=n,h=d.alternate,h!==null&&(h.lanes|=n),ua(d,n,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,or(t,n),l=yt(l),r=r(l),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,l=Nt(r,t.pendingProps),l=Nt(r.type,l),Zc(e,t,r,l,n);case 15:return ed(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Nt(r,l),ml(e,t),t.tag=1,et(r)?(e=!0,Xi(t)):e=!1,or(t,n),Vc(t,r,l),ja(t,r,l,n),_a(null,t,r,!0,e,n);case 19:return sd(e,t,n);case 22:return td(e,t,n)}throw Error(o(156,t.tag))};function zd(e,t){return du(e,t)}function om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new om(e,t,n,r)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function am(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===mt)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pl(e,t,n,r,l,s){var d=2;if(r=e,typeof e=="function")Ya(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Y:return Dn(n.children,l,s,t);case Se:d=8,l|=8;break;case ye:return e=kt(12,n,t,l|2),e.elementType=ye,e.lanes=s,e;case qe:return e=kt(13,n,t,l),e.elementType=qe,e.lanes=s,e;case lt:return e=kt(19,n,t,l),e.elementType=lt,e.lanes=s,e;case ge:return Nl(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:d=10;break e;case pt:d=9;break e;case ht:d=11;break e;case mt:d=14;break e;case We:d=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=kt(d,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function Dn(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=kt(22,e,r,t),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function qa(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Xa(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ja(e,t,n,r,l,s,d,h,g){return e=new sm(e,t,n,h,g),t===1?(t=1,s===!0&&(t|=8)):t=0,s=kt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(s),e}function um(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Id(e){if(!e)return fn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(et(n))return ac(e,n,t)}return t}function bd(e,t,n,r,l,s,d,h,g){return e=Ja(n,r,!0,e,l,s,d,h,g),e.context=Id(null),n=e.current,r=Je(),l=xn(n),s=qt(r,l),s.callback=t??null,mn(n,s,l),e.current.lanes=l,Tr(e,l,r),rt(e,r),e}function Rl(e,t,n,r){var l=t.current,s=Je(),d=xn(l);return n=Id(n),t.context===null?t.context=n:t.pendingContext=n,t=qt(s,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mn(l,t,d),e!==null&&(Lt(e,l,d,s),ll(e,l,d)),d}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function cm(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function es(e){this._internalRoot=e}Ll.prototype.render=es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Rl(e,t,null,null)},Ll.prototype.unmount=es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Rl(null,e,null,null)}),t[Vt]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=xu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Su(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function dm(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var C=_l(d);s.call(C)}}var d=bd(t,r,e,0,null,!1,!1,"",Od);return e._reactRootContainer=d,e[Vt]=d.current,Vr(e.nodeType===8?e.parentNode:e),Fn(),d}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var h=r;r=function(){var C=_l(g);h.call(C)}}var g=Ja(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=g,e[Vt]=g.current,Vr(e.nodeType===8?e.parentNode:e),Fn(function(){Rl(t,g,n,r)}),g}function zl(e,t,n,r,l){var s=n._reactRootContainer;if(s){var d=s;if(typeof l=="function"){var h=l;l=function(){var g=_l(d);h.call(g)}}Rl(t,d,e,l)}else d=dm(n,t,e,l,r);return _l(d)}vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(jo(t,n|1),rt(t,_e()),(ce&6)===0&&(dr=_e()+500,pn()))}break;case 13:Fn(function(){var r=Yt(e,1);if(r!==null){var l=Je();Lt(r,e,1,l)}}),Za(e,1)}},Po=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Je();Lt(t,e,134217728,n)}Za(e,134217728)}},yu=function(e){if(e.tag===13){var t=xn(e),n=Yt(e,t);if(n!==null){var r=Je();Lt(n,e,t,r)}Za(e,t)}},xu=function(){return me},wu=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},yo=function(e,t,n){switch(t){case"input":if(uo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Yi(r);if(!l)throw Error(o(90));Et(r),uo(r,l)}}}break;case"textarea":Ys(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}},iu=Qa,lu=Fn;var fm={usingClientEntryPoint:!1,Events:[Gr,Jn,Yi,nu,ru,Qa]},si={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pm={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{Li=Il.inject(pm),Ot=Il}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm,it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(t))throw Error(o(200));return um(e,t,null,n)},it.createRoot=function(e,t){if(!ts(e))throw Error(o(299));var n=!1,r="",l=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ja(e,1,!1,null,null,n,!1,r,l),e[Vt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new es(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return Fn(e)},it.hydrate=function(e,t,n){if(!Tl(t))throw Error(o(200));return zl(null,e,t,!0,n)},it.hydrateRoot=function(e,t,n){if(!ts(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",d=Md;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=bd(t,null,e,1,n??null,l,!1,s,d),e[Vt]=t.current,Vr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ll(t)},it.render=function(e,t,n){if(!Tl(t))throw Error(o(200));return zl(null,e,t,!1,n)},it.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(o(40));return e._reactRootContainer?(Fn(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},it.unstable_batchedUpdates=Qa,it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Tl(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return zl(e,t,n,!1,r)},it.version="18.3.1-next-f1338f8080-20240426",it}var Vd;function km(){if(Vd)return is.exports;Vd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),is.exports=wm(),is.exports}var Qd;function Sm(){if(Qd)return bl;Qd=1;var i=km();return bl.createRoot=i.createRoot,bl.hydrateRoot=i.hydrateRoot,bl}var Em=Sm(),Kd="popstate";function Cm(i={}){function a(u,c){let{pathname:p,search:m,hash:x}=u.location;return gs("",{pathname:p,search:m,hash:x},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(u,c){return typeof c=="string"?c:vi(c)}return Pm(a,o,null,i)}function Ce(i,a){if(i===!1||i===null||typeof i>"u")throw new Error(a)}function bt(i,a){if(!i){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function jm(){return Math.random().toString(36).substring(2,10)}function Gd(i,a){return{usr:i.state,key:i.key,idx:a}}function gs(i,a,o=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof a=="string"?wr(a):a,state:o,key:a&&a.key||u||jm()}}function vi({pathname:i="/",search:a="",hash:o=""}){return a&&a!=="?"&&(i+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function wr(i){let a={};if(i){let o=i.indexOf("#");o>=0&&(a.hash=i.substring(o),i=i.substring(0,o));let u=i.indexOf("?");u>=0&&(a.search=i.substring(u),i=i.substring(0,u)),i&&(a.pathname=i)}return a}function Pm(i,a,o,u={}){let{window:c=document.defaultView,v5Compat:p=!1}=u,m=c.history,x="POP",v=null,w=P();w==null&&(w=0,m.replaceState({...m.state,idx:w},""));function P(){return(m.state||{idx:null}).idx}function N(){x="POP";let I=P(),D=I==null?null:I-w;w=I,v&&v({action:x,location:O.location,delta:D})}function R(I,D){x="PUSH";let K=gs(O.location,I,D);w=P()+1;let M=Gd(K,w),q=O.createHref(K);try{m.pushState(M,"",q)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;c.location.assign(q)}p&&v&&v({action:x,location:O.location,delta:1})}function F(I,D){x="REPLACE";let K=gs(O.location,I,D);w=P();let M=Gd(K,w),q=O.createHref(K);m.replaceState(M,"",q),p&&v&&v({action:x,location:O.location,delta:0})}function $(I){return Nm(I)}let O={get action(){return x},get location(){return i(c,m)},listen(I){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(Kd,N),v=I,()=>{c.removeEventListener(Kd,N),v=null}},createHref(I){return a(c,I)},createURL:$,encodeLocation(I){let D=$(I);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:R,replace:F,go(I){return m.go(I)}};return O}function Nm(i,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(o,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:vi(i);return u=u.replace(/ $/,"%20"),!a&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function yf(i,a,o="/"){return Rm(i,a,o,!1)}function Rm(i,a,o,u){let c=typeof a=="string"?wr(a):a,p=nn(c.pathname||"/",o);if(p==null)return null;let m=xf(i);_m(m);let x=null;for(let v=0;x==null&&v<m.length;++v){let w=$m(p);x=Dm(m[v],w,u)}return x}function xf(i,a=[],o=[],u=""){let c=(p,m,x)=>{let v={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};v.relativePath.startsWith("/")&&(Ce(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length));let w=tn([u,v.relativePath]),P=o.concat(v);p.children&&p.children.length>0&&(Ce(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),xf(p.children,a,P,w)),!(p.path==null&&!p.index)&&a.push({path:w,score:Mm(w,p.index),routesMeta:P})};return i.forEach((p,m)=>{var x;if(p.path===""||!((x=p.path)!=null&&x.includes("?")))c(p,m);else for(let v of wf(p.path))c(p,m,v)}),a}function wf(i){let a=i.split("/");if(a.length===0)return[];let[o,...u]=a,c=o.endsWith("?"),p=o.replace(/\?$/,"");if(u.length===0)return c?[p,""]:[p];let m=wf(u.join("/")),x=[];return x.push(...m.map(v=>v===""?p:[p,v].join("/"))),c&&x.push(...m),x.map(v=>i.startsWith("/")&&v===""?"/":v)}function _m(i){i.sort((a,o)=>a.score!==o.score?o.score-a.score:Om(a.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var Lm=/^:[\w-]+$/,Tm=3,zm=2,Im=1,bm=10,Fm=-2,Yd=i=>i==="*";function Mm(i,a){let o=i.split("/"),u=o.length;return o.some(Yd)&&(u+=Fm),a&&(u+=zm),o.filter(c=>!Yd(c)).reduce((c,p)=>c+(Lm.test(p)?Tm:p===""?Im:bm),u)}function Om(i,a){return i.length===a.length&&i.slice(0,-1).every((u,c)=>u===a[c])?i[i.length-1]-a[a.length-1]:0}function Dm(i,a,o=!1){let{routesMeta:u}=i,c={},p="/",m=[];for(let x=0;x<u.length;++x){let v=u[x],w=x===u.length-1,P=p==="/"?a:a.slice(p.length)||"/",N=Kl({path:v.relativePath,caseSensitive:v.caseSensitive,end:w},P),R=v.route;if(!N&&w&&o&&!u[u.length-1].route.index&&(N=Kl({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},P)),!N)return null;Object.assign(c,N.params),m.push({params:c,pathname:tn([p,N.pathname]),pathnameBase:Wm(tn([p,N.pathnameBase])),route:R}),N.pathnameBase!=="/"&&(p=tn([p,N.pathnameBase]))}return m}function Kl(i,a){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,u]=Am(i.path,i.caseSensitive,i.end),c=a.match(o);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),x=c.slice(1);return{params:u.reduce((w,{paramName:P,isOptional:N},R)=>{if(P==="*"){let $=x[R]||"";m=p.slice(0,p.length-$.length).replace(/(.)\/+$/,"$1")}const F=x[R];return N&&!F?w[P]=void 0:w[P]=(F||"").replace(/%2F/g,"/"),w},{}),pathname:p,pathnameBase:m,pattern:i}}function Am(i,a=!1,o=!0){bt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,v)=>(u.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),u]}function $m(i){try{return i.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return bt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),i}}function nn(i,a){if(a==="/")return i;if(!i.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,u=i.charAt(o);return u&&u!=="/"?null:i.slice(o)||"/"}function Bm(i,a="/"){let{pathname:o,search:u="",hash:c=""}=typeof i=="string"?wr(i):i;return{pathname:o?o.startsWith("/")?o:Um(o,a):a,search:Vm(u),hash:Qm(c)}}function Um(i,a){let o=a.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function as(i,a,o,u){return`Cannot include a '${i}' character in a manually specified \`to.${a}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hm(i){return i.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function _s(i){let a=Hm(i);return a.map((o,u)=>u===a.length-1?o.pathname:o.pathnameBase)}function Ls(i,a,o,u=!1){let c;typeof i=="string"?c=wr(i):(c={...i},Ce(!c.pathname||!c.pathname.includes("?"),as("?","pathname","search",c)),Ce(!c.pathname||!c.pathname.includes("#"),as("#","pathname","hash",c)),Ce(!c.search||!c.search.includes("#"),as("#","search","hash",c)));let p=i===""||c.pathname==="",m=p?"/":c.pathname,x;if(m==null)x=o;else{let N=a.length-1;if(!u&&m.startsWith("..")){let R=m.split("/");for(;R[0]==="..";)R.shift(),N-=1;c.pathname=R.join("/")}x=N>=0?a[N]:"/"}let v=Bm(c,x),w=m&&m!=="/"&&m.endsWith("/"),P=(p||m===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(w||P)&&(v.pathname+="/"),v}var tn=i=>i.join("/").replace(/\/\/+/g,"/"),Wm=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Vm=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Qm=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Km(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var kf=["POST","PUT","PATCH","DELETE"];new Set(kf);var Gm=["GET",...kf];new Set(Gm);var kr=j.createContext(null);kr.displayName="DataRouter";var Zl=j.createContext(null);Zl.displayName="DataRouterState";var Sf=j.createContext({isTransitioning:!1});Sf.displayName="ViewTransition";var Ym=j.createContext(new Map);Ym.displayName="Fetchers";var qm=j.createContext(null);qm.displayName="Await";var Ft=j.createContext(null);Ft.displayName="Navigation";var wi=j.createContext(null);wi.displayName="Location";var Mt=j.createContext({outlet:null,matches:[],isDataRoute:!1});Mt.displayName="Route";var Ts=j.createContext(null);Ts.displayName="RouteError";function Xm(i,{relative:a}={}){Ce(Sr(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=j.useContext(Ft),{hash:c,pathname:p,search:m}=ki(i,{relative:a}),x=p;return o!=="/"&&(x=p==="/"?o:tn([o,p])),u.createHref({pathname:x,search:m,hash:c})}function Sr(){return j.useContext(wi)!=null}function Ht(){return Ce(Sr(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(wi).location}var Ef="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cf(i){j.useContext(Ft).static||j.useLayoutEffect(i)}function jf(){let{isDataRoute:i}=j.useContext(Mt);return i?dg():Jm()}function Jm(){Ce(Sr(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(kr),{basename:a,navigator:o}=j.useContext(Ft),{matches:u}=j.useContext(Mt),{pathname:c}=Ht(),p=JSON.stringify(_s(u)),m=j.useRef(!1);return Cf(()=>{m.current=!0}),j.useCallback((v,w={})=>{if(bt(m.current,Ef),!m.current)return;if(typeof v=="number"){o.go(v);return}let P=Ls(v,JSON.parse(p),c,w.relative==="path");i==null&&a!=="/"&&(P.pathname=P.pathname==="/"?a:tn([a,P.pathname])),(w.replace?o.replace:o.push)(P,w.state,w)},[a,o,p,c,i])}j.createContext(null);function Zm(){let{matches:i}=j.useContext(Mt),a=i[i.length-1];return a?a.params:{}}function ki(i,{relative:a}={}){let{matches:o}=j.useContext(Mt),{pathname:u}=Ht(),c=JSON.stringify(_s(o));return j.useMemo(()=>Ls(i,JSON.parse(c),u,a==="path"),[i,c,u,a])}function eg(i,a){return Pf(i,a)}function Pf(i,a,o,u){var K;Ce(Sr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:p}=j.useContext(Ft),{matches:m}=j.useContext(Mt),x=m[m.length-1],v=x?x.params:{},w=x?x.pathname:"/",P=x?x.pathnameBase:"/",N=x&&x.route;{let M=N&&N.path||"";Nf(w,!N||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let R=Ht(),F;if(a){let M=typeof a=="string"?wr(a):a;Ce(P==="/"||((K=M.pathname)==null?void 0:K.startsWith(P)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${P}" but pathname "${M.pathname}" was given in the \`location\` prop.`),F=M}else F=R;let $=F.pathname||"/",O=$;if(P!=="/"){let M=P.replace(/^\//,"").split("/");O="/"+$.replace(/^\//,"").split("/").slice(M.length).join("/")}let I=!p&&o&&o.matches&&o.matches.length>0?o.matches:yf(i,{pathname:O});bt(N||I!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),bt(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=lg(I&&I.map(M=>Object.assign({},M,{params:Object.assign({},v,M.params),pathname:tn([P,c.encodeLocation?c.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?P:tn([P,c.encodeLocation?c.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),m,o,u);return a&&D?j.createElement(wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},D):D}function tg(){let i=cg(),a=Km(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",i),m=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},a),o?j.createElement("pre",{style:c},o):null,m)}var ng=j.createElement(tg,null),rg=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,a){return a.location!==i.location||a.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:a.error,location:a.location,revalidation:i.revalidation||a.revalidation}}componentDidCatch(i,a){console.error("React Router caught the following error during render",i,a)}render(){return this.state.error!==void 0?j.createElement(Mt.Provider,{value:this.props.routeContext},j.createElement(Ts.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ig({routeContext:i,match:a,children:o}){let u=j.useContext(kr);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),j.createElement(Mt.Provider,{value:i},o)}function lg(i,a=[],o=null,u=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let c=i,p=o==null?void 0:o.errors;if(p!=null){let v=c.findIndex(w=>w.route.id&&(p==null?void 0:p[w.route.id])!==void 0);Ce(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let m=!1,x=-1;if(o)for(let v=0;v<c.length;v++){let w=c[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(x=v),w.route.id){let{loaderData:P,errors:N}=o,R=w.route.loader&&!P.hasOwnProperty(w.route.id)&&(!N||N[w.route.id]===void 0);if(w.route.lazy||R){m=!0,x>=0?c=c.slice(0,x+1):c=[c[0]];break}}}return c.reduceRight((v,w,P)=>{let N,R=!1,F=null,$=null;o&&(N=p&&w.route.id?p[w.route.id]:void 0,F=w.route.errorElement||ng,m&&(x<0&&P===0?(Nf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,$=null):x===P&&(R=!0,$=w.route.hydrateFallbackElement||null)));let O=a.concat(c.slice(0,P+1)),I=()=>{let D;return N?D=F:R?D=$:w.route.Component?D=j.createElement(w.route.Component,null):w.route.element?D=w.route.element:D=v,j.createElement(ig,{match:w,routeContext:{outlet:v,matches:O,isDataRoute:o!=null},children:D})};return o&&(w.route.ErrorBoundary||w.route.errorElement||P===0)?j.createElement(rg,{location:o.location,revalidation:o.revalidation,component:F,error:N,children:I(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):I()},null)}function zs(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function og(i){let a=j.useContext(kr);return Ce(a,zs(i)),a}function ag(i){let a=j.useContext(Zl);return Ce(a,zs(i)),a}function sg(i){let a=j.useContext(Mt);return Ce(a,zs(i)),a}function Is(i){let a=sg(i),o=a.matches[a.matches.length-1];return Ce(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function ug(){return Is("useRouteId")}function cg(){var u;let i=j.useContext(Ts),a=ag("useRouteError"),o=Is("useRouteError");return i!==void 0?i:(u=a.errors)==null?void 0:u[o]}function dg(){let{router:i}=og("useNavigate"),a=Is("useNavigate"),o=j.useRef(!1);return Cf(()=>{o.current=!0}),j.useCallback(async(c,p={})=>{bt(o.current,Ef),o.current&&(typeof c=="number"?i.navigate(c):await i.navigate(c,{fromRouteId:a,...p}))},[i,a])}var qd={};function Nf(i,a,o){!a&&!qd[i]&&(qd[i]=!0,bt(!1,o))}j.memo(fg);function fg({routes:i,future:a,state:o}){return Pf(i,void 0,o,a)}function pg({to:i,replace:a,state:o,relative:u}){Ce(Sr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=j.useContext(Ft);bt(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=j.useContext(Mt),{pathname:m}=Ht(),x=jf(),v=Ls(i,_s(p),m,u==="path"),w=JSON.stringify(v);return j.useEffect(()=>{x(JSON.parse(w),{replace:a,state:o,relative:u})},[x,w,u,a,o]),null}function An(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hg({basename:i="/",children:a=null,location:o,navigationType:u="POP",navigator:c,static:p=!1}){Ce(!Sr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=i.replace(/^\/*/,"/"),x=j.useMemo(()=>({basename:m,navigator:c,static:p,future:{}}),[m,c,p]);typeof o=="string"&&(o=wr(o));let{pathname:v="/",search:w="",hash:P="",state:N=null,key:R="default"}=o,F=j.useMemo(()=>{let $=nn(v,m);return $==null?null:{location:{pathname:$,search:w,hash:P,state:N,key:R},navigationType:u}},[m,v,w,P,N,R,u]);return bt(F!=null,`<Router basename="${m}"> is not able to match the URL "${v}${w}${P}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:j.createElement(Ft.Provider,{value:x},j.createElement(wi.Provider,{children:a,value:F}))}function mg({children:i,location:a}){return eg(vs(i),a)}function vs(i,a=[]){let o=[];return j.Children.forEach(i,(u,c)=>{if(!j.isValidElement(u))return;let p=[...a,c];if(u.type===j.Fragment){o.push.apply(o,vs(u.props.children,p));return}Ce(u.type===An,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!u.props.index||!u.props.children,"An index route cannot have child routes.");let m={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(m.children=vs(u.props.children,p)),o.push(m)}),o}var Dl="get",Al="application/x-www-form-urlencoded";function eo(i){return i!=null&&typeof i.tagName=="string"}function gg(i){return eo(i)&&i.tagName.toLowerCase()==="button"}function vg(i){return eo(i)&&i.tagName.toLowerCase()==="form"}function yg(i){return eo(i)&&i.tagName.toLowerCase()==="input"}function xg(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function wg(i,a){return i.button===0&&(!a||a==="_self")&&!xg(i)}var Fl=null;function kg(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var Sg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ss(i){return i!=null&&!Sg.has(i)?(bt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Al}"`),null):i}function Eg(i,a){let o,u,c,p,m;if(vg(i)){let x=i.getAttribute("action");u=x?nn(x,a):null,o=i.getAttribute("method")||Dl,c=ss(i.getAttribute("enctype"))||Al,p=new FormData(i)}else if(gg(i)||yg(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||x.getAttribute("action");if(u=v?nn(v,a):null,o=i.getAttribute("formmethod")||x.getAttribute("method")||Dl,c=ss(i.getAttribute("formenctype"))||ss(x.getAttribute("enctype"))||Al,p=new FormData(x,i),!kg()){let{name:w,type:P,value:N}=i;if(P==="image"){let R=w?`${w}.`:"";p.append(`${R}x`,"0"),p.append(`${R}y`,"0")}else w&&p.append(w,N)}}else{if(eo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Dl,u=null,c=Al,m=i}return p&&c==="text/plain"&&(m=p,p=void 0),{action:u,method:o.toLowerCase(),encType:c,formData:p,body:m}}function bs(i,a){if(i===!1||i===null||typeof i>"u")throw new Error(a)}async function Cg(i,a){if(i.id in a)return a[i.id];try{let o=await import(i.module);return a[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jg(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Pg(i,a,o){let u=await Promise.all(i.map(async c=>{let p=a.routes[c.route.id];if(p){let m=await Cg(p,o);return m.links?m.links():[]}return[]}));return Lg(u.flat(1).filter(jg).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Xd(i,a,o,u,c,p){let m=(v,w)=>o[w]?v.route.id!==o[w].route.id:!0,x=(v,w)=>{var P;return o[w].pathname!==v.pathname||((P=o[w].route.path)==null?void 0:P.endsWith("*"))&&o[w].params["*"]!==v.params["*"]};return p==="assets"?a.filter((v,w)=>m(v,w)||x(v,w)):p==="data"?a.filter((v,w)=>{var N;let P=u.routes[v.route.id];if(!P||!P.hasLoader)return!1;if(m(v,w)||x(v,w))return!0;if(v.route.shouldRevalidate){let R=v.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((N=o[0])==null?void 0:N.params)||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Ng(i,a,{includeHydrateFallback:o}={}){return Rg(i.map(u=>{let c=a.routes[u.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function Rg(i){return[...new Set(i)]}function _g(i){let a={},o=Object.keys(i).sort();for(let u of o)a[u]=i[u];return a}function Lg(i,a){let o=new Set;return new Set(a),i.reduce((u,c)=>{let p=JSON.stringify(_g(c));return o.has(p)||(o.add(p),u.push({key:p,link:c})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tg=new Set([100,101,204,205]);function zg(i,a){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname="_root.data":a&&nn(o.pathname,a)==="/"?o.pathname=`${a.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Rf(){let i=j.useContext(kr);return bs(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Ig(){let i=j.useContext(Zl);return bs(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Fs=j.createContext(void 0);Fs.displayName="FrameworkContext";function _f(){let i=j.useContext(Fs);return bs(i,"You must render this element inside a <HydratedRouter> element"),i}function bg(i,a){let o=j.useContext(Fs),[u,c]=j.useState(!1),[p,m]=j.useState(!1),{onFocus:x,onBlur:v,onMouseEnter:w,onMouseLeave:P,onTouchStart:N}=a,R=j.useRef(null);j.useEffect(()=>{if(i==="render"&&m(!0),i==="viewport"){let O=D=>{D.forEach(K=>{m(K.isIntersecting)})},I=new IntersectionObserver(O,{threshold:.5});return R.current&&I.observe(R.current),()=>{I.disconnect()}}},[i]),j.useEffect(()=>{if(u){let O=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(O)}}},[u]);let F=()=>{c(!0)},$=()=>{c(!1),m(!1)};return o?i!=="intent"?[p,R,{}]:[p,R,{onFocus:ci(x,F),onBlur:ci(v,$),onMouseEnter:ci(w,F),onMouseLeave:ci(P,$),onTouchStart:ci(N,F)}]:[!1,R,{}]}function ci(i,a){return o=>{i&&i(o),o.defaultPrevented||a(o)}}function Fg({page:i,...a}){let{router:o}=Rf(),u=j.useMemo(()=>yf(o.routes,i,o.basename),[o.routes,i,o.basename]);return u?j.createElement(Og,{page:i,matches:u,...a}):null}function Mg(i){let{manifest:a,routeModules:o}=_f(),[u,c]=j.useState([]);return j.useEffect(()=>{let p=!1;return Pg(i,a,o).then(m=>{p||c(m)}),()=>{p=!0}},[i,a,o]),u}function Og({page:i,matches:a,...o}){let u=Ht(),{manifest:c,routeModules:p}=_f(),{basename:m}=Rf(),{loaderData:x,matches:v}=Ig(),w=j.useMemo(()=>Xd(i,a,v,c,u,"data"),[i,a,v,c,u]),P=j.useMemo(()=>Xd(i,a,v,c,u,"assets"),[i,a,v,c,u]),N=j.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let $=new Set,O=!1;if(a.forEach(D=>{var M;let K=c.routes[D.route.id];!K||!K.hasLoader||(!w.some(q=>q.route.id===D.route.id)&&D.route.id in x&&((M=p[D.route.id])!=null&&M.shouldRevalidate)||K.hasClientLoader?O=!0:$.add(D.route.id))}),$.size===0)return[];let I=zg(i,m);return O&&$.size>0&&I.searchParams.set("_routes",a.filter(D=>$.has(D.route.id)).map(D=>D.route.id).join(",")),[I.pathname+I.search]},[m,x,u,c,w,a,i,p]),R=j.useMemo(()=>Ng(P,c),[P,c]),F=Mg(P);return j.createElement(j.Fragment,null,N.map($=>j.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...o})),R.map($=>j.createElement("link",{key:$,rel:"modulepreload",href:$,...o})),F.map(({key:$,link:O})=>j.createElement("link",{key:$,...O})))}function Dg(...i){return a=>{i.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Lf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lf&&(window.__reactRouterVersion="7.6.0")}catch{}function Ag({basename:i,children:a,window:o}){let u=j.useRef();u.current==null&&(u.current=Cm({window:o,v5Compat:!0}));let c=u.current,[p,m]=j.useState({action:c.action,location:c.location}),x=j.useCallback(v=>{j.startTransition(()=>m(v))},[m]);return j.useLayoutEffect(()=>c.listen(x),[c,x]),j.createElement(hg,{basename:i,children:a,location:p.location,navigationType:p.action,navigator:c})}var Tf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,to=j.forwardRef(function({onClick:a,discover:o="render",prefetch:u="none",relative:c,reloadDocument:p,replace:m,state:x,target:v,to:w,preventScrollReset:P,viewTransition:N,...R},F){let{basename:$}=j.useContext(Ft),O=typeof w=="string"&&Tf.test(w),I,D=!1;if(typeof w=="string"&&O&&(I=w,Lf))try{let ye=new URL(window.location.href),Fe=w.startsWith("//")?new URL(ye.protocol+w):new URL(w),pt=nn(Fe.pathname,$);Fe.origin===ye.origin&&pt!=null?w=pt+Fe.search+Fe.hash:D=!0}catch{bt(!1,`<Link to="${w}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=Xm(w,{relative:c}),[M,q,ne]=bg(u,R),ee=Ug(w,{replace:m,state:x,target:v,preventScrollReset:P,relative:c,viewTransition:N});function Y(ye){a&&a(ye),ye.defaultPrevented||ee(ye)}let Se=j.createElement("a",{...R,...ne,href:I||K,onClick:D||p?a:Y,ref:Dg(F,q),target:v,"data-discover":!O&&o==="render"?"true":void 0});return M&&!O?j.createElement(j.Fragment,null,Se,j.createElement(Fg,{page:K})):Se});to.displayName="Link";var zf=j.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:u="",end:c=!1,style:p,to:m,viewTransition:x,children:v,...w},P){let N=ki(m,{relative:w.relative}),R=Ht(),F=j.useContext(Zl),{navigator:$,basename:O}=j.useContext(Ft),I=F!=null&&Kg(N)&&x===!0,D=$.encodeLocation?$.encodeLocation(N).pathname:N.pathname,K=R.pathname,M=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;o||(K=K.toLowerCase(),M=M?M.toLowerCase():null,D=D.toLowerCase()),M&&O&&(M=nn(M,O)||M);const q=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let ne=K===D||!c&&K.startsWith(D)&&K.charAt(q)==="/",ee=M!=null&&(M===D||!c&&M.startsWith(D)&&M.charAt(D.length)==="/"),Y={isActive:ne,isPending:ee,isTransitioning:I},Se=ne?a:void 0,ye;typeof u=="function"?ye=u(Y):ye=[u,ne?"active":null,ee?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof p=="function"?p(Y):p;return j.createElement(to,{...w,"aria-current":Se,className:ye,ref:P,style:Fe,to:m,viewTransition:x},typeof v=="function"?v(Y):v)});zf.displayName="NavLink";var $g=j.forwardRef(({discover:i="render",fetcherKey:a,navigate:o,reloadDocument:u,replace:c,state:p,method:m=Dl,action:x,onSubmit:v,relative:w,preventScrollReset:P,viewTransition:N,...R},F)=>{let $=Vg(),O=Qg(x,{relative:w}),I=m.toLowerCase()==="get"?"get":"post",D=typeof x=="string"&&Tf.test(x),K=M=>{if(v&&v(M),M.defaultPrevented)return;M.preventDefault();let q=M.nativeEvent.submitter,ne=(q==null?void 0:q.getAttribute("formmethod"))||m;$(q||M.currentTarget,{fetcherKey:a,method:ne,navigate:o,replace:c,state:p,relative:w,preventScrollReset:P,viewTransition:N})};return j.createElement("form",{ref:F,method:I,action:O,onSubmit:u?v:K,...R,"data-discover":!D&&i==="render"?"true":void 0})});$g.displayName="Form";function Bg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function If(i){let a=j.useContext(kr);return Ce(a,Bg(i)),a}function Ug(i,{target:a,replace:o,state:u,preventScrollReset:c,relative:p,viewTransition:m}={}){let x=jf(),v=Ht(),w=ki(i,{relative:p});return j.useCallback(P=>{if(wg(P,a)){P.preventDefault();let N=o!==void 0?o:vi(v)===vi(w);x(i,{replace:N,state:u,preventScrollReset:c,relative:p,viewTransition:m})}},[v,x,w,o,u,a,i,c,p,m])}var Hg=0,Wg=()=>`__${String(++Hg)}__`;function Vg(){let{router:i}=If("useSubmit"),{basename:a}=j.useContext(Ft),o=ug();return j.useCallback(async(u,c={})=>{let{action:p,method:m,encType:x,formData:v,body:w}=Eg(u,a);if(c.navigate===!1){let P=c.fetcherKey||Wg();await i.fetch(P,o,c.action||p,{preventScrollReset:c.preventScrollReset,formData:v,body:w,formMethod:c.method||m,formEncType:c.encType||x,flushSync:c.flushSync})}else await i.navigate(c.action||p,{preventScrollReset:c.preventScrollReset,formData:v,body:w,formMethod:c.method||m,formEncType:c.encType||x,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,a,o])}function Qg(i,{relative:a}={}){let{basename:o}=j.useContext(Ft),u=j.useContext(Mt);Ce(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),p={...ki(i||".",{relative:a})},m=Ht();if(i==null){p.search=m.search;let x=new URLSearchParams(p.search),v=x.getAll("index");if(v.some(P=>P==="")){x.delete("index"),v.filter(N=>N).forEach(N=>x.append("index",N));let P=x.toString();p.search=P?`?${P}`:""}}return(!i||i===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(p.pathname=p.pathname==="/"?o:tn([o,p.pathname])),vi(p)}function Kg(i,a={}){let o=j.useContext(Sf);Ce(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=If("useViewTransitionState"),c=ki(i,{relative:a.relative});if(!o.isTransitioning)return!1;let p=nn(o.currentLocation.pathname,u)||o.currentLocation.pathname,m=nn(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Kl(c.pathname,m)!=null||Kl(c.pathname,p)!=null}[...Tg];var us={exports:{}},cs,Jd;function Gg(){if(Jd)return cs;Jd=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return cs=i,cs}var ds,Zd;function Yg(){if(Zd)return ds;Zd=1;var i=Gg();function a(){}function o(){}return o.resetWarningCache=a,ds=function(){function u(m,x,v,w,P,N){if(N!==i){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}u.isRequired=u;function c(){return u}var p={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:c,element:u,elementType:u,instanceOf:c,node:u,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:o,resetWarningCache:a};return p.PropTypes=p,p},ds}var ef;function qg(){return ef||(ef=1,us.exports=Yg()()),us.exports}var Xg=qg();const Z=vf(Xg),bf=j.createContext({isDarkMode:!0,toggleTheme:()=>{}}),Jg=()=>j.useContext(bf),Zg="theme",ev=()=>document.documentElement.dataset.theme!=="light",Ff=({children:i})=>{const[a,o]=j.useState(ev);j.useEffect(()=>{const c=a?"dark":"light";document.documentElement.dataset.theme=c;try{window.localStorage.setItem(Zg,c)}catch{}},[a]);const u=()=>o(c=>!c);return f.jsx(bf.Provider,{value:{isDarkMode:a,toggleTheme:u},children:i})};Ff.propTypes={children:Z.node.isRequired};var Ye=function(){return Ye=Object.assign||function(a){for(var o,u=1,c=arguments.length;u<c;u++){o=arguments[u];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(a[p]=o[p])}return a},Ye.apply(this,arguments)};function yi(i,a,o){if(o||arguments.length===2)for(var u=0,c=a.length,p;u<c;u++)(p||!(u in a))&&(p||(p=Array.prototype.slice.call(a,0,u)),p[u]=a[u]);return i.concat(p||Array.prototype.slice.call(a))}var ke="-ms-",mi="-moz-",he="-webkit-",Mf="comm",no="rule",Ms="decl",tv="@import",Of="@keyframes",nv="@layer",Df=Math.abs,Os=String.fromCharCode,ys=Object.assign;function rv(i,a){return Ae(i,0)^45?(((a<<2^Ae(i,0))<<2^Ae(i,1))<<2^Ae(i,2))<<2^Ae(i,3):0}function Af(i){return i.trim()}function Zt(i,a){return(i=a.exec(i))?i[0]:i}function le(i,a,o){return i.replace(a,o)}function $l(i,a,o){return i.indexOf(a,o)}function Ae(i,a){return i.charCodeAt(a)|0}function mr(i,a,o){return i.slice(a,o)}function Ut(i){return i.length}function $f(i){return i.length}function hi(i,a){return a.push(i),i}function iv(i,a){return i.map(a).join("")}function tf(i,a){return i.filter(function(o){return!Zt(o,a)})}var ro=1,gr=1,Bf=0,St=0,ze=0,Er="";function io(i,a,o,u,c,p,m,x){return{value:i,root:a,parent:o,type:u,props:c,children:p,line:ro,column:gr,length:m,return:"",siblings:x}}function En(i,a){return ys(io("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},a)}function pr(i){for(;i.root;)i=En(i.root,{children:[i]});hi(i,i.siblings)}function lv(){return ze}function ov(){return ze=St>0?Ae(Er,--St):0,gr--,ze===10&&(gr=1,ro--),ze}function It(){return ze=St<Bf?Ae(Er,St++):0,gr++,ze===10&&(gr=1,ro++),ze}function Bn(){return Ae(Er,St)}function Bl(){return St}function lo(i,a){return mr(Er,i,a)}function xs(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function av(i){return ro=gr=1,Bf=Ut(Er=i),St=0,[]}function sv(i){return Er="",i}function fs(i){return Af(lo(St-1,ws(i===91?i+2:i===40?i+1:i)))}function uv(i){for(;(ze=Bn())&&ze<33;)It();return xs(i)>2||xs(ze)>3?"":" "}function cv(i,a){for(;--a&&It()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return lo(i,Bl()+(a<6&&Bn()==32&&It()==32))}function ws(i){for(;It();)switch(ze){case i:return St;case 34:case 39:i!==34&&i!==39&&ws(ze);break;case 40:i===41&&ws(i);break;case 92:It();break}return St}function dv(i,a){for(;It()&&i+ze!==57;)if(i+ze===84&&Bn()===47)break;return"/*"+lo(a,St-1)+"*"+Os(i===47?i:It())}function fv(i){for(;!xs(Bn());)It();return lo(i,St)}function pv(i){return sv(Ul("",null,null,null,[""],i=av(i),0,[0],i))}function Ul(i,a,o,u,c,p,m,x,v){for(var w=0,P=0,N=m,R=0,F=0,$=0,O=1,I=1,D=1,K=0,M="",q=c,ne=p,ee=u,Y=M;I;)switch($=K,K=It()){case 40:if($!=108&&Ae(Y,N-1)==58){$l(Y+=le(fs(K),"&","&\f"),"&\f",Df(w?x[w-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:Y+=fs(K);break;case 9:case 10:case 13:case 32:Y+=uv($);break;case 92:Y+=cv(Bl()-1,7);continue;case 47:switch(Bn()){case 42:case 47:hi(hv(dv(It(),Bl()),a,o,v),v);break;default:Y+="/"}break;case 123*O:x[w++]=Ut(Y)*D;case 125*O:case 59:case 0:switch(K){case 0:case 125:I=0;case 59+P:D==-1&&(Y=le(Y,/\f/g,"")),F>0&&Ut(Y)-N&&hi(F>32?rf(Y+";",u,o,N-1,v):rf(le(Y," ","")+";",u,o,N-2,v),v);break;case 59:Y+=";";default:if(hi(ee=nf(Y,a,o,w,P,c,x,M,q=[],ne=[],N,p),p),K===123)if(P===0)Ul(Y,a,ee,ee,q,p,N,x,ne);else switch(R===99&&Ae(Y,3)===110?100:R){case 100:case 108:case 109:case 115:Ul(i,ee,ee,u&&hi(nf(i,ee,ee,0,0,c,x,M,c,q=[],N,ne),ne),c,ne,N,x,u?q:ne);break;default:Ul(Y,ee,ee,ee,[""],ne,0,x,ne)}}w=P=F=0,O=D=1,M=Y="",N=m;break;case 58:N=1+Ut(Y),F=$;default:if(O<1){if(K==123)--O;else if(K==125&&O++==0&&ov()==125)continue}switch(Y+=Os(K),K*O){case 38:D=P>0?1:(Y+="\f",-1);break;case 44:x[w++]=(Ut(Y)-1)*D,D=1;break;case 64:Bn()===45&&(Y+=fs(It())),R=Bn(),P=N=Ut(M=Y+=fv(Bl())),K++;break;case 45:$===45&&Ut(Y)==2&&(O=0)}}return p}function nf(i,a,o,u,c,p,m,x,v,w,P,N){for(var R=c-1,F=c===0?p:[""],$=$f(F),O=0,I=0,D=0;O<u;++O)for(var K=0,M=mr(i,R+1,R=Df(I=m[O])),q=i;K<$;++K)(q=Af(I>0?F[K]+" "+M:le(M,/&\f/g,F[K])))&&(v[D++]=q);return io(i,a,o,c===0?no:x,v,w,P,N)}function hv(i,a,o,u){return io(i,a,o,Mf,Os(lv()),mr(i,2,-2),0,u)}function rf(i,a,o,u,c){return io(i,a,o,Ms,mr(i,0,u),mr(i,u+1,-1),u,c)}function Uf(i,a,o){switch(rv(i,a)){case 5103:return he+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+i+i;case 4789:return mi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return he+i+mi+i+ke+i+i;case 5936:switch(Ae(i,a+11)){case 114:return he+i+ke+le(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return he+i+ke+le(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return he+i+ke+le(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return he+i+ke+i+i;case 6165:return he+i+ke+"flex-"+i+i;case 5187:return he+i+le(i,/(\w+).+(:[^]+)/,he+"box-$1$2"+ke+"flex-$1$2")+i;case 5443:return he+i+ke+"flex-item-"+le(i,/flex-|-self/g,"")+(Zt(i,/flex-|baseline/)?"":ke+"grid-row-"+le(i,/flex-|-self/g,""))+i;case 4675:return he+i+ke+"flex-line-pack"+le(i,/align-content|flex-|-self/g,"")+i;case 5548:return he+i+ke+le(i,"shrink","negative")+i;case 5292:return he+i+ke+le(i,"basis","preferred-size")+i;case 6060:return he+"box-"+le(i,"-grow","")+he+i+ke+le(i,"grow","positive")+i;case 4554:return he+le(i,/([^-])(transform)/g,"$1"+he+"$2")+i;case 6187:return le(le(le(i,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),i,"")+i;case 5495:case 3959:return le(i,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return le(le(i,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+i+i;case 4200:if(!Zt(i,/flex-|baseline/))return ke+"grid-column-align"+mr(i,a)+i;break;case 2592:case 3360:return ke+le(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(u,c){return a=c,Zt(u.props,/grid-\w+-end/)})?~$l(i+(o=o[a].value),"span",0)?i:ke+le(i,"-start","")+i+ke+"grid-row-span:"+(~$l(o,"span",0)?Zt(o,/\d+/):+Zt(o,/\d+/)-+Zt(i,/\d+/))+";":ke+le(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(u){return Zt(u.props,/grid-\w+-start/)})?i:ke+le(le(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return le(i,/(.+)-inline(.+)/,he+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(i)-1-a>6)switch(Ae(i,a+1)){case 109:if(Ae(i,a+4)!==45)break;case 102:return le(i,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+mi+(Ae(i,a+3)==108?"$3":"$2-$3"))+i;case 115:return~$l(i,"stretch",0)?Uf(le(i,"stretch","fill-available"),a,o)+i:i}break;case 5152:case 5920:return le(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,c,p,m,x,v,w){return ke+c+":"+p+w+(m?ke+c+"-span:"+(x?v:+v-+p)+w:"")+i});case 4949:if(Ae(i,a+6)===121)return le(i,":",":"+he)+i;break;case 6444:switch(Ae(i,Ae(i,14)===45?18:11)){case 120:return le(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Ae(i,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+ke+"$2box$3")+i;case 100:return le(i,":",":"+ke)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(i,"scroll-","scroll-snap-")+i}return i}function Gl(i,a){for(var o="",u=0;u<i.length;u++)o+=a(i[u],u,i,a)||"";return o}function mv(i,a,o,u){switch(i.type){case nv:if(i.children.length)break;case tv:case Ms:return i.return=i.return||i.value;case Mf:return"";case Of:return i.return=i.value+"{"+Gl(i.children,u)+"}";case no:if(!Ut(i.value=i.props.join(",")))return""}return Ut(o=Gl(i.children,u))?i.return=i.value+"{"+o+"}":""}function gv(i){var a=$f(i);return function(o,u,c,p){for(var m="",x=0;x<a;x++)m+=i[x](o,u,c,p)||"";return m}}function vv(i){return function(a){a.root||(a=a.return)&&i(a)}}function yv(i,a,o,u){if(i.length>-1&&!i.return)switch(i.type){case Ms:i.return=Uf(i.value,i.length,o);return;case Of:return Gl([En(i,{value:le(i.value,"@","@"+he)})],u);case no:if(i.length)return iv(o=i.props,function(c){switch(Zt(c,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pr(En(i,{props:[le(c,/:(read-\w+)/,":"+mi+"$1")]})),pr(En(i,{props:[c]})),ys(i,{props:tf(o,u)});break;case"::placeholder":pr(En(i,{props:[le(c,/:(plac\w+)/,":"+he+"input-$1")]})),pr(En(i,{props:[le(c,/:(plac\w+)/,":"+mi+"$1")]})),pr(En(i,{props:[le(c,/:(plac\w+)/,ke+"input-$1")]})),pr(En(i,{props:[c]})),ys(i,{props:tf(o,u)});break}return""})}}var xv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct={},vr=typeof process<"u"&&ct!==void 0&&(ct.REACT_APP_SC_ATTR||ct.SC_ATTR)||"data-styled",Hf="active",Wf="data-styled-version",oo="6.1.14",Ds=`/*!sc*/
`,Yl=typeof window<"u"&&"HTMLElement"in window,wv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ct!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==""?ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ct!==void 0&&ct.SC_DISABLE_SPEEDY!==void 0&&ct.SC_DISABLE_SPEEDY!==""&&ct.SC_DISABLE_SPEEDY!=="false"&&ct.SC_DISABLE_SPEEDY),kv={},ao=Object.freeze([]),yr=Object.freeze({});function Vf(i,a,o){return o===void 0&&(o=yr),i.theme!==o.theme&&i.theme||a||o.theme}var Qf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Sv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ev=/(^-|-$)/g;function lf(i){return i.replace(Sv,"-").replace(Ev,"")}var Cv=/(a)(d)/gi,Ml=52,of=function(i){return String.fromCharCode(i+(i>25?39:97))};function ks(i){var a,o="";for(a=Math.abs(i);a>Ml;a=a/Ml|0)o=of(a%Ml)+o;return(of(a%Ml)+o).replace(Cv,"$1-$2")}var ps,Kf=5381,hr=function(i,a){for(var o=a.length;o;)i=33*i^a.charCodeAt(--o);return i},Gf=function(i){return hr(Kf,i)};function Yf(i){return ks(Gf(i)>>>0)}function jv(i){return i.displayName||i.name||"Component"}function hs(i){return typeof i=="string"&&!0}var qf=typeof Symbol=="function"&&Symbol.for,Xf=qf?Symbol.for("react.memo"):60115,Pv=qf?Symbol.for("react.forward_ref"):60112,Nv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_v=((ps={})[Pv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ps[Xf]=Jf,ps);function af(i){return("type"in(a=i)&&a.type.$$typeof)===Xf?Jf:"$$typeof"in i?_v[i.$$typeof]:Nv;var a}var Lv=Object.defineProperty,Tv=Object.getOwnPropertyNames,sf=Object.getOwnPropertySymbols,zv=Object.getOwnPropertyDescriptor,Iv=Object.getPrototypeOf,uf=Object.prototype;function Zf(i,a,o){if(typeof a!="string"){if(uf){var u=Iv(a);u&&u!==uf&&Zf(i,u,o)}var c=Tv(a);sf&&(c=c.concat(sf(a)));for(var p=af(i),m=af(a),x=0;x<c.length;++x){var v=c[x];if(!(v in Rv||o&&o[v]||m&&v in m||p&&v in p)){var w=zv(a,v);try{Lv(i,v,w)}catch{}}}}return i}function xr(i){return typeof i=="function"}function As(i){return typeof i=="object"&&"styledComponentId"in i}function $n(i,a){return i&&a?"".concat(i," ").concat(a):i||a||""}function Ss(i,a){if(i.length===0)return"";for(var o=i[0],u=1;u<i.length;u++)o+=i[u];return o}function xi(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Es(i,a,o){if(o===void 0&&(o=!1),!o&&!xi(i)&&!Array.isArray(i))return a;if(Array.isArray(a))for(var u=0;u<a.length;u++)i[u]=Es(i[u],a[u]);else if(xi(a))for(var u in a)i[u]=Es(i[u],a[u]);return i}function $s(i,a){Object.defineProperty(i,"toString",{value:a})}function Si(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var bv=function(){function i(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return i.prototype.indexOfGroup=function(a){for(var o=0,u=0;u<a;u++)o+=this.groupSizes[u];return o},i.prototype.insertRules=function(a,o){if(a>=this.groupSizes.length){for(var u=this.groupSizes,c=u.length,p=c;a>=p;)if((p<<=1)<0)throw Si(16,"".concat(a));this.groupSizes=new Uint32Array(p),this.groupSizes.set(u),this.length=p;for(var m=c;m<p;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(a+1),v=(m=0,o.length);m<v;m++)this.tag.insertRule(x,o[m])&&(this.groupSizes[a]++,x++)},i.prototype.clearGroup=function(a){if(a<this.length){var o=this.groupSizes[a],u=this.indexOfGroup(a),c=u+o;this.groupSizes[a]=0;for(var p=u;p<c;p++)this.tag.deleteRule(u)}},i.prototype.getGroup=function(a){var o="";if(a>=this.length||this.groupSizes[a]===0)return o;for(var u=this.groupSizes[a],c=this.indexOfGroup(a),p=c+u,m=c;m<p;m++)o+="".concat(this.tag.getRule(m)).concat(Ds);return o},i}(),Hl=new Map,ql=new Map,Wl=1,Ol=function(i){if(Hl.has(i))return Hl.get(i);for(;ql.has(Wl);)Wl++;var a=Wl++;return Hl.set(i,a),ql.set(a,i),a},Fv=function(i,a){Wl=a+1,Hl.set(i,a),ql.set(a,i)},Mv="style[".concat(vr,"][").concat(Wf,'="').concat(oo,'"]'),Ov=new RegExp("^".concat(vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dv=function(i,a,o){for(var u,c=o.split(","),p=0,m=c.length;p<m;p++)(u=c[p])&&i.registerName(a,u)},Av=function(i,a){for(var o,u=((o=a.textContent)!==null&&o!==void 0?o:"").split(Ds),c=[],p=0,m=u.length;p<m;p++){var x=u[p].trim();if(x){var v=x.match(Ov);if(v){var w=0|parseInt(v[1],10),P=v[2];w!==0&&(Fv(P,w),Dv(i,P,v[3]),i.getTag().insertRules(w,c)),c.length=0}else c.push(x)}}},cf=function(i){for(var a=document.querySelectorAll(Mv),o=0,u=a.length;o<u;o++){var c=a[o];c&&c.getAttribute(vr)!==Hf&&(Av(i,c),c.parentNode&&c.parentNode.removeChild(c))}};function $v(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ep=function(i){var a=document.head,o=i||a,u=document.createElement("style"),c=function(x){var v=Array.from(x.querySelectorAll("style[".concat(vr,"]")));return v[v.length-1]}(o),p=c!==void 0?c.nextSibling:null;u.setAttribute(vr,Hf),u.setAttribute(Wf,oo);var m=$v();return m&&u.setAttribute("nonce",m),o.insertBefore(u,p),u},Bv=function(){function i(a){this.element=ep(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,c=0,p=u.length;c<p;c++){var m=u[c];if(m.ownerNode===o)return m}throw Si(17)}(this.element),this.length=0}return i.prototype.insertRule=function(a,o){try{return this.sheet.insertRule(o,a),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},i.prototype.getRule=function(a){var o=this.sheet.cssRules[a];return o&&o.cssText?o.cssText:""},i}(),Uv=function(){function i(a){this.element=ep(a),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(a,o){if(a<=this.length&&a>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[a]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},i.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},i}(),Hv=function(){function i(a){this.rules=[],this.length=0}return i.prototype.insertRule=function(a,o){return a<=this.length&&(this.rules.splice(a,0,o),this.length++,!0)},i.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},i.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},i}(),df=Yl,Wv={isServer:!Yl,useCSSOMInjection:!wv},Xl=function(){function i(a,o,u){a===void 0&&(a=yr),o===void 0&&(o={});var c=this;this.options=Ye(Ye({},Wv),a),this.gs=o,this.names=new Map(u),this.server=!!a.isServer,!this.server&&Yl&&df&&(df=!1,cf(this)),$s(this,function(){return function(p){for(var m=p.getTag(),x=m.length,v="",w=function(N){var R=function(D){return ql.get(D)}(N);if(R===void 0)return"continue";var F=p.names.get(R),$=m.getGroup(N);if(F===void 0||!F.size||$.length===0)return"continue";var O="".concat(vr,".g").concat(N,'[id="').concat(R,'"]'),I="";F!==void 0&&F.forEach(function(D){D.length>0&&(I+="".concat(D,","))}),v+="".concat($).concat(O,'{content:"').concat(I,'"}').concat(Ds)},P=0;P<x;P++)w(P);return v}(c)})}return i.registerId=function(a){return Ol(a)},i.prototype.rehydrate=function(){!this.server&&Yl&&cf(this)},i.prototype.reconstructWithOptions=function(a,o){return o===void 0&&(o=!0),new i(Ye(Ye({},this.options),a),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(a=function(o){var u=o.useCSSOMInjection,c=o.target;return o.isServer?new Hv(c):u?new Bv(c):new Uv(c)}(this.options),new bv(a)));var a},i.prototype.hasNameForId=function(a,o){return this.names.has(a)&&this.names.get(a).has(o)},i.prototype.registerName=function(a,o){if(Ol(a),this.names.has(a))this.names.get(a).add(o);else{var u=new Set;u.add(o),this.names.set(a,u)}},i.prototype.insertRules=function(a,o,u){this.registerName(a,o),this.getTag().insertRules(Ol(a),u)},i.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},i.prototype.clearRules=function(a){this.getTag().clearGroup(Ol(a)),this.clearNames(a)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Vv=/&/g,Qv=/^\s*\/\/.*$/gm;function tp(i,a){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(a," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(a," ")),o.props=o.props.map(function(u){return"".concat(a," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=tp(o.children,a)),o})}function Kv(i){var a,o,u,c=yr,p=c.options,m=p===void 0?yr:p,x=c.plugins,v=x===void 0?ao:x,w=function(R,F,$){return $.startsWith(o)&&$.endsWith(o)&&$.replaceAll(o,"").length>0?".".concat(a):R},P=v.slice();P.push(function(R){R.type===no&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(Vv,o).replace(u,w))}),m.prefix&&P.push(yv),P.push(mv);var N=function(R,F,$,O){F===void 0&&(F=""),$===void 0&&($=""),O===void 0&&(O="&"),a=O,o=F,u=new RegExp("\\".concat(o,"\\b"),"g");var I=R.replace(Qv,""),D=pv($||F?"".concat($," ").concat(F," { ").concat(I," }"):I);m.namespace&&(D=tp(D,m.namespace));var K=[];return Gl(D,gv(P.concat(vv(function(M){return K.push(M)})))),K};return N.hash=v.length?v.reduce(function(R,F){return F.name||Si(15),hr(R,F.name)},Kf).toString():"",N}var Gv=new Xl,Cs=Kv(),np=en.createContext({shouldForwardProp:void 0,styleSheet:Gv,stylis:Cs});np.Consumer;en.createContext(void 0);function js(){return j.useContext(np)}var Yv=function(){function i(a,o){var u=this;this.inject=function(c,p){p===void 0&&(p=Cs);var m=u.name+p.hash;c.hasNameForId(u.id,m)||c.insertRules(u.id,m,p(u.rules,m,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=o,$s(this,function(){throw Si(12,String(u.name))})}return i.prototype.getName=function(a){return a===void 0&&(a=Cs),this.name+a.hash},i}(),qv=function(i){return i>="A"&&i<="Z"};function ff(i){for(var a="",o=0;o<i.length;o++){var u=i[o];if(o===1&&u==="-"&&i[0]==="-")return i;qv(u)?a+="-"+u.toLowerCase():a+=u}return a.startsWith("ms-")?"-"+a:a}var rp=function(i){return i==null||i===!1||i===""},ip=function(i){var a,o,u=[];for(var c in i){var p=i[c];i.hasOwnProperty(c)&&!rp(p)&&(Array.isArray(p)&&p.isCss||xr(p)?u.push("".concat(ff(c),":"),p,";"):xi(p)?u.push.apply(u,yi(yi(["".concat(c," {")],ip(p),!1),["}"],!1)):u.push("".concat(ff(c),": ").concat((a=c,(o=p)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||a in xv||a.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return u};function Cn(i,a,o,u){if(rp(i))return[];if(As(i))return[".".concat(i.styledComponentId)];if(xr(i)){if(!xr(p=i)||p.prototype&&p.prototype.isReactComponent||!a)return[i];var c=i(a);return Cn(c,a,o,u)}var p;return i instanceof Yv?o?(i.inject(o,u),[i.getName(u)]):[i]:xi(i)?ip(i):Array.isArray(i)?Array.prototype.concat.apply(ao,i.map(function(m){return Cn(m,a,o,u)})):[i.toString()]}function lp(i){for(var a=0;a<i.length;a+=1){var o=i[a];if(xr(o)&&!As(o))return!1}return!0}var Xv=Gf(oo),Jv=function(){function i(a,o,u){this.rules=a,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&lp(a),this.componentId=o,this.baseHash=hr(Xv,o),this.baseStyle=u,Xl.registerId(o)}return i.prototype.generateAndInjectStyles=function(a,o,u){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,o,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=$n(c,this.staticRulesId);else{var p=Ss(Cn(this.rules,a,o,u)),m=ks(hr(this.baseHash,p)>>>0);if(!o.hasNameForId(this.componentId,m)){var x=u(p,".".concat(m),void 0,this.componentId);o.insertRules(this.componentId,m,x)}c=$n(c,m),this.staticRulesId=m}else{for(var v=hr(this.baseHash,u.hash),w="",P=0;P<this.rules.length;P++){var N=this.rules[P];if(typeof N=="string")w+=N;else if(N){var R=Ss(Cn(N,a,o,u));v=hr(v,R+P),w+=R}}if(w){var F=ks(v>>>0);o.hasNameForId(this.componentId,F)||o.insertRules(this.componentId,F,u(w,".".concat(F),void 0,this.componentId)),c=$n(c,F)}}return c},i}(),Bs=en.createContext(void 0);Bs.Consumer;var ms={};function Zv(i,a,o){var u=As(i),c=i,p=!hs(i),m=a.attrs,x=m===void 0?ao:m,v=a.componentId,w=v===void 0?function(q,ne){var ee=typeof q!="string"?"sc":lf(q);ms[ee]=(ms[ee]||0)+1;var Y="".concat(ee,"-").concat(Yf(oo+ee+ms[ee]));return ne?"".concat(ne,"-").concat(Y):Y}(a.displayName,a.parentComponentId):v,P=a.displayName,N=P===void 0?function(q){return hs(q)?"styled.".concat(q):"Styled(".concat(jv(q),")")}(i):P,R=a.displayName&&a.componentId?"".concat(lf(a.displayName),"-").concat(a.componentId):a.componentId||w,F=u&&c.attrs?c.attrs.concat(x).filter(Boolean):x,$=a.shouldForwardProp;if(u&&c.shouldForwardProp){var O=c.shouldForwardProp;if(a.shouldForwardProp){var I=a.shouldForwardProp;$=function(q,ne){return O(q,ne)&&I(q,ne)}}else $=O}var D=new Jv(o,R,u?c.componentStyle:void 0);function K(q,ne){return function(ee,Y,Se){var ye=ee.attrs,Fe=ee.componentStyle,pt=ee.defaultProps,ht=ee.foldedComponentIds,qe=ee.styledComponentId,lt=ee.target,mt=en.useContext(Bs),We=js(),ge=ee.shouldForwardProp||We.shouldForwardProp,A=Vf(Y,mt,pt)||yr,G=function(se,oe,pe){for(var ue,de=Ye(Ye({},oe),{className:void 0,theme:pe}),$e=0;$e<se.length;$e+=1){var Wt=xr(ue=se[$e])?ue(de):ue;for(var Et in Wt)de[Et]=Et==="className"?$n(de[Et],Wt[Et]):Et==="style"?Ye(Ye({},de[Et]),Wt[Et]):Wt[Et]}return oe.className&&(de.className=$n(de.className,oe.className)),de}(ye,Y,A),B=G.as||lt,k={};for(var _ in G)G[_]===void 0||_[0]==="$"||_==="as"||_==="theme"&&G.theme===A||(_==="forwardedAs"?k.as=G.forwardedAs:ge&&!ge(_,B)||(k[_]=G[_]));var re=function(se,oe){var pe=js(),ue=se.generateAndInjectStyles(oe,pe.styleSheet,pe.stylis);return ue}(Fe,G),ie=$n(ht,qe);return re&&(ie+=" "+re),G.className&&(ie+=" "+G.className),k[hs(B)&&!Qf.has(B)?"class":"className"]=ie,Se&&(k.ref=Se),j.createElement(B,k)}(M,q,ne)}K.displayName=N;var M=en.forwardRef(K);return M.attrs=F,M.componentStyle=D,M.displayName=N,M.shouldForwardProp=$,M.foldedComponentIds=u?$n(c.foldedComponentIds,c.styledComponentId):"",M.styledComponentId=R,M.target=u?c.target:i,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=u?function(ne){for(var ee=[],Y=1;Y<arguments.length;Y++)ee[Y-1]=arguments[Y];for(var Se=0,ye=ee;Se<ye.length;Se++)Es(ne,ye[Se],!0);return ne}({},c.defaultProps,q):q}}),$s(M,function(){return".".concat(M.styledComponentId)}),p&&Zf(M,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function pf(i,a){for(var o=[i[0]],u=0,c=a.length;u<c;u+=1)o.push(a[u],i[u+1]);return o}var hf=function(i){return Object.assign(i,{isCss:!0})};function Jl(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];if(xr(i)||xi(i))return hf(Cn(pf(ao,yi([i],a,!0))));var u=i;return a.length===0&&u.length===1&&typeof u[0]=="string"?Cn(u):hf(Cn(pf(u,a)))}function Ps(i,a,o){if(o===void 0&&(o=yr),!a)throw Si(1,a);var u=function(c){for(var p=[],m=1;m<arguments.length;m++)p[m-1]=arguments[m];return i(a,o,Jl.apply(void 0,yi([c],p,!1)))};return u.attrs=function(c){return Ps(i,a,Ye(Ye({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},u.withConfig=function(c){return Ps(i,a,Ye(Ye({},o),c))},u}var op=function(i){return Ps(Zv,i)},Ne=op;Qf.forEach(function(i){Ne[i]=op(i)});var ey=function(){function i(a,o){this.rules=a,this.componentId=o,this.isStatic=lp(a),Xl.registerId(this.componentId+1)}return i.prototype.createStyles=function(a,o,u,c){var p=c(Ss(Cn(this.rules,o,u,c)),""),m=this.componentId+a;u.insertRules(m,m,p)},i.prototype.removeStyles=function(a,o){o.clearRules(this.componentId+a)},i.prototype.renderStyles=function(a,o,u,c){a>2&&Xl.registerId(this.componentId+a),this.removeStyles(a,u),this.createStyles(a,o,u,c)},i}();function ty(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];var u=Jl.apply(void 0,yi([i],a,!1)),c="sc-global-".concat(Yf(JSON.stringify(u))),p=new ey(u,c),m=function(v){var w=js(),P=en.useContext(Bs),N=en.useRef(w.styleSheet.allocateGSInstance(c)).current;return w.styleSheet.server&&x(N,v,w.styleSheet,P,w.stylis),en.useLayoutEffect(function(){if(!w.styleSheet.server)return x(N,v,w.styleSheet,P,w.stylis),function(){return p.removeStyles(N,w.styleSheet)}},[N,v,w.styleSheet,P,w.stylis]),null};function x(v,w,P,N,R){if(p.isStatic)p.renderStyles(v,kv,P,R);else{var F=Ye(Ye({},w),{theme:Vf(w,N,m.defaultProps)});p.renderStyles(v,F,P,R)}}return en.memo(m)}const ny=ty`
  :root,
  :root[data-theme='dark'] {
    color-scheme: dark;
    --bg: #0f0f0d;
    --bg-raised: #181815;
    --ink: #ecebe6;
    --ink-muted: #a09d95;
    --ink-faint: #6b6963;
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
    --ink-faint: #8f8b82;
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
`,ry=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/projects",label:"Projects"},{to:"/contact",label:"Contact"}],iy=Ne.header`
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
`;function ly(){const[i,a]=j.useState(!1),{isDarkMode:o,toggleTheme:u}=Jg(),{pathname:c}=Ht();j.useEffect(()=>a(!1),[c]);const p=f.jsxs("button",{type:"button",className:"control theme",onClick:u,"aria-label":o?"Switch to light theme":"Switch to dark theme",children:[f.jsx("span",{className:"swatch","aria-hidden":"true"}),o?"Dark":"Light"]});return f.jsx(iy,{children:f.jsxs("div",{className:"container bar",children:[f.jsx(to,{to:"/",className:"brand",children:"Michael Hills"}),f.jsxs("nav",{id:"site-nav",className:i?"open":void 0,"aria-label":"Main",children:[f.jsx("ul",{children:ry.map(({to:m,label:x},v)=>f.jsx("li",{children:f.jsxs(zf,{to:m,end:m==="/",children:[f.jsx("span",{className:"num",children:String(v).padStart(2,"0")}),x]})},m))}),f.jsxs("div",{className:"menu-theme",children:[f.jsx("span",{className:"label",children:"Theme"}),p]})]}),p,f.jsx("button",{type:"button",className:"control menu-toggle",onClick:()=>a(m=>!m),"aria-expanded":i,"aria-controls":"site-nav",children:i?"Close":"Menu"})]})})}function ft({href:i,children:a,...o}){if(i.startsWith("/")&&!o.download)return f.jsx(to,{to:i,...o,children:a});const u=/^https?:/.test(i)?{target:"_blank",rel:"noreferrer"}:{};return f.jsx("a",{href:i,...u,...o,children:a})}ft.propTypes={href:Z.string.isRequired,children:Z.node.isRequired,download:Z.bool};const dt={email:"mjhills1@btinternet.com",phone:"+44 7760 119930",phoneHref:"tel:+447760119930",location:"London, United Kingdom",mapUrl:"https://www.google.com/maps/place/London/@51.5286416,-0.1015987,11z"},Us=[{label:"LinkedIn",url:"https://www.linkedin.com/in/michaeljhills1/"},{label:"GitHub",url:"https://github.com/Michael-Hills"}],ap="/Personal-Portfolio/Michael-Hills-CV.pdf",oy=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Projects",href:"/projects"},{label:"Contact",href:"/contact"}],ay=[{label:dt.email,href:`mailto:${dt.email}`},{label:dt.phone,href:dt.phoneHref},{label:"London, UK",href:dt.mapUrl}],sy=Ne.footer.attrs({className:"section"})`
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
`;function Vl({title:i,links:a,className:o}){return f.jsxs("div",{className:o?`col ${o}`:"col",children:[f.jsx("h2",{className:"label",children:i}),f.jsx("ul",{children:a.map(({label:u,href:c})=>f.jsx("li",{children:f.jsx(ft,{href:c,className:"text-link",children:u})},c))})]})}Vl.propTypes={title:Z.string.isRequired,className:Z.string,links:Z.arrayOf(Z.shape({label:Z.string.isRequired,href:Z.string.isRequired})).isRequired};function uy(){return f.jsxs(sy,{children:[f.jsx("div",{className:"ruled",children:f.jsxs("div",{className:"container cols",children:[f.jsxs("div",{className:"col intro",children:[f.jsx("p",{className:"name",children:"Michael Hills"}),f.jsx("p",{className:"tagline",children:"Backend engineer building and running systems in production. Based in London."})]}),f.jsx(Vl,{title:"Sitemap",links:oy}),f.jsx(Vl,{title:"Contact",links:ay,className:"contact-col"}),f.jsx(Vl,{title:"Elsewhere",links:Us.map(({label:i,url:a})=>({label:i,href:a}))})]})}),f.jsxs("div",{className:"container colophon",children:[f.jsxs("span",{className:"label",children:["© ",new Date().getFullYear()," Michael Hills"]}),f.jsx("span",{className:"label set-in",children:"Set in Archivo & IBM Plex Mono"}),f.jsx("a",{href:"#top",className:"label back-to-top text-link",children:"Back to top ↑"})]})]})}function cy(){const{pathname:i}=Ht();return j.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[i]),null}const dy=Ne(ft)`
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

  ${({$variant:i})=>i==="primary"?Jl`
          background: var(--ink);
          color: var(--bg);
        `:Jl`
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
`;function jn({to:i,children:a,icon:o="→",variant:u="primary",download:c=!1}){return f.jsxs(dy,{href:i,$variant:u,download:c||void 0,children:[a,f.jsx("span",{className:"icon","aria-hidden":"true",children:o})]})}jn.propTypes={to:Z.string.isRequired,children:Z.node.isRequired,icon:Z.string,variant:Z.oneOf(["primary","secondary"]),download:Z.bool};const fy=Ne.div`
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
`;function Tt({index:i,phoneIndex:a,title:o,meta:u}){return f.jsx(fy,{children:f.jsxs("div",{className:"container grid-12",children:[f.jsx("span",{className:"num","aria-hidden":"true",children:a?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"hide-phone",children:i}),f.jsx("span",{className:"phone-only",children:a})]}):i}),f.jsxs("div",{className:"head ruled",children:[f.jsx("h2",{children:o}),u&&f.jsx("span",{className:"label meta",children:u})]})]})})}Tt.propTypes={index:Z.string.isRequired,phoneIndex:Z.string,title:Z.string.isRequired,meta:Z.string};const py="/Personal-Portfolio/assets/freestyle-skiing-C9u3BXUl.jpg",hy="/Personal-Portfolio/assets/customer-support-BCpLka5L.jpg",my="/Personal-Portfolio/assets/mythology-s_JTqrCm.jpg",gy="/Personal-Portfolio/assets/colab-CW_vc6EQ.jpg",vy="/Personal-Portfolio/assets/backgammle-D2VKu10A.png",yy="/Personal-Portfolio/assets/backgammle-thumb-0xPHz_Pc.jpg",zt=[{id:7,img:vy,thumb:yy,title:"Backgammle",status:"Live",short_category:["Full-stack"],long_category:["Full-stack","Game","Data Pipeline","LLM","Serverless"],short_desc:"A daily backgammon puzzle: find the best move in three tries. Positions are chosen and graded by the gnubg engine, with explanations written by Claude.",long_desc:"Backgammle is a daily backgammon puzzle in the spirit of Wordle. Each day there is one position and roll, and players have three tries to find the best move. A Python pipeline generates the puzzles: it plays games from the opening with the GNU Backgammon (gnubg) engine to find realistic positions, keeps only those with a clear best move, and analyses every legal move at 3-ply to grade it. Claude then writes a short explanation of why the best move is best, working only from figures computed by the engine, and the pipeline rejects any explanation that quotes a number not found in those facts. The frontend is built with React and TypeScript and hosted on Cloudflare Pages, and a scheduled GitHub Actions workflow tests, generates and publishes a new puzzle every day.",tech_stack:["Python","gnubg","Claude API","TypeScript","React","Cloudflare Pages"],liveLink:"https://backgammle.com"},{id:2,img:py,title:"Freestyle Skiing Fall Detection",short_category:["AI/ML"],long_category:["AI/ML","Deep Learning","Time Series","Computer Vision","Classification"],short_desc:"Collected a labelled dataset of smartphone IMU readings from skiers, then compared CNNs on Gramian Angular Field images of the signal against LSTM and CNN-LSTM networks on the raw time series.",long_desc:"This project developed an advanced fall detection system tailored to freestyle skiing, where traditional methods often misclassify high-impact tricks as accidents. To address this, it explored deep learning techniques using both image-based models, leveraging Gramian Angular Field visualizations, and time-series models applied to raw sensor data. A bespoke dataset was collected via smartphone-based accelerometers and gyroscopes, supported by a public dataset for transfer learning. Through extensive preprocessing and model evaluation, the system demonstrated strong potential for improving skier safety through faster and more reliable fall detection.",tech_stack:["Python","PyTorch","TensorFlow"],githubLink:"https://github.com/Michael-Hills/Freestyle-Skiing-Fall-Detection",reportLink:"https://raw.githubusercontent.com/Michael-Hills/Freestyle-Skiing-Fall-Detection/main/Report.pdf"},{id:3,img:my,title:"Mythology Semantic Clustering",short_category:["AI/ML"],long_category:["AI/ML","NLP","Sentiment Analysis","Web Scraping","Clustering","Bayesian Optimization"],short_desc:"A machine learning pipeline using web scraping, natural language processing and clustering to uncover cultural patterns and shared themes in global mythology and folklore.",long_desc:"This project applied machine learning and natural language processing to explore cultural patterns in mythology. Using data scraped from the Myths and Folklore Wiki, it analysed over 2,900 myth entries with techniques including word and sentence embeddings, dimensionality reduction (UMAP), clustering (HDBSCAN) and bayesian optimisation. The aim was to uncover common themes, such as gods, creatures and spirits, and compare their cultural origins. The resulting clusters revealed patterns tied to geographical proximity and shared cultural influences, demonstrating the power of machine learning to reveal deep, cross-cultural mythological connections. The approach also addressed data imbalance and explored future applications in broader cultural analytics.",tech_stack:["Python","BERT","Hugging Face","Beautiful Soup","UMAP","HDBSCAN"],githubLink:"https://github.com/Michael-Hills/Mythology-NLP-Clustering",reportLink:"https://raw.githubusercontent.com/Michael-Hills/Mythology-NLP-Clustering/main/Final_Report.pdf"},{id:4,img:hy,title:"Customer Support Analysis",short_category:["AI/ML"],long_category:["AI/ML","NLP","Clustering","Sentiment Analysis","Topic Modelling","Bayesian Optimization"],short_desc:"An NLP triage tool combining unsupervised topic modelling with VADER sentiment analysis to cluster incoming tickets and auto-prioritise urgent responses.",long_desc:"This project developed a system that uses natural language processing and machine learning to analyse customer support messages on Twitter. By combining topic modelling and sentiment analysis (using VADER), the system categorises customer inquiries by subject while also evaluating emotional tone, enabling companies to prioritise responses and better understand customer needs. With advanced techniques like SBERT embeddings, dimensionality reduction, and Bayesian optimization, the system delivers accurate, well-labelled clusters of tweets, offering insights into common issues and public sentiment across major brands like Apple, Amazon, and Uber.",tech_stack:["Python","BERT","Hugging Face","VADER","UMAP","HDBSCAN"],githubLink:"https://github.com/Michael-Hills/Social-Networks-and-Text-Analysis",reportLink:"https://raw.githubusercontent.com/Michael-Hills/Social-Networks-and-Text-Analysis/main/Report.pdf"},{id:6,img:gy,title:"Colab Charity Internal System",short_category:["Backend"],long_category:["Backend","Web Development","API","SQL"],short_desc:"A Django-based web platform to replace CoLab’s internal spreadsheet system, streamlining client tracking, workshop scheduling, and data analysis for more personalized support.",long_desc:"This group project developed a web-based platform for CoLab, a wellbeing charity in Exeter, to replace their spreadsheet-based system with a Django-powered application as a proof of concept. As the lead backend engineer, I played a key role in streamlining client profile tracking, workshop scheduling, and data analysis. The platform enhances internal operations and enables more effective, personalized support for individuals with complex needs. Built using Django, HTML, and CSS, the system offers a scalable and maintainable solution tailored to the charity's unique requirements.",tech_stack:["Python","Django","SQL","HTML","CSS"],githubLink:"https://github.com/Michael-Hills/Group-Software-Project-4th"}],Ns=i=>String(zt.indexOf(i)+1).padStart(2,"0"),xy=Ne.ol`
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
`;function Hs({projects:i,compact:a=!1,withDesc:o=!1}){const u=[a&&"compact",a&&o&&"with-desc"].filter(Boolean).join(" ");return f.jsx(xy,{className:u||void 0,children:i.map(c=>f.jsx("li",{children:f.jsxs(ft,{href:`/project/${c.id}`,className:"row",children:[f.jsx("span",{className:"label no",children:Ns(c)}),f.jsx("span",{className:"thumb",children:f.jsx("img",{src:c.thumb??c.img,alt:"",loading:"lazy"})}),f.jsxs("span",{className:"main",children:[f.jsxs("span",{className:"title",children:[c.title,c.status&&f.jsx("span",{className:"label status",children:c.status})]}),f.jsx("span",{className:"desc",children:c.short_desc})]}),f.jsxs("span",{className:"side",children:[f.jsxs("span",{className:"specs",children:[f.jsx("span",{className:"label cat",children:c.short_category.join(" / ")}),f.jsx("span",{className:"label stack",children:c.tech_stack.slice(0,3).join(" · ")})]}),f.jsx("span",{className:"arrow","aria-hidden":"true",children:"→"})]})]})},c.id))})}Hs.propTypes={compact:Z.bool,withDesc:Z.bool,projects:Z.arrayOf(Z.shape({id:Z.number.isRequired,title:Z.string.isRequired,img:Z.string.isRequired,thumb:Z.string,short_desc:Z.string.isRequired,short_category:Z.arrayOf(Z.string).isRequired,tech_stack:Z.arrayOf(Z.string).isRequired,status:Z.string})).isRequired};const wy=Ne.ol`
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
`,ky=2;function sp({entry:i,compact:a}){const[o,u]=j.useState(!1),c=i.groups.reduce((m,x)=>m+x.points.length,0),p=!a&&c>ky;return f.jsxs("li",{className:"entry",children:[f.jsx("span",{className:"label period",children:i.period}),f.jsxs("div",{className:"detail",children:[f.jsx("h3",{children:i.role}),f.jsx("p",{className:"org",children:i.org}),!a&&f.jsxs("div",{className:p&&!o?"points-wrap collapsed":"points-wrap",children:[i.note&&f.jsx("p",{className:"label note",children:i.note}),i.groups.map((m,x)=>f.jsxs("div",{children:[m.name&&f.jsx("p",{className:"label group-name",children:m.name}),f.jsx("ul",{className:"points",children:m.points.map(v=>f.jsx("li",{children:v},v))})]},m.name??x))]}),p&&f.jsx("button",{type:"button",className:"label toggle","aria-expanded":o,onClick:()=>u(m=>!m),children:o?"Hide details ↑":`Show details (${c}) ↓`})]})]})}sp.propTypes={entry:Z.object.isRequired,compact:Z.bool};function gi({entries:i,compact:a=!1}){return f.jsx(wy,{children:i.map(o=>f.jsx(sp,{entry:o,compact:a},o.role))})}gi.propTypes={entries:Z.arrayOf(Z.shape({period:Z.string.isRequired,role:Z.string.isRequired,org:Z.string.isRequired,note:Z.string,groups:Z.arrayOf(Z.shape({name:Z.string,points:Z.arrayOf(Z.string).isRequired})).isRequired})).isRequired,compact:Z.bool};const Sy=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",timeZoneName:"short"});function Ey(){const[i,a]=j.useState(()=>new Date);return j.useEffect(()=>{const o=setInterval(()=>a(new Date),3e4);return()=>clearInterval(o)},[]),f.jsx("time",{dateTime:i.toISOString(),children:Sy.format(i)})}const Cy="/Personal-Portfolio/assets/portrait-C9D8bwfn.jpg",up="Backend engineer with two years’ experience building and running systems in production.",di={org:"Serendipity AI",headline:"Live transcription and analysis platform used by the World Economic Forum",body:"Sole backend engineer, taking the platform from prototype to launch. It transcribes live sessions at events and internal meetings and delivers summaries, key themes and insights, built as part of a wider agentic platform.",stats:[{value:"15+",label:"Concurrent live sessions"},{value:"3,000+",label:"Sessions analysed to date"},{value:"300",label:"Transcripts per event, up to"},{value:"Mins",label:"Whole-event reporting, down from weeks"}],stack:["Python","BERTopic","HDBSCAN","AWS","Kubernetes","Redis","Azure"]},Ql=[{code:"BE",title:"Backend",desc:"Real-time services and REST APIs in async Python, backed by PostgreSQL and Redis.",tools:["FastAPI","Django","PostgreSQL","Redis","WebSockets","async Python","REST API design"]},{code:"ML",title:"ML and data",desc:"NLP and analysis pipelines: topic modelling, clustering, sentiment analysis, and LLM pipelines and evaluation.",tools:["PyTorch","TensorFlow","BERTopic","HDBSCAN"]},{code:"IN",title:"Infrastructure",desc:"Running services in production with containers, CI/CD and monitoring.",tools:["Azure","AWS","Docker","Kubernetes","Jenkins","Prometheus","Grafana","Git"]},{code:"LG",title:"Languages",tools:["Python","SQL","JavaScript","Java"]}],cp=[{period:"Jul 2025 – Present",role:"Software Engineer",org:"Serendipity AI",groups:[{points:["Sole backend engineer on a live transcription and analysis platform used by the World Economic Forum at events and internal meetings, transcribing live sessions and delivering summaries, key themes and insights, built as part of a wider agentic platform","Set the architecture and technical direction of the service, working directly with the client to scope each event","Designed and built the live analysis layer, supporting 15+ concurrent sessions: speaker recognition from voice profiles, topic and insight extraction, and clustering of thousands of micro-topics into readable themes using BERTopic and HDBSCAN","Reduced whole-event reporting from weeks to minutes with a cross-session pipeline that surfaces areas of convergence, unresolved tensions and gaps in coverage, across up to 300 transcripts per event and 3,000+ sessions to date","Integrated Zoom’s real-time media streams into the transcription pipeline, streaming live meeting audio through the same analysis path as in-app capture, with OAuth token lifecycle, credential encryption and session recovery","Run the service on AWS using Docker and Kubernetes, Redis for state and caching, Jenkins for CI/CD, and Prometheus and Grafana for monitoring, with Azure hosting the underlying speech and language models"]}]},{period:"Sep 2024 – Jul 2025",role:"Associate Software Engineer",org:"Fitch Group",groups:[{points:["Contributed to a full-stack application (FastAPI, PostgreSQL, React) replacing Excel-based workflows for 100+ BMI country risk and industry research analysts, working across API design, frontend and data transformation","Created a telemetry and ROI tracker used by senior leadership to monitor usage, cost and adoption of Fitch Genie, the GenAI assistant on Fitch Ratings PRO, integrating Qlik ETL scripts, AngularJS and Qlik APIs","Developed a product recommendation system using semantic text clustering and market basket analysis to drive upsell from behavioural data"]}]}],jy=[{period:"2020 – 2024",role:"MSci Computer Science, First Class",org:"University of Exeter",groups:[{points:["Two Dean’s Commendations for Exceptional Performance (Stages 1 and 2)"]}]},{period:"2013 – 2020",role:"A Levels: Maths (A*), Further Maths (A*), Physics (A*), Geology (A*)",org:"Reading Blue Coat School",groups:[]}],Py=[{period:"2021 – 2023",role:"Vice President (Trips) and Social Secretary",org:"Snowsports Exeter",groups:[{points:["Led all UK and European trips for 1,500+ members, managing a £150k+ events budget and directing transport, accommodation, schedules and partner negotiations for around 1,000 people on European trips"]}]}],Ny=["Alpine & freestyle skiing","Climbing"],mf=i=>String(i).padStart(2,"0"),Ry=Ne.section`
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
`,_y=Ne.div`
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
`,Ly=Ne.ul`
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
      margin-top: 0;
      font-family: var(--font-sans);
      font-size: 0.9375rem;
      letter-spacing: 0;
      text-transform: none;
      line-height: 1.5;
      color: var(--ink-muted);
    }
  }
`,fi=Ne.section.attrs({className:"section"})`
  .more {
    padding-block: 24px;
  }
`,gf=Ne.div`
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

  .email {
    display: inline-block;
    margin-top: 24px;
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
`;function Ty(){return f.jsxs(f.Fragment,{children:[f.jsxs(Ry,{children:[f.jsxs("div",{className:"container topline",children:[f.jsxs("span",{className:"label",children:[f.jsx("span",{className:"index",children:"00"}),"Home"]}),f.jsxs("span",{className:"label",children:["Portfolio / Rev. ",new Date().getFullYear()]})]}),f.jsx("div",{className:"container",children:f.jsxs("h1",{className:"name",children:["Michael",f.jsx("br",{}),"Hills"]})}),f.jsxs("div",{className:"container grid-12",children:[f.jsxs("dl",{className:"facts pad-r",children:[f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Role"}),f.jsx("dd",{children:"Software Engineer"})]}),f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Currently"}),f.jsx("dd",{children:"Serendipity AI"})]}),f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Based"}),f.jsx("dd",{children:"London, UK"})]}),f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Local time"}),f.jsx("dd",{children:f.jsx(Ey,{})})]}),f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Education"}),f.jsx("dd",{children:"MSci Computer Science, First Class"})]})]}),f.jsxs("div",{className:"intro ruled pad-r",children:[f.jsxs("p",{className:"lede",children:["Backend engineer building and running systems in production, from"," ",f.jsx("em",{children:"real-time streaming pipelines through to NLP analysis."})]}),f.jsxs("div",{className:"actions",children:[f.jsx(jn,{to:"/projects",children:"View projects"}),f.jsx(jn,{to:ap,variant:"secondary",icon:"↓",download:!0,children:"Download CV"})]})]}),f.jsxs("figure",{className:"photo ruled",children:[f.jsx("img",{src:Cy,alt:"Portrait of Michael Hills, smiling"}),f.jsx("figcaption",{className:"label",children:"Fig. 01: Michael Hills"})]})]})]}),f.jsxs(fi,{children:[f.jsx(Tt,{index:"01",title:"Current work"}),f.jsxs(_y,{className:"container grid-12",children:[f.jsxs("div",{className:"context pad-r",children:[f.jsx("p",{className:"label org",children:di.org}),f.jsx("p",{className:"label stack",children:di.stack.join(" / ")})]}),f.jsxs("div",{className:"text ruled pad-r",children:[f.jsx("h3",{children:di.headline}),f.jsx("p",{className:"body",children:di.body}),f.jsx("p",{className:"links",children:f.jsx(ft,{href:"/about",className:"label text-link",children:"Full role details →"})})]}),f.jsx("dl",{className:"ruled",children:di.stats.map(i=>f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:i.label}),f.jsx("dd",{children:i.value})]},i.label))})]})]}),f.jsxs(fi,{children:[f.jsx(Tt,{index:"02",title:"Skills",meta:`${mf(Ql.length)} areas`}),f.jsx(Ly,{className:"container grid-12",children:Ql.map((i,a)=>f.jsxs("li",{className:[a>0&&"ruled",a<Ql.length-1&&"pad-r"].filter(Boolean).join(" "),children:[f.jsx("span",{className:"label code",children:i.code}),f.jsx("h3",{children:i.title}),i.desc&&f.jsx("p",{children:i.desc}),f.jsx("p",{className:"label tools",children:i.tools.join(" / ")})]},i.code))})]}),f.jsxs(fi,{children:[f.jsx(Tt,{index:"03",title:"Selected projects",meta:`${mf(zt.length)} entries`}),f.jsxs("div",{className:"container",children:[f.jsx(Hs,{projects:zt,compact:!0}),f.jsx("p",{className:"more",children:f.jsx(ft,{href:"/projects",className:"label text-link",children:"Search & filter all projects →"})})]})]}),f.jsxs(fi,{className:"hide-phone",children:[f.jsx(Tt,{index:"04",title:"Profile"}),f.jsxs(gf,{className:"container grid-12",children:[f.jsx("div",{className:"aside pad-r",children:f.jsx(ft,{href:"/about",className:"label text-link",children:"Full profile →"})}),f.jsx("div",{className:"main ruled",children:f.jsxs("p",{className:"bio",children:[up," First-Class MSci in Computer Science."]})})]}),f.jsx("div",{className:"container",children:f.jsx(gi,{entries:cp,compact:!0})})]}),f.jsxs(fi,{children:[f.jsx(Tt,{index:"05",phoneIndex:"04",title:"Contact"}),f.jsxs(gf,{className:"container grid-12",children:[f.jsx("div",{className:"aside pad-r",children:f.jsx(ft,{href:"/contact",className:"label text-link",children:"Use the contact form →"})}),f.jsxs("div",{className:"main ruled",children:[f.jsx("p",{className:"big",children:"Get in touch."}),f.jsx("a",{href:`mailto:${dt.email}`,className:"email text-link",children:dt.email})]})]})]})]})}const zy=Ne.header`
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
`;function Ei({index:i,kicker:a,title:o,children:u}){return f.jsx(zy,{children:f.jsxs("div",{className:"container",children:[f.jsxs("p",{className:"label",children:[f.jsx("span",{className:"index",children:i}),a]}),f.jsx("h1",{children:o}),u&&f.jsx("p",{className:"intro",children:u})]})})}Ei.propTypes={index:Z.string.isRequired,kicker:Z.string.isRequired,title:Z.string.isRequired,children:Z.node};const Iy="/Personal-Portfolio/assets/portrait-mountain-VRWMxWa9.jpg",by="/Personal-Portfolio/assets/ski-big-air-Cv0Iay9N.jpg",Fy="/Personal-Portfolio/assets/ski-backflip-D6-q1Ihg.jpg",My=Ne.div`
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
`,pi=Ne.section.attrs({className:"section"})`
  --section-gap: 64px;

  @media (max-width: 767px) {
    --section-gap: 48px;
  }
`,Oy=Ne.div`
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
`,Dy=Ne.dl`
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
`;function Ay(){return f.jsxs(f.Fragment,{children:[f.jsxs(Ei,{index:"01",kicker:"About",title:"About",children:[up," First-Class MSci in Computer Science."]}),f.jsxs(My,{className:"container grid-12",children:[f.jsxs("div",{className:"actions pad-r",children:[f.jsx(jn,{to:ap,icon:"↓",download:!0,children:"Download CV"}),Us.map(({label:i,url:a})=>f.jsx(jn,{to:a,variant:"secondary",icon:"↗",children:i},i))]}),f.jsxs("div",{className:"copy ruled pad-r",children:[f.jsx("p",{children:"Sole engineer on a live transcription and analysis platform used by the World Economic Forum, taken from prototype to launch, spanning real-time streaming pipelines through to NLP analysis."}),f.jsx("p",{children:"My journey into coding started back in secondary school. What began as curiosity quickly grew into a passion, especially for building things that solve real-world problems, whether that’s automating repetitive tasks, improving safety in sports, or uncovering useful insights through data."})]}),f.jsxs("figure",{className:"photo ruled",children:[f.jsx("img",{src:Iy,alt:"Michael Hills at a mountain restaurant terrace on a sunny day"}),f.jsx("figcaption",{className:"label",children:"Fig. 02: Michael Hills"})]})]}),f.jsxs(pi,{children:[f.jsx(Tt,{index:"A",title:"Experience"}),f.jsx("div",{className:"container",children:f.jsx(gi,{entries:cp})})]}),f.jsxs(pi,{children:[f.jsx(Tt,{index:"B",title:"Education"}),f.jsx("div",{className:"container",children:f.jsx(gi,{entries:jy})})]}),f.jsxs(pi,{children:[f.jsx(Tt,{index:"C",title:"Leadership"}),f.jsx("div",{className:"container",children:f.jsx(gi,{entries:Py})})]}),f.jsxs(pi,{children:[f.jsx(Tt,{index:"D",title:"Skills"}),f.jsx("div",{className:"container",children:f.jsx(Dy,{children:Ql.map(i=>f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:i.title}),f.jsx("dd",{children:i.tools.join(", ")})]},i.code))})})]}),f.jsxs(pi,{children:[f.jsx(Tt,{index:"E",title:"Off the clock",meta:Ny.join(" / ")}),f.jsxs(Oy,{className:"container grid-12",children:[f.jsxs("figure",{className:"photo wide pad-r",children:[f.jsx("img",{src:by,alt:"Freestyle skier mid-air over a jump at a park event",loading:"lazy"}),f.jsx("figcaption",{className:"label",children:"Fig. 03: Big air, park event"})]}),f.jsxs("figure",{className:"photo tall ruled",children:[f.jsx("img",{src:Fy,alt:"Freestyle skier upside down mid-backflip",loading:"lazy"}),f.jsx("figcaption",{className:"label",children:"Fig. 04: Backflip"})]})]})]})]})}const $y=["All",...new Set(zt.flatMap(i=>i.short_category))],By=i=>i==="All"?zt.length:zt.filter(a=>a.short_category.includes(i)).length,Uy=Ne.div`
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
`,Hy=Ne.p`
  padding-block: 48px;
  color: var(--ink-muted);
`;function Wy(){const[i,a]=j.useState(""),[o,u]=j.useState("All"),c=i.trim().toLowerCase(),p=zt.filter(m=>(!c||m.title.toLowerCase().includes(c))&&(o==="All"||m.short_category.includes(o)));return f.jsxs(f.Fragment,{children:[f.jsx(Ei,{index:"02",kicker:"Projects",title:"Projects",children:"Machine learning, backend and full-stack projects from university and beyond."}),f.jsxs("div",{className:"container",children:[f.jsxs(Uy,{className:"grid-12",children:[f.jsxs("label",{className:"search pad-r",htmlFor:"projectSearch",children:[f.jsx("span",{className:"label",children:"Search by name"}),f.jsx("input",{id:"projectSearch",type:"search",value:i,onChange:m=>a(m.target.value),placeholder:"e.g. clustering"})]}),f.jsx("div",{className:"chips ruled",role:"group","aria-label":"Filter by category",children:$y.map(m=>f.jsxs("button",{type:"button","aria-pressed":o===m,onClick:()=>u(m),children:[m,f.jsx("span",{className:"count",children:By(m)})]},m))})]}),p.length===0?f.jsx(Hy,{children:"No projects match your search."}):f.jsx(Hs,{projects:p,compact:!0,withDesc:!0})]})]})}const Vy=Ne.article`
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
`;function Qy(){const{id:i}=Zm(),a=zt.findIndex(p=>p.id===Number(i)),o=zt[a];if(!o)return f.jsx(Ei,{index:"404",kicker:"Not found",title:"Project not found",children:f.jsx(ft,{href:"/projects",className:"text-link",children:"Back to all projects →"})});const u=zt[a-1],c=zt[a+1];return f.jsx(Vy,{children:f.jsxs("div",{className:"container",children:[f.jsxs("p",{className:"label crumb",children:[f.jsx(ft,{href:"/projects",className:"text-link",children:"Projects"}),"/ ",Ns(o)]}),f.jsx("h1",{children:o.title}),o.status&&f.jsxs("span",{className:"label status",children:["● ",o.status]}),f.jsxs("div",{className:"body grid-12",children:[f.jsx("p",{className:"desc pad-r",children:o.long_desc}),f.jsxs("div",{className:"side ruled",children:[f.jsxs("dl",{className:"spec",children:[f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Discipline"}),f.jsx("dd",{children:f.jsx("ul",{className:"tags",children:o.long_category.map(p=>f.jsx("li",{children:p},p))})})]}),f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:"Stack"}),f.jsx("dd",{children:f.jsx("ul",{className:"tags",children:o.tech_stack.map(p=>f.jsx("li",{children:p},p))})})]})]}),(o.liveLink||o.githubLink||o.reportLink)&&f.jsxs("div",{className:"actions",children:[o.liveLink&&f.jsx(jn,{to:o.liveLink,icon:"↗",children:"Visit live site"}),o.githubLink&&f.jsx(jn,{to:o.githubLink,variant:o.liveLink?"secondary":"primary",icon:"↗",children:"Source on GitHub"}),o.reportLink&&f.jsx(jn,{to:o.reportLink,variant:"secondary",icon:"↓",download:!0,children:"Report"})]})]})]}),f.jsxs("figure",{children:[f.jsx("img",{src:o.img,alt:""}),f.jsxs("figcaption",{className:"label",children:["Fig. ",Ns(o),": ",o.title]})]}),f.jsxs("nav",{className:"pager","aria-label":"More projects",children:[u?f.jsxs(ft,{href:`/project/${u.id}`,children:[f.jsx("span",{className:"label",children:"← Previous"}),f.jsx("span",{className:"title",children:u.title})]}):f.jsx("span",{}),c&&f.jsxs(ft,{href:`/project/${c.id}`,className:"next",children:[f.jsx("span",{className:"label",children:"Next →"}),f.jsx("span",{className:"title",children:c.title})]})]})]})})}class Ci{constructor(a=0,o="Network Error"){this.status=a,this.text=o}}const Ky=()=>{if(!(typeof localStorage>"u"))return{get:i=>Promise.resolve(localStorage.getItem(i)),set:(i,a)=>Promise.resolve(localStorage.setItem(i,a)),remove:i=>Promise.resolve(localStorage.removeItem(i))}},He={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ky()},Ws=i=>i?typeof i=="string"?{publicKey:i}:i.toString()==="[object Object]"?i:{}:{},Gy=(i,a="https://api.emailjs.com")=>{if(!i)return;const o=Ws(i);He.publicKey=o.publicKey,He.blockHeadless=o.blockHeadless,He.storageProvider=o.storageProvider,He.blockList=o.blockList,He.limitRate=o.limitRate,He.origin=o.origin||a},dp=async(i,a,o={})=>{const u=await fetch(He.origin+i,{method:"POST",headers:o,body:a}),c=await u.text(),p=new Ci(u.status,c);if(u.ok)return p;throw p},fp=(i,a,o)=>{if(!i||typeof i!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a||typeof a!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Yy=i=>{if(i&&i.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},pp=i=>i.webdriver||!i.languages||i.languages.length===0,hp=()=>new Ci(451,"Unavailable For Headless Browser"),qy=(i,a)=>{if(!Array.isArray(i))throw"The BlockList list has to be an array";if(typeof a!="string")throw"The BlockList watchVariable has to be a string"},Xy=i=>{var a;return!((a=i.list)!=null&&a.length)||!i.watchVariable},Jy=(i,a)=>i instanceof FormData?i.get(a):i[a],mp=(i,a)=>{if(Xy(i))return!1;qy(i.list,i.watchVariable);const o=Jy(a,i.watchVariable);return typeof o!="string"?!1:i.list.includes(o)},gp=()=>new Ci(403,"Forbidden"),Zy=(i,a)=>{if(typeof i!="number"||i<0)throw"The LimitRate throttle has to be a positive number";if(a&&typeof a!="string")throw"The LimitRate ID has to be a non-empty string"},e0=async(i,a,o)=>{const u=Number(await o.get(i)||0);return a-Date.now()+u},vp=async(i,a,o)=>{if(!a.throttle||!o)return!1;Zy(a.throttle,a.id);const u=a.id||i;return await e0(u,a.throttle,o)>0?!0:(await o.set(u,Date.now().toString()),!1)},yp=()=>new Ci(429,"Too Many Requests"),t0=async(i,a,o,u)=>{const c=Ws(u),p=c.publicKey||He.publicKey,m=c.blockHeadless||He.blockHeadless,x=c.storageProvider||He.storageProvider,v={...He.blockList,...c.blockList},w={...He.limitRate,...c.limitRate};return m&&pp(navigator)?Promise.reject(hp()):(fp(p,i,a),Yy(o),o&&mp(v,o)?Promise.reject(gp()):await vp(location.pathname,w,x)?Promise.reject(yp()):dp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:p,service_id:i,template_id:a,template_params:o}),{"Content-type":"application/json"}))},n0=i=>{if(!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},r0=i=>typeof i=="string"?document.querySelector(i):i,i0=async(i,a,o,u)=>{const c=Ws(u),p=c.publicKey||He.publicKey,m=c.blockHeadless||He.blockHeadless,x=He.storageProvider||c.storageProvider,v={...He.blockList,...c.blockList},w={...He.limitRate,...c.limitRate};if(m&&pp(navigator))return Promise.reject(hp());const P=r0(o);fp(p,i,a),n0(P);const N=new FormData(P);return mp(v,N)?Promise.reject(gp()):await vp(location.pathname,w,x)?Promise.reject(yp()):(N.append("lib_version","4.4.1"),N.append("service_id",i),N.append("template_id",a),N.append("user_id",p),dp("/api/v1.0/email/send-form",N))},l0={init:Gy,send:t0,sendForm:i0,EmailJSResponseStatus:Ci},o0=Ne.div`
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
`,a0=Ne.form`
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
`;function s0(){const[i,a]=j.useState(""),[o,u]=j.useState(""),[c,p]=j.useState(""),[m,x]=j.useState(""),[v,w]=j.useState(!1);j.useEffect(()=>{if(m){const R=setTimeout(()=>{x("")},3e3);return()=>clearTimeout(R)}},[m]);const P=async R=>{if(R.preventDefault(),!i.trim()||!o.trim()||!c.trim()){x("validation");return}w(!0);try{(await l0.send(void 0,void 0,{name:i,email:o,title:"Portfolio Contact Form",message:c},void 0)).status===200?(x("success"),a(""),u(""),p("")):x("error")}catch(F){console.error("Failed to send email:",F),x("error")}finally{w(!1)}},N={success:"Message sent. Thanks, I’ll get back to you soon.",validation:"Please fill in all fields before sending.",error:"Message failed to send. Please try again or email me directly."};return f.jsxs(f.Fragment,{children:[f.jsxs(a0,{onSubmit:P,children:[f.jsxs("label",{htmlFor:"name",children:[f.jsx("span",{className:"label",children:"Name"}),f.jsx("input",{type:"text",id:"name",name:"name",value:i,onChange:R=>a(R.target.value)})]}),f.jsxs("label",{htmlFor:"email",children:[f.jsx("span",{className:"label",children:"Email"}),f.jsx("input",{type:"email",id:"email",name:"email",value:o,onChange:R=>u(R.target.value)})]}),f.jsxs("label",{htmlFor:"message",children:[f.jsx("span",{className:"label",children:"Message"}),f.jsx("textarea",{id:"message",name:"message",value:c,onChange:R=>p(R.target.value)})]}),f.jsxs("button",{type:"submit",disabled:v,children:[v?"Sending…":"Send message",f.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),m&&f.jsx(o0,{role:"status",className:m,children:N[m]})]})}const u0=[{term:"Email",label:dt.email,href:`mailto:${dt.email}`},{term:"Phone",label:dt.phone,href:dt.phoneHref},{term:"Location",label:dt.location,href:dt.mapUrl},...Us.map(({label:i,url:a})=>({term:i,label:a.replace(/^https:\/\/(www\.)?/,""),href:a}))],c0=Ne.div`
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

  @media (max-width: 639px) {
    > * + * {
      border-top: 1px solid var(--rule);
    }
  }
`;function d0(){return f.jsxs(f.Fragment,{children:[f.jsx(Ei,{index:"03",kicker:"Contact",title:"Contact",children:"Send a message using the form, or reach me directly."}),f.jsx("div",{className:"container",children:f.jsxs(c0,{className:"grid-12",children:[f.jsx("dl",{className:"pad-r",children:u0.map(({term:i,label:a,href:o})=>f.jsxs("div",{children:[f.jsx("dt",{className:"label",children:i}),f.jsx("dd",{children:f.jsx(ft,{href:o,className:"text-link",children:a})})]},i))}),f.jsx("div",{className:"ruled",children:f.jsx(s0,{})})]})})]})}function f0(){return f.jsxs(Ff,{children:[f.jsx(ny,{}),f.jsxs(Ag,{basename:"/Personal-Portfolio/",children:[f.jsx(cy,{}),f.jsx(ly,{}),f.jsx("main",{children:f.jsxs(mg,{children:[f.jsx(An,{path:"/",element:f.jsx(Ty,{})}),f.jsx(An,{path:"/about",element:f.jsx(Ay,{})}),f.jsx(An,{path:"/projects",element:f.jsx(Wy,{})}),f.jsx(An,{path:"/project/:id",element:f.jsx(Qy,{})}),f.jsx(An,{path:"/contact",element:f.jsx(d0,{})}),f.jsx(An,{path:"*",element:f.jsx(pg,{to:"/",replace:!0})})]})}),f.jsx(uy,{})]})]})}Em.createRoot(document.getElementById("root")).render(f.jsx(j.StrictMode,{children:f.jsx(f0,{})}));
