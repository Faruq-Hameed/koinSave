import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**  A component that displays a header box for authentication screens.
 * It shows an icon, title, and subtitle based on the isLogin prop.
 */
const AuthHeaderBox: React.FC<{
  isLogin?: boolean;
}> = ({ isLogin = true }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/splash-icon.png")}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        {isLogin ? "Kindly Login" : "Create Account"}
      </Text>
      <Text>{isLogin ? "Welcome back" : "Start saving with KoinSave"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    // marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default AuthHeaderBox;
