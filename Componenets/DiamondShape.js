import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import color from "../Config/color";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const CategoryButton = ({ icon, iconcolor, size }) => {
  const [tricolor, setcolor] = useState(color.blue);
  return (
    <View style={[styles.triangle, { borderBottomColor: tricolor }]}></View>
  );
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 17,
    borderRightWidth: 17,
    borderBottomWidth: 17,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    //borderBottomColor: color.blue,
    transform: [{ rotate: "-45deg" }],
    right: 13,
    bottom: 5,
    overflow: "visible",
  },
});
export default CategoryButton;
