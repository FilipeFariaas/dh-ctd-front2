"use-strict";

const userName = document.getElementById(`username`);

const loggedUser = localStorage.getItem("jwt");

let get = {
  method: "GET",
  headers: {
    Authorization: loggedUser,
  },
};

const loadUserData = () => {
  fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", get)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      userName.innerText = `${response.firstName} ${response.lastName}`;
      return response;
    })
    .catch((error) => console.log(error));
};

window.onload = loadUserData();
