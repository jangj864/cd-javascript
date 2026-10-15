

// console.log('Hello World!');

// alert('Hello World!');

// console.log(document);

// document.body.style.backgroundColor = 'red';





// const temperature = 50;

// if (temperature < 60) {
//   document.body.style.backgroundColor = 'blue';
//   console.log ('It is cold');
// }  else {
//    document.body.style.backgroundColor = 'red';
// console.log ('It is warm');
// }






// const temperature = 50;

// if (temperature >= 85) {
//    document.body.style.backgroundColor = 'red';
//    console.log('It is hot');
// } else if (temperature <= 32) {
//    document.body.style.backgroundColor = 'blue';
//    console.log('It is freezing');
// } else {
//    document.body.style.backgroundColor = 'orange';
//    console.log('It is mild');
// }





//const temperature = 85;;
//const isSunny = true;

//if (temperature >= 85 && isSunny) {
//    document.body.style.backgroundColor = 'yellow';
//} else {
//    document.body.style.backgroundColor = 'red';
//    console.log('Ugh, it is too hot');
// }





//const isSunny = true;
//const isSnowy = true;
//const paragraph = document.getElementById('myParagraph');

//if (isSunny || isSnowy) {
//    paragraph.textContent = 'Love the weather';
//    console.log('The weather is great!');
//} else {


//const isLoggedIn = false;
//const paragraph = document.getElementById('myParagraph');

//if (!isLoggedIn) {
//    paragraph.textContent = 'You are not logged in';
//    console.log('Please log in to content');
//}





//Loops
//let count = 1;

//while (count < 10) {
//    console.log(count);
//    count =  count + 1;
//}





//for(let i = 1; i <= 10; i = i + 2) {
//    console.log(i);
//}



//for(let i = 10; i > 0; i--) {
//    console.log(i);
//}




//let username = ' ';

//while (username === '') {
//    username = window.prompt('Enter your name');
//}

//console.log('Hello ' + username);






// function greet () {
//      console.log('Hello' + username);
// }

// greetUser(Serverin);






// function addPrices(a,b) { 
//    return a + b;
// }

//const result = addPrices(6,7);
//console.log('Total: $' + result);





//const fruits = ['apple', 'banana', 'orange'];
//console.log(fruits[2]);





//const basket = ['apples', 'oranges', 'bananas'];

//function addFruit(fruit) {
//    basket.push(fruit);
//}

//addFruit('cherry');
//addFruit('kiwi');
//console.log(basket);





// const user = { name: 'Jinhyeok', age: '25', isStudent: true }

// console.log(user.name);
// console.log(user.age);
// console.log(user.isStudent);






// const pencilCase = [ 'red', 'blue', 'green', 'yellow'];

// for (let i = 0; i < pencilCase.length; i++) {
//     pickColor(pencilCase[i]);
// }

// function pickColor(color) {
//     console.log('I pick ' + color);
// }






// const paragraph = document.getElementById('myParagraph');

// function changeParagraph() {
//     paragraph.textContent = 'This is our updated paragraph';
// }

// changeParagraph();

// // now we change it's Css

// function changeTextColorAndSize() {
//     paragraph.style.color = 'red';
//     paragraph.style.fontSize = '50px';
//     paragraph.style.lineHeight = '0.8';
// }

// changeTextColorAndSize();

// //now we change the background color

// const body = document.body;

// function changeBackgroundColor() {
//     body.style.backgroundColor = 'pink';
// }

// changeBackgroundColor();





// const background = document.body;

// function changeBackgroundColor() {
//     background.style.backgroundColor = 'blue';
// }

// document.addEventListener('click', changeBackgroundColor);








const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

for (let i = 0; i < colors.length; i = i + 1) {
    setTimeout (function (){
        document.body.style.backgroundColor = colors[i];
    }, i * 1000);
}