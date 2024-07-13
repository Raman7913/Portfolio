const navlinks = document.querySelector('.nav-links')
const togglebutton = document.querySelector('.togglebtn')
togglebutton.addEventListener('click',function(){
    navlinks.classList.toggle('active')
});