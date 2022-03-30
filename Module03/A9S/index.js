const body = document.querySelector(`body`);
const form = document.querySelector(`form`);
const titleInput = document.querySelector(`#title`);
const descriptionInput = document.querySelector(`#description`);
const imageInput = document.querySelector(`#imgurl`);
const saveButton = document.querySelector(`button`);
const main = document.createElement(`main`);

const data = [];

form.addEventListener("submit", (e) => e.preventDefault());

saveButton.addEventListener(`click`, (e) => {
  e.preventDefault();

  const dataObj = {
    title: titleInput.value,
    description: descriptionInput.value,
    imgUrl: imageInput.value,
  };

  data.push(dataObj);


  const cardTemplate = `
    <div class="card"> 
      <img src="${data[data.length - 1].imgUrl}"> 
      <div class="container"> 
        <h2><b>${data[data.length - 1].title}</b></h2> 
        <p>${data[data.length - 1].description}</p> 
      </div> 
    </div> 
  `;

  main.innerHTML += cardTemplate;

  body.appendChild(main);
});
