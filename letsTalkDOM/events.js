// ? What are eventListeners in JS?
// * There are varoius event is JS that we can listen for.
// * Listening for events refer to execute some logic when a particular event occures.
// * Example:- On clicking the next button in a webpage, new data should be loaded and painted
// * on DOM.

// * There are two ways you can observe events in JS:-
// * 1) Adding inline listeners in HTML elements itself.
// * 2) Selecting a HTML Element and adding listener to is explictly.

function clickHandlerHtml(event) {
  console.log(event);
  console.log("I was clicked with eventListener added in HTML");
}

const clickBtn = document.querySelector("button#clickBtn");

clickBtn.addEventListener("click", (event) => clickHandler(event));

function clickHandler(event) {
  console.log(event);
  console.log("I was clicked with eventListener added by JS");
}

// * Counter Example

const counterDiv = document.querySelector("div#counter");
const addBtn = document.querySelector("button#addBtn");
const substractBtn = document.querySelector("button#substractBtn");

let counter = 0;

addBtn.addEventListener("click", (e) => {
  counter++;
  changeCounterHtml();
});

substractBtn.addEventListener("click", (e) => {
  counter--;
  changeCounterHtml();
});

function changeCounterHtml() {
  counterDiv.children[1].textContent = counter;
}

// * Print Name Example
const nameForm = document.querySelector("form");
const nameInput = document.querySelector("input[name=nameInput]");
const nameContainer = document.querySelector("h3#nameContainer");
const typingP = document.querySelector("p.typing");
const clearBtn = document.querySelector("button[type=button]");

nameInput.addEventListener("focus", () => {
  typingP.style.display = "block";
});

nameInput.addEventListener("blur", (e) => {
  typingP.style.display = "none";
});

nameInput.addEventListener("change", (e) => {
  typingP.style.display = "none";
});

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  nameContainer.innerHTML = nameInput.value;
});

clearBtn.addEventListener("click", (e) => {
  //   nameInput.value = null;
  nameForm.reset();
  nameContainer.innerHTML = "Name";
});
