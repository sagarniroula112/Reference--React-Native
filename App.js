import React, { useState } from "react";
import { View, TextInput, SafeAreaView, Text, Switch } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <SafeAreaView>
      <AppPicker icon="apps" placeholder={"Category"} />
      <AppTextInput icon="email" placeholder="Email" />
    </SafeAreaView>
  );
}
