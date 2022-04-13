"use-strict";

// const userName = document.querySelector(`#username`);
const btnEndSession = document.querySelector(`#closeApp`);
const inputNewTask = document.querySelector(`#novaTarefa`);
const btnAddTask = document.querySelector(`#addTask`);
const tasksPending = document.querySelector(`.tarefas-pendentes`);

const loggedUser = localStorage.getItem("jwt");

const API_URL = `https://ctd-todo-api.herokuapp.com/v1`;

const closeEditModal = (parent, child) => parent.removeChild(child);

const deleteTask = (id) => {
  let config = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: loggedUser
    }
  };

  fetch(`${API_URL}/tasks/${id}`, config)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const saveChanges = (id, newTitle) => {
  // const formatedId = id.slice(1);
  const formatedId = id;
  // const formatedId = id;
  const config = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: loggedUser
    },
    body: JSON.stringify({
      description: newTitle,
      completed: false
    })
  };

  fetch(`${API_URL}/tasks/${formatedId}`, config)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const getTaskData = (id) => {
  // const taskId = id.slice(1);
  // const taskId = id;
  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: loggedUser
    }
  };

  fetch(`${API_URL}/tasks/${id}`, config)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      // console.log(data);
      const { id } = data;
      const { description } = data;

      editTask(id, description);
      // completeTask(data);

      // return data;
    })
    .catch((err) => console.log(err));
};

// ! TEST

const getIndividualTaskData = (id) => {
  // const taskId = id.slice(1);
  // const taskId = id;
  // let taskCompleted;

  const config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: loggedUser
    }
  };

  fetch(`${API_URL}/tasks/${id}`, config)
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      // console.log(data);
      // const { completed } = data;
      // completeTask(data);
      return data;
      // return completeTask(data);
      // console.log(completed);
      // return (taskCompleted = completed);
      // return data;
    })
    .catch((err) => console.log(err));

  // return taskCompleted;
};

const editTask = (id, taskTitle) => {
  // const taskId = id.slice(1);

  // getTaskData(id);

  const container = document.querySelector(`.container`);
  const editTaskModal = document.createElement(`div`);
  editTaskModal.classList.add(`edit-task-modal`);
  editTaskModal.innerHTML += `
    <form class="edit-task">
      <button id="close-edit-modal">X</button>
      <div class="edit-task--input-wrapper">
        <label>Título</label>
        <input id="edit-task-input" type="text" value="${
          // document.querySelector(`#${taskId} .descricao .nome`).innerText
          taskTitle
        }" />
      </div>

      <div class="edit-task-buttons">
        <button id="save-change">Save</button>
        <button id="cancel-change">Cancel</button>
      </div>
    </form>
  `;

  container.appendChild(editTaskModal);

  const btnCloseModal = document.querySelector(`#close-edit-modal`);
  btnCloseModal.addEventListener(`click`, (e) => {
    e.preventDefault();

    container.removeChild(editTaskModal);
  });

  const currentTaskTitle = document.querySelector(`#_${id} .nome`);
  const inputEditTask = document.querySelector(`#edit-task-input`);
  const btnSaveEdit = document.querySelector(`#save-change`);
  const btnCancelEdit = document.querySelector(`#cancel-change`);

  btnSaveEdit.addEventListener(`click`, (e) => {
    e.preventDefault();

    const newTitle = inputEditTask.value;
    currentTaskTitle.innerText = newTitle;

    saveChanges(id, newTitle);
    closeEditModal(container, editTaskModal);
  });

  btnCancelEdit.addEventListener(`click`, (e) => {
    e.preventDefault();

    closeEditModal(container, editTaskModal);
  });
};

// TODO MARCAR COMO CONCLUÍDA

const completeTask = (task) => {
  // console.log(completed);
  const btnCompleteTask = document.querySelectorAll(`.not-done`);
  btnCompleteTask.forEach((btn) => {
    btn.addEventListener(`click`, async (e) => {
      e.preventDefault();
      const taskId = btn.parentElement.getAttribute(`id`).slice(1);
      const taskTitle = btn.nextElementSibling.children[0].innerText;

      let previousState = await getIndividualTaskData(taskId);
      console.log(previousState);
      // const prevTaksState = getIndividualTaskData(taskId);
      // console.log(prevTaksState);

      const config = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: loggedUser
        },
        body: JSON.stringify({
          description: taskTitle,
          completed: true
        })
      };

      fetch(`${API_URL}/tasks/${taskId}`, config)
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((err) => console.log(err));
    });
  });
};

const renderTask = (task) => {
  let { id } = task;
  let { description } = task;
  let { createdAt } = task;
  let taskTemplate = `
    <li id=_${id} class="tarefa">
      <button id="edit-task">
        <img src="../assets/pencil.png" />
      </button>
      <button id="deleteTask">X</button>
      <div class="not-done"></div>
      <div class="descricao">
        <p class="nome">${description}</p>
        <p class="timestamp">${new Date(createdAt).toLocaleString()}</p>
      </div>
    </li>
  `;

  tasksPending.innerHTML += taskTemplate;

  inputNewTask.value = "";

  const btnDeleteTask = document.querySelectorAll(`#deleteTask`);

  btnDeleteTask.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
      e.preventDefault();
      const taskId = document
        .querySelector(`.tarefa`)
        .getAttribute("id")
        .slice(1);
      // deleteTask(document.querySelector(`.tarefa`).getAttribute("id"));
      deleteTask(taskId);
      btn.parentElement.remove();
    });
  });

  const btnEditTask = document.querySelectorAll(`#edit-task`);

  btnEditTask.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
      // let id = btn.parentElement.getAttribute("id");
      e.preventDefault();
      // const taskId = document
      //   .querySelector(`.tarefa`)
      //   .getAttribute("id")
      //   .slice(1);
      const taskId = btn.parentElement.getAttribute("id").slice(1);
      // .slice(1);
      // editTask(taskId);
      getTaskData(taskId);
    });
  });

  completeTask(id);
};

const loadUserTasks = () => {
  let config = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: loggedUser
    }
  };

  fetch(`${API_URL}/tasks`, config)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      response.forEach((task) => {
        renderTask(task);
      });
    })
    .catch((err) => console.log(err));
};

const validateAccess = () => {
  if (localStorage.getItem(`jwt`)) {
    loadUserTasks();
  } else {
    window.location = "../index.html";
  }
};

btnEndSession.addEventListener(`click`, (e) => {
  e.preventDefault();

  localStorage.removeItem(`jwt`);
  window.location = "../index.html";
  console.log(`clicked`);
});

btnAddTask.addEventListener(`click`, (e) => {
  e.preventDefault();

  let config = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: loggedUser
    },
    body: JSON.stringify({
      description: inputNewTask.value,
      completed: false
    })
  };

  fetch(`${API_URL}/tasks`, config)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      renderTask(response);
    })
    .catch((err) => console.log(err));
});

window.onload = validateAccess();
