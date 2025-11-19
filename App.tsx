import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/Navigations/RootNavigator";

export default function App() {
  return (
    // <Image
    //   source={require("./assets/splash-icon.png")}
    //   style={{ width: 100, height: 100 }}
    // />
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
