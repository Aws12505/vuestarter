import{d as Le,C as R,f as ce,a as v,o as i,b as a,g as F,e as l,h as V,w as n,i as s,v as z,u as o,F as D,r as B,t as C,j as ge,k as _,c as de,l as N,m as Ie,n as Q,p as Oe,W as T}from"./app-CPjAWD4z.js";import{_ as Ye}from"./AppLayout.vue_vue_type_script_setup_true_lang-C9iwbndT.js";import{_ as g}from"./Button.vue_vue_type_script_setup_true_lang-2OAUlLW-.js";import{_ as h,a as ee,b as te,c as le,d as ne,e as re}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DnfcFQBY.js";import{_ as S,a as L}from"./Label.vue_vue_type_script_setup_true_lang-DWQs3udz.js";import{_ as We}from"./Checkbox.vue_vue_type_script_setup_true_lang-DRTrEM5H.js";import{_ as A}from"./Icon.vue_vue_type_script_setup_true_lang-D7_W7H-a.js";import{_ as qe,a as He,b as me,c as ue,d as Ge,e as oe}from"./TableRow.vue_vue_type_script_setup_true_lang-CfaqljIe.js";import{_ as fe}from"./Card.vue_vue_type_script_setup_true_lang-EeOlRCyR.js";import{_ as Qe,a as Je}from"./CardTitle.vue_vue_type_script_setup_true_lang-C0ML15PB.js";import{_ as ve}from"./CardContent.vue_vue_type_script_setup_true_lang-DEwZUVLb.js";import{_ as Ke,a as Xe,b as Ze}from"./AlertDescription.vue_vue_type_script_setup_true_lang-BbmmAI9T.js";import"./index-BnOPSdd0.js";import"./createLucideIcon-BMpLhGEh.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-BZ6fMR41.js";import"./check-Bmvbjhww.js";import"./shield-CoaW6YVH.js";import"./loader-circle-BofQhXLU.js";import"./sun-DnfRTXIO.js";const he={class:"grid grid-cols-2 gap-4"},et={key:0},tt=["value"],lt=["value"],nt={class:"flex items-center space-x-2"},ot={class:"mt-6 flex justify-end"},at=Le({__name:"DelayForm",props:{delay:{type:Object,default:null},delayCodes:{type:Array,default:()=>[]},tenants:{type:Array,default:()=>[]},isSuperAdmin:{type:Boolean,default:!1},tenantSlug:{type:String,default:null}},emits:["close"],setup(c,{emit:f}){var $,M,J,w,P,Y,U;const k=c,I=f,m=R({id:($=k.delay)==null?void 0:$.id,tenant_id:k.isSuperAdmin?(M=k.delay)==null?void 0:M.tenant_id:null,date:((J=k.delay)==null?void 0:J.date)||"",driver_name:((w=k.delay)==null?void 0:w.driver_name)||"",delay_type:((P=k.delay)==null?void 0:P.delay_type)||"origin",delay_category:((Y=k.delay)==null?void 0:Y.delay_category)||"1_120",delay_code_id:((U=k.delay)==null?void 0:U.delay_code_id)||null,disputed:k.delay&&k.delay.disputed!==null?parseInt(k.delay.disputed)===1:!1,driver_controllable:k.delay&&k.delay.driver_controllable!==null?parseInt(k.delay.driver_controllable)===1:null});ce(()=>k.delay,p=>{p?(m.id=p.id,m.tenant_id=p.tenant_id,m.date=p.date,m.driver_name=p.driver_name,m.delay_type=p.delay_type,m.delay_category=p.delay_category,m.delay_code_id=p.delay_code_id,m.disputed=p.disputed!==null?parseInt(p.disputed)===1:!1,m.driver_controllable=p.driver_controllable!==null?parseInt(p.driver_controllable)===1:null):m.reset()},{immediate:!0});const O=()=>{const p=!!m.id,r=k.isSuperAdmin?p?"ontime.update.admin":"ontime.store.admin":p?"ontime.update":"ontime.store",y=k.isSuperAdmin?p?{delay:m.id}:{}:p?{tenantSlug:k.tenantSlug,delay:m.id}:{tenantSlug:k.tenantSlug};m[p?"put":"post"](route(r,y),{onSuccess:()=>I("close")})};return(p,r)=>(i(),v("form",{onSubmit:ge(O,["prevent"])},[a("div",he,[c.isSuperAdmin?(i(),v("div",et,[l(S,null,{default:n(()=>r[8]||(r[8]=[s("Company Name")])),_:1}),V(a("select",{"onUpdate:modelValue":r[0]||(r[0]=y=>o(m).tenant_id=y),class:"w-full border rounded px-2 py-1"},[r[9]||(r[9]=a("option",{value:null,disabled:""},"Select Company",-1)),(i(!0),v(D,null,B(c.tenants,y=>(i(),v("option",{key:y.id,value:y.id},C(y.name),9,tt))),128))],512),[[z,o(m).tenant_id]])])):F("",!0),a("div",null,[l(S,null,{default:n(()=>r[10]||(r[10]=[s("Date")])),_:1}),l(L,{type:"date",modelValue:o(m).date,"onUpdate:modelValue":r[1]||(r[1]=y=>o(m).date=y),class:"w-full"},null,8,["modelValue"])]),a("div",null,[l(S,null,{default:n(()=>r[11]||(r[11]=[s("Driver Name")])),_:1}),l(L,{modelValue:o(m).driver_name,"onUpdate:modelValue":r[2]||(r[2]=y=>o(m).driver_name=y),class:"w-full"},null,8,["modelValue"])]),a("div",null,[l(S,null,{default:n(()=>r[12]||(r[12]=[s("Delay Type")])),_:1}),V(a("select",{"onUpdate:modelValue":r[3]||(r[3]=y=>o(m).delay_type=y),class:"w-full border rounded px-2 py-1"},r[13]||(r[13]=[a("option",{value:"origin"},"Origin",-1),a("option",{value:"destination"},"Destination",-1)]),512),[[z,o(m).delay_type]])]),a("div",null,[l(S,null,{default:n(()=>r[14]||(r[14]=[s("Delay Category")])),_:1}),V(a("select",{"onUpdate:modelValue":r[4]||(r[4]=y=>o(m).delay_category=y),class:"w-full border rounded px-2 py-1"},r[15]||(r[15]=[a("option",{value:"1_120"},"1–120 min",-1),a("option",{value:"121_600"},"121–600 min",-1),a("option",{value:"601_plus"},"601+ min",-1)]),512),[[z,o(m).delay_category]])]),a("div",null,[l(S,null,{default:n(()=>r[16]||(r[16]=[s("Delay Code")])),_:1}),V(a("select",{"onUpdate:modelValue":r[5]||(r[5]=y=>o(m).delay_code_id=y),class:"w-full border rounded px-2 py-1"},[(i(!0),v(D,null,B(c.delayCodes,y=>(i(),v("option",{key:y.id,value:y.id},C(y.code),9,lt))),128))],512),[[z,o(m).delay_code_id]])]),a("div",nt,[l(We,{checked:o(m).disputed,"onUpdate:checked":r[6]||(r[6]=y=>o(m).disputed=y)},null,8,["checked"]),l(S,null,{default:n(()=>r[17]||(r[17]=[s("Disputed")])),_:1})]),a("div",null,[l(S,null,{default:n(()=>r[18]||(r[18]=[s("Driver Controllable")])),_:1}),V(a("select",{"onUpdate:modelValue":r[7]||(r[7]=y=>o(m).driver_controllable=y),class:"w-full border rounded px-2 py-1"},r[19]||(r[19]=[a("option",{value:null},"N/A",-1),a("option",{value:!0},"Yes",-1),a("option",{value:!1},"No",-1)]),512),[[z,o(m).driver_controllable]])])]),a("div",ot,[l(g,{type:"submit",disabled:o(m).processing},{default:n(()=>[s(C(o(m).id?"Update":"Create"),1)]),_:1},8,["disabled"])])],32))}}),st={class:"max-w-7xl mx-auto p-6 space-y-8"},dt={class:"flex flex-col sm:flex-row justify-between items-center mb-6 gap-4"},rt={class:"flex flex-wrap gap-3"},ut={class:"cursor-pointer"},it=["action"],mt={class:"flex flex-col gap-2"},ft={class:"flex flex-wrap gap-2"},vt={key:0,class:"text-sm text-muted-foreground"},pt={key:0},yt={key:1},ct={key:2},gt={class:"flex flex-col justify-between gap-4"},bt={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"},Ct=["value"],kt={class:"flex justify-end"},xt={class:"overflow-x-auto"},_t={class:"flex items-center justify-center"},St=["checked"],wt={class:"flex items-center"},Dt={key:0,class:"ml-2"},$t={key:0,class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},At={key:1,class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ft={key:1,class:"ml-2 opacity-50"},Nt=["value"],Vt={key:0,class:"ml-1 text-xs text-red-500"},Ut={class:"flex space-x-2"},Tt={key:0,class:"bg-muted/20 px-4 py-3 border-t"},zt={class:"flex justify-between items-center"},Mt={class:"text-sm text-muted-foreground"},Pt={class:"flex items-center gap-4"},jt={class:"flex items-center gap-2"},Et={class:"flex"},Bt=["innerHTML"],Rt={class:"mt-4 space-y-4"},Lt={class:"flex items-center justify-between"},It={class:"max-h-[400px] overflow-y-auto"},Ot={key:0,class:"text-center py-8 text-muted-foreground border rounded-md"},Yt={key:1,class:"space-y-2"},Wt=["onClick"],qt={class:"font-medium"},Ht={key:0,class:"ml-2 text-xs text-red-500"},Gt={key:0,class:"text-sm text-muted-foreground mt-1"},Qt={class:"opacity-0 group-hover:opacity-100 transition-opacity"},Jt={key:0,class:"border rounded-md p-4 space-y-4"},Kt={class:"text-sm font-medium"},Xt={class:"space-y-3"},Zt={class:"flex justify-end space-x-2"},bl={__name:"Index",props:{delays:{type:Object,default:()=>({data:[],links:[]})},tenantSlug:{type:String,default:null},delay_codes:Array,tenants:{type:Array,default:()=>[]},isSuperAdmin:{type:Boolean,default:!1},dateRange:{type:Object,default:null},dateFilter:{type:String,default:"full"}},setup(c){const f=c,k=[{title:f.tenantSlug?"Dashboard":"Admin Dashboard",href:f.tenantSlug?route("dashboard",{tenantSlug:f.tenantSlug}):route("admin.dashboard")},{title:"On-Time",href:f.tenantSlug?route("ontime.index",{tenantSlug:f.tenantSlug}):route("ontime.index.admin")}],I=_(!1),m=_(!1),O=_(null),$=_(""),M=_(!1),J=_(null),w=_([]),P=_(!1),Y=_(null),U=_(!1),p=_(null),r=_({code:"",description:""}),y=_(!1),ie=_(null),W=_("date"),q=_("desc"),b=_({search:"",dateFrom:"",dateTo:"",delayCode:"",disputed:"",controllable:""}),ae=["date","delay_type","driver_name","penalty","delay_code","disputed","driver_controllable"],H=de(()=>{let d=[...f.delays.data];if(b.value.search){const e=b.value.search.toLowerCase();d=d.filter(t=>{var u,x,E,Z;return((u=t.driver_name)==null?void 0:u.toLowerCase().includes(e))||((x=t.delay_type)==null?void 0:x.toLowerCase().includes(e))||((Z=(E=t.delay_code)==null?void 0:E.code)==null?void 0:Z.toLowerCase().includes(e))})}if(b.value.dateFrom&&(d=d.filter(e=>e.date&&e.date>=b.value.dateFrom)),b.value.dateTo&&(d=d.filter(e=>e.date&&e.date<=b.value.dateTo)),b.value.delayCode&&(d=d.filter(e=>{var t;return((t=e.delay_code)==null?void 0:t.id)===parseInt(b.value.delayCode)})),b.value.disputed!==""){const e=b.value.disputed==="true";d=d.filter(t=>t.disputed===e)}if(b.value.controllable!=="")if(b.value.controllable==="null")d=d.filter(e=>e.driver_controllable===null);else{const e=b.value.controllable==="true";d=d.filter(t=>t.driver_controllable===e)}return d.sort((e,t)=>{var E,Z;let u,x;return W.value==="delay_code"?(u=((E=e.delay_code)==null?void 0:E.code)||"",x=((Z=t.delay_code)==null?void 0:Z.code)||""):(u=e[W.value],x=t[W.value]),u===null?1:x===null?-1:(typeof u=="string"&&(u=u.toLowerCase(),x=x.toLowerCase()),u<x?q.value==="asc"?-1:1:u>x?q.value==="asc"?1:-1:0)}),d}),be=de(()=>f.delay_codes.filter(d=>!d.deleted_at));function Ce(d){W.value===d?q.value=q.value==="asc"?"desc":"asc":(W.value=d,q.value="asc")}function G(){}function ke(){b.value={search:"",dateFrom:"",dateTo:"",delayCode:"",disputed:"",controllable:""}}const K=_(f.delays.per_page||10),j=_(f.dateFilter||"full");function xe(){const d=f.tenantSlug?route("ontime.index",{tenantSlug:f.tenantSlug}):route("ontime.index.admin");T.get(d,{dateFilter:j.value,perPage:K.value},{preserveState:!0})}function X(d){j.value=d;const e=f.tenantSlug?route("ontime.index",{tenantSlug:f.tenantSlug}):route("ontime.index.admin");T.get(e,{dateFilter:d,perPage:K.value},{preserveState:!0})}function _e(d){if(d){const e=new URL(d);e.searchParams.set("perPage",K.value),T.get(e.href,{},{preserveScroll:!0,preserveState:!0,only:["delays"]})}}function se(d){if(!d)return"";const e=d.split("-");if(e.length!==3)return d;const[t,u,x]=e;return`${Number(u)}/${Number(x)}/${t}`}const pe=(d=null)=>{O.value=d,I.value=!0},Se=d=>{J.value=d,M.value=!0},we=()=>{m.value=!0,U.value=!1,p.value=null},De=()=>{r.value={code:"",description:""},p.value=null,U.value=!0},$e=d=>{r.value={code:d.code,description:d.description||""},p.value=d.id,U.value=!0},Ae=()=>{U.value=!1,p.value=null},ye=d=>{ie.value=d,y.value=!0},Fe=d=>{const e=R({}),t=f.isSuperAdmin?"delay_codes.destroy.admin":"delay_codes.destroy",u=f.isSuperAdmin?{id:d}:{tenantSlug:f.tenantSlug,delay_code:d};e.delete(route(t,u),{onSuccess:()=>{$.value="Delay code deleted successfully.",y.value=!1,T.reload({only:["delay_codes"]})},onError:x=>{console.error(x)}})},Ne=()=>{const d=R({code:r.value.code,description:r.value.description}),e=p.value?f.isSuperAdmin?"delay_codes.update.admin":"delay_codes.update":f.isSuperAdmin?"delay_codes.store.admin":"delay_codes.store",t=p.value?f.isSuperAdmin?{id:p.value}:{tenantSlug:f.tenantSlug,id:p.value}:f.isSuperAdmin?{}:{tenantSlug:f.tenantSlug};(p.value?d.put:d.post).call(d,route(e,t),{onSuccess:()=>{$.value=p.value?"Delay code updated successfully.":"Delay code created successfully.",U.value=!1,p.value=null,T.reload({only:["delay_codes"]})},onError:x=>{console.error(x)}})},Ve=d=>{R({}).post(route(f.isSuperAdmin?"delay_codes.restore.admin":"delay_codes.restore",{id:d}),{onSuccess:()=>{$.value="Delay code restored successfully.",T.reload({only:["delay_codes"]})},onError:t=>{console.error(t)}})},Ue=d=>{R({}).delete(route(f.isSuperAdmin?"delay_codes.forceDelete.admin":"delay_codes.forceDelete",{id:d}),{onSuccess:()=>{$.value="Delay code permanently deleted successfully.",T.reload({only:["delay_codes"]})},onError:t=>{console.error(t)}})},Te=d=>{const e=R({}),t=f.isSuperAdmin?"ontime.destroy.admin":"ontime.destroy",u=f.isSuperAdmin?{delay:d}:{tenantSlug:f.tenantSlug,delay:d};e.delete(route(t,u),{preserveScroll:!0,onSuccess:()=>{$.value="Delay record deleted successfully.",M.value=!1}})};ce($,d=>{d&&setTimeout(()=>{$.value=""},5e3)});const ze=de(()=>H.value.length>0&&w.value.length===H.value.length);function Me(d){d.target.checked?w.value=H.value.map(e=>e.id):w.value=[]}function Pe(){w.value.length>0&&(P.value=!0)}function je(){const d=R({ids:w.value}),e=f.isSuperAdmin?"ontime.destroyBulk.admin":"ontime.destroyBulk",t=f.isSuperAdmin?{}:{tenantSlug:f.tenantSlug};d.delete(route(e,t),{preserveScroll:!0,onSuccess:()=>{$.value=`${w.value.length} delay records deleted successfully.`,w.value=[],P.value=!1,T.reload()},onError:u=>{console.error(u)}})}function Ee(d){const e=d.target.files[0];if(!e)return;const t=new FormData;t.append("csv_file",e);const u=f.isSuperAdmin?route("ontime.import.admin"):route("ontime.import",{tenantSlug:f.tenantSlug});T.post(u,t,{onSuccess:()=>{$.value="Delays imported successfully",d.target.value=""},onError:x=>{console.error(x),d.target.value=""}})}function Be(){Y.value&&Y.value.submit()}const Re=de(()=>f.tenantSlug?route("ontime.export",{tenantSlug:f.tenantSlug}):route("ontime.export.admin"));return(d,e)=>(i(),N(Ye,{breadcrumbs:k,tenantSlug:c.tenantSlug},{default:n(()=>[l(o(Ie),{title:"On-Time"}),a("div",st,[$.value?(i(),N(o(Ke),{key:0,variant:"success"},{default:n(()=>[l(o(Xe),null,{default:n(()=>e[31]||(e[31]=[s("Success")])),_:1}),l(o(Ze),null,{default:n(()=>[s(C($.value),1)]),_:1})]),_:1})):F("",!0),a("div",dt,[e[36]||(e[36]=a("h1",{class:"text-2xl font-bold text-gray-800 dark:text-gray-200"},"On-Time Management",-1)),a("div",rt,[l(g,{onClick:e[0]||(e[0]=t=>pe()),variant:"default"},{default:n(()=>[l(A,{name:"plus",class:"mr-2 h-4 w-4"}),e[32]||(e[32]=s(" Add Delay "))]),_:1}),w.value.length>0?(i(),N(g,{key:0,onClick:e[1]||(e[1]=t=>Pe()),variant:"destructive"},{default:n(()=>[l(A,{name:"trash",class:"mr-2 h-4 w-4"}),s(" Delete Selected ("+C(w.value.length)+") ",1)]),_:1})):F("",!0),a("label",ut,[l(g,{variant:"secondary",as:"span"},{default:n(()=>[l(A,{name:"upload",class:"mr-2 h-4 w-4"}),e[33]||(e[33]=s(" Import CSV "))]),_:1}),a("input",{type:"file",class:"hidden",onChange:Ee,accept:".csv"},null,32)]),l(g,{onClick:ge(Be,["prevent"]),variant:"outline"},{default:n(()=>[l(A,{name:"download",class:"mr-2 h-4 w-4"}),e[34]||(e[34]=s(" Export CSV "))]),_:1}),c.isSuperAdmin?(i(),N(g,{key:1,onClick:e[2]||(e[2]=t=>we()),variant:"outline"},{default:n(()=>[l(A,{name:"settings",class:"mr-2 h-4 w-4"}),e[35]||(e[35]=s(" Manage Delay Codes "))]),_:1})):F("",!0)])]),a("form",{ref_key:"exportForm",ref:Y,action:Re.value,method:"GET",class:"hidden"},null,8,it),l(o(fe),null,{default:n(()=>[l(o(ve),{class:"p-4"},{default:n(()=>[a("div",mt,[a("div",ft,[l(g,{onClick:e[3]||(e[3]=t=>X("yesterday")),variant:"outline",size:"sm",class:Q({"bg-primary/10 text-primary border-primary":j.value==="yesterday"})},{default:n(()=>e[37]||(e[37]=[s(" Yesterday ")])),_:1},8,["class"]),l(g,{onClick:e[4]||(e[4]=t=>X("current-week")),variant:"outline",size:"sm",class:Q({"bg-primary/10 text-primary border-primary":j.value==="current-week"})},{default:n(()=>e[38]||(e[38]=[s(" Current Week ")])),_:1},8,["class"]),l(g,{onClick:e[5]||(e[5]=t=>X("6w")),variant:"outline",size:"sm",class:Q({"bg-primary/10 text-primary border-primary":j.value==="6w"})},{default:n(()=>e[39]||(e[39]=[s(" 6 Weeks ")])),_:1},8,["class"]),l(g,{onClick:e[6]||(e[6]=t=>X("quarterly")),variant:"outline",size:"sm",class:Q({"bg-primary/10 text-primary border-primary":j.value==="quarterly"})},{default:n(()=>e[40]||(e[40]=[s(" Quarterly ")])),_:1},8,["class"]),l(g,{onClick:e[7]||(e[7]=t=>X("full")),variant:"outline",size:"sm",class:Q({"bg-primary/10 text-primary border-primary":j.value==="full"})},{default:n(()=>e[41]||(e[41]=[s(" Full ")])),_:1},8,["class"])]),c.dateRange?(i(),v("div",vt,[j.value==="yesterday"&&c.dateRange.start?(i(),v("span",pt," Showing data from "+C(se(c.dateRange.start)),1)):c.dateRange.start&&c.dateRange.end?(i(),v("span",yt," Showing data from "+C(se(c.dateRange.start))+" to "+C(se(c.dateRange.end)),1)):(i(),v("span",ct,C(c.dateRange.label),1))])):F("",!0)])]),_:1})]),_:1}),l(o(fe),null,{default:n(()=>[l(o(Qe),null,{default:n(()=>[l(o(Je),null,{default:n(()=>e[42]||(e[42]=[s("Filters")])),_:1})]),_:1}),l(o(ve),null,{default:n(()=>[a("div",gt,[a("div",bt,[a("div",null,[l(o(S),{for:"search"},{default:n(()=>e[43]||(e[43]=[s("Search")])),_:1}),l(o(L),{id:"search",modelValue:b.value.search,"onUpdate:modelValue":e[8]||(e[8]=t=>b.value.search=t),type:"text",placeholder:"Search by driver or type...",onInput:G},null,8,["modelValue"])]),a("div",null,[l(o(S),{for:"dateFrom"},{default:n(()=>e[44]||(e[44]=[s("Date From")])),_:1}),l(o(L),{id:"dateFrom",modelValue:b.value.dateFrom,"onUpdate:modelValue":e[9]||(e[9]=t=>b.value.dateFrom=t),type:"date",onChange:G},null,8,["modelValue"])]),a("div",null,[l(o(S),{for:"dateTo"},{default:n(()=>e[45]||(e[45]=[s("Date To")])),_:1}),l(o(L),{id:"dateTo",modelValue:b.value.dateTo,"onUpdate:modelValue":e[10]||(e[10]=t=>b.value.dateTo=t),type:"date",onChange:G},null,8,["modelValue"])]),a("div",null,[l(o(S),{for:"delayCode"},{default:n(()=>e[46]||(e[46]=[s("Delay Code")])),_:1}),V(a("select",{id:"delayCode","onUpdate:modelValue":e[11]||(e[11]=t=>b.value.delayCode=t),onChange:G,class:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"},[e[47]||(e[47]=a("option",{value:""},"All Codes",-1)),(i(!0),v(D,null,B(c.delay_codes,t=>(i(),v("option",{key:t.id,value:t.id},C(t.code),9,Ct))),128))],544),[[z,b.value.delayCode]])]),a("div",null,[l(o(S),{for:"disputed"},{default:n(()=>e[48]||(e[48]=[s("Disputed Status")])),_:1}),V(a("select",{id:"disputed","onUpdate:modelValue":e[12]||(e[12]=t=>b.value.disputed=t),onChange:G,class:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"},e[49]||(e[49]=[a("option",{value:""},"All",-1),a("option",{value:"true"},"Disputed",-1),a("option",{value:"false"},"Not Disputed",-1)]),544),[[z,b.value.disputed]])]),a("div",null,[l(o(S),{for:"controllable"},{default:n(()=>e[50]||(e[50]=[s("Driver Controllable")])),_:1}),V(a("select",{id:"controllable","onUpdate:modelValue":e[13]||(e[13]=t=>b.value.controllable=t),onChange:G,class:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"},e[51]||(e[51]=[a("option",{value:""},"All",-1),a("option",{value:"true"},"Yes",-1),a("option",{value:"false"},"No",-1),a("option",{value:"null"},"N/A",-1)]),544),[[z,b.value.controllable]])])]),a("div",kt,[l(g,{onClick:ke,variant:"ghost",size:"sm"},{default:n(()=>[l(A,{name:"rotate-ccw",class:"mr-2 h-4 w-4"}),e[52]||(e[52]=s(" Reset Filters "))]),_:1})])])]),_:1})]),_:1}),l(o(fe),null,{default:n(()=>[l(o(ve),{class:"p-0"},{default:n(()=>[a("div",xt,[l(o(qe),{class:"relative h-[500px] overflow-auto"},{default:n(()=>[l(o(He),null,{default:n(()=>[l(o(me),{class:"sticky top-0 bg-background border-b z-10"},{default:n(()=>[l(o(ue),{class:"w-[50px]"},{default:n(()=>[a("div",_t,[a("input",{type:"checkbox",onChange:Me,checked:ze.value,class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,40,St)])]),_:1}),c.isSuperAdmin?(i(),N(o(ue),{key:0},{default:n(()=>e[53]||(e[53]=[s("Company Name")])),_:1})):F("",!0),(i(),v(D,null,B(ae,t=>l(o(ue),{key:t,class:"cursor-pointer",onClick:u=>Ce(t)},{default:n(()=>[a("div",wt,[s(C(t.replace(/_/g," ").split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" "))+" ",1),W.value===t?(i(),v("div",Dt,[q.value==="asc"?(i(),v("svg",$t,e[54]||(e[54]=[a("path",{d:"M8 15l4-4 4 4"},null,-1)]))):(i(),v("svg",At,e[55]||(e[55]=[a("path",{d:"M16 9l-4 4-4-4"},null,-1)])))])):(i(),v("div",Ft,e[56]||(e[56]=[a("svg",{class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[a("path",{d:"M8 10l4-4 4 4"}),a("path",{d:"M16 14l-4 4-4-4"})],-1)])))])]),_:2},1032,["onClick"])),64)),l(o(ue),null,{default:n(()=>e[57]||(e[57]=[s("Actions")])),_:1})]),_:1})]),_:1}),l(o(Ge),null,{default:n(()=>[H.value.length===0?(i(),N(o(me),{key:0},{default:n(()=>[l(o(oe),{colspan:c.isSuperAdmin?ae.length+2:ae.length+1,class:"text-center py-8"},{default:n(()=>e[58]||(e[58]=[s(" No delays found matching your criteria ")])),_:1},8,["colspan"])]),_:1})):F("",!0),(i(!0),v(D,null,B(H.value,t=>(i(),N(o(me),{key:t.id,class:"hover:bg-muted/50"},{default:n(()=>[l(o(oe),{class:"text-center"},{default:n(()=>[V(a("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":e[14]||(e[14]=u=>w.value=u),class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,8,Nt),[[Oe,w.value]])]),_:2},1024),c.isSuperAdmin?(i(),N(o(oe),{key:0},{default:n(()=>{var u;return[s(C(((u=t.tenant)==null?void 0:u.name)||"—"),1)]}),_:2},1024)):F("",!0),(i(),v(D,null,B(ae,u=>l(o(oe),{key:u,class:"whitespace-nowrap"},{default:n(()=>{var x,E;return[u==="date"?(i(),v(D,{key:0},[s(C(se(t[u])),1)],64)):u==="disputed"?(i(),v(D,{key:1},[s(C(t[u]?"Yes":"No"),1)],64)):u==="driver_controllable"?(i(),v(D,{key:2},[s(C(t[u]===null?"N/A":t[u]?"Yes":"No"),1)],64)):u==="delay_code"?(i(),v(D,{key:3},[s(C(((x=t.delay_code)==null?void 0:x.code)||"—")+" ",1),(E=t.delay_code)!=null&&E.deleted_at?(i(),v("span",Vt,"(Deleted Code)")):F("",!0)],64)):(i(),v(D,{key:4},[s(C(t[u]),1)],64))]}),_:2},1024)),64)),l(o(oe),null,{default:n(()=>[a("div",Ut,[l(g,{onClick:u=>pe(t),variant:"warning",size:"sm"},{default:n(()=>[l(A,{name:"pencil",class:"mr-1 h-4 w-4"}),e[59]||(e[59]=s(" Edit "))]),_:2},1032,["onClick"]),l(g,{onClick:u=>Se(t.id),variant:"destructive",size:"sm"},{default:n(()=>[l(A,{name:"trash",class:"mr-1 h-4 w-4"}),e[60]||(e[60]=s(" Delete "))]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),c.delays.links?(i(),v("div",Tt,[a("div",zt,[a("div",Mt," Showing "+C(H.value.length)+" of "+C(c.delays.data.length)+" entries ",1),a("div",Pt,[a("div",jt,[l(o(S),{for:"perPage",class:"text-sm"},{default:n(()=>e[61]||(e[61]=[s("Per page:")])),_:1}),V(a("select",{id:"perPage","onUpdate:modelValue":e[15]||(e[15]=t=>K.value=t),onChange:xe,class:"h-8 rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"},e[62]||(e[62]=[a("option",{value:"10"},"10",-1),a("option",{value:"25"},"25",-1),a("option",{value:"50"},"50",-1),a("option",{value:"100"},"100",-1)]),544),[[z,K.value]])]),a("div",Et,[(i(!0),v(D,null,B(c.delays.links,t=>(i(),N(g,{key:t.label,onClick:u=>_e(t.url),disabled:!t.url,variant:"ghost",size:"sm",class:Q(["mx-1",{"bg-primary/10 text-primary border-primary":t.active}])},{default:n(()=>[a("span",{innerHTML:t.label},null,8,Bt)]),_:2},1032,["onClick","disabled","class"]))),128))])])])])):F("",!0)]),_:1})]),_:1}),l(o(h),{open:I.value,"onUpdate:open":e[17]||(e[17]=t=>I.value=t)},{default:n(()=>[l(o(ee),{class:"sm:max-w-2xl"},{default:n(()=>[l(o(te),null,{default:n(()=>[l(o(le),null,{default:n(()=>[s(C(O.value?"Edit":"Add")+" Delay",1)]),_:1}),l(o(ne),null,{default:n(()=>[s(" Fill in the details to "+C(O.value?"update":"create")+" a delay record. ",1)]),_:1})]),_:1}),l(at,{delay:O.value,"delay-codes":be.value,tenants:c.tenants,"is-super-admin":c.isSuperAdmin,"tenant-slug":c.tenantSlug,onClose:e[16]||(e[16]=t=>I.value=!1)},null,8,["delay","delay-codes","tenants","is-super-admin","tenant-slug"])]),_:1})]),_:1},8,["open"]),l(o(h),{open:m.value,"onUpdate:open":e[21]||(e[21]=t=>m.value=t)},{default:n(()=>[l(o(ee),{class:"sm:max-w-lg"},{default:n(()=>[l(o(te),null,{default:n(()=>[l(o(le),null,{default:n(()=>e[63]||(e[63]=[s("Manage Delay Codes")])),_:1}),l(o(ne),null,{default:n(()=>e[64]||(e[64]=[s(" Create and manage delay codes for your organization. ")])),_:1})]),_:1}),a("div",Rt,[a("div",Lt,[e[66]||(e[66]=a("h3",{class:"text-sm font-medium"},"Current Delay Codes",-1)),l(g,{onClick:De,size:"sm",variant:"outline"},{default:n(()=>[l(A,{name:"plus",class:"mr-2 h-4 w-4"}),e[65]||(e[65]=s(" Add New Code "))]),_:1})]),a("div",It,[!c.delay_codes||c.delay_codes.length===0?(i(),v("div",Ot," No delay codes found ")):(i(),v("div",Yt,[(i(!0),v(D,null,B(c.delay_codes,t=>(i(),v("div",{key:t.id,class:"flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 group"},[a("div",{class:"flex-1 cursor-pointer",onClick:u=>$e(t)},[a("div",qt,[s(C(t.code)+" ",1),t.deleted_at?(i(),v("span",Ht,"(Deleted)")):F("",!0)]),t.description?(i(),v("div",Gt,C(t.description),1)):F("",!0)],8,Wt),a("div",Qt,[c.isSuperAdmin?(i(),v(D,{key:0},[t.deleted_at?(i(),v(D,{key:0},[l(g,{onClick:u=>Ve(t.id),size:"sm",variant:"outline"},{default:n(()=>[l(A,{name:"refresh",class:"mr-2 h-4 w-4"}),e[67]||(e[67]=s(" Restore "))]),_:2},1032,["onClick"]),l(g,{onClick:u=>Ue(t.id),size:"sm",variant:"destructive"},{default:n(()=>[l(A,{name:"trash",class:"mr-2 h-4 w-4"}),e[68]||(e[68]=s(" Permanently Delete "))]),_:2},1032,["onClick"])],64)):(i(),N(g,{key:1,onClick:u=>ye(t.id),size:"sm",variant:"destructive"},{default:n(()=>[l(A,{name:"trash",class:"mr-2 h-4 w-4"}),e[69]||(e[69]=s(" Delete "))]),_:2},1032,["onClick"]))],64)):(i(),N(g,{key:1,onClick:u=>ye(t.id),size:"sm",variant:"destructive"},{default:n(()=>[l(A,{name:"trash",class:"mr-2 h-4 w-4"}),e[70]||(e[70]=s(" Delete "))]),_:2},1032,["onClick"]))])]))),128))]))]),U.value?(i(),v("div",Jt,[a("h3",Kt,C(p.value?"Edit":"Add")+" Delay Code",1),a("div",Xt,[a("div",null,[l(o(S),{for:"code"},{default:n(()=>e[71]||(e[71]=[s("Code")])),_:1}),l(o(L),{id:"code",modelValue:r.value.code,"onUpdate:modelValue":e[18]||(e[18]=t=>r.value.code=t),placeholder:"Enter code"},null,8,["modelValue"])]),a("div",null,[l(o(S),{for:"description"},{default:n(()=>e[72]||(e[72]=[s("Description")])),_:1}),l(o(L),{id:"description",modelValue:r.value.description,"onUpdate:modelValue":e[19]||(e[19]=t=>r.value.description=t),placeholder:"Enter description"},null,8,["modelValue"])]),a("div",Zt,[l(g,{onClick:Ae,variant:"ghost",size:"sm"},{default:n(()=>e[73]||(e[73]=[s("Cancel")])),_:1}),l(g,{onClick:Ne,variant:"default",size:"sm"},{default:n(()=>e[74]||(e[74]=[s("Save")])),_:1})])])])):F("",!0)]),l(o(re),{class:"mt-6"},{default:n(()=>[l(g,{onClick:e[20]||(e[20]=t=>m.value=!1),variant:"outline"},{default:n(()=>e[75]||(e[75]=[s("Close")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),l(o(h),{open:y.value,"onUpdate:open":e[24]||(e[24]=t=>y.value=t)},{default:n(()=>[l(o(ee),null,{default:n(()=>[l(o(te),null,{default:n(()=>[l(o(le),null,{default:n(()=>e[76]||(e[76]=[s("Confirm Deletion")])),_:1}),l(o(ne),null,{default:n(()=>e[77]||(e[77]=[s(" Are you sure you want to delete this delay code? This action cannot be undone. ")])),_:1})]),_:1}),l(o(re),{class:"mt-4"},{default:n(()=>[l(g,{type:"button",onClick:e[22]||(e[22]=t=>y.value=!1),variant:"outline"},{default:n(()=>e[78]||(e[78]=[s(" Cancel ")])),_:1}),l(g,{type:"button",onClick:e[23]||(e[23]=t=>Fe(ie.value)),variant:"destructive"},{default:n(()=>e[79]||(e[79]=[s(" Delete ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),l(o(h),{open:M.value,"onUpdate:open":e[27]||(e[27]=t=>M.value=t)},{default:n(()=>[l(o(ee),null,{default:n(()=>[l(o(te),null,{default:n(()=>[l(o(le),null,{default:n(()=>e[80]||(e[80]=[s("Confirm Deletion")])),_:1}),l(o(ne),null,{default:n(()=>e[81]||(e[81]=[s(" Are you sure you want to delete this delay record? This action cannot be undone. ")])),_:1})]),_:1}),l(o(re),{class:"mt-4"},{default:n(()=>[l(g,{type:"button",onClick:e[25]||(e[25]=t=>M.value=!1),variant:"outline"},{default:n(()=>e[82]||(e[82]=[s(" Cancel ")])),_:1}),l(g,{type:"button",onClick:e[26]||(e[26]=t=>Te(J.value)),variant:"destructive"},{default:n(()=>e[83]||(e[83]=[s(" Delete ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),l(o(h),{open:P.value,"onUpdate:open":e[30]||(e[30]=t=>P.value=t)},{default:n(()=>[l(o(ee),null,{default:n(()=>[l(o(te),null,{default:n(()=>[l(o(le),null,{default:n(()=>e[84]||(e[84]=[s("Confirm Bulk Deletion")])),_:1}),l(o(ne),null,{default:n(()=>[s(" Are you sure you want to delete "+C(w.value.length)+" delay records? This action cannot be undone. ",1)]),_:1})]),_:1}),l(o(re),{class:"mt-4"},{default:n(()=>[l(g,{type:"button",onClick:e[28]||(e[28]=t=>P.value=!1),variant:"outline"},{default:n(()=>e[85]||(e[85]=[s(" Cancel ")])),_:1}),l(g,{type:"button",onClick:e[29]||(e[29]=t=>je()),variant:"destructive"},{default:n(()=>e[86]||(e[86]=[s(" Delete Selected ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])]),_:1},8,["tenantSlug"]))}};export{bl as default};
