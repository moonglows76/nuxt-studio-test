import m from"./Cn1GpWs3.js";import c from"./C_tjVYgj.js";import{u as i,H as u,G as p,d as l,L as e,a7 as d,r as f,k as y}from"./Dkonc8gM.js";import{u as g}from"./BQYWA5W9.js";import"./B4ZcChzl.js";import"./DJIUvW2Y.js";import"./o72es8m4.js";import"./CpvpUyND.js";import"./WPbmjYDg.js";import"./BeGavTAX.js";import"./2ETV-d1z.js";import"./CwTPtWaB.js";import"./DHXCq--v.js";import"./DxQEOO-g.js";import"./De-hJi5i.js";async function h(o){i();const t=u(o);{const{data:n}=await g(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=l({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>d(o.component)),n=f({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(m,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(c,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),G=y(_,[["__scopeId","data-v-9ca9b996"]]);export{G as default};
