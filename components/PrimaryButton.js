import { Text, View, StyleSheet } from "react-native"

function PrimaryButton(props) {
  const {children} = props;

  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({});