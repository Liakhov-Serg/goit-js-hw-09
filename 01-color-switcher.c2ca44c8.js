const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let n=null;function r(){o.style.backgroundColor=getRandomHexColor()}e.addEventListener("click",(function(){n=setInterval(r,1e3),e.toggleAttribute("disabled")})),t.addEventListener("click",(function(){clearInterval(n),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.c2ca44c8.js.map