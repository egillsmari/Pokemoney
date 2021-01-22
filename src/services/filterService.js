import CSS_COLOR_NAMES from '../styles/assets/colors';
import POKEMON_NAMES from '../styles/assets/pokemons';

export const filterService = async responseJson => {
  let isPokemon = false;
  let pokemonColor = "Gray";
  let pokemonDescription = "No description available"
  let pokemonName = "Pokemon not found"
  let jsonFiltered = {};
  console.log(CSS_COLOR_NAMES);
  responseJson.responses.forEach((item, i) => {
    item.textAnnotations.forEach((text, i) => {
      console.log(text.description);
      if(text.description === "Pokemon" || text.description === "Pokémon"){
        isPokemon = true;
        console.log("this is a pokemon wow")
      }
      
        if(POKEMON_NAMES.includes(text.description)){
          console.log("pokemon name:", text.description)
          pokemonName = text.description;
        }
        if(text.description > 80){
          pokemonDescription = item.description
        }
    });
    
    item.labelAnnotations.forEach((label, i) => {
      console.log(label.description)
      if(CSS_COLOR_NAMES.includes(label.description)){
        pokemonColor = label.description;
        console.log("The color:", label.description)
      }
    });
    
  });
    if(isPokemon){
      return {"name": pokemonName, "description": pokemonDescription, "pokemonColor": pokemonColor};
    }
    else{
      return isPokemon;
    }
}

