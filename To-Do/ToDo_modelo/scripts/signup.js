"use-strict";

const inputName = document.querySelector(`#name`);
const inputNickname = document.querySelector(`#nickname`);
const inputEmail = document.querySelector(`#email`);
const inputPass = document.querySelector(`#pass`);
const inputPassConfirm = document.querySelector(`#pass--confirm`);
const btnConfirm = document.querySelector(`.btn-confirm`);

const passRequirements = /^(?=.*\d)(?=.*[!@*#])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const emailRequirements = /^(?=.*[/com/g])(?=.*[@])/;

const msgErr = document.createElement(`p`);
msgErr.classList.add(`error`);

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
});

// VALIDATE NICKNAME
inputNickname.addEventListener(`focusout`, () => {
  if (inputNickname.value.length < 4) {
    msgErr.innerText = `Nickname must have more than 1 letter`;
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
});

// VALIDATE EMAIL
inputEmail.addEventListener(`focusout`, () => {
  if (!inputEmail.value.match(emailRequirements)) {
    msgErr.innerText = `Invalid email`;
    inputEmail.parentElement.appendChild(msgErr);
  } else {
    msgErr.innerText = ``;
    inputEmail.parentElement.removeChild(msgErr);
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
      msgErr.innerText = ``;
      inputPass.parentElement.removeChild(msgErr);
    }
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
  }
});

// VALIDATE PHONE NUMBER INPUT
// inputTel.addEventListener(`keypress`, (e) => {
//   if (inputTel.value.length > 10) {
//     e.preventDefault();
//   }
// });

// VALIDATE HOBBIES
// let totalHobbies = 0;
// hobbies.forEach((hobbie) => {
//   hobbie.addEventListener(`click`, (e) => {
//     if (totalHobbies > 3) {
//       !hobbie.checked ? totalHobbies-- : e.preventDefault();
//     } else {
//       totalHobbies++;
//     }
//   });
// });

// // VALIDATE COUNTRY
// countries.forEach((country) => {
//   country.addEventListener(`click`, (e) => {
//     const selectedCountry = country.parentElement.innerText;
//     if (selectedCountry == "Brasil") {
//       e.preventDefault();
//       alert(
//         `Sorry, we are not recruiting wizards in Brazil yet, but we will be arriving soon`
//       );
//     }
//   });
// });

// function entrar() {
//   const email = document.querySelector("#inputEmail").value;

//   const emailNormalizado = email.toLowerCase();
//   console.log(emailNormalizado);

//   email.innerHTML = emailNormalizado;

//   const senha = document.querySelector("#inputPassword").value;

//   if (senha.length >= 8 && senha.length < 12 && /.com$/.test(email)) {
//     localStorage.setItem("login", emailNormalizado);

//     alert("Login efetuado com sucesso!");

//     window.location.href = "tarefas.html";
//   } else {
//     alert("login não efetuado.");
//   }
// }

// document.querySelector(`.submit`).addEventListener(`click`, (e) => {
//   e.preventDefault();
//   const email = document.querySelector("#inputEmail").value;

//   const emailNormalizado = email.toLowerCase();
//   console.log(emailNormalizado);

//   localStorage.setItem("login", emailNormalizado);
// });

// console.log(localStorage.getItem(`login`));

// "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$"
// "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"

{
  /* <script type="text/javascript"> function validateEmail(email) { var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ if (reg.test(email)){ return true; } else{ return false; } } </script>  */
}
