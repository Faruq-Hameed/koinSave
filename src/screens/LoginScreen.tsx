import React from "react";

import { View, StyleSheet, Image, Text, } from "react-native";
import FormInput from "../components/FormInput";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeaderBox from "../components/AuthHeaderBox";
import AuthBottomTexts from "../components/AuthBottomText";
import { Formik } from "formik";
import { LoginSchema } from "../Schemas/userSchema";
import ErrorTexts from "../components/ErrorTexts";
import Button from "../components/Button";

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/splash-icon.png")}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
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
                onBlur={handleBlur("email")}
                onFocus={() => {}}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <ErrorTexts message={errors.email} />
              )}
              <FormInput
                label="Passcode"
                value={values.passcode}
                placeholder="Enter your passcode"
                onChangeText={(text) => {
                  console.log(text);
                }}
                onBlur={handleBlur("passcode")}
                onFocus={() => {}}
                keyboardType="phone-pad"
              />
              {touched.passcode && errors.passcode && (
                <ErrorTexts
                  message={errors.passcode}
                  // style={styles.passwordError}
                />
              )}
              <Button
              
                title="Login"
                onPress={() => {
                  console.log("Login button submitted");
                }}
                
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
