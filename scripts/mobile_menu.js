/* ================= MOBILE MENU & SCROLL TOP ================= */

// Элементы
const navMenu = document.querySelector('.nav-menu'); // Целимся в список, как в CSS
const burger = document.getElementById('burger');
const scrollTopBtn = document.getElementById('scrollTop');
const overlay = document.getElementById('overlay');

// Функция переключения
function toggleMenu() {
    // Используем класс mobile-visible, который уже есть в твоем CSS
    const isActive = navMenu.classList.toggle('mobile-visible');
    overlay.classList.toggle('active');
    
    // Блокируем скролл основной страницы при открытом меню
    document.body.style.overflow = isActive ? 'hidden' : '';

    if (burger) {
        // Меняем состояние бургера (крестик в CSS)
        burger.setAttribute('aria-expanded', String(isActive));
    }
}

// Клик по бургеру
if (burger) {
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
}

// Закрытие по клику на overlay или ссылки
[overlay, navMenu].forEach(el => {
    el.addEventListener('click', (e) => {
        if (navMenu.classList.contains('mobile-visible')) {
            // Если кликнули по ссылке или по фону — закрываем
            if (e.target.tagName === 'A' || e.target === overlay) {
                toggleMenu();
            }
        }
    });
});

// Поддержка клавиши Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('mobile-visible')) {
        toggleMenu();
    }
});

// Кнопка Наверх: Появление
window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
        // Если прокрутили больше 300px — показываем кнопку
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// Кнопка Наверх: Скролл
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

burgerBtn.addEventListener('click', () => {
    // Ваша текущая логика
    const expanded = burgerBtn.getAttribute('aria-expanded') === 'true';
    burgerBtn.setAttribute('aria-expanded', !expanded);
    
    navMenu.classList.toggle('mobile-visible');
    
    // Новая логика для затемнения
    overlay.classList.toggle('active');
});

// Закрытие меню при клике на само затемнение
overlay.addEventListener('click', () => {
    burgerBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('mobile-visible');
    overlay.classList.remove('active');
});