const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//DOM Selectors

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let randNumber = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randNumber];
    color.textContent = colors[randNumber];
})
