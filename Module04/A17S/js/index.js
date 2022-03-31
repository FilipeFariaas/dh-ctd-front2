const apiUrl = "https://randomuser.me/api/";

const requestData = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderData(data.results[0]);
    });
};

requestData(apiUrl);

function renderData(data) {
  const { large } = data.picture;
  const { first, last } = data.name;
  const email = data.email;
  const { city, state } = data.location;
  const { name, number } = data.location.street;
  const phone = data.phone;

  const card = document.querySelector(`.card`);
  const btnRequestNew = document.querySelector(`#random`);

  const template = `
        <div class="profile">
        <img src="${large}" />
        </div>
        <div class="user-info">
            <h1 class="fullname" >${first} ${last}</h1>
            <p class="address" >${name}, ${number} - ${city} - ${state}</p>  
            <p class="email" >${email}</p>
            <p class="phone" >${phone}</p>
        </div>
    `;

  card.innerHTML = template;

  btnRequestNew.addEventListener(`click`, (e) => {
    e.preventDefault(0);

    requestData(apiUrl);
  });
}
