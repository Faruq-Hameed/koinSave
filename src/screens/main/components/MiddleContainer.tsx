import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import DashboardHeader from "./DashboardHeader";
import BalanceContainer from "./BalanceContainer";
import Action from "./Action";

/**Dashboard Middle container  */
const MiddleContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Action isSend />
      <Action isSend={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap : 10,
    // borderWidth: 1,
    width: "85%",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  actionContainer:{
    backgroundColor: "#fafafaff"
  }
})

export default MiddleContainer;
