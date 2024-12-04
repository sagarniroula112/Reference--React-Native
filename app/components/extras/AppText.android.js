import React from "react";
import { Text, StyleSheet } from "react-native";

// <Heading>My Heading</Heading>
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontFamily: "Roboto",
    fontSize: 18,
  },
});

export default AppText;
