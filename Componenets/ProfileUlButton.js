import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import color from "../Config/color";
const ProfileUlbutton = ({ icon, size, name }) => {
  return (
    <View
      style={{
        height: 70,
        width: 70,
        //backgroundColor: color.grey,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          height: 65,
          width: 65,
          backgroundColor: color.buttongrey,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name={icon} size={30} color="black" />
      </Pressable>
      <Text style={{ top: 5, fontWeight: "800" }}>{name}</Text>
    </View>
  );
};

export default ProfileUlbutton;
