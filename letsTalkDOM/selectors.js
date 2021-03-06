// ? What is DOM?
// * DOM -> Document Object Model
// * It shows how an html page is created along with different elements
// * that make up the page we see along with their hierarchy.
// * HTML DOM provides a way to javascript to interact with elements

// * document.getElementsByClassName()
const basicDivs = document.getElementsByClassName("basic-div"); // always return an array
console.log("Basic divs\n", basicDivs);

// const uniqueDivs = document.getElementsByClassName("unique-div");
// console.log("Unique divs \n", uniqueDivs);

// * document.getElementById()
const divWithDiffId1 = document.getElementById("diffId1"); // return first matching element only
console.log("Div with diffId1\n", divWithDiffId1);

// * document.getElementsByTagName()
const allH4s = document.getElementsByTagName("h4"); // always returns an array
console.log("All h4 elements\n", allH4s);

// ? What are CSS selectors?
// * CSS selectors are identifiers for different elements in DOM

// * document.querySelector()
const pTag = document.querySelector("p.text-black"); // returns first matching element
console.log(pTag);

// * document.querySelectorAll()
const pTags = document.querySelectorAll("p.text-black"); // returns all the matching elements
console.log(pTags);

// * Quick Aside on CSS selectors
