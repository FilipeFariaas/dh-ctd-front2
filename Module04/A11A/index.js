"use-stric";

const inputName = document.querySelector(`#nome`);
const inputPass = document.querySelector(`#pass`);
const inputTel = document.querySelector(`#tel`);
const button = document.querySelector(`button`);
const form = document.querySelector(`form`);
const hobbies = document.querySelectorAll(`input[type="checkbox"]`);
// const countries = document.querySelectorAll(`input[type="radio"]`);
// const labels = document.querySelectorAll(`label`);
const brasilRadio = document.querySelector(`#nacionalidadeBrasileira`);

let enable = false;

let span = document.createElement(`span`);

// VALIDATE NAME INPUT
inputName.addEventListener(`keydown`, () => { 
  console.log(inputName.value);
  console.log(inputName.value.length);

  // if (inputName.value.length < 2) {
  //   span.innerText = `Name must have more than 1 letter`;
  //   inputName.parentElement.appendChild(span);
  // }
  // if (inputName.value.length > 1 && inputName.parentElement.contains(span)) {
  //   span.innerText = ``;
  //   inputName.parentElement.removeChild(span);
  // }
});

// form.addEventListener(`submit`, (e) => {
//   e.preventDefault();
// });

// button.addEventListener(`click`, (e) => {
//   const username = inputName.value.split(` `);

//   username.forEach((e) => {
//     if (e.length === 1) {
//       enable = false;
//       alert(`name must have more than 1 letter`);
//     }
//   });

//   if (username.length < 2) {
//     enable = false;
//     alert(`Missing lastname`);
//   }

//   if (inputName.value.length > 150) {
//     enable = false;
//     alert(`limit exceeded`);
//   }

//   if (inputName.value.match(/(\d+)/)) {
//     enable = false;
//     alert(`can't have numbers`);
//   }

//   let hobbiesNumbers = 0;
//   hobbies.forEach((hobbie) => {
//     hobbie.checked === true ? hobbiesNumbers++ : ``;
//   });

//   if (hobbiesNumbers > 4) {
//     enable = false;
//     alert(`U can select only 4 hobbies`);
//   }
//   // countries.forEach((country) => {
//   //   // console.log(country.parentElement.innerText);
//   //   // country.checked === true ? `` : alert(`U must select a country`);
//   //   if (country.parentElement.innerText == "Brasil") {
//   //     console.log(`br`);
//   //     // if (country.getAttribute(`checked`) === true) {
//   //     //   alert(`apsdokapsdoad`);
//   //     // }
//   //   }
//   // });

//   if (brasilRadio.checked === true) {
//     enable = false;
//     alert(
//       `Sorry, we are not recruiting wizards in Brazil yet, but we will be arriving soon`
//     );
//   }

//   if (enable) {
//     button.setAttribute(enable);
//   }
// });
