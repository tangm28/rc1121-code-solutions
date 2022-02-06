import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const CAROUSELITEMS = [
  { id: 1, name: 'Bulbasaur', imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
  { id: 4, name: 'Charmander', imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
  { id: 7, name: 'Squirtle', imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
  { id: 25, name: 'Pikachu', imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
  { id: 52, name: 'Meowth', imgUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png' }
];

ReactDOM.render(
  <Carousel carouselItems={CAROUSELITEMS} />,
  document.querySelector('#root')
);
