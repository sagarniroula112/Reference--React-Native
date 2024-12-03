import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, Alert, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color={"orange"}
        title="Click Me"
        onPress={
          () =>
            // Alert.alert("My title", "My message", [
            //   { text: "Yes", onPress: () => console.log("Yes") },
            //   { text: "No", onPress: () => console.log("No") },
            // ])
            Alert.prompt("My title", "My message", (text) => console.log(text)) // doesn't work on android
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lightblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
