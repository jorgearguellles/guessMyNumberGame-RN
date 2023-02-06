import { Text, View, StyleSheet, Pressable } from "react-native"
import Colors from "../../constants/colors";

function PrimaryButton(props) {
  const {children, onPress} = props;

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={({pressed}) => 
          pressed 
            ? [styles.buttonInnerContainer, styles.pressed] 
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}
        >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer:{
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // Android only property to generate box shadow effect
    // On iOS We need next 4 properties to generate box shadow effect
    shadowColor: 'black', // iOS only property
    shadowOffset: {width: 2, height: 2}, // iOS only property
    shadowRadius: 4, // iOS only property
    shadowOpacity: 0.40, // iOS only property
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,

  },
});