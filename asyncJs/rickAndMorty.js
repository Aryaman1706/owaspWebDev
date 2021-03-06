const parentDiv = document.getElementById("listContainer");
const loadDiv = document.querySelector("div.centerAlign");
const loadBtn = document.getElementById("load");
const paginationDiv = document.querySelector("div.pagination");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let result = null;

// * Add event listeners
loadBtn.addEventListener("click", () => {
  // this is hidding load button after the first click
  loadDiv.style.display = "none";

  loadFromAPI("https://rickandmortyapi.com/api/character");

  // Unhiding pagination div after content is loaded
  paginationDiv.style.display = "flex";
});

nextBtn.addEventListener("click", () => {
  if (result.info.next) {
    loadFromAPI(result.info.next);
  }
});

prevBtn.addEventListener("click", () => {
  if (result.info.prev) {
    loadFromAPI(result.info.prev);
  }
});

// * Helper functions
function loading() {
  parentDiv.innerHTML = "<h4 style='text-align: center' >Loading...</h4>";
}

async function callAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  result = data;
}

function makeListItem(name, place, species, img) {
  const listItem = document.createElement("div");
  listItem.className = "listItem";

  // first child
  const image = document.createElement("img");
  image.src = img;
  image.className = "img";

  // second child
  const textContainer = document.createElement("div");
  textContainer.className = "textContainer";
  textContainer.innerHTML = `<p>Name:- ${name}</p><p>Place:- ${place}</p><p>Species:- ${species}</p>`;

  listItem.appendChild(image);
  listItem.appendChild(textContainer);

  return listItem;
}

async function loadFromAPI(url) {
  // * show loading in parentDiv
  loading();

  // * call API
  await callAPI(url);

  // Here result would have the latest data

  // * clearing parentDiv html
  parentDiv.innerHTML = "";

  // * makeLists and append to parent div
  result.results.forEach((character) => {
    const newListItem = makeListItem(
      character.name,
      character.location.name,
      character.species,
      character.image,
    );

    parentDiv.appendChild(newListItem);
  });
}
