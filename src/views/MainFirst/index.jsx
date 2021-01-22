import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import WavyHeader from '../../components/header';
import WavyBackgroundHeader from '../../components/backgroundHeader';
import LogoText from '../../components/logoText';

const MainFirst = ({ navigation: { navigate } }) => (
  <View>
    <View style={styles.textContainer}>
    <LogoText/>
    </View>
    <WavyHeader customStyles={styles.svgCurve} color="#ffd654"/>
    <Image source={require("../../styles/assets/pika.png")} style={styles.image}/>
    <WavyBackgroundHeader customStyles={styles.svgCurve} color="#ffd654" />
      <Text style={styles.title}> Welcome to Pokemoney! </Text>
      <Text style={styles.infoText}>Where you can instantly see</Text>
      <Text style={styles.infoTextSecond}>the price of your pokemon cards</Text>
    <TouchableOpacity style={styles.buttonContainer}
      onPress={() => { navigate('MainSecond'); }}
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

export default MainFirst;
