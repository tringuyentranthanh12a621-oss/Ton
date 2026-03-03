// Init AOS
AOS.init({ duration: 800, once: true, offset: 50, easing: 'ease-out-cubic' });

// Navbar Scroll Logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-opacity-95');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-opacity-95');
    }
});

/* --- MOBILE MENU LOGIC --- */
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const ctaBtn = document.querySelector('.mobile-link-delay');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const body = document.body;

    if (isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        menuIcon.textContent = 'close';
        menuIcon.classList.add('rotate-90');
        body.style.overflow = 'hidden';

        mobileLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('opacity-100', 'translate-y-0');
                link.classList.remove('opacity-0', 'translate-y-4');
            }, 100 + (index * 100));
        });

        setTimeout(() => {
            ctaBtn.classList.remove('opacity-0', 'translate-y-4');
        }, 600);

    } else {
        mobileMenu.classList.add('translate-x-full');
        menuIcon.textContent = 'menu';
        menuIcon.classList.remove('rotate-90');
        body.style.overflow = 'auto';

        mobileLinks.forEach(link => {
            link.classList.remove('opacity-100', 'translate-y-0');
            link.classList.add('opacity-0', 'translate-y-4');
        });
        ctaBtn.classList.add('opacity-0', 'translate-y-4');
    }
}

mobileBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => { link.addEventListener('click', toggleMenu); });

/* --- MODAL LOGIC --- */
function openModal(title, desc, imgSrc) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalImg = document.getElementById('modalImg');

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalImg.src = imgSrc;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") closeModal();
});