import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import DashboardHeader from "./DashboardHeader";
import BalanceContainer from "./BalanceContainer";
import { useUser } from "../../../hooks/useUser";

/**Dashboard upper container  */
const UpperContainer: React.FC = () => {
  const {
    user: { firstName, lastName, balance },
  } = useUser();
  console.log({ firstName });
  return (
    <>
      <DashboardHeader firstName={firstName} lastName={lastName} />
      <BalanceContainer balance={balance} />
    </>
  );
};

export default UpperContainer;
