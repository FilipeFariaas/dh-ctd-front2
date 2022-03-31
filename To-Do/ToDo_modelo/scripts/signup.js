"use-strict";

const inputName = document.querySelector(`#name`);
const inputNickname = document.querySelector(`#nickname`);
const inputEmail = document.querySelector(`#email`);
const inputPass = document.querySelector(`#pass`);
const inputPassConfirm = document.querySelector(`#pass--confirm`);
const btnConfirm = document.querySelector(`.btn-confirm`);

const storedRegisteredUsers = JSON.parse(
  localStorage.getItem(`registeredUsers`)
);

const passRequirements = /^(?=.*\d)(?=.*[!@*#])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const emailRequirements = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const msgErr = document.createElement(`p`);
msgErr.classList.add(`error`);

let inputNameOk = false;
let inputNicknameOk = false;
let inputEmailOk = false;
let inputPassOk = false;
let inputPassConfirmOk = false;

// VALIDATE NAME INPUT
inputName.addEventListener(`focusout`, () => {
  const [firstName, lastName] = inputName.value.split(` `);

  if (inputName.value.length < 2) {
    msgErr.innerText = `Name must have more than 1 letter`;
    inputName.parentElement.appendChild(msgErr);
    return;
  }

  if (inputName.value.split(` `).length < 2) {
    msgErr.innerText = `Please enter your full name`;
    inputName.parentElement.appendChild(msgErr);
    return;
  }

  if (inputName.value.length >= 2 && inputName.parentElement.contains(msgErr)) {
    msgErr.innerText = ``;
    inputName.parentElement.removeChild(msgErr);
  }

  if (!inputName.parentElement.contains(msgErr)) {
    return (inputNameOk = true);
  }
});

// VALIDATE NICKNAME
inputNickname.addEventListener(`focusout`, () => {
  if (inputNickname.value.length < 4) {
    msgErr.innerText = `Nickname must have at least 4 characters`;
    inputNickname.parentElement.appendChild(msgErr);
    return;
  }

  if (inputNickname.value.split(` `).length > 1) {
    msgErr.innerText = `Nickname must be only one word`;
    inputNickname.parentElement.appendChild(msgErr);
    return;
  }

  if (
    inputNickname.value.length >= 2 &&
    inputNickname.parentElement.contains(msgErr)
  ) {
    msgErr.innerText = ``;
    inputNickname.parentElement.removeChild(msgErr);
  }

  if (!inputNickname.parentElement.contains(msgErr)) {
    return (inputNicknameOk = true);
  }
  console.log(inputPassOk);
});

// VALIDATE EMAIL
inputEmail.addEventListener(`focusout`, () => {
  if (!inputEmail.value.match(emailRequirements)) {
    msgErr.innerText = `Invalid email`;
    inputEmail.parentElement.appendChild(msgErr);
  } else {
    if (inputEmail.parentElement.contains(msgErr)) {
      msgErr.innerText = ``;
      inputEmail.parentElement.removeChild(msgErr);
    }
  }

  if (!inputEmail.parentElement.contains(msgErr)) {
    return (inputEmailOk = true);
  }
});

// VALIDATE PASSWORD INPUT
inputPass.addEventListener(`focusout`, () => {
  if (inputPass.value.length < 8) {
    msgErr.innerText = `Password must have at least 8 letters`;
    inputPass.parentElement.appendChild(msgErr);
  }

  if (inputPass.value.length >= 8) {
    if (inputPass.parentElement.contains(msgErr)) {
      msgErr.innerText = ``;
      inputPass.parentElement.removeChild(msgErr);
    }

    if (!inputPass.value.match(passRequirements)) {
      msgErr.innerText = `Password must have: 1 special character, upper and lowercase letters and numbers`;
      inputPass.parentElement.appendChild(msgErr);
    } else {
      if (inputPass.parentElement.contains(msgErr)) {
        msgErr.innerText = ``;
        inputPass.parentElement.removeChild(msgErr);
      }
    }
  }

  if (!inputPass.parentElement.contains(msgErr)) {
    inputPassOk = true;
  }
});

// VALIDATE PASSWORD CONFIRMATION INPUT
inputPassConfirm.addEventListener(`focusout`, () => {
  if (inputPassConfirm.value !== inputPass.value) {
    msgErr.innerText = `Password doesn't match`;
    inputPassConfirm.parentElement.appendChild(msgErr);
  } else {
    if (inputPassConfirm.parentElement.contains(msgErr)) {
      msgErr.innerText = ``;
      inputPassConfirm.parentElement.removeChild(msgErr);
    }

    if (!inputPassConfirm.parentElement.contains(msgErr)) {
      return (inputPassConfirmOk = true);
    }
  }
});

btnConfirm.addEventListener(`click`, (e) => {
  e.preventDefault();
  console.log(inputNameOk);
  console.log(inputEmailOk);
  console.log(inputNicknameOk);
  console.log(inputPassOk);
  console.log(inputPassConfirmOk);

  if (
    inputNameOk &&
    inputNicknameOk &&
    inputEmailOk &&
    inputPassOk &&
    inputPassConfirmOk
  ) {
    const newUser = {
      name: inputName.value,
      nickname: inputNickname.value,
      email: inputEmail.value,
      password: inputPass.value,
    };

    storedRegisteredUsers.push(newUser);

    localStorage.setItem(`registeredUsers`, JSON.stringify(storedRegisteredUsers));

    window.location.href = "./tarefas.html";
  }
});
