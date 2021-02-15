import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./NavBar";
const FavScreen = ({ navigation }) => {
  return (
    <View style={styles.maindiv}>
      <Text>Fav Screen</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default FavScreen;
