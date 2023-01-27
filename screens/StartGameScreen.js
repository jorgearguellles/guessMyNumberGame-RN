import { Text, TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer:{
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4, // Android only property to generate box shadow effect
    // On iOS We need next 4 properties to generate box shadow effect
    shadowColor: 'black', // iOS only property
    shadowOffset: {width: 4, height: 4}, // iOS only property
    shadowRadius: 6, // iOS only property
    shadowOpacity: 0.70, // iOS only property
  },
  numberInput:{
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})