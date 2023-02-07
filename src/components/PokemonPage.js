import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [inputInfo, setInput] = useState("")
  const [pokemons, setPokemon] = useState([])


  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(data => data.json())
    .then(d => setPokemon(d))
    
  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
      setPokemon={setPokemon}
      />
      <br />
      <Search 
        inputInfo={inputInfo}
        setInput={setInput}
      />
      <br />
      <PokemonCollection 
      pokemons={pokemons}
      setPokemon={setPokemon}
      inputInfo={inputInfo}
      setInput={setInput}
      />
    </Container>
  );
}

export default PokemonPage;
