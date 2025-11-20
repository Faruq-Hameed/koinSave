import React from "react";

import { StyleSheet, View, ViewStyle, Text } from "react-native";

const ErrorTexts: React.FC<{ style?: ViewStyle; message: string }> = ({
  style,
  message,
}) => {
  return <Text style={styles.textColor}>{message}</Text>;
};

const styles = StyleSheet.create({
  textColor: {
    // marginTop: -8,
    color: "#CC0000",
    fontSize: 12,
  },
});

export default ErrorTexts;
