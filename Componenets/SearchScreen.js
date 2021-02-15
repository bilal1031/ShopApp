import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./NavBar";
const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.maindiv}>
      <Text>Search Screen</Text>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default SearchScreen;
