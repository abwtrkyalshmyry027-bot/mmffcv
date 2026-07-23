const DEFAULT_DATA={
name:"مفيد مهيوب عبدالسلام الشميري",role:"مشرف طلبات | كاشير | محضر طلبات",
bio:"أتميز بالدقة، سرعة التعلم، والقدرة على العمل تحت الضغط. أسعى للانضمام لجهة احترافية أساهم فيها بتطوير الأداء وتحسين سير العمل.",
headline:"موظف متخصص في إدارة الطلبات وخدمة العملاء والعمليات اليومية",
email:"abwtrkyalshmyry027@gmail.com",phone:"0533946458",location:"الدمام، المملكة العربية السعودية",cvUrl:"",photo:"",
years:"7+",projectsCount:"5+",certificatesCount:"6+",commitment:"100%",
experience:[
{period:"2024 - الحالي",title:"مشرف طلبات / محضر طلبات",org:"متجر تجارة إلكترونية",desc:"متابعة الطلبات الواردة عبر منصة زد، مراجعتها وترتيب الأولويات، تجهيز الطلبات الفورية والتنسيق مع مندوبي التوصيل، وإدخال البيانات في نظام أودو وإصدار بوليصات الشحن والتغليف."},
{period:"5 سنوات",title:"مندوب مبيعات",org:"خبرة في مجال المبيعات",desc:"خبرة في التعامل مع العملاء، عرض المنتجات، متابعة المبيعات وتحقيق أهداف العمل."}],
education:[
{period:"",title:"دبلوم صيدلة",org:"المعهد الوحدة للعلوم الطبية",desc:"مؤهل في مجال الصيدلة."},
{period:"",title:"دبلوم سكرتارية",org:"",desc:"تدريب في أعمال السكرتارية والتنظيم الإداري."}],
certificates:[
{title:"التطوير المهني",url:"",file:""},
{title:"الذكاء الاصطناعي التوليدي",url:"",file:""},
{title:"هندسة وأخلاقيات وتحيز الذكاء الاصطناعي",url:"",file:""},
{title:"فهم النماذج والتكلفة والتحديات في الذكاء الاصطناعي",url:"",file:""},
{title:"أساسيات Excel",url:"",file:""},
{title:"تحليل البيانات على Excel",url:"",file:""},
{title:"مشروع تجاري على Shopify",url:"",file:""}],
skills:[
{cat:"إدارة الطلبات",items:["استقبال ومراجعة الطلبات","ترتيب الأولويات","تجهيز الطلبات الفورية"]},
{cat:"الأنظمة",items:["منصة زد","نظام أودو","إصدار بوليصات الشحن"]},
{cat:"المهارات الشخصية",items:["الدقة وسرعة التعلم","العمل تحت الضغط","خدمة العملاء"]}],
projects:[
{title:"مشروع سيرة ذاتية إلكترونية",desc:"تطوير موقع شخصي لعرض السيرة الذاتية والمؤهلات والخبرات والشهادات."},
{title:"مشروع تجاري على Shopify",desc:"تدريب ومشروع متعلق بإنشاء وإدارة متجر إلكتروني."}]
};
function getData(){try{return JSON.parse(localStorage.getItem("mfcv_data"))||DEFAULT_DATA}catch(e){return DEFAULT_DATA}}
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function render(){
 const d=getData(), photo=d.photo?`<img src="${d.photo}" alt="${esc(d.name)}">`:`<div class="photo-frame"><div style="width:100%;height:100%;border-radius:50%;display:grid;place-items:center;background:#131b2e;color:#5c6784">صورتك</div></div>`;
 document.getElementById("cv").innerHTML=`
 <section class="hero"><div class="wrap hero-grid"><div><h1 class="name">${esc(d.name)}</h1><div class="role">${esc(d.role)}</div><p class="bio">${esc(d.bio)}</p><div class="actions">${d.cvUrl?`<a class="btn primary" href="${esc(d.cvUrl)}" target="_blank">تحميل السيرة الذاتية</a>`:""}<a class="btn" href="#contact">تواصل معي</a></div></div><div>${d.photo?`<div class="photo-frame">${photo}</div>`:photo}</div></div></section>
 <section id="about"><div class="wrap"><div class="eyebrow">من أنا</div><h2 class="title">${esc(d.headline)}</h2><div class="about-grid"><div><p class="muted">${esc(d.bio)}</p></div><div class="stats"><div class="stat"><b>${esc(d.years)}</b><span>سنوات الخبرة</span></div><div class="stat"><b>${esc(d.projectsCount)}</b><span>المشاريع</span></div><div class="stat"><b>${esc(d.certificatesCount)}</b><span>الشهادات والدورات</span></div><div class="stat"><b>${esc(d.commitment)}</b><span>الالتزام والاحترافية</span></div></div></div></div></section>
 <section id="experience" class="alt"><div class="wrap"><div class="eyebrow">الخبرة</div><h2 class="title">الخبرات العملية</h2>${d.experience.map(x=>`<div class="entry"><div class="period">${esc(x.period)}</div><div><h3>${esc(x.title)}</h3><div class="org">${esc(x.org)}</div><p class="muted">${esc(x.desc)}</p></div></div>`).join("")}</div></section>
 <section id="education"><div class="wrap"><div class="eyebrow">التعليم</div><h2 class="title">التعليم والمؤهلات</h2>${d.education.map(x=>`<div class="entry"><div class="period">${esc(x.period)}</div><div><h3>${esc(x.title)}</h3><div class="org">${esc(x.org)}</div><p class="muted">${esc(x.desc)}</p></div></div>`).join("")}</div></section>
 <section id="certificates" class="alt"><div class="wrap"><div class="eyebrow">الشهادات</div><h2 class="title">الشهادات والدورات</h2><div class="cards">${d.certificates.map(x=>`<div class="card"><h3>${esc(x.title)}</h3>${x.file?`<a class="cert-link" href="${x.file}" target="_blank">عرض الملف المرفوع</a>`:x.url?`<a class="cert-link" href="${esc(x.url)}" target="_blank">عرض الشهادة</a>`:`<span class="muted">لم يتم رفع الملف بعد</span>`}</div>`).join("")}</div></div></section>
 <section id="skills"><div class="wrap"><div class="eyebrow">المهارات</div><h2 class="title">المهارات المهنية</h2><div class="cards">${d.skills.map(x=>`<div class="card"><h3>${esc(x.cat)}</h3><ul>${x.items.map(i=>`<li class="muted">• ${esc(i)}</li>`).join("")}</ul></div>`).join("")}</div></div></section>
 <section id="projects" class="alt"><div class="wrap"><div class="eyebrow">المشاريع</div><h2 class="title">المشاريع والإنجازات</h2><div class="cards">${d.projects.map(x=>`<div class="card"><h3>${esc(x.title)}</h3><p class="muted">${esc(x.desc)}</p></div>`).join("")}</div></div></section>
 <section id="contact"><div class="wrap"><div class="eyebrow">التواصل</div><h2 class="title">تواصل معي</h2><div class="contact"><div class="contact-row"><span class="key">الاسم</span><span>${esc(d.name)}</span></div><div class="contact-row"><span class="key">البريد</span><span><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></span></div><div class="contact-row"><span class="key">الجوال</span><span><a href="tel:${esc(d.phone)}">${esc(d.phone)}</a></span></div><div class="contact-row"><span class="key">الموقع</span><span>${esc(d.location)}</span></div></div></div></section>`;
 document.getElementById("footer").innerHTML=`${esc(d.name)} — جميع الحقوق محفوظة`;
}
render();