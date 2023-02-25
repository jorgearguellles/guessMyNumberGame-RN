import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from '../components/game/NumberContainer';
import GuessLogItem from '../components/game/GuessLogItem';
import InstructionText from '../components/ui/InstructionText';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Strings from "../constants/strings";

let minBoundary = 1, maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
  /**
   * This function, called generateRandomBetween, 
   * takes three parameters: min, max, and exclude. 
   * It returns a random number between min and max, 
   * excluding the exclude value if it is passed as a parameter.
   * 
   * The first line of the function generates a random number between 
   * min (inclusive) and max (exclusive) using the Math.random() method.
   * 
   * This generates a number between 0 and 1, which is then multiplied 
   * by the range between max and min and rounded down using Math.floor().
   * 
   * The resulting number is then added to min, which shifts the range 
   * to start at min.
   * The if statement checks if the randomNum generated equals the exclude
   * value passed in as a parameter. If they are equal, the function calls 
   * itself recursively until a different value is generated.
   * If the generated value is not equal to exclude, the function returns
   * the generated value.
   * In summary, this function generates a random number between min and max,
   * excluding the exclude value if it is passed as a parameter.
   */
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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if(currentGuess === userNumber){
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
  }, [])
  
  function nextGuessHandler(direction){

    /**
     * This function appears to be a handler function for the next guess in
     * a number guessing game. It takes a single parameter direction that
     * indicates whether the next guess should be higher or lower than
     * the current guess. 
     * 
     * The function first checks if the direction specified by the user is
     * valid based on the current guess. If the user specifies that the next
     * guess should be lower than the current guess but the current guess is 
     * already lower than the target number or vice versa, the function 
     * displays an alert message to indicate that the user is lying.
     * 
     * If the direction is valid, the function updates the boundaries of
     * the number range based on the direction specified. If the direction
     * is to guess lower, the maximum boundary of the range is set to the 
     * current guess. If the direction is to guess higher, the minimum boundary
     * of the range is set to the current guess plus one.
     * 
     * The function then generates a new random number within the
     * updated range using the generateRandomBetween() function and sets it
     * as the current guess using the setCurrentGuess() function.
     * It also adds the new guess to the array of previous guesses using
     * the setGuessRounds() function.
     */

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

  const guessRoundsListLength = guessRounds.length;

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
      <View style={styles.listContainer}>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData)=> (<GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index} 
            guess={itemData.item}
            />
          )}
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
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});