import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { useUser } from "../hooks/useUser";
import { getUserData } from "../utils/storage";

//This contain the navigation stacks for the app
export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};

//The root stack navigator which conditionally renders stacks based on auth state
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();

  // const { isLoggedIn, loading } = useAuth();
  const loadingUserData = async () => {
    const user = await getUserData();
    if (user) {
      setUser({
        firstName: user.firstName as string,
        lastName: user.lastName as string,
        balance: (user.balance as string) ?? "0",
        email: user.email as string,
        token: user.token as string,
      });
    }
  };

  useEffect(() => {
    loadingUserData();
    setLoading(false);
  }, []);

  // Show a loading screen while checking auth state
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  else
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
