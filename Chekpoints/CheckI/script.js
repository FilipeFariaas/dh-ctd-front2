const openModalButton = document.querySelector(`.open-modal`);
const closeModalButton = document.querySelector(`header button`);
const addNewsButton = document.querySelector('.add-news');

const inputsValue = document.querySelectorAll('input');

const modal = document.querySelector(`aside`);
const newsContainer = document.querySelector('.news');

const toggleModal = (value) => {
  const state = value ? '1' : '0';
  modal.style.opacity = state;

}

openModalButton.addEventListener(`click`, () => toggleModal(true));
closeModalButton.addEventListener(`click`, () => toggleModal(false));

addNewsButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  setNewsData(inputsValue);
  toggleModal(false);
  resetInputValues(inputsValue)
});

const setNewsData = ([title, description, img]) => {
  const titleValue = title.value;
  const descriptionValue = description.value;
  const imgValue = img.value;

  const newObj = {
    img: imgValue,
    title: checkLenght(titleValue, 25),
    description: checkLenght(descriptionValue, 100),
  }
  addNews(newObj)
};

const checkLenght = (value, maxLenght) => (
  value.length > maxLenght ? value.substring(0, maxLenght) + '...' : value
);

const resetInputValues = (inputsArray) => {
  inputsArray.forEach(input => input.value = '')
};

const addNews = ({ img, title, description }) => {
  newsContainer.innerHTML +=
    `
      <li class="new">
          <div>
            <img class="new--img"
              src="${img}"
              alt=""
            >
          </div>
          <h3 class="new--title">${title}</h3>
          <p class="new--description">${description}</p>
      </li>
  `
};
