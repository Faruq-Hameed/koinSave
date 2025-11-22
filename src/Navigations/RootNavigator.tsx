import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { useUser } from "../hooks/useUser";

//This contain the navigation stacks for the app
export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

//The root stack navigator which conditionally renders stacks based on auth state
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  // const { isLoggedIn, loading } = useAuth();
  const {user, setUser} = useUser()
  const { isLoggedIn, loading } = { isLoggedIn: false, loading: false }; // Placeholder for auth state
  // Show a loading screen while checking auth state
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  //Render the appropriate stack based on auth state
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!user.token ? (
        <RootStack.Screen name="AuthStack" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="MainStack" component={MainNavigator} />
      )}
    </RootStack.Navigator>
  );
}
