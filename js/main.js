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

checkOnResize = () => {
    if (window.outerWidth < 1025 && document.querySelector('.burger-menu').classList.contains('hidden')) {
        document.querySelector('.burger-menu').classList.remove('hidden');
        document.querySelector('nav').classList.add('hidden');
    } else if (window.outerWidth >= 1025 && !document.querySelector('.burger-menu').classList.contains('hidden')) {
        document.querySelector('.burger-menu').classList.add('hidden');
        document.querySelector('nav.hidden').classList.remove('hidden');
    }
}
toggleMenu = () => {
}
