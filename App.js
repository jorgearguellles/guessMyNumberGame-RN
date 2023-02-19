import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  const [fontsLoader, setFontsLoader] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoader){
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  function gameOverHandler(){
    setIsGameOver(true);
  };

  let screenToRender = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber){
    screenToRender = <GameScreen 
      userNumber={userNumber} 
      onGameOver={gameOverHandler} 
    />;
  }

  if(isGameOver && userNumber){
    screenToRender = <GameOverScreen />
  }

  return (
    <LinearGradient 
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accents500]}
      >
      <StatusBar style='light'/>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
        >
        <SafeAreaView style={styles.rootScreen}>
          { screenToRender }
        </SafeAreaView>
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
