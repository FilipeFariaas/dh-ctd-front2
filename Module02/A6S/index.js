const urlImagens = [];

const imagens = document.querySelectorAll(`img`);
const links = document.querySelectorAll(`a`);

imagens.forEach((_, index) => {
  const url = prompt(`Insira a URL da imagem ${index + 1}`);
  urlImagens.push(url);
});

urlImagens.forEach((url, index) => {
  imagens[index].setAttribute(`src`, url);
  links[index].setAttribute(`href`, url);
  links[index].setAttribute(`target`, `__blank`);
});

// * MELHORIAS

/*
	Nó pai: div.conteudo
	Nó filho repetitivo: div.cartão

	
	Melhoria 1: Remoção das classes nas tags "a", não precisam ser utilizadas.
	Melhoria 2: Remoção dos IDs para seleção dos elementos através do javascript para a inserção do "src".
	Ao invés dos IDs, utilizamos o próprio índice do array de imagens.
*/
