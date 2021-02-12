import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import MainScreen from "./Componenets/MainScreen";
import color from "./Config/color";
import ProfileScreen from "./Componenets/ProfileScreen";
import FavScreen from "./Componenets/FavScreen";
import SearchScreen from "./Componenets/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        transitionConfig={() => fromLeft()}
      >
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
          name="star"
          component={FavScreen}
          options={{
            title: "star",
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
