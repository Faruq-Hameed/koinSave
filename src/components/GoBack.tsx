import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

/**A navigation component to go back */
const GoBackNav: React.FC<{ goBack: () => void }> = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <AntDesign name={"arrow-left"} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // left: 20,
    // top: 20,
  },
});

export default GoBackNav;
