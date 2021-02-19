import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  StatusBar,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../Buttons/AppButton";
import color from "../../Config/color";
import Icon from "react-native-vector-icons/AntDesign";
import FormTextField from "../FormItems/FormTextField";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password").min(8),
  email: Yup.string().email().required().label("Email"),
  contact: Yup.string().required().label("Contact number").max(11),
});
function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <View style={styles.title_div}>
          <TouchableNativeFeedback
            onPress={() => props.navigation.navigate("login")}
          >
            <View style={styles.back_button_div}>
              <Icon name="left" size={30} color={color.blue} />
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.title}> SignUp</Text>
        </View>
        <View style={styles.form_div}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              contact: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <>
                <FormTextField name="username" context="name" />
                <FormTextField name="email" context="emailAddress" />
                <FormTextField
                  name="password"
                  secureTextEntry
                  context="password"
                />
                <FormTextField
                  name="contact"
                  context="telephoneNumber"
                  keyboardType="phone-pad"
                />
                <AppButton
                  text="SignUp"
                  style={{ marginTop: 20 }}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  title_div: {
    backgroundColor: "white",
    flex: 0.1,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  form_div: {
    backgroundColor: "white",
    height: 570,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  back_button_div: {
    position: "absolute",
    left: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
  },
});
export default SignUpScreen;
