import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addMoney } from "../api/transactions";
import { useUser } from "../hooks/useUser";
import { useNavigation } from "@react-navigation/native";

const AddMoneyScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false); //handle loading state in button
  const {
    user: { token },
  } = useUser();
  const [amount, setAmount] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleDeposit = async () => {
    const amountInNumber = parseFloat(amount);
    if (!amountInNumber || amountInNumber < 1) {
      setErrorText("Amount must be greater than 0");
    }
    try {
      setIsLoading(true);
      await addMoney(token, amountInNumber);
      navigation.goBack();
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
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
        title={isLoading ? "Depositing .." : "Deposit now"}
        onPress={() => {
          handleDeposit();
          console.log("Money deposited");
        }}
        disable={isLoading}
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
