import React, { useState } from "react";
import { Modal, View, StyleSheet } from "react-native";
import { clearUserData } from "../utils/storage";
import { useUser } from "../hooks/useUser";
import Button from "./Button";

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onClose }) => {
  const { resetUser } = useUser();

  const handleLogout = () => {
    clearUserData();
    resetUser();
    onClose(); // close modal from parent
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.actions}>
            <Button title="Logout now" onPress={handleLogout} />
            <Button
              title="Cancel"
              onPress={onClose}
              bgColor="white"
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  actions: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // width: "100%",
  },
});
