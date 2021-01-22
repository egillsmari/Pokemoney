import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import WavyHeader from '../../components/header';
import WavyBackgroundHeader from '../../components/backgroundHeader';
import LogoText from '../../components/logoText';


const MainThird = ({ navigation: { navigate } }) => (
  <View>
    <View style={styles.textContainer}>
      <LogoText/>
    </View>
    <WavyHeader customStyles={styles.svgCurve} color="#fccb6f" />
    <Image source={require("../../styles/assets/charz.png")} style={styles.image}/>
    <WavyBackgroundHeader customStyles={styles.svgCurve} color="#fccb6f" />
    <Text style={styles.title}> Taking the picture </Text>
    <Image source={require("../../styles/assets/pokemoney_pokemon.png")} style={styles.imageVector}/>
    <Text style={styles.text}> Keep the card in the center and make sure the picture is focus </Text>
    <TouchableOpacity style={styles.buttonContainer}
      onPress={() => { navigate('Scanner'); }}
    >
    <View style={styles.buttonContainer}>
    <View style={styles.extraWrapper}>
    <View style={styles.wrapper}>
      <Text style={styles.nextButton}>Next</Text>
    </View>
    </View>
    </View>
    </TouchableOpacity>
  </View>
);

export default MainThird;
