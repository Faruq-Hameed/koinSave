import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Transaction = {
  id: string;
  description: string;
  date: string;
  type: string;
  amount: number;
};

const TransactionItem: React.FC<{ transaction: Transaction }> = ({
  transaction,
}) => {
  const isCredit = transaction.type === "credit";
  const color = isCredit ? "green" : "red";
  const sign = isCredit ? "+" : "-";

  return (
    <View style={styles.itemContainer}>
      <View style={styles.textBlock}>
        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
      <Text style={[styles.amount, { color }]}>
        {sign}₦{transaction.amount.toLocaleString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  textBlock: {
    flexDirection: "column",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransactionItem;
