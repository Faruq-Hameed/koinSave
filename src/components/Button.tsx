import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  title: string;
  loading?: boolean;
  bgColor?: string;
  marginTop?: number;
  color?:string
  disable?: boolean
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  loading = false,
  bgColor = "green",
  marginTop=20,
  color="white",
  disable=false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor, marginTop }]}
      onPress={onPress}
      disabled={disable}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.title, {color: color}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    width: "90%",
    margin: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default Button;
