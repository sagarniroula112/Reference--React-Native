import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
