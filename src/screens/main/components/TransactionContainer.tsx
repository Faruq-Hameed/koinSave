import React, { useCallback, useMemo, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import TransactionItem from "./TransactionItem";
import ClickableText from "../../../components/Clickable";
import { useNavigation } from "@react-navigation/native";

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

// const TransactionContainer: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   /**Sorted transactions by date */
//   const sortedTransactions = [...transactions].sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//   );

//   const dataToShow = showAll
//     ? sortedTransactions
//     : sortedTransactions.slice(0, 3);

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.description}>
//         <Text style={styles.descriptionTexts}>Recent Transactions</Text>
//         <Text style={styles.descriptionTexts}>
//           <ClickableText
//             label={showAll ? "See recent" : "See all"}
//             onPress={() => setShowAll(!showAll)}
//           />
//         </Text>
//       </View>

//       <FlatList
//         data={dataToShow}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <TransactionItem transaction={item} />}
//       />
//     </ScrollView>
//   );
// };

const TransactionContainer: React.FC<{ isFullScreen?: boolean }> = ({
  isFullScreen = false,
}) => {
  const [showAll, setShowAll] = useState(false);
  const navigation = useNavigation<any>();

  // Sort only once unless transactions change
  const sortedTransactions = useMemo(() => {
    return [...transactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [transactions]);

  const dataToShow =
    showAll || isFullScreen
      ? sortedTransactions
      : sortedTransactions.slice(0, 3);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={dataToShow}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
      ListHeaderComponent={
        <View style={styles.description}>
          <Text style={styles.descriptionTexts}>Your Transactions</Text>
          {!isFullScreen && ( //only show if not full screen
            <ClickableText
              label={showAll ? "See recent" : "See all"}
              onPress={() => {
                if (isFullScreen) {
                  navigation.navigate("Transactions");
                } else {
                  toggleShowAll();
                }
              }}
            />
          )}
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // borderWidth: 1,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 8,
  },
  descriptionTexts: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default TransactionContainer;
