import{d as g,r as l,a6 as v,e as s,f as n,F as x,Y as _,Q as k,n as y,t as I,g as u,i as T,a3 as C,k as $}from"./Dkonc8gM.js";const B={class:"tabs-header"},N=["onClick"],S=g({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:f}){const m=t,h=f,r=l(),i=l(),c=e=>{e&&(i.value.style.insetInlineStart=`${e.offsetLeft}px`,i.value.style.width=`${e.clientWidth}px`)},p=(e,a)=>{h("update:activeTabIndex",a),k(()=>c(e.target))};return v(r,e=>{e&&setTimeout(()=>{c(r.value.children[m.activeTabIndex])},50)},{immediate:!0}),(e,a)=>(s(),n("div",B,[t.tabs?(s(),n("div",{key:0,ref_key:"tabsRef",ref:r,class:"tabs"},[(s(!0),n(x,null,_(t.tabs,({label:d},o)=>(s(),n("button",{key:`${o}${d}`,class:y([t.activeTabIndex===o?"active":"not-active"]),onClick:b=>p(b,o)},I(d),11,N))),128)),u("span",{ref_key:"highlightUnderline",ref:i,class:"highlight-underline"},a[0]||(a[0]=[u("span",{class:"tab"},null,-1)]),512)],512)):T("",!0),C(e.$slots,"footer",{},void 0,!0)]))}}),q=$(S,[["__scopeId","data-v-9b59cc28"]]);export{q as default};
