import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/**This is the upper part of the dashboard. 
Contain the greeting and user avatar created from firstname 
*/
const DashboardHeader: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Hello {firstName}</Text>
      <Image
        source={require("../../../../assets/koinsave.png")}
        style={{ width: 100, height: 30 }}
        resizeMode="contain"
      />
      <Text style={styles.avatar}>{firstName[0] + " " + lastName[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
    // borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    backgroundColor: "#19942cff",
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
  },
  greetings: {
    fontWeight: "700",
    color: "white"

  },
  avatar: {
    borderRadius: 50,
    padding: 10,
    // borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#38ab4aff",
    color: "white",
    fontWeight: "700",
    
  },
});

export default DashboardHeader;
