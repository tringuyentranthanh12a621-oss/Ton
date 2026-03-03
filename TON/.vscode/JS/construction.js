// Init AOS
AOS.init({ duration: 800, once: true, offset: 50, easing: 'ease-out-cubic' });

// Navbar Scroll Effect
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
        // Open menu
        mobileMenu.classList.remove('translate-x-full');
        menuIcon.textContent = 'close';
        menuIcon.classList.add('rotate-90');
        body.style.overflow = 'hidden';

        // Stagger Animation
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
        // Close menu
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

// Đóng menu khi click vào link
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});


/* --- FILTER LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    filterSelection('all', document.getElementById('btn-all'));
});

function filterSelection(category, btnElement) {
    const items = document.getElementsByClassName("project-item");
    const btns = document.getElementsByClassName("filter-btn");

    if (btnElement) {
        for (let b of btns) {
            b.classList.remove("text-white", "border-b-2", "border-primary", "active");
            b.classList.add("text-slate-500");
        }
        btnElement.classList.remove("text-slate-500");
        btnElement.classList.add("text-white", "border-b-2", "border-primary", "active");
    }

    for (let item of items) {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    }
}

/* --- LIGHTBOX LOGIC --- */
function openLightbox(element) {
    const img = element.querySelector('img');
    const src = img.src;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});