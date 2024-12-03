import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  // console.log(Dimensions.get("screen")); // Get dimensions of the device. Problem: Rotation won't update the dimensions.
  const deviceOrientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%", // DIPs == Density Independent Pixels, Physical Pixels = DIPs x Scale Factor of device
          height: deviceOrientation === "landscape" ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
