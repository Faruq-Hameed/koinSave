import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GoBackNav from "../../../components/GoBack";

const SendMoneyHeader: React.FC<{goBack: () => void}> = ({goBack}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <GoBackNav goBack={goBack}/>
        <Image
          source={require("../../../../assets/koinsave.png")}
          style={{ width: 100, height: 30 }}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.subText}>Transfer funds instantly</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  upperContainer:{
    flexDirection : "row",
    // borderWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",

  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subText: {
    color: "grey",
    margin: "auto",
  },
});

export default SendMoneyHeader;
