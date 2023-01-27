import { Text, TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2}/>
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
    shadowColor: 'black', // iOS only property to generate box shadow effect
    shadowOffset: {width: 4, height: 4}, // iOS only property to generate box shadow effect
    shadowRadius: 6, // iOS only property to generate box shadow effect
    shadowOpacity: 0.70, // iOS only property to generate box shadow effect
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