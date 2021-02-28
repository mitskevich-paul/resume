let head = document.querySelector('header');
let menu = document.querySelector('.menu');
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
let portfolioArray = document.querySelectorAll('.portfolio-project');
portfolioArray[0].addEventListener('click', () => {
    window.open('http://fixteam.by');
})
portfolioArray[1].addEventListener('click', () => {
    window.open('http://stivmebel.by');
})
portfolioArray[2].addEventListener('click', () => {
    window.open('https://skladok.by');
})
portfolioArray[3].addEventListener('click', () => {
    window.open('https://mitskevich-paul.github.io/calc/');
})
portfolioArray[4].addEventListener('click', () => {
    window.open('https://mitskevich-paul.github.io/fixteam/');
})
portfolioArray[5].addEventListener('click', () => {
    window.open('https://mitskevich-paul.github.io/');
})
