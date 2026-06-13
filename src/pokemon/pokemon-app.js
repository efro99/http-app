
/**
 * @returns {Object} pokemon 
 */
const fetchPokemon = async (id) =>  {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
   
    if (resp.status === 200 ) {
        const data = await resp.json();
        console.log(data)
        return data;
    }

}

const fetchPokemonAbilites = async (pokemonUrl) =>  {
    const resp = await fetch(pokemonUrl);

    if (resp.status === 200 ) {
        const data = await resp.json();
        console.log(data.results);
        return data.results;
    }

} 


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Pokemon App';
    element.innerHTML = 'Loading...';
    let id = 1;

    const pokemonLabel = document.createElement('blockquote');
    
    const nextPokemon = document.createElement('button');
    nextPokemon.innerText = 'Next Pokemon';

    const renderPokemon = ( pokemon ) => {
        pokemonLabel.innerHTML = pokemon.name;
        element.replaceChildren( pokemonLabel, nextPokemon)
    }   

    nextPokemon.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        id++;
        const poke = await fetchPokemon(id);
        renderPokemon((poke))
    })

    await fetchPokemon(id)
        .then( (data ) => renderPokemon((data)));
}

