import p from"./ContentSlot.6f492692.js";import{d,r as l,b as m,c as f,e as a,g as o,n as c,K as r,ao as v,ap as g,a2 as h,l as y}from"./entry.ec5d97af.js";const C={class:"summary"},V={class:"content"},w=d({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(s,{emit:u}){const e=l(s.modelValue),_=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,k)=>{const n=p,i=h;return m(),f("div",{class:c(["callout",[s.type]])},[a("span",{class:"preview",onClick:_},[a("span",C,[o(n,{use:t.$slots.summary},null,8,["use"])]),o(i,{name:"heroicons-outline:chevron-right",class:c(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),v(a("div",V,[o(n,{use:t.$slots.content},null,8,["use"])],512),[[g,r(e)]])],2)}}});const S=y(w,[["__scopeId","data-v-961b73c7"]]);export{S as default};
