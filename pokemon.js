const titulo = document.querySelector(".titulo")
titulo.innerHTML = `
<div>
        <h1>POKEDEX</h1>
        <input type="text" id="buscar" placeholder="Buscar Pokémon...">
        <button id="btn">Buscar</button>
        <div id="panel"></div>
</div>`
btn.onclick = function() {
  var buscar = document.getElementById("buscar").value.toLowerCase();
  if (buscar.trim() === "") {
    return;
}

  const pokemonEncontrado = pokemonData.find(pokemon => pokemon.name.toLowerCase() === buscar);

  if (pokemonEncontrado) {
    panel.innerHTML = `
      <div>
        <h3 class="nombreP">${pokemonEncontrado.name}</h3>
        <img src="./img/${pokemonEncontrado.id.toString().padStart(3, "0")}.png" alt="">
        <div class="centrar">
          ${pokemonEncontrado.types.map(type => `<span class="${type.toLowerCase()}">${type}</span>`).join(' ')}
          <button class="ver-detalles-button" data-name="${pokemonEncontrado.name}">Ver Detalles</button>
        </div>
      </div>`;
  } else {
    panel.innerHTML = `
    <div>
      <h3 class="nombreP">Pokemon no Encontrado</h3>
      <img src="./img/MissingNO.webp" alt="" class="missigno">
      <div class="centrar">
    </div>
  </div>`;
  }
}

const pkd = document.querySelector(".pkd");
const pokemonData = [
  { name: "Bulbasaur", id: 1, types: ["Planta", "Veneno"]},
  { name: "Ivysaur", id: 2, types: ["Planta", "Veneno"]},
  { name: "Venusaur", id: 3, types: ["Planta", "Veneno"]},
  { name: "Charmander", id: 4, types: ["Fuego"] },
  { name: "Charmeleon", id: 5, types: ["Fuego"] },
  { name: "Charizard", id: 6, types: ["Fuego", "Volador"] },
  { name: "Squirtle", id: 7, types: ["Agua"] },
  { name: "Wartortle", id: 8, types: ["Agua"] },
  { name: "Blastiose", id: 9, types: ["Agua"] },
  { name: "Caterpie", id: 10, types: ["Bicho"] },
  { name: "Metapod", id: 11, types: ["Bicho"] },
  { name: "Butterfree", id: 12, types: ["Bicho", "Volador"] },
  { name: "Weedle", id: 13, types: ["Bicho", "Veneno"] },
  { name: "Kakuna", id: 14, types: ["Bicho", "Veneno"] },
  { name: "Beedril", id: 15, types: ["Bicho", "Veneno"] },
  { name: "Pidgey", id: 16, types: ["Normal", "Volador"] },
  { name: "Pidgeotto", id: 17, types: ["Normal", "Volador"] },
  { name: "Pidgeot", id: 18, types: ["Normal", "Volador"] },
  { name: "Rattata", id: 19, types: ["Normal"] },
  { name: "Raticate", id: 20, types: ["Normal"] },
  { name: "Spearrow", id: 21, types: ["Normal", "Volador"] },
  { name: "Fearow", id: 22, types: ["Normal", "Volador"] },
  { name: "Ekans", id: 23, types: ["Veneno"] },
  { name: "Arbok", id: 24, types: ["Veneno"] },
  { name: "Pikachu", id: 25, types: ["Eléctrico"] },
  { name: "Raichu", id: 26, types: ["Eléctrico"] },
  { name: "Sandshrew", id: 27, types: ["Tierra"] },
  { name: "Sandslash", id: 28, types: ["Tierra"] },
  { name: "Nidoran", id: 29, types: ["Veneno"] },
  { name: "Nidorina", id: 30, types: ["Veneno"] },
  { name: "Nidoqueen", id: 31, types: ["Veneno", "Tierra"] },
  { name: "Nidoran", id: 32, types: ["Veneno"] },
  { name: "Nidorino", id: 33, types: ["Veneno"] },
  { name: "Nidoking", id: 34, types: ["Veneno", "Tierra"] },
  { name: "Clefairy", id: 35, types: ["Hada"] },
  { name: "Clefable", id: 36, types: ["Hada"] },
  { name: "Vulpix", id: 37, types: ["Fuego"] },
  { name: "Ninetails", id: 38, types: ["Fuego"] },
  { name: "Jigglypuff", id: 39, types: ["Normal", "Hada"] },
  { name: "Wigglytuff", id: 40, types: ["Normal", "Hada"] },
  { name: "Zubat", id: 41, types: ["Veneno", "Volador"] },
  { name: "Golbat", id: 42, types: ["Veneno", "Volador"] },
  { name: "Oddish", id: 43, types: ["Planta", "Veneno"] },
  { name: "Gloom", id: 44, types: ["Planta", "Veneno"] },
  { name: "Vileplume", id: 45, types: ["Planta", "Veneno"] },
  { name: "Paras", id: 46, types: ["Bicho", "Planta"] },
  { name: "Parasect", id: 47, types: ["Bicho", "Planta"] },
  { name: "Venonat", id: 48, types: ["Bicho", "Veneno"] },
  { name: "Venomoth", id: 49, types: ["Bicho", "Veneno"] },
  { name: "Digglet", id: 50, types: ["Tierra"] },
  { name: "Dugtrio", id: 51, types: ["Tierra"] },
  { name: "Meowth", id: 52, types: ["Normal"] },
  { name: "Persian", id: 53, types: ["Normal"] },
  { name: "Psyduck", id: 54, types: ["Agua"] },
  { name: "Golduck", id: 55, types: ["Agua"] },
  { name: "Mankey", id: 56, types: ["Lucha"] },
  { name: "Primeape", id: 57, types: ["Lucha"] },
  { name: "Growlithe", id: 58, types: ["Fuego"] },
  { name: "Arcanine", id: 59, types: ["Fuego"] },
  { name: "Poliwag", id: 60, types: ["Agua"] },
  { name: "Poliwhril", id: 61, types: ["Agua"] },
  { name: "Poliwrath", id: 62, types: ["Agua", "Lucha"] },
  { name: "Abra", id: 63, types: ["Psíquico"] },
  { name: "Kadabra", id: 64, types: ["Psíquico"] },
  { name: "Alakazam", id: 65, types: ["Psíquico"] },
  { name: "Machop", id: 66, types: ["Lucha"] },
  { name: "Machoke", id: 67, types: ["Lucha"] },
  { name: "Machamp", id: 68, types: ["Lucha"] },
  { name: "Bellsprout", id: 69, types: ["Planta", "Veneno"] },
  { name: "Weepinbell", id: 70, types: ["Planta", "Veneno"] },
  { name: "Victreebel", id: 71, types: ["Planta", "Veneno"] },
  { name: "Tentacool", id: 72, types: ["Agua", "Veneno"] },
  { name: "Tentacruel", id: 73, types: ["Agua", "Veneno"] },
  { name: "Geodude", id: 74, types: ["Roca", "Tierra"] },
  { name: "Graveler", id: 75, types: ["Roca", "Tierra"] },
  { name: "Golem", id: 76, types: ["Roca", "Tierra"] },
  { name: "Ponyta", id: 77, types: ["Fuego"] },
  { name: "Rapidash", id: 78, types: ["Fuego"] },
  { name: "Slowpoke", id: 79, types: ["Agua", "Psíquico"] },
  { name: "Slowbro", id: 80, types: ["Agua", "Psíquico"] },
  { name: "Magnemite", id: 81, types: ["Eléctrico", "Acero"] },
  { name: "Magneton", id: 82, types: ["Eléctrico", "Acero"] },
  { name: "Farfectch", id: 83, types: ["Normal"] },
  { name: "Doduo", id: 84, types: ["Normal", "Volador"] },
  { name: "Dodrio", id: 85, types: ["Normal", "Volador"] },
  { name: "Seel", id: 86, types: ["Agua"] },
  { name: "Dewgong", id: 87, types: ["Agua", "Hielo"] },
  { name: "Grimer", id: 88, types: ["Veneno"] },
  { name: "Muk", id: 89, types: ["Veneno"] },
  { name: "Shellder", id: 90, types: ["Agua"] },
  { name: "Gengar", id: 94, types: ["Fantasma", "Veneno"] },
  { name: "Chansey", id: 113, types: ["Normal"] },
  { name: "Lapras", id: 131, types: ["Agua", "Hielo"] },
  { name: "Snorlax", id: 143, types: ["Normal"] },
  { name: "Articuno", id: 144, types: ["Hielo", "Volador"] },
  { name: "Zapdos", id: 145, types: ["Eléctrico", "Volador"] },
  { name: "Moltres", id: 146, types: ["Fuego", "Volador"] },
  { name: "Dragonite", id: 149, types: ["Dragón", "Volador"] },
  { name: "Mew", id: 151, types: ["Psíquico"] },
  { name: "Mewtwo", id: 150, types: ["Psíquico"] },
];

const typeAdvantages = {
  "Planta": ["Agua", "Tierra", "Roca"],
  "Fuego": ["Planta", "Hielo", "Bicho", "Acero"],
  "Agua": ["Fuego", "Tierra", "Roca"],
  "Veneno": ["Planta", "Hada"],
};

const typeWeaknesses = {
  "Planta": ["Fuego", "Hielo", "Volador", "Bicho"],
  "Fuego": ["Agua", "Tierra", "Roca"],
  "Agua": ["Planta", "Eléctrico"],
  "Veneno": ["Tierra", "Psíquico"],
  "Normal": ["Lucha"],
  "Eléctrico": ["Tierra"],
  "Bicho": ["Volador", "Roca", "Fuego"],
  "Fantasma": ["Fantasma", "Siniestro"],
  "Hielo": ["Lucha", "Roca", "Fuego", "Acero"],
  "Volador": ["Roca", "Eléctrico", "Hielo"],
  "Dragón": ["Hielo", "Dragón", "Hada"],
  "Psíquico": ["Bicho", "Fantasma", "Siniestro"],
  "Tierra": ["Agua", "Hielo", "Planta"],
  "Hada": ["Acero", "Veneno"],
  "Acero": ["Lucha", "Fuego", "Tierra"],
  "Lucha": ["Psíquico", "Hada"]
};

const typeResistances = {
  "Agua": ["Acero", "Fuego", "Hielo", "Agua"],
  "Fuego": ["Bicho", "Acero", "Hada", "Planta", "Fuego", "Hielo"],
  "Planta": ["Agua", "Planta", "Eléctrico", "Tierra"],
  "Veneno": ["Planta", "Lucha"],
  "Normal": ["Fantasma"],
  "Eléctrico": ["Eléctrico", "Volador", "Acero"],
  "Bicho": ["Lucha", "Planta"],
  "Fantasma": ["Lucha", "Veneno", "Normal", "Bicho"],
  "Hielo": ["Hielo"],
  "Volador": ["Lucha", "Bicho", "Planta", "Tierra"],
  "Dragón": ["Agua", "Planta", "Fuego", "Eléctrico"],
  "Psíquico": ["Lucha", "Psíquico"],
  "Tierra": ["Roca", "Acero", "Eléctrico"],
  "Hada": ["Dragón", "Lucha", "Siniestro"],
  "Lucha": ["Acero", "Hielo", "Roca", "Siniestro"]
};

pokemonData.forEach(pokemon => {
  const li = document.createElement("li");
  const weakness = pokemon.types.reduce((acc, type) => {
    const typeWeaknessesList = typeWeaknesses[type] || [];
    return acc.concat(typeWeaknessesList);
  }, []);
  
  li.innerHTML = `
  <div>
    <h3 class="nombre">${pokemon.name}</h3>
    <img src="./img/${pokemon.id.toString().padStart(3, "0")}.png" alt="">
    <div class="centrar">
        ${pokemon.types.map(type => `<span class="${type.toLowerCase()}">${type}</span>`).join(' ')}
        <button class="ver-detalles-button" data-name="${pokemon.name}">Ver Detalles</button>
    </div>
  </div>`;

  pkd.appendChild(li);
    
  const verDetallesButton = li.querySelector(".ver-detalles-button");
    verDetallesButton.addEventListener("click", () => {
      showWeaknesses(pokemon);
      localStorage.setItem("PokemonSeleccionado", JSON.stringify(pokemon));
      localStorage.setItem("Pokedex", JSON.stringify(pokemonData))
    });
  });

console.log(pokemonData)




