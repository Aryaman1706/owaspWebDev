// * Element.innerHtml

// * Element.attribute

// * Element.style.property

// * Element.removeChild()

// * document.createElement()

// * Element.appendChild()

// * Element.replaceChild()

// * Children of Element
// returns NodeList

// ? Why and what are these text node?
// * These are there because we have spaces in our code but parser does not know
// * if thats part of webpage or not.
// * Solution:- simply remove empty spaces

// * Get Nodes

// * Get Elements

// * Another methord
// returns HTMLCollection

// ? What is the difference between HTMLCollection and NodeList?
// * HTMLCollection ignores the comments, textNodes etc in your code. Basically anything
// * that is not painted on DOM. Whereas NodeList returns all the items in your code
// * be it comments or whitespaces.
// ! Neither HTMLCollection nor NodeList is an array. They might look like one but they arent.
// ! To work with them you have to convert them to array using Array.from()

// * Add or Remove class
