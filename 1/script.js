// console.log("Javascript file is connected");

// var name ='suhail';
// let firstName ='Muhammad';
// const birthYear = 1995;

//DOM = Document Object Model
// let firsth1Element = document.querySelector("h1");
// console.log(firsth1Element.innerText);

// let secondh1Element = document.querySelector("#name");
// let parentContainer = document.querySelector("#parentContainer");

// mutate value of h1Element.innertext
// firsth1Element.innerText = "Welcome to my webstie";
// console.log(h1Element.innerText);

// secondh1Element.innerText = "testing 123";

const sampleHTML =
  "<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta odit accusantium dolores repellat autem atque quibusdam consequuntur earum debitis?</p></div>";

// parentContainer.innerHTML = sampleHTML;
// parentContainer.innerText = sampleHTML;

// parentContainer.setAttribute("style", "background-color:red");

// from CSS
// parentContainer.setAttribute("class", "parent-class");

function changeToRed() {
  //   parentContainer.setAttribute("style", "background-color:red");
  parentContainer.setAttribute("class", "parent-class2");
}

function changeToBlue() {
  parentContainer.setAttribute("class", "parent-class");
}

//invoke
// changeToBlue();
// changeToRed();

let rightNav = document.querySelector("#rightNav");
let modal = document.querySelector("#errorModal");
let modalTitle = document.querySelector("#modalTitle");

function openNav() {
  rightNav.setAttribute("style", "right: 0");
}

function closeNav() {
  rightNav.setAttribute("style", "right: -300px");
}

// parameter
function openModal(type) {
  // popUp.setAttribute("style", "display: block");
  if (type === "info") {
    modal.setAttribute("style", "background-color:blue");
    modalTitle.innerText = "Info";
    modal.setAttribute("style", "display: flex");
  } else if (type === "warning") {
    modal.setAttribute("style", "background-color:yellow");
    modalTitle.innerText = "Warning";
    modal.setAttribute("style", "background-color:yellow; display: flex");
  } else if (type === "danger") {
    modal.setAttribute("style", "background-color:red; display: flex");
    modalTitle.innerText = "Danger";
  }
}

//  if type ='info' , h2 ='info'. bgcolor ='blue'
//  if type ='warning' , h2 ='warning'. bgcolor ='yellow'
//  if type ='danger' , h2 ='danger'. bgcolor ='red'

function closeModal() {
  popUp.setAttribute("style", "display: none");
}
