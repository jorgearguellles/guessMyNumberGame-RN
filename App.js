import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient 
      style={styles.rootScreen}
      colors={['#4e0329', '#ddb52f']}
      >
      <StatusBar style='light'/>
      <StartGameScreen />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  }
});
