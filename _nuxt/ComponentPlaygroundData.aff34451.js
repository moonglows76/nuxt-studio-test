import y from"./TabsHeader.be217194.js";import g from"./ComponentPlaygroundProps.e8c64b01.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.102caf1f.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.15712631.js";import{a as k}from"./index.2828ab54.js";import{d as D,r as V,b as a,c as C,g as P,M as o,X as m,as as T,f as s,k as B}from"./entry.34eea4c0.js";import"./ProseH4.8ede3b06.js";import"./ProseCodeInline.d1b16789.js";import"./Badge.5a0b406e.js";import"./MDCSlot.f9fc35ba.js";import"./slot.6b435465.js";import"./ProseP.b1dad793.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=k(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=y,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":l[0]||(l[0]=b=>T(n)?n.value=b:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const A=B(j,[["__scopeId","data-v-ba4c17f5"]]);export{A as default};