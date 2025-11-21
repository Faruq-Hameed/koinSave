import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SendMoneyHeader from "./components/SendMoneyHeader";
import SendMoneyForm from "./components/SendMoneyForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../Navigations/MainNavigator";

type Props = NativeStackScreenProps<MainStackParamList, "SendMoney">;

const SendMoneyScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <SendMoneyHeader goBack={() => navigation.goBack()} />
      <SendMoneyForm />
    </SafeAreaView>
  );
};

export default SendMoneyScreen;
