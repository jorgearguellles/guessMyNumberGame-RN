import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from "../../constants/colors";

export default function NumberContainer({children}) {

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
};

const deviceWidth = Dimensions.get('window').width; // window exclude Status bar

const styles = StyleSheet.create({
  container:{
    borderWidth: 4,
    borderColor: Colors.accents500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accents500,
    fontSize: 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
