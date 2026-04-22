// app.js  GnaGsaSerbisyo\n// Firebase Compat SDK loaded via <script> tags  no import/export needed\n\nconst LOGO_URI = "data:image/png;base64,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";\n
//  GLOBALS 
const G = {
  meds:[], devices:[], claims:[], deviceClaims:[], users:[],
  curUser:null, clPage:1, dcPage:1, histCat:'all',
  dashCharts:{}, currentBeneficiary:''
};
let db;

//  HELPERS 
const $    = id => document.getElementById(id);
const toast= (msg,t='ts')=>{ const el=$('toast');el.textContent=msg;el.className='show '+t;clearTimeout(el._t);el._t=setTimeout(()=>el.className='',3200); };
const showLoad= msg=>{ $('loadingTxt').textContent=msg||'Loading...';$('loadingOverlay').classList.add('show'); };
const hideLoad= ()=>$('loadingOverlay').classList.remove('show');
const escJS=s=>String(s??'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\r?\n/g,' ');
const escHtml=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const THEME_KEY='gss_theme_mode';

function applyTheme(mode){
  const theme=mode==='dark'?'dark':'light';
  document.documentElement.setAttribute('data-theme',theme);
  const checkbox=$('themeToggle');
  if(checkbox) checkbox.checked = theme === 'dark';
  try{ localStorage.setItem(THEME_KEY,theme); }catch(e){}
}
function initTheme(){
  let mode='dark';
  try{
    const saved=localStorage.getItem(THEME_KEY);
    const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
    mode=saved||(prefersDark?'dark':'light');
  }catch(e){}
  applyTheme(mode);
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light';
  applyTheme(cur==='dark'?'light':'dark');
}

//  FIRESTORE (compat) 
async function fsGet(col,ord){try{let r=db.collection(col);if(ord)r=r.orderBy(ord,'desc');const s=await r.get();return s.docs.map(d=>({_id:d.id,...d.data()}));}catch(e){console.error('fsGet',col,e);return[];}}
async function fsAdd(col,data){return db.collection(col).add({...data,_ts:firebase.firestore.FieldValue.serverTimestamp()});}
async function fsUpdate(col,id,data){return db.collection(col).doc(id).update(data);}
async function fsDelete(col,id){return db.collection(col).doc(id).delete();}
async function fsBatchSet(col,items){const b=db.batch();items.forEach(i=>{const r=db.collection(col).doc();b.set(r,i);});return b.commit();}
async function fsBatchDelete(col){const s=await db.collection(col).get();const b=db.batch();s.docs.forEach(d=>b.delete(d.ref));return b.commit();}

//  SEED 
async function seedIfEmpty(){
  const[ms,ds,us]=await Promise.all([db.collection('meds').limit(1).get(),db.collection('devices').limit(1).get(),db.collection('users').limit(1).get()]);
  const p=[];if(ms.empty)p.push(fsBatchSet('meds',EXCEL_MEDS));if(ds.empty)p.push(fsBatchSet('devices',INIT_DEVICES));if(us.empty)p.push(fsBatchSet('users',INIT_USERS));
  if(p.length)await Promise.all(p);
}
async function loadAll(){[G.meds,G.devices,G.claims,G.deviceClaims,G.users]=await Promise.all([fsGet('meds'),fsGet('devices'),fsGet('claims','date'),fsGet('deviceClaims','date'),fsGet('users')]);}

//  INIT 
window.addEventListener('DOMContentLoaded',()=>{
  initTheme();
  let initOk=true;
  try{
    const fbConfig=typeof FIREBASE_CONFIG!=='undefined'?FIREBASE_CONFIG:(typeof firebaseConfig!=='undefined'?firebaseConfig:null);
    if(!fbConfig) throw new Error('Missing Firebase config in index.html');
    if(typeof firebase==='undefined') throw new Error('Firebase SDK scripts failed to load');
    if(!firebase.apps.length) firebase.initializeApp(fbConfig);
    db=firebase.firestore();
  }catch(e){
    initOk=false;
    console.error(e);
    toast('Firebase init failed. Check firebaseConfig and internet.','te');
    hideLoad();$('splashScreen').classList.add('hide');$('loginPage').classList.add('visible');
    $('pIn').addEventListener('keydown',ev=>{if(ev.key==='Enter')doLogin();});
  }

  if(initOk){
    setTimeout(async()=>{
      try{
        showLoad('Connecting to Firebase...');
        await Promise.race([
          (async()=>{await seedIfEmpty();await loadAll();})(),
          new Promise((_,rej)=>setTimeout(()=>rej(new Error('Firebase connection timeout')),12000))
        ]);
      }catch(e){
        console.error(e);
        toast('Firebase error. Check firebaseConfig, Firestore rules, or internet.','te');
      }
      hideLoad();$('splashScreen').classList.add('hide');$('loginPage').classList.add('visible');
      $('pIn').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
    },2000);
  }

  document.querySelectorAll('.mo').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open');}));
  [['claimsDropZone','claimsFileInput',f=>handleClaimsImport(f)],['medsDropZone','medsFileInput',f=>handleMedsImport(f)]].forEach(([zid,fid,fn])=>{
    const z=$(zid);if(!z)return;
    z.addEventListener('dragover',e=>{e.preventDefault();z.classList.add('drag-over');});
    z.addEventListener('dragleave',()=>z.classList.remove('drag-over'));
    z.addEventListener('drop',e=>{e.preventDefault();z.classList.remove('drag-over');const f=e.dataTransfer.files[0];if(f)fn(f);});
  });
});

// LOGIN/LOGOUT 
async function doLogin(){
  const u=$('uIn').value.trim(),p=$('pIn').value,btn=document.querySelector('.lbtn');
  btn.disabled=true;btn.textContent='Logging in';
  try{
    G.users=await fsGet('users');const user=G.users.find(x=>x.u===u&&x.p===p);
    if(!user){$('lErr').textContent='Invalid credentials.';btn.disabled=false;btn.textContent='Login';return;}
    G.curUser=user;$('loginPage').classList.remove('visible');$('app').classList.add('visible');
    $('sbNm').textContent=user.u;$('sbRl').textContent=user.role;$('sbAv').textContent=user.u[0].toUpperCase();
    document.querySelectorAll('.admin-only,.admin-only-page').forEach(el=>el.style.display=user.isAdmin?'':'none');
    setToday();renderAll();renderHist();
  }catch(e){$('lErr').textContent='Connection error.';btn.disabled=false;btn.textContent='Login';}
}
function doLogout(){G.curUser=null;Object.values(G.dashCharts).forEach(c=>{try{c.destroy();}catch(e){}});G.dashCharts={};$('app').classList.remove('visible');$('loginPage').classList.add('visible');$('uIn').value='';$('pIn').value='';$('lErr').textContent='';}

function openProfileCard(){
  if(!G.curUser)return;
  $('profileUserName').textContent=G.curUser.u||'-';
  $('profileUserRole').textContent=G.curUser.role||'-';
  $('profileWorkspace').textContent=`${G.meds.length} medicines, ${G.devices.length} devices, ${G.claims.length + G.deviceClaims.length} total claims tracked`;
  openMo('profileMo');
}

function openBeneficiaryProfile(name){
  if(!name)return;
  const meds=G.claims.filter(c=>c.ben===name);
  const devs=G.deviceClaims.filter(c=>c.ben===name);
  const records=[
    ...meds.map(c=>({kind:'Medicine',item:c.med,meta:`${c.type} • Qty ${c.qty}`,date:c.date||'',id:c._id})),
    ...devs.map(c=>({kind:'Device',item:c.device,meta:`${c.claimType} • Qty ${c.qty}`,date:c.date||'',id:c._id}))
  ].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  G.currentBeneficiary=name;
  $('bfName').textContent=name;
  $('bfLast').textContent=records[0]?.date||'No record';
  $('bfMedCount').textContent=String(meds.length);
  $('bfDevCount').textContent=String(devs.length);
  $('bfRecords').innerHTML=records.length
    ? records.slice(0,8).map(r=>`<div class="profile-item"><div style="flex:1"><strong>${r.item}</strong><span>${r.kind}</span></div><div style="text-align:right"><strong>${r.date||'-'}</strong><span>${r.meta}</span></div></div>`).join('')
    : '<div class="profile-item"><div><strong>No records yet</strong><span>This beneficiary has no transactions.</span></div></div>';
  openMo('beneficiaryMo');
}

//  NAV 
function showPage(name,btn){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));$(name+'Page').classList.add('active');if(btn)btn.classList.add('active');if(name==='history'){G.histCat='all';renderHist();}if(name==='manage'){renderManageHistory();renderUsers();}if(name==='devices'){renderDevices();renderEditDevTbl();}if(name==='deviceclaims')renderDeviceClaims();if(name==='adddev')renderEditDevTbl();if(name==='addmed')renderEditTbl();}
function setToday(){$('todayBanner').textContent=new Date().toLocaleDateString('en-PH',{weekday:'long',year:'numeric',month:'long',day:'numeric'});}
function renderAll(){renderDash();renderInv();renderClaimants();renderEditTbl();renderDevices();renderDeviceClaims();renderEditDevTbl();}
function openMo(id){$(id).classList.add('open');const t=new Date().toISOString().split('T')[0];if(id==='claimMo'){$('clDate').value=t;fillMedDrop();updateHint();$('clBen').value='';$('clQty').value=1;}if(id==='devClaimMo'){$('dcDate').value=t;fillDevDrop();$('dcBen').value='';$('dcQty').value=1;$('dcReturn').value='';$('dcNotes').value='';}}
function closeMo(id){$(id).classList.remove('open');}

//  DASHBOARD 
function renderDash(){
  const now=new Date(),today=now.toISOString().split('T')[0];
  $('sTotal').textContent=G.meds.length;$('sStock').textContent=G.meds.reduce((a,m)=>a+m.piece,0).toLocaleString();
  $('sLow').textContent=G.meds.filter(m=>m.piece>0&&m.piece<10).length;$('sOut').textContent=G.meds.filter(m=>m.piece===0).length;
  $('sExp').textContent=G.meds.filter(m=>m.exp&&(new Date(m.exp)-now)/864e5<30&&(new Date(m.exp)-now)/864e5>0).length;
  $('sDevTotal').textContent=G.devices.length;$('sToday').textContent=[...G.claims,...G.deviceClaims].filter(c=>c.date===today).length;
  $('sTotalCl').textContent=new Set([...G.claims,...G.deviceClaims].map(c=>c.ben)).size;
  $('dashCards').innerHTML=G.claims.slice(0,6).map(c=>`<div class="cc"><div class="cc-name">&#128100; ${c.ben}</div><div class="cc-med">&#128138; ${c.med}${c.dosage?'  '+c.dosage:''}</div><div class="cc-med"><span class="badge ${c.type==='Box'?'bexp':'bok'}">${c.type}  ${c.qty}</span></div><div class="cc-foot"><span>${c.date}</span><span>by ${c.encoder}</span></div></div>`).join('')||'<p style="color:var(--mut);font-size:13px;grid-column:1/-1;padding:20px">No claims yet.</p>';
  renderCharts();
}
function destroyChart(id){if(G.dashCharts[id]){try{G.dashCharts[id].destroy();}catch(e){}delete G.dashCharts[id];}}
function renderCharts(){
  const months=[],labels=[];for(let i=5;i>=0;i--){const d=new Date();d.setMonth(d.getMonth()-i);months.push(d.toISOString().substring(0,7));labels.push(d.toLocaleDateString('en-PH',{month:'short',year:'2-digit'}));}
  const allCl=[...G.claims,...G.deviceClaims];
  destroyChart('chartMonthly');G.dashCharts['chartMonthly']=new Chart($('chartMonthly'),{type:'bar',data:{labels,datasets:[{label:'Claims',data:months.map(m=>allCl.filter(c=>c.date&&c.date.startsWith(m)).length),backgroundColor:'rgba(45,158,107,.75)',borderRadius:6,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}});
  const freq={};G.claims.forEach(c=>{freq[c.med]=(freq[c.med]||0)+c.qty;});const sorted=Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5);
  destroyChart('chartTopMeds');G.dashCharts['chartTopMeds']=new Chart($('chartTopMeds'),{type:'bar',data:{labels:sorted.map(e=>e[0].length>22?e[0].substring(0,22)+'':e[0]),datasets:[{label:'Qty',data:sorted.map(e=>e[1]),backgroundColor:['#2d9e6b','#1a6ea8','#d4a942','#e07b2a','#c0392b'],borderRadius:5}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}},indexAxis:'y'}});
  destroyChart('chartTypes');G.dashCharts['chartTypes']=new Chart($('chartTypes'),{type:'doughnut',data:{labels:['Box','Piece','Device'],datasets:[{data:[G.claims.filter(c=>c.type==='Box').length,G.claims.filter(c=>c.type==='Piece').length,G.deviceClaims.length],backgroundColor:['#d4a942','#2d9e6b','#1a6ea8'],hoverOffset:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{font:{size:11}}}}}});
  const wL=[],wD=[];for(let i=3;i>=0;i--){const e=new Date();e.setDate(e.getDate()-i*7);const s=new Date(e);s.setDate(s.getDate()-6);wL.push('Week '+(4-i));wD.push(allCl.filter(c=>c.date&&c.date>=s.toISOString().split('T')[0]&&c.date<=e.toISOString().split('T')[0]).length);}
  destroyChart('chartWeekly');G.dashCharts['chartWeekly']=new Chart($('chartWeekly'),{type:'line',data:{labels:wL,datasets:[{label:'Claims',data:wD,borderColor:'#2d9e6b',backgroundColor:'rgba(45,158,107,.1)',fill:true,tension:.4,pointRadius:5,pointBackgroundColor:'#2d9e6b'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}});
}

//  INVENTORY 
function renderInv(){const q=(($('invQ')?.value)||'').toLowerCase(),now=new Date(),isAdmin=G.curUser?.isAdmin,rows=G.meds.filter(m=>m.name.toLowerCase().includes(q)||m.lab.toLowerCase().includes(q)||(m.mg||'').toLowerCase().includes(q));$('invTbl').innerHTML=rows.length?rows.map((m,i)=>{const days=m.exp?(new Date(m.exp)-now)/864e5:999;let badge='<span class="badge bok">OK</span>';if(m.piece===0)badge='<span class="badge bout">Out of Stock</span>';else if(m.piece<10)badge='<span class="badge blow">Low Stock</span>';if(days<30&&days>0)badge+=' <span class="badge bexp">Expiring</span>';if(days<=0&&m.exp)badge='<span class="badge bout">Expired</span>';return`<tr><td>${i+1}</td><td><strong>${m.name}</strong></td><td>${m.lab}</td><td>${m.mg||''}</td><td>${m.mfg||''}</td><td>${m.exp||''}</td><td>${m.box}</td><td><strong>${m.piece}</strong></td><td>${badge}</td>${isAdmin?`<td><button class="btn bw" style="padding:3px 8px;font-size:11px" onclick="openEditMed('${m._id}')">&#9998;</button> <button class="btn bd" style="padding:3px 8px;font-size:11px" onclick="delMed('${m._id}')">&#128465;</button></td>`:'<td></td>'}</tr>`;}).join(''):'<tr class="erow"><td colspan="10">No medicines found.</td></tr>';}
function renderDevices(){const q=(($('devQ')?.value)||'').toLowerCase(),isAdmin=G.curUser?.isAdmin,rows=G.devices.filter(d=>d.name.toLowerCase().includes(q)||d.cat.toLowerCase().includes(q)||(d.brand||'').toLowerCase().includes(q));$('devTbl').innerHTML=rows.length?rows.map((d,i)=>`<tr><td>${i+1}</td><td><strong>${d.name}</strong></td><td><span class="badge bdev">${d.cat}</span></td><td>${d.brand||''}</td><td>${d.serial||''}</td><td>${d.cond}</td><td><strong>${d.qty}</strong></td><td>${d.qty>0?'<span class="badge bok">Available</span>':'<span class="badge bout">None</span>'}</td>${isAdmin?`<td><button class="btn bw" style="padding:3px 8px;font-size:11px" onclick="openEditDevice('${d._id}')">&#9998;</button> <button class="btn bd" style="padding:3px 8px;font-size:11px" onclick="delDevice('${d._id}')">&#128465;</button></td>`:'<td></td>'}</tr>`).join(''):'<tr class="erow"><td colspan="9">No devices found.</td></tr>';}

//  PAGINATION 
function renderPagination(cid,curP,total,totalRec,pageKey,fn){
  const el=$(cid);if(!el)return;const range=window.innerWidth<600?1:2;
  let h=`<span>${totalRec} record${totalRec!==1?'s':''}  Page ${curP} of ${total}</span><div class="page-btns">`;
  h+=`<button class="pbtn" onclick="G.${pageKey}=1;${fn}()" ${curP===1?'disabled':''}></button>`;
  h+=`<button class="pbtn" onclick="G.${pageKey}=${curP-1};${fn}()" ${curP===1?'disabled':''}></button>`;
  const s=Math.max(1,curP-range),e=Math.min(total,curP+range);
  if(s>1){h+=`<button class="pbtn" onclick="G.${pageKey}=1;${fn}()">1</button>`;if(s>2)h+='<span style="padding:0 3px;color:var(--mut)"></span>';}
  for(let i=s;i<=e;i++)h+=`<button class="pbtn${i===curP?' act':''}" onclick="G.${pageKey}=${i};${fn}()">${i}</button>`;
  if(e<total){if(e<total-1)h+='<span style="padding:0 3px;color:var(--mut)"></span>';h+=`<button class="pbtn" onclick="G.${pageKey}=${total};${fn}()">${total}</button>`;}
  h+=`<button class="pbtn" onclick="G.${pageKey}=${curP+1};${fn}()" ${curP===total?'disabled':''}></button>`;
  h+=`<button class="pbtn" onclick="G.${pageKey}=${total};${fn}()" ${curP===total?'disabled':''}></button></div>`;
  el.innerHTML=h;
}
function renderClaimants(){const q=(($('clQ')?.value)||'').toLowerCase(),perPage=parseInt($('clPerPage')?.value||40),isAdmin=G.curUser?.isAdmin,all=G.claims.filter(c=>c.ben.toLowerCase().includes(q)||c.med.toLowerCase().includes(q)),totalPages=Math.max(1,Math.ceil(all.length/perPage));if(G.clPage>totalPages)G.clPage=totalPages;const start=(G.clPage-1)*perPage,rows=all.slice(start,start+perPage);$('clTbl').innerHTML=rows.length?rows.map((c,ri)=>`<tr><td>${start+ri+1}</td><td><strong>${c.ben}</strong></td><td>${c.med}</td><td>${c.dosage||''}</td><td>${c.type}</td><td>${c.qty}</td><td>${c.date}</td><td>${c.encoder}</td><td><div class="action-strip"><button class="icon-btn" title="Profile" onclick="openBeneficiaryProfile('${escJS(c.ben)}')">&#128100;</button>${isAdmin?`<button class="icon-btn danger" title="Delete" onclick="delClaim('${c._id}')">&#128465;</button>`:''}</div></td></tr>`).join(''):'<tr class="erow"><td colspan="9">No claims found.</td></tr>';renderPagination('clPagination',G.clPage,totalPages,all.length,'clPage','renderClaimants');}
function renderDeviceClaims(){const q=(($('dcQ')?.value)||'').toLowerCase(),perPage=parseInt($('dcPerPage')?.value||40),isAdmin=G.curUser?.isAdmin,all=G.deviceClaims.filter(c=>c.ben.toLowerCase().includes(q)||(c.device||'').toLowerCase().includes(q)),totalPages=Math.max(1,Math.ceil(all.length/perPage));if(G.dcPage>totalPages)G.dcPage=totalPages;const start=(G.dcPage-1)*perPage,rows=all.slice(start,start+perPage);$('dcTbl').innerHTML=rows.length?rows.map((c,ri)=>`<tr><td>${start+ri+1}</td><td><strong>${c.ben}</strong></td><td>${c.device}</td><td><span class="badge bdev">${c.category}</span></td><td>${c.qty}</td><td>${c.claimType}</td><td>${c.returnDate||''}</td><td>${c.date}</td><td>${c.encoder}</td><td><div class="action-strip"><button class="icon-btn" title="Profile" onclick="openBeneficiaryProfile('${escJS(c.ben)}')">&#128100;</button>${isAdmin?`<button class="icon-btn danger" title="Delete" onclick="delDeviceClaim('${c._id}')">&#128465;</button>`:''}</div></td></tr>`).join(''):'<tr class="erow"><td colspan="10">No device claims found.</td></tr>';renderPagination('dcPagination',G.dcPage,totalPages,all.length,'dcPage','renderDeviceClaims');}

//  HISTORY 
function getDateRange(f){const now=new Date(),today=now.toISOString().split('T')[0];if(f==='today')return{from:today,to:today};if(f==='week'){const d=new Date(now);d.setDate(d.getDate()-d.getDay());return{from:d.toISOString().split('T')[0],to:today};}if(f==='month')return{from:new Date(now.getFullYear(),now.getMonth(),1).toISOString().split('T')[0],to:today};return null;}
function applyDateFilter(list){const filter=$('histFilter')?.value||'all',cd=$('histCustomDate')?.value||'',q=($('histQ')?.value||'').toLowerCase();let out=list;if(q)out=out.filter(c=>c.ben.toLowerCase().includes(q)||(c.med||c.device||'').toLowerCase().includes(q));if(filter==='custom'&&cd)out=out.filter(c=>c.date===cd);else if(filter!=='all'){const r=getDateRange(filter);if(r)out=out.filter(c=>c.date>=r.from&&c.date<=r.to);}return out;}
function renderHistStats(list){const tp=list.reduce((a,c)=>a+(c.pcs||c.qty||0),0),uniq=new Set(list.map(c=>c.ben)).size,freq={};list.forEach(c=>{const k=c.med||c.device||'?';freq[k]=(freq[k]||0)+1;});const top=Object.entries(freq).sort((a,b)=>b[1]-a[1])[0],devC=list.filter(c=>c._src==='dev').length;return`<div class="hstat"><div class="hstat-l">Total Claims</div><div class="hstat-v">${list.length}</div></div><div class="hstat g"><div class="hstat-l">Total Qty</div><div class="hstat-v">${tp.toLocaleString()}</div></div><div class="hstat"><div class="hstat-l">Beneficiaries</div><div class="hstat-v">${uniq}</div></div><div class="hstat b"><div class="hstat-l">Device Claims</div><div class="hstat-v">${devC}</div></div><div class="hstat r"><div class="hstat-l">Top Item</div><div class="hstat-v" style="font-size:13px;line-height:1.3">${top?top[0].substring(0,20):''}</div></div>`;}
function renderHistGroups(list){if(!list.length)return'<div class="hist-empty"><div class="hist-empty-icon">&#129514;</div><p>No claims found.</p></div>';const sorted=[...list].sort((a,b)=>b.date.localeCompare(a.date)),groups={};sorted.forEach(c=>{(groups[c.date]=groups[c.date]||[]).push(c);});return Object.entries(groups).sort((a,b)=>b[0].localeCompare(a[0])).map(([date,items])=>`<div class="hist-group"><div class="hist-date-header"><div class="hist-date-pill">&#128197; ${fmtDate(date)}</div><div class="hist-date-count">${items.length} claim${items.length>1?'s':''}</div><div class="hist-date-line"></div></div><div class="hist-cards">${items.map(c=>c._src==='dev'?`<div class="hcard device-type"><div class="hcard-name">&#128100; ${c.ben}</div><div class="hcard-med">&#129338; ${c.device}${c.category?' · '+c.category:''}</div><div class="hcard-badges"><span class="hcard-badge hb-dev">${c.claimType}</span><span class="hcard-badge hb-qty">x${c.qty}</span></div><div class="hcard-foot"><span>${c.date}</span><span>${c.encoder}</span></div></div>`:`<div class="hcard ${c.type==='Box'?'box-type':'piece-type'}"><div class="hcard-name">&#128100; ${c.ben}</div><div class="hcard-med">&#128138; ${c.med}${c.dosage?' · '+c.dosage:''}</div><div class="hcard-badges"><span class="hcard-badge ${c.type==='Box'?'hb-box':'hb-piece'}">${c.type}</span><span class="hcard-badge hb-qty">x${c.qty}</span></div><div class="hcard-foot"><span>${c.date}</span><span>${c.encoder}</span></div></div>`).join('')}</div></div>`).join('');}
function renderHist(){const f=$('histFilter').value;$('histCustomDate').style.display=f==='custom'?'block':'none';let mL=G.claims.map(c=>({...c,_src:'med'})),dL=G.deviceClaims.map(c=>({...c,_src:'dev'}));let combined=G.histCat==='medicine'?mL:G.histCat==='device'?dL:[...mL,...dL];combined=applyDateFilter(combined);$('histCount').textContent=`${combined.length} claim records`;$('histStats').innerHTML=renderHistStats(combined);$('histGroups').innerHTML=renderHistGroups(combined);}
function renderManageHistory(){const q=($('manQ')?.value||'').toLowerCase(),filter=$('manFilter')?.value||'all';let combined=[...G.claims.map(c=>({...c,_src:'med'})),...G.deviceClaims.map(c=>({...c,_src:'dev'}))].sort((a,b)=>b.date.localeCompare(a.date));if(q)combined=combined.filter(c=>c.ben.toLowerCase().includes(q)||(c.med||c.device||'').toLowerCase().includes(q));if(filter!=='all'){const r=getDateRange(filter);if(r)combined=combined.filter(c=>c.date>=r.from&&c.date<=r.to);}$('manHistStats').innerHTML=renderHistStats(combined);$('manHistGroups').innerHTML=renderHistGroups(combined.slice(0,80));}
function fmtDate(d){try{return new Date(d+'T00:00:00').toLocaleDateString('en-PH',{weekday:'long',year:'numeric',month:'long',day:'numeric'});}catch(e){return d;}}

//  ADD/EDIT MEDICINE 
async function addMed(){const name=$('aMN').value.trim(),lab=$('aML').value.trim();if(!name||!lab){toast('Name and Lab required.','te');return;}showLoad('Saving');await fsAdd('meds',{name,lab,mg:$('aMG').value.trim(),qty:$('aMQ').value.trim(),box:parseInt($('aMB').value)||0,piece:parseInt($('aMP').value)||0,mfg:$('aMM').value,exp:$('aME').value});G.meds=await fsGet('meds');['aMN','aML','aMG','aMQ','aMM','aME'].forEach(id=>$(id).value='');$('aMB').value='0';$('aMP').value='0';hideLoad();renderAll();toast(' '+name+' added.');}
async function delMed(id){if(!confirm('Delete this medicine?'))return;showLoad('Deleting');await fsDelete('meds',id);G.meds=await fsGet('meds');hideLoad();renderAll();toast('Medicine removed.','te');}
function openEditMed(id){const m=G.meds.find(x=>x._id===id);if(!m)return;$('eIdx').value=id;$('eN').value=m.name;$('eL').value=m.lab;$('eG').value=m.mg||'';$('eQ').value=m.qty||'';$('eB').value=m.box;$('eP').value=m.piece;$('eM').value=m.mfg||'';$('eE').value=m.exp||'';openMo('editMedMo');}
async function saveEditMed(){const id=$('eIdx').value;showLoad('Saving');await fsUpdate('meds',id,{name:$('eN').value.trim(),lab:$('eL').value.trim(),mg:$('eG').value.trim(),qty:$('eQ').value.trim(),box:parseInt($('eB').value)||0,piece:parseInt($('eP').value)||0,mfg:$('eM').value,exp:$('eE').value});G.meds=await fsGet('meds');hideLoad();closeMo('editMedMo');renderAll();toast(' Medicine updated.');}
function renderEditTbl(){if(!G.curUser?.isAdmin)return;$('editTbl').innerHTML=G.meds.map((m,i)=>`<tr><td>${i+1}</td><td><strong>${m.name}</strong></td><td>${m.lab}</td><td>${m.mg||''}</td><td>${m.box}</td><td>${m.piece}</td><td>${m.exp||''}</td><td><button class="btn bw" style="padding:3px 8px;font-size:11px" onclick="openEditMed('${m._id}')">&#9998;</button> <button class="btn bd" style="padding:3px 8px;font-size:11px" onclick="delMed('${m._id}')">&#128465;</button></td></tr>`).join('');}

//  ADD/EDIT DEVICE 
async function addDevice(){const name=$('adN').value.trim();if(!name){toast('Device name required.','te');return;}showLoad('Saving');await fsAdd('devices',{name,cat:$('adCat').value,brand:$('adBrand').value.trim(),serial:$('adSerial').value.trim(),qty:parseInt($('adQty').value)||0,cond:$('adCond').value,notes:$('adNotes').value.trim()});G.devices=await fsGet('devices');['adN','adBrand','adSerial','adNotes'].forEach(id=>$(id).value='');$('adQty').value=1;hideLoad();renderDevices();renderEditDevTbl();renderDash();toast(' '+name+' added.');}
async function delDevice(id){if(!confirm('Delete this device?'))return;showLoad('Deleting');await fsDelete('devices',id);G.devices=await fsGet('devices');hideLoad();renderDevices();renderEditDevTbl();renderDash();toast('Device removed.','te');}
function openEditDevice(id){const d=G.devices.find(x=>x._id===id);if(!d)return;$('edIdx').value=id;$('edN').value=d.name;$('edCat').value=d.cat;$('edBrand').value=d.brand||'';$('edSerial').value=d.serial||'';$('edQty').value=d.qty;$('edCond').value=d.cond;$('edNotes').value=d.notes||'';openMo('editDevMo');}
async function saveEditDevice(){const id=$('edIdx').value;showLoad('Saving');await fsUpdate('devices',id,{name:$('edN').value.trim(),cat:$('edCat').value,brand:$('edBrand').value.trim(),serial:$('edSerial').value.trim(),qty:parseInt($('edQty').value)||0,cond:$('edCond').value,notes:$('edNotes').value.trim()});G.devices=await fsGet('devices');hideLoad();closeMo('editDevMo');renderDevices();renderEditDevTbl();renderDash();toast(' Device updated.');}
function renderEditDevTbl(){if(!G.curUser?.isAdmin)return;const el=$('editDevTbl');if(!el)return;el.innerHTML=G.devices.map((d,i)=>`<tr><td>${i+1}</td><td><strong>${d.name}</strong></td><td>${d.cat}</td><td>${d.brand||''}</td><td>${d.qty}</td><td>${d.cond}</td><td><button class="btn bw" style="padding:3px 8px;font-size:11px" onclick="openEditDevice('${d._id}')">&#9998;</button> <button class="btn bd" style="padding:3px 8px;font-size:11px" onclick="delDevice('${d._id}')">&#128465;</button></td></tr>`).join('');}

//  CLAIMS 
function fillMedDrop(){const s=$('clMed');s.innerHTML='<option value="" disabled selected> Select medicine </option>';G.meds.forEach((m,i)=>{s.innerHTML+=`<option value="${i}">${m.name}${m.mg?' ('+m.mg+')':''}  ${m.piece} pcs</option>`;});}
function updateHint(){const i=parseInt($('clMed').value),type=$('clType').value,qty=parseInt($('clQty').value)||0;if(isNaN(i)){$('qHint').textContent='';return;}const m=G.meds[i],ppb=m.box>0?Math.round(m.piece/m.box):1,pcs=type==='Box'?qty*ppb:qty,ok=pcs<=m.piece;$('qHint').style.color=ok?'var(--mut)':'var(--red)';$('qHint').textContent=`= ${pcs} piece(s) will be deducted. Available: ${m.piece} pcs${!ok?'  INSUFFICIENT':''}`;}
async function submitClaim(){const ben=$('clBen').value.trim(),mi=parseInt($('clMed').value),type=$('clType').value,qty=parseInt($('clQty').value)||0,date=$('clDate').value;if(!ben){toast('Enter beneficiary name.','te');return;}if(isNaN(mi)){toast('Select a medicine.','te');return;}if(qty<1){toast('Qty must be  1.','te');return;}const m=G.meds[mi],ppb=m.box>0?Math.round(m.piece/m.box):1,pcs=type==='Box'?qty*ppb:qty;if(pcs>m.piece){toast('Insufficient stock! Available: '+m.piece+' pcs.','te');return;}showLoad('Submitting');await fsUpdate('meds',m._id,{piece:m.piece-pcs,box:type==='Box'?Math.max(0,m.box-qty):m.box});await fsAdd('claims',{ben,med:m.name,dosage:m.mg||'',type,qty,pcs,date,encoder:G.curUser.u});[G.meds,G.claims]=await Promise.all([fsGet('meds'),fsGet('claims','date')]);G.clPage=1;closeMo('claimMo');hideLoad();renderAll();renderHist();toast(' Claim for '+ben+' submitted.');}
async function delClaim(id){if(!confirm('Delete this claim?'))return;showLoad('Deleting');await fsDelete('claims',id);G.claims=await fsGet('claims','date');hideLoad();renderAll();renderHist();toast('Claim deleted.','te');}
function fillDevDrop(){const s=$('dcDev');s.innerHTML='<option value="" disabled selected> Select device </option>';G.devices.forEach((d,i)=>{s.innerHTML+=`<option value="${i}">${d.name} (${d.cat})  Qty: ${d.qty}</option>`;});}
async function submitDeviceClaim(){const ben=$('dcBen').value.trim(),di=parseInt($('dcDev').value),qty=parseInt($('dcQty').value)||0,claimType=$('dcType').value,returnDate=$('dcReturn').value,date=$('dcDate').value,notes=$('dcNotes').value.trim();if(!ben){toast('Enter beneficiary name.','te');return;}if(isNaN(di)){toast('Select a device.','te');return;}if(qty<1){toast('Qty must be  1.','te');return;}const d=G.devices[di];if(claimType!=='Returned'&&qty>d.qty){toast('Insufficient stock!','te');return;}showLoad('Submitting');await fsUpdate('devices',d._id,{qty:claimType==='Returned'?d.qty+qty:Math.max(0,d.qty-qty)});await fsAdd('deviceClaims',{ben,device:d.name,category:d.cat,qty,claimType,returnDate,date,notes,encoder:G.curUser.u});[G.devices,G.deviceClaims]=await Promise.all([fsGet('devices'),fsGet('deviceClaims','date')]);G.dcPage=1;closeMo('devClaimMo');hideLoad();renderAll();renderHist();toast(' Device claim for '+ben+' submitted.');}
async function delDeviceClaim(id){if(!confirm('Delete this device claim?'))return;showLoad('Deleting');await fsDelete('deviceClaims',id);G.deviceClaims=await fsGet('deviceClaims','date');hideLoad();renderAll();renderHist();toast('Device claim deleted.','te');}

//  USERS 
async function renderUsers(){G.users=await fsGet('users');const faid=G.users.find(u=>u.isAdmin)?._id;$('userList').innerHTML=G.users.map(u=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--pale)"><div><div style="font-weight:600;font-size:13px">${u.u}</div><div style="font-size:11px;color:var(--mut)">${u.role}</div></div>${u._id!==faid?`<button class="btn bd" style="padding:3px 8px;font-size:11px" onclick="delUser('${u._id}')"></button>`:'<span style="font-size:10px;color:var(--mut)">protected</span>'}</div>`).join('');}
async function addUser(){const u=$('nuUser').value.trim(),p=$('nuPass').value.trim(),role=$('nuRole').value;if(!u||!p){toast('Username and password required.','te');return;}if(G.users.find(x=>x.u===u)){toast('Username already exists.','te');return;}showLoad('Adding');await fsAdd('users',{u,p,role,isAdmin:role==='Administrator'});G.users=await fsGet('users');hideLoad();closeMo('addUserMo');renderUsers();$('nuUser').value='';$('nuPass').value='';toast(' User '+u+' added.');}
async function delUser(id){if(!confirm('Delete this user?'))return;showLoad('Deleting');await fsDelete('users',id);G.users=await fsGet('users');hideLoad();renderUsers();toast('User removed.','te');}

//  IMPORT 
function parseCsvLine(line){const res=[];let cur='',inQ=false;for(let i=0;i<line.length;i++){const c=line[i];if(c==='"')inQ=!inQ;else if(c===','&&!inQ){res.push(cur.trim());cur='';}else cur+=c;}res.push(cur.trim().replace(/\r/g,''));return res;}
function handleClaimsImport(file){if(!file)return;const ext=file.name.split('.').pop().toLowerCase();const process=csv=>{const lines=csv.trim().split('\n');if(lines.length<2){toast('File empty.','te');return;}const hdr=lines[0].split(',').map(h=>h.trim().toLowerCase().replace(/["\r]/g,''));const rows=[];for(let i=1;i<lines.length;i++){const vals=parseCsvLine(lines[i]);if(vals.every(v=>!v))continue;const row={};hdr.forEach((h,j)=>row[h]=vals[j]||'');const ben=row.beneficiary||row.ben||row['beneficiary name']||'';const med=row.medicine||row.med||row['medicine name']||'';if(!ben||!med)continue;rows.push({ben,med,dosage:row.dosage||'',type:row.type||'Box',qty:parseInt(row.qty||row.quantity)||0,pcs:parseInt(row.pcs||row.pieces||row.qty||0)||0,date:row.date||new Date().toISOString().split('T')[0],encoder:row.encoder||G.curUser?.u||'imported'});}if(!rows.length){toast('No valid rows found.','tw_');return;}showLoad(`Importing ${rows.length} claims`);fsBatchSet('claims',rows).then(()=>fsGet('claims','date')).then(data=>{G.claims=data;hideLoad();closeMo('importClaimsMo');renderAll();renderHist();toast(` ${rows.length} claims imported.`);}).catch(e=>{hideLoad();toast('Import failed: '+e.message,'te');});};if(ext==='csv'){const r=new FileReader();r.onload=e=>process(e.target.result);r.readAsText(file);}else{const r=new FileReader();r.onload=e=>{const wb=XLSX.read(e.target.result,{type:'array'});process(XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]]));};r.readAsArrayBuffer(file);}}
function handleMedsImport(file){if(!file)return;const ext=file.name.split('.').pop().toLowerCase();const process=csv=>{const lines=csv.trim().split('\n');if(lines.length<2){toast('File empty.','te');return;}const hdr=lines[0].split(',').map(h=>h.trim().toLowerCase().replace(/["\r]/g,''));const rows=[];for(let i=1;i<lines.length;i++){const vals=parseCsvLine(lines[i]);if(vals.every(v=>!v))continue;const row={};hdr.forEach((h,j)=>row[h]=vals[j]||'');const name=row.name||row['medicine name']||row.medicine||'';if(!name)continue;rows.push({name,lab:row.lab||row.laboratory||'',mg:row.mg||row.dosage||'',qty:row.qty||'',mfg:row.mfg||'',exp:row.exp||row.expiry||'',box:parseInt(row.box||row.boxes||0)||0,piece:parseInt(row.piece||row.pieces||row.pcs||0)||0});}if(!rows.length){toast('No valid rows found.','tw_');return;}showLoad(`Importing ${rows.length} medicines`);fsBatchSet('meds',rows).then(()=>fsGet('meds')).then(data=>{G.meds=data;hideLoad();closeMo('importMedsMo');renderAll();toast(` ${rows.length} medicines imported.`);}).catch(e=>{hideLoad();toast('Import failed: '+e.message,'te');});};if(ext==='csv'){const r=new FileReader();r.onload=e=>process(e.target.result);r.readAsText(file);}else{const r=new FileReader();r.onload=e=>{const wb=XLSX.read(e.target.result,{type:'array'});process(XLSX.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]]));};r.readAsArrayBuffer(file);}}

//  EXPORT / CLEAR / RESET 
function exportClaimsCSV(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['Beneficiary,Medicine,Dosage,Type,Qty,Pieces,Date,Encoder\n'+G.claims.map(c=>[c.ben,c.med,c.dosage||'',c.type,c.qty,c.pcs,c.date,c.encoder].join(',')).join('\n')],{type:'text/csv'}));a.download='medicine_claims.csv';a.click();toast(' CSV exported.');}
function exportDeviceClaimsCSV(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['Beneficiary,Device,Category,Qty,ClaimType,ReturnDate,Date,Encoder\n'+G.deviceClaims.map(c=>[c.ben,c.device,c.category,c.qty,c.claimType,c.returnDate||'',c.date,c.encoder].join(',')).join('\n')],{type:'text/csv'}));a.download='device_claims.csv';a.click();toast(' Device CSV exported.');}
function backupToSheets(){
  const now = new Date().toISOString().split('T')[0];
  // Medicine Claims
  const medClaims = 'Medicine Claims\nBeneficiary,Medicine,Dosage,Type,Qty,Pieces,Date,Encoder\n' + G.claims.map(c=>[c.ben,c.med,c.dosage||'',c.type,c.qty,c.pcs,c.date,c.encoder].join(',')).join('\n');
  // Device Claims
  const devClaims = '\n\nDevice Claims\nBeneficiary,Device,Category,Qty,ClaimType,ReturnDate,Date,Encoder\n' + G.deviceClaims.map(c=>[c.ben,c.device,c.category,c.qty,c.claimType,c.returnDate||'',c.date,c.encoder].join(',')).join('\n');
  // Medicines
  const meds = '\n\nMedicines\nName,Lab,Dosage,Mfg,Exp,Boxes,Pieces\n' + G.meds.map(m=>[m.name,m.lab,m.mg||'',m.mfg||'',m.exp||'',m.box,m.piece].join(',')).join('\n');
  // Devices
  const devs = '\n\nDevices\nName,Category,Brand,Serial,Condition,Qty,Notes\n' + G.devices.map(d=>[d.name,d.cat,d.brand||'',d.serial||'',d.cond,d.qty,d.notes||''].join(',')).join('\n');
  // Users
  const users = '\n\nUsers\nUsername,Role\n' + G.users.map(u=>[u.username,u.role].join(',')).join('\n');
  
  const data = medClaims + devClaims + meds + devs + users;
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([data],{type:'text/csv'}));
  a.download=`backup_${now}.csv`;
  a.click();
  toast('Backup CSV downloaded. Upload to Google Sheets for auto backup.');
}
async function clearClaims(){if(!confirm('Clear ALL medicine claims?'))return;showLoad('Clearing');await fsBatchDelete('claims');G.claims=[];hideLoad();renderAll();renderHist();toast('All medicine claims cleared.','te');}
async function clearDeviceClaims(){if(!confirm('Clear ALL device claims?'))return;showLoad('Clearing');await fsBatchDelete('deviceClaims');G.deviceClaims=[];hideLoad();renderAll();renderHist();toast('All device claims cleared.','te');}
async function resetInventory(){if(!confirm('Reset medicine inventory to default?'))return;showLoad('Resetting');await fsBatchDelete('meds');await fsBatchSet('meds',EXCEL_MEDS);G.meds=await fsGet('meds');hideLoad();renderAll();toast('Inventory reset.');}

//  PRINT 
function pH(title,subtitle,extra){const logo = typeof LOGO_URI !== 'undefined' && LOGO_URI ? `<img src="${LOGO_URI}" class="print-logo" alt="Logo">` : '';return`<div class="print-header">${logo}<div style="font-size:14pt;font-weight:700;color:#0d3321;line-height:1.25">GnaGsa Serbisyo</div><div style="font-size:9.5pt;color:#1a5c3a;font-weight:600;line-height:1.3">Community Health & Welfare Service Summary</div><div style="font-size:11pt;color:#1a5c3a;font-weight:600;margin-top:5pt">${title}</div><div style="font-size:8pt;color:#888;margin-top:3pt">${subtitle}${extra?'  '+extra:''}</div></div>`;}
const pNow=()=>new Date().toLocaleDateString('en-PH',{year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'});
function openPrintWindow(title,bodyHtml,opts={}){
  const orientation=opts.landscape?'landscape':'portrait';
  const area=$('printArea');
  if(!area){toast('Print area not found.','te');return;}

  // Strip any theme attribute so dark-mode CSS never touches the print area
  document.documentElement.removeAttribute('data-theme-saved');
  const savedTheme=document.documentElement.getAttribute('data-theme');

  // Build content with fully self-contained light styles
  area.innerHTML=`<style>
    @page{size:${orientation};margin:12mm}
    #printArea{background:#fff!important;color:#173122!important;font-family:'DM Sans',sans-serif}
    #printArea *{color:#173122!important;background-color:transparent!important;box-shadow:none!important;text-shadow:none!important}
    #printArea .sheet{max-width:1120px;margin:0 auto;background:#fff!important;padding:28px 30px}
    #printArea .print-header{text-align:center;margin-bottom:18px;padding-bottom:12px;border-bottom:2px solid #0d3321!important}
    #printArea .print-logo{width:58px;height:58px;border-radius:50%;object-fit:cover;margin-bottom:8px}
    #printArea .meta-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin:18px 0}
    #printArea .meta-card{border:1px solid #dbe6df!important;border-radius:14px;padding:12px 14px;background:#f7fbf8!important}
    #printArea .meta-label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#5b7163!important}
    #printArea .meta-value{font-size:18px;font-weight:700;color:#0d3321!important;margin-top:4px;word-break:break-word}
    #printArea .section{margin-top:20px}
    #printArea .section-title{margin:0 0 10px;font-size:16px;color:#0d3321!important}
    #printArea .receipt-block{border:1px solid #dbe6df!important;border-radius:16px;padding:18px;background:#f5faf7!important}
    #printArea .receipt-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:14px}
    #printArea .receipt-item{padding:10px 12px;border:1px solid #dbe6df!important;border-radius:12px;background:#fff!important}
    #printArea .receipt-item strong,#printArea .mini-strong{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#68806f!important;margin-bottom:6px}
    #printArea .receipt-item span{font-size:15px;font-weight:600;color:#173122!important;word-break:break-word}
    #printArea table{width:100%;border-collapse:collapse;background:#fff!important}
    #printArea th,#printArea td{padding:8px 9px;border:1px solid #d3ddd6!important;font-size:12px;line-height:1.4;text-align:left;vertical-align:top;color:#173122!important}
    #printArea th{background:#edf7f1!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    #printArea tbody tr:nth-child(even) td{background:#fafcfb!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    #printArea .empty{padding:24px;border:1px dashed #cdd8d0!important;border-radius:14px;color:#607267!important;background:#fafcfb!important;text-align:center}
    #printArea .print-footer{margin-top:18px;padding-top:10px;border-top:1px solid #d9e1dc!important;text-align:center;font-size:11px;color:#607267!important}
    #printArea .signatures{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;margin-top:26px}
    #printArea .signature{padding-top:36px;border-top:1px solid #9fb0a4!important;text-align:center;font-size:11px;color:#607267!important}
  </style>
  <div class="sheet" style="max-width:1120px;margin:0 auto;background:#fff;padding:28px 30px;color:#173122">
    ${bodyHtml}
    <div class="print-footer" style="margin-top:18px;padding-top:10px;border-top:1px solid #d9e1dc;text-align:center;font-size:11px;color:#607267">Printed via GnaGsaSerbisyo on ${escHtml(pNow())}</div>
  </div>`;

  area.style.display='block';

  // Temporarily remove dark theme from html element so browser print preview is light
  if(savedTheme) document.documentElement.removeAttribute('data-theme');

  try{
    window.print();
  }catch(e){
    console.error('print error',e);
    toast('Print failed.','te');
  }finally{
    // Restore theme and hide print area after dialog closes
    setTimeout(()=>{
      if(savedTheme) document.documentElement.setAttribute('data-theme',savedTheme);
      area.style.display='none';
      area.innerHTML='';
    },800);
  }
}
function printMetaCard(label,value){return`<div class="meta-card"><div class="meta-label">${escHtml(label)}</div><div class="meta-value">${escHtml(value)}</div></div>`;}
function printTable(headers,rows,emptyText){
  if(!rows.length)return`<div class="empty">${escHtml(emptyText)}</div>`;
  return `<table><thead><tr>${headers.map(h=>`<th>${escHtml(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function getFilteredMedicineInventory(){
  const q=(($('invQ')?.value)||'').toLowerCase();
  const now=new Date();
  return G.meds.filter(m=>m.name.toLowerCase().includes(q)||m.lab.toLowerCase().includes(q)||(m.mg||'').toLowerCase().includes(q)).map(m=>{
    const days=m.exp?(new Date(m.exp)-now)/864e5:999;
    let status='OK';
    if(m.piece===0) status='Out of Stock';
    else if(m.piece<10) status='Low Stock';
    if(days<=0&&m.exp) status='Expired';
    else if(days<30&&days>0) status+=' / Expiring';
    return {...m,status};
  });
}
function getFilteredDeviceInventory(){
  const q=(($('devQ')?.value)||'').toLowerCase();
  return G.devices.filter(d=>d.name.toLowerCase().includes(q)||d.cat.toLowerCase().includes(q)||(d.brand||'').toLowerCase().includes(q)).map(d=>({...d,status:d.qty>0?'Available':'None'}));
}
function getFilteredMedicineClaims(){
  const q=(($('clQ')?.value)||'').toLowerCase();
  return G.claims.filter(c=>c.ben.toLowerCase().includes(q)||c.med.toLowerCase().includes(q));
}
function getFilteredDeviceClaims(){
  const q=(($('dcQ')?.value)||'').toLowerCase();
  return G.deviceClaims.filter(c=>c.ben.toLowerCase().includes(q)||(c.device||'').toLowerCase().includes(q));
}
function getFilteredHistoryClaims(){
  const meds=G.claims.map(c=>({...c,_src:'med'}));
  const devs=G.deviceClaims.map(c=>({...c,_src:'dev'}));
  let combined=G.histCat==='medicine'?meds:G.histCat==='device'?devs:[...meds,...devs];
  combined=applyDateFilter(combined);
  return combined.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
}
function printMedicineInventory(){
  const rows=getFilteredMedicineInventory();
  const body=`${pH('Medicine Inventory Report','Prepared for printing',`Items: ${rows.length}`)}
    <div class="meta-grid">
      ${printMetaCard('Total Medicines',String(rows.length))}
      ${printMetaCard('Total Pieces',String(rows.reduce((a,m)=>a+(Number(m.piece)||0),0)))}
      ${printMetaCard('Low Stock',String(rows.filter(m=>m.piece>0&&m.piece<10).length))}
      ${printMetaCard('Out of Stock',String(rows.filter(m=>Number(m.piece)===0).length))}
    </div>
    <div class="section"><h3 class="section-title">Inventory List</h3>${printTable(
      ['#','Medicine','Laboratory','Dosage','Mfg','Exp','Boxes','Pieces','Status'],
      rows.map((m,i)=>[
        escHtml(String(i+1)),
        `<strong>${escHtml(m.name)}</strong>`,
        escHtml(m.lab),
        escHtml(m.mg||''),
        escHtml(m.mfg||''),
        escHtml(m.exp||''),
        escHtml(String(m.box??0)),
        escHtml(String(m.piece??0)),
        escHtml(m.status)
      ]),
      'No medicines found for the current filter.'
    )}</div>`;
  openPrintWindow('Medicine Inventory Report',body,{landscape:true});
}
function printMedicineClaims(){
  const rows=getFilteredMedicineClaims();
  const body=`${pH('Medicine Claims Report','Prepared for printing',`Claims: ${rows.length}`)}
    <div class="meta-grid">
      ${printMetaCard('Claim Records',String(rows.length))}
      ${printMetaCard('Beneficiaries',String(new Set(rows.map(r=>r.ben)).size))}
      ${printMetaCard('Total Quantity',String(rows.reduce((a,r)=>a+(Number(r.qty)||0),0)))}
    </div>
    <div class="section"><h3 class="section-title">Claims List</h3>${printTable(
      ['#','Beneficiary','Medicine','Dosage','Type','Qty','Date','Encoder'],
      rows.map((c,i)=>[
        escHtml(String(i+1)),
        `<strong>${escHtml(c.ben)}</strong>`,
        escHtml(c.med),
        escHtml(c.dosage||''),
        escHtml(c.type),
        escHtml(String(c.qty??0)),
        escHtml(c.date||''),
        escHtml(c.encoder||'')
      ]),
      'No medicine claims found for the current filter.'
    )}</div>`;
  openPrintWindow('Medicine Claims Report',body,{landscape:true});
}
function printDeviceInventory(){
  const rows=getFilteredDeviceInventory();
  const body=`${pH('Device Inventory Report','Prepared for printing',`Devices: ${rows.length}`)}
    <div class="meta-grid">
      ${printMetaCard('Device Items',String(rows.length))}
      ${printMetaCard('Available Units',String(rows.reduce((a,d)=>a+(Number(d.qty)||0),0)))}
      ${printMetaCard('Categories',String(new Set(rows.map(d=>d.cat)).size))}
      ${printMetaCard('Unavailable',String(rows.filter(d=>Number(d.qty)===0).length))}
    </div>
    <div class="section"><h3 class="section-title">Inventory List</h3>${printTable(
      ['#','Device','Category','Brand / Model','Serial','Condition','Qty','Status'],
      rows.map((d,i)=>[
        escHtml(String(i+1)),
        `<strong>${escHtml(d.name)}</strong>`,
        escHtml(d.cat),
        escHtml(d.brand||''),
        escHtml(d.serial||''),
        escHtml(d.cond||''),
        escHtml(String(d.qty??0)),
        escHtml(d.status)
      ]),
      'No devices found for the current filter.'
    )}</div>`;
  openPrintWindow('Device Inventory Report',body,{landscape:true});
}
function printDeviceClaims(){
  const rows=getFilteredDeviceClaims();
  const body=`${pH('Device Claims Report','Prepared for printing',`Claims: ${rows.length}`)}
    <div class="meta-grid">
      ${printMetaCard('Claim Records',String(rows.length))}
      ${printMetaCard('Beneficiaries',String(new Set(rows.map(r=>r.ben)).size))}
      ${printMetaCard('Total Quantity',String(rows.reduce((a,r)=>a+(Number(r.qty)||0),0)))}
    </div>
    <div class="section"><h3 class="section-title">Claims List</h3>${printTable(
      ['#','Beneficiary','Device','Category','Qty','Claim Type','Return Date','Date','Encoder'],
      rows.map((c,i)=>[
        escHtml(String(i+1)),
        `<strong>${escHtml(c.ben)}</strong>`,
        escHtml(c.device),
        escHtml(c.category||''),
        escHtml(String(c.qty??0)),
        escHtml(c.claimType||''),
        escHtml(c.returnDate||''),
        escHtml(c.date||''),
        escHtml(c.encoder||'')
      ]),
      'No device claims found for the current filter.'
    )}</div>`;
  openPrintWindow('Device Claims Report',body,{landscape:true});
}
function printClaimsHistory(){
  const rows=getFilteredHistoryClaims();
  const body=`${pH('Claims History Report','Prepared for printing',`Records: ${rows.length}`)}
    <div class="meta-grid">
      ${printMetaCard('History Records',String(rows.length))}
      ${printMetaCard('Beneficiaries',String(new Set(rows.map(r=>r.ben)).size))}
      ${printMetaCard('Medicine Claims',String(rows.filter(r=>r._src==='med').length))}
      ${printMetaCard('Device Claims',String(rows.filter(r=>r._src==='dev').length))}
    </div>
    <div class="section"><h3 class="section-title">History List</h3>${printTable(
      ['#','Beneficiary','Source','Item','Details','Qty','Date','Encoder'],
      rows.map((c,i)=>[
        escHtml(String(i+1)),
        `<strong>${escHtml(c.ben)}</strong>`,
        escHtml(c._src==='dev'?'Device':'Medicine'),
        escHtml(c._src==='dev'?c.device:c.med),
        escHtml(c._src==='dev'?`${c.claimType||''}${c.category?' / '+c.category:''}`:`${c.type||''}${c.dosage?' / '+c.dosage:''}`),
        escHtml(String(c.qty??0)),
        escHtml(c.date||''),
        escHtml(c.encoder||'')
      ]),
      'No history records found for the current filter.'
    )}</div>`;
  openPrintWindow('Claims History Report',body,{landscape:true});
}
function printBeneficiaryProfile(){
  const name=G.currentBeneficiary||$('bfName')?.textContent?.trim();
  if(!name){toast('Open a beneficiary profile first.','te');return;}
  const meds=G.claims.filter(c=>c.ben===name);
  meds.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const latest=meds[0]?.date||'No record';
  const totalQty=meds.reduce((sum,c)=>sum+(Number(c.qty)||0),0);
  const body=`${pH('Beneficiary Medicine Receipt','Summary of medicines received',escHtml(name))}
    <div class="receipt-block">
      <div class="mini-strong">Beneficiary Summary</div>
      <div class="receipt-grid">
        <div class="receipt-item"><strong>Beneficiary</strong><span>${escHtml(name)}</span></div>
        <div class="receipt-item"><strong>Last Activity</strong><span>${escHtml(latest)}</span></div>
        <div class="receipt-item"><strong>Total Medicines</strong><span>${escHtml(String(meds.length))}</span></div>
        <div class="receipt-item"><strong>Total Quantity</strong><span>${escHtml(String(totalQty))}</span></div>
      </div>
    </div>
    <div class="section"><h3 class="section-title">Medicine Summary</h3>${printTable(
      ['#','Medicine','Dosage','Type','Qty','Date Claimed'],
      meds.map((c,i)=>[
        escHtml(String(i+1)),
        `<strong>${escHtml(c.med)}</strong>`,
        escHtml(c.dosage||''),
        escHtml(c.type||''),
        escHtml(String(c.qty??0)),
        escHtml(c.date||'')
      ]),
      'No medicines recorded for this beneficiary.'
    )}</div>
    <div class="signatures">
      <div class="signature">Beneficiary Signature</div>
      <div class="signature">Authorized Staff Signature</div>
    </div>`;
  openPrintWindow(`${name} Medicine Receipt`,body,{landscape:false,width:900});
}
