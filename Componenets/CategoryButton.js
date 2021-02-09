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
  style,
  onPress,
  isactive,
  applycolorscheme,
}) => {
  const [rightmargin, setrmargin] = useState(35);
  let colorscheme = applycolorscheme
    ? isactive
      ? {
          bgcolor: color.blue,
          diamondcolor: color.lightblue,
          float: true,
          iconcolor: color.white,
        }
      : {
          bgcolor: color.lightgrey,
          diamondcolor: color.grey,
          float: false,
          iconcolor: color.icongrey,
        }
    : {
        bgcolor: bgcolor,
        diamondcolor: diamondcolor,
        float: false,
        iconcolor: iconcolor,
      };
  return (
    <Pressable onPress={onPress} style={style}>
      <View
        style={[
          styles.r_box,
          {
            elevation: colorscheme.float ? 25 : 0,
            backgroundColor: colorscheme.bgcolor,
          },
        ]}
      >
        <View
          style={[
            styles.innerbox,
            { backgroundColor: colorscheme.diamondcolor },
          ]}
        >
          <View
            style={[
              styles.triangle,
              { borderBottomColor: colorscheme.bgcolor },
            ]}
          ></View>

          <MaterialCommunityIcons
            style={{
              right: rightmargin,
              bottom: 5,
              elevation: colorscheme.float ? 25 : 0,
            }}
            name={icon}
            size={size}
            color={colorscheme.iconcolor}
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
