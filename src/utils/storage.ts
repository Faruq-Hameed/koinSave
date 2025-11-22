// storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../model/User";

export const storeUserData = async (user: User) => {
  console.log("data to store",{user})
  try {
    await AsyncStorage.setItem("userToken", user.token);
    await AsyncStorage.setItem("userFirstName", user.firstName);
    await AsyncStorage.setItem("userEmail", user.email);
    await AsyncStorage.setItem("userLastName", user.lastName);
    await AsyncStorage.setItem("userBalance", user.balance);
  } catch (error) {
    console.error("Error storing user data:", error);
  }
};
export const updateUseBalanceData = async (balance: string) => {
  // console.log({user})
  try {
    await AsyncStorage.setItem("userBalance", balance);
  } catch (error) {
    console.error("Error updating balance:", error);
  }
};
export const getUserData = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    const firstName = await AsyncStorage.getItem("userFirstName");
    const lastName = await AsyncStorage.getItem("userLastName");
    const email = await AsyncStorage.getItem("userEmail")??"";
    const balance = await AsyncStorage.getItem("userBalance");
    console.log("stored balance", balance)
    return { token, firstName, lastName, balance, email };
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return { token: null, firstName: "", lastName: "", balance: 0 };
  }
};

/**Clear entire user data */
export const clearUserData = async () => {
  try {
    await AsyncStorage.multiRemove([
      "userToken",
      "userFirstname",
      "userLastName",
      "userBalance"
    ]);
  } catch (error) {
    console.error("Error clearing user data:", error);
  }
};
