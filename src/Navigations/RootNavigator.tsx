import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import AuthNavigator from "./AuthNavigator";

//This contain the navigation stacks for the app
export type RootStackParamList = {
  AuthStack: undefined;
  DashboardStack: undefined;
};

//The root stack navigator which conditionally renders stacks based on auth state
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  // const { isLoggedIn, loading } = useAuth();
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

      {!isLoggedIn ? (
        <RootStack.Screen name="AuthStack" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="DashboardStack" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
}

