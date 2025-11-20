import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BalanceContainer: React.FC<{ balance: string }> = ({ balance }) => {
  const [isUsd, setIsUsd] = useState(true);
  const toggleCurrency = () => {
    setIsUsd((prev) => !prev);
  };
  const nairaAmount = parseFloat(balance); //converted the balance to number
  const exchangeRate = 1000;
  const usdAmount = (nairaAmount / exchangeRate).toFixed(2)??0;

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
