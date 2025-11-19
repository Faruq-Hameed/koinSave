import React from "react";

import { StyleSheet, View, ViewStyle, Text } from "react-native";

const ErrorTexts: React.FC<{ style?: ViewStyle; message: string }> = ({
  style,
  message,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textColor}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  textColor: {
    marginTop: -8,
    color: "#CC0000",
    fontSize: 12,
  },
});

export default ErrorTexts;
