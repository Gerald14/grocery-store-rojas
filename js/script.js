let menu = document.querySelector("#menu");
let menu_icon = document.querySelector("#menu-icon");

 menu_icon.addEventListener("click",function(){
     menu.classList.toggle("navbar__menu--toggle")
 })

 // Fetch all the forms we want to apply custom Bootstrap validation styles to
 var forms = document.querySelectorAll('.needs-validation')

 // Loop over them and prevent submission
 Array.prototype.slice.call(forms)
   .forEach(function (form) {
     form.addEventListener('submit', function (event) {
       if (!form.checkValidity()) {
         event.preventDefault()
         event.stopPropagation()
       }

       form.classList.add('was-validated')
     }, false)
   })

AOS.init({
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  once: true,
  disabledMutationObserver : true ,
  mirror: true,
});