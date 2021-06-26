let toggleBtn = document.getElementById('toggleBtn');
let navbarLinks = document.getElementById('links');

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});