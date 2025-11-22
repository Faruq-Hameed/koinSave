import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useUser } from "../../../hooks/useUser";
import { useFocusEffect } from "@react-navigation/native";
import { getMe } from "../../../api/auth";
import { storeUserData, updateUseBalanceData } from "../../../utils/storage";

const BalanceContainer: React.FC = () => {
   const [bal, setBal] = useState("0");
  const { user } = useUser();

  useFocusEffect(
    useCallback(() => {
      const fetchTransactions = async () => {
        try {
          const res = await getMe(user.token);
          const balance = String(res.user?.balance ?? 0);
          setBal(balance);
          console.log({ balance });

          await storeUserData({ ...user, balance });
          updateUseBalanceData(balance);
        } catch (error) {
          console.error(error);
        }
      };

      fetchTransactions();
    }, [user]) // depend on user, 
  );

  const [isUsd, setIsUsd] = useState(true);
  const toggleCurrency = () => {
    setIsUsd((prev) => !prev);
  };
  const nairaAmount = parseFloat(bal); //converted the balance to number
  const exchangeRate = 1000;
  const usdAmount = (nairaAmount / exchangeRate).toFixed(2) ?? 0;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.toggleContainer}>
          <Text style={styles.text}>Available Balance</Text>

          {/* Toggle the balance unit between Naira and USD */}
          <TouchableOpacity onPress={toggleCurrency}>
            <Text style={styles.toggle}>Show in {isUsd ? "Naira" : "USD"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.balance}>
          {isUsd ? "$" : "₦"} {isUsd ? usdAmount : `${nairaAmount.toFixed(2)}`}
        </Text>
        <Text style={[styles.text, styles.rate]}>
          $1 = ₦{exchangeRate.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#19942cff",
    marginVertical: 10,
  },
  mainContainer: {
    borderRadius: 10,
    backgroundColor: "#38ab4aff",
    padding: 10,
    rowGap: 4,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  toggle: {
    color: "#fff",
    padding: 2,
    textDecorationLine: "underline",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  balance: {
    fontWeight: "700",
    fontSize: 34,
    color: "white",
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#19942cff",
  },
  rate: {
    // textDecorationLine: "underline",
    fontSize: 12,
  },
});

export default BalanceContainer;
