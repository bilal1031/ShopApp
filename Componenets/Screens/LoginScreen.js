import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  StatusBar,
} from "react-native";
import color from "../../Config/color";
import AppButton from "../Buttons/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import FormTextField from "../FormItems/FormTextField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password").min(8),
});
function LoginScreen({ navigation }) {
  const validation = (values, navigation) => {
    console.log(values);
    if (
      values.email == "bilalnaeem166@gmail.com" &&
      values.password == "naeem123"
    ) {
      values.email = "";
      values.password = "";
      navigation.navigate("home");
    } else {
      values.email = "";
      values.password = "";
      Alert.alert("Error", "Enter valid email and password");
    }
  };
  return (
    <View style={styles.maindiv}>
      <StatusBar backgroundColor={color.blue} style="light" />
      <View style={styles.imagediv}>
        <Image
          style={styles.image}
          source={require("../../assets/shopapp-icon.png")}
        />
        <Text style={styles.title}>ShopApp</Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => validation(values, navigation)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={{ top: "15%" }}>
            <View style={styles.formdiv}>
              <FormTextField name="email" context="emailAddress" />
              <FormTextField
                name="password"
                textContentType="password"
                secureTextEntry
              />
            </View>
            <View style={styles.buttondiv}>
              <AppButton text="Login" onPress={handleSubmit} />
              <Pressable onPress={() => navigation.navigate("signup")}>
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
        )}
      </Formik>
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
    justifyContent: "space-evenly",
    height: 250,
  },
  buttondiv: {
    alignSelf: "center",
    top: "25%",
    alignItems: "center",
  },
});
export default LoginScreen;
