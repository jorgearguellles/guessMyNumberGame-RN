import { useState } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native'

import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import Strings from "../constants/strings";

let minBoundary = 1, maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

function GameScreen({userNumber}) {

  const initialGuess = generateRandomBetween(minBoundary,maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction){

    if((direction === Strings.LOWER && currentGuess < userNumber) ||
    (direction === Strings.GREATER && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if(direction === Strings.LOWER){
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };



  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, Strings.LOWER)} style={styles.buttonContainer}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, Strings.GREATER)} style={styles.buttonContainer}>+</PrimaryButton>
        </View>
      </View>
      <View>
        <Text>LOGS ROUNDS</Text>
      </View>
    </View>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer:{
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});