import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.udvHffAq.js";import{u as d}from"./asyncData.luFQqyyI.js";import f from"./Ellipsis.CbiYo3cQ.js";import y from"./ComponentPlaygroundData.Rj-9XD-8.js";import"./TabsHeader.XrfOVIoZ.js";import"./ComponentPlaygroundProps.112trEKL.js";import"./ProseH4.wKBVmBTo.js";import"./ProseCodeInline.VESgcKJd.js";import"./Badge.Y1OUmJJx.js";import"./MDCSlot.qx8VCQ5l.js";import"./slot.32D4yqjk.js";import"./ProseP.jEUbP_9L.js";import"./index.Oio1WnZj.js";import"./ComponentPlaygroundSlots.vue.n2Tpf2da.js";import"./ComponentPlaygroundTokens.vue.LzSTUotq.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-b3ac04a7"]]);export{E as default};
