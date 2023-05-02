import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonDetails.css';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const responseData = response.data;
      setPokemon({
        name: responseData.name,
        image: responseData.sprites.front_default,
        number: responseData.id,
        height: responseData.height,
        weight: responseData.weight,
        abilities: responseData.abilities.map(ability => ability.ability.name),
      });
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>No pokemon with this id</div>;
  }

  return (
    <div className="pokemon-details">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Number: {pokemon.number}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Abilities: {pokemon.abilities.join(', ')}</p>
    </div>
  );
};

export default PokemonDetails;
