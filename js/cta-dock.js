/* Skitii | cta-dock.js */
(function(){
  // Mobile dock: hide while a primary CTA or the form is on screen
  var dock=document.getElementById("dock"),seen=[];
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){var i=seen.indexOf(e.target);if(e.isIntersecting&&i<0)seen.push(e.target);if(!e.isIntersecting&&i>=0)seen.splice(i,1)});
      dock.classList.toggle("off",seen.length>0);
    });
    ["hero-cta","contact","enquiry"].forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)});
  }
})();
