const form = document.querySelector(`form`);
const inputs = document.querySelectorAll(`input`);
const inputTitle = document.querySelector(`#title`);
const inputDescription = document.querySelector(`#description`);
const inputImage = document.querySelector(`#image`);
const btnSave = document.querySelector(`#save`);
const btnCancel = document.querySelector(`#cancel`);

const cardsContainer = document.querySelector(`.cards`);

const clearForm = (inputs) => {
  inputs.forEach((input) => {
    input.value = "";
  });
};

btnSave.addEventListener(`click`, (e) => {
  e.preventDefault();

  const data = {
    title: inputTitle.value,
    description: inputDescription.value,
    imgUrl: inputImage.value,
    createdAt: new Date().toLocaleString(),
  };

  const cardTemplate = `
    <li class="card">
    <div class="img-wrapper">
      <img src="${data.imgUrl}" alt="image" />
    </div>
    <div class="card-info">
      <h2 class="card-title">${data.title}</h2>
      <p class="card-description">
        ${data.description}
      </p>
    </div>
    <span>${data.createdAt}</span>
    </li>
  `;

  cardsContainer.innerHTML += cardTemplate;

  clearForm(inputs);

});

btnCancel.addEventListener(`click`, (e) => {
  e.preventDefault();

  clearForm(inputs);
});
