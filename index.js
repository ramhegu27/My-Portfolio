const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__links');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav_open')
    })
})