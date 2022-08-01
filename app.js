const container = document.getElementById("pokemon-container")

const count = 905;
const color = {
    fire: "#fd7d24",
    grass: "#9bcc50",
    electric: "#eed535",
    water: "#4592c4",
    ground: "#a38c21",
    rock: "#95989f",
    fairy: "#fdb9e9",
    poison: "#b97fc9",
    bug: "#729f3f",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#f5c578",
    normal: "#96bfc7",
    ice: "#51c4e7",
    steel: "#9eb7b8",
    ghost: "#7b62a3",
    dark: "#707070"
}


const fetchPokemons = async () => {
    for (let i = 1; i <= count; i++) {
        await getPokemons(i)
    }
}

const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data);
    createPokemonCard(data)
}

fetchPokemons()

const createPokemonCard = (e) => {
    const pokemonElement = document.createElement("div")
    pokemonElement.classList.add("pokemon-card")
    // console.log(e);
    // console.log(e.id);


    //pokemon id
    if (e.id < 10) {
        e.id = `00${e.id}`
    } else if (e.id < 100) {
        e.id = `0${e.id}`
    } else {
        e.id
    }

    let pokeName = e.name.split("-").join(" ")

    //pokemon type
    const pokemonType = e.types[0].type.name;
    // console.log(pokemonType);
    const colors = color[pokemonType]
    pokemonElement.style.backgroundColor = colors

    const template = `  
    <div class="pokemon-image">
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e.id}.png" alt="">
    </div>
    <div class="pokemon-info">
        <span class="number">#${e.id}</span>
        <h3 class="name">${pokeName}</h3>
        <small class="type">Type : <span>${pokemonType}</span></small>
    </div>`
    pokemonElement.innerHTML = template
    container.appendChild(pokemonElement)


}


