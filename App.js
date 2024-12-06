import React, { useState } from "react";
import { View, TextInput, SafeAreaView, Text, Switch } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <SafeAreaView>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder={"Category"}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </SafeAreaView>
  );
}
