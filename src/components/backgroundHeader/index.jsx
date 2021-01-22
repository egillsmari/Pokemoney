import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';



export default function WavyBackgroundHeader({ customStyles, color }) {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: color, height: 280, opacity:0.4, marginTop:160 }}>
        <Svg
          height="99%"
          width="100%"
          viewBox="0 0 1440 380"
          style={{ position: 'absolute', top: 190 }}
        >
          <Path
            fill={color}
            fill-opacity={0.2}
            d="M0,160L30,138.7C60,117,120,75,180,96C240,117,300,203,360,240C420,277,480,267,540,224C600,181,660,107,720,80C780,53,840,75,900,80C960,85,1020,75,1080,85.3C1140,96,1200,128,1260,133.3C1320,139,1380,117,1410,106.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}
