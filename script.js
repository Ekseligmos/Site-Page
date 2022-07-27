// modal-login 
const openButton = document.querySelector('#login_button');
const closeButton = document.querySelector('#close_button');
const modalLogin = document.querySelector('#modal-login');


openButton.addEventListener('click', function() {
    modalLogin.style.display = 'block'
});

closeButton.addEventListener('click', function() {
    modalLogin.style.display = ''
});

window.addEventListener('click', function(click) {
    if (click.target == modalLogin) modalLogin.style.display = ''
})