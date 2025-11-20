import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import TransactionContainer from "./main/components/TransactionContainer";

const TransactionScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TransactionContainer isFullScreen={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  },
});

export default TransactionScreen;
