'use strict'

const arr=[1,2,3];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const [x,y,z]=arr;              //de-structuring of array arr; value of array arr is now stored at x,y,z
console.log(x,y,z);                
console.log(arr);               // de-structuring doesn't affect the original array



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}


const [first, second]=restaurant.categories;
console.log(first,second);              //gives first two data of categories from array named restaurant

//we can skip an element by simply leaving a hole
// const [first, ,second]=restaurant.categories;
// console.log(first,second);    //gives italian and vegeterian


//switching variables
let [main,,secondary]=restaurant.categories;
console.log(main,secondary);
const temp=main;
main=secondary;
secondary=temp;
console.log(main,secondary);


