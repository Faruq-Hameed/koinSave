import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";

import FormInput from "../../../components/FormInput";
import { SendMoneySchema } from "../../../Schemas/sendMoneySchema";
import Button from "../../../components/Button";
import SendMoneySummary from "./SendMoneySummary";
import { sendMoney } from "../../../api/transactions";
import { useUser } from "../../../hooks/useUser";
import { getMe } from "../../../api/auth";
import { User } from "../../../model/User";
import { storeUserData } from "../../../utils/storage";

const SendMoneyForm: React.FC = () => {
  const {
    user: { token },
    setUser
  } = useUser();

  const handleSend = async (data: any) => {
    try {
      await sendMoney(token, data);
      const res = await getMe(data);
      const user: User = {
        firstName: res.user.firstName,
        lastName: res.user.lastName,
        balance: res.user.balance,
        email: res.user.email,
        token: res.token as string,
      };
      await storeUserData(user);
      setUser(user); //so the current balance can be used

      alert("Sent successfully!");
    } catch (e: any) {
      alert(e.response?.data?.msg || "Send failed");
    }
  };

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
          handleSend(values);
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
              onPress={handleSubmit}
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
