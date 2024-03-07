/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che: 
-Per i multipli di 3 stampi “Fizz” al posto del numero
-Per i multipli di 5 stampi “Buzz” al posto del numero
-Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero
*/

const numbContainer = document.querySelector('#numbers-container');

//CSS in JS per il titolo
const element = document.getElementById("title");
element.style.color = "white";
element.style.fontSize = "80px";
element.style.padding = "20px";
element.style.display = "flex"
element.style.justifyContent = "center";

//CSS in JS per il body
const body = document.getElementById("body");
body.style.backgroundColor = "#083b4c";


//INPUT DATI
    //Mi servono tutti i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {
    console.log(i);

    //Creo le variabili
    let fizzbuzz;
    let fizzbuzzText = "FizzBuzz";
    let fizz;
    let fizzText = "Fizz";
    let buzz;
    let buzzText = "Buzz";
    let newBox = `<div class="box">${i}</div>`;

//ELABORAZIONE DATI
    //Se i è divisibile per 3 e 5
    if(i % 3 === 0 && i % 5 === 0){
        fizzbuzz = 'fizz-buzz';
        newBox = `<div class="box ${fizzbuzz}">${fizzbuzzText}</div>`;
    //Se i è divisibile per 3
    } else if(i % 3 === 0){
        fizz = 'fizz';
        newBox = `<div class="box ${fizz}">${fizzText}</div>`;
    //Se i è divisibile per 5
    } else if(i % 5 === 0){
        buzz = 'buzz';
        newBox = `<div class="box ${buzz}">${buzzText}</div>`;
    }

//OUTPUT DATI
    //Appendo i numeri al contenitore
    numbContainer.innerHTML += newBox;
}