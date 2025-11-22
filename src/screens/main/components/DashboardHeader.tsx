import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import KoinSaveLogo from "../../../components/KoinSaveLogo";
import LogoutModal from "../../../components/Logout";

/**This is the upper part of the dashboard. 
Contain the greeting and user avatar created from firstname 
*/
const DashboardHeader: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {modalVisible && (
        <LogoutModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
      <Text style={styles.greetings}>Hello {firstName}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.avatar}>{firstName[0] + " " + lastName[0]}</Text>
      </TouchableOpacity>
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
    color: "white",
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
