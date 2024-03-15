(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=globalThis,He=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qe=Symbol(),Ke=new WeakMap;let wt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(He&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ke.set(t,e))}return e}toString(){return this.cssText}};const f=r=>new wt(typeof r=="string"?r:r+"",void 0,qe),P=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new wt(t,r,qe)},er=(r,e)=>{if(He)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=ce.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},Xe=He?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return f(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tr,defineProperty:rr,getOwnPropertyDescriptor:nr,getOwnPropertyNames:ir,getOwnPropertySymbols:sr,getPrototypeOf:or}=Object,L=globalThis,Ge=L.trustedTypes,ar=Ge?Ge.emptyScript:"",xe=L.reactiveElementPolyfillSupport,G=(r,e)=>r,de={toAttribute(r,e){switch(e){case Boolean:r=r?ar:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Be=(r,e)=>!tr(r,e),Qe={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:Be};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);class q extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&rr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=nr(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qe}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const e=or(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const t=this.properties,n=[...ir(t),...sr(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Xe(i))}else e!==void 0&&t.push(Xe(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return er(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:de).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:de;this._$Em=i,this[i]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Be)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[G("elementProperties")]=new Map,q[G("finalized")]=new Map,xe==null||xe({ReactiveElement:q}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis,pe=Q.trustedTypes,Ye=pe?pe.createPolicy("lit-html",{createHTML:r=>r}):void 0,At="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,Et="?"+R,cr=`<${Et}>`,D=document,Z=()=>D.createComment(""),ee=r=>r===null||typeof r!="object"&&typeof r!="function",xt=Array.isArray,lr=r=>xt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,et=/>/g,j=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,rt=/"/g,St=/^(?:script|style|textarea|title)$/i,hr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=hr(1),F=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),nt=new WeakMap,N=D.createTreeWalker(D,129);function Pt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ye!==void 0?Ye.createHTML(e):e}const ur=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":"",o=X;for(let l=0;l<t;l++){const a=r[l];let c,h,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===X?h[1]==="!--"?o=Ze:h[1]!==void 0?o=et:h[2]!==void 0?(St.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=j):h[3]!==void 0&&(o=j):o===j?h[0]===">"?(o=i??X,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?j:h[3]==='"'?rt:tt):o===rt||o===tt?o=j:o===Ze||o===et?o=X:(o=j,i=void 0);const u=o===j&&r[l+1].startsWith("/>")?" ":"";s+=o===X?a+cr:d>=0?(n.push(c),a.slice(0,d)+At+a.slice(d)+R+u):a+R+(d===-2?l:u)}return[Pt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class te{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[c,h]=ur(e,t);if(this.el=te.createElement(c,n),N.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=N.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(At)){const p=h[o++],u=i.getAttribute(d).split(R),A=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:A[2],strings:u,ctor:A[1]==="."?pr:A[1]==="?"?fr:A[1]==="@"?gr:we}),i.removeAttribute(d)}else d.startsWith(R)&&(a.push({type:6,index:s}),i.removeAttribute(d));if(St.test(i.tagName)){const d=i.textContent.split(R),p=d.length-1;if(p>0){i.textContent=pe?pe.emptyScript:"";for(let u=0;u<p;u++)i.append(d[u],Z()),N.nextNode(),a.push({type:2,index:++s});i.append(d[p],Z())}}}else if(i.nodeType===8)if(i.data===Et)a.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(R,d+1))!==-1;)a.push({type:7,index:s}),d+=R.length-1}s++}}static createElement(e,t){const n=D.createElement("template");return n.innerHTML=e,n}}function V(r,e,t=r,n){var o,l;if(e===F)return e;let i=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const s=ee(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=V(r,i._$AS(r,e.values),i,n)),e}class dr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??D).importNode(t,!0);N.currentNode=i;let s=N.nextNode(),o=0,l=0,a=n[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new se(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new _r(s,this,e)),this._$AV.push(c),a=n[++l]}o!==(a==null?void 0:a.index)&&(s=N.nextNode(),o++)}return N.currentNode=D,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class se{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),ee(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==F&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=te.createElement(Pt(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(t);else{const o=new dr(i,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new te(e)),t}k(e){xt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new se(this.S(Z()),this.S(Z()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class we{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=V(this,e,t,0),o=!ee(e)||e!==this._$AH&&e!==F,o&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=V(this,l[n+a],t,a),c===F&&(c=this._$AH[a]),o||(o=!ee(c)||c!==this._$AH[a]),c===_?e=_:e!==_&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pr extends we{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class fr extends we{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class gr extends we{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??_)===F)return;const n=this._$AH,i=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class _r{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const Pe=Q.litHtmlPolyfillSupport;Pe==null||Pe(te,se),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.1.2");const mr=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new se(e.insertBefore(Z(),s),s,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return F}};var $t;m._$litElement$=!0,m.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:m});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:Be},vr=(r=br,e,t)=>{const{kind:n,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(t.name,r),n==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(n==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+n)};function b(r){return(e,t)=>typeof t=="object"?vr(r,e,t):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(r){return b({...r,state:!0,attribute:!1})}const T="*{margin:0;box-sizing:border-box}body{line-height:1.5}img{max-width:100%}a{text-decoration:none;color:inherit}",z='@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";*{box-sizing:border-box;font-family:Nunito,sans-serif;font-optical-sizing:auto}body{margin:0;padding-left:15px;padding-right:10px;background-color:var(--color-background-page)}nav{padding:1.5% 1.5% 1.5% 5%;display:flex;flex-direction:row;width:100%;justify-content:space-around;border-bottom-color:#000;border-width:2px;border-bottom-style:solid}.link_container{display:flex;width:100%;align-items:center;justify-content:space-around}.logo{width:100%;height:auto;object-fit:contain}.logo-container{display:flex;justify-content:center;width:25%}',yr=".container_items{margin:20px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}",Ot="*{box-sizing:border-box}body{margin:0;padding-left:15px;padding-right:10px}.main-img{width:50%}.header-box{margin-bottom:10%}.container_items{margin:20px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.clothing-item{width:100%;height:auto;border:1px solid #ccc;margin:10px;padding:10px;border-radius:5px}img{max-width:100%;height:auto;margin-bottom:10px}",$r=".search-container{position:relative;width:100%;margin-top:20px;display:flex;justify-content:center;align-items:center}.search-input{width:400px;height:50px;padding:10px;border:1px solid #ccc;border-radius:5px;outline:none}.search-icon{cursor:pointer}";var wr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Er=(r,e,t,n)=>{for(var i=n>1?void 0:n?Ar(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&wr(e,t,i),i};let Ue=class extends m{render(){return g`
      <div class = "parent">

        <div class="search-container">
          <img class="search-icon" src="/images/searchbar.png" alt="Search" />
          <input type="text" class="search-input" placeholder="Search..." />
        </div>
      </div>


    `}};Ue.styles=[f(z),f(T),f($r),P`
    .parent{
      display: flex;
      width: 100%;
      justify-content:center;
      margin-bottom: 60px;
    }
    .search-container {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: center;
      background-color: #f8f9fa; /* Light gray background */
      border: 1px solid #ced4da; /* Gray border */
      border-radius: 4px; /* Rounded corners */
      padding: 5px;

    }
    
    .search-icon {
      width: 20px;
      height: auto;
      margin-right: 5px;
    }
    
    .search-input {
      flex: 1; /* Take up remaining space */
      border: none; /* Remove input border */
      background: none; /* Transparent background */
      outline: none; /* Remove outline on focus */
      font-size: 16px;
      color: #495057; /* Text color */
    }
    
    /* Hover effect */
    .search-container:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Light shadow on hover */
    }`];Ue=Er([v("search-bar")],Ue);var xr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,H=(r,e,t,n)=>{for(var i=n>1?void 0:n?Sr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&xr(e,t,i),i};let x=class extends m{constructor(){super(...arguments),this.name="",this.store="",this.price="",this.categories=[],this.size="",this.link=""}render(){return console.log("hello:",this.store),g`
      <article class="clothing-item">
        <a href="${this.link}">
          <header class="header-box">
            <h1>${this.name}</h1>
          </header>
          <slot name="image"></slot>
          <section class="details">
            <h2>${this.store}</h2>
            <p>${this.size}</p>
            <div class="categories">
              ${this.categories.map(r=>g`<div class="category-tag">${r}</div>`)}
            </div>
            <p>${this.price}</p>
          </section>
        </a>
      </article>
    `}};x.styles=[f(T),f(z),f(Ot),P`
     /* clothing-card.css */
.clothing-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.clothing-item:hover {
  transform: translateY(-5px);
}

.header-box {
  margin-bottom: 10px;
  text-align: center;
}

.header-box h1 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.details {
  text-align: center;
}

.details h2 {
  margin: 0;
  font-size: 16px;
  color: #555;
}

.details p {
  margin: 5px 0;
  font-size: 14px;
  color: #777;
}

.categories {
  margin-top: 10px;
}

.category-tag {
  display: inline-block;
  margin-right: 5px;
  padding: 3px 8px;
  background-color: #dfc9c9;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
}

.price {
  font-size: 18px;
  color: #f39c12;
}
    `];H([b({type:String})],x.prototype,"name",2);H([b({type:String})],x.prototype,"store",2);H([b({type:String})],x.prototype,"price",2);H([b({type:Array})],x.prototype,"categories",2);H([b({type:String})],x.prototype,"size",2);H([b({type:String})],x.prototype,"link",2);x=H([v("clothing-card")],x);var Pr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,Ct=(r,e,t,n)=>{for(var i=n>1?void 0:n?Or(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Pr(e,t,i),i};let fe=class extends m{constructor(){super(...arguments),this.on=!1}render(){return g`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};fe.styles=P`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      line-height: 2em;
      cursor: pointer;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-box-background);
      border-radius: 0.75em;
      background-color: var(--color-background-page);
      height: 1.5em;
      width: 3.25em;
      position: relative;
      transition: background-color
        var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-text-heading);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--color-box-text);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--time-transition-control);
    }
    input:checked {
      left: 1.5em;
    }
  `;Ct([b({reflect:!0,type:Boolean})],fe.prototype,"on",2);fe=Ct([v("toggle-switch")],fe);var Cr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,ke=(r,e,t,n)=>{for(var i=n>1?void 0:n?Rr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Cr(e,t,i),i};let re=class extends m{constructor(){super(...arguments),this.path="",this.allItem=[]}render(){return g`
      <main>
        <search-bar></search-bar>
        <div class="container_items">
          ${this.allItem.map(r=>g`<clothing-card
                name=${r.name}
                store=${r.store}
                description=${r.description}
                price=${r.price}
                .categories=${r.categories}
              >
                <img
                  slot="image"
                  src=${r.image}
                  alt="Clothing Image"
                  class="card-img"
              /></clothing-card>`)}
        </div>
      </main>
    `}connectedCallback(){this.allItem=[{itemId:1,name:"Oxford Long-Sleeve Shirt",store:"Uniqlo",price:19.99,categories:["Shirt","Cotton","Sale"],size:"Size: S-XXL",description:"A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"},{itemId:1,name:"Oxford Long-Sleeve Shirt",store:"Uniqlo",price:19.99,categories:["Shirt","Cotton","Sale"],size:"Size: S-XXL",description:"A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"},{itemId:1,name:"Oxford Long-Sleeve Shirt",store:"Uniqlo",price:19.99,categories:["Shirt","Cotton","Sale"],size:"Size: S-XXL",description:"A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"},{itemId:1,name:"Oxford Long-Sleeve Shirt",store:"Uniqlo",price:19.99,categories:["Shirt","Cotton","Sale"],size:"Size: S-XXL",description:"A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"}],super.connectedCallback()}};re.styles=[f(T),f(yr),f(Ot)];ke([b()],re.prototype,"path",2);ke([M()],re.prototype,"allItem",2);re=ke([v("landing-page")],re);const Ur="http://localhost:3000/api";function Le(r){return`${Ur}${r}`}var Lr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,J=(r,e,t,n)=>{for(var i=n>1?void 0:n?Tr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Lr(e,t,i),i};let S=class extends m{constructor(){super(...arguments),this.path="/profiles",this.reviews=[]}get profile(){return this.using||{}}render(){const{name:r,contactInfo:e,sizes:t}=this.profile||{};return g`
      <article>
        <h2>Your Profile</h2>
        <div class="pfp_container">
          <div class="circle" style="background-color: #b91111"></div>
        </div>
        <section class="user-info">
          <form>
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" value="${r}" /><br />
            <label for="contact">Contact Info:</label><br />
            <input
              type="text"
              id="contact"
              name="contact"
              value="${e}"
            /><br />
          </form>
        </section>
        <section class="user-size">
          <h2>Your Size</h2>
          <form>
            <label for="shirt-size">Shirt Size:</label><br />
            <input
              type="text"
              id="shirt-size"
              name="shirt-size"
              value="${t.shirt}"
            /><br />
            <label for="pants-size">Pants Size:</label><br />
            <input
              type="text"
              id="pants-size"
              name="pants-size"
              value="${t.pants}"
            /><br />
          </form>
        </section>
      </article>
    `}_fetchData(r){fetch(Le(r)).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.using=e)})}_fetchReviewData(r){fetch(Le(r)).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.reviews=e)})}connectedCallback(){console.log("Connected callback"),this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(r,e,t){r==="path"&&e!==t&&e&&this._fetchData(t),super.attributeChangedCallback(r,e,t)}};S.styles=[P`article {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    margin-bottom: 20px;
  }
  .pfp_container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ddd;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #b91111;
  }
  .user-info,
  .user-size {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }`];J([b({attribute:!1})],S.prototype,"using",2);J([b()],S.prototype,"path",2);J([M()],S.prototype,"newAvatar",2);J([M()],S.prototype,"reviews",2);S=J([v("user-profile")],S);let Te=class extends S{render(){return console.log("Rendering form",this.profile),g``}_putData(r){fetch(Le(this.path),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.using=e)}).catch(e=>console.log("Failed to PUT form data",e))}generateStarRating(r){const e=[];for(let t=1;t<=5;t++)t<=r?e.push(g`<span class="fa fa-star checked"></span>`):e.push(g`<span class="fa fa-star"></span>`);return e}};Te.styles=[...S.styles,P``];Te=J([v("user-profile-edit")],Te);var jr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Dr=(r,e,t,n)=>{for(var i=n>1?void 0:n?Nr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&jr(e,t,i),i};let je=class extends m{render(){return g`
        <main>
            <user-profile path="/profiles/bobateadog"></user-profile>
        </main>
    `}};je.styles=[f(T),f(z)];je=Dr([v("profile-page")],je);var Ir=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,Rt=(r,e,t,n)=>{for(var i=n>1?void 0:n?Mr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Ir(e,t,i),i};let ge=class extends m{constructor(){super(...arguments),this.path=""}render(){return g`
 
    `}};ge.styles=[f(z),f(T)];Rt([b()],ge.prototype,"path",2);ge=Rt([v("cart-page")],ge);const zr=[{path:"/app/profile",component:"profile-page"},{path:"/app/shopping-cart",component:"cart-page"},{path:"/app",component:"landing-page"},{path:"/app/stores",component:"stores"},{path:"/app",component:"landing-page"},{path:"/",redirect:"/app"}];var Hr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ut=(r,e,t,n)=>{for(var i=n>1?void 0:n?qr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Hr(e,t,i),i};let _e=class extends m{constructor(){super(...arguments),this.open=!1}render(){return g`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open} />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu">
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};_e.styles=P`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid;
      background: white;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }
  `;Ut([b({reflect:!0,type:Boolean})],_e.prototype,"open",2);_e=Ut([v("drop-down")],_e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lt=class extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let it=class{constructor(e,t,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Lt(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Br{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class st extends Br{constructor(e,t,n){var i,s;super(t.context!==void 0?t.initialValue:n),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:h}]of this.subscriptions)a.has(c)||(a.add(c),h.dispatchEvent(new Lt(this.context,c,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(i=this.host).addController)==null||s.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new kr(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fr({context:r}){return(e,t)=>{const n=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){n.set(this,new st(this,{context:r}))}),{get(){return e.get.call(this)},set(i){var s;return(s=n.get(this))==null||s.setValue(i),e.set.call(this,i)},init(i){var s;return(s=n.get(this))==null||s.setValue(i),i}};{e.constructor.addInitializer(o=>{n.set(o,new st(o,{context:r}))});const i=Object.getOwnPropertyDescriptor(e,t);let s;if(i===void 0){const o=new WeakMap;s={get:function(){return o.get(this)},set:function(l){n.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=i.set;s={...i,set:function(l){n.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,t,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vr({context:r,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer(function(){new it(this,{context:r,callback:i=>{this[n.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new it(i,{context:r,callback:s=>{i[n]=s},subscribe:e})})}}const Wr="http://localhost:3000",Jr="/api",Ne="JWT_AUTH_TOKEN",C=class C{constructor(){this.authenticated=!1,this.username="fellow_traveler",this.signOut=()=>{}}static deauthenticate(e){const t=new C;return console.log("Deauthenticating",e,C._theUser),e===C._theUser&&(localStorage.removeItem(Ne),C._theUser=t),t}};C._theUser=new C;let E=C;class k extends E{constructor(e,t){super();const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(i).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),o=JSON.parse(s);console.log("Token payload",o),this.token=e,this.authenticated=!0,this.username=o.username,this.signOut=t}static authenticate(e,t){const n=new k(e,t);return E._theUser=n,localStorage.setItem(Ne,e),n}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Ne);return t?k.authenticate(t,e):E._theUser}}class Kr{constructor(e){this._base=Jr,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=E._theUser.authenticated,n={"Content-Type":"application/json"};if(t){const s={Authorization:`Bearer ${E._theUser.token}`};return e?{...n,...s}:s}else return e?{...n}:void 0}_url(e){return`${Wr}${this._base}${e}`}}class Ce extends Kr{constructor(e){super(Object.fromEntries(e))}}var Xr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Ae=(r,e,t,n)=>{for(var i=n>1?void 0:n?Gr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Xr(e,t,i),i};let Tt="auth",W=class extends m{constructor(){super(...arguments),this.loginStatus=0,this.registerStatus=0,this.user=k.authenticateFromLocalStorage(()=>this._signOut())}isAuthenticated(){return this.user.authenticated}firstUpdated(){this._toggleDialog(!this.isAuthenticated()),this.isAuthenticated()&&this._dispatchUserLoggedIn(this.user)}render(){console.log("Rendering auth-required",this.user);const r=g`
      <dialog>
        <form
          @submit=${this._handleLogin}
          @change=${()=>this.loginStatus=0}>
          <h2>Existing User</h2>
          <label>
            <span>Username</span>
            <input name="username" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="pwd" />
          </label>
          <button type="submit">Sign in</button>
          <p>
            ${this.loginStatus?`Login failed: ${this.loginStatus}`:""}
          </p>
        </form>
        <form
          @submit=${this._handleRegister}

          @change=${()=>this.registerStatus=0}>          <h2>New User</h2>
          <label>
            <span>Name</span>
            <input name="name" required/>
          </label>
          <label>
            <span>Username</span>
            <input name="username" required/>
          
            <span>Password</span>
            <input type="password" name="pwd" required/>
          </label>
          <button type="submit">Register</button>
          <p>
            ${this.registerStatus?`Signup failed: ${this.registerStatus}`:""}
          </p>
          <p></p>
        </form>
      </dialog>
    `;return g`
      ${this.isAuthenticated()?"":r}
      <slot></slot>
    `}_handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e);new Ce(t).base().post("/login").then(i=>{if(i.ok)return i.json();this.loginStatus=i.status}).then(i=>{if(i){console.log("Authentication:",i.token);const s=k.authenticate(i.token,()=>this._signOut());this.user=s,this._toggleDialog(!1),this._dispatchUserLoggedIn(s),this.requestUpdate()}})}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e)}_handleRegister(r){r.preventDefault();const e=r.target,t=new FormData(e),n=t.get("username"),i=t.get("pwd"),s=t.get("name"),o=e.querySelectorAll('input[name="instruments"]:checked'),l=Array.from(o).map(u=>u.value),a=JSON.stringify(l),c=new FormData,h=new FormData;n!==null&&i!==null&&(c.append("username",n),c.append("pwd",i)),n!==null&&s!==null&&(h.append("userid",n),h.append("name",s)),h.append("instruments",a);const d=new Ce(c),p=new Ce(h);d.base().post("/signup").then(u=>{if(u.ok)return console.log("reg success"),u.json();console.log("reg failed"),console.log("res.status: ",u.status),console.log("res: ",u),this.registerStatus=u.status}).then(u=>{if(console.log("Registration:",u),console.log("Rendering auth-required",this.user),u){console.log("Authentication:",u.token);const A=k.authenticate(u.token,()=>this._signOut());this.user=A,this._toggleDialog(!1),this._dispatchUserLoggedIn(A),this.requestUpdate()}return p.base().post("/api/profiles")}).then(u=>{if(u.ok)return console.log("Second request succeeded"),u.json();throw console.log("Second request failed"),new Error("Second request failed")}).then(u=>{console.log("Second request data:",u)}).catch(u=>{console.error("Error:",u)})}_toggleDialog(r){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog");e&&(r?(console.log("Showing dialog"),e.showModal()):(console.log("Closing dialog"),e.close()))}_signOut(){this.user=E.deauthenticate(this.user),this._toggleDialog(!this.isAuthenticated()),document.location.reload()}};W.styles=P`
    :host {
      display: contents;
    }
    dialog {
      display: flex;
      gap: 4rem;
    }
    form {
      display: grid;
      grid-template-columns: [start] 1fr 2fr [end];
      align-items: baseline;
    }
    form > label {
      display: contents;
    }
    form > h2 {
      grid-column: start / end;
      text-align: center;
    }
    input,
    button {
      font: inherit;
      line-height: inherit;
      margin: 0.25em;
    }
    button {
      grid-column: 2;
    }
  `;Ae([M()],W.prototype,"loginStatus",2);Ae([M()],W.prototype,"registerStatus",2);Ae([Fr({context:Tt}),M()],W.prototype,"user",2);W=Ae([v("auth-required")],W);var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Fe=(r,e,t,n)=>{for(var i=n>1?void 0:n?Yr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Qr(e,t,i),i};let ne=class extends m{constructor(){super(...arguments),this.user=new E}render(){return g`
      <nav>
        <a href="/app" class="logo-container">
          <img src="/images/logo.png" alt="Logo" class="logo" />
        </a>
        <div class="link_container">
          <a href="">Stores</a>
          <a href="/app/shopping-cart">Shopping Cart</a>
          <drop-down>
            <img src="/images/profilepic.png" alt="user" />
            <ul slot="menu">
              <li><a href="/app/profile">Profile</a></li>
              <li><a href="">Wishlist</a></li>
              <li>
                <toggle-switch @change=${this._toggleDarkMode}
                  >Dark Mode
                </toggle-switch>
              </li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
          </drop-down>
        </div>
      </nav>
    `}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_signOut(){console.log("Signout"),this.user.signOut()}};ne.styles=[f(T),f(z),P`
      nav {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding-bottom: 2%;
        margin-bottom: 3%;
      }

      .link_container {
        display: flex;
        align-items: center;
      }

      .link_container a {
        margin-right: 20px;
        font-size: 20px;
        color: #333;
        text-decoration: none;
        position: relative;
      }

      .link_container a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #525252;
        transform: scaleX(0);
        transform-origin: bottom left;
        transition: transform 0.3s ease-in-out;
      }

      .link_container a:hover::before {
        transform: scaleX(1);
      }
    `];Fe([M()],ne.prototype,"profile",2);Fe([Vr({context:Tt,subscribe:!0}),b({attribute:!1})],ne.prototype,"user",2);ne=Fe([v("app-navbar")],ne);function me(r){return r=r||[],Array.isArray(r)?r:[r]}function w(r){return`[Vaadin.Router] ${r}`}function Zr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const be="module",ve="nomodule",De=[be,ve];function ot(r){if(!r.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function jt(r){if(!r||!$(r.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!I(r.action)&&!Array.isArray(r.children)&&!I(r.children)&&!ye(e)&&!t.some(n=>$(r[n])))throw new Error(w(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if($(e))ot(e);else if(De.some(n=>n in e))De.forEach(n=>n in e&&ot(e[n]));else throw new Error(w('Expected route bundle to include either "'+ve+'" or "'+be+'" keys, or both'));r.redirect&&["bundle","component"].forEach(n=>{n in r&&console.warn(w(`Route config "${r.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function at(r){me(r).forEach(e=>jt(e))}function ct(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===be?t.setAttribute("type",be):e===ve&&t.setAttribute(ve,""),t.async=!0),new Promise((n,i)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,n(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),i(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&n()})}function en(r){return $(r)?ct(r):Promise.race(De.filter(e=>e in r).map(e=>ct(r[e],e)))}function Y(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ye(r){return typeof r=="object"&&!!r}function I(r){return typeof r=="function"}function $(r){return typeof r=="string"}function Nt(r){const e=new Error(w(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const B=new class{};function tn(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function lt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||tn(e))!==window.location.origin)return;const{pathname:i,search:s,hash:o}=e;Y("go",{pathname:i,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const rn={activate(){window.document.addEventListener("click",lt)},inactivate(){window.document.removeEventListener("click",lt)}},nn=/Trident/.test(navigator.userAgent);nn&&!I(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ht(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:n}=window.location;Y("go",{pathname:e,search:t,hash:n})}const sn={activate(){window.addEventListener("popstate",ht)},inactivate(){window.removeEventListener("popstate",ht)}};var K=qt,on=Ve,an=un,cn=Mt,ln=Ht,Dt="/",It="./",hn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ve(r,e){for(var t=[],n=0,i=0,s="",o=e&&e.delimiter||Dt,l=e&&e.delimiters||It,a=!1,c;(c=hn.exec(r))!==null;){var h=c[0],d=c[1],p=c.index;if(s+=r.slice(i,p),i=p+h.length,d){s+=d[1],a=!0;continue}var u="",A=r[i],Kt=c[2],Xt=c[3],Gt=c[4],oe=c[5];if(!a&&s.length){var Ee=s.length-1;l.indexOf(s[Ee])>-1&&(u=s[Ee],s=s.slice(0,Ee))}s&&(t.push(s),s="",a=!1);var Qt=u!==""&&A!==void 0&&A!==u,Yt=oe==="+"||oe==="*",Zt=oe==="?"||oe==="*",We=u||o,Je=Xt||Gt;t.push({name:Kt||n++,prefix:u,delimiter:We,optional:Zt,repeat:Yt,partial:Qt,pattern:Je?dn(Je):"[^"+O(We)+"]+?"})}return(s||i<r.length)&&t.push(s+r.substr(i)),t}function un(r,e){return Mt(Ve(r,e))}function Mt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(n,i){for(var s="",o=i&&i.encode||encodeURIComponent,l=0;l<r.length;l++){var a=r[l];if(typeof a=="string"){s+=a;continue}var c=n?n[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(h=o(c[d],a),!e[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=o(String(c),a),!e[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function O(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function zt(r){return r&&r.sensitive?"":"i"}function pn(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function fn(r,e,t){for(var n=[],i=0;i<r.length;i++)n.push(qt(r[i],e,t).source);return new RegExp("(?:"+n.join("|")+")",zt(t))}function gn(r,e,t){return Ht(Ve(r,t),e,t)}function Ht(r,e,t){t=t||{};for(var n=t.strict,i=t.start!==!1,s=t.end!==!1,o=O(t.delimiter||Dt),l=t.delimiters||It,a=[].concat(t.endsWith||[]).map(O).concat("$").join("|"),c=i?"^":"",h=r.length===0,d=0;d<r.length;d++){var p=r[d];if(typeof p=="string")c+=O(p),h=d===r.length-1&&l.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+O(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?c+=O(p.prefix)+"("+u+")?":c+="(?:"+O(p.prefix)+"("+u+"))?":c+=O(p.prefix)+"("+u+")"}}return s?(n||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(n||(c+="(?:"+o+"(?="+a+"))?"),h||(c+="(?="+o+"|"+a+")")),new RegExp(c,zt(t))}function qt(r,e,t){return r instanceof RegExp?pn(r,e):Array.isArray(r)?fn(r,e,t):gn(r,e,t)}K.parse=on;K.compile=an;K.tokensToFunction=cn;K.tokensToRegExp=ln;const{hasOwnProperty:_n}=Object.prototype,Ie=new Map;Ie.set("|false",{keys:[],pattern:/(?:)/});function ut(r){try{return decodeURIComponent(r)}catch{return r}}function mn(r,e,t,n,i){t=!!t;const s=`${r}|${t}`;let o=Ie.get(s);if(!o){const c=[];o={keys:c,pattern:K(r,c,{end:t,strict:r===""})},Ie.set(s,o)}const l=o.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let c=1;c<l.length;c++){const h=o.keys[c-1],d=h.name,p=l[c];(p!==void 0||!_n.call(a,d))&&(h.repeat?a[d]=p?p.split(h.delimiter).map(ut):[]:a[d]=p&&ut(p))}return{path:l[0],keys:(n||[]).concat(o.keys),params:a}}function Bt(r,e,t,n,i){let s,o,l=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=mn(a,e,!h,n,i),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;l<h.length;){if(!o){const p=h[l];p.parent=r;let u=s.path.length;u>0&&e.charAt(u)==="/"&&(u+=1),o=Bt(p,e.substr(u),t,s.keys,s.params)}const d=o.next(c);if(!d.done)return{done:!1,value:d.value};o=null,l++}return{done:!0}}}}function bn(r){if(I(r.route.action))return r.route.action(r)}function vn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function yn(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function $n(r,e){const{route:t,path:n}=e;if(t&&!t.__synthetic){const i={path:n,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class ie{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||bn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){at(e);const t=[...me(e)];this.root.__children=t}addRoutes(e){return at(e),this.root.__children.push(...me(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,$(e)?{pathname:e}:e),n=Bt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let s=null,o=null,l=t;function a(c,h=s.value.route,d){const p=d===null&&s.value.route;return s=o||n.next(p),o=null,!c&&(s.done||!vn(h,s.value.route))?(o=s,Promise.resolve(B)):s.done?Promise.reject(Nt(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,s.value),$n(l,s.value),Promise.resolve(i(l)).then(u=>u!=null&&u!==B?(l.result=u.result||u,l):a(c,h,u)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=yn(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;if(n.slice(0,t.length)===t)return n.slice(t.length)}}ie.pathToRegexp=K;const{pathToRegexp:dt}=ie,pt=new Map;function kt(r,e,t){const n=e.name||e.component;if(n&&(r.has(n)?r.get(n).push(e):r.set(n,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const s=t[i];s.parent=e,kt(r,s,s.__children||s.children)}}function ft(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function gt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function wn(r,e={}){if(!(r instanceof ie))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(n,i)=>{let s=ft(t,n);if(!s&&(t.clear(),kt(t,r.root,r.root.__children),s=ft(t,n),!s))throw new Error(`Route "${n}" not found`);let o=pt.get(s.fullPath);if(!o){let a=gt(s),c=s.parent;for(;c;){const u=gt(c);u&&(a=u.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=dt.parse(a),d=dt.tokensToFunction(h),p=Object.create(null);for(let u=0;u<h.length;u++)$(h[u])||(p[h[u].name]=!0);o={toPath:d,keys:p},pt.set(a,o),s.fullPath=a}let l=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},c=Object.keys(i);for(let d=0;d<c.length;d++){const p=c[d];o.keys[p]||(a[p]=i[p])}const h=e.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let _t=[];function An(r){_t.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),_t=r}const En=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},xn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function mt(r,e){return r.classList.add(e),new Promise(t=>{if(En(r)){const n=r.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${i}`),xn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Sn=256;function Re(r){return r!=null}function Pn(r){const e=Object.assign({},r);return delete e.next,e}function y({pathname:r="",search:e="",hash:t="",chain:n=[],params:i={},redirectFrom:s,resolver:o},l){const a=n.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(c={})=>he(U.pathToRegexp.compile(Ft(a))(Object.assign({},i,c)),o)}}function bt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function On(r,e){e.location=y(r);const t=r.chain.map(n=>n.route).indexOf(r.route);return r.chain[t].element=e,e}function le(r,e,t){if(I(r))return r.apply(t,e)}function vt(r,e,t){return n=>{if(n&&(n.cancel||n.redirect))return n;if(t)return le(t[r],e,t)}}function Cn(r,e){if(!Array.isArray(r)&&!ye(r))throw new Error(w(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=me(r);for(let n=0;n<t.length;n++)jt(t[n]),e.__children.push(t[n])}function ae(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function he(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Ft(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class U extends ie{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&ie.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=U.NavigationTrigger;U.setTriggers.apply(U,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();I(t.children)&&(n=n.then(()=>t.children(Pn(e))).then(s=>{!Re(s)&&!I(t.children)&&(s=t.children),Cn(s,t)}));const i={redirect:s=>bt(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return n.then(()=>{if(this.__isLatestRender(e))return le(t.action,[e,i],t)}).then(s=>{if(Re(s)&&(s instanceof HTMLElement||s.redirect||s===B))return s;if($(t.redirect))return i.redirect(t.redirect);if(t.bundle)return en(t.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Re(s))return s;if($(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},$(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(s),t&&this.__updateBrowserHistory(s,n===1),Y("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const l=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),l.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),ae(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(i,{resolver:this})),Y("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const s=n!==t?n:e,l=he(Ft(n.chain),n.resolver)===n.pathname,a=(c,h=c.route,d)=>c.next(void 0,h,d).then(p=>p===null||p===B?l?c:h.parent!==null?a(c,h.parent,p):p:p);return a(n).then(c=>{if(c===null||c===B)throw Nt(s);return c&&c!==B&&c!==n?this.__fullyResolveChain(s,c):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(On(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(w(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Zr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),l=a=>bt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:l},i[a]),n[a].element.location=y(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=y(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:l},i[a]),i[a].element&&(i[a].element.location=y(e,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,i){const s=y(t);return e.then(o=>{if(this.__isLatestRender(t))return vt("onBeforeLeave",[s,n,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,n,i){const s=y(t,i.route);return e.then(o=>{if(this.__isLatestRender(t))return vt("onBeforeEnter",[s,n,this],i.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>Sn)throw new Error(w(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const s=t&&t.chain[i].element;if(s)if(s.parentNode===n)e.chain[i].element=s,n=s;else break}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let i=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===n&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&ae(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ae(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const s=y(e);le(i.onAfterLeave,[s,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&ae(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=y(e,e.chain[t].route);le(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],s=e.chain;let o;for(let l=s.length;l>0;l--)if(s[l-1].route.animate){o=s[l-1].route.animate;break}if(t&&n&&o){const l=ye(o)&&o.leave||"leaving",a=ye(o)&&o.enter||"entering";i.push(mt(t,l)),i.push(mt(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;$(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){An(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=wn(this)),he(this.__urlForName(e,t),this)}urlForPath(e,t){return he(U.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=$(e)?this.__createUrl(e,"http://a"):e;return Y("go",{pathname:t,search:n,hash:i})}}const Rn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ue=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Un(){function r(){return!0}return Vt(r)}function Ln(){try{return Tn()?!0:jn()?ue?!Nn():!Un():!1}catch{return!1}}function Tn(){return localStorage.getItem("vaadin.developmentmode.force")}function jn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Nn(){return!!(ue&&Object.keys(ue).map(e=>ue[e]).filter(e=>e.productionMode).length>0)}function Vt(r,e){if(typeof r!="function")return;const t=Rn.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const yt=function(r,e){if(window.Vaadin.developmentMode)return Vt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ln());function Dn(){}const In=function(){if(typeof yt=="function")return yt(Dn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});In();U.NavigationTrigger={POPSTATE:sn,CLICK:rn};var Mn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,Wt=(r,e,t,n)=>{for(var i=n>1?void 0:n?zn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Mn(e,t,i),i};let Me=class extends m{constructor(){super(...arguments),this.router=new U(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return g`<slot></slot>`}};Wt([b({attribute:!1})],Me.prototype,"routes",2);Me=Wt([v("vaadin-router")],Me);var Hn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Jt=(r,e,t,n)=>{for(var i=n>1?void 0:n?qn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Hn(e,t,i),i};let $e=class extends m{constructor(){super(...arguments),this.open=!1}render(){return g`
      <footer>
        <p>© 2024 Thomas Panyasrivinit</p>
      </footer>
    `}};$e.styles=[f(T),f(z),P`
    * {
      padding: 1.5px;

      box-sizing: border-box;
      
    }

    footer {
      
      position: fixed; /* Set the position to fixed */
      left: 0;
      bottom: 0;
      width: 100%; /* Set the width to 100% */

  border-width: 2px;
  /* border-top-style: solid; */
      color: var(--color-primary);
      padding: 20px; /* Padding inside the footer */
      padding-left: 80px;
      padding-right: 80px;
    }

    footer p {
      font-size: 16px;
    }

    @media screen and (max-width: 800px) {
      footer {
        padding-left: 50px;
        padding-right: 50px;
      }
    }

    @media screen and (max-width: 500px) {
      footer {
        padding-left: 31px;
        padding-right: 31px;
      }
    }
  `];Jt([b({reflect:!0,type:Boolean})],$e.prototype,"open",2);$e=Jt([v("footer-component")],$e);var Bn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,Fn=(r,e,t,n)=>{for(var i=n>1?void 0:n?kn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Bn(e,t,i),i};let ze=class extends m{render(){return g`
      <auth-required>
        <app-navbar> </app-navbar>
        <vaadin-router .routes=${zr}> </vaadin-router>
        <footer-component></footer-component>
      </auth-required>
    `}};ze.styles=[f(T),f(z)];ze=Fn([v("closet-app")],ze);
