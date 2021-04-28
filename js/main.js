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
        top: offsetTop - 120,
        behavior: "smooth"
    });
}

checkOnResize = () => {
    if (window.outerWidth < 1025) {
        document.querySelector('.burger-menu').classList.remove('hidden');
        document.querySelector('nav').classList.add('hidden');
    } else if (window.outerWidth >= 1025) {
        document.querySelector('.burger-menu').classList.add('hidden');
        document.querySelector('nav').classList.remove('hidden');
    }
}
toggleMenu = () => {
    document.querySelector('nav').classList.toggle('hidden');
}
currentLocationInPage = () => {
    let currentPosition = window.scrollY;
    const home = document.querySelector('#main');
    const pages = document.querySelector('#pages');
    const portfolio = document.querySelector('#portfolio');
    const blog = document.querySelector('#blog');

    const homeTop = 0
    const homeBottom = home.getBoundingClientRect().bottom + window.scrollY;
    const pagesTop = pages.getBoundingClientRect().top + window.scrollY;
    const pagesBottom = pages.getBoundingClientRect().bottom + window.scrollY;
    const portfolioTop = portfolio.getBoundingClientRect().top + window.scrollY;
    const portfolioBottom = portfolio.getBoundingClientRect().bottom + window.scrollY;
    const blogTop = blog.getBoundingClientRect().top + window.scrollY;
    const blogBottom = blog.getBoundingClientRect().bottom + window.scrollY;

    const homeLink = document.querySelector('#homeLink');
    const pagesLink = document.querySelector('#pagesLink');
    const portfolioLink = document.querySelector('#portfolioLink');
    const blogLink = document.querySelector('#blogLink');

    if (currentPosition >= homeTop) {
        homeLink.classList.add('current-menu-item');
        pagesLink.classList.remove('current-menu-item');
        portfolioLink.classList.remove('current-menu-item');
        blogLink.classList.remove('current-menu-item');
    }
    if (currentPosition >= pagesTop - 120) {
        homeLink.classList.remove('current-menu-item');
        pagesLink.classList.add('current-menu-item');
        portfolioLink.classList.remove('current-menu-item');
        blogLink.classList.remove('current-menu-item');
    }
    if (currentPosition >= portfolioTop - 120) {
        homeLink.classList.remove('current-menu-item');
        pagesLink.classList.remove('current-menu-item');
        portfolioLink.classList.add('current-menu-item');
        blogLink.classList.remove('current-menu-item');
    }
    if (currentPosition >= blogTop - 120) {
        homeLink.classList.remove('current-menu-item');
        pagesLink.classList.remove('current-menu-item');
        portfolioLink.classList.remove('current-menu-item');
        blogLink.classList.add('current-menu-item');
    }

}
window.onresize = () => {
    checkOnResize();
}

window.onload = () => {
    checkOnResize();
}
window.onscroll = () => {
    currentLocationInPage();
}
