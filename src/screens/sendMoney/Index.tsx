import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import SendMoneyHeader from "./components/SendMoneyHeader";
import SendMoneyForm from "./components/SendMoneyForm";

const SendMoneyScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <SendMoneyHeader />
      <SendMoneyForm />
      
    </SafeAreaView>
  );
};

export default SendMoneyScreen;
