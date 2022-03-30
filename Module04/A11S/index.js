"use-stric";

const firstnameInput = document.querySelector(`#firstname`);
const lastnameInput = document.querySelector(`#lastname`);
const sendButton = document.querySelector(`button`);
const results = document.querySelector(`.results`);
const radios = document.querySelectorAll(`input[type="radio"]`);

const clearResults = () => {
  results.innerHTML = ``;
};

const clearInputs = () => {
  firstnameInput.value = ``;
  lastnameInput.value = ``;
};

const replaceText = (text) => {
  text = text.replace(/@/g, `a`);
  text = text.replace(/3/g, `e`);

  return text;
};

sendButton.addEventListener(`click`, (e) => {
  e.preventDefault();

  clearResults();

  let firstName = firstnameInput.value.trim();
  firstName = replaceText(firstName);

  let lastName = lastnameInput.value.trim();
  lastName = replaceText(lastName);

  let p = document.createElement(`p`);

  if (radios[0].checked === true) {
    p.innerText = firstName.concat(` ` + lastName).toUpperCase();
  } else {
    p.innerText = firstName.concat(` ` + lastName).toLowerCase();
  }

  results.appendChild(p);

  clearInputs();
});
