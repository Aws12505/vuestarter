import{d as T,C as A,a as c,o as i,e as a,b as f,F as p,r as m,w as s,u as e,i as _,t as r,l as G,g as H,j as I}from"./app-B91Zl0Oo.js";import{_ as v,a as x}from"./Label.vue_vue_type_script_setup_true_lang-ChWoabUD.js";import{_ as E}from"./Button.vue_vue_type_script_setup_true_lang-PJXKnqlO.js";import{_ as L,a as q,b as B,c as j,d as z}from"./SelectValue.vue_vue_type_script_setup_true_lang-COMAtdeg.js";import{_ as J}from"./Checkbox.vue_vue_type_script_setup_true_lang-Cyvup3SO.js";import{_ as g}from"./Card.vue_vue_type_script_setup_true_lang-BJWyaRE5.js";import{_ as b}from"./CardContent.vue_vue_type_script_setup_true_lang-NmazK22E.js";import{_ as y,a as V}from"./CardTitle.vue_vue_type_script_setup_true_lang-BGN-U_jC.js";import{L as K}from"./loader-circle-DQaJYqkb.js";const P={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},Q={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},R={class:"flex flex-wrap gap-4"},W={class:"space-y-2"},X={class:"flex justify-end space-x-3"},ue=T({__name:"Form",props:{entry:{type:Object,default:()=>({})}},emits:["saved","cancel"],setup(O,{emit:N}){const $=O,M=N,k=["fantastic_plus","fantastic","good","fair","poor"],S=["acceptance","on_time","maintenance_variance","open_boc","vcr_preventable","vmcr_p"],U=["driver_distraction","speeding_violation","sign_violation","traffic_light_violation","following_distance"],C=["gold","silver","not_eligible"],w=[{label:"Less",value:"less"},{label:"Less or Equal",value:"less_or_equal"},{label:"Equal",value:"equal"},{label:"More or Equal",value:"more_or_equal"},{label:"More",value:"more"}],o=A({safety_bonus_eligible_levels:$.entry.safety_bonus_eligible_levels??[],mvts_divisor:$.entry.mvts_divisor??.135,...Object.fromEntries(S.flatMap(u=>k.flatMap(t=>[[`${u}_${t}`,$.entry[`${u}_${t}`]??""],[`${u}_${t}_operator`,$.entry[`${u}_${t}_operator`]??""]]))),...Object.fromEntries(U.flatMap(u=>C.flatMap(t=>[[`${u}_${t}`,$.entry[`${u}_${t}`]??""],[`${u}_${t}_operator`,$.entry[`${u}_${t}_operator`]??""]])))}),D=u=>{const t=o.safety_bonus_eligible_levels.indexOf(u);t===-1?o.safety_bonus_eligible_levels.push(u):o.safety_bonus_eligible_levels.splice(t,1)},F=()=>{o.post(route("performance-metrics.update"),{onSuccess:()=>M("saved")})},h=u=>{const t=w.find(l=>l.value===u);return t?t.label:"Select operator"};return(u,t)=>(i(),c("form",{onSubmit:I(F,["prevent"]),class:"space-y-8"},[(i(),c(p,null,m(S,l=>a(e(g),{key:l,class:"shadow-sm"},{default:s(()=>[a(e(y),null,{default:s(()=>[a(e(V),{class:"capitalize"},{default:s(()=>[_(r(l.replace(/_/g," ")),1)]),_:2},1024)]),_:2},1024),a(e(b),null,{default:s(()=>[f("div",P,[(i(),c(p,null,m(k,n=>f("div",{key:`${l}-${n}`,class:"space-y-2"},[a(e(v),{for:`${l}-${n}`,class:"capitalize"},{default:s(()=>[_(r(n.replace(/_/g," ")),1)]),_:2},1032,["for"]),a(e(x),{id:`${l}-${n}`,modelValue:e(o)[`${l}_${n}`],"onUpdate:modelValue":d=>e(o)[`${l}_${n}`]=d,type:"number",step:"0.01",class:"w-full"},null,8,["id","modelValue","onUpdate:modelValue"]),a(e(L),{modelValue:e(o)[`${l}_${n}_operator`],"onUpdate:modelValue":d=>e(o)[`${l}_${n}_operator`]=d},{default:s(()=>[a(e(q),{class:"w-full"},{default:s(()=>[a(e(B),null,{default:s(()=>[_(r(h(e(o)[`${l}_${n}_operator`])),1)]),_:2},1024)]),_:2},1024),a(e(j),null,{default:s(()=>[(i(),c(p,null,m(w,d=>a(e(z),{key:d.value,value:d.value},{default:s(()=>[_(r(d.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])])),64))])]),_:2},1024)]),_:2},1024)),64)),(i(),c(p,null,m(U,l=>a(e(g),{key:l,class:"shadow-sm"},{default:s(()=>[a(e(y),null,{default:s(()=>[a(e(V),{class:"capitalize"},{default:s(()=>[_(r(l.replace(/_/g," ")),1)]),_:2},1024)]),_:2},1024),a(e(b),null,{default:s(()=>[f("div",Q,[(i(),c(p,null,m(C,n=>f("div",{key:`${l}-${n}`,class:"space-y-2"},[a(e(v),{for:`${l}-${n}`,class:"capitalize"},{default:s(()=>[_(r(n.replace(/_/g," ")),1)]),_:2},1032,["for"]),a(e(x),{id:`${l}-${n}`,modelValue:e(o)[`${l}_${n}`],"onUpdate:modelValue":d=>e(o)[`${l}_${n}`]=d,type:"number",step:"0.01",class:"w-full"},null,8,["id","modelValue","onUpdate:modelValue"]),a(e(L),{modelValue:e(o)[`${l}_${n}_operator`],"onUpdate:modelValue":d=>e(o)[`${l}_${n}_operator`]=d},{default:s(()=>[a(e(q),{class:"w-full"},{default:s(()=>[a(e(B),null,{default:s(()=>[_(r(h(e(o)[`${l}_${n}_operator`])),1)]),_:2},1024)]),_:2},1024),a(e(j),null,{default:s(()=>[(i(),c(p,null,m(w,d=>a(e(z),{key:d.value,value:d.value},{default:s(()=>[_(r(d.label),1)]),_:2},1032,["value"])),64))]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])])),64))])]),_:2},1024)]),_:2},1024)),64)),a(e(g),{class:"shadow-sm"},{default:s(()=>[a(e(y),null,{default:s(()=>[a(e(V),null,{default:s(()=>t[2]||(t[2]=[_("Safety Bonus Eligibility")])),_:1})]),_:1}),a(e(b),null,{default:s(()=>[f("div",R,[(i(),c(p,null,m(k,l=>f("div",{key:l,class:"flex items-center space-x-2"},[a(e(J),{id:`safety-bonus-${l}`,checked:e(o).safety_bonus_eligible_levels.includes(l),"onUpdate:checked":n=>D(l)},null,8,["id","checked","onUpdate:checked"]),a(e(v),{for:`safety-bonus-${l}`,class:"capitalize"},{default:s(()=>[_(r(l.replace(/_/g," ")),1)]),_:2},1032,["for"])])),64))])]),_:1})]),_:1}),a(e(g),{class:"shadow-sm"},{default:s(()=>[a(e(y),null,{default:s(()=>[a(e(V),null,{default:s(()=>t[3]||(t[3]=[_("MVtS Configuration")])),_:1})]),_:1}),a(e(b),null,{default:s(()=>[f("div",W,[a(e(v),{for:"mvts-divisor"},{default:s(()=>t[4]||(t[4]=[_("MVtS Divisor")])),_:1}),a(e(x),{id:"mvts-divisor",modelValue:e(o).mvts_divisor,"onUpdate:modelValue":t[0]||(t[0]=l=>e(o).mvts_divisor=l),type:"number",step:"0.001",min:"0.001",class:"w-full md:w-1/3"},null,8,["modelValue"]),t[5]||(t[5]=f("p",{class:"text-sm text-muted-foreground"}," This value is used to calculate the Maintenance Variance to Standard (MVtS) metric. Default value is 0.135. ",-1))])]),_:1})]),_:1}),f("div",X,[a(e(E),{type:"button",onClick:t[1]||(t[1]=l=>M("cancel")),variant:"outline"},{default:s(()=>t[6]||(t[6]=[_(" Cancel ")])),_:1}),a(e(E),{type:"submit",disabled:e(o).processing},{default:s(()=>[e(o).processing?(i(),G(e(K),{key:0,class:"mr-2 h-4 w-4 animate-spin"})):H("",!0),_(" "+r(e(o).processing?"Saving...":"Save"),1)]),_:1},8,["disabled"])])],32))}});export{ue as _};
