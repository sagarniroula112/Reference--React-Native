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
        // alignContent: "center", // determines alignment of entire content, only works with wrapping
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, // width or height
          // flexGrow: 1, // the view will grow to fill available space
          // flexShrink: 1, // this item can get shrunk in case of other items being overflown
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          top: 20, // they will work as by default, the items are position: relative, without changing layouts
          left: 20,
          backgroundColor: "gold",
          width: 100,
          height: 100,
          position: "absolute",
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
