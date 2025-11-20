import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/main";
import SendMoneyScreen from "../screens/sendMoney/Index";
import AddMoneyScreen from "../screens/AddMoney";
import TransactionScreen from "../screens/TransactionsScreen";

export type MainStackParamList = {
  Main: undefined;
  SendMoney: undefined;
  AddMoney: undefined;
  Transactions: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
      <Stack.Screen name="AddMoney" component={AddMoneyScreen} />
      <Stack.Screen name="Transactions" component={TransactionScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
