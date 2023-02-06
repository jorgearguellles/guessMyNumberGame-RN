import {Text, StyleSheet} from 'react-native';

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
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  }
});
