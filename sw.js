if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>r(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"d32f00e77d525bb751f3adba1ff31c8d"},{url:"index.html",revision:"99def0f5d10c0fe1a1a62a3d6508811d"},{url:"main.css",revision:"308c558581f65833e772d30aa3f5c0e7"},{url:"package-lock.json",revision:"e4ea643ec20681bc3097326b35c9219d"},{url:"package.json",revision:"4f9a8a2f4ac5023a533a0fe09bc9fce5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
