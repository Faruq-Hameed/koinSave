import React, { useCallback, useMemo, useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import TransactionItem from "./TransactionItem";
import ClickableText from "../../../components/Clickable";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getTransactions } from "../../../api/transactions";
import { useUser } from "../../../hooks/useUser";
import { getMe } from "../../../api/auth";
import { storeUserData, updateUseBalanceData } from "../../../utils/storage";

export interface ITransaction {
  _id: string;
  purpose: string;
  createdAt: string;
  type: "credit" | "debit";
  amount: number;
}

const TransactionContainer: React.FC<{ isFullScreen?: boolean }> = ({
  isFullScreen = false,
}) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const { user } = useUser();

  //whenever the screen comes into focus
  // (like after making a deposit elsewhere), it automatically re-fetches
  //TanStack could have been used for bigger app
  useFocusEffect(
    useCallback(() => {
      const fetchTransactions = async () => {
        try {
          const data = await getTransactions(user.token);
          const res = await getMe(user.token);
          const balance = (res.user?.balance as number).toString();

          console.log({ balance });
          await storeUserData({ ...user, balance });
          storeUserData(user); //this will caused stack switch to dashboard
          updateUseBalanceData(balance);
          setTransactions(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchTransactions();
    }, [])
  );

  const navigation = useNavigation<any>();

  // Sort only once unless transactions change
  //   /**Sorted transactions by date */
  const sortedTransactions = useMemo(() => {
    return [...transactions].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [transactions]);

  const dataToShow = isFullScreen
    ? sortedTransactions
    : sortedTransactions.slice(0, 3);

  return (
    <FlatList
      style={styles.container}
      data={dataToShow}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
      ListHeaderComponent={
        <View style={styles.description}>
          <Text style={styles.descriptionTexts}>
            {dataToShow.length > 0
              ? "Your Transactions"
              : "You transactions will appear here."}
          </Text>
          {!isFullScreen && ( //only show if not full screen
            <ClickableText
              label={"See all"}
              onPress={() => {
                // if (isFullScreen) {
                navigation.navigate("Transactions");
                // }
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
