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
