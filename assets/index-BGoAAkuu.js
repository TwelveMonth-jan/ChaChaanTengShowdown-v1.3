(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function su(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wi={exports:{}},na={},Vi={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),tu=Symbol.for("react.portal"),au=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),ou=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),pu=Symbol.for("react.memo"),du=Symbol.for("react.lazy"),Dl=Symbol.iterator;function fu(n){return n===null||typeof n!="object"?null:(n=Dl&&n[Dl]||n["@@iterator"],typeof n=="function"?n:null)}var Ki={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qi=Object.assign,$i={};function as(n,e,s){this.props=n,this.context=e,this.refs=$i,this.updater=s||Ki}as.prototype.isReactComponent={};as.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};as.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Qi(){}Qi.prototype=as.prototype;function Br(n,e,s){this.props=n,this.context=e,this.refs=$i,this.updater=s||Ki}var jr=Br.prototype=new Qi;jr.constructor=Br;qi(jr,as.prototype);jr.isPureReactComponent=!0;var Il=Array.isArray,Yi=Object.prototype.hasOwnProperty,Ur={current:null},Gi={key:!0,ref:!0,__self:!0,__source:!0};function Xi(n,e,s){var t,a={},r=null,l=null;if(e!=null)for(t in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(r=""+e.key),e)Yi.call(e,t)&&!Gi.hasOwnProperty(t)&&(a[t]=e[t]);var i=arguments.length-2;if(i===1)a.children=s;else if(1<i){for(var o=Array(i),u=0;u<i;u++)o[u]=arguments[u+2];a.children=o}if(n&&n.defaultProps)for(t in i=n.defaultProps,i)a[t]===void 0&&(a[t]=i[t]);return{$$typeof:Ys,type:n,key:r,ref:l,props:a,_owner:Ur.current}}function gu(n,e){return{$$typeof:Ys,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Hr(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ys}function hu(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(s){return e[s]})}var Ol=/\/+/g;function wa(n,e){return typeof n=="object"&&n!==null&&n.key!=null?hu(""+n.key):e.toString(36)}function yt(n,e,s,t,a){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var l=!1;if(n===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case Ys:case tu:l=!0}}if(l)return l=n,a=a(l),n=t===""?"."+wa(l,0):t,Il(a)?(s="",n!=null&&(s=n.replace(Ol,"$&/")+"/"),yt(a,e,s,"",function(u){return u})):a!=null&&(Hr(a)&&(a=gu(a,s+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Ol,"$&/")+"/")+n)),e.push(a)),1;if(l=0,t=t===""?".":t+":",Il(n))for(var i=0;i<n.length;i++){r=n[i];var o=t+wa(r,i);l+=yt(r,e,s,o,a)}else if(o=fu(n),typeof o=="function")for(n=o.call(n),i=0;!(r=n.next()).done;)r=r.value,o=t+wa(r,i++),l+=yt(r,e,s,o,a);else if(r==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function et(n,e,s){if(n==null)return n;var t=[],a=0;return yt(n,t,"","",function(r){return e.call(s,r,a++)}),t}function vu(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(s){(n._status===0||n._status===-1)&&(n._status=1,n._result=s)},function(s){(n._status===0||n._status===-1)&&(n._status=2,n._result=s)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ln={current:null},wt={transition:null},mu={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:wt,ReactCurrentOwner:Ur};function Zi(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:et,forEach:function(n,e,s){et(n,function(){e.apply(this,arguments)},s)},count:function(n){var e=0;return et(n,function(){e++}),e},toArray:function(n){return et(n,function(e){return e})||[]},only:function(n){if(!Hr(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};P.Component=as;P.Fragment=au;P.Profiler=lu;P.PureComponent=Br;P.StrictMode=ru;P.Suspense=uu;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mu;P.act=Zi;P.cloneElement=function(n,e,s){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=qi({},n.props),a=n.key,r=n.ref,l=n._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,l=Ur.current),e.key!==void 0&&(a=""+e.key),n.type&&n.type.defaultProps)var i=n.type.defaultProps;for(o in e)Yi.call(e,o)&&!Gi.hasOwnProperty(o)&&(t[o]=e[o]===void 0&&i!==void 0?i[o]:e[o])}var o=arguments.length-2;if(o===1)t.children=s;else if(1<o){i=Array(o);for(var u=0;u<o;u++)i[u]=arguments[u+2];t.children=i}return{$$typeof:Ys,type:n.type,key:a,ref:r,props:t,_owner:l}};P.createContext=function(n){return n={$$typeof:ou,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:iu,_context:n},n.Consumer=n};P.createElement=Xi;P.createFactory=function(n){var e=Xi.bind(null,n);return e.type=n,e};P.createRef=function(){return{current:null}};P.forwardRef=function(n){return{$$typeof:cu,render:n}};P.isValidElement=Hr;P.lazy=function(n){return{$$typeof:du,_payload:{_status:-1,_result:n},_init:vu}};P.memo=function(n,e){return{$$typeof:pu,type:n,compare:e===void 0?null:e}};P.startTransition=function(n){var e=wt.transition;wt.transition={};try{n()}finally{wt.transition=e}};P.unstable_act=Zi;P.useCallback=function(n,e){return ln.current.useCallback(n,e)};P.useContext=function(n){return ln.current.useContext(n)};P.useDebugValue=function(){};P.useDeferredValue=function(n){return ln.current.useDeferredValue(n)};P.useEffect=function(n,e){return ln.current.useEffect(n,e)};P.useId=function(){return ln.current.useId()};P.useImperativeHandle=function(n,e,s){return ln.current.useImperativeHandle(n,e,s)};P.useInsertionEffect=function(n,e){return ln.current.useInsertionEffect(n,e)};P.useLayoutEffect=function(n,e){return ln.current.useLayoutEffect(n,e)};P.useMemo=function(n,e){return ln.current.useMemo(n,e)};P.useReducer=function(n,e,s){return ln.current.useReducer(n,e,s)};P.useRef=function(n){return ln.current.useRef(n)};P.useState=function(n){return ln.current.useState(n)};P.useSyncExternalStore=function(n,e,s){return ln.current.useSyncExternalStore(n,e,s)};P.useTransition=function(){return ln.current.useTransition()};P.version="18.3.1";Vi.exports=P;var Fs=Vi.exports;const yu=su(Fs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=Fs,zu=Symbol.for("react.element"),ku=Symbol.for("react.fragment"),Su=Object.prototype.hasOwnProperty,Cu=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Eu={key:!0,ref:!0,__self:!0,__source:!0};function Ji(n,e,s){var t,a={},r=null,l=null;s!==void 0&&(r=""+s),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)Su.call(e,t)&&!Eu.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:zu,type:n,key:r,ref:l,props:a,_owner:Cu.current}}na.Fragment=ku;na.jsx=Ji;na.jsxs=Ji;Wi.exports=na;var zn=Wi.exports,qa={},bi={exports:{}},yn={},no={exports:{}},eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(C,_){var N=C.length;C.push(_);n:for(;0<N;){var V=N-1>>>1,Y=C[V];if(0<a(Y,_))C[V]=_,C[N]=Y,N=V;else break n}}function s(C){return C.length===0?null:C[0]}function t(C){if(C.length===0)return null;var _=C[0],N=C.pop();if(N!==_){C[0]=N;n:for(var V=0,Y=C.length,bs=Y>>>1;V<bs;){var ve=2*(V+1)-1,ya=C[ve],me=ve+1,nt=C[me];if(0>a(ya,N))me<Y&&0>a(nt,ya)?(C[V]=nt,C[me]=N,V=me):(C[V]=ya,C[ve]=N,V=ve);else if(me<Y&&0>a(nt,N))C[V]=nt,C[me]=N,V=me;else break n}}return _}function a(C,_){var N=C.sortIndex-_.sortIndex;return N!==0?N:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;n.unstable_now=function(){return r.now()}}else{var l=Date,i=l.now();n.unstable_now=function(){return l.now()-i}}var o=[],u=[],h=1,g=null,f=3,y=!1,w=!1,z=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var _=s(u);_!==null;){if(_.callback===null)t(u);else if(_.startTime<=C)t(u),_.sortIndex=_.expirationTime,e(o,_);else break;_=s(u)}}function v(C){if(z=!1,d(C),!w)if(s(o)!==null)w=!0,va(S);else{var _=s(u);_!==null&&ma(v,_.startTime-C)}}function S(C,_){w=!1,z&&(z=!1,p(T),T=-1),y=!0;var N=f;try{for(d(_),g=s(o);g!==null&&(!(g.expirationTime>_)||C&&!_n());){var V=g.callback;if(typeof V=="function"){g.callback=null,f=g.priorityLevel;var Y=V(g.expirationTime<=_);_=n.unstable_now(),typeof Y=="function"?g.callback=Y:g===s(o)&&t(o),d(_)}else t(o);g=s(o)}if(g!==null)var bs=!0;else{var ve=s(u);ve!==null&&ma(v,ve.startTime-_),bs=!1}return bs}finally{g=null,f=N,y=!1}}var E=!1,x=null,T=-1,W=5,F=-1;function _n(){return!(n.unstable_now()-F<W)}function is(){if(x!==null){var C=n.unstable_now();F=C;var _=!0;try{_=x(!0,C)}finally{_?os():(E=!1,x=null)}}else E=!1}var os;if(typeof c=="function")os=function(){c(is)};else if(typeof MessageChannel<"u"){var Ll=new MessageChannel,eu=Ll.port2;Ll.port1.onmessage=is,os=function(){eu.postMessage(null)}}else os=function(){A(is,0)};function va(C){x=C,E||(E=!0,os())}function ma(C,_){T=A(function(){C(n.unstable_now())},_)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_continueExecution=function(){w||y||(w=!0,va(S))},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return s(o)},n.unstable_next=function(C){switch(f){case 1:case 2:case 3:var _=3;break;default:_=f}var N=f;f=_;try{return C()}finally{f=N}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var N=f;f=C;try{return _()}finally{f=N}},n.unstable_scheduleCallback=function(C,_,N){var V=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,C={id:h++,callback:_,priorityLevel:C,startTime:N,expirationTime:Y,sortIndex:-1},N>V?(C.sortIndex=N,e(u,C),s(o)===null&&C===s(u)&&(z?(p(T),T=-1):z=!0,ma(v,N-V))):(C.sortIndex=Y,e(o,C),w||y||(w=!0,va(S))),C},n.unstable_shouldYield=_n,n.unstable_wrapCallback=function(C){var _=f;return function(){var N=f;f=_;try{return C.apply(this,arguments)}finally{f=N}}}})(eo);no.exports=eo;var xu=no.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=Fs,mn=xu;function m(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var so=new Set,Rs={};function Fe(n,e){Ze(n,e),Ze(n+"Capture",e)}function Ze(n,e){for(Rs[n]=e,n=0;n<e.length;n++)so.add(e[n])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,_u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Al={},Ml={};function Nu(n){return $a.call(Ml,n)?!0:$a.call(Al,n)?!1:_u.test(n)?Ml[n]=!0:(Al[n]=!0,!1)}function Pu(n,e,s,t){if(s!==null&&s.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return t?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Fu(n,e,s,t){if(e===null||typeof e>"u"||Pu(n,e,s,t))return!0;if(t)return!1;if(s!==null)switch(s.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,s,t,a,r,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=n,this.type=e,this.sanitizeURL=r,this.removeEmptyString=l}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){b[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];b[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){b[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){b[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){b[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){b[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){b[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){b[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){b[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wr=/[\-:]([a-z])/g;function Vr(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wr,Vr);b[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wr,Vr);b[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wr,Vr);b[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){b[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});b.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){b[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function Kr(n,e,s,t){var a=b.hasOwnProperty(e)?b[e]:null;(a!==null?a.type!==0:t||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fu(e,s,a,t)&&(s=null),t||a===null?Nu(e)&&(s===null?n.removeAttribute(e):n.setAttribute(e,""+s)):a.mustUseProperty?n[a.propertyName]=s===null?a.type===3?!1:"":s:(e=a.attributeName,t=a.attributeNamespace,s===null?n.removeAttribute(e):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,t?n.setAttributeNS(t,e,s):n.setAttribute(e,s))))}var Gn=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,st=Symbol.for("react.element"),De=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),qr=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),to=Symbol.for("react.provider"),ao=Symbol.for("react.context"),$r=Symbol.for("react.forward_ref"),Ya=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),Qr=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),ro=Symbol.for("react.offscreen"),Bl=Symbol.iterator;function cs(n){return n===null||typeof n!="object"?null:(n=Bl&&n[Bl]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,za;function ms(n){if(za===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);za=e&&e[1]||""}return`
`+za+n}var ka=!1;function Sa(n,e){if(!n||ka)return"";ka=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var t=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){t=u}n.call(e.prototype)}else{try{throw Error()}catch(u){t=u}n()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=t.stack.split(`
`),l=a.length-1,i=r.length-1;1<=l&&0<=i&&a[l]!==r[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==r[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==r[i]){var o=`
`+a[l].replace(" at new "," at ");return n.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",n.displayName)),o}while(1<=l&&0<=i);break}}}finally{ka=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?ms(n):""}function Ru(n){switch(n.tag){case 5:return ms(n.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return n=Sa(n.type,!1),n;case 11:return n=Sa(n.type.render,!1),n;case 1:return n=Sa(n.type,!0),n;default:return""}}function Xa(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ie:return"Fragment";case De:return"Portal";case Qa:return"Profiler";case qr:return"StrictMode";case Ya:return"Suspense";case Ga:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ao:return(n.displayName||"Context")+".Consumer";case to:return(n._context.displayName||"Context")+".Provider";case $r:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Qr:return e=n.displayName||null,e!==null?e:Xa(n.type)||"Memo";case Zn:e=n._payload,n=n._init;try{return Xa(n(e))}catch{}}return null}function Lu(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(e);case 8:return e===qr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function lo(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Du(n){var e=lo(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),t=""+n[e];if(!n.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,r=s.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(l){t=""+l,r.call(this,l)}}),Object.defineProperty(n,e,{enumerable:s.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function tt(n){n._valueTracker||(n._valueTracker=Du(n))}function io(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var s=e.getValue(),t="";return n&&(t=lo(n)?n.checked?"true":"false":n.value),n=t,n!==s?(e.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Za(n,e){var s=e.checked;return U({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function jl(n,e){var s=e.defaultValue==null?"":e.defaultValue,t=e.checked!=null?e.checked:e.defaultChecked;s=pe(e.value!=null?e.value:s),n._wrapperState={initialChecked:t,initialValue:s,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oo(n,e){e=e.checked,e!=null&&Kr(n,"checked",e,!1)}function Ja(n,e){oo(n,e);var s=pe(e.value),t=e.type;if(s!=null)t==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ba(n,e.type,s):e.hasOwnProperty("defaultValue")&&ba(n,e.type,pe(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Ul(n,e,s){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var t=e.type;if(!(t!=="submit"&&t!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,s||e===n.value||(n.value=e),n.defaultValue=e}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function ba(n,e,s){(e!=="number"||Ft(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var ys=Array.isArray;function qe(n,e,s,t){if(n=n.options,e){e={};for(var a=0;a<s.length;a++)e["$"+s[a]]=!0;for(s=0;s<n.length;s++)a=e.hasOwnProperty("$"+n[s].value),n[s].selected!==a&&(n[s].selected=a),a&&t&&(n[s].defaultSelected=!0)}else{for(s=""+pe(s),e=null,a=0;a<n.length;a++){if(n[a].value===s){n[a].selected=!0,t&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function nr(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(m(91));return U({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Hl(n,e){var s=e.value;if(s==null){if(s=e.children,e=e.defaultValue,s!=null){if(e!=null)throw Error(m(92));if(ys(s)){if(1<s.length)throw Error(m(93));s=s[0]}e=s}e==null&&(e=""),s=e}n._wrapperState={initialValue:pe(s)}}function co(n,e){var s=pe(e.value),t=pe(e.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),e.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),t!=null&&(n.defaultValue=""+t)}function Wl(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function uo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function er(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?uo(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var at,po=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,s,t,a){MSApp.execUnsafeLocalFunction(function(){return n(e,s,t,a)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(at=at||document.createElement("div"),at.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=at.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ls(n,e){if(e){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=e;return}}n.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(n){Iu.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ks[e]=ks[n]})});function fo(n,e,s){return e==null||typeof e=="boolean"||e===""?"":s||typeof e!="number"||e===0||ks.hasOwnProperty(n)&&ks[n]?(""+e).trim():e+"px"}function go(n,e){n=n.style;for(var s in e)if(e.hasOwnProperty(s)){var t=s.indexOf("--")===0,a=fo(s,e[s],t);s==="float"&&(s="cssFloat"),t?n.setProperty(s,a):n[s]=a}}var Ou=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sr(n,e){if(e){if(Ou[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(m(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(m(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(m(61))}if(e.style!=null&&typeof e.style!="object")throw Error(m(62))}}function tr(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ar=null;function Yr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rr=null,$e=null,Qe=null;function Vl(n){if(n=Zs(n)){if(typeof rr!="function")throw Error(m(280));var e=n.stateNode;e&&(e=ra(e),rr(n.stateNode,n.type,e))}}function ho(n){$e?Qe?Qe.push(n):Qe=[n]:$e=n}function vo(){if($e){var n=$e,e=Qe;if(Qe=$e=null,Vl(n),e)for(n=0;n<e.length;n++)Vl(e[n])}}function mo(n,e){return n(e)}function yo(){}var Ca=!1;function wo(n,e,s){if(Ca)return n(e,s);Ca=!0;try{return mo(n,e,s)}finally{Ca=!1,($e!==null||Qe!==null)&&(yo(),vo())}}function Ds(n,e){var s=n.stateNode;if(s===null)return null;var t=ra(s);if(t===null)return null;s=t[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(m(231,e,typeof s));return s}var lr=!1;if(qn)try{var us={};Object.defineProperty(us,"passive",{get:function(){lr=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{lr=!1}function Au(n,e,s,t,a,r,l,i,o){var u=Array.prototype.slice.call(arguments,3);try{e.apply(s,u)}catch(h){this.onError(h)}}var Ss=!1,Rt=null,Lt=!1,ir=null,Mu={onError:function(n){Ss=!0,Rt=n}};function Bu(n,e,s,t,a,r,l,i,o){Ss=!1,Rt=null,Au.apply(Mu,arguments)}function ju(n,e,s,t,a,r,l,i,o){if(Bu.apply(this,arguments),Ss){if(Ss){var u=Rt;Ss=!1,Rt=null}else throw Error(m(198));Lt||(Lt=!0,ir=u)}}function Re(n){var e=n,s=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(s=e.return),n=e.return;while(n)}return e.tag===3?s:null}function zo(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Kl(n){if(Re(n)!==n)throw Error(m(188))}function Uu(n){var e=n.alternate;if(!e){if(e=Re(n),e===null)throw Error(m(188));return e!==n?null:n}for(var s=n,t=e;;){var a=s.return;if(a===null)break;var r=a.alternate;if(r===null){if(t=a.return,t!==null){s=t;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===s)return Kl(a),n;if(r===t)return Kl(a),e;r=r.sibling}throw Error(m(188))}if(s.return!==t.return)s=a,t=r;else{for(var l=!1,i=a.child;i;){if(i===s){l=!0,s=a,t=r;break}if(i===t){l=!0,t=a,s=r;break}i=i.sibling}if(!l){for(i=r.child;i;){if(i===s){l=!0,s=r,t=a;break}if(i===t){l=!0,t=r,s=a;break}i=i.sibling}if(!l)throw Error(m(189))}}if(s.alternate!==t)throw Error(m(190))}if(s.tag!==3)throw Error(m(188));return s.stateNode.current===s?n:e}function ko(n){return n=Uu(n),n!==null?So(n):null}function So(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=So(n);if(e!==null)return e;n=n.sibling}return null}var Co=mn.unstable_scheduleCallback,ql=mn.unstable_cancelCallback,Hu=mn.unstable_shouldYield,Wu=mn.unstable_requestPaint,K=mn.unstable_now,Vu=mn.unstable_getCurrentPriorityLevel,Gr=mn.unstable_ImmediatePriority,Eo=mn.unstable_UserBlockingPriority,Dt=mn.unstable_NormalPriority,Ku=mn.unstable_LowPriority,xo=mn.unstable_IdlePriority,ea=null,Bn=null;function qu(n){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(ea,n,void 0,(n.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:Yu,$u=Math.log,Qu=Math.LN2;function Yu(n){return n>>>=0,n===0?32:31-($u(n)/Qu|0)|0}var rt=64,lt=4194304;function ws(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function It(n,e){var s=n.pendingLanes;if(s===0)return 0;var t=0,a=n.suspendedLanes,r=n.pingedLanes,l=s&268435455;if(l!==0){var i=l&~a;i!==0?t=ws(i):(r&=l,r!==0&&(t=ws(r)))}else l=s&~a,l!==0?t=ws(l):r!==0&&(t=ws(r));if(t===0)return 0;if(e!==0&&e!==t&&!(e&a)&&(a=t&-t,r=e&-e,a>=r||a===16&&(r&4194240)!==0))return e;if(t&4&&(t|=s&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=t;0<e;)s=31-Ln(e),a=1<<s,t|=n[s],e&=~a;return t}function Gu(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(n,e){for(var s=n.suspendedLanes,t=n.pingedLanes,a=n.expirationTimes,r=n.pendingLanes;0<r;){var l=31-Ln(r),i=1<<l,o=a[l];o===-1?(!(i&s)||i&t)&&(a[l]=Gu(i,e)):o<=e&&(n.expiredLanes|=i),r&=~i}}function or(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function To(){var n=rt;return rt<<=1,!(rt&4194240)&&(rt=64),n}function Ea(n){for(var e=[],s=0;31>s;s++)e.push(n);return e}function Gs(n,e,s){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ln(e),n[e]=s}function Zu(n,e){var s=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<s;){var a=31-Ln(s),r=1<<a;e[a]=0,t[a]=-1,n[a]=-1,s&=~r}}function Xr(n,e){var s=n.entangledLanes|=e;for(n=n.entanglements;s;){var t=31-Ln(s),a=1<<t;a&e|n[t]&e&&(n[t]|=e),s&=~a}}var L=0;function _o(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var No,Zr,Po,Fo,Ro,cr=!1,it=[],te=null,ae=null,re=null,Is=new Map,Os=new Map,bn=[],Ju="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(n,e){switch(n){case"focusin":case"focusout":te=null;break;case"dragenter":case"dragleave":ae=null;break;case"mouseover":case"mouseout":re=null;break;case"pointerover":case"pointerout":Is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(e.pointerId)}}function ps(n,e,s,t,a,r){return n===null||n.nativeEvent!==r?(n={blockedOn:e,domEventName:s,eventSystemFlags:t,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Zs(e),e!==null&&Zr(e)),n):(n.eventSystemFlags|=t,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function bu(n,e,s,t,a){switch(e){case"focusin":return te=ps(te,n,e,s,t,a),!0;case"dragenter":return ae=ps(ae,n,e,s,t,a),!0;case"mouseover":return re=ps(re,n,e,s,t,a),!0;case"pointerover":var r=a.pointerId;return Is.set(r,ps(Is.get(r)||null,n,e,s,t,a)),!0;case"gotpointercapture":return r=a.pointerId,Os.set(r,ps(Os.get(r)||null,n,e,s,t,a)),!0}return!1}function Lo(n){var e=ze(n.target);if(e!==null){var s=Re(e);if(s!==null){if(e=s.tag,e===13){if(e=zo(s),e!==null){n.blockedOn=e,Ro(n.priority,function(){Po(s)});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zt(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var s=ur(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var t=new s.constructor(s.type,s);ar=t,s.target.dispatchEvent(t),ar=null}else return e=Zs(s),e!==null&&Zr(e),n.blockedOn=s,!1;e.shift()}return!0}function Ql(n,e,s){zt(n)&&s.delete(e)}function np(){cr=!1,te!==null&&zt(te)&&(te=null),ae!==null&&zt(ae)&&(ae=null),re!==null&&zt(re)&&(re=null),Is.forEach(Ql),Os.forEach(Ql)}function ds(n,e){n.blockedOn===e&&(n.blockedOn=null,cr||(cr=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,np)))}function As(n){function e(a){return ds(a,n)}if(0<it.length){ds(it[0],n);for(var s=1;s<it.length;s++){var t=it[s];t.blockedOn===n&&(t.blockedOn=null)}}for(te!==null&&ds(te,n),ae!==null&&ds(ae,n),re!==null&&ds(re,n),Is.forEach(e),Os.forEach(e),s=0;s<bn.length;s++)t=bn[s],t.blockedOn===n&&(t.blockedOn=null);for(;0<bn.length&&(s=bn[0],s.blockedOn===null);)Lo(s),s.blockedOn===null&&bn.shift()}var Ye=Gn.ReactCurrentBatchConfig,Ot=!0;function ep(n,e,s,t){var a=L,r=Ye.transition;Ye.transition=null;try{L=1,Jr(n,e,s,t)}finally{L=a,Ye.transition=r}}function sp(n,e,s,t){var a=L,r=Ye.transition;Ye.transition=null;try{L=4,Jr(n,e,s,t)}finally{L=a,Ye.transition=r}}function Jr(n,e,s,t){if(Ot){var a=ur(n,e,s,t);if(a===null)Ia(n,e,t,At,s),$l(n,t);else if(bu(a,n,e,s,t))t.stopPropagation();else if($l(n,t),e&4&&-1<Ju.indexOf(n)){for(;a!==null;){var r=Zs(a);if(r!==null&&No(r),r=ur(n,e,s,t),r===null&&Ia(n,e,t,At,s),r===a)break;a=r}a!==null&&t.stopPropagation()}else Ia(n,e,t,null,s)}}var At=null;function ur(n,e,s,t){if(At=null,n=Yr(t),n=ze(n),n!==null)if(e=Re(n),e===null)n=null;else if(s=e.tag,s===13){if(n=zo(e),n!==null)return n;n=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return At=n,null}function Do(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vu()){case Gr:return 1;case Eo:return 4;case Dt:case Ku:return 16;case xo:return 536870912;default:return 16}default:return 16}}var ee=null,br=null,kt=null;function Io(){if(kt)return kt;var n,e=br,s=e.length,t,a="value"in ee?ee.value:ee.textContent,r=a.length;for(n=0;n<s&&e[n]===a[n];n++);var l=s-n;for(t=1;t<=l&&e[s-t]===a[r-t];t++);return kt=a.slice(n,1<t?1-t:void 0)}function St(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ot(){return!0}function Yl(){return!1}function wn(n){function e(s,t,a,r,l){this._reactName=s,this._targetInst=a,this.type=t,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var i in n)n.hasOwnProperty(i)&&(s=n[i],this[i]=s?s(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ot:Yl,this.isPropagationStopped=Yl,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ot)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ot)},persist:function(){},isPersistent:ot}),e}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=wn(rs),Xs=U({},rs,{view:0,detail:0}),tp=wn(Xs),xa,Ta,fs,sa=U({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:el,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fs&&(fs&&n.type==="mousemove"?(xa=n.screenX-fs.screenX,Ta=n.screenY-fs.screenY):Ta=xa=0,fs=n),xa)},movementY:function(n){return"movementY"in n?n.movementY:Ta}}),Gl=wn(sa),ap=U({},sa,{dataTransfer:0}),rp=wn(ap),lp=U({},Xs,{relatedTarget:0}),_a=wn(lp),ip=U({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),op=wn(ip),cp=U({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),up=wn(cp),pp=U({},rs,{data:0}),Xl=wn(pp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=gp[n])?!!e[n]:!1}function el(){return hp}var vp=U({},Xs,{key:function(n){if(n.key){var e=dp[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=St(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:el,charCode:function(n){return n.type==="keypress"?St(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?St(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mp=wn(vp),yp=U({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=wn(yp),wp=U({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:el}),zp=wn(wp),kp=U({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=wn(kp),Cp=U({},sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=wn(Cp),xp=[9,13,27,32],sl=qn&&"CompositionEvent"in window,Cs=null;qn&&"documentMode"in document&&(Cs=document.documentMode);var Tp=qn&&"TextEvent"in window&&!Cs,Oo=qn&&(!sl||Cs&&8<Cs&&11>=Cs),Jl=" ",bl=!1;function Ao(n,e){switch(n){case"keyup":return xp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mo(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Oe=!1;function _p(n,e){switch(n){case"compositionend":return Mo(e);case"keypress":return e.which!==32?null:(bl=!0,Jl);case"textInput":return n=e.data,n===Jl&&bl?null:n;default:return null}}function Np(n,e){if(Oe)return n==="compositionend"||!sl&&Ao(n,e)?(n=Io(),kt=br=ee=null,Oe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Oo&&e.locale!=="ko"?null:e.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ni(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Pp[n.type]:e==="textarea"}function Bo(n,e,s,t){ho(t),e=Mt(e,"onChange"),0<e.length&&(s=new nl("onChange","change",null,s,t),n.push({event:s,listeners:e}))}var Es=null,Ms=null;function Fp(n){Go(n,0)}function ta(n){var e=Be(n);if(io(e))return n}function Rp(n,e){if(n==="change")return e}var jo=!1;if(qn){var Na;if(qn){var Pa="oninput"in document;if(!Pa){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Pa=typeof ei.oninput=="function"}Na=Pa}else Na=!1;jo=Na&&(!document.documentMode||9<document.documentMode)}function si(){Es&&(Es.detachEvent("onpropertychange",Uo),Ms=Es=null)}function Uo(n){if(n.propertyName==="value"&&ta(Ms)){var e=[];Bo(e,Ms,n,Yr(n)),wo(Fp,e)}}function Lp(n,e,s){n==="focusin"?(si(),Es=e,Ms=s,Es.attachEvent("onpropertychange",Uo)):n==="focusout"&&si()}function Dp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ta(Ms)}function Ip(n,e){if(n==="click")return ta(e)}function Op(n,e){if(n==="input"||n==="change")return ta(e)}function Ap(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var In=typeof Object.is=="function"?Object.is:Ap;function Bs(n,e){if(In(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var s=Object.keys(n),t=Object.keys(e);if(s.length!==t.length)return!1;for(t=0;t<s.length;t++){var a=s[t];if(!$a.call(e,a)||!In(n[a],e[a]))return!1}return!0}function ti(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ai(n,e){var s=ti(n);n=0;for(var t;s;){if(s.nodeType===3){if(t=n+s.textContent.length,n<=e&&t>=e)return{node:s,offset:e-n};n=t}n:{for(;s;){if(s.nextSibling){s=s.nextSibling;break n}s=s.parentNode}s=void 0}s=ti(s)}}function Ho(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ho(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Wo(){for(var n=window,e=Ft();e instanceof n.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)n=e.contentWindow;else break;e=Ft(n.document)}return e}function tl(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Mp(n){var e=Wo(),s=n.focusedElem,t=n.selectionRange;if(e!==s&&s&&s.ownerDocument&&Ho(s.ownerDocument.documentElement,s)){if(t!==null&&tl(s)){if(e=t.start,n=t.end,n===void 0&&(n=e),"selectionStart"in s)s.selectionStart=e,s.selectionEnd=Math.min(n,s.value.length);else if(n=(e=s.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=s.textContent.length,r=Math.min(t.start,a);t=t.end===void 0?r:Math.min(t.end,a),!n.extend&&r>t&&(a=t,t=r,r=a),a=ai(s,r);var l=ai(s,t);a&&l&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),r>t?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}}for(e=[],n=s;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<e.length;s++)n=e[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bp=qn&&"documentMode"in document&&11>=document.documentMode,Ae=null,pr=null,xs=null,dr=!1;function ri(n,e,s){var t=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;dr||Ae==null||Ae!==Ft(t)||(t=Ae,"selectionStart"in t&&tl(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),xs&&Bs(xs,t)||(xs=t,t=Mt(pr,"onSelect"),0<t.length&&(e=new nl("onSelect","select",null,e,s),n.push({event:e,listeners:t}),e.target=Ae)))}function ct(n,e){var s={};return s[n.toLowerCase()]=e.toLowerCase(),s["Webkit"+n]="webkit"+e,s["Moz"+n]="moz"+e,s}var Me={animationend:ct("Animation","AnimationEnd"),animationiteration:ct("Animation","AnimationIteration"),animationstart:ct("Animation","AnimationStart"),transitionend:ct("Transition","TransitionEnd")},Fa={},Vo={};qn&&(Vo=document.createElement("div").style,"AnimationEvent"in window||(delete Me.animationend.animation,delete Me.animationiteration.animation,delete Me.animationstart.animation),"TransitionEvent"in window||delete Me.transitionend.transition);function aa(n){if(Fa[n])return Fa[n];if(!Me[n])return n;var e=Me[n],s;for(s in e)if(e.hasOwnProperty(s)&&s in Vo)return Fa[n]=e[s];return n}var Ko=aa("animationend"),qo=aa("animationiteration"),$o=aa("animationstart"),Qo=aa("transitionend"),Yo=new Map,li="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fe(n,e){Yo.set(n,e),Fe(e,[n])}for(var Ra=0;Ra<li.length;Ra++){var La=li[Ra],jp=La.toLowerCase(),Up=La[0].toUpperCase()+La.slice(1);fe(jp,"on"+Up)}fe(Ko,"onAnimationEnd");fe(qo,"onAnimationIteration");fe($o,"onAnimationStart");fe("dblclick","onDoubleClick");fe("focusin","onFocus");fe("focusout","onBlur");fe(Qo,"onTransitionEnd");Ze("onMouseEnter",["mouseout","mouseover"]);Ze("onMouseLeave",["mouseout","mouseover"]);Ze("onPointerEnter",["pointerout","pointerover"]);Ze("onPointerLeave",["pointerout","pointerover"]);Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function ii(n,e,s){var t=n.type||"unknown-event";n.currentTarget=s,ju(t,e,void 0,n),n.currentTarget=null}function Go(n,e){e=(e&4)!==0;for(var s=0;s<n.length;s++){var t=n[s],a=t.event;t=t.listeners;n:{var r=void 0;if(e)for(var l=t.length-1;0<=l;l--){var i=t[l],o=i.instance,u=i.currentTarget;if(i=i.listener,o!==r&&a.isPropagationStopped())break n;ii(a,i,u),r=o}else for(l=0;l<t.length;l++){if(i=t[l],o=i.instance,u=i.currentTarget,i=i.listener,o!==r&&a.isPropagationStopped())break n;ii(a,i,u),r=o}}}if(Lt)throw n=ir,Lt=!1,ir=null,n}function I(n,e){var s=e[mr];s===void 0&&(s=e[mr]=new Set);var t=n+"__bubble";s.has(t)||(Xo(e,n,2,!1),s.add(t))}function Da(n,e,s){var t=0;e&&(t|=4),Xo(s,n,t,e)}var ut="_reactListening"+Math.random().toString(36).slice(2);function js(n){if(!n[ut]){n[ut]=!0,so.forEach(function(s){s!=="selectionchange"&&(Hp.has(s)||Da(s,!1,n),Da(s,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ut]||(e[ut]=!0,Da("selectionchange",!1,e))}}function Xo(n,e,s,t){switch(Do(e)){case 1:var a=ep;break;case 4:a=sp;break;default:a=Jr}s=a.bind(null,e,s,n),a=void 0,!lr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),t?a!==void 0?n.addEventListener(e,s,{capture:!0,passive:a}):n.addEventListener(e,s,!0):a!==void 0?n.addEventListener(e,s,{passive:a}):n.addEventListener(e,s,!1)}function Ia(n,e,s,t,a){var r=t;if(!(e&1)&&!(e&2)&&t!==null)n:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var i=t.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=t.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;l=l.return}for(;i!==null;){if(l=ze(i),l===null)return;if(o=l.tag,o===5||o===6){t=r=l;continue n}i=i.parentNode}}t=t.return}wo(function(){var u=r,h=Yr(s),g=[];n:{var f=Yo.get(n);if(f!==void 0){var y=nl,w=n;switch(n){case"keypress":if(St(s)===0)break n;case"keydown":case"keyup":y=mp;break;case"focusin":w="focus",y=_a;break;case"focusout":w="blur",y=_a;break;case"beforeblur":case"afterblur":y=_a;break;case"click":if(s.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zp;break;case Ko:case qo:case $o:y=op;break;case Qo:y=Sp;break;case"scroll":y=tp;break;case"wheel":y=Ep;break;case"copy":case"cut":case"paste":y=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Zl}var z=(e&4)!==0,A=!z&&n==="scroll",p=z?f!==null?f+"Capture":null:f;z=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,p!==null&&(v=Ds(c,p),v!=null&&z.push(Us(c,v,d)))),A)break;c=c.return}0<z.length&&(f=new y(f,w,null,s,h),g.push({event:f,listeners:z}))}}if(!(e&7)){n:{if(f=n==="mouseover"||n==="pointerover",y=n==="mouseout"||n==="pointerout",f&&s!==ar&&(w=s.relatedTarget||s.fromElement)&&(ze(w)||w[$n]))break n;if((y||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,y?(w=s.relatedTarget||s.toElement,y=u,w=w?ze(w):null,w!==null&&(A=Re(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(z=Gl,v="onMouseLeave",p="onMouseEnter",c="mouse",(n==="pointerout"||n==="pointerover")&&(z=Zl,v="onPointerLeave",p="onPointerEnter",c="pointer"),A=y==null?f:Be(y),d=w==null?f:Be(w),f=new z(v,c+"leave",y,s,h),f.target=A,f.relatedTarget=d,v=null,ze(h)===u&&(z=new z(p,c+"enter",w,s,h),z.target=d,z.relatedTarget=A,v=z),A=v,y&&w)e:{for(z=y,p=w,c=0,d=z;d;d=Le(d))c++;for(d=0,v=p;v;v=Le(v))d++;for(;0<c-d;)z=Le(z),c--;for(;0<d-c;)p=Le(p),d--;for(;c--;){if(z===p||p!==null&&z===p.alternate)break e;z=Le(z),p=Le(p)}z=null}else z=null;y!==null&&oi(g,f,y,z,!1),w!==null&&A!==null&&oi(g,A,w,z,!0)}}n:{if(f=u?Be(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=Rp;else if(ni(f))if(jo)S=Op;else{S=Dp;var E=Lp}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Ip);if(S&&(S=S(n,u))){Bo(g,S,s,h);break n}E&&E(n,f,u),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ba(f,"number",f.value)}switch(E=u?Be(u):window,n){case"focusin":(ni(E)||E.contentEditable==="true")&&(Ae=E,pr=u,xs=null);break;case"focusout":xs=pr=Ae=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,ri(g,s,h);break;case"selectionchange":if(Bp)break;case"keydown":case"keyup":ri(g,s,h)}var x;if(sl)n:{switch(n){case"compositionstart":var T="onCompositionStart";break n;case"compositionend":T="onCompositionEnd";break n;case"compositionupdate":T="onCompositionUpdate";break n}T=void 0}else Oe?Ao(n,s)&&(T="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(T="onCompositionStart");T&&(Oo&&s.locale!=="ko"&&(Oe||T!=="onCompositionStart"?T==="onCompositionEnd"&&Oe&&(x=Io()):(ee=h,br="value"in ee?ee.value:ee.textContent,Oe=!0)),E=Mt(u,T),0<E.length&&(T=new Xl(T,n,null,s,h),g.push({event:T,listeners:E}),x?T.data=x:(x=Mo(s),x!==null&&(T.data=x)))),(x=Tp?_p(n,s):Np(n,s))&&(u=Mt(u,"onBeforeInput"),0<u.length&&(h=new Xl("onBeforeInput","beforeinput",null,s,h),g.push({event:h,listeners:u}),h.data=x))}Go(g,e)})}function Us(n,e,s){return{instance:n,listener:e,currentTarget:s}}function Mt(n,e){for(var s=e+"Capture",t=[];n!==null;){var a=n,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Ds(n,s),r!=null&&t.unshift(Us(n,r,a)),r=Ds(n,e),r!=null&&t.push(Us(n,r,a))),n=n.return}return t}function Le(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function oi(n,e,s,t,a){for(var r=e._reactName,l=[];s!==null&&s!==t;){var i=s,o=i.alternate,u=i.stateNode;if(o!==null&&o===t)break;i.tag===5&&u!==null&&(i=u,a?(o=Ds(s,r),o!=null&&l.unshift(Us(s,o,i))):a||(o=Ds(s,r),o!=null&&l.push(Us(s,o,i)))),s=s.return}l.length!==0&&n.push({event:e,listeners:l})}var Wp=/\r\n?/g,Vp=/\u0000|\uFFFD/g;function ci(n){return(typeof n=="string"?n:""+n).replace(Wp,`
`).replace(Vp,"")}function pt(n,e,s){if(e=ci(e),ci(n)!==e&&s)throw Error(m(425))}function Bt(){}var fr=null,gr=null;function hr(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vr=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,ui=typeof Promise=="function"?Promise:void 0,qp=typeof queueMicrotask=="function"?queueMicrotask:typeof ui<"u"?function(n){return ui.resolve(null).then(n).catch($p)}:vr;function $p(n){setTimeout(function(){throw n})}function Oa(n,e){var s=e,t=0;do{var a=s.nextSibling;if(n.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(t===0){n.removeChild(a),As(e);return}t--}else s!=="$"&&s!=="$?"&&s!=="$!"||t++;s=a}while(s);As(e)}function le(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function pi(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return n;e--}else s==="/$"&&e++}n=n.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ls,Hs="__reactProps$"+ls,$n="__reactContainer$"+ls,mr="__reactEvents$"+ls,Qp="__reactListeners$"+ls,Yp="__reactHandles$"+ls;function ze(n){var e=n[Mn];if(e)return e;for(var s=n.parentNode;s;){if(e=s[$n]||s[Mn]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(n=pi(n);n!==null;){if(s=n[Mn])return s;n=pi(n)}return e}n=s,s=n.parentNode}return null}function Zs(n){return n=n[Mn]||n[$n],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Be(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(m(33))}function ra(n){return n[Hs]||null}var yr=[],je=-1;function ge(n){return{current:n}}function O(n){0>je||(n.current=yr[je],yr[je]=null,je--)}function D(n,e){je++,yr[je]=n.current,n.current=e}var de={},tn=ge(de),pn=ge(!1),xe=de;function Je(n,e){var s=n.type.contextTypes;if(!s)return de;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===e)return t.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in s)a[r]=e[r];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=a),a}function dn(n){return n=n.childContextTypes,n!=null}function jt(){O(pn),O(tn)}function di(n,e,s){if(tn.current!==de)throw Error(m(168));D(tn,e),D(pn,s)}function Zo(n,e,s){var t=n.stateNode;if(e=e.childContextTypes,typeof t.getChildContext!="function")return s;t=t.getChildContext();for(var a in t)if(!(a in e))throw Error(m(108,Lu(n)||"Unknown",a));return U({},s,t)}function Ut(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||de,xe=tn.current,D(tn,n),D(pn,pn.current),!0}function fi(n,e,s){var t=n.stateNode;if(!t)throw Error(m(169));s?(n=Zo(n,e,xe),t.__reactInternalMemoizedMergedChildContext=n,O(pn),O(tn),D(tn,n)):O(pn),D(pn,s)}var Hn=null,la=!1,Aa=!1;function Jo(n){Hn===null?Hn=[n]:Hn.push(n)}function Gp(n){la=!0,Jo(n)}function he(){if(!Aa&&Hn!==null){Aa=!0;var n=0,e=L;try{var s=Hn;for(L=1;n<s.length;n++){var t=s[n];do t=t(!0);while(t!==null)}Hn=null,la=!1}catch(a){throw Hn!==null&&(Hn=Hn.slice(n+1)),Co(Gr,he),a}finally{L=e,Aa=!1}}return null}var Ue=[],He=0,Ht=null,Wt=0,kn=[],Sn=0,Te=null,Wn=1,Vn="";function ye(n,e){Ue[He++]=Wt,Ue[He++]=Ht,Ht=n,Wt=e}function bo(n,e,s){kn[Sn++]=Wn,kn[Sn++]=Vn,kn[Sn++]=Te,Te=n;var t=Wn;n=Vn;var a=32-Ln(t)-1;t&=~(1<<a),s+=1;var r=32-Ln(e)+a;if(30<r){var l=a-a%5;r=(t&(1<<l)-1).toString(32),t>>=l,a-=l,Wn=1<<32-Ln(e)+a|s<<a|t,Vn=r+n}else Wn=1<<r|s<<a|t,Vn=n}function al(n){n.return!==null&&(ye(n,1),bo(n,1,0))}function rl(n){for(;n===Ht;)Ht=Ue[--He],Ue[He]=null,Wt=Ue[--He],Ue[He]=null;for(;n===Te;)Te=kn[--Sn],kn[Sn]=null,Vn=kn[--Sn],kn[Sn]=null,Wn=kn[--Sn],kn[Sn]=null}var vn=null,hn=null,M=!1,Rn=null;function nc(n,e){var s=Cn(5,null,null,0);s.elementType="DELETED",s.stateNode=e,s.return=n,e=n.deletions,e===null?(n.deletions=[s],n.flags|=16):e.push(s)}function gi(n,e){switch(n.tag){case 5:var s=n.type;return e=e.nodeType!==1||s.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,hn=le(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(s=Te!==null?{id:Wn,overflow:Vn}:null,n.memoizedState={dehydrated:e,treeContext:s,retryLane:1073741824},s=Cn(18,null,null,0),s.stateNode=e,s.return=n,n.child=s,vn=n,hn=null,!0):!1;default:return!1}}function wr(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zr(n){if(M){var e=hn;if(e){var s=e;if(!gi(n,e)){if(wr(n))throw Error(m(418));e=le(s.nextSibling);var t=vn;e&&gi(n,e)?nc(t,s):(n.flags=n.flags&-4097|2,M=!1,vn=n)}}else{if(wr(n))throw Error(m(418));n.flags=n.flags&-4097|2,M=!1,vn=n}}}function hi(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function dt(n){if(n!==vn)return!1;if(!M)return hi(n),M=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!hr(n.type,n.memoizedProps)),e&&(e=hn)){if(wr(n))throw ec(),Error(m(418));for(;e;)nc(n,e),e=le(e.nextSibling)}if(hi(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(e===0){hn=le(n.nextSibling);break n}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++}n=n.nextSibling}hn=null}}else hn=vn?le(n.stateNode.nextSibling):null;return!0}function ec(){for(var n=hn;n;)n=le(n.nextSibling)}function be(){hn=vn=null,M=!1}function ll(n){Rn===null?Rn=[n]:Rn.push(n)}var Xp=Gn.ReactCurrentBatchConfig;function gs(n,e,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(m(309));var t=s.stateNode}if(!t)throw Error(m(147,n));var a=t,r=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(l){var i=a.refs;l===null?delete i[r]:i[r]=l},e._stringRef=r,e)}if(typeof n!="string")throw Error(m(284));if(!s._owner)throw Error(m(290,n))}return n}function ft(n,e){throw n=Object.prototype.toString.call(e),Error(m(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function vi(n){var e=n._init;return e(n._payload)}function sc(n){function e(p,c){if(n){var d=p.deletions;d===null?(p.deletions=[c],p.flags|=16):d.push(c)}}function s(p,c){if(!n)return null;for(;c!==null;)e(p,c),c=c.sibling;return null}function t(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function a(p,c){return p=ue(p,c),p.index=0,p.sibling=null,p}function r(p,c,d){return p.index=d,n?(d=p.alternate,d!==null?(d=d.index,d<c?(p.flags|=2,c):d):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return n&&p.alternate===null&&(p.flags|=2),p}function i(p,c,d,v){return c===null||c.tag!==6?(c=Va(d,p.mode,v),c.return=p,c):(c=a(c,d),c.return=p,c)}function o(p,c,d,v){var S=d.type;return S===Ie?h(p,c,d.props.children,v,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zn&&vi(S)===c.type)?(v=a(c,d.props),v.ref=gs(p,c,d),v.return=p,v):(v=Pt(d.type,d.key,d.props,null,p.mode,v),v.ref=gs(p,c,d),v.return=p,v)}function u(p,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ka(d,p.mode,v),c.return=p,c):(c=a(c,d.children||[]),c.return=p,c)}function h(p,c,d,v,S){return c===null||c.tag!==7?(c=Ee(d,p.mode,v,S),c.return=p,c):(c=a(c,d),c.return=p,c)}function g(p,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Va(""+c,p.mode,d),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case st:return d=Pt(c.type,c.key,c.props,null,p.mode,d),d.ref=gs(p,null,c),d.return=p,d;case De:return c=Ka(c,p.mode,d),c.return=p,c;case Zn:var v=c._init;return g(p,v(c._payload),d)}if(ys(c)||cs(c))return c=Ee(c,p.mode,d,null),c.return=p,c;ft(p,c)}return null}function f(p,c,d,v){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:i(p,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case st:return d.key===S?o(p,c,d,v):null;case De:return d.key===S?u(p,c,d,v):null;case Zn:return S=d._init,f(p,c,S(d._payload),v)}if(ys(d)||cs(d))return S!==null?null:h(p,c,d,v,null);ft(p,d)}return null}function y(p,c,d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(d)||null,i(c,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case st:return p=p.get(v.key===null?d:v.key)||null,o(c,p,v,S);case De:return p=p.get(v.key===null?d:v.key)||null,u(c,p,v,S);case Zn:var E=v._init;return y(p,c,d,E(v._payload),S)}if(ys(v)||cs(v))return p=p.get(d)||null,h(c,p,v,S,null);ft(c,v)}return null}function w(p,c,d,v){for(var S=null,E=null,x=c,T=c=0,W=null;x!==null&&T<d.length;T++){x.index>T?(W=x,x=null):W=x.sibling;var F=f(p,x,d[T],v);if(F===null){x===null&&(x=W);break}n&&x&&F.alternate===null&&e(p,x),c=r(F,c,T),E===null?S=F:E.sibling=F,E=F,x=W}if(T===d.length)return s(p,x),M&&ye(p,T),S;if(x===null){for(;T<d.length;T++)x=g(p,d[T],v),x!==null&&(c=r(x,c,T),E===null?S=x:E.sibling=x,E=x);return M&&ye(p,T),S}for(x=t(p,x);T<d.length;T++)W=y(x,p,T,d[T],v),W!==null&&(n&&W.alternate!==null&&x.delete(W.key===null?T:W.key),c=r(W,c,T),E===null?S=W:E.sibling=W,E=W);return n&&x.forEach(function(_n){return e(p,_n)}),M&&ye(p,T),S}function z(p,c,d,v){var S=cs(d);if(typeof S!="function")throw Error(m(150));if(d=S.call(d),d==null)throw Error(m(151));for(var E=S=null,x=c,T=c=0,W=null,F=d.next();x!==null&&!F.done;T++,F=d.next()){x.index>T?(W=x,x=null):W=x.sibling;var _n=f(p,x,F.value,v);if(_n===null){x===null&&(x=W);break}n&&x&&_n.alternate===null&&e(p,x),c=r(_n,c,T),E===null?S=_n:E.sibling=_n,E=_n,x=W}if(F.done)return s(p,x),M&&ye(p,T),S;if(x===null){for(;!F.done;T++,F=d.next())F=g(p,F.value,v),F!==null&&(c=r(F,c,T),E===null?S=F:E.sibling=F,E=F);return M&&ye(p,T),S}for(x=t(p,x);!F.done;T++,F=d.next())F=y(x,p,T,F.value,v),F!==null&&(n&&F.alternate!==null&&x.delete(F.key===null?T:F.key),c=r(F,c,T),E===null?S=F:E.sibling=F,E=F);return n&&x.forEach(function(is){return e(p,is)}),M&&ye(p,T),S}function A(p,c,d,v){if(typeof d=="object"&&d!==null&&d.type===Ie&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case st:n:{for(var S=d.key,E=c;E!==null;){if(E.key===S){if(S=d.type,S===Ie){if(E.tag===7){s(p,E.sibling),c=a(E,d.props.children),c.return=p,p=c;break n}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zn&&vi(S)===E.type){s(p,E.sibling),c=a(E,d.props),c.ref=gs(p,E,d),c.return=p,p=c;break n}s(p,E);break}else e(p,E);E=E.sibling}d.type===Ie?(c=Ee(d.props.children,p.mode,v,d.key),c.return=p,p=c):(v=Pt(d.type,d.key,d.props,null,p.mode,v),v.ref=gs(p,c,d),v.return=p,p=v)}return l(p);case De:n:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){s(p,c.sibling),c=a(c,d.children||[]),c.return=p,p=c;break n}else{s(p,c);break}else e(p,c);c=c.sibling}c=Ka(d,p.mode,v),c.return=p,p=c}return l(p);case Zn:return E=d._init,A(p,c,E(d._payload),v)}if(ys(d))return w(p,c,d,v);if(cs(d))return z(p,c,d,v);ft(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(s(p,c.sibling),c=a(c,d),c.return=p,p=c):(s(p,c),c=Va(d,p.mode,v),c.return=p,p=c),l(p)):s(p,c)}return A}var ns=sc(!0),tc=sc(!1),Vt=ge(null),Kt=null,We=null,il=null;function ol(){il=We=Kt=null}function cl(n){var e=Vt.current;O(Vt),n._currentValue=e}function kr(n,e,s){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),n===s)break;n=n.return}}function Ge(n,e){Kt=n,il=We=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function xn(n){var e=n._currentValue;if(il!==n)if(n={context:n,memoizedValue:e,next:null},We===null){if(Kt===null)throw Error(m(308));We=n,Kt.dependencies={lanes:0,firstContext:n}}else We=We.next=n;return e}var ke=null;function ul(n){ke===null?ke=[n]:ke.push(n)}function ac(n,e,s,t){var a=e.interleaved;return a===null?(s.next=s,ul(e)):(s.next=a.next,a.next=s),e.interleaved=s,Qn(n,t)}function Qn(n,e){n.lanes|=e;var s=n.alternate;for(s!==null&&(s.lanes|=e),s=n,n=n.return;n!==null;)n.childLanes|=e,s=n.alternate,s!==null&&(s.childLanes|=e),s=n,n=n.return;return s.tag===3?s.stateNode:null}var Jn=!1;function pl(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Kn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ie(n,e,s){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,R&2){var a=t.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e,Qn(n,s)}return a=t.interleaved,a===null?(e.next=e,ul(t)):(e.next=a.next,a.next=e),t.interleaved=e,Qn(n,s)}function Ct(n,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194240)!==0)){var t=e.lanes;t&=n.pendingLanes,s|=t,e.lanes=s,Xr(n,s)}}function mi(n,e){var s=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,s===t)){var a=null,r=null;if(s=s.firstBaseUpdate,s!==null){do{var l={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};r===null?a=r=l:r=r.next=l,s=s.next}while(s!==null);r===null?a=r=e:r=r.next=e}else a=r=e;s={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:t.shared,effects:t.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=e:n.next=e,s.lastBaseUpdate=e}function qt(n,e,s,t){var a=n.updateQueue;Jn=!1;var r=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var o=i,u=o.next;o.next=null,l===null?r=u:l.next=u,l=o;var h=n.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==l&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=o))}if(r!==null){var g=a.baseState;l=0,h=u=o=null,i=r;do{var f=i.lane,y=i.eventTime;if((t&f)===f){h!==null&&(h=h.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});n:{var w=n,z=i;switch(f=e,y=s,z.tag){case 1:if(w=z.payload,typeof w=="function"){g=w.call(y,g,f);break n}g=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=z.payload,f=typeof w=="function"?w.call(y,g,f):w,f==null)break n;g=U({},g,f);break n;case 2:Jn=!0}}i.callback!==null&&i.lane!==0&&(n.flags|=64,f=a.effects,f===null?a.effects=[i]:f.push(i))}else y={eventTime:y,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=y,o=g):h=h.next=y,l|=f;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;f=i,i=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(h===null&&(o=g),a.baseState=o,a.firstBaseUpdate=u,a.lastBaseUpdate=h,e=a.shared.interleaved,e!==null){a=e;do l|=a.lane,a=a.next;while(a!==e)}else r===null&&(a.shared.lanes=0);Ne|=l,n.lanes=l,n.memoizedState=g}}function yi(n,e,s){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var t=n[e],a=t.callback;if(a!==null){if(t.callback=null,t=s,typeof a!="function")throw Error(m(191,a));a.call(t)}}}var Js={},jn=ge(Js),Ws=ge(Js),Vs=ge(Js);function Se(n){if(n===Js)throw Error(m(174));return n}function dl(n,e){switch(D(Vs,e),D(Ws,n),D(jn,Js),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:er(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=er(e,n)}O(jn),D(jn,e)}function es(){O(jn),O(Ws),O(Vs)}function lc(n){Se(Vs.current);var e=Se(jn.current),s=er(e,n.type);e!==s&&(D(Ws,n),D(jn,s))}function fl(n){Ws.current===n&&(O(jn),O(Ws))}var B=ge(0);function $t(n){for(var e=n;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ma=[];function gl(){for(var n=0;n<Ma.length;n++)Ma[n]._workInProgressVersionPrimary=null;Ma.length=0}var Et=Gn.ReactCurrentDispatcher,Ba=Gn.ReactCurrentBatchConfig,_e=0,j=null,$=null,G=null,Qt=!1,Ts=!1,Ks=0,Zp=0;function nn(){throw Error(m(321))}function hl(n,e){if(e===null)return!1;for(var s=0;s<e.length&&s<n.length;s++)if(!In(n[s],e[s]))return!1;return!0}function vl(n,e,s,t,a,r){if(_e=r,j=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Et.current=n===null||n.memoizedState===null?ed:sd,n=s(t,a),Ts){r=0;do{if(Ts=!1,Ks=0,25<=r)throw Error(m(301));r+=1,G=$=null,e.updateQueue=null,Et.current=td,n=s(t,a)}while(Ts)}if(Et.current=Yt,e=$!==null&&$.next!==null,_e=0,G=$=j=null,Qt=!1,e)throw Error(m(300));return n}function ml(){var n=Ks!==0;return Ks=0,n}function An(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?j.memoizedState=G=n:G=G.next=n,G}function Tn(){if($===null){var n=j.alternate;n=n!==null?n.memoizedState:null}else n=$.next;var e=G===null?j.memoizedState:G.next;if(e!==null)G=e,$=n;else{if(n===null)throw Error(m(310));$=n,n={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},G===null?j.memoizedState=G=n:G=G.next=n}return G}function qs(n,e){return typeof e=="function"?e(n):e}function ja(n){var e=Tn(),s=e.queue;if(s===null)throw Error(m(311));s.lastRenderedReducer=n;var t=$,a=t.baseQueue,r=s.pending;if(r!==null){if(a!==null){var l=a.next;a.next=r.next,r.next=l}t.baseQueue=a=r,s.pending=null}if(a!==null){r=a.next,t=t.baseState;var i=l=null,o=null,u=r;do{var h=u.lane;if((_e&h)===h)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:n(t,u.action);else{var g={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(i=o=g,l=t):o=o.next=g,j.lanes|=h,Ne|=h}u=u.next}while(u!==null&&u!==r);o===null?l=t:o.next=i,In(t,e.memoizedState)||(un=!0),e.memoizedState=t,e.baseState=l,e.baseQueue=o,s.lastRenderedState=t}if(n=s.interleaved,n!==null){a=n;do r=a.lane,j.lanes|=r,Ne|=r,a=a.next;while(a!==n)}else a===null&&(s.lanes=0);return[e.memoizedState,s.dispatch]}function Ua(n){var e=Tn(),s=e.queue;if(s===null)throw Error(m(311));s.lastRenderedReducer=n;var t=s.dispatch,a=s.pending,r=e.memoizedState;if(a!==null){s.pending=null;var l=a=a.next;do r=n(r,l.action),l=l.next;while(l!==a);In(r,e.memoizedState)||(un=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),s.lastRenderedState=r}return[r,t]}function ic(){}function oc(n,e){var s=j,t=Tn(),a=e(),r=!In(t.memoizedState,a);if(r&&(t.memoizedState=a,un=!0),t=t.queue,yl(pc.bind(null,s,t,n),[n]),t.getSnapshot!==e||r||G!==null&&G.memoizedState.tag&1){if(s.flags|=2048,$s(9,uc.bind(null,s,t,a,e),void 0,null),X===null)throw Error(m(349));_e&30||cc(s,e,a)}return a}function cc(n,e,s){n.flags|=16384,n={getSnapshot:e,value:s},e=j.updateQueue,e===null?(e={lastEffect:null,stores:null},j.updateQueue=e,e.stores=[n]):(s=e.stores,s===null?e.stores=[n]:s.push(n))}function uc(n,e,s,t){e.value=s,e.getSnapshot=t,dc(e)&&fc(n)}function pc(n,e,s){return s(function(){dc(e)&&fc(n)})}function dc(n){var e=n.getSnapshot;n=n.value;try{var s=e();return!In(n,s)}catch{return!0}}function fc(n){var e=Qn(n,1);e!==null&&Dn(e,n,1,-1)}function wi(n){var e=An();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qs,lastRenderedState:n},e.queue=n,n=n.dispatch=nd.bind(null,j,n),[e.memoizedState,n]}function $s(n,e,s,t){return n={tag:n,create:e,destroy:s,deps:t,next:null},e=j.updateQueue,e===null?(e={lastEffect:null,stores:null},j.updateQueue=e,e.lastEffect=n.next=n):(s=e.lastEffect,s===null?e.lastEffect=n.next=n:(t=s.next,s.next=n,n.next=t,e.lastEffect=n)),n}function gc(){return Tn().memoizedState}function xt(n,e,s,t){var a=An();j.flags|=n,a.memoizedState=$s(1|e,s,void 0,t===void 0?null:t)}function ia(n,e,s,t){var a=Tn();t=t===void 0?null:t;var r=void 0;if($!==null){var l=$.memoizedState;if(r=l.destroy,t!==null&&hl(t,l.deps)){a.memoizedState=$s(e,s,r,t);return}}j.flags|=n,a.memoizedState=$s(1|e,s,r,t)}function zi(n,e){return xt(8390656,8,n,e)}function yl(n,e){return ia(2048,8,n,e)}function hc(n,e){return ia(4,2,n,e)}function vc(n,e){return ia(4,4,n,e)}function mc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function yc(n,e,s){return s=s!=null?s.concat([n]):null,ia(4,4,mc.bind(null,e,n),s)}function wl(){}function wc(n,e){var s=Tn();e=e===void 0?null:e;var t=s.memoizedState;return t!==null&&e!==null&&hl(e,t[1])?t[0]:(s.memoizedState=[n,e],n)}function zc(n,e){var s=Tn();e=e===void 0?null:e;var t=s.memoizedState;return t!==null&&e!==null&&hl(e,t[1])?t[0]:(n=n(),s.memoizedState=[n,e],n)}function kc(n,e,s){return _e&21?(In(s,e)||(s=To(),j.lanes|=s,Ne|=s,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=s)}function Jp(n,e){var s=L;L=s!==0&&4>s?s:4,n(!0);var t=Ba.transition;Ba.transition={};try{n(!1),e()}finally{L=s,Ba.transition=t}}function Sc(){return Tn().memoizedState}function bp(n,e,s){var t=ce(n);if(s={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null},Cc(n))Ec(e,s);else if(s=ac(n,e,s,t),s!==null){var a=rn();Dn(s,n,t,a),xc(s,e,t)}}function nd(n,e,s){var t=ce(n),a={lane:t,action:s,hasEagerState:!1,eagerState:null,next:null};if(Cc(n))Ec(e,a);else{var r=n.alternate;if(n.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var l=e.lastRenderedState,i=r(l,s);if(a.hasEagerState=!0,a.eagerState=i,In(i,l)){var o=e.interleaved;o===null?(a.next=a,ul(e)):(a.next=o.next,o.next=a),e.interleaved=a;return}}catch{}finally{}s=ac(n,e,a,t),s!==null&&(a=rn(),Dn(s,n,t,a),xc(s,e,t))}}function Cc(n){var e=n.alternate;return n===j||e!==null&&e===j}function Ec(n,e){Ts=Qt=!0;var s=n.pending;s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e}function xc(n,e,s){if(s&4194240){var t=e.lanes;t&=n.pendingLanes,s|=t,e.lanes=s,Xr(n,s)}}var Yt={readContext:xn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},ed={readContext:xn,useCallback:function(n,e){return An().memoizedState=[n,e===void 0?null:e],n},useContext:xn,useEffect:zi,useImperativeHandle:function(n,e,s){return s=s!=null?s.concat([n]):null,xt(4194308,4,mc.bind(null,e,n),s)},useLayoutEffect:function(n,e){return xt(4194308,4,n,e)},useInsertionEffect:function(n,e){return xt(4,2,n,e)},useMemo:function(n,e){var s=An();return e=e===void 0?null:e,n=n(),s.memoizedState=[n,e],n},useReducer:function(n,e,s){var t=An();return e=s!==void 0?s(e):e,t.memoizedState=t.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},t.queue=n,n=n.dispatch=bp.bind(null,j,n),[t.memoizedState,n]},useRef:function(n){var e=An();return n={current:n},e.memoizedState=n},useState:wi,useDebugValue:wl,useDeferredValue:function(n){return An().memoizedState=n},useTransition:function(){var n=wi(!1),e=n[0];return n=Jp.bind(null,n[1]),An().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,s){var t=j,a=An();if(M){if(s===void 0)throw Error(m(407));s=s()}else{if(s=e(),X===null)throw Error(m(349));_e&30||cc(t,e,s)}a.memoizedState=s;var r={value:s,getSnapshot:e};return a.queue=r,zi(pc.bind(null,t,r,n),[n]),t.flags|=2048,$s(9,uc.bind(null,t,r,s,e),void 0,null),s},useId:function(){var n=An(),e=X.identifierPrefix;if(M){var s=Vn,t=Wn;s=(t&~(1<<32-Ln(t)-1)).toString(32)+s,e=":"+e+"R"+s,s=Ks++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=Zp++,e=":"+e+"r"+s.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},sd={readContext:xn,useCallback:wc,useContext:xn,useEffect:yl,useImperativeHandle:yc,useInsertionEffect:hc,useLayoutEffect:vc,useMemo:zc,useReducer:ja,useRef:gc,useState:function(){return ja(qs)},useDebugValue:wl,useDeferredValue:function(n){var e=Tn();return kc(e,$.memoizedState,n)},useTransition:function(){var n=ja(qs)[0],e=Tn().memoizedState;return[n,e]},useMutableSource:ic,useSyncExternalStore:oc,useId:Sc,unstable_isNewReconciler:!1},td={readContext:xn,useCallback:wc,useContext:xn,useEffect:yl,useImperativeHandle:yc,useInsertionEffect:hc,useLayoutEffect:vc,useMemo:zc,useReducer:Ua,useRef:gc,useState:function(){return Ua(qs)},useDebugValue:wl,useDeferredValue:function(n){var e=Tn();return $===null?e.memoizedState=n:kc(e,$.memoizedState,n)},useTransition:function(){var n=Ua(qs)[0],e=Tn().memoizedState;return[n,e]},useMutableSource:ic,useSyncExternalStore:oc,useId:Sc,unstable_isNewReconciler:!1};function Pn(n,e){if(n&&n.defaultProps){e=U({},e),n=n.defaultProps;for(var s in n)e[s]===void 0&&(e[s]=n[s]);return e}return e}function Sr(n,e,s,t){e=n.memoizedState,s=s(t,e),s=s==null?e:U({},e,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var oa={isMounted:function(n){return(n=n._reactInternals)?Re(n)===n:!1},enqueueSetState:function(n,e,s){n=n._reactInternals;var t=rn(),a=ce(n),r=Kn(t,a);r.payload=e,s!=null&&(r.callback=s),e=ie(n,r,a),e!==null&&(Dn(e,n,a,t),Ct(e,n,a))},enqueueReplaceState:function(n,e,s){n=n._reactInternals;var t=rn(),a=ce(n),r=Kn(t,a);r.tag=1,r.payload=e,s!=null&&(r.callback=s),e=ie(n,r,a),e!==null&&(Dn(e,n,a,t),Ct(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var s=rn(),t=ce(n),a=Kn(s,t);a.tag=2,e!=null&&(a.callback=e),e=ie(n,a,t),e!==null&&(Dn(e,n,t,s),Ct(e,n,t))}};function ki(n,e,s,t,a,r,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,r,l):e.prototype&&e.prototype.isPureReactComponent?!Bs(s,t)||!Bs(a,r):!0}function Tc(n,e,s){var t=!1,a=de,r=e.contextType;return typeof r=="object"&&r!==null?r=xn(r):(a=dn(e)?xe:tn.current,t=e.contextTypes,r=(t=t!=null)?Je(n,a):de),e=new e(s,r),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oa,n.stateNode=e,e._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=r),e}function Si(n,e,s,t){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,t),e.state!==n&&oa.enqueueReplaceState(e,e.state,null)}function Cr(n,e,s,t){var a=n.stateNode;a.props=s,a.state=n.memoizedState,a.refs={},pl(n);var r=e.contextType;typeof r=="object"&&r!==null?a.context=xn(r):(r=dn(e)?xe:tn.current,a.context=Je(n,r)),a.state=n.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Sr(n,e,r,s),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&oa.enqueueReplaceState(a,a.state,null),qt(n,s,a,t),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function ss(n,e){try{var s="",t=e;do s+=Ru(t),t=t.return;while(t);var a=s}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:n,source:e,stack:a,digest:null}}function Ha(n,e,s){return{value:n,source:null,stack:s??null,digest:e??null}}function Er(n,e){try{console.error(e.value)}catch(s){setTimeout(function(){throw s})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function _c(n,e,s){s=Kn(-1,s),s.tag=3,s.payload={element:null};var t=e.value;return s.callback=function(){Xt||(Xt=!0,Ir=t),Er(n,e)},s}function Nc(n,e,s){s=Kn(-1,s),s.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var a=e.value;s.payload=function(){return t(a)},s.callback=function(){Er(n,e)}}var r=n.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(s.callback=function(){Er(n,e),typeof t!="function"&&(oe===null?oe=new Set([this]):oe.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),s}function Ci(n,e,s){var t=n.pingCache;if(t===null){t=n.pingCache=new ad;var a=new Set;t.set(e,a)}else a=t.get(e),a===void 0&&(a=new Set,t.set(e,a));a.has(s)||(a.add(s),n=yd.bind(null,n,e,s),e.then(n,n))}function Ei(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function xi(n,e,s,t,a){return n.mode&1?(n.flags|=65536,n.lanes=a,n):(n===e?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(e=Kn(-1,1),e.tag=2,ie(s,e,1))),s.lanes|=1),n)}var rd=Gn.ReactCurrentOwner,un=!1;function an(n,e,s,t){e.child=n===null?tc(e,null,s,t):ns(e,n.child,s,t)}function Ti(n,e,s,t,a){s=s.render;var r=e.ref;return Ge(e,a),t=vl(n,e,s,t,r,a),s=ml(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Yn(n,e,a)):(M&&s&&al(e),e.flags|=1,an(n,e,t,a),e.child)}function _i(n,e,s,t,a){if(n===null){var r=s.type;return typeof r=="function"&&!_l(r)&&r.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(e.tag=15,e.type=r,Pc(n,e,r,t,a)):(n=Pt(s.type,null,t,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(r=n.child,!(n.lanes&a)){var l=r.memoizedProps;if(s=s.compare,s=s!==null?s:Bs,s(l,t)&&n.ref===e.ref)return Yn(n,e,a)}return e.flags|=1,n=ue(r,t),n.ref=e.ref,n.return=e,e.child=n}function Pc(n,e,s,t,a){if(n!==null){var r=n.memoizedProps;if(Bs(r,t)&&n.ref===e.ref)if(un=!1,e.pendingProps=t=r,(n.lanes&a)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Yn(n,e,a)}return xr(n,e,s,t,a)}function Fc(n,e,s){var t=e.pendingProps,a=t.children,r=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Ke,gn),gn|=s;else{if(!(s&1073741824))return n=r!==null?r.baseLanes|s:s,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,D(Ke,gn),gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=r!==null?r.baseLanes:s,D(Ke,gn),gn|=t}else r!==null?(t=r.baseLanes|s,e.memoizedState=null):t=s,D(Ke,gn),gn|=t;return an(n,e,a,s),e.child}function Rc(n,e){var s=e.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(e.flags|=512,e.flags|=2097152)}function xr(n,e,s,t,a){var r=dn(s)?xe:tn.current;return r=Je(e,r),Ge(e,a),s=vl(n,e,s,t,r,a),t=ml(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Yn(n,e,a)):(M&&t&&al(e),e.flags|=1,an(n,e,s,a),e.child)}function Ni(n,e,s,t,a){if(dn(s)){var r=!0;Ut(e)}else r=!1;if(Ge(e,a),e.stateNode===null)Tt(n,e),Tc(e,s,t),Cr(e,s,t,a),t=!0;else if(n===null){var l=e.stateNode,i=e.memoizedProps;l.props=i;var o=l.context,u=s.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=dn(s)?xe:tn.current,u=Je(e,u));var h=s.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==t||o!==u)&&Si(e,l,t,u),Jn=!1;var f=e.memoizedState;l.state=f,qt(e,t,l,a),o=e.memoizedState,i!==t||f!==o||pn.current||Jn?(typeof h=="function"&&(Sr(e,s,h,t),o=e.memoizedState),(i=Jn||ki(e,s,i,t,f,o,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=o),l.props=t,l.state=o,l.context=u,t=i):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{l=e.stateNode,rc(n,e),i=e.memoizedProps,u=e.type===e.elementType?i:Pn(e.type,i),l.props=u,g=e.pendingProps,f=l.context,o=s.contextType,typeof o=="object"&&o!==null?o=xn(o):(o=dn(s)?xe:tn.current,o=Je(e,o));var y=s.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==g||f!==o)&&Si(e,l,t,o),Jn=!1,f=e.memoizedState,l.state=f,qt(e,t,l,a);var w=e.memoizedState;i!==g||f!==w||pn.current||Jn?(typeof y=="function"&&(Sr(e,s,y,t),w=e.memoizedState),(u=Jn||ki(e,s,u,t,f,w,o)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,w,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,w,o)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=w),l.props=t,l.state=w,l.context=o,t=u):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),t=!1)}return Tr(n,e,s,t,r,a)}function Tr(n,e,s,t,a,r){Rc(n,e);var l=(e.flags&128)!==0;if(!t&&!l)return a&&fi(e,s,!1),Yn(n,e,r);t=e.stateNode,rd.current=e;var i=l&&typeof s.getDerivedStateFromError!="function"?null:t.render();return e.flags|=1,n!==null&&l?(e.child=ns(e,n.child,null,r),e.child=ns(e,null,i,r)):an(n,e,i,r),e.memoizedState=t.state,a&&fi(e,s,!0),e.child}function Lc(n){var e=n.stateNode;e.pendingContext?di(n,e.pendingContext,e.pendingContext!==e.context):e.context&&di(n,e.context,!1),dl(n,e.containerInfo)}function Pi(n,e,s,t,a){return be(),ll(a),e.flags|=256,an(n,e,s,t),e.child}var _r={dehydrated:null,treeContext:null,retryLane:0};function Nr(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dc(n,e,s){var t=e.pendingProps,a=B.current,r=!1,l=(e.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(a&2)!==0),i?(r=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),D(B,a&1),n===null)return zr(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=t.children,n=t.fallback,r?(t=e.mode,r=e.child,l={mode:"hidden",children:l},!(t&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=pa(l,t,0,null),n=Ee(n,t,s,null),r.return=e,n.return=e,r.sibling=n,e.child=r,e.child.memoizedState=Nr(s),e.memoizedState=_r,n):zl(e,l));if(a=n.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return ld(n,e,l,t,i,a,s);if(r){r=t.fallback,l=e.mode,a=n.child,i=a.sibling;var o={mode:"hidden",children:t.children};return!(l&1)&&e.child!==a?(t=e.child,t.childLanes=0,t.pendingProps=o,e.deletions=null):(t=ue(a,o),t.subtreeFlags=a.subtreeFlags&14680064),i!==null?r=ue(i,r):(r=Ee(r,l,s,null),r.flags|=2),r.return=e,t.return=e,t.sibling=r,e.child=t,t=r,r=e.child,l=n.child.memoizedState,l=l===null?Nr(s):{baseLanes:l.baseLanes|s,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=n.childLanes&~s,e.memoizedState=_r,t}return r=n.child,n=r.sibling,t=ue(r,{mode:"visible",children:t.children}),!(e.mode&1)&&(t.lanes=s),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t}function zl(n,e){return e=pa({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function gt(n,e,s,t){return t!==null&&ll(t),ns(e,n.child,null,s),n=zl(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ld(n,e,s,t,a,r,l){if(s)return e.flags&256?(e.flags&=-257,t=Ha(Error(m(422))),gt(n,e,l,t)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(r=t.fallback,a=e.mode,t=pa({mode:"visible",children:t.children},a,0,null),r=Ee(r,a,l,null),r.flags|=2,t.return=e,r.return=e,t.sibling=r,e.child=t,e.mode&1&&ns(e,n.child,null,l),e.child.memoizedState=Nr(l),e.memoizedState=_r,r);if(!(e.mode&1))return gt(n,e,l,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var i=t.dgst;return t=i,r=Error(m(419)),t=Ha(r,t,void 0),gt(n,e,l,t)}if(i=(l&n.childLanes)!==0,un||i){if(t=X,t!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|l)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,Qn(n,a),Dn(t,n,a,-1))}return Tl(),t=Ha(Error(m(421))),gt(n,e,l,t)}return a.data==="$?"?(e.flags|=128,e.child=n.child,e=wd.bind(null,n),a._reactRetry=e,null):(n=r.treeContext,hn=le(a.nextSibling),vn=e,M=!0,Rn=null,n!==null&&(kn[Sn++]=Wn,kn[Sn++]=Vn,kn[Sn++]=Te,Wn=n.id,Vn=n.overflow,Te=e),e=zl(e,t.children),e.flags|=4096,e)}function Fi(n,e,s){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),kr(n.return,e,s)}function Wa(n,e,s,t,a){var r=n.memoizedState;r===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:s,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=t,r.tail=s,r.tailMode=a)}function Ic(n,e,s){var t=e.pendingProps,a=t.revealOrder,r=t.tail;if(an(n,e,t.children,s),t=B.current,t&2)t=t&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fi(n,s,e);else if(n.tag===19)Fi(n,s,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(D(B,t),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(s=e.child,a=null;s!==null;)n=s.alternate,n!==null&&$t(n)===null&&(a=s),s=s.sibling;s=a,s===null?(a=e.child,e.child=null):(a=s.sibling,s.sibling=null),Wa(e,!1,a,s,r);break;case"backwards":for(s=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&$t(n)===null){e.child=a;break}n=a.sibling,a.sibling=s,s=a,a=n}Wa(e,!0,s,null,r);break;case"together":Wa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tt(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yn(n,e,s){if(n!==null&&(e.dependencies=n.dependencies),Ne|=e.lanes,!(s&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(m(153));if(e.child!==null){for(n=e.child,s=ue(n,n.pendingProps),e.child=s,s.return=e;n.sibling!==null;)n=n.sibling,s=s.sibling=ue(n,n.pendingProps),s.return=e;s.sibling=null}return e.child}function id(n,e,s){switch(e.tag){case 3:Lc(e),be();break;case 5:lc(e);break;case 1:dn(e.type)&&Ut(e);break;case 4:dl(e,e.stateNode.containerInfo);break;case 10:var t=e.type._context,a=e.memoizedProps.value;D(Vt,t._currentValue),t._currentValue=a;break;case 13:if(t=e.memoizedState,t!==null)return t.dehydrated!==null?(D(B,B.current&1),e.flags|=128,null):s&e.child.childLanes?Dc(n,e,s):(D(B,B.current&1),n=Yn(n,e,s),n!==null?n.sibling:null);D(B,B.current&1);break;case 19:if(t=(s&e.childLanes)!==0,n.flags&128){if(t)return Ic(n,e,s);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),D(B,B.current),t)break;return null;case 22:case 23:return e.lanes=0,Fc(n,e,s)}return Yn(n,e,s)}var Oc,Pr,Ac,Mc;Oc=function(n,e){for(var s=e.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Pr=function(){};Ac=function(n,e,s,t){var a=n.memoizedProps;if(a!==t){n=e.stateNode,Se(jn.current);var r=null;switch(s){case"input":a=Za(n,a),t=Za(n,t),r=[];break;case"select":a=U({},a,{value:void 0}),t=U({},t,{value:void 0}),r=[];break;case"textarea":a=nr(n,a),t=nr(n,t),r=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=Bt)}sr(s,t);var l;s=null;for(u in a)if(!t.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(s||(s={}),s[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rs.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in t){var o=t[u];if(i=a!=null?a[u]:void 0,t.hasOwnProperty(u)&&o!==i&&(o!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(s||(s={}),s[l]="");for(l in o)o.hasOwnProperty(l)&&i[l]!==o[l]&&(s||(s={}),s[l]=o[l])}else s||(r||(r=[]),r.push(u,s)),s=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,i=i?i.__html:void 0,o!=null&&i!==o&&(r=r||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rs.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&I("scroll",n),r||i===o||(r=[])):(r=r||[]).push(u,o))}s&&(r=r||[]).push("style",s);var u=r;(e.updateQueue=u)&&(e.flags|=4)}};Mc=function(n,e,s,t){s!==t&&(e.flags|=4)};function hs(n,e){if(!M)switch(n.tailMode){case"hidden":e=n.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,s=0,t=0;if(e)for(var a=n.child;a!==null;)s|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)s|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=t,n.childLanes=s,e}function od(n,e,s){var t=e.pendingProps;switch(rl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return dn(e.type)&&jt(),en(e),null;case 3:return t=e.stateNode,es(),O(pn),O(tn),gl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(dt(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Mr(Rn),Rn=null))),Pr(n,e),en(e),null;case 5:fl(e);var a=Se(Vs.current);if(s=e.type,n!==null&&e.stateNode!=null)Ac(n,e,s,t,a),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!t){if(e.stateNode===null)throw Error(m(166));return en(e),null}if(n=Se(jn.current),dt(e)){t=e.stateNode,s=e.type;var r=e.memoizedProps;switch(t[Mn]=e,t[Hs]=r,n=(e.mode&1)!==0,s){case"dialog":I("cancel",t),I("close",t);break;case"iframe":case"object":case"embed":I("load",t);break;case"video":case"audio":for(a=0;a<zs.length;a++)I(zs[a],t);break;case"source":I("error",t);break;case"img":case"image":case"link":I("error",t),I("load",t);break;case"details":I("toggle",t);break;case"input":jl(t,r),I("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},I("invalid",t);break;case"textarea":Hl(t,r),I("invalid",t)}sr(s,r),a=null;for(var l in r)if(r.hasOwnProperty(l)){var i=r[l];l==="children"?typeof i=="string"?t.textContent!==i&&(r.suppressHydrationWarning!==!0&&pt(t.textContent,i,n),a=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(r.suppressHydrationWarning!==!0&&pt(t.textContent,i,n),a=["children",""+i]):Rs.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&I("scroll",t)}switch(s){case"input":tt(t),Ul(t,r,!0);break;case"textarea":tt(t),Wl(t);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(t.onclick=Bt)}t=a,e.updateQueue=t,t!==null&&(e.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=uo(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=l.createElement(s,{is:t.is}):(n=l.createElement(s),s==="select"&&(l=n,t.multiple?l.multiple=!0:t.size&&(l.size=t.size))):n=l.createElementNS(n,s),n[Mn]=e,n[Hs]=t,Oc(n,e,!1,!1),e.stateNode=n;n:{switch(l=tr(s,t),s){case"dialog":I("cancel",n),I("close",n),a=t;break;case"iframe":case"object":case"embed":I("load",n),a=t;break;case"video":case"audio":for(a=0;a<zs.length;a++)I(zs[a],n);a=t;break;case"source":I("error",n),a=t;break;case"img":case"image":case"link":I("error",n),I("load",n),a=t;break;case"details":I("toggle",n),a=t;break;case"input":jl(n,t),a=Za(n,t),I("invalid",n);break;case"option":a=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},a=U({},t,{value:void 0}),I("invalid",n);break;case"textarea":Hl(n,t),a=nr(n,t),I("invalid",n);break;default:a=t}sr(s,a),i=a;for(r in i)if(i.hasOwnProperty(r)){var o=i[r];r==="style"?go(n,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&po(n,o)):r==="children"?typeof o=="string"?(s!=="textarea"||o!=="")&&Ls(n,o):typeof o=="number"&&Ls(n,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Rs.hasOwnProperty(r)?o!=null&&r==="onScroll"&&I("scroll",n):o!=null&&Kr(n,r,o,l))}switch(s){case"input":tt(n),Ul(n,t,!1);break;case"textarea":tt(n),Wl(n);break;case"option":t.value!=null&&n.setAttribute("value",""+pe(t.value));break;case"select":n.multiple=!!t.multiple,r=t.value,r!=null?qe(n,!!t.multiple,r,!1):t.defaultValue!=null&&qe(n,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=Bt)}switch(s){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}}t&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)Mc(n,e,n.memoizedProps,t);else{if(typeof t!="string"&&e.stateNode===null)throw Error(m(166));if(s=Se(Vs.current),Se(jn.current),dt(e)){if(t=e.stateNode,s=e.memoizedProps,t[Mn]=e,(r=t.nodeValue!==s)&&(n=vn,n!==null))switch(n.tag){case 3:pt(t.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&pt(t.nodeValue,s,(n.mode&1)!==0)}r&&(e.flags|=4)}else t=(s.nodeType===9?s:s.ownerDocument).createTextNode(t),t[Mn]=e,e.stateNode=t}return en(e),null;case 13:if(O(B),t=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(M&&hn!==null&&e.mode&1&&!(e.flags&128))ec(),be(),e.flags|=98560,r=!1;else if(r=dt(e),t!==null&&t.dehydrated!==null){if(n===null){if(!r)throw Error(m(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(m(317));r[Mn]=e}else be(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),r=!1}else Rn!==null&&(Mr(Rn),Rn=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=s,e):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(e.child.flags|=8192,e.mode&1&&(n===null||B.current&1?Q===0&&(Q=3):Tl())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return es(),Pr(n,e),n===null&&js(e.stateNode.containerInfo),en(e),null;case 10:return cl(e.type._context),en(e),null;case 17:return dn(e.type)&&jt(),en(e),null;case 19:if(O(B),r=e.memoizedState,r===null)return en(e),null;if(t=(e.flags&128)!==0,l=r.rendering,l===null)if(t)hs(r,!1);else{if(Q!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(l=$t(n),l!==null){for(e.flags|=128,hs(r,!1),t=l.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),e.subtreeFlags=0,t=s,s=e.child;s!==null;)r=s,n=t,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=n,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,n=l.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return D(B,B.current&1|2),e.child}n=n.sibling}r.tail!==null&&K()>ts&&(e.flags|=128,t=!0,hs(r,!1),e.lanes=4194304)}else{if(!t)if(n=$t(l),n!==null){if(e.flags|=128,t=!0,s=n.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),hs(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!M)return en(e),null}else 2*K()-r.renderingStartTime>ts&&s!==1073741824&&(e.flags|=128,t=!0,hs(r,!1),e.lanes=4194304);r.isBackwards?(l.sibling=e.child,e.child=l):(s=r.last,s!==null?s.sibling=l:e.child=l,r.last=l)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=K(),e.sibling=null,s=B.current,D(B,t?s&1|2:s&1),e):(en(e),null);case 22:case 23:return xl(),t=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(e.flags|=8192),t&&e.mode&1?gn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(m(156,e.tag))}function cd(n,e){switch(rl(e),e.tag){case 1:return dn(e.type)&&jt(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return es(),O(pn),O(tn),gl(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return fl(e),null;case 13:if(O(B),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(m(340));be()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return O(B),null;case 4:return es(),null;case 10:return cl(e.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var ht=!1,sn=!1,ud=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ve(n,e){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(t){H(n,e,t)}else s.current=null}function Fr(n,e,s){try{s()}catch(t){H(n,e,t)}}var Ri=!1;function pd(n,e){if(fr=Ot,n=Wo(),tl(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else n:{s=(s=n.ownerDocument)&&s.defaultView||window;var t=s.getSelection&&s.getSelection();if(t&&t.rangeCount!==0){s=t.anchorNode;var a=t.anchorOffset,r=t.focusNode;t=t.focusOffset;try{s.nodeType,r.nodeType}catch{s=null;break n}var l=0,i=-1,o=-1,u=0,h=0,g=n,f=null;e:for(;;){for(var y;g!==s||a!==0&&g.nodeType!==3||(i=l+a),g!==r||t!==0&&g.nodeType!==3||(o=l+t),g.nodeType===3&&(l+=g.nodeValue.length),(y=g.firstChild)!==null;)f=g,g=y;for(;;){if(g===n)break e;if(f===s&&++u===a&&(i=l),f===r&&++h===t&&(o=l),(y=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=y}s=i===-1||o===-1?null:{start:i,end:o}}else s=null}s=s||{start:0,end:0}}else s=null;for(gr={focusedElem:n,selectionRange:s},Ot=!1,k=e;k!==null;)if(e=k,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,k=n;else for(;k!==null;){e=k;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var z=w.memoizedProps,A=w.memoizedState,p=e.stateNode,c=p.getSnapshotBeforeUpdate(e.elementType===e.type?z:Pn(e.type,z),A);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(v){H(e,e.return,v)}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}return w=Ri,Ri=!1,w}function _s(n,e,s){var t=e.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&n)===n){var r=a.destroy;a.destroy=void 0,r!==void 0&&Fr(e,s,r)}a=a.next}while(a!==t)}}function ca(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var s=e=e.next;do{if((s.tag&n)===n){var t=s.create;s.destroy=t()}s=s.next}while(s!==e)}}function Rr(n){var e=n.ref;if(e!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof e=="function"?e(n):e.current=n}}function Bc(n){var e=n.alternate;e!==null&&(n.alternate=null,Bc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mn],delete e[Hs],delete e[mr],delete e[Qp],delete e[Yp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jc(n){return n.tag===5||n.tag===3||n.tag===4}function Li(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||jc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lr(n,e,s){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(n,e):s.insertBefore(n,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(n,s)):(e=s,e.appendChild(n)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=Bt));else if(t!==4&&(n=n.child,n!==null))for(Lr(n,e,s),n=n.sibling;n!==null;)Lr(n,e,s),n=n.sibling}function Dr(n,e,s){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?s.insertBefore(n,e):s.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(Dr(n,e,s),n=n.sibling;n!==null;)Dr(n,e,s),n=n.sibling}var Z=null,Fn=!1;function Xn(n,e,s){for(s=s.child;s!==null;)Uc(n,e,s),s=s.sibling}function Uc(n,e,s){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(ea,s)}catch{}switch(s.tag){case 5:sn||Ve(s,e);case 6:var t=Z,a=Fn;Z=null,Xn(n,e,s),Z=t,Fn=a,Z!==null&&(Fn?(n=Z,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):Z.removeChild(s.stateNode));break;case 18:Z!==null&&(Fn?(n=Z,s=s.stateNode,n.nodeType===8?Oa(n.parentNode,s):n.nodeType===1&&Oa(n,s),As(n)):Oa(Z,s.stateNode));break;case 4:t=Z,a=Fn,Z=s.stateNode.containerInfo,Fn=!0,Xn(n,e,s),Z=t,Fn=a;break;case 0:case 11:case 14:case 15:if(!sn&&(t=s.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var r=a,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&Fr(s,e,l),a=a.next}while(a!==t)}Xn(n,e,s);break;case 1:if(!sn&&(Ve(s,e),t=s.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=s.memoizedProps,t.state=s.memoizedState,t.componentWillUnmount()}catch(i){H(s,e,i)}Xn(n,e,s);break;case 21:Xn(n,e,s);break;case 22:s.mode&1?(sn=(t=sn)||s.memoizedState!==null,Xn(n,e,s),sn=t):Xn(n,e,s);break;default:Xn(n,e,s)}}function Di(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new ud),e.forEach(function(t){var a=zd.bind(null,n,t);s.has(t)||(s.add(t),t.then(a,a))})}}function Nn(n,e){var s=e.deletions;if(s!==null)for(var t=0;t<s.length;t++){var a=s[t];try{var r=n,l=e,i=l;n:for(;i!==null;){switch(i.tag){case 5:Z=i.stateNode,Fn=!1;break n;case 3:Z=i.stateNode.containerInfo,Fn=!0;break n;case 4:Z=i.stateNode.containerInfo,Fn=!0;break n}i=i.return}if(Z===null)throw Error(m(160));Uc(r,l,a),Z=null,Fn=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(u){H(a,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hc(e,n),e=e.sibling}function Hc(n,e){var s=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(e,n),On(n),t&4){try{_s(3,n,n.return),ca(3,n)}catch(z){H(n,n.return,z)}try{_s(5,n,n.return)}catch(z){H(n,n.return,z)}}break;case 1:Nn(e,n),On(n),t&512&&s!==null&&Ve(s,s.return);break;case 5:if(Nn(e,n),On(n),t&512&&s!==null&&Ve(s,s.return),n.flags&32){var a=n.stateNode;try{Ls(a,"")}catch(z){H(n,n.return,z)}}if(t&4&&(a=n.stateNode,a!=null)){var r=n.memoizedProps,l=s!==null?s.memoizedProps:r,i=n.type,o=n.updateQueue;if(n.updateQueue=null,o!==null)try{i==="input"&&r.type==="radio"&&r.name!=null&&oo(a,r),tr(i,l);var u=tr(i,r);for(l=0;l<o.length;l+=2){var h=o[l],g=o[l+1];h==="style"?go(a,g):h==="dangerouslySetInnerHTML"?po(a,g):h==="children"?Ls(a,g):Kr(a,h,g,u)}switch(i){case"input":Ja(a,r);break;case"textarea":co(a,r);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var y=r.value;y!=null?qe(a,!!r.multiple,y,!1):f!==!!r.multiple&&(r.defaultValue!=null?qe(a,!!r.multiple,r.defaultValue,!0):qe(a,!!r.multiple,r.multiple?[]:"",!1))}a[Hs]=r}catch(z){H(n,n.return,z)}}break;case 6:if(Nn(e,n),On(n),t&4){if(n.stateNode===null)throw Error(m(162));a=n.stateNode,r=n.memoizedProps;try{a.nodeValue=r}catch(z){H(n,n.return,z)}}break;case 3:if(Nn(e,n),On(n),t&4&&s!==null&&s.memoizedState.isDehydrated)try{As(e.containerInfo)}catch(z){H(n,n.return,z)}break;case 4:Nn(e,n),On(n);break;case 13:Nn(e,n),On(n),a=n.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(Cl=K())),t&4&&Di(n);break;case 22:if(h=s!==null&&s.memoizedState!==null,n.mode&1?(sn=(u=sn)||h,Nn(e,n),sn=u):Nn(e,n),On(n),t&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!h&&n.mode&1)for(k=n,h=n.child;h!==null;){for(g=k=h;k!==null;){switch(f=k,y=f.child,f.tag){case 0:case 11:case 14:case 15:_s(4,f,f.return);break;case 1:Ve(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){t=f,s=f.return;try{e=t,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(z){H(t,s,z)}}break;case 5:Ve(f,f.return);break;case 22:if(f.memoizedState!==null){Oi(g);continue}}y!==null?(y.return=f,k=y):Oi(g)}h=h.sibling}n:for(h=null,g=n;;){if(g.tag===5){if(h===null){h=g;try{a=g.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(i=g.stateNode,o=g.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=fo("display",l))}catch(z){H(n,n.return,z)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(z){H(n,n.return,z)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===n)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break n;for(;g.sibling===null;){if(g.return===null||g.return===n)break n;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Nn(e,n),On(n),t&4&&Di(n);break;case 21:break;default:Nn(e,n),On(n)}}function On(n){var e=n.flags;if(e&2){try{n:{for(var s=n.return;s!==null;){if(jc(s)){var t=s;break n}s=s.return}throw Error(m(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(Ls(a,""),t.flags&=-33);var r=Li(n);Dr(n,r,a);break;case 3:case 4:var l=t.stateNode.containerInfo,i=Li(n);Lr(n,i,l);break;default:throw Error(m(161))}}catch(o){H(n,n.return,o)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function dd(n,e,s){k=n,Wc(n)}function Wc(n,e,s){for(var t=(n.mode&1)!==0;k!==null;){var a=k,r=a.child;if(a.tag===22&&t){var l=a.memoizedState!==null||ht;if(!l){var i=a.alternate,o=i!==null&&i.memoizedState!==null||sn;i=ht;var u=sn;if(ht=l,(sn=o)&&!u)for(k=a;k!==null;)l=k,o=l.child,l.tag===22&&l.memoizedState!==null?Ai(a):o!==null?(o.return=l,k=o):Ai(a);for(;r!==null;)k=r,Wc(r),r=r.sibling;k=a,ht=i,sn=u}Ii(n)}else a.subtreeFlags&8772&&r!==null?(r.return=a,k=r):Ii(n)}}function Ii(n){for(;k!==null;){var e=k;if(e.flags&8772){var s=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||ca(5,e);break;case 1:var t=e.stateNode;if(e.flags&4&&!sn)if(s===null)t.componentDidMount();else{var a=e.elementType===e.type?s.memoizedProps:Pn(e.type,s.memoizedProps);t.componentDidUpdate(a,s.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&yi(e,r,t);break;case 3:var l=e.updateQueue;if(l!==null){if(s=null,e.child!==null)switch(e.child.tag){case 5:s=e.child.stateNode;break;case 1:s=e.child.stateNode}yi(e,l,s)}break;case 5:var i=e.stateNode;if(s===null&&e.flags&4){s=i;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&s.focus();break;case"img":o.src&&(s.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&As(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}sn||e.flags&512&&Rr(e)}catch(f){H(e,e.return,f)}}if(e===n){k=null;break}if(s=e.sibling,s!==null){s.return=e.return,k=s;break}k=e.return}}function Oi(n){for(;k!==null;){var e=k;if(e===n){k=null;break}var s=e.sibling;if(s!==null){s.return=e.return,k=s;break}k=e.return}}function Ai(n){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var s=e.return;try{ca(4,e)}catch(o){H(e,s,o)}break;case 1:var t=e.stateNode;if(typeof t.componentDidMount=="function"){var a=e.return;try{t.componentDidMount()}catch(o){H(e,a,o)}}var r=e.return;try{Rr(e)}catch(o){H(e,r,o)}break;case 5:var l=e.return;try{Rr(e)}catch(o){H(e,l,o)}}}catch(o){H(e,e.return,o)}if(e===n){k=null;break}var i=e.sibling;if(i!==null){i.return=e.return,k=i;break}k=e.return}}var fd=Math.ceil,Gt=Gn.ReactCurrentDispatcher,kl=Gn.ReactCurrentOwner,En=Gn.ReactCurrentBatchConfig,R=0,X=null,q=null,J=0,gn=0,Ke=ge(0),Q=0,Qs=null,Ne=0,ua=0,Sl=0,Ns=null,cn=null,Cl=0,ts=1/0,Un=null,Xt=!1,Ir=null,oe=null,vt=!1,se=null,Zt=0,Ps=0,Or=null,_t=-1,Nt=0;function rn(){return R&6?K():_t!==-1?_t:_t=K()}function ce(n){return n.mode&1?R&2&&J!==0?J&-J:Xp.transition!==null?(Nt===0&&(Nt=To()),Nt):(n=L,n!==0||(n=window.event,n=n===void 0?16:Do(n.type)),n):1}function Dn(n,e,s,t){if(50<Ps)throw Ps=0,Or=null,Error(m(185));Gs(n,s,t),(!(R&2)||n!==X)&&(n===X&&(!(R&2)&&(ua|=s),Q===4&&ne(n,J)),fn(n,t),s===1&&R===0&&!(e.mode&1)&&(ts=K()+500,la&&he()))}function fn(n,e){var s=n.callbackNode;Xu(n,e);var t=It(n,n===X?J:0);if(t===0)s!==null&&ql(s),n.callbackNode=null,n.callbackPriority=0;else if(e=t&-t,n.callbackPriority!==e){if(s!=null&&ql(s),e===1)n.tag===0?Gp(Mi.bind(null,n)):Jo(Mi.bind(null,n)),qp(function(){!(R&6)&&he()}),s=null;else{switch(_o(t)){case 1:s=Gr;break;case 4:s=Eo;break;case 16:s=Dt;break;case 536870912:s=xo;break;default:s=Dt}s=Xc(s,Vc.bind(null,n))}n.callbackPriority=e,n.callbackNode=s}}function Vc(n,e){if(_t=-1,Nt=0,R&6)throw Error(m(327));var s=n.callbackNode;if(Xe()&&n.callbackNode!==s)return null;var t=It(n,n===X?J:0);if(t===0)return null;if(t&30||t&n.expiredLanes||e)e=Jt(n,t);else{e=t;var a=R;R|=2;var r=qc();(X!==n||J!==e)&&(Un=null,ts=K()+500,Ce(n,e));do try{vd();break}catch(i){Kc(n,i)}while(!0);ol(),Gt.current=r,R=a,q!==null?e=0:(X=null,J=0,e=Q)}if(e!==0){if(e===2&&(a=or(n),a!==0&&(t=a,e=Ar(n,a))),e===1)throw s=Qs,Ce(n,0),ne(n,t),fn(n,K()),s;if(e===6)ne(n,t);else{if(a=n.current.alternate,!(t&30)&&!gd(a)&&(e=Jt(n,t),e===2&&(r=or(n),r!==0&&(t=r,e=Ar(n,r))),e===1))throw s=Qs,Ce(n,0),ne(n,t),fn(n,K()),s;switch(n.finishedWork=a,n.finishedLanes=t,e){case 0:case 1:throw Error(m(345));case 2:we(n,cn,Un);break;case 3:if(ne(n,t),(t&130023424)===t&&(e=Cl+500-K(),10<e)){if(It(n,0)!==0)break;if(a=n.suspendedLanes,(a&t)!==t){rn(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=vr(we.bind(null,n,cn,Un),e);break}we(n,cn,Un);break;case 4:if(ne(n,t),(t&4194240)===t)break;for(e=n.eventTimes,a=-1;0<t;){var l=31-Ln(t);r=1<<l,l=e[l],l>a&&(a=l),t&=~r}if(t=a,t=K()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*fd(t/1960))-t,10<t){n.timeoutHandle=vr(we.bind(null,n,cn,Un),t);break}we(n,cn,Un);break;case 5:we(n,cn,Un);break;default:throw Error(m(329))}}}return fn(n,K()),n.callbackNode===s?Vc.bind(null,n):null}function Ar(n,e){var s=Ns;return n.current.memoizedState.isDehydrated&&(Ce(n,e).flags|=256),n=Jt(n,e),n!==2&&(e=cn,cn=s,e!==null&&Mr(e)),n}function Mr(n){cn===null?cn=n:cn.push.apply(cn,n)}function gd(n){for(var e=n;;){if(e.flags&16384){var s=e.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var t=0;t<s.length;t++){var a=s[t],r=a.getSnapshot;a=a.value;try{if(!In(r(),a))return!1}catch{return!1}}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ne(n,e){for(e&=~Sl,e&=~ua,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var s=31-Ln(e),t=1<<s;n[s]=-1,e&=~t}}function Mi(n){if(R&6)throw Error(m(327));Xe();var e=It(n,0);if(!(e&1))return fn(n,K()),null;var s=Jt(n,e);if(n.tag!==0&&s===2){var t=or(n);t!==0&&(e=t,s=Ar(n,t))}if(s===1)throw s=Qs,Ce(n,0),ne(n,e),fn(n,K()),s;if(s===6)throw Error(m(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,we(n,cn,Un),fn(n,K()),null}function El(n,e){var s=R;R|=1;try{return n(e)}finally{R=s,R===0&&(ts=K()+500,la&&he())}}function Pe(n){se!==null&&se.tag===0&&!(R&6)&&Xe();var e=R;R|=1;var s=En.transition,t=L;try{if(En.transition=null,L=1,n)return n()}finally{L=t,En.transition=s,R=e,!(R&6)&&he()}}function xl(){gn=Ke.current,O(Ke)}function Ce(n,e){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,Kp(s)),q!==null)for(s=q.return;s!==null;){var t=s;switch(rl(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&jt();break;case 3:es(),O(pn),O(tn),gl();break;case 5:fl(t);break;case 4:es();break;case 13:O(B);break;case 19:O(B);break;case 10:cl(t.type._context);break;case 22:case 23:xl()}s=s.return}if(X=n,q=n=ue(n.current,null),J=gn=e,Q=0,Qs=null,Sl=ua=Ne=0,cn=Ns=null,ke!==null){for(e=0;e<ke.length;e++)if(s=ke[e],t=s.interleaved,t!==null){s.interleaved=null;var a=t.next,r=s.pending;if(r!==null){var l=r.next;r.next=a,t.next=l}s.pending=t}ke=null}return n}function Kc(n,e){do{var s=q;try{if(ol(),Et.current=Yt,Qt){for(var t=j.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Qt=!1}if(_e=0,G=$=j=null,Ts=!1,Ks=0,kl.current=null,s===null||s.return===null){Q=1,Qs=e,q=null;break}n:{var r=n,l=s.return,i=s,o=e;if(e=J,i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,h=i,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ei(l);if(y!==null){y.flags&=-257,xi(y,l,i,r,e),y.mode&1&&Ci(r,u,e),e=y,o=u;var w=e.updateQueue;if(w===null){var z=new Set;z.add(o),e.updateQueue=z}else w.add(o);break n}else{if(!(e&1)){Ci(r,u,e),Tl();break n}o=Error(m(426))}}else if(M&&i.mode&1){var A=Ei(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),xi(A,l,i,r,e),ll(ss(o,i));break n}}r=o=ss(o,i),Q!==4&&(Q=2),Ns===null?Ns=[r]:Ns.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var p=_c(r,o,e);mi(r,p);break n;case 1:i=o;var c=r.type,d=r.stateNode;if(!(r.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(oe===null||!oe.has(d)))){r.flags|=65536,e&=-e,r.lanes|=e;var v=Nc(r,i,e);mi(r,v);break n}}r=r.return}while(r!==null)}Qc(s)}catch(S){e=S,q===s&&s!==null&&(q=s=s.return);continue}break}while(!0)}function qc(){var n=Gt.current;return Gt.current=Yt,n===null?Yt:n}function Tl(){(Q===0||Q===3||Q===2)&&(Q=4),X===null||!(Ne&268435455)&&!(ua&268435455)||ne(X,J)}function Jt(n,e){var s=R;R|=2;var t=qc();(X!==n||J!==e)&&(Un=null,Ce(n,e));do try{hd();break}catch(a){Kc(n,a)}while(!0);if(ol(),R=s,Gt.current=t,q!==null)throw Error(m(261));return X=null,J=0,Q}function hd(){for(;q!==null;)$c(q)}function vd(){for(;q!==null&&!Hu();)$c(q)}function $c(n){var e=Gc(n.alternate,n,gn);n.memoizedProps=n.pendingProps,e===null?Qc(n):q=e,kl.current=null}function Qc(n){var e=n;do{var s=e.alternate;if(n=e.return,e.flags&32768){if(s=cd(s,e),s!==null){s.flags&=32767,q=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Q=6,q=null;return}}else if(s=od(s,e,gn),s!==null){q=s;return}if(e=e.sibling,e!==null){q=e;return}q=e=n}while(e!==null);Q===0&&(Q=5)}function we(n,e,s){var t=L,a=En.transition;try{En.transition=null,L=1,md(n,e,s,t)}finally{En.transition=a,L=t}return null}function md(n,e,s,t){do Xe();while(se!==null);if(R&6)throw Error(m(327));s=n.finishedWork;var a=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(m(177));n.callbackNode=null,n.callbackPriority=0;var r=s.lanes|s.childLanes;if(Zu(n,r),n===X&&(q=X=null,J=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||vt||(vt=!0,Xc(Dt,function(){return Xe(),null})),r=(s.flags&15990)!==0,s.subtreeFlags&15990||r){r=En.transition,En.transition=null;var l=L;L=1;var i=R;R|=4,kl.current=null,pd(n,s),Hc(s,n),Mp(gr),Ot=!!fr,gr=fr=null,n.current=s,dd(s),Wu(),R=i,L=l,En.transition=r}else n.current=s;if(vt&&(vt=!1,se=n,Zt=a),r=n.pendingLanes,r===0&&(oe=null),qu(s.stateNode),fn(n,K()),e!==null)for(t=n.onRecoverableError,s=0;s<e.length;s++)a=e[s],t(a.value,{componentStack:a.stack,digest:a.digest});if(Xt)throw Xt=!1,n=Ir,Ir=null,n;return Zt&1&&n.tag!==0&&Xe(),r=n.pendingLanes,r&1?n===Or?Ps++:(Ps=0,Or=n):Ps=0,he(),null}function Xe(){if(se!==null){var n=_o(Zt),e=En.transition,s=L;try{if(En.transition=null,L=16>n?16:n,se===null)var t=!1;else{if(n=se,se=null,Zt=0,R&6)throw Error(m(331));var a=R;for(R|=4,k=n.current;k!==null;){var r=k,l=r.child;if(k.flags&16){var i=r.deletions;if(i!==null){for(var o=0;o<i.length;o++){var u=i[o];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:_s(8,h,r)}var g=h.child;if(g!==null)g.return=h,k=g;else for(;k!==null;){h=k;var f=h.sibling,y=h.return;if(Bc(h),h===u){k=null;break}if(f!==null){f.return=y,k=f;break}k=y}}}var w=r.alternate;if(w!==null){var z=w.child;if(z!==null){w.child=null;do{var A=z.sibling;z.sibling=null,z=A}while(z!==null)}}k=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,k=l;else n:for(;k!==null;){if(r=k,r.flags&2048)switch(r.tag){case 0:case 11:case 15:_s(9,r,r.return)}var p=r.sibling;if(p!==null){p.return=r.return,k=p;break n}k=r.return}}var c=n.current;for(k=c;k!==null;){l=k;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,k=d;else n:for(l=c;k!==null;){if(i=k,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ca(9,i)}}catch(S){H(i,i.return,S)}if(i===l){k=null;break n}var v=i.sibling;if(v!==null){v.return=i.return,k=v;break n}k=i.return}}if(R=a,he(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(ea,n)}catch{}t=!0}return t}finally{L=s,En.transition=e}}return!1}function Bi(n,e,s){e=ss(s,e),e=_c(n,e,1),n=ie(n,e,1),e=rn(),n!==null&&(Gs(n,1,e),fn(n,e))}function H(n,e,s){if(n.tag===3)Bi(n,n,s);else for(;e!==null;){if(e.tag===3){Bi(e,n,s);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(oe===null||!oe.has(t))){n=ss(s,n),n=Nc(e,n,1),e=ie(e,n,1),n=rn(),e!==null&&(Gs(e,1,n),fn(e,n));break}}e=e.return}}function yd(n,e,s){var t=n.pingCache;t!==null&&t.delete(e),e=rn(),n.pingedLanes|=n.suspendedLanes&s,X===n&&(J&s)===s&&(Q===4||Q===3&&(J&130023424)===J&&500>K()-Cl?Ce(n,0):Sl|=s),fn(n,e)}function Yc(n,e){e===0&&(n.mode&1?(e=lt,lt<<=1,!(lt&130023424)&&(lt=4194304)):e=1);var s=rn();n=Qn(n,e),n!==null&&(Gs(n,e,s),fn(n,s))}function wd(n){var e=n.memoizedState,s=0;e!==null&&(s=e.retryLane),Yc(n,s)}function zd(n,e){var s=0;switch(n.tag){case 13:var t=n.stateNode,a=n.memoizedState;a!==null&&(s=a.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(m(314))}t!==null&&t.delete(e),Yc(n,s)}var Gc;Gc=function(n,e,s){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)un=!0;else{if(!(n.lanes&s)&&!(e.flags&128))return un=!1,id(n,e,s);un=!!(n.flags&131072)}else un=!1,M&&e.flags&1048576&&bo(e,Wt,e.index);switch(e.lanes=0,e.tag){case 2:var t=e.type;Tt(n,e),n=e.pendingProps;var a=Je(e,tn.current);Ge(e,s),a=vl(null,e,t,n,a,s);var r=ml();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(t)?(r=!0,Ut(e)):r=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,pl(e),a.updater=oa,e.stateNode=a,a._reactInternals=e,Cr(e,t,n,s),e=Tr(null,e,t,!0,r,s)):(e.tag=0,M&&r&&al(e),an(null,e,a,s),e=e.child),e;case 16:t=e.elementType;n:{switch(Tt(n,e),n=e.pendingProps,a=t._init,t=a(t._payload),e.type=t,a=e.tag=Sd(t),n=Pn(t,n),a){case 0:e=xr(null,e,t,n,s);break n;case 1:e=Ni(null,e,t,n,s);break n;case 11:e=Ti(null,e,t,n,s);break n;case 14:e=_i(null,e,t,Pn(t.type,n),s);break n}throw Error(m(306,t,""))}return e;case 0:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:Pn(t,a),xr(n,e,t,a,s);case 1:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:Pn(t,a),Ni(n,e,t,a,s);case 3:n:{if(Lc(e),n===null)throw Error(m(387));t=e.pendingProps,r=e.memoizedState,a=r.element,rc(n,e),qt(e,t,null,s);var l=e.memoizedState;if(t=l.element,r.isDehydrated)if(r={element:t,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){a=ss(Error(m(423)),e),e=Pi(n,e,t,s,a);break n}else if(t!==a){a=ss(Error(m(424)),e),e=Pi(n,e,t,s,a);break n}else for(hn=le(e.stateNode.containerInfo.firstChild),vn=e,M=!0,Rn=null,s=tc(e,null,t,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(be(),t===a){e=Yn(n,e,s);break n}an(n,e,t,s)}e=e.child}return e;case 5:return lc(e),n===null&&zr(e),t=e.type,a=e.pendingProps,r=n!==null?n.memoizedProps:null,l=a.children,hr(t,a)?l=null:r!==null&&hr(t,r)&&(e.flags|=32),Rc(n,e),an(n,e,l,s),e.child;case 6:return n===null&&zr(e),null;case 13:return Dc(n,e,s);case 4:return dl(e,e.stateNode.containerInfo),t=e.pendingProps,n===null?e.child=ns(e,null,t,s):an(n,e,t,s),e.child;case 11:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:Pn(t,a),Ti(n,e,t,a,s);case 7:return an(n,e,e.pendingProps,s),e.child;case 8:return an(n,e,e.pendingProps.children,s),e.child;case 12:return an(n,e,e.pendingProps.children,s),e.child;case 10:n:{if(t=e.type._context,a=e.pendingProps,r=e.memoizedProps,l=a.value,D(Vt,t._currentValue),t._currentValue=l,r!==null)if(In(r.value,l)){if(r.children===a.children&&!pn.current){e=Yn(n,e,s);break n}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){l=r.child;for(var o=i.firstContext;o!==null;){if(o.context===t){if(r.tag===1){o=Kn(-1,s&-s),o.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?o.next=o:(o.next=h.next,h.next=o),u.pending=o}}r.lanes|=s,o=r.alternate,o!==null&&(o.lanes|=s),kr(r.return,s,e),i.lanes|=s;break}o=o.next}}else if(r.tag===10)l=r.type===e.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(m(341));l.lanes|=s,i=l.alternate,i!==null&&(i.lanes|=s),kr(l,s,e),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===e){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}an(n,e,a.children,s),e=e.child}return e;case 9:return a=e.type,t=e.pendingProps.children,Ge(e,s),a=xn(a),t=t(a),e.flags|=1,an(n,e,t,s),e.child;case 14:return t=e.type,a=Pn(t,e.pendingProps),a=Pn(t.type,a),_i(n,e,t,a,s);case 15:return Pc(n,e,e.type,e.pendingProps,s);case 17:return t=e.type,a=e.pendingProps,a=e.elementType===t?a:Pn(t,a),Tt(n,e),e.tag=1,dn(t)?(n=!0,Ut(e)):n=!1,Ge(e,s),Tc(e,t,a),Cr(e,t,a,s),Tr(null,e,t,!0,n,s);case 19:return Ic(n,e,s);case 22:return Fc(n,e,s)}throw Error(m(156,e.tag))};function Xc(n,e){return Co(n,e)}function kd(n,e,s,t){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,e,s,t){return new kd(n,e,s,t)}function _l(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sd(n){if(typeof n=="function")return _l(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$r)return 11;if(n===Qr)return 14}return 2}function ue(n,e){var s=n.alternate;return s===null?(s=Cn(n.tag,e,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=e,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,e=n.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function Pt(n,e,s,t,a,r){var l=2;if(t=n,typeof n=="function")_l(n)&&(l=1);else if(typeof n=="string")l=5;else n:switch(n){case Ie:return Ee(s.children,a,r,e);case qr:l=8,a|=8;break;case Qa:return n=Cn(12,s,e,a|2),n.elementType=Qa,n.lanes=r,n;case Ya:return n=Cn(13,s,e,a),n.elementType=Ya,n.lanes=r,n;case Ga:return n=Cn(19,s,e,a),n.elementType=Ga,n.lanes=r,n;case ro:return pa(s,a,r,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case to:l=10;break n;case ao:l=9;break n;case $r:l=11;break n;case Qr:l=14;break n;case Zn:l=16,t=null;break n}throw Error(m(130,n==null?n:typeof n,""))}return e=Cn(l,s,e,a),e.elementType=n,e.type=t,e.lanes=r,e}function Ee(n,e,s,t){return n=Cn(7,n,t,e),n.lanes=s,n}function pa(n,e,s,t){return n=Cn(22,n,t,e),n.elementType=ro,n.lanes=s,n.stateNode={isHidden:!1},n}function Va(n,e,s){return n=Cn(6,n,null,e),n.lanes=s,n}function Ka(n,e,s){return e=Cn(4,n.children!==null?n.children:[],n.key,e),e.lanes=s,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Cd(n,e,s,t,a){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Nl(n,e,s,t,a,r,l,i,o){return n=new Cd(n,e,s,i,o),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Cn(3,null,null,e),n.current=r,r.stateNode=n,r.memoizedState={element:t,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(r),n}function Ed(n,e,s){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:t==null?null:""+t,children:n,containerInfo:e,implementation:s}}function Zc(n){if(!n)return de;n=n._reactInternals;n:{if(Re(n)!==n||n.tag!==1)throw Error(m(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(m(171))}if(n.tag===1){var s=n.type;if(dn(s))return Zo(n,s,e)}return e}function Jc(n,e,s,t,a,r,l,i,o){return n=Nl(s,t,!0,n,a,r,l,i,o),n.context=Zc(null),s=n.current,t=rn(),a=ce(s),r=Kn(t,a),r.callback=e??null,ie(s,r,a),n.current.lanes=a,Gs(n,a,t),fn(n,t),n}function da(n,e,s,t){var a=e.current,r=rn(),l=ce(a);return s=Zc(s),e.context===null?e.context=s:e.pendingContext=s,e=Kn(r,l),e.payload={element:n},t=t===void 0?null:t,t!==null&&(e.callback=t),n=ie(a,e,l),n!==null&&(Dn(n,a,l,r),Ct(n,a,l)),l}function bt(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ji(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<e?s:e}}function Pl(n,e){ji(n,e),(n=n.alternate)&&ji(n,e)}function xd(){return null}var bc=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fl(n){this._internalRoot=n}fa.prototype.render=Fl.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(m(409));da(n,e,null,null)};fa.prototype.unmount=Fl.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Pe(function(){da(null,n,null,null)}),e[$n]=null}};function fa(n){this._internalRoot=n}fa.prototype.unstable_scheduleHydration=function(n){if(n){var e=Fo();n={blockedOn:null,target:n,priority:e};for(var s=0;s<bn.length&&e!==0&&e<bn[s].priority;s++);bn.splice(s,0,n),s===0&&Lo(n)}};function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ga(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ui(){}function Td(n,e,s,t,a){if(a){if(typeof t=="function"){var r=t;t=function(){var u=bt(l);r.call(u)}}var l=Jc(e,t,n,0,null,!1,!1,"",Ui);return n._reactRootContainer=l,n[$n]=l.current,js(n.nodeType===8?n.parentNode:n),Pe(),l}for(;a=n.lastChild;)n.removeChild(a);if(typeof t=="function"){var i=t;t=function(){var u=bt(o);i.call(u)}}var o=Nl(n,0,!1,null,null,!1,!1,"",Ui);return n._reactRootContainer=o,n[$n]=o.current,js(n.nodeType===8?n.parentNode:n),Pe(function(){da(e,o,s,t)}),o}function ha(n,e,s,t,a){var r=s._reactRootContainer;if(r){var l=r;if(typeof a=="function"){var i=a;a=function(){var o=bt(l);i.call(o)}}da(e,l,n,a)}else l=Td(s,e,n,a,t);return bt(l)}No=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var s=ws(e.pendingLanes);s!==0&&(Xr(e,s|1),fn(e,K()),!(R&6)&&(ts=K()+500,he()))}break;case 13:Pe(function(){var t=Qn(n,1);if(t!==null){var a=rn();Dn(t,n,1,a)}}),Pl(n,1)}};Zr=function(n){if(n.tag===13){var e=Qn(n,134217728);if(e!==null){var s=rn();Dn(e,n,134217728,s)}Pl(n,134217728)}};Po=function(n){if(n.tag===13){var e=ce(n),s=Qn(n,e);if(s!==null){var t=rn();Dn(s,n,e,t)}Pl(n,e)}};Fo=function(){return L};Ro=function(n,e){var s=L;try{return L=n,e()}finally{L=s}};rr=function(n,e,s){switch(e){case"input":if(Ja(n,s),e=s.name,s.type==="radio"&&e!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<s.length;e++){var t=s[e];if(t!==n&&t.form===n.form){var a=ra(t);if(!a)throw Error(m(90));io(t),Ja(t,a)}}}break;case"textarea":co(n,s);break;case"select":e=s.value,e!=null&&qe(n,!!s.multiple,e,!1)}};mo=El;yo=Pe;var _d={usingClientEntryPoint:!1,Events:[Zs,Be,ra,ho,vo,El]},vs={findFiberByHostInstance:ze,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nd={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ko(n),n===null?null:n.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||xd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mt.isDisabled&&mt.supportsFiber)try{ea=mt.inject(Nd),Bn=mt}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d;yn.createPortal=function(n,e){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(e))throw Error(m(200));return Ed(n,e,null,s)};yn.createRoot=function(n,e){if(!Rl(n))throw Error(m(299));var s=!1,t="",a=bc;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Nl(n,1,!1,null,null,s,!1,t,a),n[$n]=e.current,js(n.nodeType===8?n.parentNode:n),new Fl(e)};yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(m(188)):(n=Object.keys(n).join(","),Error(m(268,n)));return n=ko(e),n=n===null?null:n.stateNode,n};yn.flushSync=function(n){return Pe(n)};yn.hydrate=function(n,e,s){if(!ga(e))throw Error(m(200));return ha(null,n,e,!0,s)};yn.hydrateRoot=function(n,e,s){if(!Rl(n))throw Error(m(405));var t=s!=null&&s.hydratedSources||null,a=!1,r="",l=bc;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onRecoverableError!==void 0&&(l=s.onRecoverableError)),e=Jc(e,null,n,1,s??null,a,!1,r,l),n[$n]=e.current,js(n),t)for(n=0;n<t.length;n++)s=t[n],a=s._getVersion,a=a(s._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[s,a]:e.mutableSourceEagerHydrationData.push(s,a);return new fa(e)};yn.render=function(n,e,s){if(!ga(e))throw Error(m(200));return ha(null,n,e,!1,s)};yn.unmountComponentAtNode=function(n){if(!ga(n))throw Error(m(40));return n._reactRootContainer?(Pe(function(){ha(null,null,n,!1,function(){n._reactRootContainer=null,n[$n]=null})}),!0):!1};yn.unstable_batchedUpdates=El;yn.unstable_renderSubtreeIntoContainer=function(n,e,s,t){if(!ga(s))throw Error(m(200));if(n==null||n._reactInternals===void 0)throw Error(m(38));return ha(n,e,s,!1,t)};yn.version="18.3.1-next-f1338f8080-20240426";function nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nu)}catch(n){console.error(n)}}nu(),bi.exports=yn;var Pd=bi.exports,Hi=Pd;qa.createRoot=Hi.createRoot,qa.hydrateRoot=Hi.hydrateRoot;const Fd=`<!-- ==================== HERO ==================== -->
<header class="hero">
  <div class="hero-inner">
    <h1><span class="zh">茶餐廳風雲</span><span class="en">Cha Chaan Teng Showdown</span></h1>
    <div class="subtitle"><span class="zh">生存大亂鬥</span><span class="en">Survival Brawl</span></div>
    <p class="tagline">
      <span class="zh">
        午餐尖峰時段，客人源源不絕、要求千奇百怪。<br>
        身為伙計的你，要在混亂中帶位、執單、上餐，<br>
        還要提防同事暗中加料、推客、踢爆！<br>
        <strong>撐到最後的人，才是茶餐廳生存之王。</strong>
      </span>
      <span class="en">
        The lunch rush is on — customers pour in with endless quirky orders.<br>
        As a server, you must seat, take orders and serve in the chaos,<br>
        while watching out for coworkers sneaking in extra ingredients, dumping customers on you, and calling your bluffs!<br>
        <strong>Last one standing is the King of the Cha Chaan Teng.</strong>
      </span>
    </p>
    <div class="hero-badges">
      <div class="badge"><span class="zh">3–5 人</span><span class="en">3–5 Players</span></div>
      <div class="badge"><span class="zh">8 歲以上</span><span class="en">Age 8+</span></div>
      <div class="badge"><span class="zh">20–30 分鐘</span><span class="en">20–30 min</span></div>
      <div class="badge">V1.3</div>
    </div>
  </div>
</header>

<div class="wave">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#FFF8EC"/>
  </svg>
</div>

<main class="wrapper">

  <!-- ==================== 1. OBJECTIVE ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">1</div>
      <h2 class="section-title"><span class="zh">遊戲目標</span><span class="en">Objective</span></h2>
    </div>
    <div class="card">
      <p>
        <span class="zh">本遊戲採用<strong>生存淘汰制</strong>。管理你的桌位與手牌，完成客人的餐點需求，同時避免累積過多的<strong class="text-red">「老闆怒氣值」</strong>。</span>
        <span class="en">This is a <strong>survival-elimination</strong> game. Manage your tables and hand, complete customer orders, and avoid accumulating too much <strong class="text-red">Boss Rage</strong>.</span>
      </p>
      <div class="highlight red">
        <span class="zh">當你的怒氣值達到或超過上限 ── 你就被老闆即時開除！最後留在場上的玩家獲勝！</span>
        <span class="en">When your Rage reaches or exceeds your limit — you are instantly FIRED by the boss! The last player remaining wins!</span>
      </div>
      <p class="mt">
        <span class="zh">若中央牌庫先被抽完，則進入<strong>「午市大清算」</strong>，仍存活的玩家進行最終結算 ── 怒氣值最低者獲勝；若平手，小費最多者勝出。</span>
        <span class="en">If the draw pile runs out first, the <strong>Lunch Rush Showdown</strong> begins — surviving players do a final reckoning: lowest Rage wins; ties broken by most Tips.</span>
      </p>
    </div>
  </section>

  <!-- ==================== 2. COMPONENTS ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">2</div>
      <h2 class="section-title"><span class="zh">遊戲配件</span><span class="en">Components</span></h2>
    </div>
    <p style="margin-bottom: 14px; font-size: .95rem; line-height: 1.65;">
      <span class="zh">全套共 <strong>96 張遊戲卡 + 6 張角色卡</strong>，另含中央板、個人桌墊與標記。</span>
      <span class="en">The full set includes <strong>96 game cards + 6 character cards</strong>, plus the central board, player mats and tokens.</span>
    </p>
    <div class="icon-grid">
      <div class="icon-item">
        <div class="emoji">🧑‍🍳</div>
        <div class="label"><span class="zh">角色卡 ×6</span><span class="en">Characters ×6</span></div>
        <div class="desc"><span class="zh">6 位伙計角色，各有獨立三項數值、被動與主動技能（不進牌庫）</span><span class="en">6 servers, each with 3 stats, a passive and an active skill (not shuffled into deck)</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">🃏</div>
        <div class="label"><span class="zh">中央牌庫</span><span class="en">Draw Pile</span></div>
        <div class="desc"><span class="zh">96 張遊戲卡洗勻組成，供玩家抽牌</span><span class="en">96 shuffled game cards; players draw from here</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">👥</div>
        <div class="label"><span class="zh">客人卡 ×16</span><span class="en">Customers ×16</span></div>
        <div class="desc"><span class="zh">前來用餐的客人，需要 2 種指定食材</span><span class="en">Diners who each require 2 specific ingredients</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">😤</div>
        <div class="label"><span class="zh">奧客卡 ×8</span><span class="en">Karens ×8</span></div>
        <div class="desc"><span class="zh">特殊客人，需要 3 種食材且附帶催單效果</span><span class="en">Difficult customers: 3 ingredients needed, plus a rush-order effect</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">🥩</div>
        <div class="label"><span class="zh">食材卡 ×42</span><span class="en">Ingredients ×42</span></div>
        <div class="desc"><span class="zh">6 種食材，每種 7 張，用來完成客人需求</span><span class="en">6 ingredient types × 7 each; used to complete orders</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">🗑️</div>
        <div class="label"><span class="zh">垃圾卡 ×12</span><span class="en">Trash ×12</span></div>
        <div class="desc"><span class="zh">無法正常上餐，常用於吹牛或陷害</span><span class="en">Can't serve — used for bluffing or sabotage</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">⚡</div>
        <div class="label"><span class="zh">功能牌 ×18</span><span class="en">Action Cards ×18</span></div>
        <div class="desc"><span class="zh">強行帶位、暗中加料、老闆唔喺度、執枱神功、客滿</span><span class="en">Forced Seating, Secret Ingredient, Boss is Away, Table Swap, Full House</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">🗺️</div>
        <div class="label"><span class="zh">中央板 ×1</span><span class="en">Board ×1</span></div>
        <div class="desc"><span class="zh">A3 茶餐廳平面圖，含牌庫、棄牌、回合指示、規則卡、奧客排隊區</span><span class="en">A3 restaurant layout with draw, discard, turn tracker, rules card and Karen queue</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">📋</div>
        <div class="label"><span class="zh">個人桌墊 ×5</span><span class="en">Player Mats ×5</span></div>
        <div class="desc"><span class="zh">A5 橫式，含角色插槽、怒氣軌、桌位、食材區、小費軌、手牌區</span><span class="en">A5 landscape: character slot, Rage track, tables, ingredient area, Tip track, hand area</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">🔥</div>
        <div class="label"><span class="zh">怒氣值標記</span><span class="en">Rage Tokens</span></div>
        <div class="desc"><span class="zh">記錄每位玩家的老闆怒氣值</span><span class="en">Tracks each player's Boss Rage</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">💰</div>
        <div class="label"><span class="zh">小費標記</span><span class="en">Tip Tokens</span></div>
        <div class="desc"><span class="zh">完成上餐後獲得的獎勵</span><span class="en">Rewards earned from successful servings</span></div>
      </div>
      <div class="icon-item">
        <div class="emoji">📦</div>
        <div class="label"><span class="zh">遊戲外盒</span><span class="en">Game Box</span></div>
        <div class="desc"><span class="zh">295mm 方盒，收納所有配件</span><span class="en">295mm square box fitting all components</span></div>
      </div>
    </div>
  </section>

  <!-- ==================== CHARACTERS ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">★</div>
      <h2 class="section-title"><span class="zh">角色卡</span><span class="en">Character Cards</span></h2>
    </div>
    <div class="card">
      <p>
        <span class="zh">遊戲開始前，玩家<strong>各自挑選 1 張角色卡</strong>，整場固定不變。每張角色卡包含三項數值，取代原本統一設定：</span>
        <span class="en">Before the game begins, each player <strong>picks 1 character card</strong> and keeps it all game. Each card has three stats that override any default values:</span>
      </p>
      <ul class="mt">
        <li>🔥 <strong><span class="zh">抗壓</span><span class="en">Stress</span></strong> — <span class="zh">怒氣值上限（預設 5 點，部分角色 4 或 6）</span><span class="en">Rage limit (default 5; some characters 4 or 6)</span></li>
        <li>✋ <strong><span class="zh">手勢</span><span class="en">Hand</span></strong> — <span class="zh">手牌上限（預設 6 張，部分角色 7 張）</span><span class="en">Hand-size limit (default 6; some characters 7)</span></li>
        <li>🪑 <strong><span class="zh">桌位</span><span class="en">Tables</span></strong> — <span class="zh">同時可接待客人數（預設 2 張，部分角色 1 或 3）</span><span class="en">Number of tables available (default 2; some 1 or 3)</span></li>
      </ul>
      <p class="mt">
        <span class="zh">每張角色卡另有 <strong>1 個被動能力</strong>（常駐生效）與 <strong>1 個主動技能</strong>（每回合行動階段最多使用 1 次，不消耗行動權）。</span>
        <span class="en">Each character also has <strong>1 passive ability</strong> (always active) and <strong>1 active skill</strong> (used at most once per Action phase, does not consume an action).</span>
      </p>

      <table class="rule-table" style="margin-top: 14px;">
        <tr>
          <th><span class="zh">角色</span><span class="en">Character</span></th>
          <th>🔥</th><th>✋</th><th>🪑</th>
          <th><span class="zh">被動 / 主動技能</span><span class="en">Passive / Active</span></th>
        </tr>
        <tr>
          <td><strong><span class="zh">新人伙計 阿志</span><span class="en">Rookie Server — Chi</span></strong></td><td>5</td><td>7</td><td>2</td>
          <td>
            <span class="zh"><strong>菜鳥運氣</strong>：首次被踢爆抓包時不罰怒氣<br><strong>見習生加油</strong>：抽牌階段多抽 1 張</span>
            <span class="en"><strong>Beginner's Luck</strong>: the first time you're caught bluffing, no Rage penalty<br><strong>Trainee Hustle</strong>: draw 1 extra card in the draw phase</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">老練伙記 發哥</span><span class="en">Veteran Server — Fat Gor</span></strong></td><td>6</td><td>6</td><td>2</td>
          <td>
            <span class="zh"><strong>薑愈老愈辣</strong>：踢爆成功時對手額外 +1 怒氣<br><strong>老江湖</strong>：秘密查看對手 1 張手牌</span>
            <span class="en"><strong>Old Ginger Bites Hardest</strong>: when you successfully call a bluff, the opponent takes +1 extra Rage<br><strong>Old Hand</strong>: secretly peek at 1 card from an opponent's hand</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">後廚大佬 肥威</span><span class="en">Head Cook — Fei Wai</span></strong></td><td>5</td><td>6</td><td>1</td>
          <td>
            <span class="zh"><strong>偷雞落鑊</strong>：上餐時可把 1 張垃圾當任意食材（每次限 1 次）<br><strong>落鑊</strong>：棄 2 張手牌，抽 3 張</span>
            <span class="en"><strong>Into the Wok</strong>: when serving, 1 Trash card counts as any ingredient (once per serving)<br><strong>Fire the Wok</strong>: discard 2 cards, draw 3</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">收銀阿姐 蓮姐</span><span class="en">Cashier — Sister Lin</span></strong></td><td>5</td><td>6</td><td>2</td>
          <td>
            <span class="zh"><strong>老闆心水</strong>：花小費減怒氣變為 2 小費 = 1 怒氣<br><strong>埋單嘞</strong>：立刻獲得 1 小費</span>
            <span class="en"><strong>Boss's Favorite</strong>: spending Tips to reduce Rage costs 2 Tips = −1 Rage<br><strong>Check, Please!</strong>: immediately gain 1 Tip</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">外賣仔 小強</span><span class="en">Delivery Boy — Siu Keung</span></strong></td><td>4</td><td>6</td><td>3</td>
          <td>
            <span class="zh"><strong>飛毛腿</strong>：查勤時空桌懲罰封頂為 2 點<br><strong>飛單</strong>：將自己桌上 1 位客人移到自己另一張空桌</span>
            <span class="en"><strong>Light Feet</strong>: during Inspection, empty-table Rage is capped at 2<br><strong>Quick Shift</strong>: move 1 of your seated customers to another empty table of yours</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">樓面花 阿May</span><span class="en">Front-of-House — Ah May</span></strong></td><td>5</td><td>6</td><td>2</td>
          <td>
            <span class="zh"><strong>人見人愛</strong>：被強行帶位針對時立刻抽 1 張<br><strong>笑騎騎</strong>：指定 1 位對手，該對手至你下回合前不能對你用功能牌</span>
            <span class="en"><strong>Crowd Favorite</strong>: when targeted by Forced Seating, immediately draw 1 card<br><strong>Sweet Smile</strong>: pick 1 opponent — they can't play action cards on you until your next turn</span>
          </td>
        </tr>
      </table>
    </div>
  </section>

  <!-- ==================== 3. INITIAL SETUP ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">3</div>
      <h2 class="section-title"><span class="zh">初始設定</span><span class="en">Initial Values</span></h2>
    </div>
    <table class="rule-table">
      <tr>
        <th><span class="zh">項目</span><span class="en">Item</span></th>
        <th><span class="zh">數值</span><span class="en">Value</span></th>
      </tr>
      <tr>
        <td><span class="zh">起始手牌</span><span class="en">Starting Hand</span></td>
        <td><strong><span class="zh">5 張</span><span class="en">5 cards</span></strong></td>
      </tr>
      <tr>
        <td><span class="zh">每回合抽牌</span><span class="en">Draw per Turn</span></td>
        <td><strong><span class="zh">2 張</span><span class="en">2 cards</span></strong></td>
      </tr>
      <tr>
        <td><span class="zh">✋ 手牌上限（手勢）</span><span class="en">✋ Hand Limit</span></td>
        <td><strong><span class="zh">依角色卡（預設 6 張，部分角色 7 張）</span><span class="en">Per character (default 6; some 7)</span></strong></td>
      </tr>
      <tr>
        <td><span class="zh">🪑 桌位數量（桌位）</span><span class="en">🪑 Tables</span></td>
        <td><strong><span class="zh">依角色卡（預設 2 張，部分角色 1 或 3 張）</span><span class="en">Per character (default 2; some 1 or 3)</span></strong></td>
      </tr>
      <tr>
        <td><span class="zh">🔥 怒氣值上限（抗壓）</span><span class="en">🔥 Rage Limit</span></td>
        <td><strong class="text-red"><span class="zh">依角色卡（預設 5 點，部分角色 4 或 6）</span><span class="en">Per character (default 5; some 4 or 6)</span></strong></td>
      </tr>
    </table>
    <div class="highlight" style="margin-top: 14px;">
      <span class="zh">這三項數值由所選角色卡決定，取代原本統一設定。開局前先挑角色！</span>
      <span class="en">These three stats are set by your chosen character and override any defaults. Pick your character before you start!</span>
    </div>
  </section>

  <!-- ==================== 4. SETUP ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">4</div>
      <h2 class="section-title"><span class="zh">遊戲設置</span><span class="en">Game Setup</span></h2>
    </div>
    <div class="flow">
      <div class="flow-step">
        <div class="flow-line"><div class="flow-dot">1</div><div class="flow-connector"></div></div>
        <div class="flow-content">
          <h4><span class="zh">挑選角色卡</span><span class="en">Choose Characters</span></h4>
          <p>
            <span class="zh">將 6 張角色卡攤開，玩家<strong>依序各自選 1 張</strong>放在自己面前（建議以年齡最小者優先選）。未被選的角色卡收回盒中。</span>
            <span class="en">Lay out all 6 character cards. Each player in turn <strong>picks 1</strong> and places it in front of themselves (youngest chooses first). Unchosen cards go back in the box.</span>
          </p>
        </div>
      </div>
      <div class="flow-step">
        <div class="flow-line"><div class="flow-dot">2</div><div class="flow-connector"></div></div>
        <div class="flow-content">
          <h4><span class="zh">洗牌組庫</span><span class="en">Shuffle the Deck</span></h4>
          <p>
            <span class="zh">將 <strong>96 張</strong>遊戲卡（不含角色卡）洗勻，組成中央牌庫，放在中央板的牌庫區。</span>
            <span class="en">Shuffle all <strong>96</strong> game cards (not the character cards) and place them on the draw-pile space of the central board.</span>
          </p>
        </div>
      </div>
      <div class="flow-step">
        <div class="flow-line"><div class="flow-dot">3</div><div class="flow-connector"></div></div>
        <div class="flow-content">
          <h4><span class="zh">拿取標記</span><span class="en">Take Tokens</span></h4>
          <p>
            <span class="zh">每位玩家拿取 1 組怒氣值標記，怒氣值從 <strong>0</strong> 開始，放在個人桌墊的怒氣軌上。</span>
            <span class="en">Each player takes a Rage token, starting at <strong>0</strong>, placed on the Rage track of their mat.</span>
          </p>
        </div>
      </div>
      <div class="flow-step">
        <div class="flow-line"><div class="flow-dot">4</div><div class="flow-connector"></div></div>
        <div class="flow-content">
          <h4><span class="zh">擺設桌位</span><span class="en">Set Up Tables</span></h4>
          <p>
            <span class="zh">依照所選角色卡的 🪑 <strong>桌位</strong>數值，使用個人桌墊上對應數量的桌位接待客人。</span>
            <span class="en">Use the number of tables indicated by your character's 🪑 <strong>Tables</strong> stat on your player mat.</span>
          </p>
        </div>
      </div>
      <div class="flow-step">
        <div class="flow-line"><div class="flow-dot">5</div><div class="flow-connector"></div></div>
        <div class="flow-content">
          <h4><span class="zh">抽取手牌</span><span class="en">Draw Starting Hand</span></h4>
          <p>
            <span class="zh">每位玩家從中央牌庫抽取 <strong>5 張手牌</strong>（手牌上限依角色 ✋ 手勢 而定）。</span>
            <span class="en">Each player draws <strong>5 cards</strong> from the draw pile (hand limit per character's ✋ Hand stat).</span>
          </p>
        </div>
      </div>
      <div class="flow-step">
        <div class="flow-line"><div class="flow-dot">6</div></div>
        <div class="flow-content">
          <h4><span class="zh">決定起始玩家</span><span class="en">Pick First Player</span></h4>
          <p>
            <span class="zh">隨機決定起始玩家，準備開工！</span>
            <span class="en">Randomly pick the starting player — time to get to work!</span>
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 5. CARD TYPES ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">5</div>
      <h2 class="section-title"><span class="zh">卡牌類型說明</span><span class="en">Card Types</span></h2>
    </div>

    <div class="card">
      <h3>
        <span class="tag tag-blue"><span class="zh">客人卡</span><span class="en">Customer</span></span>
        <span class="zh">前來用餐的客人（16 張）</span><span class="en">Diners (16 cards)</span>
      </h3>
      <p>
        <span class="zh">將客人帶到自己面前的空桌。每位客人需要 <strong>2 種指定食材</strong>。完成需求後，客人與對應食材一同棄置，玩家獲得 <strong>1 小費</strong>獎勵。</span>
        <span class="en">Seat a customer at one of your empty tables. Each customer requires <strong>2 specific ingredients</strong>. When served, discard the customer and the ingredients; gain <strong>1 Tip</strong>.</span>
      </p>
    </div>

    <div class="card">
      <h3>
        <span class="tag tag-red"><span class="zh">奧客卡</span><span class="en">Karen</span></span>
        <span class="zh">特殊難搞客人（8 張）</span><span class="en">Difficult customers (8 cards)</span>
      </h3>
      <p>
        <span class="zh">奧客卡是特殊客人卡，需要 <strong>3 種指定食材</strong>，且全部附帶催單效果。完成可獲得 <strong>2–3 小費</strong>。</span>
        <span class="en">Karens are special customers requiring <strong>3 specific ingredients</strong>, each with a rush-order effect. Completing one yields <strong>2–3 Tips</strong>.</span>
      </p>
      <div class="highlight red">
        <span class="zh">催單效果：持有該客人的玩家，在回合結束時若該客人仍未完成上餐，立刻 <strong>+1 怒氣值</strong>！多位奧客效果可累加！</span>
        <span class="en">Rush-order effect: at end of turn, if a Karen in front of you is unserved, take <strong>+1 Rage</strong> immediately! Effects from multiple Karens stack!</span>
      </div>
    </div>

    <div class="card">
      <h3>
        <span class="tag tag-green"><span class="zh">食材卡</span><span class="en">Ingredient</span></span>
        <span class="zh">完成餐點的關鍵</span><span class="en">Key to completing orders</span>
      </h3>
      <p>
        <span class="zh">食材卡是完成客人需求的主要資源。收集正確的食材組合，才能為客人上餐。</span>
        <span class="en">Ingredients are the core resource for fulfilling orders. Collect the right combination to serve your customers.</span>
      </p>
    </div>

    <div class="card">
      <h3>
        <span class="tag tag-purple"><span class="zh">垃圾卡</span><span class="en">Trash</span></span>
        <span class="zh">混淆視聽的道具</span><span class="en">Misdirection tools</span>
      </h3>
      <p>
        <span class="zh">垃圾卡不能作為正確食材使用。它們常用於<strong>吹牛、蓋牌、陷害</strong>或干擾其他玩家。</span>
        <span class="en">Trash cards cannot serve as valid ingredients. They are used for <strong>bluffing, face-down plays, sabotage</strong> and disrupting opponents.</span>
      </p>
    </div>

    <div class="card">
      <h3>
        <span class="tag tag-orange"><span class="zh">功能牌</span><span class="en">Action Card</span></span>
        <span class="zh">特殊效果（18 張）</span><span class="en">Special effects (18 cards)</span>
      </h3>
      <p>
        <span class="zh">在指定時機使用，發動特殊效果，共 5 種：</span>
        <span class="en">Played at specified times to trigger effects. 5 types:</span>
      </p>
      <ul>
        <li><span class="zh"><strong>強行帶位 ×6</strong> ── 把客人塞到別人的空桌上</span><span class="en"><strong>Forced Seating ×6</strong> — seat a customer at an opponent's empty table</span></li>
        <li><span class="zh"><strong>暗中加料 ×6</strong> ── 在別人上餐時偷偷加入一張牌</span><span class="en"><strong>Secret Ingredient ×6</strong> — sneak a card into another player's serving</span></li>
        <li><span class="zh"><strong>老闆唔喺度 ×2</strong> ── 本回合查勤不計空桌怒氣</span><span class="en"><strong>Boss is Away ×2</strong> — skip empty-table Rage in this turn's Inspection</span></li>
        <li><span class="zh"><strong>執枱神功 ×2</strong> ── 與對手互換桌上 1 位客人</span><span class="en"><strong>Table Swap ×2</strong> — swap 1 seated customer with an opponent</span></li>
        <li><span class="zh"><strong>客滿 ×2</strong> ── 反制一次「強行帶位」</span><span class="en"><strong>Full House ×2</strong> — cancel one Forced Seating targeting you</span></li>
      </ul>
    </div>
  </section>

  <!-- ==================== 6. TURN FLOW ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">6</div>
      <h2 class="section-title"><span class="zh">遊戲流程</span><span class="en">Turn Flow</span></h2>
    </div>
    <p style="margin-bottom: 18px; font-size: .95rem; line-height: 1.6;">
      <span class="zh">遊戲以回合制進行，從起始玩家開始，依<strong>順時針</strong>輪流。每位玩家的回合依序分為以下階段：</span>
      <span class="en">The game is turn-based, starting with the first player and proceeding <strong>clockwise</strong>. Each player's turn has these phases in order:</span>
    </p>

    <!-- 6-1 DRAW -->
    <div class="card">
      <h3><span class="zh">階段一：抽牌</span><span class="en">Phase 1 — Draw</span></h3>
      <p><span class="zh">從中央牌庫抽 <strong>2 張</strong>牌加入手牌。</span><span class="en">Draw <strong>2 cards</strong> from the draw pile into your hand.</span></p>
      <div class="highlight">
        <span class="zh">若抽牌後手牌超過上限 6 張，必須立即棄牌至 6 張！</span>
        <span class="en">If your hand exceeds the 6-card limit after drawing, discard down to 6 immediately!</span>
      </div>
    </div>

    <!-- 6-2 ACTION -->
    <div class="card">
      <h3><span class="zh">階段二：行動（可重複執行）</span><span class="en">Phase 2 — Action (Repeatable)</span></h3>
      <p>
        <span class="zh">你可以自由重複執行以下行動，直到不想再行動或沒有合法行動為止：</span>
        <span class="en">You may freely repeat the following actions until you choose to stop or have no legal action left:</span>
      </p>

      <table class="rule-table" style="margin-top: 14px;">
        <tr>
          <th><span class="zh">行動</span><span class="en">Action</span></th>
          <th><span class="zh">說明</span><span class="en">Description</span></th>
        </tr>
        <tr>
          <td><strong><span class="zh">A. 帶位入座</span><span class="en">A. Seat a Customer</span></strong></td>
          <td>
            <span class="zh">將 1 張客人卡打出，放到自己的 1 張<strong>空桌</strong>上。沒有空桌就不能帶位。</span>
            <span class="en">Play 1 customer card to one of your <strong>empty tables</strong>. You cannot seat if no table is free.</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">B. 湊套上餐</span><span class="en">B. Serve a Meal</span></strong></td>
          <td>
            <span class="zh">
              手中已有某位客人需要的完整食材組合？宣告為該客人上餐！<br>
              1. 指定 1 位自己桌上的客人<br>
              2. 打出符合需求的食材牌<br>
              3. 如有需要，可蓋 1 張牌作為百搭（每次上餐限蓋 1 張）<br>
              4. 進入「上餐干擾與踢爆流程」
            </span>
            <span class="en">
              Have the full ingredient set a customer needs? Declare a serving!<br>
              1. Target 1 of your seated customers<br>
              2. Play matching ingredient cards<br>
              3. If needed, play 1 face-down card as a wild (max 1 per serving)<br>
              4. Proceed to the "Interference &amp; Bluff-Catch" sequence
            </span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">C. 使用功能牌</span><span class="en">C. Play an Action Card</span></strong></td>
          <td>
            <span class="zh">
              <strong>強行帶位</strong>：將客人卡放到對手的空桌上<br>
              <strong>暗中加料</strong>：不能單獨使用，須在其他玩家上餐時打出<br>
              <strong>老闆唔喺度</strong>：本回合查勤不計空桌怒氣<br>
              <strong>執枱神功</strong>：與對手互換桌上 1 位客人<br>
              <strong>客滿</strong>（反應型）：取消一次對你的強行帶位
            </span>
            <span class="en">
              <strong>Forced Seating</strong>: place a customer at an opponent's empty table<br>
              <strong>Secret Ingredient</strong>: can only be played during another player's serving<br>
              <strong>Boss is Away</strong>: skip empty-table Rage during this Inspection<br>
              <strong>Table Swap</strong>: exchange 1 seated customer with an opponent<br>
              <strong>Full House</strong> (reaction): cancel one Forced Seating against you
            </span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">D. 主動反檯</span><span class="en">D. Flip the Table</span></strong></td>
          <td>
            <span class="zh">不想處理某位客人？宣告「反檯」，棄置該客人、清空桌位，但<strong class="text-red">立刻 +1 怒氣值</strong>。</span>
            <span class="en">Don't want a customer? Declare "Flip the Table" — discard that customer and clear the table, but take <strong class="text-red">+1 Rage</strong> immediately.</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">E. 花費小費</span><span class="en">E. Spend Tips</span></strong></td>
          <td>
            <span class="zh">花費 <strong>3 小費</strong>減少 <strong>1 點</strong>老闆怒氣值。每回合最多 1 次。（收銀阿姐 蓮姐被動：2 小費 = 1 怒氣。）</span>
            <span class="en">Spend <strong>3 Tips</strong> to reduce Boss Rage by <strong>1</strong>. Max once per turn. (Sister Lin's passive: 2 Tips = −1 Rage.)</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">C+. 發動主動技能</span><span class="en">C+. Use Active Skill</span></strong></td>
          <td>
            <span class="zh">每回合行動階段中，可發動自己角色卡上的主動技能 <strong>最多 1 次</strong>，<strong>不消耗行動權</strong>。部分技能指定於其他階段發動，以卡面為準。</span>
            <span class="en">Use your character's active skill <strong>at most once</strong> during the Action phase, <strong>without consuming an action</strong>. Some skills must be used in other phases — follow the card text.</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- 6-3 BLUFF CATCH -->
    <div class="card">
      <h3><span class="zh">階段三：上餐干擾與踢爆流程</span><span class="en">Phase 3 — Interference &amp; Bluff-Catch</span></h3>
      <p><span class="zh">當任一玩家宣告「上餐」時，立刻進入以下流程：</span><span class="en">Whenever a player declares a serving, immediately run this sequence:</span></p>

      <div class="flow" style="margin-top: 16px;">
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--pink);">1</div><div class="flow-connector"></div></div>
          <div class="flow-content">
            <h4><span class="zh">暗中加料</span><span class="en">Secret Ingredients</span></h4>
            <p>
              <span class="zh">由當前回合玩家<strong>左手邊開始</strong>，依順時針順序，其他玩家可各自選擇是否打出<strong>最多 1 張</strong>「暗中加料」。所有加料牌必須一併納入本次餐點檢查。</span>
              <span class="en">Starting <strong>left</strong> of the current player and going clockwise, each other player may play <strong>up to 1</strong> Secret Ingredient. All added cards must be included when checking the meal.</span>
            </p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--pink);">2</div><div class="flow-connector"></div></div>
          <div class="flow-content">
            <h4><span class="zh">踢爆窗口</span><span class="en">Call-Out Window</span></h4>
            <p>
              <span class="zh">只要本次上餐出現任何<strong>蓋牌</strong>，且效果尚未正式生效，立即開啟踢爆窗口。由左手邊開始，依順時針順序，每位玩家各有一次機會決定是否喊出：</span>
              <span class="en">If the serving includes any <strong>face-down card</strong> whose effect hasn't resolved yet, the call-out window opens. Starting left and going clockwise, each player gets one chance to shout:</span>
            </p>
            <div class="highlight pink" style="text-align: center; font-size: 1.3rem; letter-spacing: .1em;">
              <span class="zh">「你跣我！」</span><span class="en">"You tricked me!"</span>
            </div>
            <p>
              <span class="zh">踢爆者必須<strong>指定 1 張蓋牌</strong>翻開。一旦有人踢爆，立刻翻開被指定的蓋牌並結算。每次上餐最多翻 1 張。</span>
              <span class="en">The caller must <strong>pick 1 face-down card</strong> to reveal. Once a call is made, reveal the named card and resolve. Max 1 reveal per serving.</span>
            </p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--pink);">3</div><div class="flow-connector"></div></div>
          <div class="flow-content">
            <h4><span class="zh">踢爆結算</span><span class="en">Resolve the Call</span></h4>
            <div class="versus">
              <div class="versus-box fail">
                <h4><span class="zh">抓包成功</span><span class="en">Bluff Caught</span></h4>
                <p>
                  <span class="zh">翻開的是垃圾、錯誤食材或無效牌 ── <strong>出牌者 +1 怒氣</strong>，該牌無效。</span>
                  <span class="en">The revealed card is trash, a wrong ingredient, or invalid — <strong>the player who placed it takes +1 Rage</strong>; the card is void.</span>
                </p>
              </div>
              <div class="versus-box success">
                <h4><span class="zh">抓錯了！</span><span class="en">Wrong Call!</span></h4>
                <p>
                  <span class="zh">翻開的牌符合宣稱 ── <strong>踢爆者 +1 怒氣</strong>，該牌正常生效。</span>
                  <span class="en">The revealed card matches the claim — <strong>the caller takes +1 Rage</strong>; the card resolves normally.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--pink);">4</div></div>
          <div class="flow-content">
            <h4><span class="zh">完成上餐</span><span class="en">Finish the Serving</span></h4>
            <p>
              <span class="zh">若最終餐點符合客人需求 ── <span class="tag tag-green">上餐成功</span> 棄牌、得小費、清空桌位。</span>
              <span class="en">If the final meal meets the customer's needs — <span class="tag tag-green">Success</span> discard cards, gain Tips, clear the table.</span>
            </p>
            <p>
              <span class="zh">若不符合需求 ── <span class="tag tag-red">上餐失敗</span> 無效牌棄置，其餘合法食材退回手牌，客人留在桌上。</span>
              <span class="en">If not — <span class="tag tag-red">Failure</span> discard invalid cards, return remaining valid ingredients to hand, customer stays at the table.</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 6-4 INSPECTION -->
    <div class="card">
      <h3><span class="zh">階段三：查勤</span><span class="en">Phase 4 — Inspection</span></h3>
      <div class="highlight green" style="margin-bottom: 12px;">
        <span class="zh">每位玩家的第一個回合跳過此階段！</span>
        <span class="en">Skip this phase on each player's first turn!</span>
      </div>
      <p><span class="zh">回合結束時，檢查你面前的 2 張桌位：</span><span class="en">At the end of your turn, check your tables:</span></p>
      <div class="highlight red" style="text-align: center; font-size: 1.1rem;">
        <span class="zh">每有 1 張空桌 ➜ 立刻 +1 老闆怒氣值！<br>2 張空桌 = +2 怒氣！</span>
        <span class="en">Each empty table ➜ +1 Boss Rage immediately!<br>2 empty tables = +2 Rage!</span>
      </div>
      <p style="margin-top: 10px; font-size: .92rem;">
        <span class="zh">若本回合已使用「老闆唔喺度」，則本次查勤不產生怒氣。</span>
        <span class="en">If you played "Boss is Away" this turn, Inspection generates no Rage.</span>
      </p>
    </div>

    <!-- 6-5 KAREN -->
    <div class="card">
      <h3><span class="zh">階段四：奧客結算</span><span class="en">Phase 5 — Karen Resolution</span></h3>
      <p>
        <span class="zh">完成查勤後，檢查桌上所有尚未完成的客人。每位具有「回合結束時 +1 怒氣」效果的奧客，若此時仍未完成上餐，便各自結算一次效果。</span>
        <span class="en">After Inspection, check unserved customers at your tables. Each Karen with an "end-of-turn +1 Rage" effect triggers once if still unserved.</span>
      </p>
      <div class="highlight red">
        <span class="zh">同時有 2 位催單奧客？那就 +2 怒氣值！</span>
        <span class="en">Two rush-order Karens at once? That's +2 Rage!</span>
      </div>
    </div>

    <!-- INSTANT ELIMINATION -->
    <div class="card">
      <h3><span class="zh">即時淘汰（貫穿全程）</span><span class="en">Instant Elimination (Always Active)</span></h3>
      <div class="highlight red" style="text-align: center; font-size: 1.1rem;">
        <span class="zh">無論任何階段，怒氣值達到角色卡 🔥 抗壓 數值（預設 5 點） ➜ 立刻被老闆開除！</span>
        <span class="en">In any phase, if Rage reaches your character's 🔥 Stress value (default 5) ➜ you're instantly FIRED!</span>
      </div>
      <ul class="mt">
        <li><span class="zh">所有手牌放入棄牌區</span><span class="en">Discard your entire hand</span></li>
        <li><span class="zh">棄置桌上所有客人與餐點</span><span class="en">Discard all customers and meal cards at your tables</span></li>
        <li><span class="zh">不再參與後續回合</span><span class="en">Take no further turns</span></li>
        <li><span class="zh">其桌位不再作為可互動區域</span><span class="en">Your tables are no longer an interactable area</span></li>
      </ul>
      <div class="highlight green" style="text-align: center; margin-top: 14px;">
        <span class="zh">場上只剩最後 1 名玩家 ➜ 該玩家立刻獲勝！</span>
        <span class="en">When only 1 player remains ➜ they immediately WIN!</span>
      </div>
    </div>
  </section>

  <!-- ==================== 7. BLUFFING ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">7</div>
      <h2 class="section-title"><span class="zh">蓋牌吹牛規則</span><span class="en">Face-Down &amp; Bluffing Rules</span></h2>
    </div>
    <div class="card">
      <p>
        <span class="zh">在本遊戲中，玩家可以用<strong>蓋牌</strong>進行欺騙！</span>
        <span class="en">In this game, players can deceive each other using <strong>face-down cards</strong>!</span>
      </p>
      <table class="rule-table" style="margin-top: 14px;">
        <tr>
          <th><span class="zh">類型</span><span class="en">Type</span></th>
          <th><span class="zh">說明</span><span class="en">Description</span></th>
        </tr>
        <tr>
          <td><strong><span class="zh">百搭蓋牌</span><span class="en">Wild Face-Down</span></strong></td>
          <td>
            <span class="zh">上餐時缺少某個食材？可以將手牌中任意 1 張牌<strong>面朝下</strong>打出，宣稱它是你所需的食材。<strong>每次上餐最多只能蓋 1 張百搭。</strong></span>
            <span class="en">Missing an ingredient while serving? Play any 1 card <strong>face down</strong> and claim it is that ingredient. <strong>Max 1 wild face-down per serving.</strong></span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">暗中加料蓋牌</span><span class="en">Secret Ingredient Face-Down</span></strong></td>
          <td>
            <span class="zh">其他玩家透過「暗中加料」，將 1 張牌面朝下加入你的餐點，宣稱是某種食材或附加內容。</span>
            <span class="en">Another player uses Secret Ingredient to add 1 face-down card to your serving, claiming it's a certain ingredient or effect.</span>
          </td>
        </tr>
        <tr>
          <td><strong><span class="zh">踢爆檢查</span><span class="en">Call-Out Check</span></strong></td>
          <td>
            <span class="zh">所有蓋牌在正式生效前，都可能被其他玩家質疑。踢爆者須<strong>指定 1 張蓋牌</strong>翻開，每次上餐最多翻 1 張。</span>
            <span class="en">Any face-down card may be challenged before it resolves. The caller must <strong>name 1 face-down card</strong> to reveal; max 1 reveal per serving.</span>
          </td>
        </tr>
      </table>
    </div>
  </section>

  <!-- ==================== 8. LUNCH RUSH ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">8</div>
      <h2 class="section-title"><span class="zh">午市大清算</span><span class="en">Lunch Rush Showdown</span></h2>
    </div>
    <div class="card">
      <p>
        <span class="zh">當中央牌庫被抽完的瞬間，代表<strong>午市結束</strong>，遊戲立刻停止！</span>
        <span class="en">The moment the draw pile is empty, <strong>lunch is over</strong> — the game stops immediately!</span>
      </p>

      <div class="flow" style="margin-top: 16px;">
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--red); color: #fff;">1</div><div class="flow-connector"></div></div>
          <div class="flow-content">
            <h4><span class="zh">未完成客人懲罰</span><span class="en">Unserved Customer Penalty</span></h4>
            <p><span class="zh">每有 1 位未完成客人 ➜ <strong>+1 怒氣值</strong></span><span class="en">Each unserved customer ➜ <strong>+1 Rage</strong></span></p>
            <p><span class="zh">若該客人是奧客 ➜ <strong class="text-red">+2 怒氣值</strong></span><span class="en">If it's a Karen ➜ <strong class="text-red">+2 Rage</strong></span></p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--red); color: #fff;">2</div><div class="flow-connector"></div></div>
          <div class="flow-content">
            <h4><span class="zh">淘汰檢查</span><span class="en">Elimination Check</span></h4>
            <p>
              <span class="zh">若有玩家因此怒氣值達到或超過上限，立刻淘汰。</span>
              <span class="en">Any player whose Rage now meets or exceeds their limit is immediately eliminated.</span>
            </p>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-line"><div class="flow-dot" style="background: var(--red); color: #fff;">3</div></div>
          <div class="flow-content">
            <h4><span class="zh">比較勝負</span><span class="en">Determine the Winner</span></h4>
            <ol>
              <li><span class="zh">怒氣值最低者獲勝</span><span class="en">Lowest Rage wins</span></li>
              <li><span class="zh">若平手，小費最多者獲勝</span><span class="en">Tie: most Tips wins</span></li>
              <li><span class="zh">若仍平手，共享勝利</span><span class="en">Still tied: shared victory</span></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 9. GLOSSARY ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">9</div>
      <h2 class="section-title"><span class="zh">名詞整理</span><span class="en">Glossary</span></h2>
    </div>
    <div class="glossary-grid">
      <div class="glossary-item">
        <div class="term">🔥 <span class="zh">老闆怒氣值</span><span class="en">Boss Rage</span></div>
        <div class="def">
          <span class="zh">代表你目前承受的壓力與失誤程度。越高越接近被淘汰！</span>
          <span class="en">Your current stress and accumulated mistakes. The higher, the closer to being fired!</span>
        </div>
      </div>
      <div class="glossary-item">
        <div class="term">💰 <span class="zh">小費</span><span class="en">Tips</span></div>
        <div class="def">
          <span class="zh">完成客人訂單後獲得的獎勵。可花 3 小費減 1 怒氣，也用於最終平手比較。</span>
          <span class="en">Reward for completing orders. Spend 3 Tips to remove 1 Rage; also used as a tiebreaker.</span>
        </div>
      </div>
      <div class="glossary-item">
        <div class="term">🪑 <span class="zh">空桌</span><span class="en">Empty Table</span></div>
        <div class="def">
          <span class="zh">沒有客人的桌位。回合結束時，空桌會造成怒氣懲罰。</span>
          <span class="en">A table with no customer. At end of turn, empty tables trigger Rage penalties.</span>
        </div>
      </div>
      <div class="glossary-item">
        <div class="term">🫳 <span class="zh">反檯</span><span class="en">Flip the Table</span></div>
        <div class="def">
          <span class="zh">主動放棄某位客人，立刻清空該桌，但自己要承受怒氣代價。</span>
          <span class="en">Voluntarily drop a customer: clear the table immediately but pay a Rage cost.</span>
        </div>
      </div>
      <div class="glossary-item">
        <div class="term">👀 <span class="zh">踢爆</span><span class="en">Call Out</span></div>
        <div class="def">
          <span class="zh">對蓋牌內容提出質疑，指定 1 張蓋牌翻開檢查。</span>
          <span class="en">Challenge a face-down card — name 1 face-down card to be revealed.</span>
        </div>
      </div>
      <div class="glossary-item">
        <div class="term">🚫 <span class="zh">客滿</span><span class="en">Full House</span></div>
        <div class="def">
          <span class="zh">反制牌，可取消一次對你的「強行帶位」。</span>
          <span class="en">Reaction card — cancels one Forced Seating targeting you.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== QUICK REFERENCE ==================== -->
  <div class="quick-ref">
    <h2><span class="zh">每回合速查表</span><span class="en">Turn Quick Reference</span></h2>
    <div class="qr-grid">
      <div class="qr-item">
        <div class="step"><span class="zh">步驟 1</span><span class="en">Step 1</span></div>
        <div class="action"><span class="zh">抽牌</span><span class="en">Draw</span></div>
        <div class="detail"><span class="zh">抽 2 張<br>超過 6 張須棄牌</span><span class="en">Draw 2<br>discard down to 6</span></div>
      </div>
      <div class="qr-item">
        <div class="step"><span class="zh">步驟 2</span><span class="en">Step 2</span></div>
        <div class="action"><span class="zh">行動</span><span class="en">Action</span></div>
        <div class="detail"><span class="zh">帶位 / 上餐 / 功能牌 / 反檯 / 花小費</span><span class="en">Seat / Serve / Action / Flip / Tips</span></div>
      </div>
      <div class="qr-item">
        <div class="step"><span class="zh">步驟 3</span><span class="en">Step 3</span></div>
        <div class="action"><span class="zh">查勤</span><span class="en">Inspection</span></div>
        <div class="detail"><span class="zh">每張空桌 +1 怒氣<br>（首回合跳過）</span><span class="en">+1 Rage per empty table<br>(skip first turn)</span></div>
      </div>
      <div class="qr-item">
        <div class="step"><span class="zh">步驟 4</span><span class="en">Step 4</span></div>
        <div class="action"><span class="zh">奧客結算</span><span class="en">Karen Check</span></div>
        <div class="detail"><span class="zh">催單奧客各 +1 怒氣</span><span class="en">+1 Rage per rush-order Karen</span></div>
      </div>
      <div class="qr-item" style="border: 2px solid rgba(255,255,255,.4);">
        <div class="step" style="color: #FF6B6B;"><span class="zh">全程生效</span><span class="en">Always On</span></div>
        <div class="action"><span class="zh">即時淘汰</span><span class="en">Instant Out</span></div>
        <div class="detail"><span class="zh">怒氣 ≥ 抗壓上限 立刻出局！</span><span class="en">Rage ≥ Stress = eliminated!</span></div>
      </div>
    </div>
  </div>

  <!-- ==================== STYLE ==================== -->
  <section>
    <div class="section-header">
      <div class="section-number">!</div>
      <h2 class="section-title"><span class="zh">遊戲風格</span><span class="en">Game Style</span></h2>
    </div>
    <div class="card" style="text-align: center;">
      <p style="font-size: 1.1rem; font-weight: 700; margin-bottom: 10px;">
        <span class="zh">這是一款強調……</span><span class="en">This game emphasizes…</span>
      </p>
      <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
        <span class="tag tag-red" style="font-size: 1rem; padding: 6px 18px;"><span class="zh">高互動</span><span class="en">High Interaction</span></span>
        <span class="tag tag-orange" style="font-size: 1rem; padding: 6px 18px;"><span class="zh">高壓力</span><span class="en">High Pressure</span></span>
        <span class="tag tag-purple" style="font-size: 1rem; padding: 6px 18px;"><span class="zh">高嘴砲</span><span class="en">High Trash Talk</span></span>
        <span class="tag tag-pink" style="font-size: 1rem; padding: 6px 18px;"><span class="zh">高陷害</span><span class="en">High Sabotage</span></span>
      </div>
      <p style="margin-top: 16px; font-size: .95rem; line-height: 1.7;">
        <span class="zh">
          的輕中度派對卡牌遊戲。<br>
          你不只是在管理自己的桌面，更是在混亂中判斷：<br><br>
          何時上餐最安全？何時該踢爆別人？<br>
          何時該故意說謊？何時該反檯止損？<br>
          <strong>何時該把麻煩客人推給別人？</strong>
        </span>
        <span class="en">
          — a light-to-medium party card game.<br>
          You're not just managing your own tables; you're reading the chaos:<br><br>
          When is it safest to serve? When should you call a bluff?<br>
          When to lie on purpose? When to flip the table to cut losses?<br>
          <strong>When to dump the worst customer on someone else?</strong>
        </span>
      </p>
    </div>
  </section>

  <div class="footer">
    <p>
      <strong><span class="zh">《茶餐廳風雲：生存大亂鬥》</span><span class="en">Cha Chaan Teng Showdown: Survival Brawl</span></strong> V1.3
    </p>
    <p style="margin-top: 6px;">
      <span class="zh">祝你生存愉快，唔好俾老闆炒！</span>
      <span class="en">Good luck surviving — don't get fired by the boss!</span>
    </p>
  </div>

</main>`,Rd=`<!-- ==================== HERO ==================== -->
<header class="hero">
  <div class="hero-inner">
    <h1><span class="zh">茶餐廳風雲 — 卡牌清單</span><span class="en">Cha Chaan Teng Showdown — Card List</span></h1>
    <p class="sub"><span class="zh">V1.3 完整卡牌配置表</span><span class="en">V1.3 Full Card Breakdown</span></p>
    <div class="hero-stats">
      <div class="stat-box">
        <div class="num">96 + 6</div>
        <div class="label"><span class="zh">遊戲卡 + 角色卡</span><span class="en">Game + Character Cards</span></div>
      </div>
      <div class="stat-box">
        <div class="num">5</div>
        <div class="label"><span class="zh">遊戲卡種類</span><span class="en">Card Types</span></div>
      </div>
      <div class="stat-box">
        <div class="num">6</div>
        <div class="label"><span class="zh">可選角色</span><span class="en">Characters</span></div>
      </div>
      <div class="stat-box">
        <div class="num">3-5</div>
        <div class="label"><span class="zh">適用人數</span><span class="en">Players</span></div>
      </div>
    </div>
  </div>
</header>

<div class="wave">
  <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
    <path d="M0,0 C360,50 1080,50 1440,0 L1440,50 L0,50 Z" fill="#FFF8EC"/>
  </svg>
</div>

<main class="wrapper">

  <!-- ==================== 總覽 / Overview ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--yellow);">📊</div>
      <h2 class="section-title"><span class="zh">牌組總覽</span><span class="en">Deck Overview</span></h2>
    </div>

    <table class="summary-table">
      <tr>
        <th><span class="zh">卡牌種類</span><span class="en">Card Type</span></th>
        <th><span class="zh">數量</span><span class="en">Count</span></th>
        <th><span class="zh">佔比</span><span class="en">Share</span></th>
        <th><span class="zh">說明</span><span class="en">Notes</span></th>
      </tr>
      <tr>
        <td><span class="tag tag-food"><span class="zh">食材卡</span><span class="en">Ingredient</span></span></td>
        <td class="num">42</td>
        <td>43.8%</td>
        <td><span class="zh">6 種食材，每種 7 張</span><span class="en">6 ingredients × 7 each</span></td>
      </tr>
      <tr>
        <td><span class="tag tag-customer"><span class="zh">客人卡</span><span class="en">Customer</span></span></td>
        <td class="num">16</td>
        <td>16.7%</td>
        <td><span class="zh">8 種客人，每種 2 張</span><span class="en">8 customers × 2 each</span></td>
      </tr>
      <tr>
        <td><span class="tag tag-vip"><span class="zh">奧客卡</span><span class="en">Karen</span></span></td>
        <td class="num">8</td>
        <td>8.3%</td>
        <td><span class="zh">8 種奧客，每種 1 張</span><span class="en">8 Karens × 1 each</span></td>
      </tr>
      <tr>
        <td><span class="tag tag-trash"><span class="zh">垃圾卡</span><span class="en">Trash</span></span></td>
        <td class="num">12</td>
        <td>12.5%</td>
        <td><span class="zh">6 種垃圾，每種 2 張</span><span class="en">6 trash types × 2 each</span></td>
      </tr>
      <tr>
        <td><span class="tag tag-action"><span class="zh">功能牌</span><span class="en">Action Card</span></span></td>
        <td class="num">18</td>
        <td>18.8%</td>
        <td><span class="zh">5 種功能，各 2–6 張</span><span class="en">5 action types, 2–6 each</span></td>
      </tr>
      <tr>
        <td style="font-weight: 900;"><span class="zh">遊戲卡合計</span><span class="en">Game Cards Total</span></td>
        <td class="num" style="font-size: 1.3rem;">96</td>
        <td style="font-weight: 900;">100%</td>
        <td><span class="zh">進入中央牌庫</span><span class="en">Shuffled into draw pile</span></td>
      </tr>
      <tr>
        <td><span class="tag" style="background: var(--teal); color: #fff;"><span class="zh">角色卡</span><span class="en">Character</span></span></td>
        <td class="num">6</td>
        <td>—</td>
        <td><span class="zh">6 位伙計角色，不進牌庫，開局前各選 1 張</span><span class="en">6 server roles — not in deck, pick 1 before the game</span></td>
      </tr>
    </table>

    <div class="pie-chart-area">
      <div class="pie"></div>
      <div class="pie-legend">
        <div class="pie-legend-item"><div class="pie-dot" style="background: var(--green);"></div> <span class="zh">食材卡 42 張 (43.8%)</span><span class="en">Ingredients 42 (43.8%)</span></div>
        <div class="pie-legend-item"><div class="pie-dot" style="background: var(--blue);"></div> <span class="zh">客人卡 16 張 (16.7%)</span><span class="en">Customers 16 (16.7%)</span></div>
        <div class="pie-legend-item"><div class="pie-dot" style="background: var(--red);"></div> <span class="zh">奧客卡 8 張 (8.3%)</span><span class="en">Karens 8 (8.3%)</span></div>
        <div class="pie-legend-item"><div class="pie-dot" style="background: var(--purple);"></div> <span class="zh">垃圾卡 12 張 (12.5%)</span><span class="en">Trash 12 (12.5%)</span></div>
        <div class="pie-legend-item"><div class="pie-dot" style="background: var(--orange);"></div> <span class="zh">功能牌 18 張 (18.8%)</span><span class="en">Action 18 (18.8%)</span></div>
      </div>
    </div>
  </div>

  <!-- ==================== 角色卡 / Characters ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--teal); color: #fff;">🧑‍🍳</div>
      <h2 class="section-title"><span class="zh">角色卡 — 6 張</span><span class="en">Character Cards — 6</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">遊戲開始前各自挑選 1 張，整場固定不變，<strong>不進入中央牌庫</strong>。每張角色具備三項數值、1 個被動能力與 1 個主動技能（每回合行動階段最多使用 1 次，不消耗行動權）。</span>
      <span class="en">Each player picks 1 before the game and keeps it the whole match. Character cards are <strong>not shuffled into the deck</strong>. Each has three stats, 1 passive ability and 1 active skill (usable at most once per Action phase, does not consume an action).</span>
    </p>

    <div class="highlight" style="background: #CCFBF1;">
      <span class="zh">三項數值：🔥 <strong>抗壓</strong>（怒氣值上限）／✋ <strong>手勢</strong>（手牌上限）／🪑 <strong>桌位</strong>（同時接待客人數）</span>
      <span class="en">Three stats: 🔥 <strong>Stress</strong> (Rage limit) / ✋ <strong>Hand</strong> (hand size limit) / 🪑 <strong>Tables</strong> (customers you can host simultaneously)</span>
    </div>

    <div class="grid-2" style="margin-top: 16px;">
      <!-- 阿志 / Chi -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/34.png" alt="新人伙計 阿志">
        <div class="card-top" style="background: #CCFBF1;">
          <div class="card-name"><span class="zh">🆕 新人伙計 阿志</span><span class="en">🆕 Rookie Server — Chi</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 8px;">
            <span class="req">🔥 <span class="zh">抗壓</span><span class="en">STR</span> 5</span>
            <span class="req">✋ <span class="zh">手勢</span><span class="en">HND</span> 7</span>
            <span class="req">🪑 <span class="zh">桌位</span><span class="en">TBL</span> 2</span>
          </div>
          <p>
            <span class="zh"><strong>被動 · 菜鳥運氣：</strong>整場第一次被踢爆抓包時不罰怒氣。</span>
            <span class="en"><strong>Passive · Beginner's Luck:</strong> the first time you're caught bluffing all game, no Rage penalty.</span>
          </p>
          <p style="margin-top: 6px;">
            <span class="zh"><strong>主動 · 見習生加油：</strong>抽牌階段多抽 1 張。</span>
            <span class="en"><strong>Active · Trainee Hustle:</strong> draw 1 extra card in the Draw phase.</span>
          </p>
        </div>
      </div>
      <!-- 發哥 / Fat Gor -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/35.png" alt="老練伙記 發哥">
        <div class="card-top" style="background: #CCFBF1;">
          <div class="card-name"><span class="zh">👨‍🍳 老練伙記 發哥</span><span class="en">👨‍🍳 Veteran Server — Fat Gor</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 8px;">
            <span class="req">🔥 <span class="zh">抗壓</span><span class="en">STR</span> 6</span>
            <span class="req">✋ <span class="zh">手勢</span><span class="en">HND</span> 6</span>
            <span class="req">🪑 <span class="zh">桌位</span><span class="en">TBL</span> 2</span>
          </div>
          <p>
            <span class="zh"><strong>被動 · 薑愈老愈辣：</strong>踢爆成功時，對手額外 +1 怒氣。</span>
            <span class="en"><strong>Passive · Old Ginger Bites Hardest:</strong> when you successfully call a bluff, the opponent takes +1 extra Rage.</span>
          </p>
          <p style="margin-top: 6px;">
            <span class="zh"><strong>主動 · 老江湖：</strong>秘密查看對手 1 張手牌。</span>
            <span class="en"><strong>Active · Old Hand:</strong> secretly peek at 1 card in an opponent's hand.</span>
          </p>
        </div>
      </div>
      <!-- 肥威 / Fei Wai -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/36.png" alt="後廚大佬 肥威">
        <div class="card-top" style="background: #CCFBF1;">
          <div class="card-name"><span class="zh">🍳 後廚大佬 肥威</span><span class="en">🍳 Head Cook — Fei Wai</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 8px;">
            <span class="req">🔥 <span class="zh">抗壓</span><span class="en">STR</span> 5</span>
            <span class="req">✋ <span class="zh">手勢</span><span class="en">HND</span> 6</span>
            <span class="req">🪑 <span class="zh">桌位</span><span class="en">TBL</span> 1</span>
          </div>
          <p>
            <span class="zh"><strong>被動 · 偷雞落鑊：</strong>上餐時可把 1 張垃圾當任意食材（仍可被踢爆，每次上餐限 1 次）。</span>
            <span class="en"><strong>Passive · Into the Wok:</strong> when serving, 1 Trash card may count as any ingredient (still bluff-catchable, once per serving).</span>
          </p>
          <p style="margin-top: 6px;">
            <span class="zh"><strong>主動 · 落鑊：</strong>棄 2 張手牌，抽 3 張。</span>
            <span class="en"><strong>Active · Fire the Wok:</strong> discard 2 cards, draw 3.</span>
          </p>
        </div>
      </div>
      <!-- 蓮姐 / Sister Lin -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/37.png" alt="收銀阿姐 蓮姐">
        <div class="card-top" style="background: #CCFBF1;">
          <div class="card-name"><span class="zh">💰 收銀阿姐 蓮姐</span><span class="en">💰 Cashier — Sister Lin</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 8px;">
            <span class="req">🔥 <span class="zh">抗壓</span><span class="en">STR</span> 5</span>
            <span class="req">✋ <span class="zh">手勢</span><span class="en">HND</span> 6</span>
            <span class="req">🪑 <span class="zh">桌位</span><span class="en">TBL</span> 2</span>
          </div>
          <p>
            <span class="zh"><strong>被動 · 老闆心水：</strong>花小費減怒氣變為 2 小費 = 1 怒氣。</span>
            <span class="en"><strong>Passive · Boss's Favorite:</strong> spending Tips to reduce Rage costs only 2 Tips per −1 Rage.</span>
          </p>
          <p style="margin-top: 6px;">
            <span class="zh"><strong>主動 · 埋單嘞：</strong>立刻獲得 1 小費。</span>
            <span class="en"><strong>Active · Check, Please!:</strong> immediately gain 1 Tip.</span>
          </p>
        </div>
      </div>
      <!-- 小強 / Siu Keung -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/38.png" alt="外賣仔 小強">
        <div class="card-top" style="background: #CCFBF1;">
          <div class="card-name"><span class="zh">🛵 外賣仔 小強</span><span class="en">🛵 Delivery Boy — Siu Keung</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 8px;">
            <span class="req">🔥 <span class="zh">抗壓</span><span class="en">STR</span> 4</span>
            <span class="req">✋ <span class="zh">手勢</span><span class="en">HND</span> 6</span>
            <span class="req">🪑 <span class="zh">桌位</span><span class="en">TBL</span> 3</span>
          </div>
          <p>
            <span class="zh"><strong>被動 · 飛毛腿：</strong>查勤階段空桌懲罰封頂為 2 點。</span>
            <span class="en"><strong>Passive · Light Feet:</strong> during Inspection, empty-table Rage is capped at 2.</span>
          </p>
          <p style="margin-top: 6px;">
            <span class="zh"><strong>主動 · 飛單：</strong>將自己桌上 1 位客人移到自己另一張空桌。</span>
            <span class="en"><strong>Active · Quick Shift:</strong> move 1 of your seated customers to another empty table of yours.</span>
          </p>
        </div>
      </div>
      <!-- 阿May / Ah May -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/39.png" alt="樓面花 阿May">
        <div class="card-top" style="background: #CCFBF1;">
          <div class="card-name"><span class="zh">🌸 樓面花 阿May</span><span class="en">🌸 Front-of-House — Ah May</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 8px;">
            <span class="req">🔥 <span class="zh">抗壓</span><span class="en">STR</span> 5</span>
            <span class="req">✋ <span class="zh">手勢</span><span class="en">HND</span> 6</span>
            <span class="req">🪑 <span class="zh">桌位</span><span class="en">TBL</span> 2</span>
          </div>
          <p>
            <span class="zh"><strong>被動 · 人見人愛：</strong>被對手用「強行帶位」針對時立刻抽 1 張。</span>
            <span class="en"><strong>Passive · Crowd Favorite:</strong> when targeted by Forced Seating, immediately draw 1 card.</span>
          </p>
          <p style="margin-top: 6px;">
            <span class="zh"><strong>主動 · 笑騎騎：</strong>指定 1 位對手，直到你下回合前該對手不能對你使用功能牌。</span>
            <span class="en"><strong>Active · Sweet Smile:</strong> pick 1 opponent — they can't play action cards on you until your next turn.</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== 食材卡 / Ingredients ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--green);">🥩</div>
      <h2 class="section-title"><span class="zh">食材卡 — 42 張</span><span class="en">Ingredient Cards — 42</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">6 種經典茶餐廳食材，每種 7 張。用來湊套完成客人的餐點需求。</span>
      <span class="en">6 classic Cha Chaan Teng ingredients × 7 each. Combine them to fulfill customer orders.</span>
    </p>

    <div class="grid-3">
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/01.png" alt="奶茶">
        <div class="card-top" style="background: #FEF3C7;">
          <div class="card-name"><span class="zh">🍵 奶茶</span><span class="en">🍵 Milk Tea</span></div>
          <div class="card-qty">×7</div>
        </div>
        <div class="card-body">
          <span class="zh">招牌絲襪奶茶，茶餐廳靈魂所在。</span>
          <span class="en">Silky "stocking" milk tea — the soul of any Cha Chaan Teng.</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/02.png" alt="菠蘿油">
        <div class="card-top" style="background: #FEF3C7;">
          <div class="card-name"><span class="zh">🍞 菠蘿油</span><span class="en">🍞 Pineapple Bun w/ Butter</span></div>
          <div class="card-qty">×7</div>
        </div>
        <div class="card-body">
          <span class="zh">熱辣辣菠蘿包夾一塊厚切牛油。</span>
          <span class="en">Piping-hot pineapple bun stuffed with a thick slab of butter.</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/03.png" alt="蛋撻">
        <div class="card-top" style="background: #FEF3C7;">
          <div class="card-name"><span class="zh">🥧 蛋撻</span><span class="en">🥧 Egg Tart</span></div>
          <div class="card-qty">×7</div>
        </div>
        <div class="card-body">
          <span class="zh">酥皮金黃，蛋漿嫩滑，出爐即搶。</span>
          <span class="en">Golden crust, silky custard — snapped up the moment it leaves the oven.</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/04.png" alt="叉燒">
        <div class="card-top" style="background: #FEF3C7;">
          <div class="card-name"><span class="zh">🥩 叉燒</span><span class="en">🥩 Char Siu</span></div>
          <div class="card-qty">×7</div>
        </div>
        <div class="card-body">
          <span class="zh">蜜汁叉燒，肥瘦均勻，飯桌必備。</span>
          <span class="en">Honey-glazed BBQ pork, balanced fat and lean — a lunch-table staple.</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/05.png" alt="公仔麵">
        <div class="card-top" style="background: #FEF3C7;">
          <div class="card-name"><span class="zh">🍜 公仔麵</span><span class="en">🍜 Instant Noodles</span></div>
          <div class="card-qty">×7</div>
        </div>
        <div class="card-body">
          <span class="zh">出前一丁，加餐肉加蛋先至完美。</span>
          <span class="en">Demae Itcho — only perfect with spam and egg on top.</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/06.png" alt="煎蛋">
        <div class="card-top" style="background: #FEF3C7;">
          <div class="card-name"><span class="zh">🍳 煎蛋</span><span class="en">🍳 Fried Egg</span></div>
          <div class="card-qty">×7</div>
        </div>
        <div class="card-body">
          <span class="zh">太陽蛋、全熟蛋，百搭配菜之王。</span>
          <span class="en">Sunny-side-up or well-done — the king of side dishes.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== 客人卡 / Customers ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--blue); color: #fff;">🧑</div>
      <h2 class="section-title"><span class="zh">客人卡 — 16 張</span><span class="en">Customer Cards — 16</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">8 種客人，每種 2 張。需要 2 種指定食材即可完成上餐，獲得小費。</span>
      <span class="en">8 customers × 2 each. Each needs 2 specific ingredients to be served — earns you a Tip.</span>
    </p>

    <div class="grid-2">
      <!-- 1 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/07.png" alt="上班族">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">💼 上班族</span><span class="en">💼 Office Worker</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「快啲！就快遲到！一杯奶茶一個菠蘿油！」</span>
          <span class="en">"Hurry up! I'm running late — milk tea and a pineapple bun, NOW!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">經典早餐組合</span><span class="en">Classic breakfast combo</span></span>
        </div>
      </div>
      <!-- 2 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/08.png" alt="學生哥">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">🎒 學生哥</span><span class="en">🎒 Schoolboy</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「阿Sir，要個公仔麵加隻蛋，多謝！」</span>
          <span class="en">"Sir, one bowl of instant noodles with an egg, thanks!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">窮學生恩物</span><span class="en">Broke-student favorite</span></span>
        </div>
      </div>
      <!-- 3 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/09.png" alt="師奶">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">👩 師奶</span><span class="en">👩 Housewife</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「唔該，要杯奶茶同兩個蛋撻，攞走！」</span>
          <span class="en">"One milk tea and two egg tarts to go, please!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
            <span class="req">🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">下午茶時間</span><span class="en">Afternoon tea time</span></span>
        </div>
      </div>
      <!-- 4 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/10.png" alt="地盤佬">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">👷 地盤佬</span><span class="en">👷 Construction Worker</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「老闆！叉燒加蛋！大大份！」</span>
          <span class="en">"Boss! Char siu with egg — make it BIG!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">大胃王午餐</span><span class="en">Big-eater lunch</span></span>
        </div>
      </div>
      <!-- 5 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/11.png" alt="OL">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">👩‍💻 OL</span><span class="en">👩‍💻 Office Lady</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「要個菠蘿油同埋蛋撻，唔好太多油。」</span>
          <span class="en">"Pineapple bun and an egg tart — not too oily please."</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
            <span class="req">🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">輕食下午茶</span><span class="en">Light afternoon tea</span></span>
        </div>
      </div>
      <!-- 6 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/12.png" alt="阿伯">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">👴 阿伯</span><span class="en">👴 Old Uncle</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「後生仔，嚟碗公仔麵加叉燒！」</span>
          <span class="en">"Young man, a bowl of noodles with char siu!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></span>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">經典老街坊</span><span class="en">Classic regular</span></span>
        </div>
      </div>
      <!-- 7 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/13.png" alt="後生仔">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">🧑‍🎤 後生仔</span><span class="en">🧑‍🎤 Young Dude</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「菠蘿油夾蛋，配凍檸茶，正！」</span>
          <span class="en">"Pineapple bun with egg, iced lemon tea on the side — perfect!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">放學加油站</span><span class="en">After-school fuel-up</span></span>
        </div>
      </div>
      <!-- 8 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/14.png" alt="護士姐姐">
        <div class="card-top" style="background: #DBEAFE;">
          <div class="card-name"><span class="zh">👩‍⚕️ 護士姐姐</span><span class="en">👩‍⚕️ Nurse</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「唔該，我得 15 分鐘，奶茶公仔麵！」</span>
          <span class="en">"I've only got 15 minutes — milk tea and instant noodles!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
            <span class="req">🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 1</span><span class="en">Tip 1</span></span>
          <span style="color: #aaa;"><span class="zh">趕返工快餐</span><span class="en">Back-to-shift fast meal</span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== 奧客卡 / Karens ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--red); color: #fff;">😤</div>
      <h2 class="section-title"><span class="zh">奧客卡 — 8 張</span><span class="en">Karen Cards — 8</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">8 種奧客，每種 1 張。需要 3 種食材，且全部附帶催單效果（每回合結束 +1 怒氣）。小費更高作為補償。</span>
      <span class="en">8 Karens × 1 each. Each needs 3 ingredients and has a rush-order effect (+1 Rage at end of turn). Higher Tips as compensation.</span>
    </p>

    <div class="highlight" style="background: #FECACA;">
      <span class="zh">催單效果：只要這位奧客還在你桌上沒有完成上餐，你的每個回合結束時都會 +1 老闆怒氣值！</span>
      <span class="en">Rush-order effect: while this Karen is still at your table unserved, you take +1 Boss Rage at the end of every one of your turns!</span>
    </div>

    <div class="grid-2" style="margin-top: 16px;">
      <!-- 1 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/15.png" alt="食評家">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">📝 食評家</span><span class="en">📝 Food Critic</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「我今日嚟做食評，你哋最好唔好出錯。」</span>
          <span class="en">"I'm here to review you today. You'd better not mess up."</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
            <span class="req">🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></span>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 3</span><span class="en">Tip 3</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 2 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/16.png" alt="大明星">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">🌟 大明星</span><span class="en">🌟 Celebrity</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「我要 VIP 包廂！菠蘿油叉燒煎蛋，即刻！」</span>
          <span class="en">"I want a VIP room! Pineapple bun, char siu, fried egg — NOW!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 3</span><span class="en">Tip 3</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 3 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/17.png" alt="KOL">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name">📱 KOL</div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「要影相先食！奶茶菠蘿油蛋撻，擺靚啲！」</span>
          <span class="en">"Photos first, then food! Milk tea, pineapple bun, egg tart — plate it pretty!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
            <span class="req">🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 2</span><span class="en">Tip 2</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 4 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/18.png" alt="投訴王">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">🤬 投訴王</span><span class="en">🤬 Complaint King</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「點解要等咁耐？！叫經理出嚟！」</span>
          <span class="en">"Why is this taking so long?! Get me the manager!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 2</span><span class="en">Tip 2</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 5 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/19.png" alt="趕時間大叔">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">⏱️ 趕時間大叔</span><span class="en">⏱️ Rushing Uncle</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「我趕住去開會！三分鐘搞掂佢！」</span>
          <span class="en">"I've got a meeting! Three minutes, hop to it!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
            <span class="req">🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 2</span><span class="en">Tip 2</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 6 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/20.png" alt="帶 BB 媽媽">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">👶 帶 BB 媽媽</span><span class="en">👶 Mom with Baby</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「BB 好嘈呀！快啲上嘢食佢先靜！」</span>
          <span class="en">"Baby's crying! Bring the food fast so she'll hush!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
            <span class="req">🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></span>
            <span class="req">🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 2</span><span class="en">Tip 2</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 7 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/21.png" alt="鬼佬遊客">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">🧳 鬼佬遊客</span><span class="en">🧳 Foreign Tourist</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「Excuse me... I want the FULL Hong Kong experience!」</span>
          <span class="en">"Excuse me... I want the FULL Hong Kong experience!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
            <span class="req">🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></span>
            <span class="req">🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 3</span><span class="en">Tip 3</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
      <!-- 8 -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/22.png" alt="黑面經理">
        <div class="card-top" style="background: #FECACA;">
          <div class="card-name"><span class="zh">😠 黑面經理</span><span class="en">😠 Grumpy Manager</span></div>
          <div class="card-qty">×1</div>
        </div>
        <div class="card-body">
          <span class="zh">「你哋啲伙計係咪偷懶？我親自嚟食！」</span>
          <span class="en">"Are your servers slacking off? I'll eat here myself!"</span>
          <div style="margin-top: 8px;">
            <strong><span class="zh">需要：</span><span class="en">Needs:</span></strong>
            <span class="req">🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></span>
            <span class="req">🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></span>
            <span class="req">🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-tip">💰 <span class="zh">小費 3</span><span class="en">Tip 3</span></span>
          <span class="tag tag-rush">🔥 <span class="zh">催單</span><span class="en">Rush</span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== 垃圾卡 / Trash ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--purple); color: #fff;">🗑️</div>
      <h2 class="section-title"><span class="zh">垃圾卡 — 12 張</span><span class="en">Trash Cards — 12</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">6 種垃圾，每種 2 張。不能作為正確食材，但可用於蓋牌吹牛或暗中加料來陷害對手！</span>
      <span class="en">6 trash types × 2 each. Can't serve as valid ingredients — but perfect for face-down bluffs or sabotaging opponents!</span>
    </p>

    <div class="grid-3">
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/23.png" alt="蟑螂腳">
        <div class="card-top" style="background: #EDE9FE;">
          <div class="card-name"><span class="zh">🪳 蟑螂腳</span><span class="en">🪳 Cockroach Leg</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「嘩！碟入面有嘢郁！」</span>
          <span class="en">"Yikes! Something's moving on the plate!"</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/24.png" alt="洗潔精">
        <div class="card-top" style="background: #EDE9FE;">
          <div class="card-name"><span class="zh">🧴 洗潔精</span><span class="en">🧴 Dish Soap</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「點解啲湯有泡泡嘅？」</span>
          <span class="en">"Why is my soup… bubbling?"</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/25.png" alt="煙頭">
        <div class="card-top" style="background: #EDE9FE;">
          <div class="card-name"><span class="zh">🚬 煙頭</span><span class="en">🚬 Cigarette Butt</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「呢碟嘢食有陣怪味⋯⋯」</span>
          <span class="en">"This dish has a weird smell…"</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/26.png" alt="隔夜飯">
        <div class="card-top" style="background: #EDE9FE;">
          <div class="card-name"><span class="zh">🍚 隔夜飯</span><span class="en">🍚 Day-old Rice</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「點解啲飯硬過石頭？」</span>
          <span class="en">"Why is this rice harder than a rock?"</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/27.png" alt="過期沙嗲醬">
        <div class="card-top" style="background: #EDE9FE;">
          <div class="card-name"><span class="zh">🥫 過期沙嗲醬</span><span class="en">🥫 Expired Satay Sauce</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「上年嘅醬你都拎出嚟？」</span>
          <span class="en">"You're serving me last year's sauce?"</span>
        </div>
      </div>
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/28.png" alt="膠袋碎">
        <div class="card-top" style="background: #EDE9FE;">
          <div class="card-name"><span class="zh">🛍️ 膠袋碎</span><span class="en">🛍️ Plastic Bag Shreds</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <span class="zh">「食到一嚿膠⋯你認真？」</span>
          <span class="en">"I just bit into plastic… seriously?"</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== 功能牌 / Action Cards ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--orange);">⚡</div>
      <h2 class="section-title"><span class="zh">功能牌 — 18 張</span><span class="en">Action Cards — 18</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">5 種功能牌，發動特殊效果改變戰局！</span>
      <span class="en">5 action card types — trigger special effects to change the game!</span>
    </p>

    <div class="grid-2">
      <!-- 強行帶位 / Forced Seating -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/29.png" alt="強行帶位">
        <div class="card-top" style="background: #FED7AA;">
          <div class="card-name"><span class="zh">🪑 強行帶位</span><span class="en">🪑 Forced Seating</span></div>
          <div class="card-qty">×6</div>
        </div>
        <div class="card-body">
          <p>
            <span class="zh">「嗰邊有位啊，去嗰邊坐啦！」</span>
            <span class="en">"There's a seat over there — go sit with them!"</span>
          </p>
          <div style="margin-top: 10px; padding: 10px; background: #FFF7ED; border-radius: 8px; border: 2px solid #FDBA74;">
            <span class="zh">
              <strong>效果：</strong>將手中 1 張客人卡或奧客卡放到任一對手的<strong>空桌</strong>上。<br>
              <strong>時機：</strong>行動階段主動使用。<br>
              <strong>限制：</strong>對手必須有空桌。
            </span>
            <span class="en">
              <strong>Effect:</strong> place 1 Customer or Karen from your hand onto any opponent's <strong>empty table</strong>.<br>
              <strong>Timing:</strong> played during your Action phase.<br>
              <strong>Limit:</strong> the target must have an empty table.
            </span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-action"><span class="zh">行動階段</span><span class="en">Action Phase</span></span>
          <span class="tag tag-effect"><span class="zh">攻擊型</span><span class="en">Offensive</span></span>
        </div>
      </div>
      <!-- 暗中加料 / Secret Ingredient -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/30.png" alt="暗中加料">
        <div class="card-top" style="background: #FED7AA;">
          <div class="card-name"><span class="zh">🧪 暗中加料</span><span class="en">🧪 Secret Ingredient</span></div>
          <div class="card-qty">×6</div>
        </div>
        <div class="card-body">
          <p>
            <span class="zh">「等我幫你加啲嘢落去⋯⋯」</span>
            <span class="en">"Let me slip something extra into that for you…"</span>
          </p>
          <div style="margin-top: 10px; padding: 10px; background: #FFF7ED; border-radius: 8px; border: 2px solid #FDBA74;">
            <span class="zh">
              <strong>效果：</strong>當其他玩家宣告上餐時，將手中 1 張牌<strong>面朝下</strong>加入其餐點。<br>
              <strong>時機：</strong>其他玩家上餐時的干擾階段。<br>
              <strong>限制：</strong>每次上餐最多出 1 張。
            </span>
            <span class="en">
              <strong>Effect:</strong> when another player declares a serving, add 1 card <strong>face-down</strong> to their dish.<br>
              <strong>Timing:</strong> during another player's serving interference window.<br>
              <strong>Limit:</strong> max 1 per serving.
            </span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-action"><span class="zh">上餐干擾</span><span class="en">Serving Interrupt</span></span>
          <span class="tag tag-effect"><span class="zh">干擾型</span><span class="en">Disruptive</span></span>
        </div>
      </div>
      <!-- 老闆唔喺度 / Boss is Away -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/31.png" alt="老闆唔喺度">
        <div class="card-top" style="background: #FED7AA;">
          <div class="card-name"><span class="zh">🚪 老闆唔喺度</span><span class="en">🚪 Boss is Away</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <p>
            <span class="zh">「老闆出咗去食飯，把握機會！」</span>
            <span class="en">"The boss is out for lunch — take your chance!"</span>
          </p>
          <div style="margin-top: 10px; padding: 10px; background: #FFF7ED; border-radius: 8px; border: 2px solid #FDBA74;">
            <span class="zh">
              <strong>效果：</strong>本回合查勤階段，你的空桌<strong>不會</strong>產生怒氣值。<br>
              <strong>時機：</strong>行動階段主動使用。<br>
              <strong>限制：</strong>只影響本回合。
            </span>
            <span class="en">
              <strong>Effect:</strong> during this turn's Inspection, your empty tables <strong>do not</strong> cause Rage.<br>
              <strong>Timing:</strong> played during your Action phase.<br>
              <strong>Limit:</strong> only affects this turn.
            </span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-action"><span class="zh">行動階段</span><span class="en">Action Phase</span></span>
          <span class="tag tag-effect"><span class="zh">防禦型</span><span class="en">Defensive</span></span>
        </div>
      </div>
      <!-- 執枱神功 / Table Swap -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/32.png" alt="執枱神功">
        <div class="card-top" style="background: #FED7AA;">
          <div class="card-name"><span class="zh">🔄 執枱神功</span><span class="en">🔄 Table Swap</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <p>
            <span class="zh">「客人你坐錯位啦，呢邊請！」</span>
            <span class="en">"Sir, you're at the wrong table — this way please!"</span>
          </p>
          <div style="margin-top: 10px; padding: 10px; background: #FFF7ED; border-radius: 8px; border: 2px solid #FDBA74;">
            <span class="zh">
              <strong>效果：</strong>將自己桌上 1 位客人與任一對手桌上的 1 位客人<strong>互換</strong>。<br>
              <strong>時機：</strong>行動階段主動使用。<br>
              <strong>限制：</strong>雙方都必須有客人在桌上。
            </span>
            <span class="en">
              <strong>Effect:</strong> <strong>swap</strong> 1 customer at your table with 1 customer at any opponent's table.<br>
              <strong>Timing:</strong> played during your Action phase.<br>
              <strong>Limit:</strong> both sides must have a seated customer.
            </span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-action"><span class="zh">行動階段</span><span class="en">Action Phase</span></span>
          <span class="tag tag-effect"><span class="zh">策略型</span><span class="en">Strategic</span></span>
        </div>
      </div>
      <!-- 客滿 / Full House -->
      <div class="game-card">
        <img class="card-image" src="card_prompts/images/33.png" alt="客滿">
        <div class="card-top" style="background: #FED7AA;">
          <div class="card-name"><span class="zh">🚫 客滿</span><span class="en">🚫 Full House</span></div>
          <div class="card-qty">×2</div>
        </div>
        <div class="card-body">
          <p>
            <span class="zh">「唔好意思，冇位喇！」</span>
            <span class="en">"Sorry, we're full!"</span>
          </p>
          <div style="margin-top: 10px; padding: 10px; background: #FFF7ED; border-radius: 8px; border: 2px solid #FDBA74;">
            <span class="zh">
              <strong>效果：</strong>當有玩家對你使用「強行帶位」時，立刻打出此牌<strong>取消</strong>該次強行帶位。被取消的客人卡與強行帶位牌一同棄置。<br>
              <strong>時機：</strong>被強行帶位時立刻使用（反應型）。<br>
              <strong>限制：</strong>只能反制強行帶位，不能主動打出。
            </span>
            <span class="en">
              <strong>Effect:</strong> when an opponent plays Forced Seating on you, immediately play this to <strong>cancel</strong> it. The targeted customer and Forced Seating card are both discarded.<br>
              <strong>Timing:</strong> reaction — played the moment Forced Seating targets you.<br>
              <strong>Limit:</strong> only cancels Forced Seating; cannot be played on its own.
            </span>
          </div>
        </div>
        <div class="card-footer">
          <span class="tag tag-action"><span class="zh">反應型</span><span class="en">Reaction</span></span>
          <span class="tag tag-effect"><span class="zh">防禦型</span><span class="en">Defensive</span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- ==================== 食材需求分析 / Ingredient Demand ==================== -->
  <div class="section">
    <div class="section-header">
      <div class="section-icon" style="background: var(--teal); color: #fff;">📈</div>
      <h2 class="section-title"><span class="zh">食材需求分佈</span><span class="en">Ingredient Demand Distribution</span></h2>
    </div>
    <p class="section-subtitle">
      <span class="zh">各食材被客人 / 奧客需求的次數，用於確認平衡性。</span>
      <span class="en">How often each ingredient is demanded by customers/Karens — a balance check.</span>
    </p>

    <table class="summary-table">
      <tr>
        <th><span class="zh">食材</span><span class="en">Ingredient</span></th>
        <th><span class="zh">庫存</span><span class="en">Stock</span></th>
        <th><span class="zh">客人需求</span><span class="en">Customer Demand</span></th>
        <th><span class="zh">奧客需求</span><span class="en">Karen Demand</span></th>
        <th><span class="zh">總需求次數</span><span class="en">Total Demand</span></th>
      </tr>
      <tr>
        <td>🍵 <span class="zh">奶茶</span><span class="en">Milk Tea</span></td>
        <td>7</td>
        <td><span class="zh">上班族(2) + 師奶(2) + 護士姐姐(2)</span><span class="en">Office Worker(2) + Housewife(2) + Nurse(2)</span></td>
        <td><span class="zh">食評家 + KOL + 趕時間大叔 + 鬼佬遊客</span><span class="en">Food Critic + KOL + Rushing Uncle + Foreign Tourist</span></td>
        <td class="num">10</td>
      </tr>
      <tr>
        <td>🍞 <span class="zh">菠蘿油</span><span class="en">Pineapple Bun</span></td>
        <td>7</td>
        <td><span class="zh">上班族(2) + OL(2) + 後生仔(2)</span><span class="en">Office Worker(2) + Office Lady(2) + Young Dude(2)</span></td>
        <td><span class="zh">大明星 + KOL + 帶BB媽媽 + 黑面經理</span><span class="en">Celebrity + KOL + Mom w/ Baby + Grumpy Manager</span></td>
        <td class="num">10</td>
      </tr>
      <tr>
        <td>🥧 <span class="zh">蛋撻</span><span class="en">Egg Tart</span></td>
        <td>7</td>
        <td><span class="zh">師奶(2) + OL(2)</span><span class="en">Housewife(2) + Office Lady(2)</span></td>
        <td><span class="zh">食評家 + KOL + 帶BB媽媽 + 黑面經理</span><span class="en">Food Critic + KOL + Mom w/ Baby + Grumpy Manager</span></td>
        <td class="num">8</td>
      </tr>
      <tr>
        <td>🥩 <span class="zh">叉燒</span><span class="en">Char Siu</span></td>
        <td>7</td>
        <td><span class="zh">地盤佬(2) + 阿伯(2)</span><span class="en">Construction Worker(2) + Old Uncle(2)</span></td>
        <td><span class="zh">食評家 + 大明星 + 投訴王 + 鬼佬遊客 + 黑面經理</span><span class="en">Food Critic + Celebrity + Complaint King + Foreign Tourist + Grumpy Manager</span></td>
        <td class="num">9</td>
      </tr>
      <tr>
        <td>🍜 <span class="zh">公仔麵</span><span class="en">Instant Noodles</span></td>
        <td>7</td>
        <td><span class="zh">學生哥(2) + 阿伯(2) + 護士姐姐(2)</span><span class="en">Schoolboy(2) + Old Uncle(2) + Nurse(2)</span></td>
        <td><span class="zh">投訴王 + 趕時間大叔 + 鬼佬遊客</span><span class="en">Complaint King + Rushing Uncle + Foreign Tourist</span></td>
        <td class="num">9</td>
      </tr>
      <tr>
        <td>🍳 <span class="zh">煎蛋</span><span class="en">Fried Egg</span></td>
        <td>7</td>
        <td><span class="zh">學生哥(2) + 地盤佬(2) + 後生仔(2)</span><span class="en">Schoolboy(2) + Construction Worker(2) + Young Dude(2)</span></td>
        <td><span class="zh">大明星 + 投訴王 + 趕時間大叔 + 帶BB媽媽</span><span class="en">Celebrity + Complaint King + Rushing Uncle + Mom w/ Baby</span></td>
        <td class="num">10</td>
      </tr>
    </table>

    <div class="highlight" style="margin-top: 16px;">
      <span class="zh">各食材需求次數介於 8–10 次之間，分佈均衡。每種食材 7 張庫存確保有一定稀缺感，玩家需要策略性地收集與使用食材。</span>
      <span class="en">Every ingredient is demanded 8–10 times — evenly distributed. With only 7 copies in stock, scarcity is real, and players must collect and spend ingredients strategically.</span>
    </div>
  </div>

  <!-- ==================== 設計備註 / Design Notes ==================== -->
  <div class="design-note">
    <h2><span class="zh">設計理念與平衡備註 (V1.3)</span><span class="en">Design Philosophy & Balance Notes (V1.3)</span></h2>

    <p>
      <span class="zh"><strong>牌庫節奏：</strong>96 張牌，5 人局每回合消耗約 10 張（抽牌 + 出牌），預計 8–10 輪結束遊戲，符合 20–30 分鐘的目標時長。起始手牌 5 張，提升開局抽到客人卡的機率。</span>
      <span class="en"><strong>Deck Tempo:</strong> 96 cards. A 5-player game burns about 10 cards per round (draws + plays), ending in roughly 8–10 rounds — matching the 20–30 minute target. Starting hand of 5 improves the odds of drawing customers early.</span>
    </p>

    <p>
      <span class="zh"><strong>食材佔比 43.8%：</strong>食材是最常抽到的牌，確保玩家有足夠資源完成客人需求，維持遊戲流暢度。食材總量（42）低於理論總需求（56），製造刻意的稀缺感。</span>
      <span class="en"><strong>43.8% Ingredients:</strong> Ingredients are the most-drawn card type, keeping the game flowing. Total ingredient count (42) is below theoretical demand (56), manufacturing intentional scarcity.</span>
    </p>

    <p>
      <span class="zh"><strong>客人 vs 奧客：</strong>普通客人（16 張）遠多於奧客（8 張），大部分時候玩家面對的是可控壓力。奧客出現時製造高潮，催單效果迫使玩家快速應對或選擇反檯。</span>
      <span class="en"><strong>Customers vs Karens:</strong> Regular customers (16) greatly outnumber Karens (8), so pressure stays manageable most of the time. Karens create spikes — rush-orders force quick responses or table-flipping.</span>
    </p>

    <p>
      <span class="zh"><strong>垃圾卡 12.5%：</strong>數量不多不少，抽到時不至於太挫敗，但足夠讓蓋牌吹牛有真正的風險。每次上餐限蓋 1 張百搭，防止全蓋牌吹牛漏洞。</span>
      <span class="en"><strong>Trash 12.5%:</strong> Enough trash to make bluffing genuinely risky without being too punishing to draw. The 1-wild-per-serving cap prevents full-bluff exploits.</span>
    </p>

    <p><strong><span class="zh">功能牌 5 種設計：</span><span class="en">5 Action Card Design:</span></strong></p>
    <ul>
      <li>
        <span class="zh"><strong>強行帶位（×6）</strong> — 核心攻擊牌，數量多，確保互動頻繁</span>
        <span class="en"><strong>Forced Seating (×6)</strong> — the core offensive card; high count ensures frequent interaction</span>
      </li>
      <li>
        <span class="zh"><strong>暗中加料（×6）</strong> — 核心干擾牌，讓每次上餐都充滿懸念</span>
        <span class="en"><strong>Secret Ingredient (×6)</strong> — the core disruption card; keeps every serving tense</span>
      </li>
      <li>
        <span class="zh"><strong>老闆唔喺度（×2）</strong> — 稀有防禦牌，關鍵時刻的救命草</span>
        <span class="en"><strong>Boss is Away (×2)</strong> — rare defensive lifeline for crunch moments</span>
      </li>
      <li>
        <span class="zh"><strong>執枱神功（×2）</strong> — 稀有策略牌，可以把奧客推給別人或搶走快完成的客人</span>
        <span class="en"><strong>Table Swap (×2)</strong> — rare strategic card; dump a Karen on someone or steal a near-finished customer</span>
      </li>
      <li>
        <span class="zh"><strong>客滿（×2）</strong> — 反制牌，可取消一次強行帶位，平衡攻防互動</span>
        <span class="en"><strong>Full House (×2)</strong> — counter card that cancels Forced Seating, balancing offense and defense</span>
      </li>
    </ul>

    <p>
      <span class="zh"><strong>小費設計：</strong>普通客人統一 1 小費，奧客依難度給 2–3 小費。高風險高回報，鼓勵玩家冒險接奧客。小費可在行動階段花 3 小費減 1 怒氣，增加實際用途。</span>
      <span class="en"><strong>Tip Design:</strong> Regular customers give a flat 1 Tip; Karens give 2–3 based on difficulty. High-risk, high-reward pushes players to take Karens. Tips also convert 3→1 Rage reduction during the Action phase for practical value.</span>
    </p>

    <p>
      <span class="zh"><strong>3 人局調整：</strong>移除每種食材各 2 張（-12）+ 強行帶位 -2 + 暗中加料 -2 = 80 張牌庫，加快遊戲節奏。</span>
      <span class="en"><strong>3-Player Adjustment:</strong> remove 2 of each ingredient (−12) + 2 Forced Seating + 2 Secret Ingredient = 80-card deck, for a faster pace.</span>
    </p>

    <p>
      <span class="zh"><strong>角色卡（V1.3 新增）：</strong>6 位角色將原本統一的抗壓 / 手勢 / 桌位數值拆成差異化設定，讓玩家開局前依角色強項選擇風格 —— 肥威只有 1 桌但能把垃圾當食材；小強 3 桌但抗壓僅 4；發哥抗壓 6 更耐磨；阿志手勢 7 更彈性。被動與主動技能提供非對稱互動，增加重玩性。</span>
      <span class="en"><strong>Character Cards (new in V1.3):</strong> the 6 characters break the formerly-uniform Stress / Hand / Tables stats into distinct profiles, letting players pick a play style upfront. Fei Wai has only 1 table but can treat Trash as ingredients; Siu Keung gets 3 tables but only 4 Stress; Fat Gor's 6 Stress makes him tankier; Chi's 7 Hand gives him flexibility. Passive and active skills add asymmetric interactions, increasing replayability.</span>
    </p>
  </div>

  <div class="footer">
    <p><strong><span class="zh">《茶餐廳風雲：生存大亂鬥》</span><span class="en">Cha Chaan Teng Showdown: Survival Brawl</span></strong> <span class="zh">V1.3 卡牌清單</span><span class="en">V1.3 Card List</span></p>
    <p style="margin-top: 6px;">
      <span class="zh">96 張遊戲卡 + 6 張角色卡 · 6 種食材 · 8 種客人 · 8 種奧客 · 6 種垃圾 · 5 種功能</span>
      <span class="en">96 game cards + 6 characters · 6 ingredients · 8 customers · 8 Karens · 6 trash · 5 actions</span>
    </p>
  </div>

</main>
`;function Ld(){const[n,e]=Fs.useState("rulebook"),[s,t]=Fs.useState("zh"),a=()=>t(l=>l==="zh"?"en":"zh"),r=s==="en"?"lang-en":"lang-zh";return zn.jsxs(zn.Fragment,{children:[zn.jsxs("nav",{className:"top-nav",children:[zn.jsx("div",{className:"brand",children:s==="zh"?"🍜 茶餐廳風雲":"🍜 Cha Chaan Teng Showdown"}),zn.jsxs("div",{className:"tabs",children:[zn.jsx("button",{className:`tab-btn ${n==="rulebook"?"active":""}`,onClick:()=>e("rulebook"),children:s==="zh"?"遊戲說明書":"Rulebook"}),zn.jsx("button",{className:`tab-btn ${n==="cardlist"?"active":""}`,onClick:()=>e("cardlist"),children:s==="zh"?"卡牌清單":"Card List"})]}),zn.jsx("button",{className:"lang-btn",onClick:a,"aria-label":"Switch language",children:s==="zh"?"EN / 中":"中 / EN"})]}),zn.jsx("div",{className:`page-rulebook ${r}`,style:{display:n==="rulebook"?"block":"none"},dangerouslySetInnerHTML:{__html:Fd}}),zn.jsx("div",{className:`page-cardlist ${r}`,style:{display:n==="cardlist"?"block":"none"},dangerouslySetInnerHTML:{__html:Rd}})]})}qa.createRoot(document.getElementById("root")).render(zn.jsx(yu.StrictMode,{children:zn.jsx(Ld,{})}));
