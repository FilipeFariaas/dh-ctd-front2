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
};

if (!localStorage.getItem(`registeredUsers`)) {
  localStorage.setItem(`registeredUsers`, JSON.stringify([rootUser]));
}

const storedRegisteredUsers = JSON.parse(
  localStorage.getItem(`registeredUsers`)
);

export const saveJwt = (jwt) => {
  return localStorage.setItem("jwt", jwt);
};

form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (inputEmail.value === "" || inputPass.value === "") {
    alert(`Please inform an email and password to login`);
  }
});

btnSubmit.addEventListener(`click`, (e) => {
  e.preventDefault();

  let req = {
    method: "POST",
    body: JSON.stringify({
      email: inputEmail.value,
      password: inputPass.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  };

  if (inputEmail.value === "" || inputPass.value === "") {
    msgErr.innerText = `Please insert your credentials`;
    inputPass.parentElement.appendChild(msgErr);
  } else {
    fetch("https://ctd-todo-api.herokuapp.com/v1/users/login", req)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        saveJwt(response.jwt);
        window.location.href = "./tarefas.html";
      })
      .catch((error) => console.log(error));
  }
});
