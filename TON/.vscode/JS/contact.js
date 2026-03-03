// Init AOS Animation
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

/* --- MOBILE MENU LOGIC (ĐÃ FIX LỖI SCROLL) --- */
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
        // Mở menu
        mobileMenu.classList.remove('translate-x-full');
        menuIcon.textContent = 'close';
        menuIcon.classList.add('rotate-90');
        body.style.overflow = 'hidden'; // Khóa scroll khi menu mở

        // Hiệu ứng xuất hiện từng dòng (Stagger Animation)
        mobileLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('opacity-100', 'translate-y-0');
                link.classList.remove('opacity-0', 'translate-y-4');
            }, 100 + (index * 100));
        });

        // Hiệu ứng nút CTA
        setTimeout(() => {
            ctaBtn.classList.remove('opacity-0', 'translate-y-4');
        }, 600);

    } else {
        // Đóng menu
        mobileMenu.classList.add('translate-x-full');
        menuIcon.textContent = 'menu';
        menuIcon.classList.remove('rotate-90');

        // --- FIX BUG SCROLL ---
        body.style.overflow = ''; // Xóa style inline để trở về mặc định (CSS)
        // ----------------------

        // Reset trạng thái animation
        mobileLinks.forEach(link => {
            link.classList.remove('opacity-100', 'translate-y-0');
            link.classList.add('opacity-0', 'translate-y-4');
        });
        ctaBtn.classList.add('opacity-0', 'translate-y-4');
    }
}

mobileBtn.addEventListener('click', toggleMenu);

// Đóng menu khi click vào link bên trong
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});