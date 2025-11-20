import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import DashboardHeader from "./DashboardHeader";
import BalanceContainer from "./BalanceContainer";
import Action from "./Action";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../../components/Spacer";

/**Dashboard Middle container  */
const MiddleContainer: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Action isSend onPress={() => navigation.navigate("SendMoney")} />
      <Action
        isSend={false}
        onPress={() => {
          navigation.navigate("AddMoney")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 20,
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
  },
  actionContainer: {
    backgroundColor: "#fafafaff",
  },
});

export default MiddleContainer;
