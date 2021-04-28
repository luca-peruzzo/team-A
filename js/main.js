window.onresize = () => {
    checkOnResize();
}

window.onload = () => {
    checkOnResize();
}
const links = document.querySelectorAll("a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    let offsetTop = 0;
    if (!!document.querySelector(href)) {
        offsetTop = document.querySelector(href).offsetTop;
    }

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

menu = document.querySelector('.burger-menu');
nav = document.querySelector('nav');
checkOnResize = () => {
    if (window.outerWidth < 1025 && document.querySelector('.burger-menu').classList.contains('hidden')) {
        this.menu.classList.remove('hidden');
        this.nav.classList.add('hidden');
    } else if (window.outerWidth >= 1025 && !document.querySelector('.burger-menu').classList.contains('hidden')) {
        this.menu.classList.add('hidden');
        this.nav.classList.remove('hidden');
    }
}
toggleMenu = () => {
    this.nav.classList.toggle('hidden');
}
