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


const MainSecond = ({ navigation: { navigate } }) => (
  <View>
    <View style={styles.textContainer}>
    <LogoText/>
    </View>
    <WavyHeader customStyles={styles.svgCurve} color="#92e8d3" />
    <Image source={require("../../styles/assets/bulby.png")} style={styles.image}/>
    <WavyBackgroundHeader customStyles={styles.svgCurve} color="#92e8d3" />
    <Text style={styles.title}> Getting started </Text>
    <Text style={styles.text}> Select the condition of the card. Then import or take an image of the card </Text>
    <Image source={require("../../styles/assets/pokemoney_in_phone.png")} style={styles.imageVector}/>
    <TouchableOpacity style={styles.buttonContainer}
      onPress={() => { navigate('MainThird'); }}
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

export default MainSecond;
