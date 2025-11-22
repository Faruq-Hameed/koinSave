import React from "react";
import { Image } from "react-native";

const KoinSaveLogo: React.FC = () => {
  return (
    <Image
      source={require("../../assets/koinsave.png")}
      style={{ width: 100, height: 30 }}
      resizeMode="contain"
    />
  );
};

export default KoinSaveLogo