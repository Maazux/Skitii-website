/* Skitii | step-tabs.js */
(function(){
  // Tabs (arrow-key accessible)
  var tabs=[].slice.call(document.querySelectorAll("[role=tab]"));
  function select(i,focus){
    tabs.forEach(function(t,j){
      var on=i===j;
      t.setAttribute("aria-selected",on);t.tabIndex=on?0:-1;
      document.getElementById(t.getAttribute("aria-controls")).hidden=!on;
    });
    if(focus)tabs[i].focus();
  }
  tabs.forEach(function(t,i){
    t.addEventListener("click",function(){select(i)});
    t.addEventListener("keydown",function(e){
      var k=e.key,n=tabs.length;
      if(k==="ArrowRight"||k==="ArrowDown"){e.preventDefault();select((i+1)%n,true)}
      else if(k==="ArrowLeft"||k==="ArrowUp"){e.preventDefault();select((i-1+n)%n,true)}
      else if(k==="Home"){e.preventDefault();select(0,true)}
      else if(k==="End"){e.preventDefault();select(n-1,true)}
    });
  });
})();
