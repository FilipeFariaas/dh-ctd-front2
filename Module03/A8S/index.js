const body = document.querySelector(`body`);

let keydownCounter = 0;

const temp = `
  <h1>Texto</h1>
  <form>
    <input id="title" type="text" /> 
    <input id="text" type="text" />
    <button id="submit" type="submit">Submit</button>
    <button id="reset" type="reset">Reset</button>
  </form>
  <div>
    <h2></h2>
    <p></p>
    <span>keydown pressed:</span>
  </div>
`

body.innerHTML += temp;

// FORM
const myForm = document.querySelector("form");
const titleInput = document.querySelector(`#title`);
const textInput = document.querySelector(`#text`);
const btnSubmit = document.querySelector("#submit");
const btnReset = document.querySelector("#reset");
const title = document.querySelector(`h1`);

// DIV
const subTitle = document.querySelector(`h2`);
const text = document.querySelector(`p`);
const span = document.querySelector(`span`);

// EVENTS
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

title.addEventListener("mouseover", () => {
  title.style.color = "red";
});

title.addEventListener("mouseleave", () => {
  title.style.color = "black";
});

titleInput.onkeydown = (input) => {
  subTitle.innerText += input.key;
  keydownCounter++;
  span.innerText = `keydown pressed: ${keydownCounter} times`;
};

textInput.onkeydown = (input) => {
  text.innerText += input.key;
  keydownCounter++;
  span.innerText = `keydown pressed: ${keydownCounter} times`;
};

alert(`Site loaded`);

btnReset.addEventListener(`click`, e => {
  e.preventDefault();
  titleInput.value = "";
  textInput.value = "";
  subTitle.innerText = "";
  text.innerText = "";

})