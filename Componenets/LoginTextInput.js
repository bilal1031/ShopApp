import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import color from "../Config/color";
function LoginTextInput(props) {
  return (
    <View style={styles.maindiv}>
      <Text style={[{ left: "12%" }, props.textstyle]}>{props.text}</Text>
      <View style={styles.textdiv}>
        <TextInput style={styles.textinput} {...props} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maindiv: { width: "100%" },
  textdiv: {
    backgroundColor: color.lightgrey,
    width: "80%",
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 10,
  },
  textinput: { height: "100%", width: "100%", left: 15, fontSize: 16 },
});
export default LoginTextInput;
