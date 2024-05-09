import React, { useState, useEffect } from 'react';

interface PokemonProps {
  pokemon: string; // Prop expects a string representing the pokemon name
}

function PokemonDetail(props: PokemonProps) {
  const { pokemon } = props; // Destructure prop from props object
  const apiLink = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  const [data, setData] = useState(null);

  // Fetches data from an API on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiLink);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [apiLink, pokemon]); // Dependency array: refetch data when pokemon prop changes

  return (
    <div>
      {data ? (
        <p>Fetched Pokemon: <br/> {JSON.stringify(data)} </p>  // Access specific data properties
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default PokemonDetail;