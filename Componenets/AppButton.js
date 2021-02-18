import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
import color from "../Config/color";
function AppButton(props) {
  return (
    <View style={[styles.buttondiv, props.style]}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.buttondiv}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  buttondiv: {
    height: 50,
    width: 150,
    backgroundColor: color.blue,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: { color: color.white, fontSize: 18 },
});
export default AppButton;
