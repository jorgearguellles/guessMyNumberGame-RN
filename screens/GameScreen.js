import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
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

function GameScreen({userNumber, onGameOver}) {

  const initialGuess = generateRandomBetween(1,100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if(currentGuess === userNumber){
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
  }, [])
  
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
    setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, Strings.LOWER)} >
              <Ionicons name='md-remove' size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, Strings.GREATER)} >
              <Ionicons name='md-add' size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData)=> <Text>{itemData.item}</Text>}
          keyExtractor={(item)=> item}
          />
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
  InstructionText:{
    marginBottom: 12,
  },
  buttonsContainer:{
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
});