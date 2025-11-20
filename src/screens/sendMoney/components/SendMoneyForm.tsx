import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";

import FormInput from "../../../components/FormInput";
import { SendMoneySchema } from "../../../Schemas/sendMoneySchema";
import Button from "../../../components/Button";
import SendMoneySummary from "./SendMoneySummary";

const SendMoneyForm: React.FC = () => {
  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          amount: "",
          purpose: "",
        }}
        validationSchema={SendMoneySchema}
        onSubmit={(values) => {
          console.log("send api called");
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
              label="Recipient"
              value={values.email}
              onChangeText={handleChange("email")}
              placeholder="Enter recipient koinSave email"
              onBlur={handleBlur("email")}
              onFocus={() => {}}
              keyboardType="email-address"
              errorMessage={touched.email && errors.email ? errors.email : ""}
            />

            <FormInput
              label="Amount"
              value={values.amount}
              placeholder="Enter naira amount"
              onChangeText={handleChange("amount")}
              onBlur={handleBlur("amount")}
              onFocus={() => {}}
              keyboardType="phone-pad"
              errorMessage={
                touched.amount && errors.amount ? errors.amount : ""
              }
            />

            <FormInput
              label="Purpose"
              placeholder="Enter transaction purpose"
              value={values.purpose}
              onChangeText={handleChange("purpose")}
              onBlur={handleBlur("purpose")}
              onFocus={() => {}}
              errorMessage={
                touched.purpose && errors.purpose ? errors.purpose : ""
              }
            />
            {/* <SendMoneySummary amount={values.amount}/> */}
            <Button
              title="Send Now"
              onPress={() => {
                console.log("send button submitted");
              }}
              marginTop={30}
            />
            <Button
              title="Cancel"
              onPress={() => {
                console.log("cancel button submitted");
              }}
              marginTop={20}
              bgColor="white"
              color="black"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SendMoneyForm;
