import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import DashboardHeader from "./components/DashboardHeader";
import UpperContainer from "./components/UpperContainer";
import MiddleContainer from "./components/MiddleContainer";
import TransactionContainer from "./components/TransactionContainer";

const MainScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UpperContainer />
      <MiddleContainer />
      <TransactionContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default MainScreen;
