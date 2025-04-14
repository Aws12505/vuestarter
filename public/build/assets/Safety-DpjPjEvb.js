import{k as y,C as U,f as ke,c as Se,l as S,o as d,w as l,e as n,b as s,u as t,m as we,g as b,i,t as c,a as f,h as j,F as w,r as C,v as L,j as X,n as h,p as Ce,W as I}from"./app-B91Zl0Oo.js";import{_ as he}from"./AppLayout.vue_vue_type_script_setup_true_lang-B7AKyEh7.js";import{_ as $}from"./Icon.vue_vue_type_script_setup_true_lang-D1rnNBp_.js";import{_ as $e,a as ze,b as O,c as T,d as Ae,e as F}from"./TableRow.vue_vue_type_script_setup_true_lang-CPbVIJtt.js";import{_ as p}from"./Button.vue_vue_type_script_setup_true_lang-PJXKnqlO.js";import{_ as G}from"./Card.vue_vue_type_script_setup_true_lang-BJWyaRE5.js";import{_ as Q}from"./CardContent.vue_vue_type_script_setup_true_lang-NmazK22E.js";import{_ as Y,a as J,b as K,c as Z,d as ee,e as te}from"./DialogTitle.vue_vue_type_script_setup_true_lang-DFI7N8AN.js";import{a as ae,_ as q}from"./Label.vue_vue_type_script_setup_true_lang-ChWoabUD.js";import{_ as Ee,a as Ne,b as Ve}from"./AlertDescription.vue_vue_type_script_setup_true_lang-CUV_fE8p.js";import"./index-BwX3HRAb.js";import"./createLucideIcon-CMlEOo_P.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-d3MMgUIc.js";import"./shield-Bc7egZTN.js";import"./check-Cp0bzDxk.js";import"./loader-circle-DQaJYqkb.js";import"./sun-Dzok2l92.js";const Fe={class:"max-w-7xl mx-auto p-6 space-y-8"},De={class:"flex flex-col sm:flex-row justify-between items-center mb-6 gap-4"},Pe={class:"flex flex-wrap gap-3"},Me={key:1,class:"flex items-center gap-2"},Ue=["value"],je={class:"flex items-center gap-2"},Te={class:"cursor-pointer"},Be={class:"flex flex-col gap-2"},Re={class:"flex flex-wrap gap-2"},Le={key:0,class:"text-sm text-muted-foreground"},Ie={key:0},Oe={key:1},qe={class:"overflow-x-auto bg-background dark:bg-background border-t border-border"},We={class:"flex items-center justify-center"},He=["checked"],Xe=["value"],Ge={class:"flex space-x-2"},Qe={key:0,class:"bg-muted/20 px-4 py-3 border-t"},Ye={class:"flex justify-between items-center"},Je={class:"text-sm text-muted-foreground"},Ke={class:"flex items-center gap-4"},Ze={class:"flex items-center gap-2"},et={class:"flex"},tt=["innerHTML"],at={key:0,class:"col-span-2"},nt={class:"relative"},lt=["value"],St={__name:"Safety",props:{entries:{type:Object,default:()=>({data:[],links:[]})},tenantSlug:String,SuperAdmin:Boolean,tenants:Array,dateRange:Object,dateFilter:{type:String,default:"full"}},setup(u){const o=u,x=y(""),z=y(!1),B=y("Create Entry"),A=y("Create"),R=y(null),k=y(o.dateFilter||"full"),E=y(10),g=y([]),N=y(!1),ne=[{title:o.tenantSlug?"Dashboard":"Admin Dashboard",href:o.tenantSlug?route("dashboard",{tenantSlug:o.tenantSlug}):route("admin.dashboard")},{title:"Safety",href:o.tenantSlug?route("safety.index",{tenantSlug:o.tenantSlug}):route("safety.index.admin")}],D={driver_name:"text",user_name:"text",group:"text",group_hierarchy:"text",minutes_analyzed:"decimal",green_minutes_percent:"decimal",overspeeding_percent:"decimal",driver_score:"decimal",total_events_avg_fd_impact:"decimal",average_following_distance_sec:"decimal",average_following_distance_gz_impact:"decimal",total_events:"decimal",high_g:"decimal",low_impact:"decimal",driver_initiated:"decimal",potential_collision:"decimal",sign_violations:"decimal",sign_violations_gz_impact:"decimal",traffic_light_violation:"decimal",traffic_light_violation_gz_impact:"decimal",u_turn:"decimal",u_turn_gz_impact:"decimal",hard_braking:"decimal",hard_braking_gz_impact:"decimal",hard_turn:"decimal",hard_turn_gz_impact:"decimal",hard_acceleration:"decimal",hard_acceleration_gz_impact:"decimal",driver_distraction:"decimal",driver_distraction_gz_impact:"decimal",following_distance:"decimal",following_distance_gz_impact:"decimal",speeding_violations:"decimal",speeding_violations_gz_impact:"decimal",seatbelt_compliance:"decimal",camera_obstruction:"decimal",driver_drowsiness:"decimal",weaving:"decimal",weaving_gz_impact:"decimal",collision_warning:"decimal",collision_warning_gz_impact:"decimal",requested_video:"decimal",backing:"decimal",roadside_parking:"decimal",driver_distracted_hard_brake:"decimal",following_distance_hard_brake:"decimal",driver_distracted_following_distance:"decimal",driver_star:"decimal",driver_star_gz_impact:"decimal",vehicle_type:"text",safety_normalisation_factor:"decimal",date:"date"},P=Object.keys(D),M=[...P],v=U({tenant_id:null,...Object.fromEntries(P.map(r=>[r,""])),id:null}),_=U({csv_file:null,date:"",tenant_id:null}),le=U({});function re(r){const e=D[r];return e==="decimal"||e==="integer"?"number":e==="date"?"date":"text"}function se(r){const e=D[r];return e==="decimal"?"0.01":e==="integer"?"1":null}function ie(r){const e=D[r];return e==="decimal"||e==="integer"?"-99999":null}function oe(){v.reset(),B.value="Create Entry",A.value="Create",z.value=!0}function de(r){B.value="Edit Entry",A.value="Update",v.tenant_id=o.SuperAdmin?r.tenant_id:null,v.id=r.id,P.forEach(e=>{v[e]=r[e]}),z.value=!0}function W(){z.value=!1}function ue(){const r=A.value==="Create",e=r?o.SuperAdmin?route("safety.store.admin"):route("safety.store",o.tenantSlug):o.SuperAdmin?route("safety.update.admin",[v.id]):route("safety.update",[o.tenantSlug,v.id]);v[r?"post":"put"](e,{onSuccess:()=>{x.value=r?"Entry created.":"Entry updated.",W()},onError:()=>alert("Something went wrong.")})}function me(r){if(!confirm("Are you sure?"))return;const e=o.SuperAdmin?route("safety.destroy.admin",[r]):route("safety.destroy",[o.tenantSlug,r]);le.delete(e,{onSuccess:()=>x.value="Entry deleted."})}function ce(r){var m;const e=(m=r.target.files)==null?void 0:m[0];if(!e)return;if(!_.date){alert("Please select the date for this import.");return}if(o.SuperAdmin&&!_.tenant_id){alert("Please select a tenant for import.");return}_.csv_file=e;const a=o.SuperAdmin?route("safety.import.admin"):route("safety.import",o.tenantSlug);_.post(a,{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{x.value="Data imported successfully.",_.reset()},onError:()=>alert("Import failed.")})}function fe(){var e,a;const r=o.SuperAdmin?route("safety.export.admin"):route("safety.export",o.tenantSlug);(e=R.value)==null||e.setAttribute("action",r),(a=R.value)==null||a.submit()}ke(x,r=>{r&&setTimeout(()=>{x.value=""},5e3)});function V(r){k.value=r;const e=o.tenantSlug?route("safety.index",{tenantSlug:o.tenantSlug}):route("safety.index.admin");I.get(e,{dateFilter:r,perPage:E.value},{preserveState:!0})}function pe(){const r=o.tenantSlug?route("safety.index",{tenantSlug:o.tenantSlug}):route("safety.index.admin");I.get(r,{dateFilter:k.value,perPage:E.value},{preserveState:!0})}function H(r){if(!r)return"";const e=r.split("-");if(e.length!==3)return r;const[a,m,xe]=e;return`${Number(m)}/${Number(xe)}/${a}`}function ge(r){if(r){const e=new URL(r);e.searchParams.set("perPage",E.value),e.searchParams.set("dateFilter",k.value),I.get(e.href,{},{only:["entries"]})}}const ve=Se(()=>o.entries.data.length>0&&g.value.length===o.entries.data.length);function _e(r){r.target.checked?g.value=o.entries.data.map(e=>e.id):g.value=[]}function ye(){g.value.length>0&&(N.value=!0)}function be(){const r=U({ids:g.value}),e=o.SuperAdmin?"safety.destroyBulk.admin":"safety.destroyBulk",a=o.SuperAdmin?{}:{tenantSlug:o.tenantSlug};r.delete(route(e,a),{preserveScroll:!0,onSuccess:()=>{x.value=`${g.value.length} safety records deleted successfully.`,g.value=[],N.value=!1},onError:m=>{console.error(m)}})}return(r,e)=>(d(),S(he,{breadcrumbs:ne,tenantSlug:u.tenantSlug},{default:l(()=>[n(t(we),{title:"Safety"}),s("div",Fe,[x.value?(d(),S(t(Ee),{key:0,variant:"success"},{default:l(()=>[n(t(Ne),null,{default:l(()=>e[15]||(e[15]=[i("Success")])),_:1}),n(t(Ve),null,{default:l(()=>[i(c(x.value),1)]),_:1})]),_:1})):b("",!0),s("div",De,[e[20]||(e[20]=s("h1",{class:"text-2xl font-bold text-gray-800 dark:text-gray-200"},"Safety Management",-1)),s("div",Pe,[n(t(p),{onClick:oe,variant:"default"},{default:l(()=>[n($,{name:"plus",class:"mr-2 h-4 w-4"}),e[16]||(e[16]=i(" Create New Entry "))]),_:1}),g.value.length>0?(d(),S(t(p),{key:0,onClick:e[0]||(e[0]=a=>ye()),variant:"destructive"},{default:l(()=>[n($,{name:"trash",class:"mr-2 h-4 w-4"}),i(" Delete Selected ("+c(g.value.length)+") ",1)]),_:1})):b("",!0),u.SuperAdmin?(d(),f("div",Me,[j(s("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>t(_).tenant_id=a),class:"h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"},[e[17]||(e[17]=s("option",{disabled:"",value:""},"Select Company Name",-1)),(d(!0),f(w,null,C(u.tenants,a=>(d(),f("option",{key:a.id,value:a.id},c(a.name),9,Ue))),128))],512),[[L,t(_).tenant_id]])])):b("",!0),s("div",je,[n(t(ae),{modelValue:t(_).date,"onUpdate:modelValue":e[2]||(e[2]=a=>t(_).date=a),type:"date",required:"",placeholder:"Date for Import"},null,8,["modelValue"])]),s("label",Te,[n(t(p),{variant:"secondary",as:"span"},{default:l(()=>[n($,{name:"upload",class:"mr-2 h-4 w-4"}),e[18]||(e[18]=i(" Import XLSX "))]),_:1}),s("input",{type:"file",class:"hidden",onChange:ce,accept:".xlsx"},null,32)]),n(t(p),{onClick:X(fe,["prevent"]),variant:"outline"},{default:l(()=>[n($,{name:"download",class:"mr-2 h-4 w-4"}),e[19]||(e[19]=i(" Export CSV "))]),_:1})])]),n(t(G),null,{default:l(()=>[n(t(Q),{class:"p-4"},{default:l(()=>[s("div",Be,[s("div",Re,[n(t(p),{onClick:e[3]||(e[3]=a=>V("yesterday")),variant:"outline",size:"sm",class:h({"bg-primary/10 text-primary border-primary":k.value==="yesterday"})},{default:l(()=>e[21]||(e[21]=[i(" Yesterday ")])),_:1},8,["class"]),n(t(p),{onClick:e[4]||(e[4]=a=>V("current-week")),variant:"outline",size:"sm",class:h({"bg-primary/10 text-primary border-primary":k.value==="current-week"})},{default:l(()=>e[22]||(e[22]=[i(" Current Week ")])),_:1},8,["class"]),n(t(p),{onClick:e[5]||(e[5]=a=>V("6w")),variant:"outline",size:"sm",class:h({"bg-primary/10 text-primary border-primary":k.value==="6w"})},{default:l(()=>e[23]||(e[23]=[i(" 6 Weeks ")])),_:1},8,["class"]),n(t(p),{onClick:e[6]||(e[6]=a=>V("quarterly")),variant:"outline",size:"sm",class:h({"bg-primary/10 text-primary border-primary":k.value==="quarterly"})},{default:l(()=>e[24]||(e[24]=[i(" Quarterly ")])),_:1},8,["class"]),n(t(p),{onClick:e[7]||(e[7]=a=>V("full")),variant:"outline",size:"sm",class:h({"bg-primary/10 text-primary border-primary":k.value==="full"})},{default:l(()=>e[25]||(e[25]=[i(" Full ")])),_:1},8,["class"])]),u.dateRange?(d(),f("div",Le,[u.dateRange.start&&u.dateRange.end?(d(),f("span",Ie," Showing data from "+c(H(u.dateRange.start))+" to "+c(H(u.dateRange.end)),1)):(d(),f("span",Oe,c(u.dateRange.label),1))])):b("",!0)])]),_:1})]),_:1}),n(t(G),null,{default:l(()=>[n(t(Q),{class:"p-0"},{default:l(()=>[s("div",qe,[n(t($e),{class:"relative h-[500px] overflow-auto"},{default:l(()=>[n(t(ze),null,{default:l(()=>[n(t(O),{class:"sticky top-0 bg-background border-b z-10"},{default:l(()=>[n(t(T),{class:"w-[50px]"},{default:l(()=>[s("div",We,[s("input",{type:"checkbox",onChange:_e,checked:ve.value,class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,40,He)])]),_:1}),u.SuperAdmin?(d(),S(t(T),{key:0},{default:l(()=>e[26]||(e[26]=[i("Company Name")])),_:1})):b("",!0),(d(),f(w,null,C(M,a=>n(t(T),{key:a,class:"whitespace-nowrap"},{default:l(()=>[i(c(a.replace(/_/g," ")),1)]),_:2},1024)),64)),n(t(T),null,{default:l(()=>e[27]||(e[27]=[i("Actions")])),_:1})]),_:1})]),_:1}),n(t(Ae),null,{default:l(()=>[u.entries.data.length===0?(d(),S(t(O),{key:0},{default:l(()=>[n(t(F),{colspan:u.SuperAdmin?M.length+3:M.length+2,class:"text-center py-8"},{default:l(()=>e[28]||(e[28]=[i(" No entries found ")])),_:1},8,["colspan"])]),_:1})):b("",!0),(d(!0),f(w,null,C(u.entries.data,a=>(d(),S(t(O),{key:a.id,class:"hover:bg-muted/50"},{default:l(()=>[n(t(F),{class:"text-center"},{default:l(()=>[j(s("input",{type:"checkbox",value:a.id,"onUpdate:modelValue":e[8]||(e[8]=m=>g.value=m),class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,8,Xe),[[Ce,g.value]])]),_:2},1024),u.SuperAdmin?(d(),S(t(F),{key:0},{default:l(()=>{var m;return[i(c(((m=a.tenant)==null?void 0:m.name)??"—"),1)]}),_:2},1024)):b("",!0),(d(),f(w,null,C(M,m=>n(t(F),{key:m,class:"whitespace-nowrap"},{default:l(()=>[i(c(a[m]),1)]),_:2},1024)),64)),n(t(F),null,{default:l(()=>[s("div",Ge,[n(t(p),{onClick:m=>de(a),variant:"warning",size:"sm"},{default:l(()=>[n($,{name:"pencil",class:"mr-1 h-4 w-4"}),e[29]||(e[29]=i(" Edit "))]),_:2},1032,["onClick"]),n(t(p),{onClick:m=>me(a.id),variant:"destructive",size:"sm"},{default:l(()=>[n($,{name:"trash",class:"mr-1 h-4 w-4"}),e[30]||(e[30]=i(" Delete "))]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),u.entries.links?(d(),f("div",Qe,[s("div",Ye,[s("div",Je," Showing "+c(u.entries.data.length)+" entries ",1),s("div",Ke,[s("div",Ze,[n(t(q),{for:"perPage",class:"text-sm"},{default:l(()=>e[31]||(e[31]=[i("Per page:")])),_:1}),j(s("select",{id:"perPage","onUpdate:modelValue":e[9]||(e[9]=a=>E.value=a),onChange:pe,class:"h-8 rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"},e[32]||(e[32]=[s("option",{value:"10"},"10",-1),s("option",{value:"25"},"25",-1),s("option",{value:"50"},"50",-1),s("option",{value:"100"},"100",-1)]),544),[[L,E.value]])]),s("div",et,[(d(!0),f(w,null,C(u.entries.links,a=>(d(),S(t(p),{key:a.label,onClick:m=>ge(a.url),disabled:!a.url,variant:"ghost",size:"sm",class:h(["mx-1",{"bg-primary/10 text-primary border-primary":a.active}])},{default:l(()=>[s("span",{innerHTML:a.label},null,8,tt)]),_:2},1032,["onClick","disabled","class"]))),128))])])])])):b("",!0)]),_:1})]),_:1}),n(t(Y),{open:z.value,"onUpdate:open":e[11]||(e[11]=a=>z.value=a)},{default:l(()=>[n(t(J),{class:"sm:max-w-4xl"},{default:l(()=>[n(t(K),null,{default:l(()=>[n(t(Z),null,{default:l(()=>[i(c(B.value),1)]),_:1}),n(t(ee),null,{default:l(()=>[i(" Fill in the details to "+c(A.value.toLowerCase())+" an entry. ",1)]),_:1})]),_:1}),s("form",{onSubmit:X(ue,["prevent"]),class:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto"},[u.SuperAdmin?(d(),f("div",at,[n(t(q),{for:"tenant"},{default:l(()=>e[33]||(e[33]=[i("Company Name")])),_:1}),s("div",nt,[j(s("select",{id:"tenant","onUpdate:modelValue":e[10]||(e[10]=a=>t(v).tenant_id=a),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"},[e[34]||(e[34]=s("option",{disabled:"",value:""},"Select Company",-1)),(d(!0),f(w,null,C(u.tenants,a=>(d(),f("option",{key:a.id,value:a.id},c(a.name),9,lt))),128))],512),[[L,t(v).tenant_id]]),e[35]||(e[35]=s("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[s("svg",{class:"h-4 w-4 opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])):b("",!0),(d(!0),f(w,null,C(t(P),a=>(d(),f("div",{key:a},[n(t(q),{for:a,class:"capitalize"},{default:l(()=>[i(c(a.replace(/_/g," ")),1)]),_:2},1032,["for"]),n(t(ae),{id:a,modelValue:t(v)[a],"onUpdate:modelValue":m=>t(v)[a]=m,type:re(a),step:se(a),min:ie(a)},null,8,["id","modelValue","onUpdate:modelValue","type","step","min"])]))),128)),n(t(te),{class:"col-span-2 mt-4"},{default:l(()=>[n(t(p),{type:"button",onClick:W,variant:"outline"},{default:l(()=>e[36]||(e[36]=[i(" Cancel ")])),_:1}),n(t(p),{type:"submit",variant:"default"},{default:l(()=>[i(c(A.value),1)]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["open"]),n(t(Y),{open:N.value,"onUpdate:open":e[14]||(e[14]=a=>N.value=a)},{default:l(()=>[n(t(J),null,{default:l(()=>[n(t(K),null,{default:l(()=>[n(t(Z),null,{default:l(()=>e[37]||(e[37]=[i("Confirm Bulk Deletion")])),_:1}),n(t(ee),null,{default:l(()=>[i(" Are you sure you want to delete "+c(g.value.length)+" safety records? This action cannot be undone. ",1)]),_:1})]),_:1}),n(t(te),{class:"mt-4"},{default:l(()=>[n(t(p),{type:"button",onClick:e[12]||(e[12]=a=>N.value=!1),variant:"outline"},{default:l(()=>e[38]||(e[38]=[i(" Cancel ")])),_:1}),n(t(p),{type:"button",onClick:e[13]||(e[13]=a=>be()),variant:"destructive"},{default:l(()=>e[39]||(e[39]=[i(" Delete Selected ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),s("form",{ref_key:"exportForm",ref:R,method:"GET",class:"hidden"},null,512)])]),_:1},8,["tenantSlug"]))}};export{St as default};
