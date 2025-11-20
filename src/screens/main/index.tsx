import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import DashboardHeader from "./components/DashboardHeader";
import UpperContainer from "./components/UpperContainer";
import MiddleContainer from "./components/MiddleContainer";
import TransactionContainer from "./components/TransactionContainer";
import Spacer from "../../components/Spacer";
import { ScrollView } from "react-native";

const MainScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
        <UpperContainer />
        <Spacer />
        <MiddleContainer />
        <Spacer />
        <TransactionContainer />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 5,
    // backgroundColor: "white",
    justifyContent: "space-between",
  },
});

export default MainScreen;
