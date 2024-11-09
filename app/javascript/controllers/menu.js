// Обработчик для кнопки-бургера
document.getElementById("burger-icon").addEventListener("click", function() {
    var menu = document.getElementById("nav-menu");
    var burger = document.getElementById("burger-icon");
    // Переключаем класс active на меню и на бургер
    menu.classList.toggle("active");
    burger.classList.toggle("active");
});

// Скрытие меню при клике за пределами меню (если нужно)
document.addEventListener('click', function(event) {
    var menu = document.getElementById("nav-menu");
    var burger = document.getElementById("burger-icon");
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove("active");
        burger.classList.remove("active");
    }
});

// Прокрутка по клику на ссылки навигации с закрытием меню
const navLinks = [
    { selector: '.nav-link-1', target: '.about_me-container', desktopTop: 1400, mobileTop: 1000 },
    { selector: '.nav-link-2', target: null, desktopTop: 1350, mobileTop: 1900 },
    { selector: '.nav-link-3', target: null, desktopTop: 3150, mobileTop: 3400 },
    { selector: '.nav-link-5', target: 'footer', desktopTop: 0, mobileTop: 0 }, // Для якоря
    { selector: '.nav-link-4', target: '.form-container', desktopTop: 0, mobileTop: 0 } // Для якоря
];

navLinks.forEach(link => {
    const navLink = document.querySelector(link.selector);
    navLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Проверяем ширину экрана
        const isMobile = window.innerWidth <= 750; // Условие для мобильных устройств

        if (link.target) {
            // Прокручиваем к якорю с учетом устройства
            document.querySelector(link.target).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Прокручиваем до заданной позиции
            window.scrollTo({
                top: isMobile ? link.mobileTop : link.desktopTop, // Выбор точки прокрутки
                behavior: 'smooth'
            });
        }

        // Закрываем меню и возвращаем иконку бургера в исходное состояние
        var menu = document.getElementById("nav-menu");
        var burger = document.getElementById("burger-icon");
        menu.classList.remove("active");
        burger.classList.remove("active");
    });
});
