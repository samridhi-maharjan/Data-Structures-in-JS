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

    //ordering:fuction returns an array and we can destruct it
    order: function(starterIndex, mainInbox){
        return[this.starterMenu[starterIndex],this.mainMenu[mainInbox]];
    }
}

//restaurant.order(2,0);      //result:Garlic Bread,pizza
//console.log(restaurant.order(2,0 ));

const[starter,mainCourse]=restaurant.order(2,0);        //same as maathi ko but in this way we can create two variable from one function call
console.log(starter,mainCourse);

//for nested array
 const nested=[1,2,[3,4]];
 const [i, ,j]=nested;
 console.log(i,j);              //1,[3,4]
 //to access individual:
 const[k,,[l,m]]=nested;
 console.log(k,l,m);

 //setting default values
// const [p,q,r]=[4,5];
// console.log(p,q,r);             //result:4 5 undefined, as r is  not defined
const [p=1,q=2,r=3]=[6,7];
console.log(p,q,r);         //p=6,q=7,r=3; if you set a variable default value, the variable to its right must also have default value

// const [first, second]=restaurant.categories;
// console.log(first,second);              //gives first two data of categories from array named restaurant

//we can skip an element by simply leaving a hole
// const [first, ,second]=restaurant.categories;
// console.log(first,second);    //gives italian and vegeterian


//switching variables
// let [main,,secondary]=restaurant.categories;
// console.log(main,secondary);
// const temp=main;
// main=secondary;
// secondary=temp;
// console.log(main,secondary);


