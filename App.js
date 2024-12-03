import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // align along horizontal axis (main axis)
        alignItems: "center", // align along vertical axis (secondary axis)
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 200,
          alignSelf: "flex-start",
        }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 200 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 200 }} />
    </View>
  );
}
