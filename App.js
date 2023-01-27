import { StyleSheet, ImageBackground } from 'react-native';
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
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
        >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  imageBackground:{
    opacity: 0.15,
  }
});
