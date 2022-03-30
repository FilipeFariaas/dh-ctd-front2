//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
const tarjeta = document.getElementById(`tarjeta`);
tarjeta.classList.add(`card`);

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
const logo = document.getElementById(`logo`);
logo.setAttribute(`src`, `https://www.youtube.com/img/desktop/yt_1200.png`);

//3- Quitarle al titulo la clase que le está dando un formato feo
const titulo = document.querySelector(`.titulo-feo`);
titulo.classList.remove(`titulo-feo`);

//4- Chequear si el link a youtube posee o no el atributo href
const youtubeLink = document.getElementById(`link_youtube`);
if (youtubeLink.hasAttribute(`href`)) {
	youtubeLink.getAttribute(`href`) == `https://www.youtube.com/`
		? console.log(`Has YouTube link`)
		: console.log(`Missing link`);
}

//5- Obtener el href del link a wikipedia y mostrarlo por consola
const wikipediaLink = document.getElementById(`link_wikipedia`);
console.log(wikipediaLink.getAttribute(`href`));
