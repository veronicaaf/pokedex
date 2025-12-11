let currentPokemon = 1;

async function loadPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    document.getElementById("pokemon-img").src = data.sprites.front_default;
    document.getElementById("pokemon-id").textContent = data.id;
    document.getElementById("pokemon-name").textContent =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
}

document.getElementById("prev").onclick = () => {
    if (currentPokemon > 1) currentPokemon--;
    loadPokemon(currentPokemon);
};

document.getElementById("next").onclick = () => {
    currentPokemon++;
    loadPokemon(currentPokemon);
};

document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        currentPokemon = e.target.value.toLowerCase();
        loadPokemon(currentPokemon);
    }
});

loadPokemon(currentPokemon);
