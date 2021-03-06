// * Element.innerHtml
const heading = document.querySelector(".heading");
console.log(heading.innerHTML);
heading.innerHTML = "New Listing";

// * Element.attribute
const aTag = document.querySelector("a");
console.log(aTag);
aTag.href = "https://developer.mozilla.org";
aTag.target = "__blank";
// aTag.setAttribute("target", "__blank"); // Another way to add an attribute
aTag.innerHTML = "Redirect me to MDN";

// * Element.style.property
const mainHeading = document.querySelector("h1");
mainHeading.style.textAlign = "left";

// * Element.removeChild()
const list = document.querySelector("ul.list");
const listItems = document.querySelectorAll("li.list-item");
list.removeChild(listItems[1]);
// list.removeChild(mainHeading); // throws an error

// * document.createElement()
const newItem = document.createElement("li");
newItem.className = "list-item";
newItem.innerHTML = "I am new";

// * Element.appendChild()
list.appendChild(newItem);

// * Element.replaceChild()
const newItem2 = document.createElement("li");
newItem2.className = "list-item";
newItem2.innerHTML = "I am newer";
list.replaceChild(newItem2, listItems[0]);

// * Children of Element
console.log(list.childNodes); // returns NodeList
console.log(list.childNodes[0]);

// ? Why and what are these text node?
// * These are there because we have spaces in our code but parser does not know
// * if thats part of webpage or not.
// * Solution:- simply remove empty spaces

console.log(list.firstChild);
console.log(list.lastChild);

// * Another methord
console.log(list.children); // returns HTMLCollection
console.log(list.children[0]);

// ? What is the difference between HTMLCollection and NodeList
