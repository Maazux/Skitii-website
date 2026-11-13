/* Skitii | hero-trace.js */
(function(){
  // HRV trace: beats gradually space out (illustrative only)
  var pts=[],x=0,gap=34;
  while(x<600){
    [[0,70],[6,70],[9,62],[12,70],[16,70],[18,76],[21,16],[25,100],[28,70],[36,70],[42,58],[48,70]].forEach(function(p){pts.push((x+p[0])+" "+p[1])});
    x+=gap;gap+=2.4;
  }
  var path=document.getElementById("tracePath"),svg=document.getElementById("trace");
  path.setAttribute("d","M"+pts.join(" L"));
  var len=Math.ceil(path.getTotalLength());
  svg.style.setProperty("--len",len);
  requestAnimationFrame(function(){svg.classList.add("go")});
})();
