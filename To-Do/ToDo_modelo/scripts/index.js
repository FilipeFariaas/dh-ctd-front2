"use-strict";

const form = document.querySelector(`form`);
const inputEmail = document.querySelector(`#inputEmail`);
const inputPass = document.querySelector(`#inputPassword`);
const btnSubmit = document.querySelector(`.submit`);

const registeredUsers = [];

const rootUser = {
  email: `filipefarias@email.com`,
  password: `myPassword!123`,
};

registeredUsers.push(rootUser);

localStorage.setItem(`registeredUsers`, JSON.stringify(registeredUsers));
// localStorage.getItem(`registeredUsers`).push(JSON.stringify(rootUser));

const storedRegisteredUsers = JSON.parse(
  localStorage.getItem(`registeredUsers`)
);

// console.log(storedRegisteredUsers);

form.addEventListener(`submit`, (e) => {
  // e.preventDefault();

  if (inputEmail.value === "" || inputPass.value === "") {
    alert(`Please inform an email and password to login`);
  }

  // localStorage.getItem(`registeredUsers`)
  storedRegisteredUsers.forEach((storedUser) => {
    console.log(storedUser);
  });
});

// btnSubmit.addEventListener(`click`, (e) => {
// });
