// DATA
const campaignsData=[
{id:1,name:'Lançamento Curso Python',date:'2026-05-13',status:'active',budgetDay:85,totalSpent:1240,impressions:45200,clicks:1890,leads:312,ctr:4.18,platform:'Instagram',headline:'Domine Python em 30 dias',desc:'Aprenda a programar do zero com nosso método exclusivo.',cta:'Inscreva-se Agora',primaryText:'🚀 Quer aprender a programar do ZERO? Nosso curso de Python vai te levar do básico ao avançado em apenas 30 dias!'},
{id:2,name:'Remarketing E-book Grátis',date:'2026-05-12',status:'active',budgetDay:45,totalSpent:890,impressions:32100,clicks:1450,leads:198,ctr:4.52,platform:'Facebook',headline:'E-book Gratuito de Marketing',desc:'Baixe agora e descubra as 10 estratégias.',cta:'Baixar Grátis',primaryText:'📘 GRÁTIS! Descubra as 10 estratégias de marketing que realmente funcionam. Baixe agora!'},
{id:3,name:'Captação Mentoria Premium',date:'2026-05-11',status:'active',budgetDay:150,totalSpent:3200,impressions:78500,clicks:3200,leads:245,ctr:4.08,platform:'Google Ads',headline:'Mentoria Exclusiva',desc:'Transforme seu negócio com acompanhamento.',cta:'Quero Saber Mais',primaryText:'💼 Mentoria exclusiva para empreendedores que querem escalar seus resultados.'},
{id:4,name:'Promo Black Friday',date:'2026-05-10',status:'paused',budgetDay:200,totalSpent:4800,impressions:120000,clicks:5400,leads:380,ctr:4.5,platform:'Instagram',headline:'Oferta Imperdível',desc:'Até 70% OFF em todos os cursos!',cta:'Aproveitar',primaryText:'🔥 BLACK FRIDAY! Até 70% de desconto em TODOS os cursos. Só até domingo!'},
{id:5,name:'Webinar Funil de Vendas',date:'2026-05-08',status:'ended',budgetDay:60,totalSpent:720,impressions:28400,clicks:1100,leads:149,ctr:3.87,platform:'Facebook',headline:'Webinar Ao Vivo e Gratuito',desc:'Aprenda a criar funis que vendem.',cta:'Garantir Vaga',primaryText:'🎯 Webinar GRATUITO: Como criar um funil de vendas que converte no automático!'},
{id:6,name:'Teste A/B Landing Page',date:'2026-05-06',status:'ended',budgetDay:30,totalSpent:490,impressions:15600,clicks:780,leads:92,ctr:5.0,platform:'Google Ads',headline:'Conheça Nossa Plataforma',desc:'A solução completa para seu marketing.',cta:'Começar Agora',primaryText:'✅ A plataforma que vai revolucionar seu marketing digital. Teste grátis!'}
];
const automationsData=[
{id:1,name:'Gerador de Copy com IA',desc:'Crie textos persuasivos para anúncios, e-mails e landing pages com IA.',price:49,icon:'fas fa-pen-fancy',color:'#6366f1',cat:'creation',badge:'Popular',badgeClass:'badge-popular',active:true},
{id:2,name:'Criação de Imagens IA',desc:'Gere imagens profissionais para anúncios e redes sociais com IA generativa.',price:79,icon:'fas fa-image',color:'#ec4899',cat:'creation',badge:'Novo',badgeClass:'badge-new',active:false},
{id:3,name:'Automação de Campanhas',desc:'Regras inteligentes para otimizar lances, pausar ou escalar campanhas.',price:99,icon:'fas fa-cogs',color:'#f59e0b',cat:'automation',badge:'Pro',badgeClass:'badge-pro',active:false},
{id:4,name:'Chatbot WhatsApp IA',desc:'Atendimento automatizado via WhatsApp com qualificação de leads.',price:129,icon:'fab fa-whatsapp',color:'#22c55e',cat:'support',badge:'Popular',badgeClass:'badge-popular',active:true},
{id:5,name:'Análise de Sentimento',desc:'Monitore comentários para entender o sentimento do público.',price:59,icon:'fas fa-brain',color:'#06b6d4',cat:'automation',badge:'Novo',badgeClass:'badge-new',active:false},
{id:6,name:'Gerador de Relatórios',desc:'Relatórios automáticos com insights baseados nos dados das campanhas.',price:39,icon:'fas fa-file-alt',color:'#8b5cf6',cat:'automation',badge:null,active:false}
];
const integrationsData=[
{id:1,name:'Instagram',subtitle:'Meta Business Suite',icon:'fab fa-instagram',color:'#E1306C',bg:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',connected:true,account:'@minha_marca',lastSync:'Há 5 min',features:['Campanhas','Métricas','Stories','Leads']},
{id:2,name:'Facebook Ads',subtitle:'Meta Ads Manager',icon:'fab fa-facebook',color:'#1877F2',bg:'#1877F2',connected:true,account:'Minha Empresa',lastSync:'Há 12 min',features:['Campanhas','Públicos','Conversões','Catálogo']},
{id:3,name:'Google Ads',subtitle:'Google Marketing',icon:'fab fa-google',color:'#4285F4',bg:'#4285F4',connected:false,account:null,lastSync:null,features:['Search','Display','YouTube','Shopping']},
{id:4,name:'Google Analytics',subtitle:'GA4',icon:'fas fa-chart-bar',color:'#F9AB00',bg:'#F9AB00',connected:true,account:'GA-12345678',lastSync:'Há 1 hora',features:['Tráfego','Eventos','Conversões','Audiência']},
{id:5,name:'WhatsApp Business',subtitle:'API Oficial',icon:'fab fa-whatsapp',color:'#25D366',bg:'#25D366',connected:false,account:null,lastSync:null,features:['Mensagens','Chatbot','Catálogo','Leads']},
{id:6,name:'TikTok Ads',subtitle:'TikTok for Business',icon:'fab fa-tiktok',color:'#fff',bg:'#010101',connected:false,account:null,lastSync:null,features:['In-Feed','Spark Ads','Métricas','Audiência']}
];

// PERIOD DATA
const periodData={
daily:{labels:['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],revenue:[4200,5800,6100,7400,6900,8200,9500],spent:[1200,1500,1800,2100,1900,2400,2800],kpi:{revenue:47850,spent:12340,leads:1284,conversion:4.7,ticket:197,roi:287}},
weekly:{labels:['Sem 1','Sem 2','Sem 3','Sem 4'],revenue:[28000,34500,41200,52000],spent:[8200,9800,11500,14200],kpi:{revenue:155700,spent:43700,leads:4820,conversion:5.2,ticket:215,roi:256}},
monthly:{labels:['Jan','Fev','Mar','Abr','Mai'],revenue:[95000,112000,128000,145000,168000],spent:[32000,38000,42000,48000,52000],kpi:{revenue:648000,spent:212000,leads:18400,conversion:5.8,ticket:235,roi:305}}
};
let currentPeriod='daily';

// NAV
const navItems=document.querySelectorAll('.nav-item');
const panels=document.querySelectorAll('.panel');
const titles={dashboard:['Dashboard','Visão geral do seu marketing'],campaigns:['Campanhas','Gerencie seus criativos e anúncios'],automations:['Automações IA','Amplie com inteligência artificial'],integrations:['Integrações','Conecte suas plataformas']};
navItems.forEach(item=>{item.addEventListener('click',e=>{e.preventDefault();const p=item.dataset.panel;navItems.forEach(n=>n.classList.remove('active'));item.classList.add('active');panels.forEach(x=>x.classList.remove('active'));document.getElementById('panel-'+p).classList.add('active');document.getElementById('pageTitle').textContent=titles[p][0];document.getElementById('pageSubtitle').textContent=titles[p][1];document.getElementById('periodSelector').style.display=p==='dashboard'?'flex':'none';document.getElementById('sidebar').classList.remove('open')})});
document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));

// KPI ANIMATION
function animateKPI(id,target,isCurrency,isPercent){
const el=document.getElementById(id);if(!el)return;
const dur=800,start=performance.now();
function upd(now){const p=Math.min((now-start)/dur,1),e=1-Math.pow(1-p,3),v=target*e;
if(isCurrency)el.textContent='R$ '+Math.floor(v).toLocaleString('pt-BR');
else if(isPercent)el.textContent=v.toFixed(1)+'%';
else el.textContent=Math.floor(v).toLocaleString('pt-BR');
if(p<1)requestAnimationFrame(upd)}requestAnimationFrame(upd)}

function updateKPIs(d){animateKPI('kpi-revenue',d.revenue,true,false);animateKPI('kpi-spent',d.spent,true,false);animateKPI('kpi-leads',d.leads,false,false);animateKPI('kpi-conversion',d.conversion,false,true);animateKPI('kpi-ticket',d.ticket,true,false);animateKPI('kpi-roi',d.roi,false,true)}

// CHARTS
const chartOpts={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#1a1f35',titleColor:'#f1f5f9',bodyColor:'#94a3b8',borderColor:'rgba(255,255,255,0.1)',borderWidth:1,padding:12,cornerRadius:8}},interaction:{intersect:false,mode:'index'}};
const gridColor='rgba(255,255,255,0.04)';
const tickStyle={color:'#64748b',font:{size:11}};

let revenueChart=new Chart(document.getElementById('revenueChart'),{type:'line',data:{labels:periodData.daily.labels,datasets:[
{label:'Receita',data:periodData.daily.revenue,borderColor:'#6366f1',backgroundColor:'rgba(99,102,241,0.08)',fill:true,tension:.4,borderWidth:2.5,pointRadius:4,pointBackgroundColor:'#6366f1',pointBorderColor:'#0a0e1a',pointBorderWidth:2},
{label:'Investido',data:periodData.daily.spent,borderColor:'#ec4899',backgroundColor:'rgba(236,72,153,0.05)',fill:true,tension:.4,borderWidth:2.5,pointRadius:4,pointBackgroundColor:'#ec4899',pointBorderColor:'#0a0e1a',pointBorderWidth:2}
]},options:{...chartOpts,scales:{x:{grid:{color:gridColor},ticks:tickStyle},y:{grid:{color:gridColor},ticks:{...tickStyle,callback:v=>'R$'+(v/1000)+'k'}}}}});

new Chart(document.getElementById('campaignCostChart'),{type:'bar',data:{labels:['Python','E-book','Mentoria','Black F.','Webinar'],datasets:[{data:[1240,890,3200,4800,720],backgroundColor:['#6366f1','#8b5cf6','#ec4899','#f59e0b','#06b6d4'],borderRadius:6,barThickness:20}]},options:{...chartOpts,indexAxis:'y',scales:{x:{grid:{color:gridColor},ticks:{...tickStyle,callback:v=>'R$'+v}},y:{grid:{display:false},ticks:{color:'#94a3b8',font:{size:10}}}}}});

new Chart(document.getElementById('leadsChart'),{type:'doughnut',data:{labels:['Instagram','Facebook','Google Ads','Orgânico'],datasets:[{data:[420,310,380,174],backgroundColor:['#E1306C','#1877F2','#4285F4','#22c55e'],borderWidth:0,spacing:3,borderRadius:4}]},options:{...chartOpts,cutout:'68%',plugins:{legend:{display:true,position:'bottom',labels:{color:'#94a3b8',font:{size:10},padding:10,usePointStyle:true,pointStyleWidth:8}}}}});

// PERIOD BUTTONS - FUNCTIONAL
document.querySelectorAll('.period-btn').forEach(btn=>{btn.addEventListener('click',()=>{
document.querySelectorAll('.period-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
currentPeriod=btn.dataset.period;const d=periodData[currentPeriod];
revenueChart.data.labels=d.labels;revenueChart.data.datasets[0].data=d.revenue;revenueChart.data.datasets[1].data=d.spent;revenueChart.update('active');
updateKPIs(d.kpi)})});
updateKPIs(periodData.daily.kpi);

// CAMPAIGNS
const months=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
function renderCampaigns(filter='all',search=''){
const list=document.getElementById('campaignsList');
let f=campaignsData;if(filter!=='all')f=f.filter(c=>c.status===filter);if(search)f=f.filter(c=>c.name.toLowerCase().includes(search.toLowerCase()));
list.innerHTML=f.map(c=>{const d=new Date(c.date+'T12:00:00');const sl=c.status==='active'?'Ativa':c.status==='paused'?'Pausada':'Finalizada';
return`<div class="campaign-item" data-id="${c.id}" onclick="selectCampaign(${c.id})"><div class="campaign-date"><span class="day">${d.getDate()}</span><span class="month">${months[d.getMonth()]}</span></div><div class="campaign-info"><span class="campaign-name">${c.name}</span><div class="campaign-meta"><span><i class="fas fa-bullseye"></i> ${c.platform}</span><span><i class="fas fa-mouse-pointer"></i> ${c.clicks.toLocaleString('pt-BR')} cliques</span><span><i class="fas fa-users"></i> ${c.leads} leads</span></div></div><div class="campaign-stats"><span class="campaign-budget">R$ ${c.budgetDay}/dia</span><span class="campaign-status status-${c.status}">${sl}</span></div></div>`}).join('')}
renderCampaigns();

document.getElementById('filterStatus').addEventListener('change',e=>renderCampaigns(e.target.value,document.getElementById('searchCampaign').value));
document.getElementById('searchCampaign').addEventListener('input',e=>renderCampaigns(document.getElementById('filterStatus').value,e.target.value));

// SELECT CAMPAIGN - FACEBOOK ADS EDITOR
let editorImageSrc=null;
window.selectCampaign=function(id){
const c=campaignsData.find(x=>x.id===id);if(!c)return;
document.querySelectorAll('.campaign-item').forEach(el=>el.classList.remove('selected'));
document.querySelector(`.campaign-item[data-id="${id}"]`)?.classList.add('selected');
editorImageSrc=null;
const ed=document.getElementById('campaignEditor');
const conv=((c.leads/c.clicks)*100).toFixed(1),cpc=(c.totalSpent/c.clicks).toFixed(2);
ed.innerHTML=`
<div class="editor-tabs"><div class="editor-tab active" data-tab="edit"><i class="fas fa-edit"></i> Criativo</div><div class="editor-tab" data-tab="preview"><i class="fas fa-eye"></i> Preview</div></div>
<div id="editorEditPanel" class="editor-body">
<div class="editor-section"><div class="editor-section-title"><i class="fas fa-font"></i> Texto Principal</div><textarea class="editor-input" id="edPrimaryText" maxlength="500" oninput="updateCharCount(this,'charCount1');updateLivePreview(${c.id})">${c.primaryText}</textarea><div class="editor-char-count" id="charCount1">${c.primaryText.length}/500</div></div>
<div class="editor-section"><div class="editor-section-title"><i class="fas fa-heading"></i> Título</div><input class="editor-input" id="edHeadline" value="${c.headline}" maxlength="80" oninput="updateCharCount(this,'charCount2');updateLivePreview(${c.id})"><div class="editor-char-count" id="charCount2">${c.headline.length}/80</div></div>
<div class="editor-section"><div class="editor-section-title"><i class="fas fa-align-left"></i> Descrição</div><input class="editor-input" id="edDesc" value="${c.desc}" maxlength="150" oninput="updateCharCount(this,'charCount3');updateLivePreview(${c.id})"><div class="editor-char-count" id="charCount3">${c.desc.length}/150</div></div>
<div class="editor-section"><div class="editor-section-title"><i class="fas fa-image"></i> Mídia do Anúncio</div><div class="image-upload-area" id="imageUploadArea" onclick="document.getElementById('fileInput').click()"><i class="fas fa-cloud-upload-alt"></i><p>Clique para adicionar imagem</p><span>JPG, PNG ou GIF • Recomendado: 1080x1080px</span><input type="file" id="fileInput" accept="image/*" onchange="handleImageUpload(event,${c.id})"></div></div>
<div class="editor-section"><div class="editor-section-title"><i class="fas fa-mouse-pointer"></i> Botão CTA</div><select class="editor-input" id="edCta" onchange="updateLivePreview(${c.id})"><option ${c.cta==='Inscreva-se Agora'?'selected':''}>Inscreva-se Agora</option><option ${c.cta==='Baixar Grátis'?'selected':''}>Baixar Grátis</option><option ${c.cta==='Quero Saber Mais'?'selected':''}>Quero Saber Mais</option><option ${c.cta==='Aproveitar'?'selected':''}>Aproveitar</option><option ${c.cta==='Garantir Vaga'?'selected':''}>Garantir Vaga</option><option ${c.cta==='Começar Agora'?'selected':''}>Começar Agora</option><option ${c.cta==='Comprar Agora'?'selected':''}>Comprar Agora</option><option ${c.cta==='Saiba Mais'?'selected':''}>Saiba Mais</option></select></div>
</div>
<div id="editorPreviewPanel" style="display:none">
<div class="editor-preview"><h4><i class="fas fa-mobile-alt"></i> Preview do Anúncio</h4><div class="fb-ad-preview" id="fbAdPreview"></div></div>
<div class="editor-metrics"><div class="editor-metric"><span class="metric-val">${c.impressions.toLocaleString('pt-BR')}</span><span class="metric-label">Impressões</span></div><div class="editor-metric"><span class="metric-val">${c.ctr}%</span><span class="metric-label">CTR</span></div><div class="editor-metric"><span class="metric-val">R$ ${cpc}</span><span class="metric-label">CPC</span></div><div class="editor-metric"><span class="metric-val">${conv}%</span><span class="metric-label">Conversão</span></div></div>
</div>`;
// Tab switching
ed.querySelectorAll('.editor-tab').forEach(tab=>{tab.addEventListener('click',()=>{ed.querySelectorAll('.editor-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');
document.getElementById('editorEditPanel').style.display=tab.dataset.tab==='edit'?'block':'none';
document.getElementById('editorPreviewPanel').style.display=tab.dataset.tab==='preview'?'block':'none';
if(tab.dataset.tab==='preview')updateLivePreview(id)})});
};

window.updateCharCount=function(input,countId){document.getElementById(countId).textContent=input.value.length+'/'+input.maxLength};

window.handleImageUpload=function(e,campId){
const file=e.target.files[0];if(!file)return;
const reader=new FileReader();
reader.onload=function(ev){
editorImageSrc=ev.target.result;
const area=document.getElementById('imageUploadArea');
area.innerHTML=`<img src="${editorImageSrc}" class="uploaded-image"><div class="image-actions"><button class="btn-change-img" onclick="event.stopPropagation();document.getElementById('fileInput2').click()">Trocar</button><button class="btn-remove-img" onclick="event.stopPropagation();removeImage(${campId})">Remover</button></div><input type="file" id="fileInput2" accept="image/*" onchange="handleImageUpload(event,${campId})" style="display:none">`;
area.onclick=null};reader.readAsDataURL(file)};

window.removeImage=function(campId){editorImageSrc=null;
const area=document.getElementById('imageUploadArea');
area.innerHTML=`<i class="fas fa-cloud-upload-alt"></i><p>Clique para adicionar imagem</p><span>JPG, PNG ou GIF • Recomendado: 1080x1080px</span><input type="file" id="fileInput" accept="image/*" onchange="handleImageUpload(event,${campId})">`;
area.onclick=function(){document.getElementById('fileInput').click()}};

window.updateLivePreview=function(id){
const c=campaignsData.find(x=>x.id===id);if(!c)return;
const txt=document.getElementById('edPrimaryText')?.value||c.primaryText;
const hl=document.getElementById('edHeadline')?.value||c.headline;
const desc=document.getElementById('edDesc')?.value||c.desc;
const cta=document.getElementById('edCta')?.value||c.cta;
const prev=document.getElementById('fbAdPreview');if(!prev)return;
const imgHTML=editorImageSrc?`<img src="${editorImageSrc}" style="width:100%;height:100%;object-fit:cover">`:`<i class="fas fa-image"></i>`;
prev.innerHTML=`<div class="fb-ad-header"><div class="fb-ad-avatar"></div><div><div class="fb-ad-page-name">Sua Marca</div><div class="fb-ad-sponsored">Patrocinado · <i class="fas fa-globe-americas"></i></div></div></div><div class="fb-ad-text">${txt}</div><div class="fb-ad-image">${imgHTML}</div><div class="fb-ad-link-bar"><div><span>seusite.com.br</span><h5>${hl}</h5><span style="font-size:.72rem;color:#65676b">${desc}</span></div></div><div class="fb-ad-cta-row"><div class="fb-ad-cta-btn">${cta}</div></div>`};

// AUTOMATIONS
function renderAutomations(cat='all'){const grid=document.getElementById('automationsGrid');let f=cat==='all'?automationsData:automationsData.filter(a=>a.cat===cat);
grid.innerHTML=f.map(a=>`<div class="automation-card"><div class="card-icon" style="background:${a.color}22;color:${a.color}"><i class="${a.icon}"></i></div>${a.badge?`<span class="card-badge ${a.badgeClass}">${a.badge}</span>`:''}<h3>${a.name}</h3><p>${a.desc}</p><div class="card-footer"><span class="card-price">R$ ${a.price}<span>/mês</span></span><button class="btn-activate ${a.active?'active-btn':'inactive'}" onclick="toggleAutomation(${a.id})">${a.active?'<i class="fas fa-check"></i> Ativo':'Ativar'}</button></div></div>`).join('')}
window.toggleAutomation=function(id){const a=automationsData.find(x=>x.id===id);if(a){a.active=!a.active;renderAutomations(document.querySelector('.cat-btn.active')?.dataset.cat||'all')}};
renderAutomations();
document.querySelectorAll('.cat-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderAutomations(btn.dataset.cat)})});

// INTEGRATIONS
function renderIntegrations(){document.getElementById('integrationsGrid').innerHTML=integrationsData.map(ig=>`<div class="integration-card"><div class="integration-top"><div class="integration-logo" style="background:${ig.bg};color:#fff"><i class="${ig.icon}"></i></div><div class="integration-title"><h3>${ig.name}</h3><span>${ig.subtitle}</span></div></div><div class="integration-status"><span class="status-dot ${ig.connected?'connected':'disconnected'}"></span><span class="status-text">${ig.connected?'Conectado':'Desconectado'}</span>${ig.connected?`<span class="sync-time">${ig.lastSync}</span>`:''}</div>${ig.connected?`<div style="font-size:.82rem;color:var(--text-muted);margin-bottom:12px"><i class="fas fa-user"></i> ${ig.account}</div>`:''}<div class="integration-features">${ig.features.map(f=>`<span class="feature-tag">${f}</span>`).join('')}</div><div class="integration-actions"><button class="btn-connect ${ig.connected?'configure':'connect'}" onclick="toggleIntegration(${ig.id})"><i class="fas fa-${ig.connected?'cog':'link'}"></i> ${ig.connected?'Configurar':'Conectar'}</button></div></div>`).join('')}
window.toggleIntegration=function(id){const ig=integrationsData.find(x=>x.id===id);if(ig&&!ig.connected){ig.connected=true;ig.account='conta_conectada';ig.lastSync='Agora'}renderIntegrations()};
renderIntegrations();

// MODAL
const mo=document.getElementById('modalOverlay');
document.getElementById('modalClose').addEventListener('click',()=>mo.classList.remove('active'));
mo.addEventListener('click',e=>{if(e.target===mo)mo.classList.remove('active')});
document.getElementById('btnNewCampaign').addEventListener('click',()=>{
document.getElementById('modalBody').innerHTML=`<h2 style="margin-bottom:8px">Criar Novo Anúncio</h2><p style="color:var(--text-muted);margin-bottom:24px;font-size:.9rem">Configure seu anúncio e comece a anunciar</p><div style="display:flex;flex-direction:column;gap:14px"><div><label style="font-size:.82rem;color:var(--text-secondary);display:block;margin-bottom:6px">Nome da Campanha</label><input type="text" placeholder="Ex: Lançamento Produto X" style="width:100%;padding:11px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-size:.9rem;outline:none"></div><div><label style="font-size:.82rem;color:var(--text-secondary);display:block;margin-bottom:6px">Plataforma</label><select style="width:100%;padding:11px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-size:.9rem;outline:none"><option>Instagram</option><option>Facebook</option><option>Google Ads</option></select></div><div><label style="font-size:.82rem;color:var(--text-secondary);display:block;margin-bottom:6px">Orçamento Diário (R$)</label><input type="number" placeholder="100" style="width:100%;padding:11px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-primary);font-size:.9rem;outline:none"></div><button class="btn-primary" style="margin-top:8px;justify-content:center" onclick="document.getElementById('modalOverlay').classList.remove('active')"><i class="fas fa-rocket"></i> Criar Anúncio</button></div>`;
mo.classList.add('active')});
