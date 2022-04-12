"use-strict";

const userName = document.getElementById(`username`);
const inputAddTask = document.querySelector(`#novaTarefa`);
const btnAddTask = document.querySelector(`#addTask`);
const tasksContainer = document.querySelector(`.tarefas-pendentes`);

const API_URL = "https://ctd-todo-api.herokuapp.com/v1";

const loggedUser = localStorage.getItem("jwt");

let get = {
  method: "GET",
  headers: {
    Authorization: loggedUser
  }
};

const renderTasks = (tasks) => {
  tasks.map((task) => {
    const newTask = document.createElement(`li`);
    newTask.classList.add(`tarefa`);

    const { description, createdAt, id } = task;
    const taskId = `_${id}`;

    newTask.setAttribute(`id`, taskId);

    newTask.innerHTML = `
      <div class="not-done"></div>
      <button class="delete-task">X</button>
      <div class="descricao">
        <p class="nome">${description}</p>
        <p class="timestamp">${new Date(createdAt).toLocaleString()}</p>
      </div>
    `;

    tasksContainer.appendChild(newTask);
  });
};

const addTask = (title) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: loggedUser
    },
    body: JSON.stringify({
      description: title,
      completed: false
    })
  };

  fetch(`${API_URL}/tasks`, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // renderTasks(data);
      const newTask = document.createElement(`li`);
      newTask.classList.add(`tarefa`);

      const { description, createdAt, id } = data;
      const taskId = `_${id}`;

      newTask.setAttribute(`id`, taskId);

      newTask.innerHTML = `
        <div class="not-done"></div>
        <div class="descricao">
          <p class="nome">${description}</p>
          <p class="timestamp">${new Date(createdAt).toLocaleString()}</p>
        </div>
      `;

      tasksContainer.appendChild(newTask);
      return data;
    })
    .catch((err) => console.log(err));
};

// const deleteTask = (id) => {
//   const config = {
//     method: "DELETE",
//     headers: {
//       Authorization: loggedUser
//     }
//   };

//   fetch(`${API_URL}/tasks/${id}`, config)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

const loadUserData = () => {
  fetch(`${API_URL}/users/getMe`, get)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      userName.innerText = `${response.firstName} ${response.lastName}`;
      return response;
    })
    .catch((error) => console.log(error));
};

const loadUserTasks = () => {
  const config = {
    method: "GET",
    headers: {
      Authorization: loggedUser
    }
  };

  fetch(`${API_URL}/tasks`, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderTasks(data);
      return data;
    })
    .catch((err) => console.log(err));
};

const loadData = () => {
  loadUserData();
  loadUserTasks();
};

btnAddTask.addEventListener(`click`, (e) => {
  e.preventDefault();

  addTask(inputAddTask.value);
});

window.onload = loadData();
