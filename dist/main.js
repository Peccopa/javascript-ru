(()=>{"use strict";window.onload=function(){console.log("Hello, worm!"),e()};const e=()=>{document.querySelector(".strategies__tags").addEventListener("click",(e=>{if(e.target.classList.contains("tag")){const c=e.target;t(),s(c),"All"===c.innerText?r():a(c.innerText)}}))},t=()=>{document.querySelectorAll(".strategies__tags .tag").forEach((e=>{e.classList.remove("tag_selected"),e.classList.add("tag_bordered")}))},s=e=>{e.classList.remove("tag_bordered"),e.classList.add("tag_selected")},r=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.remove("strategy_hidden")}))},a=e=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.add("strategy_hidden"),t.querySelectorAll(".tag").forEach((s=>{s.innerHTML===e&&t.classList.remove("strategy_hidden")}))}))}})();