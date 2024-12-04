import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});

export default styles;
