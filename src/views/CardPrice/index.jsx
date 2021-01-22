import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import styles from './styles';
import WavyHeader from '../../components/header';
import WavyBackgroundHeader from '../../components/backgroundHeader';
import LogoText from '../../components/logoText';


export default class CardPrice extends React.Component {
  
  render(){
    const { params } = this.props.navigation.state;

    console.log(params.pokemonInfoJson);
    console.log(params.pokemonImage);
    return(
      <View style={{backgroundColor: "#bfe6fd", opacity: 0.8 }}>
        <Image source={{ uri: params.pokemonImage }} style={{width: 200, height: 280, position: "absolute", right: 110, top: 150 }}/>
        <View style={styles.textContainer}>
          <LogoText/>
          <View style={styles.infoContainer}>
          <Text style={{color: "#bfe6fd",
            fontSize: 40,
            fontWeight: "600",
            marginLeft: 125,
            marginTop: 10,
          }}>
            {params.pokemonInfoJson.name}
          </Text>
          <Text
          style={{color: "#bfe6fd",
            fontSize: 18,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            }}
          >
          {params.pokemonInfoJson.description}
          </Text>
          </View>
        </View>
      </View>
    );
  };
};


