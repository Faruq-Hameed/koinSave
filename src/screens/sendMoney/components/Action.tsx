import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ArrowCircle from "../../../components/ArrowCircle";

/**Action box component for send or add money on dashboard */
const Action: React.FC<{ isSend: boolean, onPress: ()=>void }> = ({ isSend = true, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ArrowCircle isArrowUp={isSend} />
      <Text style={styles.text}>{isSend ? "Send Money" : "Add Money"} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fafafaff",
    // borderWidth: 1,
    alignItems: "center",
    padding: 15,
    // iOS shadow
    rowGap: 10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Android shadow
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Action;
