const login = document.querySelector('#loginbtn');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');

login.addEventListener('click', () => {
    modal.classList.add('active');
});

close.addEventListener('click', () => {
    modal.classList.remove('active');
});
