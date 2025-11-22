import React, { useState } from "react";

import { View, StyleSheet, Image, Text } from "react-native";
import FormInput from "../../components/FormInput";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeaderBox from "../../components/AuthHeaderBox";
import AuthBottomTexts from "../../components/AuthBottomText";
import { Formik } from "formik";
import { LoginSchema } from "../../Schemas/userSchema";
import ErrorTexts from "../../components/ErrorTexts";
import Button from "../../components/Button";
import { useUser } from "../../hooks/useUser";
import { login } from "../../api/auth";
import { storeUserData } from "../../utils/storage";
import { User } from "../../model/User";

const LoginScreen: React.FC = () => {
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (data: Partial<User>) => {
    try {
      const res = await login(data);
      const user: User = {
        firstName: res.user.firstName,
        lastName: res.user.lastName,
        balance: (res.user.balance as number).toString(),
        email: res.user.email,
        token: res.token as string,
      };
      console.log({user})
      await storeUserData(user);
      setUser(user); //this will caused stack switch to dashboard
      setIsLoading(true);
    } catch (err: any) {
      setIsLoading(false);

      // alert(err.response?.data?.msg || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <AuthHeaderBox />
        <Formik
          initialValues={{
            email: "",
            passcode: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log("login api called");
            // initiateSignUp(values);
            setIsLoading(true);
            handleLogin(values);
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <FormInput
                label="Enter email"
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="Enter your email"
                onBlur={() => {
                  handleBlur("email");
                  setIsLoading(false);
                  setIsLoading(false);
                }}
                onFocus={() => {}}
                keyboardType="email-address"
                errorMessage={touched.email && errors.email ? errors.email : ""}
              />

              <FormInput
                label="Passcode"
                value={values.passcode}
                placeholder="Enter your passcode"
                onChangeText={handleChange("passcode")}
                onBlur={() => {
                  handleBlur("passcode");
                  setIsLoading(false);
                  setIsLoading(false);
                }}
                onFocus={() => {}}
                keyboardType="phone-pad"
                errorMessage={
                  touched.passcode && errors.passcode ? errors.passcode : ""
                }
              />
              <Button
                title={isLoading ? "Please wait .." : "Login"}
                onPress={() => {
                  handleSubmit();
                }}
              disable={isLoading}

              />
            </View>
          )}
        </Formik>
        <AuthBottomTexts />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
