import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { clearUserData } from "../utils/storage";
import { useUser } from "../hooks/useUser";

const LogoutModal: React.FC = () => {
    const {resetUser} = useUser()
  const [visible, setVisible] = useState(false);
  
  const handleLogout = () => {
    clearUserData()
    resetUser()
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Trigger button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Confirm Logout</Text>
            <Text style={styles.message}>
              Are you sure you want to log out?
            </Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={handleLogout}
              >
                <Text style={styles.buttonText}>Are you sure</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
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
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#e74c3c",
  },
  cancelButton: {
    backgroundColor: "#bdc3c7",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});