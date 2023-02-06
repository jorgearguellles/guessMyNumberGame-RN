import { View, Text, StyleSheet } from 'react-native';
import Colors from "../../constants/colors";

export default function NumberContainer(props) {
  const {children} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    borderWidth: 4,
    borderColor: Colors.accents500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accents500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
