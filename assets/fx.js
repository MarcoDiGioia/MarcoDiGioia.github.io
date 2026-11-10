(function(){const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,RGB='255,180,84';
const cv=document.getElementById('stars'),cx=cv.getContext('2d');let W,H,cols,dr=[],sp=1;const CH='01{}[]<>/=;$#&*+-0123456789abcdef';
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;cols=Math.ceil(W/18);dr=Array.from({length:cols},()=>Math.random()*H/18)}rs();addEventListener('resize',rs);
addEventListener('scroll',()=>{sp=1+Math.min(scrollY/80,6)});setInterval(()=>{sp=Math.max(1,sp*.92)},60);let ft=0;
(function f(){requestAnimationFrame(f);if(++ft%2)return;cx.fillStyle='rgba(3,5,16,.12)';cx.fillRect(0,0,W,H);cx.font='14px ui-monospace,monospace';
for(let i=0;i<cols;i++){const y=dr[i]*18;cx.fillStyle=Math.random()>.97?'rgba(255,240,215,.9)':'rgba('+RGB+',.26)';cx.fillText(CH[Math.random()*CH.length|0],i*18,y);if(!rm)dr[i]+=sp*.5*(.5+(i%5)/5);if(y>H&&Math.random()>.975)dr[i]=0}})();
const t=document.getElementById('t');if(t){const IT=document.documentElement.lang==='it',n=navigator,base=JSON.parse(t.dataset.lines),sleep=ms=>new Promise(r=>setTimeout(r,ms)),esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const rome=()=>{const d=new Date(),o={timeZone:'Europe/Rome'},loc=IT?'it-IT':'en-GB',s=new Intl.DateTimeFormat(loc,{...o,weekday:'short',day:'numeric',month:'short',year:'numeric'}).format(d).replace(/[.,]/g,''),h=new Intl.DateTimeFormat(loc,{...o,hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).format(d);let z='CET';try{const p=new Intl.DateTimeFormat('en-GB',{...o,timeZoneName:'short'}).formatToParts(d).find(x=>x.type==='timeZoneName');if(p)z=p.value}catch(e){}return s+' '+h+' '+z};
let bat=null;try{n.getBattery&&n.getBattery().then(b=>bat=b).catch(()=>{})}catch(e){}
function info(){const ua=n.userAgent,L=[];let br=/Edg\/(\d+)/.exec(ua)&&['Edge',RegExp.$1]||/OPR\/(\d+)/.exec(ua)&&['Opera',RegExp.$1]||/Firefox\/(\d+)/.exec(ua)&&['Firefox',RegExp.$1]||/Chrome\/(\d+)/.exec(ua)&&['Chrome',RegExp.$1]||/Version\/(\d+).*Safari/.exec(ua)&&['Safari',RegExp.$1]||['?',''];
const os=/Windows/.test(ua)?'Windows':/Android/.test(ua)?'Android':/iPhone|iPad/.test(ua)?'iOS':/Mac OS/.test(ua)?'macOS':/Linux/.test(ua)?'Linux':'?';
const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'?',r=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Rome'})),l=new Date(new Date().toLocaleString('en-US')),dh=Math.round((l-r)/36e5);
L.push([IT?'browser':'browser',br[0]+' '+br[1]]);L.push([IT?'sistema':'system',os]);
L.push([IT?'schermo':'screen',screen.width+'×'+screen.height+' @'+(devicePixelRatio||1)+'x']);
L.push([IT?'finestra':'window',innerWidth+'×'+innerHeight]);
L.push([IT?'lingua':'language',n.language||'?']);
L.push([IT?'fuso':'timezone',tz+(dh===0?(IT?' (come me!)':' (same as me!)'):(IT?` (${dh>0?'+':''}${dh} h da me)`:` (${dh>0?'+':''}${dh} h from me)`))]);
L.push([IT?'cpu':'cpu',(n.hardwareConcurrency||'?')+(IT?' core':' cores')+(n.deviceMemory?' · ≥'+n.deviceMemory+' GB RAM':'')]);
if(n.connection&&n.connection.effectiveType)L.push([IT?'rete':'network',n.connection.effectiveType]);
L.push([IT?'tema':'theme',matchMedia('(prefers-color-scheme: dark)').matches?(IT?'scuro':'dark'):(IT?'chiaro':'light')]);
L.push([IT?'touch':'touch',(n.maxTouchPoints>0)?(IT?'sì':'yes'):'no']);
let ref='';try{ref=document.referrer?new URL(document.referrer).hostname:''}catch(e){}
L.push([IT?'arrivi da':'came from',ref||(IT?'link diretto':'direct link')]);
if(bat)L.push([IT?'batteria':'battery',Math.round(bat.level*100)+'%'+(bat.charging?(IT?' in carica':' charging'):'')]);
L.push(['ip',IT?'non lo so, il sito è statico':"no idea, the site is static"]);
return L}
const pad=s=>s.padEnd(10,' ');
(async()=>{let out='',timer=0;const wrap=(s,c)=>c==='p'?'<span class="p">'+s+'</span>':c==='m'?'<span class="cm">'+s+'</span>':s,render=x=>{t.innerHTML=out+(x||'');t.scrollTop=t.scrollHeight};
const emit=async(x,c)=>{if(c==='c'){out+='<span id="clk">'+esc(rome())+'</span>\n';render();if(!timer)timer=setInterval(()=>{const e=document.getElementById('clk');if(e)e.textContent=rome()},1000);await sleep(rm?0:500);return}
if(rm){out+=wrap(esc(x),c)+'\n';render();return}
for(let i=1;i<=x.length;i++){render(wrap(esc(x.slice(0,i)),c));await sleep(c==='p'?55:c==='m'?22:14)}out+=wrap(esc(x),c)+'\n';render();await sleep(c==='p'?300:380)};
for(const[x,c]of base.slice(0,2))await emit(x,c);
if(!rm)await sleep(500);
await emit('$ whoareyou','p');await emit(IT?'# scansione del visitatore in corso…':'# scanning the visitor…','m');if(!rm)await sleep(500);
for(const[k,v]of info())await emit(pad(k)+v,'');
await emit(IT?'# tranquillo: resta tutto nel tuo browser, non invio nulla.':"# relax: it all stays in your browser, I send nothing.",'m');
if(!rm)await sleep(900);
for(const[x,c]of base.slice(2))await emit(x,c);
t.classList.add('cur')})()}
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});document.querySelectorAll('.rv').forEach(e=>io.observe(e));
document.querySelectorAll('a.it').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--x',x+'px');c.style.setProperty('--y',y+'px');c.style.transform=`perspective(800px) rotateY(${(x/r.width-.5)*6}deg) rotateX(${-(y/r.height-.5)*6}deg)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
const ex=document.getElementById('exp');if(ex){const pv=document.getElementById('prev'),rows=[...ex.querySelectorAll('.row')];
const show=r=>{rows.forEach(x=>x.classList.toggle('on',x===r));pv.innerHTML='<span class="hd">'+r.dataset.k+'/</span>'+r.dataset.d.replace(/&/g,'&amp;').replace(/</g,'&lt;')+(r.dataset.t?'<span class="tg">'+r.dataset.t+'</span>':'')};
rows.forEach(r=>{r.addEventListener('mouseenter',()=>show(r));r.addEventListener('focus',()=>show(r))});show(rows[0]);const rw=ex.querySelector('.rows');rw.addEventListener('keydown',e=>{if(e.key!=='ArrowDown'&&e.key!=='ArrowUp')return;e.preventDefault();const i=rows.findIndex(x=>x.classList.contains('on')),n=rows[Math.max(0,Math.min(rows.length-1,i+(e.key==='ArrowDown'?1:-1)))];show(n);n.scrollIntoView({block:'nearest'})})}
})();
