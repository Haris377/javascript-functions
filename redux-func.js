import { comose, pipe } from 'lodash/fp';
import { Map } from 'immutable';
//import { produce } from 'immer';
import store from './store';

// //Higher Order function, passing function as parameter
// function sayHello(){
//     return function(){
//         return "Hello World";
//     }
// }
// let fn = sayHello();
// let message = fn();

// fn();
// sayHello();     //Both will give same result

// function greet(fn){
//     console.log(fn());
// }

// let number = [1,2,3,4];
// number.map(
//     function(){
//         (number) => { return number * 2}
//     })
// //number.map(number => number * 2)

// setTimeout(() => console.log("Hello"), 1000);

// //functional Composition

// let input = "  Javascript  ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// //const wrapInDiv = str => "<div>" + str + "</div>";
// const wrapInDiv = str => `<div>${str}</div>`;

// const toLowerCase = str => str.toLowerCase();
// const result = wrapInDiv(toLowerCase(trim(input))); // this is called what functional programming

// //composition and piping

// const transform = compose(wrapInDiv, toLowerCase, trim);
// const transform = pipe(trim, toLowerCase, wrapInDiv);
// //pipe use for left to right order checking
// transform(input);

// //currying

// const trim = str => str.trim();
// //const wrap = (type, str) => `<${type}>${str}</${type}>`;
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();
// const transform = pipe(trim, toLowerCase, wrap("div"));

// console.log(transform(input));

//pure functions 
//can not change or mutate there arguments

// function myFunction(number){
//     return number * Math.random();  //not pure func result will change every time 
// }

// function myFunction(number){
//     return number * 2;  //pure func if we input 1 always return 2
// }

//pure functions should be
// *No random values
// *No current date/time
// *No global state (DOM, files, db, etc)
// *No mutation of parameters

// Immutability
//fundamental principal of redux is can not be mutate object


//Updating Objects

// const person = { 
//     name: "John",
//     address : {
//         country : "USA",
//         city: "San Francisco"
//     }
// };
//const updated = Object.assign({}, person, { name: "Bob", age: 30})
//const updated = {...person, name: "Bob"};
//updated.address.city = "New York";

// const updated = {
//     ...person,
//     address: {
//         ...person.address,
//         city: "New York"
//     },
//     name: "Bob"
// };
// console.log(person);

//Updating Array

// const numbers = [1, 2, 3];
// //Adding
// const index = numbers.indexOf(2);
// const added = [
//     ...numbers.slice(0, index),
//     4,
//     ...numbers.slice(index)
// ];
// console.log(added)
// console.log(numbers);

// // Removing

// const removed = numbers.filter(n => n !== 2);
// console.log(removed)

// //Updating
// const updated = numbers.map(n => (n === 2 ? 20 : n))
// console.log(updated);

//Enforcing Immutability
//Libraries *Immutable *Immer  *Mori

// let book = Map({ title: "Harry Potter" })
// //All Map objects are immutable
// function publish(book){
//     return book.set("isPublished" , true)
// }
// book = publish(book);

// console.log(book);  
// console.log(book.toJS());
//toJS method return plain js object

//Immer
// let book = Map({ title: "Harry Potter" })
// function publish(book){
//     produce(book, draftBook => {
//         draftBook.isPublished = true;
//     });
// }

// updated = publish(book);

// console.log(book);
// console.log(updated);



// const unsubscribed = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// });

// state = reducer(state, action);
// notify the subscribers

import { bugAdded, bugResolved } from "./actions";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());