import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import LogoText from '../../components/logoText';
import LoadingBar from '../../components/progressBar/index';

const MainLoading = ({ navigation: { navigate } }) => (
  <View>
    <LogoText/>
    <Text style={{fontSize: 40}}>
      MainLoading
    </Text>
    <LoadingBar />
    <TouchableOpacity
      onPress={() => { navigate('Scanner'); }}
    >
      <Text style={{fontSize: 30}}>Start scanning</Text>
    </TouchableOpacity>
  </View>
);

export default MainLoading;
