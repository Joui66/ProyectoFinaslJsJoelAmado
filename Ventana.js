function showWeaknesses(pokemon) {
    const weaknesses = new Set();
    const resistances = new Set();
  
    pokemon.types.forEach(type => {
      const typeWeaknessesList = typeWeaknesses[type] || [];
      const typeResistancesList = typeResistances[type] || [];
  
      typeWeaknessesList.forEach(weakness => {
        if (!typeResistancesList.includes(weakness)){
          weaknesses.add(weakness);
        }
      });
  
      typeResistancesList.forEach(resistance => {
        if (!typeWeaknessesList.includes(resistance) && !weaknesses.has(resistance)) {
          resistances.add(resistance);
        }
      });
    });
    
  
    const weaknessesString = Array.from(weaknesses).join(', ');
    const resistancesString = Array.from(resistances).join(', ');
  
    Swal.fire({
      title: `${pokemon.name}`,
      text: `Pokémon tipo ${pokemon.types.join("/")}. Es debil a los Pokemon de tipo ${weaknessesString || "Ninguna"}. Tiene resistencia a los Pokemon de tipo ${resistancesString || "Ninguna"}. 
      Registra el número ${pokemon.id} en la Pokédex nacional.`,
      imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toString().padStart(3, "0")}.png`,
    });
  }