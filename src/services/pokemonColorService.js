import CSS_COLOR_NAMES from '../styles/assets/colors';

export const pokemonColorService = async responseJson => {
  console.log(CSS_COLOR_NAMES);
  responseJson.responses.forEach((item, i) => {
    item.forEach((descript, i) => {
      if(CSS_COLOR_NAMES.includes(descript.description)){
        console.log("The color:", descript.description)
        return descript.description
      }
    });
    return "Gray";
    });
}
