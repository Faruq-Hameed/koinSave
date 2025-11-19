import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

/**This is a reusable input component for forms. 
It accepts label, value, placeholder, onChangeText handler, and keyboardType as props.
The input field is styled and can be configured for secure text entry 
if the label includes "passcode" key word.
*/
const FormInput: React.FC<{
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void; //purposefully added for formik compatibility. With this prop, formik can handle the blur event.
  onFocus: (e: any) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}> = ({
  label,
  value,
  onChangeText,
  onBlur,
  onFocus,
  keyboardType = "default",
  placeholder = "type here",
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={label.toLowerCase().includes("passcode")}
        style={styles.input}
        onBlur={(e) => {
          onBlur?.(e);
          setFocus(!!focus);
        }}
        onFocus={(e) => {
          onFocus(e); //event like clearing of error if any
          setFocus(!!focus); //so the green color border appears
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    width: "95%",
    margin: "auto",
  },
  input: {
    height: 50,
    fontSize: 16,
    borderColor: "#1f2937",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 5, // for spacing between label and input
  },
  inputFocus: {
    borderColor: "green",
    borderWidth: 2,
  },
  label: {
    fontSize: 12,
  },
});

export default FormInput;
