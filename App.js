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
        alignItems: "center", // align along vertical axis (secondary axis) // alignment in one line
        alignContent: "center", // determines alignment of entire content, only works with wrapping
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }} />
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      />
    </View>
  );
}
