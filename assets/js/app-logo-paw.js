const heroLogo = document.querySelector('.main-hero-logo');
const pawHeroLogo = document.querySelector('.hero-filter .paw');


heroLogo.addEventListener('mouseenter', () => {
    pawHeroLogo.classList.toggle('paw-animation-active');
});

heroLogo.addEventListener('mouseleave', () => {
    pawHeroLogo.classList.toggle('paw-animation-active');
});
