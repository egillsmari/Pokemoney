import React from 'react';
import { View, Image } from 'react-native';

export default function LogoText() {
  return (
    <View>
      <Image source={require("../../styles/assets/PokemoneyText.png")} style={{marginTop:80, marginLeft:15, width:410, height:60}} />
    </View>
  );
}
