import{k,C as z,c as ne,f as Ce,l as C,o as d,w as o,e as s,b as l,u as t,m as Se,g as S,i,t as c,j as le,h as b,v as V,a as p,F as _,r as B,p as H,n as q,O as Ve,W as $e}from"./app-DOHfSnMT.js";import{_ as Ae}from"./AppLayout.vue_vue_type_script_setup_true_lang-DU3cY6DD.js";import{_ as $}from"./Icon.vue_vue_type_script_setup_true_lang-BdMqJti2.js";import{_ as De,a as Te,b as K,c as j,d as Me,e as E}from"./TableRow.vue_vue_type_script_setup_true_lang-BrU9_CN9.js";import{_ as v}from"./Button.vue_vue_type_script_setup_true_lang-DvVgTGWm.js";import{_ as se}from"./Card.vue_vue_type_script_setup_true_lang-DzqexA0r.js";import{_ as Le,a as Ue}from"./CardTitle.vue_vue_type_script_setup_true_lang-DaqQoYbP.js";import{_ as oe}from"./CardContent.vue_vue_type_script_setup_true_lang-D2-lWpDr.js";import{_ as Y,a as J,b as Q,c as X,d as Z,e as ee}from"./DialogTitle.vue_vue_type_script_setup_true_lang-Bt-Ov6Wy.js";import{_ as m,a as F}from"./Label.vue_vue_type_script_setup_true_lang-Txy_2B_m.js";import{_ as he,a as Be,b as Ee}from"./AlertDescription.vue_vue_type_script_setup_true_lang-6_aNRwVD.js";import"./index-BF4cvBij.js";import"./createLucideIcon-Br4LuE9f.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-ToSW60Bf.js";import"./shield-DpvrnMCS.js";import"./check-DEIf2Qok.js";import"./loader-circle-CstCd4AU.js";import"./sun-Dkpz6XPy.js";const Fe={class:"max-w-7xl mx-auto p-6 space-y-8"},Ie={class:"flex flex-col sm:flex-row justify-between items-center mb-6 gap-4"},Ne={class:"flex flex-wrap gap-3"},ze={class:"cursor-pointer"},qe={class:"flex flex-col sm:flex-row justify-between items-end gap-4"},je={class:"grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"},Ge={class:"overflow-x-auto"},Oe={class:"flex items-center justify-center"},Pe=["checked"],Re={class:"flex items-center"},We={key:3,class:"ml-2"},He={key:0,class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ke={key:1,class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ye={key:4,class:"ml-2 opacity-50"},Je=["value"],Qe={class:"flex space-x-2"},Xe={key:0,class:"bg-muted/20 px-4 py-3 border-t"},Ze={class:"flex justify-between items-center"},et={class:"text-sm text-muted-foreground"},tt={class:"flex"},nt=["innerHTML"],lt={key:0,class:"col-span-2"},st={class:"relative"},ot=["value"],rt={class:"relative"},at={class:"relative"},it={class:"relative"},ut={class:"relative"},dt={class:"sm:col-span-2"},pt={class:"flex items-center space-x-2"},ft={class:"sm:col-span-2"},ct={class:"flex items-center space-x-2"},vt={key:0,class:"ml-2 text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full"},mt={key:1,class:"ml-2 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full"},Bt={__name:"Truck",props:{entries:Object,tenantSlug:String,SuperAdmin:Boolean,tenants:Array},setup(x){const f=x,w=k(""),T=k(!1),M=k(!1),G=k("Create Entry"),I=k("Create"),O=k(null),P=k(null),L=k("truckid"),A=k("asc"),g=k({search:"",type:"",make:""}),re=[{title:f.tenantSlug?"Dashboard":"Admin Dashboard",href:f.tenantSlug?route("dashboard",{tenantSlug:f.tenantSlug}):route("admin.dashboard")},{title:"Trucks",href:"#"}],N=["truckid","type","make","fuel","license","vin","inspection_status","inspection_expiry_date","is_active","is_returned"],r=z({id:null,truckid:null,type:"daycab",make:"international",fuel:"diesel",license:null,vin:"",tenant_id:f.SuperAdmin?"":null,is_active:!0,is_returned:!1,inspection_status:"good",inspection_expiry_date:new Date().toISOString().split("T")[0]}),te=z({csv_file:null}),ae=z({}),D=ne(()=>{let a=[...f.entries.data];if(g.value.search){const e=g.value.search.toLowerCase();a=a.filter(n=>{var u;return String(n.truckid).includes(e)||((u=n.vin)==null?void 0:u.toLowerCase().includes(e))})}return g.value.type&&(a=a.filter(e=>{var n;return((n=e.type)==null?void 0:n.toLowerCase())===g.value.type.toLowerCase()})),g.value.make&&(a=a.filter(e=>{var n;return((n=e.make)==null?void 0:n.toLowerCase())===g.value.make.toLowerCase()})),a.sort((e,n)=>{let u=e[L.value],h=n[L.value];return u===null?1:h===null?-1:(typeof u=="string"&&(u=u.toLowerCase(),h=h.toLowerCase()),u<h?A.value==="asc"?-1:1:u>h?A.value==="asc"?1:-1:0)}),a});function ie(a){L.value===a?A.value=A.value==="asc"?"desc":"asc":(L.value=a,A.value="asc")}function R(){}function ue(){g.value={search:"",type:"",make:""}}function de(){r.reset(),r.is_active=!0,r.tenant_id=null,G.value="Create Truck",I.value="Create",T.value=!0}function pe(a){r.id=a.id,r.truckid=a.truckid,r.type=a.type?a.type.toLowerCase():"",r.make=a.make?a.make.toLowerCase():"",r.fuel=a.fuel,r.license=a.license,r.vin=a.vin,r.is_active=!!a.is_active,r.is_returned=!!a.is_returned,r.tenant_id=a.tenant_id,r.inspection_status=a.inspection_status||"good",r.inspection_expiry_date=a.inspection_expiry_date||new Date().toISOString().split("T")[0],G.value="Edit Truck",I.value="Update",T.value=!0}function W(){T.value=!1}function fe(){const a={truckid:Number(r.truckid),type:r.type,make:r.make,fuel:r.fuel,license:Number(r.license),vin:r.vin,is_active:r.is_active?1:0,is_returned:r.is_returned?1:0,tenant_id:r.tenant_id,inspection_status:r.inspection_status,inspection_expiry_date:r.inspection_expiry_date};r.id?r.put(f.SuperAdmin?route("truck.update.admin",[r.id]):route("truck.update",[f.tenantSlug,r.id]),{data:a,onSuccess:()=>{w.value="Truck updated successfully.",W()},onError:()=>alert("Error updating truck")}):r.post(f.SuperAdmin?route("truck.store.admin"):route("truck.store",f.tenantSlug),{data:a,onSuccess:()=>{w.value="Truck created successfully.",W()},onError:()=>alert("Error creating truck")})}function ce(a){P.value=a,M.value=!0}function ve(){ae.delete(f.SuperAdmin?route("truck.destroy.admin",[P.value]):route("truck.destroy",[f.tenantSlug,P.value]),{onSuccess:()=>{w.value="Truck deleted successfully.",M.value=!1}})}function me(a){var n;const e=(n=a.target.files)==null?void 0:n[0];e&&(te.csv_file=e,te.post(f.SuperAdmin?route("truck.import.admin"):route("truck.import",f.tenantSlug),{forceFormData:!0,onSuccess:()=>w.value="Data imported successfully.",onError:()=>alert("Import failed")}))}function ge(){var e,n;const a=f.SuperAdmin?route("truck.export.admin"):route("truck.export",f.tenantSlug);(e=O.value)==null||e.setAttribute("action",a),(n=O.value)==null||n.submit()}function ye(a){a&&$e.get(a,{},{only:["entries"]})}function ke(a){return a?new Date(a+"T00:00:00").toLocaleDateString():"—"}Ce(w,a=>{a&&setTimeout(()=>{w.value=""},5e3)});const y=k([]),U=k(!1),xe=ne(()=>D.value.length>0&&D.value.every(a=>y.value.includes(a.id)));function be(a){a.target.checked?y.value=D.value.map(e=>e.id):y.value=[]}function _e(){y.value.length>0&&(U.value=!0)}function we(){const a=z({ids:y.value}),e=f.SuperAdmin?"truck.destroyBulk.admin":"truck.destroyBulk",n=f.SuperAdmin?{}:{tenantSlug:f.tenantSlug};a.delete(route(e,n),{preserveScroll:!0,onSuccess:()=>{w.value=`${y.value.length} trucks deleted successfully.`,y.value=[],U.value=!1},onError:u=>{console.error(u),alert("Error deleting trucks")}})}return(a,e)=>(d(),C(Ae,{breadcrumbs:re,tenantSlug:x.tenantSlug},{default:o(()=>[s(t(Se),{title:"Trucks"}),l("div",Fe,[w.value?(d(),C(t(he),{key:0,variant:"success"},{default:o(()=>[s(t(Be),null,{default:o(()=>e[22]||(e[22]=[i("Success")])),_:1}),s(t(Ee),null,{default:o(()=>[i(c(w.value),1)]),_:1})]),_:1})):S("",!0),l("div",Ie,[e[26]||(e[26]=l("h1",{class:"text-2xl font-bold text-gray-800 dark:text-gray-200"},"Truck Management",-1)),l("div",Ne,[s(t(v),{onClick:de,variant:"default"},{default:o(()=>[s($,{name:"plus",class:"mr-2 h-4 w-4"}),e[23]||(e[23]=i(" Create New Truck "))]),_:1}),y.value.length>0?(d(),C(t(v),{key:0,onClick:e[0]||(e[0]=n=>_e()),variant:"destructive"},{default:o(()=>[s($,{name:"trash",class:"mr-2 h-4 w-4"}),i(" Delete Selected ("+c(y.value.length)+") ",1)]),_:1})):S("",!0),l("label",ze,[s(t(v),{variant:"secondary",as:"span"},{default:o(()=>[s($,{name:"upload",class:"mr-2 h-4 w-4"}),e[24]||(e[24]=i(" Import CSV "))]),_:1}),l("input",{type:"file",class:"hidden",onChange:me,accept:".csv, .txt"},null,32)]),s(t(v),{onClick:le(ge,["prevent"]),variant:"outline"},{default:o(()=>[s($,{name:"download",class:"mr-2 h-4 w-4"}),e[25]||(e[25]=i(" Export CSV "))]),_:1})])]),s(t(se),null,{default:o(()=>[s(t(Le),null,{default:o(()=>[s(t(Ue),null,{default:o(()=>e[27]||(e[27]=[i("Filters")])),_:1})]),_:1}),s(t(oe),null,{default:o(()=>[l("div",qe,[l("div",je,[l("div",null,[s(t(m),{for:"search"},{default:o(()=>e[28]||(e[28]=[i("Search")])),_:1}),s(t(F),{id:"search",modelValue:g.value.search,"onUpdate:modelValue":e[1]||(e[1]=n=>g.value.search=n),type:"text",placeholder:"Search by truck ID or VIN...",onInput:R},null,8,["modelValue"])]),l("div",null,[s(t(m),{for:"type"},{default:o(()=>e[29]||(e[29]=[i("Type")])),_:1}),b(l("select",{id:"type","onUpdate:modelValue":e[2]||(e[2]=n=>g.value.type=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",onChange:R},e[30]||(e[30]=[l("option",{value:""},"All Types",-1),l("option",{value:"daycab"},"Daycab",-1),l("option",{value:"sleepercab"},"Sleepercab",-1)]),544),[[V,g.value.type]])]),l("div",null,[s(t(m),{for:"make"},{default:o(()=>e[31]||(e[31]=[i("Make")])),_:1}),b(l("select",{id:"make","onUpdate:modelValue":e[3]||(e[3]=n=>g.value.make=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",onChange:R},e[32]||(e[32]=[l("option",{value:""},"All Makes",-1),l("option",{value:"international"},"International",-1),l("option",{value:"kenworth"},"Kenworth",-1),l("option",{value:"peterbilt"},"Peterbilt",-1),l("option",{value:"volvo"},"Volvo",-1),l("option",{value:"freightliner"},"Freightliner",-1)]),544),[[V,g.value.make]])])]),s(t(v),{onClick:ue,variant:"ghost",size:"sm"},{default:o(()=>[s($,{name:"rotate-ccw",class:"mr-2 h-4 w-4"}),e[33]||(e[33]=i(" Reset "))]),_:1})])]),_:1})]),_:1}),s(t(se),null,{default:o(()=>[s(t(oe),{class:"p-0"},{default:o(()=>[l("div",Ge,[s(t(De),{class:"relative h-[500px] overflow-auto"},{default:o(()=>[s(t(Te),null,{default:o(()=>[s(t(K),{class:"sticky top-0 bg-background border-b z-10"},{default:o(()=>[s(t(j),{class:"w-[50px]"},{default:o(()=>[l("div",Oe,[l("input",{type:"checkbox",onChange:be,checked:xe.value,class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,40,Pe)])]),_:1}),x.SuperAdmin?(d(),C(t(j),{key:0},{default:o(()=>e[34]||(e[34]=[i("Company Name")])),_:1})):S("",!0),(d(),p(_,null,B(N,n=>s(t(j),{key:n,class:"cursor-pointer",onClick:u=>ie(n)},{default:o(()=>[l("div",Re,[n==="inspection_status"?(d(),p(_,{key:0},[i(" Annual Inspection Status ")],64)):n==="inspection_expiry_date"?(d(),p(_,{key:1},[i(" Annual Inspection Expiration Date ")],64)):(d(),p(_,{key:2},[i(c(n.replace(/_/g," ").replace(/\b\w/g,u=>u.toUpperCase())),1)],64)),L.value===n?(d(),p("div",We,[A.value==="asc"?(d(),p("svg",He,e[35]||(e[35]=[l("path",{d:"M8 15l4-4 4 4"},null,-1)]))):(d(),p("svg",Ke,e[36]||(e[36]=[l("path",{d:"M16 9l-4 4-4-4"},null,-1)])))])):(d(),p("div",Ye,e[37]||(e[37]=[l("svg",{class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[l("path",{d:"M8 10l4-4 4 4"}),l("path",{d:"M16 14l-4 4-4-4"})],-1)])))])]),_:2},1032,["onClick"])),64)),s(t(j),null,{default:o(()=>e[38]||(e[38]=[i("Actions")])),_:1})]),_:1})]),_:1}),s(t(Me),null,{default:o(()=>[D.value.length===0?(d(),C(t(K),{key:0},{default:o(()=>[s(t(E),{colspan:x.SuperAdmin?N.length+3:N.length+2,class:"text-center py-8"},{default:o(()=>e[39]||(e[39]=[i(" No trucks found matching your criteria ")])),_:1},8,["colspan"])]),_:1})):S("",!0),(d(!0),p(_,null,B(D.value,n=>(d(),C(t(K),{key:n.id,class:"hover:bg-muted/50"},{default:o(()=>[s(t(E),{class:"text-center"},{default:o(()=>[b(l("input",{type:"checkbox",value:n.id,"onUpdate:modelValue":e[4]||(e[4]=u=>y.value=u),class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,8,Je),[[H,y.value]])]),_:2},1024),x.SuperAdmin?(d(),C(t(E),{key:0},{default:o(()=>{var u;return[i(c(((u=n.tenant)==null?void 0:u.name)??"—"),1)]}),_:2},1024)):S("",!0),(d(),p(_,null,B(N,u=>s(t(E),{key:u,class:"whitespace-nowrap"},{default:o(()=>[u==="is_active"?(d(),p("span",{key:0,class:q(n[u]?"text-green-600":"text-red-600")},c(n[u]?"Yes":"No"),3)):u==="is_returned"?(d(),p("span",{key:1,class:q([n[u]?"text-red-600":"text-green-600","px-2 py-1 rounded-full text-xs font-medium"]),style:Ve({backgroundColor:n[u]?"rgba(239, 68, 68, 0.1)":"rgba(22, 163, 74, 0.1)"})},c(n[u]?"Returned":"With Company"),7)):u==="inspection_status"?(d(),p("span",{key:2,class:q(n[u]==="good"?"text-green-600":"text-red-600")},c(n[u]==="good"?"Good":"Expired"),3)):u==="inspection_expiry_date"?(d(),p(_,{key:3},[i(c(ke(n[u])),1)],64)):(d(),p(_,{key:4},[i(c(typeof n[u]=="string"?n[u].charAt(0).toUpperCase()+n[u].slice(1):n[u]),1)],64))]),_:2},1024)),64)),s(t(E),null,{default:o(()=>[l("div",Qe,[s(t(v),{onClick:u=>pe(n),variant:"warning",size:"sm"},{default:o(()=>[s($,{name:"pencil",class:"mr-1 h-4 w-4"}),e[40]||(e[40]=i(" Edit "))]),_:2},1032,["onClick"]),s(t(v),{onClick:u=>ce(n.id),variant:"destructive",size:"sm"},{default:o(()=>[s($,{name:"trash",class:"mr-1 h-4 w-4"}),e[41]||(e[41]=i(" Delete "))]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),x.entries.links?(d(),p("div",Xe,[l("div",Ze,[l("div",et," Showing "+c(D.value.length)+" of "+c(x.entries.data.length)+" entries ",1),l("div",tt,[(d(!0),p(_,null,B(x.entries.links,n=>(d(),C(t(v),{key:n.label,onClick:u=>ye(n.url),disabled:!n.url,variant:"ghost",size:"sm",class:q(["mx-1",{"bg-primary/10 text-primary border-primary":n.active}])},{default:o(()=>[l("span",{innerHTML:n.label},null,8,nt)]),_:2},1032,["onClick","disabled","class"]))),128))])])])):S("",!0)]),_:1})]),_:1}),s(t(Y),{open:T.value,"onUpdate:open":e[16]||(e[16]=n=>T.value=n)},{default:o(()=>[s(t(J),{class:"sm:max-w-4xl"},{default:o(()=>[s(t(Q),null,{default:o(()=>[s(t(X),null,{default:o(()=>[i(c(G.value),1)]),_:1}),s(t(Z),null,{default:o(()=>[i(" Fill in the details to "+c(I.value.toLowerCase())+" a truck. ",1)]),_:1})]),_:1}),l("form",{onSubmit:le(fe,["prevent"]),class:"grid grid-cols-1 sm:grid-cols-2 gap-4"},[x.SuperAdmin?(d(),p("div",lt,[s(t(m),{for:"tenant"},{default:o(()=>e[42]||(e[42]=[i("Company Name")])),_:1}),l("div",st,[b(l("select",{id:"tenant","onUpdate:modelValue":e[5]||(e[5]=n=>t(r).tenant_id=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"},[e[43]||(e[43]=l("option",{value:""},"Select Company",-1)),(d(!0),p(_,null,B(x.tenants,n=>(d(),p("option",{key:n.id,value:n.id},c(n.name),9,ot))),128))],512),[[V,t(r).tenant_id]]),e[44]||(e[44]=l("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[l("svg",{class:"h-4 w-4 opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])])):S("",!0),l("div",null,[s(t(m),{for:"truckid"},{default:o(()=>e[45]||(e[45]=[i("Truck ID")])),_:1}),s(t(F),{id:"truckid",modelValue:t(r).truckid,"onUpdate:modelValue":e[6]||(e[6]=n=>t(r).truckid=n),modelModifiers:{number:!0},type:"number",required:""},null,8,["modelValue"])]),l("div",null,[s(t(m),{for:"type"},{default:o(()=>e[46]||(e[46]=[i("Type")])),_:1}),l("div",rt,[b(l("select",{id:"type","onUpdate:modelValue":e[7]||(e[7]=n=>t(r).type=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",required:""},e[47]||(e[47]=[l("option",{value:"daycab"},"Daycab",-1),l("option",{value:"sleepercab"},"Sleepercab",-1)]),512),[[V,t(r).type]]),e[48]||(e[48]=l("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[l("svg",{class:"h-4 w-4 opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),l("div",null,[s(t(m),{for:"make"},{default:o(()=>e[49]||(e[49]=[i("Make")])),_:1}),l("div",at,[b(l("select",{id:"make","onUpdate:modelValue":e[8]||(e[8]=n=>t(r).make=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",required:""},e[50]||(e[50]=[l("option",{value:"international"},"International",-1),l("option",{value:"kenworth"},"Kenworth",-1),l("option",{value:"peterbilt"},"Peterbilt",-1),l("option",{value:"volvo"},"Volvo",-1),l("option",{value:"freightliner"},"Freightliner",-1)]),512),[[V,t(r).make]]),e[51]||(e[51]=l("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[l("svg",{class:"h-4 w-4 opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),l("div",null,[s(t(m),{for:"fuel"},{default:o(()=>e[52]||(e[52]=[i("Fuel")])),_:1}),l("div",it,[b(l("select",{id:"fuel","onUpdate:modelValue":e[9]||(e[9]=n=>t(r).fuel=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",required:""},e[53]||(e[53]=[l("option",{value:"diesel"},"Diesel",-1),l("option",{value:"cng"},"CNG",-1)]),512),[[V,t(r).fuel]]),e[54]||(e[54]=l("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[l("svg",{class:"h-4 w-4 opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),l("div",null,[s(t(m),{for:"license"},{default:o(()=>e[55]||(e[55]=[i("License")])),_:1}),s(t(F),{id:"license",modelValue:t(r).license,"onUpdate:modelValue":e[10]||(e[10]=n=>t(r).license=n),modelModifiers:{number:!0},type:"number",min:"0",required:""},null,8,["modelValue"])]),l("div",null,[s(t(m),{for:"vin"},{default:o(()=>e[56]||(e[56]=[i("VIN")])),_:1}),s(t(F),{id:"vin",modelValue:t(r).vin,"onUpdate:modelValue":e[11]||(e[11]=n=>t(r).vin=n),type:"text",required:""},null,8,["modelValue"])]),l("div",null,[s(t(m),{for:"inspection_status"},{default:o(()=>e[57]||(e[57]=[i("Annual Inspection Status")])),_:1}),l("div",ut,[b(l("select",{id:"inspection_status","onUpdate:modelValue":e[12]||(e[12]=n=>t(r).inspection_status=n),class:"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",required:""},e[58]||(e[58]=[l("option",{value:"good"},"Good",-1),l("option",{value:"expired"},"Expired",-1)]),512),[[V,t(r).inspection_status]]),e[59]||(e[59]=l("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[l("svg",{class:"h-4 w-4 opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1))])]),l("div",null,[s(t(m),{for:"inspection_expiry_date"},{default:o(()=>e[60]||(e[60]=[i("Annual Inspection Expiry Date")])),_:1}),s(t(F),{id:"inspection_expiry_date",modelValue:t(r).inspection_expiry_date,"onUpdate:modelValue":e[13]||(e[13]=n=>t(r).inspection_expiry_date=n),type:"date",required:""},null,8,["modelValue"])]),l("div",dt,[l("div",pt,[b(l("input",{type:"checkbox",id:"is_active","onUpdate:modelValue":e[14]||(e[14]=n=>t(r).is_active=n),class:"h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"},null,512),[[H,t(r).is_active]]),s(t(m),{for:"is_active"},{default:o(()=>e[61]||(e[61]=[i("Active Status")])),_:1})])]),l("div",ft,[l("div",ct,[b(l("input",{type:"checkbox",id:"is_returned","onUpdate:modelValue":e[15]||(e[15]=n=>t(r).is_returned=n),class:"h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"},null,512),[[H,t(r).is_returned]]),s(t(m),{for:"is_returned",class:"flex items-center"},{default:o(()=>[e[62]||(e[62]=i(" Returned Status ")),t(r).is_returned?(d(),p("span",vt,"Truck Returned")):(d(),p("span",mt,"With Company"))]),_:1})])]),s(t(ee),{class:"col-span-2 mt-4"},{default:o(()=>[s(t(v),{type:"button",onClick:W,variant:"outline"},{default:o(()=>e[63]||(e[63]=[i(" Cancel ")])),_:1}),s(t(v),{type:"submit",variant:"default"},{default:o(()=>[i(c(I.value),1)]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["open"]),s(t(Y),{open:M.value,"onUpdate:open":e[18]||(e[18]=n=>M.value=n)},{default:o(()=>[s(t(J),null,{default:o(()=>[s(t(Q),null,{default:o(()=>[s(t(X),null,{default:o(()=>e[64]||(e[64]=[i("Confirm Deletion")])),_:1}),s(t(Z),null,{default:o(()=>e[65]||(e[65]=[i(" Are you sure you want to delete this truck? This action cannot be undone. ")])),_:1})]),_:1}),s(t(ee),{class:"mt-4"},{default:o(()=>[s(t(v),{type:"button",onClick:e[17]||(e[17]=n=>M.value=!1),variant:"outline"},{default:o(()=>e[66]||(e[66]=[i(" Cancel ")])),_:1}),s(t(v),{type:"button",onClick:ve,variant:"destructive"},{default:o(()=>e[67]||(e[67]=[i(" Delete ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),s(t(Y),{open:U.value,"onUpdate:open":e[21]||(e[21]=n=>U.value=n)},{default:o(()=>[s(t(J),null,{default:o(()=>[s(t(Q),null,{default:o(()=>[s(t(X),null,{default:o(()=>e[68]||(e[68]=[i("Confirm Bulk Deletion")])),_:1}),s(t(Z),null,{default:o(()=>[i(" Are you sure you want to delete "+c(y.value.length)+" trucks? This action cannot be undone. ",1)]),_:1})]),_:1}),s(t(ee),{class:"mt-4"},{default:o(()=>[s(t(v),{type:"button",onClick:e[19]||(e[19]=n=>U.value=!1),variant:"outline"},{default:o(()=>e[69]||(e[69]=[i(" Cancel ")])),_:1}),s(t(v),{type:"button",onClick:e[20]||(e[20]=n=>we()),variant:"destructive"},{default:o(()=>e[70]||(e[70]=[i(" Delete Selected ")])),_:1})]),_:1})]),_:1})]),_:1},8,["open"]),l("form",{ref_key:"exportForm",ref:O,method:"GET",class:"hidden"},null,512)])]),_:1},8,["tenantSlug"]))}};export{Bt as default};
