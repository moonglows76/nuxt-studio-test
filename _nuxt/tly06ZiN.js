import{d as p,r as t,e as f,f as _,g as s,j as v,n,H as l,a4 as h,ao as g,ap as y,k as V}from"./Dkonc8gM.js";import{r}from"./BeGavTAX.js";import"./2ETV-d1z.js";const C={class:"summary"},k={class:"content"},w=p({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const i=a,u=c,e=t(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(o,B)=>{const m=h;return f(),_("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:d},[s("span",C,[r(o.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),g(s("div",k,[r(o.$slots,"content",{},void 0,!0)],512),[[y,l(e)]])],2)}}}),N=V(w,[["__scopeId","data-v-63fa4c2e"]]);export{N as default};