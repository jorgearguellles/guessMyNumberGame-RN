import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen(props) {

  const {onPickNumber} = props;
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberedInputHandler (enteredText){
    setEnteredNumber(enteredText);
  };

  function resetInputHandler(){
    setEnteredNumber('');
  };

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberedInputHandler}
        />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // Android only property to generate box shadow effect
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: 'black', // iOS only property
    shadowOffset: {width: 4, height: 4}, // iOS only property
    shadowRadius: 6, // iOS only property
    shadowOpacity: 0.70, // iOS only property
  },
  numberInput:{
    height: 50,
    width: 50,
    fontSize: 32,
    marginBottom: 40,
    borderBottomColor: Colors.accents500,
    borderBottomWidth: 2,
    color: Colors.accents500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer:{
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  }
})