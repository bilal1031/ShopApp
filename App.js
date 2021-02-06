import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryButton from "./Componenets/CategoryButton";
import Notifcation from "./Componenets/Notification";
import color from "./Config/color";

export default function App() {
  return (
    <View style={styles.maincontainer}>
      <CategoryButton
        icon="bed-queen"
        iconcolor={color.white}
        size={35}
        bgcolor={color.blue}
        diamondcolor={color.lightblue}
        float={true}
        notify={false}
      />
      <View
        style={{
          top: 50,
        }}
      >
        <CategoryButton
          icon="cart-minus"
          iconcolor={"black"}
          size={35}
          bgcolor={color.white}
          diamondcolor={color.grey}
          float={false}
          notify={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
