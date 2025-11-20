import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ClickableText from "./Clickable";

/** A component that displays bottom texts for authentication screens 
 it has a ClickableText link to switch between login and signup screens.
 */
const AuthBottomTexts: React.FC<{ isLogin?: boolean }> = ({
  isLogin = true,
}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {isLogin ? (
        <Text style={styles.text}>
          Don't have an account?{" "}
          <ClickableText
            label="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </Text>
      ) : (
        <Text style={styles.text}>
          Already have an account?{" "}
          <ClickableText
            label="Sign In"
            onPress={() => navigation.navigate("Login")}
          />
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
  },
  text: {},
});

export default AuthBottomTexts;
