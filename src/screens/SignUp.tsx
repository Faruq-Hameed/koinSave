import React from "react";

import { View, StyleSheet, Image, Text } from "react-native";
import FormInput from "../components/FormInput";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeaderBox from "../components/AuthHeaderBox";
import AuthBottomTexts from "../components/AuthBottomText";
import { Formik } from "formik";
import { SignUpSchema } from "../Schemas/userSchema";
import ErrorTexts from "../components/ErrorTexts";
import Button from "../components/Button";

const SignUpScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <AuthHeaderBox isLogin={false} />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          passcode: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log("signup api called");
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
              label="Firstname"
              placeholder="Enter your first name"
              value={values.firstName}
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              onFocus={() => {}}
            />
            {touched.firstName && errors.firstName && (
              <ErrorTexts message={errors.firstName} />
            )}
            <FormInput
              label="Lastname"
              value={values.lastName}
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              placeholder="Enter your last name"
              onFocus={() => {}}
            />
            {touched.lastName && errors.lastName && (
              <ErrorTexts message={errors.lastName} />
            )}
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
              placeholder="Enter 6 digit passcode"
              onChangeText={(text) => {
                console.log(text);
              }}
              value={values.passcode}
              keyboardType="phone-pad"
              onBlur={handleBlur("passcode")}
              onFocus={() => {}}
            />
            <Button
              title="Sign Up"
              onPress={() => {
                console.log("Button submitted");
              }}
            />
          </View>
        )}
      </Formik>
      <AuthBottomTexts isLogin={false} />
    </SafeAreaView>
  );
};

export default SignUpScreen;
