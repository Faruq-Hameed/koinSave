import React from "react";
import { StyleSheet, View } from "react-native";
import DashboardHeader from "./DashboardHeader";
import BalanceContainer from "./BalanceContainer";
import { useUser } from "../../../hooks/useUser";

/**Dashboard upper container  */
const UpperContainer: React.FC = () => {
  const {
    user: { firstName, lastName, balance },
  } = useUser();
  return (
    <View style={styles.container}>
      <DashboardHeader firstName={firstName} lastName={lastName} />
      <BalanceContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding : 15,
  }
})
export default UpperContainer;
