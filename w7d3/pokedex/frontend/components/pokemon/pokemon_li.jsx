import React from 'react';

const PokemonLi = ({ pokemon }) => (
  <li>
    {pokemon.name}
    <img src={pokemon.image_url} className="small"></img>
  </li>
);

export default PokemonLi;
