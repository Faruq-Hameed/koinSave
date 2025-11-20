import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ArrowCircle from "../../../components/ArrowCircle";

/**Action box component for send or add money on dashboard */
const Action: React.FC<{ isSend: boolean }> = ({ isSend = true }) => {
  return (
    <View style={styles.container}>
      <ArrowCircle isArrowUp={isSend} />
      <Text style={styles.text}>{isSend ? "Send Money" : "Add Money"} </Text>
    </View>
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
