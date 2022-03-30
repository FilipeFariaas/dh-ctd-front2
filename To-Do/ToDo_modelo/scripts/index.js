"use-strict";

const form = document.querySelector(`form`);
const inputEmail = document.querySelector(`#inputEmail`);
const inputPass = document.querySelector(`#inputPassword`);
const btnSubmit = document.querySelector(`.submit`);

const msgErr = document.createElement(`p`);
msgErr.classList.add(`error`);
// const registeredUsers = [];

const rootUser = {
  email: `filipefarias@email.com`,
  password: `myPassword!123`,
};

// registeredUsers.push(rootUser);

// localStorage.setItem(`registeredUsers`, JSON.stringify(registeredUsers));
// localStorage.getItem(`registeredUsers`).push(JSON.stringify(rootUser));

const storedRegisteredUsers = JSON.parse(
  localStorage.getItem(`registeredUsers`)
);

// console.log(storedRegisteredUsers);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (inputEmail.value === "" || inputPass.value === "") {
    alert(`Please inform an email and password to login`);
  } else {
    // storedRegisteredUsers.forEach((storedUser) => {
    //   if (
    //     inputEmail.value === storedUser.email &&
    //     inputPass === storedUser.password
    //   ) {
    //     console.log(`user already registered`);
    //   } else if (
    //     inputEmail.value === storedUser.email ||
    //     inputPass === storedUser.password
    //   ) {
    //     console.log(`Invalid email or password`);
    //   } else {
    //     console.log(`Unregistered user`);
    //   }
    // });
  }
  // console.log(storedRegisteredUsers);
  // localStorage.getItem(`registeredUsers`)
});

btnSubmit.addEventListener(`click`, (e) => {
  e.preventDefault();
  storedRegisteredUsers.forEach((storedUser) => {
    if (
      inputEmail.value === storedUser.email &&
      inputPass.value === storedUser.password
    ) {
      if (inputPass.parentElement.contains(msgErr)) {
        msgErr.innerText = ``;
        inputPass.parentElement.removeChild(msgErr);
      }
      window.location.href = "./tarefas.html";
    } else if (
      inputEmail.value === storedUser.email ||
      inputPass.value === storedUser.password
    ) {
      console.log(`Invalid email or password`);
      msgErr.innerText = `Invalid email or password`;
      inputPass.parentElement.appendChild(msgErr);
    } else {
      console.log(`Unregistered user`);
      msgErr.innerText = `Unregistered user`;
      inputPass.parentElement.appendChild(msgErr);
    }
  });
});
