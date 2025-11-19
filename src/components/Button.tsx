import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  title: string;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    width: "90%",
    margin: "auto",
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default Button;
