import { Text, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  
  return (
    <View>
      <Text>StartGameScreen</Text>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen