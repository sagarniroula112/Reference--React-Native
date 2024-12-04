import React from "react";
import { Text } from "react-native";

import styles from "./AppText/styles";

// <Heading>My Heading</Heading>
function AppText({ children }) {
  return <Text style={styles}>{children}</Text>;
}

export default AppText;