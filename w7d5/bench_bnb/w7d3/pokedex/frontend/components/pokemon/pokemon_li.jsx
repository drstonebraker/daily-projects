import React from 'react';
import { Link } from 'react-router-dom';

const PokemonLi = ({ pokemon }) => (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        {pokemon.name}
        <img src={pokemon.image_url} className="small"></img>
      </Link>
    </li>

);

export default PokemonLi;
