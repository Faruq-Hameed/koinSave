import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const SendMoneyHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/koinsave.png")}
        style={{ width: 150, height: 0 }}
        resizeMode="contain"
      />
      <Text style={styles.subText}>Transfer funds instantly</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subText: {
    color: "grey",
  },
});

export default SendMoneyHeader;
