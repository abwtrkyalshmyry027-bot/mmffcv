const KEY="mfcv_data", PASSKEY="mfcv_password";
let data=JSON.parse(localStorage.getItem(KEY)||"null")||JSON.parse(JSON.stringify(DEFAULT_DATA));
function $(id){return document.getElementById(id)}
function login(){
 const pass=$("passwordInput").value, saved=localStorage.getItem(PASSKEY)||"123456";
 if(pass===saved){$("loginBox").classList.add("hidden");$("dashboard").classList.remove("hidden");loadForm()}
 else $("loginError").textContent="كلمة المرور غير صحيحة";
}
function loadForm(){
 ["name","role","email","phone","location","cvUrl","bio","headline","years","projectsCount","certificatesCount","commitment"].forEach(k=>$(k).value=data[k]||"");
 $("photoPreview").src=data.photo||"";$("photoPreview").style.display=data.photo?"block":"none";
 renderExperience();renderEducation();renderCertificates();renderSkills();renderProjects();
}
function saveData(){
 ["name","role","email","phone","location","cvUrl","bio","headline","years","projectsCount","certificatesCount","commitment"].forEach(k=>data[k]=$(k).value.trim());
 data.experience=readExperience();data.education=readEducation();data.certificates=readCertificates();data.skills=readSkills();data.projects=readProjects();
 localStorage.setItem(KEY,JSON.stringify(data));alert("تم حفظ التعديلات بنجاح"); 
}
$("photoFile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{data.photo=r.result;$("photoPreview").src=r.result;$("photoPreview").style.display="block"};r.readAsDataURL(f)});
function itemButtons(){return `<div class="editor-actions"><button type="button" class="btn danger" onclick="this.closest('.editor-item').remove()">حذف</button></div>`}
function renderExperience(){ $("experienceEditor").innerHTML=data.experience.map((x,i)=>`<div class="editor-item"><div class="grid two"><label>الفترة<input data-k="period" value="${escA(x.period)}"></label><label>المسمى<input data-k="title" value="${escA(x.title)}"></label><label>الجهة<input data-k="org" value="${escA(x.org)}"></label></div><label>الوصف<textarea data-k="desc">${escA(x.desc)}</textarea></label>${itemButtons()}</div>`).join("")}
function readExperience(){return [...$("experienceEditor").children].map(el=>obj(el,["period","title","org","desc"]))}
function addExperience(){data.experience.push({period:"",title:"",org:"",desc:""});renderExperience()}
function renderEducation(){ $("educationEditor").innerHTML=data.education.map(x=>`<div class="editor-item"><div class="grid two"><label>السنة<input data-k="period" value="${escA(x.period)}"></label><label>المؤهل<input data-k="title" value="${escA(x.title)}"></label><label>الجهة التعليمية<input data-k="org" value="${escA(x.org)}"></label></div><label>الوصف<textarea data-k="desc">${escA(x.desc)}</textarea></label>${itemButtons()}</div>`).join("")}
function readEducation(){return [...$("educationEditor").children].map(el=>obj(el,["period","title","org","desc"]))}
function addEducation(){data.education.push({period:"",title:"",org:"",desc:""});renderEducation()}
function renderCertificates(){ $("certificateEditor").innerHTML=data.certificates.map(x=>`<div class="editor-item"><label>اسم الشهادة أو الدورة<input data-k="title" value="${escA(x.title)}"></label><label>رابط خارجي (اختياري)<input data-k="url" value="${escA(x.url||"")}"></label><label>رفع صورة أو PDF<input type="file" accept="image/*,.pdf" onchange="readFile(this)"><input type="hidden" data-k="file" value="${escA(x.file||"")}"></label><div class="file-status">${x.file?"تم رفع ملف محفوظ محليًا":""}</div>${itemButtons()}</div>`).join("")}
function readCertificates(){return [...$("certificateEditor").children].map(el=>obj(el,["title","url","file"]))}
function addCertificate(){data.certificates.push({title:"",url:"",file:""});renderCertificates()}
function readFile(input){const f=input.files[0], hidden=input.parentElement.querySelector('[data-k="file"]');if(!f)return;const r=new FileReader();r.onload=()=>{hidden.value=r.result;input.closest(".editor-item").querySelector(".file-status").textContent="تم تجهيز الملف للحفظ"};r.readAsDataURL(f)}
function renderSkills(){ $("skillsEditor").innerHTML=data.skills.map(x=>`<div class="editor-item"><label>الفئة<input data-k="cat" value="${escA(x.cat)}"></label><label>المهارات (كل مهارة في سطر)<textarea data-k="items">${escA((x.items||[]).join("\n"))}</textarea></label>${itemButtons()}</div>`).join("")}
function readSkills(){return [...$("skillsEditor").children].map(el=>{let o=obj(el,["cat","items"]);o.items=o.items.split("\n").map(x=>x.trim()).filter(Boolean);return o})}
function addSkill(){data.skills.push({cat:"",items:[]});renderSkills()}
function renderProjects(){ $("projectsEditor").innerHTML=data.projects.map(x=>`<div class="editor-item"><label>اسم المشروع<input data-k="title" value="${escA(x.title)}"></label><label>الوصف<textarea data-k="desc">${escA(x.desc)}</textarea></label>${itemButtons()}</div>`).join("")}
function readProjects(){return [...$("projectsEditor").children].map(el=>obj(el,["title","desc"]))}
function addProject(){data.projects.push({title:"",desc:""});renderProjects()}
function obj(el,keys){const o={};keys.forEach(k=>{const q=el.querySelector(`[data-k="${k}"]`);o[k]=q?q.value:""});return o}
function escA(s=""){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function resetData(){if(confirm("استعادة البيانات الافتراضية؟")){data=JSON.parse(JSON.stringify(DEFAULT_DATA));localStorage.setItem(KEY,JSON.stringify(data));loadForm()}}
function changePassword(){const p=$("newPassword").value.trim();if(p.length<4)return alert("كلمة المرور يجب أن تكون 4 أحرف على الأقل");localStorage.setItem(PASSKEY,p);$("newPassword").value="";alert("تم تغيير كلمة المرور")}
