let head = document.querySelector('header');
let menu = document.querySelector('.menu');
let openPhotoIndex = 0;
document.addEventListener('scroll', () => {
    if (window.pageYOffset >= head.clientHeight) {
        menu.style.cssText = `
        position: fixed;
        z-index: 666;
        top: 0;
        `
    } else if (window.pageYOffset <= head.clientHeight) {
        menu.style.cssText = `
        position: relative;
        z-index: 666;
        top: 0;
        `
    }
}) 
let linksContainer = document.querySelectorAll('.portfolio-project-link');
document.addEventListener('click', event => {
    if (event.target === linksContainer[0]) {
        window.open('http://fixteam.by');
    } else if (event.target === linksContainer[1]) {
        window.open('http://stivmebel.by');
    } else if (event.target === linksContainer[2]) {
        window.open('https://skladok.by');
    } else if (event.target === linksContainer[3]) {
        window.open('https://olmeko-mebel.by');
    } else if (event.target === linksContainer[4]) {
        window.open('https://mitskevich-paul.github.io/fixteam/');
    } else if (event.target === linksContainer[5]) {
        window.open('https://mitskevich-paul.github.io/');
    } 

    if (event.target.classList.contains('about-me_right-side') && openPhotoIndex === 0) {
        event.target.style.cssText = `
            z-index: 666;
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: center / cover no-repeat url("./sources/me.jpg");
            background-color: #fff;
        `
        openPhotoIndex = 1;
    } else if (event.target.classList.contains('about-me_right-side') && openPhotoIndex === 1) {
        event.target.style.cssText = '';
        openPhotoIndex = 0;
    }
    if (event.target.classList.contains('level-of-english') && openPhotoIndex === 0) {
        event.target.style.cssText = `
            margin: 0;
            z-index: 666;
            position: fixed;
            height: 100vh;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #fff;
        `
        openPhotoIndex = 1;
    } else if (event.target.classList.contains('level-of-english') && openPhotoIndex === 1) {
        event.target.style.cssText = '';
        openPhotoIndex = 0;
    }
})
