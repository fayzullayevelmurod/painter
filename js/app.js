
const mediaBurger = document.querySelector('.media_burger'); 
const mediaMenu = document.querySelector('.mediaMenu'); 
const body = document.querySelector('body');

mediaBurger.addEventListener('click', function() {
    mediaMenu.classList.toggle('active');
    body.classList.toggle('hidden');
});
    