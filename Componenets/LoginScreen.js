import React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import color from "../Config/color";
import AppButton from "./AppButton";
import LoginTextInput from "./LoginTextInput";
function LoginScreen({ navigation }) {
  return (
    <View style={styles.maindiv}>
      <View style={styles.imagediv}>
        <Image
          style={styles.image}
          source={require("../assets/shopapp-icon.png")}
        />
        <Text style={styles.title}>ShopApp</Text>
      </View>
      <View style={styles.formdiv}>
        <LoginTextInput
          text="Email:"
          textstyle={{ fontSize: 20, fontWeight: "900" }}
        />
        <LoginTextInput
          text="Password:"
          textstyle={{ fontSize: 20, fontWeight: "900", marginTop: "5%" }}
        />
      </View>
      <View style={styles.buttondiv}>
        <AppButton text="Login" onPress={() => navigation.navigate("home")} />
        <Pressable onPress={() => console.log("Signup")}>
          <Text
            style={{
              color: color.blue,
              fontWeight: "800",
              marginTop: 15,
              fontSize: 16,
            }}
          >
            Or SignUp
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maindiv: {
    backgroundColor: color.white,
    flex: 1,
  },
  imagediv: {
    height: 150,
    width: 150,
    overflow: "hidden",
    flexDirection: "column",
    // backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    top: "10%",
    left: "30%",
  },
  image: { height: 100, width: 100 },
  title: { fontSize: 24, fontWeight: "bold" },
  formdiv: {
    width: "100%",
    alignItems: "center",
    top: "15%",
  },
  buttondiv: {
    alignSelf: "center",
    top: "25%",
    alignItems: "center",
  },
});
export default LoginScreen;
