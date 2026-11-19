(async (SHA, START) => {
const BASE = `https://raw.githubusercontent.com/TechilaAU/justwardobes/${SHA}/preview/`;
document.open();document.write(`<!doctype html><html><head><title>Just Wardrobes preview</title><style>
body{margin:0;background:#5d6168;font:14px system-ui;height:100vh;display:flex;flex-direction:column}
#bar{display:flex;gap:8px;align-items:center;padding:8px 12px;background:#231f20;color:#fff}
#bar b{margin-right:8px}#bar button{font:inherit;background:#3d3839;color:#fff;border:0;border-radius:3px;padding:6px 10px;cursor:pointer}
#bar button.on{background:#00aeef;color:#231f20}#page{margin-left:auto;opacity:.75}
#wrap{flex:1;display:flex;justify-content:center;overflow:hidden}iframe{border:0;background:#fff;width:100%;height:100%;transition:width .2s}
</style></head><body><div id="bar"><b>Just Wardrobes: new site preview</b><button data-w="100%" class="on">Desktop</button><button data-w="390px">Mobile</button><span id="page"></span></div><div id="wrap"><iframe id="f"></iframe></div></body></html>`);document.close();
const f=document.getElementById('f'), label=document.getElementById('page');
document.querySelectorAll('#bar button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#bar button').forEach(x=>x.classList.remove('on'));b.classList.add('on');f.style.width=b.dataset.w;});
const fileFor=p=>{p=p.replace(/^\/|\/$/g,'');return p===''?'home':p.replace(/\//g,'_');};
const cache={};
async function go(href){const u=new URL(href,'https://x.test');const name=fileFor(u.pathname);let h=cache[name];
 if(!h){const r=await fetch(BASE+name+'.html');h=cache[name]=r.ok?await r.text():await (await fetch(BASE+'404.html')).text();}
 label.textContent=u.pathname+u.search;
 f.srcdoc=h;f.onload=()=>{const d=f.contentDocument,w=f.contentWindow;
  if(u.search&&name==='our-work'){const t=new URLSearchParams(u.search).get('type');const b=d.querySelector(`.filters button[data-f="${t}"]`);b&&b.click();}
  if(u.hash){const el=d.getElementById(u.hash.slice(1));el&&el.scrollIntoView();}else w.scrollTo(0,0);
  d.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const h=a.getAttribute('href');
   if(h&&h.startsWith('#')){e.preventDefault();const el=d.getElementById(h.slice(1));el&&el.scrollIntoView({behavior:'smooth'});return;}
   if(h&&h.startsWith('/')){e.preventDefault();go(h);return;}
   if(h&&/^https?:/.test(h)){e.preventDefault();window.open(h,'_blank');}},true);
  d.addEventListener('submit',e=>{if(e.target.id==='pick')return;e.preventDefault();setTimeout(()=>{if(e.defaultPrevented&&e.target.querySelector('.qf__err:not([hidden])'))return;const desc=d.getElementById('order-desc');const p=d.createElement('p');p.style.cssText='background:#231f20;color:#fff;padding:12px;border-radius:3px;white-space:pre-wrap';p.textContent='Preview only. On the live site this goes to Salesforce as a Lead:\n\n'+(desc?desc.value:'Quote request');e.target.appendChild(p);},50);},true);
 };}
window.go=go;await go(START||'/');
})
