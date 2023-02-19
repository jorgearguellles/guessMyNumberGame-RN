import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card ({children}){
  return(
    <View style={styles.card}>{children}</View>
  )
};

export default Card;

const styles = StyleSheet.create({
  card:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // Android only property to generate box shadow effect
    // On iOS we need next 4 properties to generate box shadow effect
    shadowColor: 'black', // iOS only property
    shadowOffset: {width: 4, height: 4}, // iOS only property
    shadowRadius: 6, // iOS only property
    shadowOpacity: 0.70, // iOS only property
  },
})