import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  };

  let screenToRender = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber){
    screenToRender = <GameScreen />;
  }

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
        { screenToRender }
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
