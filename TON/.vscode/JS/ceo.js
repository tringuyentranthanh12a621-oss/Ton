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
        menuIcon.classList.add('rotate-90'); // Xoay icon đóng
        body.style.overflow = 'hidden';

        // Chạy hiệu ứng xuất hiện từng dòng (Stagger Animation)
        mobileLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('opacity-100', 'translate-y-0');
                link.classList.remove('opacity-0', 'translate-y-4');
            }, 100 + (index * 100)); // Mỗi dòng trễ nhau 100ms
        });

        // Hiển thị nút CTA cuối cùng
        setTimeout(() => {
            ctaBtn.classList.remove('opacity-0', 'translate-y-4');
        }, 600);

    } else {
        // Close menu
        mobileMenu.classList.add('translate-x-full');
        menuIcon.textContent = 'menu';
        menuIcon.classList.remove('rotate-90');
        body.style.overflow = 'auto';

        // Reset lại trạng thái ẩn cho animation lần sau
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