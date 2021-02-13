import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import color from "../Config/color";
const ProfileOption = ({ icon, name, desc, colour }) => {
  return (
    <View style={styles.maindiv}>
      <View style={styles.optiondiv}>
        <TouchableNativeFeedback
          style={[styles.optiondiv, { elevation: 0, flexDirection: "row" }]}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: colour,
              left: 15,
              top: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 35,
            }}
          >
            <Icon name={icon} size={30} color={color.white} />
          </View>
          <View
            style={{
              //backgroundColor: color.grey,
              flexDirection: "column",
              left: 25,
              top: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 14, color: color.grey, top: 5 }}>
              {desc}
            </Text>
          </View>
          <Icon
            name="right"
            size={25}
            color={color.grey}
            style={{ position: "absolute", right: 5, top: 26 }}
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    width: "100%",
    height: 90,
    // backgroundColor: color.grey,
    alignItems: "center",
    top: 20,
    padding: 10,
    overflow: "hidden",
  },
  optiondiv: {
    width: "100%",
    height: 80,
    backgroundColor: color.white,
    borderRadius: 20,
    elevation: 1,
    overflow: "hidden",
  },
});
export default ProfileOption;
