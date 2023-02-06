import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
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
