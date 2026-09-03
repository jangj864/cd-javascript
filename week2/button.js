


const button = document.getElementById('myButton');

button.addEventListener('click', changeBackground);

function changeBackground() {

    const body = document.body;

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'black';
    }
}