import { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native'


import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

const min = 1, max = 100;

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

function GameScreen({userNumber}) {

  const initialGuess = generateRandomBetween(min,max, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <Text>+ -</Text>
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
});

