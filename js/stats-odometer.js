/* Skitii | stats-odometer.js: digit wheels roll to the final value when the stats scroll into view */
(function(){
  var els=[].slice.call(document.querySelectorAll(".stat[data-target]"));
  if(!els.length)return;
  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function build(el){
    var wrap=document.createElement("span");wrap.className="odo";wrap.setAttribute("aria-hidden","true");
    el.getAttribute("data-target").split("").forEach(function(ch){
      var d=document.createElement("span");d.className="d";
      var s=document.createElement("span");s.className="strip";s.setAttribute("data-digit",ch);
      for(var i=0;i<20;i++){var c=document.createElement("span");c.textContent=i%10;s.appendChild(c)}
      d.appendChild(s);wrap.appendChild(d);
    });
    var u=document.createElement("span");u.className="suf";u.textContent=el.getAttribute("data-suffix")||"";wrap.appendChild(u);
    el.textContent="";el.appendChild(wrap);
  }
  function roll(el){
    [].slice.call(el.querySelectorAll(".strip")).forEach(function(s,i){
      var n=10+parseInt(s.getAttribute("data-digit"),10);
      if(reduce)s.style.transition="none";else s.style.transitionDelay=(i*90)+"ms";
      s.style.transform="translateY(-"+n+"em)";
    });
  }
  els.forEach(build);
  if(reduce||!("IntersectionObserver" in window)){els.forEach(roll);return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){roll(e.target);io.unobserve(e.target)}})},{threshold:.5});
  els.forEach(function(el){io.observe(el)});
})();
