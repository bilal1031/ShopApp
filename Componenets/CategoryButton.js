import React, { Children, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import color from "../Config/color";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Notifcation from "./Notification";
const CategoryButton = ({
  icon,
  iconcolor,
  size,
  bgcolor,
  diamondcolor,
  float,
}) => {
  const [tricolor, setcolor] = useState(bgcolor);
  const [notifcation, shownotification] = useState();
  const [rightmargin, setrmargin] = useState(39);

  return (
    <Pressable
      onPress={() => {
        console.log("hit");
      }}
      onPressIn={() => setcolor(color.white)}
      onPressOut={() => setcolor(bgcolor)}
    >
      <View
        style={[
          styles.r_box,
          { elevation: float ? 25 : 0, backgroundColor: tricolor },
        ]}
      >
        <View style={[styles.innerbox, { backgroundColor: diamondcolor }]}>
          <View
            style={[styles.triangle, { borderBottomColor: tricolor }]}
          ></View>
          <MaterialCommunityIcons
            style={{ right: rightmargin, bottom: 5, elevation: float ? 25 : 0 }}
            name={icon}
            size={size}
            color={iconcolor}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  r_box: {
    width: 60,
    height: 60,
    backgroundColor: color.blue,
    borderRadius: 20,
    transform: [{ rotate: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    overflow: "visible",
  },
  innerbox: {
    flexDirection: "row",
    width: 30,
    height: 30,
    backgroundColor: color.lightblue,
    transform: [{ rotate: "-45deg" }],
    overflow: "visible",
  },
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
    transform: [{ rotate: "-45deg" }],
    right: 13,
    bottom: 5,
    overflow: "visible",
  },
});
export default CategoryButton;
