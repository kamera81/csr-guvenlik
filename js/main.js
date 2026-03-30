// ===== Navbar Toggle (Bootstrap ile çalışır) =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#menu');

    navToggler.addEventListener('click', function(){
        menu.classList.toggle('show');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
