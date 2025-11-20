import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useUser } from "../../../hooks/useUser";

const SendMoneySummary: React.FC<{ amount: string }> = ({ amount }) => {
  const {
    user: { balance },
  } = useUser();
  const balanceAfter = parseFloat(balance) - parseFloat(amount);
  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <Text>Available balance</Text>
        <Text>{balance}</Text>
      </View>
      <View style={styles.tableContainer}>
        <Text>Transaction fee</Text>
        <Text>0</Text>
      </View>
      <View style={styles.tableContainer}>
        <Text>Amount to send</Text>
        <Text>{amount}</Text>
      </View>
      <View style={styles.tableContainer}>
        <Text>Balance after transaction</Text>
        <Text>{balanceAfter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#38ab4aff",
    // backgroundColor: "green",
    width:"90%",
    backgroundColor: "#c9f0b5",
    margin: "auto",
    borderRadius: 10,

  },
  tableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SendMoneySummary;
