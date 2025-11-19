import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Clickable: React.FC<{
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => {
  return (
    <Text onPress={onPress} style={styles.container}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#1B5E20",
    fontWeight: "bold",
  },
});

export default Clickable;