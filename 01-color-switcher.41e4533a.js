!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=null;function r(){n.style.backgroundColor=getRandomHexColor()}e.addEventListener("click",(function(){o=setInterval(r,1e3),e.toggleAttribute("disabled")})),t.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.41e4533a.js.map