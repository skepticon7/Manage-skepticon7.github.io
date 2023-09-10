const navItems = document.getElementById('nav-menu');
const toggle = document.getElementById('btn-toggle');
const closeBtn = document.getElementById('btn-close'); 

toggle.addEventListener('click', () => {

        navItems.classList.toggle('shown');
        closeBtn.classList.toggle("shown")
        toggle.classList.toggle("hidden")
    

});


closeBtn.addEventListener('click', () => {

        navItems.classList.remove('shown');
        closeBtn.classList.remove("shown")
        toggle.classList.toggle("hidden")

})