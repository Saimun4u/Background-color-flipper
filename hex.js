const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

    let randNumber = Math.floor(Math.random() * hex.length);

    for (let i = 0; i <= 5; i++){

        let hexColor = 0;

         hexColor[i] += `${hex[randNumber]}`

         console.log(hexColor)

    }
    
})
