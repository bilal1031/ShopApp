import { View, Text } from "react-native";
import color from "../Config/color";
import React from "react";
const Notifcation = () => {
  return (
    <View
      style={{
        height: 12,
        width: 12,
        backgroundColor: color.blue,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 8, color: color.white }}>5</Text>
    </View>
  );
};

export default Notifcation;
