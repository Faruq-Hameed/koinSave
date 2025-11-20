import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TransactionItem from "./TransactionItem";
import ClickableText from "../../../components/Clickable";

const transactions = [
  {
    id: "1",
    description: "Salary",
    date: "2025-11-01",
    type: "credit",
    amount: 500000,
  },
  {
    id: "2",
    description: "Groceries",
    date: "2025-11-05",
    type: "debit",
    amount: 35000,
  },
  {
    id: "3",
    description: "Electricity Bill",
    date: "2025-11-07",
    type: "debit",
    amount: 15000,
  },
  {
    id: "4",
    description: "Freelance",
    date: "2025-11-10",
    type: "credit",
    amount: 120000,
  },
  {
    id: "5",
    description: "Internet",
    date: "2025-11-12",
    type: "debit",
    amount: 20000,
  },
];

const TransactionContainer: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  /**Sorted transactions by date */
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const dataToShow = showAll
    ? sortedTransactions
    : sortedTransactions.slice(0, 3);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Recent Transactions{" "}
        {!showAll && (
          <ClickableText label="See all" onPress={() => setShowAll(true)} />
        )}
      </Text>

      <FlatList
        data={dataToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 16 ,
    // borderWidth: 1,
  },
});
export default TransactionContainer;
