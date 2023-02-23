import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accents500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // Android box shadow
    elevation: 4,
    // iOS box shadow
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText:{
    fontFamily: 'open-sans',
  },
})