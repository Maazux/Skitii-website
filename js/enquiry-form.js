/* Skitii | enquiry-form.js */
(function(){
  // Enquiry form (client-side prototype)
  var form=document.getElementById("enquiry-form");
  form.addEventListener("submit",function(e){
    e.preventDefault();var first=null;
    [].slice.call(form.querySelectorAll("[required]")).forEach(function(el){
      var bad=el.type==="checkbox"?!el.checked:!el.checkValidity();
      el.setAttribute("aria-invalid",bad);
      var err=document.getElementById(el.id+"-err");
      if(err)err.textContent=bad?(el.type==="email"?"Enter a valid work email.":el.type==="checkbox"?"Please confirm to continue.":"This field is required."):"";
      if(bad&&!first)first=el;
    });
    if(first){first.focus();return}
    document.getElementById("form-status").textContent="Thank you. This is a design prototype, so nothing was sent.";
    form.reset();
  });
})();
