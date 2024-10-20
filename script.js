// sidebar toggle
let sideNavbarToggle = document.querySelector(".navbar-menu-toggle");
let sidebar = document.querySelector(".side-navbar");
let close = document.querySelector('.close');
sideNavbarToggle.addEventListener('click', function(){
    sidebar.style.display === 'block' ? sidebar.style.display = 'none' : sidebar.style.display = 'block';
});
close.addEventListener('click', function(){
    sidebar.style.display = 'none';
});