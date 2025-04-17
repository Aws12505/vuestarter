import{c as $,k,d as U,C as j,l as L,o,w as b,e as d,u as i,m as M,b as e,a as n,g as l,n as V,j as z,h as y,t as a,T as A,i as E,V as G}from"./app-DblO3zBF.js";import{_ as P}from"./AppLayout.vue_vue_type_script_setup_true_lang-DR9k2RW1.js";import{_ as I,a as F}from"./Layout.vue_vue_type_script_setup_true_lang-BtgDOmhB.js";import{_ as q}from"./Button.vue_vue_type_script_setup_true_lang-CotrymV7.js";import{_,a as h}from"./Label.vue_vue_type_script_setup_true_lang-CigezUkg.js";import{_ as S}from"./Separator.vue_vue_type_script_setup_true_lang-tFZVaFOe.js";import{_ as O}from"./Badge.vue_vue_type_script_setup_true_lang-BDjRm5yx.js";import"./index-Ko6ACuIn.js";import"./createLucideIcon-5smAZa8m.js";import"./AppLogoIcon.vue_vue_type_script_setup_true_lang-CPiFaJRz.js";const v=k([]);function R(){const s=c=>{const p=Math.random().toString(36).substring(2,9),f={id:p,...c,duration:c.duration||5e3};return v.value=[...v.value,f],setTimeout(()=>{u(p)},f.duration),p},u=c=>{v.value=v.value.filter(p=>p.id!==c)};return{toasts:$(()=>v.value),toast:s,dismissToast:u}}const Y={class:"space-y-6"},J={class:"border-b"},W={class:"flex space-x-8"},H={key:0,class:"space-y-6"},K={key:0,class:"flex flex-col items-center space-y-3 p-4 border rounded-md bg-muted/50"},Q={class:"w-32 h-32 rounded-md overflow-hidden border border-border flex items-center justify-center bg-white"},X=["src"],Z={class:"grid gap-2"},tt={key:0,class:"text-sm text-destructive"},et={class:"grid gap-2"},st={key:0,class:"text-sm text-destructive"},it={class:"grid gap-2"},ot={class:"flex items-start space-x-4"},nt={key:0,class:"w-24 h-24 rounded-md overflow-hidden border border-border flex items-center justify-center bg-white"},at=["src"],rt={class:"flex-1"},dt={key:0,class:"text-sm text-destructive"},lt={class:"flex items-center gap-4"},ut={key:0},ct={key:1},mt={class:"text-sm text-neutral-600"},gt={key:1,class:"space-y-6"},bt={key:0,class:"bg-card rounded-lg border shadow-sm p-6"},pt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ft={class:"space-y-2"},vt={class:"text-lg font-semibold"},yt={class:"text-sm text-muted-foreground"},xt={class:"space-y-2 md:text-right"},_t={class:"text-2xl font-bold"},ht={class:"space-y-3 col-span-1 md:col-span-2"},St={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"},kt={class:"bg-muted/50 p-3 rounded-md"},wt={class:"font-medium"},Ct={class:"bg-muted/50 p-3 rounded-md"},Vt={class:"font-medium"},$t={class:"bg-muted/50 p-3 rounded-md"},Nt={class:"font-medium"},Dt={class:"text-xs text-muted-foreground"},Tt={key:0,class:"space-y-3 col-span-1 md:col-span-2"},Bt={class:"bg-muted/50 p-3 rounded-md"},Ut={key:0},jt={key:1},Lt={key:0},Mt={key:1},zt={key:2},At={key:2},Et={key:3,class:"mt-1 text-sm text-muted-foreground"},Gt={key:1,class:"bg-muted/50 p-6 rounded-lg border text-center"},Kt=U({__name:"TenantSettings",props:{tenant:{type:Object,required:!0},tenantSlug:{type:String,required:!0},subscription:{type:Object,default:null}},setup(s){const u=s,c=k("company");$(()=>[{title:u.tenantSlug?"Dashboard":"Admin Dashboard",href:u.tenantSlug?route("dashboard",{tenantSlug:u.tenantSlug}):route("admin.dashboard")}]);const{toast:p}=R(),f=k(null),r=j({name:u.tenant.name,slug:u.tenant.slug,image:null}),N=m=>{const t=m.target;if(t.files&&t.files[0]){r.image=t.files[0];const g=new FileReader;g.onload=x=>{var C;f.value=(C=x.target)==null?void 0:C.result},g.readAsDataURL(t.files[0])}},D=()=>{r.post(route("tenant.settings.update",u.tenantSlug),{onSuccess:()=>{p({title:"Success",description:"Company settings updated successfully"})},preserveScroll:!0})},T=(m,t="USD")=>m?new Intl.NumberFormat("en-US",{style:"currency",currency:t||"USD"}).format(m):"$0.00",w=m=>m?new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"N/A",B=(m,t)=>{if(!m||!t)return"N/A";const g=m.toString().padStart(2,"0"),x=t.toString().length===4?t.toString().slice(-2):t.toString();return`${g}/${x}`};return(m,t)=>(o(),L(P,{breadcrumbs:u.breadcrumbItems,tenantSlug:u.tenantSlug},{default:b(()=>[d(i(M),{title:"Company"}),d(I,null,{default:b(()=>[e("div",Y,[d(F,{title:"Company",description:"Manage your company information and subscription"}),d(i(S)),e("div",J,[e("div",W,[e("button",{onClick:t[0]||(t[0]=g=>c.value="company"),class:V(["py-2 px-1 -mb-px font-medium text-sm",c.value==="company"?"border-b-2 border-primary text-primary":"text-muted-foreground hover:text-foreground"])}," Company Settings ",2),e("button",{onClick:t[1]||(t[1]=g=>c.value="subscription"),class:V(["py-2 px-1 -mb-px font-medium text-sm",c.value==="subscription"?"border-b-2 border-primary text-primary":"text-muted-foreground hover:text-foreground"])}," Subscription Details ",2)])]),c.value==="company"?(o(),n("div",H,[s.tenant.image_path?(o(),n("div",K,[t[4]||(t[4]=e("div",{class:"text-sm font-medium"},"Current Company Logo",-1)),e("div",Q,[e("img",{src:`/storage/${s.tenant.image_path}`,alt:"Company Logo",class:"max-w-full max-h-full object-contain"},null,8,X)]),t[5]||(t[5]=e("div",{class:"text-xs text-muted-foreground"}," Logo is optimized and converted to SVG for better quality ",-1))])):l("",!0),e("form",{onSubmit:z(D,["prevent"]),class:"space-y-6",enctype:"multipart/form-data"},[e("div",Z,[d(i(_),{for:"name"},{default:b(()=>t[6]||(t[6]=[y("Company Name")])),_:1}),d(i(h),{id:"name",modelValue:i(r).name,"onUpdate:modelValue":t[2]||(t[2]=g=>i(r).name=g),placeholder:"Enter company name",class:"mt-1 block w-full"},null,8,["modelValue"]),i(r).errors.name?(o(),n("p",tt,a(i(r).errors.name),1)):l("",!0)]),e("div",et,[d(i(_),{for:"slug"},{default:b(()=>t[7]||(t[7]=[y("Slug")])),_:1}),d(i(h),{id:"slug",modelValue:i(r).slug,"onUpdate:modelValue":t[3]||(t[3]=g=>i(r).slug=g),placeholder:"Enter company slug",class:"mt-1 block w-full"},null,8,["modelValue"]),i(r).errors.slug?(o(),n("p",st,a(i(r).errors.slug),1)):l("",!0)]),e("div",it,[d(i(_),{for:"image"},{default:b(()=>t[8]||(t[8]=[y("Update Company Logo")])),_:1}),e("div",ot,[f.value?(o(),n("div",nt,[e("img",{src:f.value,alt:"New Company Logo Preview",class:"max-w-full max-h-full object-contain"},null,8,at)])):l("",!0),e("div",rt,[d(i(h),{id:"image",type:"file",onChange:N,accept:"image/jpeg,image/png,image/gif,image/svg+xml",class:"mt-1 block w-full"}),t[9]||(t[9]=e("p",{class:"text-xs text-muted-foreground mt-1"}," Accepted formats: JPEG, PNG, GIF, SVG. Max size: 2MB. Will be optimized and converted to SVG. ",-1)),i(r).errors.image?(o(),n("p",dt,a(i(r).errors.image),1)):l("",!0)])])]),e("div",lt,[d(i(q),{type:"submit",disabled:i(r).processing},{default:b(()=>[i(r).processing?(o(),n("span",ut,"Updating...")):(o(),n("span",ct,"Save Changes"))]),_:1},8,["disabled"]),d(A,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:b(()=>[E(e("p",mt,"Saved.",512),[[G,i(r).recentlySuccessful]])]),_:1})])],32)])):l("",!0),c.value==="subscription"?(o(),n("div",gt,[s.subscription?(o(),n("div",bt,[e("div",pt,[e("div",ft,[e("h3",vt,a(s.subscription.name),1),e("p",yt,a(s.subscription.description||"No description available"),1)]),e("div",xt,[e("div",_t,a(T(s.subscription.price,s.subscription.currency_code)),1),d(i(O),{variant:"outline"},{default:b(()=>[y(a(s.subscription.payment_gateway),1)]),_:1})]),e("div",ht,[d(i(S)),t[13]||(t[13]=e("h4",{class:"font-medium"},"Billing Information",-1)),e("div",St,[e("div",kt,[t[10]||(t[10]=e("div",{class:"text-xs text-muted-foreground"},"Next Billing",-1)),e("div",wt,a(w(s.subscription.next_billing_at)),1)]),e("div",Ct,[t[11]||(t[11]=e("div",{class:"text-xs text-muted-foreground"},"Last Billing",-1)),e("div",Vt,a(w(s.subscription.last_billing_at)),1)]),e("div",$t,[t[12]||(t[12]=e("div",{class:"text-xs text-muted-foreground"},"Payment Method",-1)),e("div",Nt,a(s.subscription.card_type)+" •••• "+a(s.subscription.last_four_digits),1),e("div",Dt,"Expires "+a(B(s.subscription.expiry_month,s.subscription.expiry_year)),1)])])]),s.subscription.billing_address?(o(),n("div",Tt,[d(i(S)),t[14]||(t[14]=e("h4",{class:"font-medium"},"Billing Address",-1)),e("div",Bt,[s.subscription.billing_address.street?(o(),n("div",Ut,a(s.subscription.billing_address.street),1)):l("",!0),s.subscription.billing_address.street2?(o(),n("div",jt,a(s.subscription.billing_address.street2),1)):l("",!0),e("div",null,[s.subscription.billing_address.city?(o(),n("span",Lt,a(s.subscription.billing_address.city)+", ",1)):l("",!0),s.subscription.billing_address.state?(o(),n("span",Mt,a(s.subscription.billing_address.state),1)):l("",!0),s.subscription.billing_address.zip?(o(),n("span",zt,a(s.subscription.billing_address.zip),1)):l("",!0)]),s.subscription.billing_address.country?(o(),n("div",At,a(s.subscription.billing_address.country),1)):l("",!0),s.subscription.billing_address.phone?(o(),n("div",Et," Phone: "+a(s.subscription.billing_address.phone),1)):l("",!0)])])):l("",!0)])])):(o(),n("div",Gt,t[15]||(t[15]=[e("h3",{class:"text-lg font-medium mb-2"},"No Subscription Found",-1),e("p",{class:"text-muted-foreground"},"Your company doesn't have an active subscription.",-1)])))])):l("",!0)])]),_:1})]),_:1},8,["breadcrumbs","tenantSlug"]))}});export{Kt as default};
