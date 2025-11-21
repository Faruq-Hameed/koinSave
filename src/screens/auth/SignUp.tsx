import React from "react";

import { View, StyleSheet, Image, Text } from "react-native";
import FormInput from "../../components/FormInput";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeaderBox from "../../components/AuthHeaderBox";
import AuthBottomTexts from "../../components/AuthBottomText";
import { Formik } from "formik";
import { SignUpSchema } from "../../Schemas/userSchema";
import ErrorTexts from "../../components/ErrorTexts";
import Button from "../../components/Button";
import { signup } from "../../api/auth";
import { User } from "../../model/User";
import { useUser } from "../../hooks/useUser";
import { storeUserData } from "../../utils/storage";

const SignUpScreen: React.FC = () => {
  const {setUser} = useUser()
  const handleSignup = async (data: Partial<User>) => {
    try {
      const res = await signup(data);
      await storeUserData({...res.user, ...res.token})
      setUser({...res.data})//this will caused stack switch to dashboard
      alert("Signup success!");

    } catch (err: any) {
      alert(err.response?.data?.msg || "Signup failed");
    }
  };
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
          handleSignup(values )
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
                value={values.passcode}
                placeholder="Enter your passcode"
                onChangeText={handleChange("passcode")}
                onBlur={handleBlur("passcode")}
                onFocus={() => {}}
                keyboardType="phone-pad"
                errorMessage={
                  touched.passcode && errors.passcode ? errors.passcode : ""
                }
              />
            <Button
              title="Sign Up"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <AuthBottomTexts isLogin={false} />
    </SafeAreaView>
  );
};

export default SignUpScreen;
