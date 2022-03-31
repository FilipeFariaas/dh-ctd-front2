"use-strict";

const form = document.querySelector(`form`);
const inputEmail = document.querySelector(`#inputEmail`);
const inputPass = document.querySelector(`#inputPassword`);
const btnSubmit = document.querySelector(`.submit`);

const msgErr = document.createElement(`p`);
msgErr.classList.add(`error`);

const rootUser = {
  email: `root@email.com`,
  password: `myPassword!123`,
}

if(!localStorage.getItem(`registeredUsers`)) {
  localStorage.setItem(`registeredUsers`, JSON.stringify([rootUser]));
}

const storedRegisteredUsers = JSON.parse(
  localStorage.getItem(`registeredUsers`)
);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (inputEmail.value === "" || inputPass.value === "") {
    alert(`Please inform an email and password to login`);
  }
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
      msgErr.innerText = `Invalid email or password`;
      inputPass.parentElement.appendChild(msgErr);
    } else {
      msgErr.innerText = `Unregistered user`;
      inputPass.parentElement.appendChild(msgErr);
    }
  });
});
