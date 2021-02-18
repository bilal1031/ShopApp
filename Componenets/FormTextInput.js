import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import color from "../Config/color";

function FormTextInput(props) {
  let error;
  if (props.errorvisibility) {
    error = <Text style={{ color: "red" }}>{props.errors}</Text>;
  } else {
    error = null;
  }
  return (
    <View style={[styles.maindiv, { alignItems: "center" }]}>
      <View style={styles.maindiv}>
        <Text style={[{ left: "12%" }, props.textstyle]}>{props.text}</Text>
        <View style={styles.textdiv}>
          <TextInput style={styles.textinput} {...props} />
        </View>
      </View>
      {error}
    </View>
  );
}
const styles = StyleSheet.create({
  maindiv: { width: "100%", height: 90 },
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
export default FormTextInput;
