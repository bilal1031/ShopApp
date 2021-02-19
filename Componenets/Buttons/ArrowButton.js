import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import color from "../../Config/color";
import Icon from "react-native-vector-icons/AntDesign";
const ArrowButton = ({ style }) => {
  const [buttoncolor, setcolor] = useState(color.otherblue);
  const [iconcolor, seticoncolor] = useState(color.white);
  return (
    <Pressable
      style={[styles.maindiv, { backgroundColor: buttoncolor }, [style]]}
      onPressIn={() => {
        setcolor(color.white);
        seticoncolor(color.blue);
      }}
      onPressOut={() => {
        setcolor(color.blue);
        seticoncolor(color.white);
      }}
      onPress={() => console.log("arrow hit")}
    >
      <Icon name="arrowright" size={20} color={iconcolor} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  maindiv: {
    width: 30,
    height: 30,
    borderRadius: 10,
    position: "absolute",
    left: "90%",
    top: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ArrowButton;
