let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
menu.classList.toggle('bx-x');
navmenu.classList.toggle('open')

};

const sr = ScrollReveal({
 distance:'40px',
duration:2400,
reset:true
});

sr.reveal('.hero-text span',{delay:400});
sr.reveal('.hero-img',{delay:500, orgin:'top'});
sr.reveal('.hero-text h5',{delay:600, orgin:'bottom'});
sr.reveal('.hero-text h1',{delay:700, orgin:'bottom'});
sr.reveal('.hero-text p',{delay:800, orgin:'top'});
sr.reveal('.hero-btn',{delay:900, orgin:'bottom'});
sr.reveal('.images-box',{delay:1000, orgin:'top'});
sr.reveal('.social-icons',{delay:1100, orgin:'bottom'});
sr.reveal('.scroll-btn',{delay:1150, orgin:'top'});



