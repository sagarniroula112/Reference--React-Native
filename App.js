import React from "react";
import { View } from "react-native";
import { StyleSheet, Platform } from "react-native";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton
        title={"Login"}
        onPress={() => console.log("Tapped.")}
      ></AppButton>
    </View>
  );
}
