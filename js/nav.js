/* Skitii | nav.js */
(function(){
  // Mobile nav
  var btn=document.querySelector(".menu-btn"),nav=document.getElementById("nav");
  var mq=window.matchMedia("(min-width:721px)");
  function sync(){ if(mq.matches){nav.hidden=false;} else {nav.hidden=btn.getAttribute("aria-expanded")!=="true";} }
  btn.addEventListener("click",function(){
    var open=btn.getAttribute("aria-expanded")==="true";
    btn.setAttribute("aria-expanded",String(!open));
    btn.setAttribute("aria-label",open?"Open menu":"Close menu");
    sync();
  });
  nav.addEventListener("click",function(e){if(e.target.tagName==="A"&&!mq.matches){btn.setAttribute("aria-expanded","false");sync();}});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&btn.getAttribute("aria-expanded")==="true"){btn.click();btn.focus();}});
  (mq.addEventListener?mq.addEventListener("change",sync):mq.addListener(sync));sync();
})();
