import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

export default function Title(props) {
  const {children} = props;

  return (
    <Text style={styles.title}>
      {children}
    </Text>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accents500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accents500,
    padding: 12,
  }
});
