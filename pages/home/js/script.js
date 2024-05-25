import { InserirFilmesNaTela } from "./main.js";

export const apiKey = '7fdaf94d41ddb5d95c783dba9fa57eb8';
let movies = []; 

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 10); // Atribui o valor a movies, por exemplo (top 10 filmes populares)
    InserirFilmesNaTela(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
  });

const home = document.querySelector('.cabecalho__titulo');
home.addEventListener('click', () => {
  InserirFilmesNaTela(movies);
  document.getElementById('cabecalho__checkbox').checked = false;
  document.querySelector('.card__lista-vazia').style.display = 'none';
});
