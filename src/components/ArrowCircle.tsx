import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type ArrowCircleProps = {
  isArrowUp?: boolean;
  size?: number;
};

const ArrowCircle: React.FC<ArrowCircleProps> = ({
  isArrowUp = true,
  size = 50,
}) => {
  const iconName = isArrowUp ? "arrow-up" : "arrow-down";

  return (
    <View
      style={[
        styles.circle,
        isArrowUp ? styles.greenBg : styles.redBg,
      ]}
    >
      <AntDesign
        name={iconName}
        size={size * 0.5}
        color={isArrowUp ? "green" : "red"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 0.1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderColor: "grey"
  },

  greenBg: {
    // backgroundColor: "green",
    backgroundColor: "white",

  },

  redBg: {
    backgroundColor: "white",
  },
});

export default ArrowCircle;
