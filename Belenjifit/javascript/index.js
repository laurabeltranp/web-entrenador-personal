window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Cambia 50 según la cantidad de scroll que deseas
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});