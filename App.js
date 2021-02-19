import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import MainScreen from "./Componenets/Screens/MainScreen";
import color from "./Config/color";
import ProfileScreen from "./Componenets/Screens/ProfileScreen";
import FavScreen from "./Componenets/Screens/FavScreen";
import SearchScreen from "./Componenets/Screens/SearchScreen";
import LoginScreen from "./Componenets/Screens/LoginScreen";
import SignUpScreen from "./Componenets/Screens/SignUpScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
        transitionConfig={() => fromLeft()}
      >
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: "login",
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={{
            title: "signup",
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="home"
          component={MainScreen}
          options={{
            title: "home",
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="user"
          component={ProfileScreen}
          options={{
            title: "user",
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="staro"
          component={FavScreen}
          options={{
            title: "staro",
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="search1"
          component={SearchScreen}
          options={{
            title: "search1",
            ...TransitionPresets.FadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: color.blue,
    flexDirection: "row",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    paddingLeft: 10,
  },
  icondiv: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});
