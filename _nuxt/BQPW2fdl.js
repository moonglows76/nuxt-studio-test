import P from"./y186TG_h.js";import k from"./Dw0gd8RJ.js";import L from"./DVDA1ar7.js";import{u as b,d,D as R,P as g,v as x,E as C,G as S,H as u,I as m,r as j,a as B,J as E,K as N,L as p,M as T,N as H,O,Q as A,S as D,T as w,p as $,R as q,U as I,e as f,f as M,j as y,w as _,V as v}from"./Dkonc8gM.js";import"./CmhVd7rk.js";import"./2ETV-d1z.js";const V=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),F=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=b(),o=R(g),s=o===x()?C():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),i=j();n.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);B().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??E;return N(w,a&&c,{default:()=>p(D,{suspensible:!0,onResolve:()=>{A(l)}},{default:()=>p(G,{layoutProps:O(n.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),G=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&T(H,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(V,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),J={class:"document-driven-page"},Y=d({__name:"document-driven",setup(t){const{contentHead:n}=$().public.content,{page:e,layout:o}=q();return e.value,n&&I(e),(s,r)=>{const i=P,l=k,a=L,c=F;return f(),M("div",J,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(f(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Y as default};
