import {Text, View, StyleSheet} from 'react-native'

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Text>Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
        <Text>+ -</Text>
      </View>
      <View>
        <Text>LOGS ROUNDS</Text>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  }
});

