import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

const LoadingBar = () => (
  <ProgressBar progress={0.8} color={Colors.blue800} indeterminate={false} style={{width: 300, marginLeft:50}} />
);

export default LoadingBar;
