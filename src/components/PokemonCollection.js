import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({inputInfo, pokemons, setPokemon}) {


  const filteredlist = pokemons.filter(pokemon => {
    if (inputInfo === ""){
      return true
    }
    else if (pokemon.name.toLowerCase().startsWith(inputInfo)){
      return true
    }
    return false
    }
  )
  
  return (
    <Card.Group itemsPerRow={6}>
      {filteredlist.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} /> )}
    </Card.Group>
    );
}

export default PokemonCollection;


