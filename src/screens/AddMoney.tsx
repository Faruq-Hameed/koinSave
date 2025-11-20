import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddMoneyScreen: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [errorText, setErrorText] = useState("");

  const validateAmount = () => {
    if (!amount || !parseFloat(amount) || parseFloat(amount) < 1) {
      setErrorText("Amount must be greater than 0");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/koinsave.png")}
        style={{ width: 150, height: 50 }}
        resizeMode="contain"
      />
      <FormInput
        label="Amount"
        placeholder="Enter amount to deposit"
        value={amount}
        onChangeText={setAmount}
        onBlur={() => {}}
        onFocus={() => {}}
        keyboardType="numeric"
        errorMessage={errorText}
      />
      <Button
        title="Deposit now"
        onPress={() => {
          validateAmount();
          console.log("Money deposited");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default AddMoneyScreen;
