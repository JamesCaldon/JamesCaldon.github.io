import{c as o,h as b,F as K,G as te,H as ne,I as J,J as ae,g as Y,r as D,b as re,K as le,L as T,T as ue,d as ie,M as oe,_ as se,s as ce,N as de,B as I,v as fe}from"./index.178bcd13.js";import{u as V,a as ve,b as me,Q}from"./QIcon.c01320f0.js";import{c as Z,b as ge,a as he}from"./render.1fef7797.js";import{c as be}from"./dom.530c0883.js";const ye={size:{type:[Number,String],default:"1em"},color:String};function ke(e){return{cSize:o(()=>e.size in V?`${V[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var pe=Z({name:"QSpinner",props:{...ye,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=ke(e);return()=>b("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[b("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function xe(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function H(e,t,r,n){r.modifiers.stop===!0&&J(e);const u=r.modifiers.color;let g=r.modifiers.center;g=g===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),$=ae(e),{left:y,top:v,width:_,height:l}=t.getBoundingClientRect(),k=Math.sqrt(_*_+l*l),m=k/2,p=`${(_-k)/2}px`,i=g?p:`${$.left-y-m}px`,h=`${(l-k)/2}px`,P=g?h:`${$.top-v-m}px`;d.className="q-ripple__inner",be(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${P},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${u?" text-"+u:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const w=()=>{f.remove(),clearTimeout(B)};r.abort.push(w);let B=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${h},0) scale3d(1,1,1)`,d.style.opacity=.2,B=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,B=setTimeout(()=>{f.remove(),r.abort.splice(r.abort.indexOf(w),1)},275)},250)},50)}function F(e,{modifiers:t,value:r,arg:n}){const u=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var qe=ge({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&H(u,e,n,u.qKeyEvent===!0)},keystart:xe(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&K(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&H(u,e,n,!0)},300)};F(n,t),e.__qripple=n,te(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&F(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ne(t,"main"),delete e._qripple)}});const ee={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},_e=Object.keys(ee),Le={align:{type:String,validator:e=>_e.includes(e)}};function Ce(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ee[t]}`})}function Ee(e){return e.appContext.config.globalProperties.$router!==void 0}function W(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $e(e,t){for(const r in t){const n=t[r],u=e[r];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((g,f)=>g!==u[f]))return!1}return!0}function U(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Se(e,t){return Array.isArray(e)===!0?U(e,t):Array.isArray(t)===!0?U(t,e):e===t}function we(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(Se(e[r],t[r])===!1)return!1;return!0}const Be={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Pe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=Y(),{props:n,proxy:u,emit:g}=r,f=Ee(r),d=o(()=>n.disable!==!0&&n.href!==void 0),$=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=o(()=>$.value===!0?P(n.to):null),v=o(()=>y.value!==null),_=o(()=>d.value===!0||v.value===!0),l=o(()=>n.type==="a"||_.value===!0?"a":n.tag||e||"div"),k=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),m=o(()=>{if(v.value===!1)return-1;const{matched:s}=y.value,{length:x}=s,L=s[x-1];if(L===void 0)return-1;const E=u.$route.matched;if(E.length===0)return-1;const S=E.findIndex(G.bind(null,L));if(S>-1)return S;const z=W(s[x-2]);return x>1&&W(L)===z&&E[E.length-1].path!==z?E.findIndex(G.bind(null,s[x-2])):S}),p=o(()=>v.value===!0&&m.value!==-1&&$e(u.$route.params,y.value.params)),i=o(()=>p.value===!0&&m.value===u.$route.matched.length-1&&we(u.$route.params,y.value.params)),h=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function P(s){try{return u.$router.resolve(s)}catch{}return null}function w(s,{returnRouterError:x,to:L=n.to,replace:E=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const S=u.$router[E===!0?"replace":"push"](L);return x===!0?S:S.then(()=>{}).catch(()=>{})}function B(s){if(v.value===!0){const x=L=>w(s,L);g("click",s,x),s.defaultPrevented!==!0&&x()}else g("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:_,linkTag:l,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:h,linkAttrs:k,getLink:P,navigateToRouterLink:w,navigateOnClick:B}}const X={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Te={xs:8,sm:10,md:14,lg:20,xl:24},Re=["button","submit","reset"],Ae=/[^\s]\/[^\s]/,Oe=["flat","outline","push","unelevated"],Me=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,je={...ve,...Be,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Oe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Le.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function ze(e){const t=me(e,Te),r=Ce(e),{hasRouterLink:n,hasLink:u,linkTag:g,linkAttrs:f,navigateOnClick:d}=Pe({fallbackTag:"button"}),$=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(h=>h in X?X[h]+"px":h).join(" "),minWidth:"0",minHeight:"0"}):i}),y=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),_=o(()=>v.value===!0?e.tabindex||0:-1),l=o(()=>Me(e,"standard")),k=o(()=>{const i={tabindex:_.value};return u.value===!0?Object.assign(i,f.value):Re.includes(e.type)===!0&&(i.type=e.type),g.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Ae.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),m=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const h=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${h}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:$,innerClasses:p,attributes:k,hasLink:u,linkTag:g,navigateOnClick:d,isActionable:v}}const{passiveCapture:q}=ie;let R=null,A=null,O=null;var Ne=Z({name:"QBtn",props:{...je,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=Y(),{classes:u,style:g,innerClasses:f,attributes:d,hasLink:$,linkTag:y,navigateOnClick:v,isActionable:_}=ze(e),l=D(null),k=D(null);let m=null,p,i=null;const h=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),w=o(()=>({center:e.round})),B=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(_.value===!0){const a={onClick:L,onKeydown:E,onMousedown:z};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=S}return a}return{onClick:T}}),x=o(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:g.value,...d.value,...s.value}));function L(a){if(l.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&l.value.contains(c)===!1&&c.contains(l.value)===!1){l.value.focus();const N=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",N,q),l.value!==null&&l.value.removeEventListener("blur",N,q)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",N,q),l.value.addEventListener("blur",N,q)}}v(a)}}function E(a){l.value!==null&&(r("keydown",a),K(a,[13,32])===!0&&A!==l.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(l.value.focus(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",C,!0),l.value.addEventListener("blur",C,q)),T(a)))}function S(a){l.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(R!==l.value&&(R!==null&&M(),R=l.value,m=a.target,m.addEventListener("touchcancel",C,q),m.addEventListener("touchend",C,q)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function z(a){l.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==l.value&&(O!==null&&M(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",C,q)))}function C(a){if(l.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===l.value)){if(a!==void 0&&a.type==="keyup"){if(A===l.value&&K(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&oe(c),a.cancelBubble===!0&&J(c),l.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const c=k.value;a!==!0&&(R===l.value||O===l.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),R===l.value&&(m!==null&&(m.removeEventListener("touchcancel",C,q),m.removeEventListener("touchend",C,q)),R=m=null),O===l.value&&(document.removeEventListener("mouseup",C,q),O=null),A===l.value&&(document.removeEventListener("keyup",C,!0),l.value!==null&&l.value.removeEventListener("blur",C,q),A=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return re(()=>{M(!0)}),Object.assign(n,{click:L}),()=>{let a=[];e.icon!==void 0&&a.push(b(Q,{name:e.icon,left:e.stack!==!0&&h.value===!0,role:"img","aria-hidden":"true"})),h.value===!0&&a.push(b("span",{class:"block"},[e.label])),a=he(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(b(Q,{name:e.iconRight,right:e.stack!==!0&&h.value===!0,role:"img","aria-hidden":"true"}));const c=[b("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(b("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[b("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),c.push(b("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(b(ue,{name:"q-transition--fade"},()=>e.loading===!0?[b("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[b(pe)])]:null)),le(b(y.value,x.value,c),[[qe,P.value,void 0,w.value]])}}});const Ke={},Ie={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},De=I("div",{style:{"font-size":"30vh"}}," 404 ",-1),Ve=I("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function Qe(e,t){return ce(),de("div",Ie,[I("div",null,[De,Ve,fe(Ne,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}var Ue=se(Ke,[["render",Qe]]);export{Ue as default};
