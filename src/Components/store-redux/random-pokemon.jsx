const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) throw new Error("Somethig went wrong");

  const data = await response.json();

  return data;
};

const getRandomPokemon = async function (amount) {
  const pokemons = [];
  for (let i = 0; pokemons.length < amount; i++) {
    const randomNum = Math.floor(Math.random() * 500) + 1;
    const newPokemon = await fetchPokemon(randomNum);
    pokemons.push({
      id: newPokemon.id,
      name: newPokemon.name,
      url: newPokemon.sprites.front_default,
    });
  }
  return pokemons;
};

export default getRandomPokemon;
