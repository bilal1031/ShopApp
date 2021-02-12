import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./NavBar";
import ProfileCard from "./ProfileCard";
import color from "../Config/color";
import ProfileUlbutton from "./ProfileUlButton";
const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        <ScrollView style={styles.maindiv}>
          <Text style={styles.profiletext}>Profile</Text>
          <ProfileCard style={{ top: 45 }} />
          <View
            style={{
              flexDirection: "row",
              top: 80,
              justifyContent: "space-between",
              marginLeft: 10,
              marginRight: 10,
              //backgroundColor: "black",
              height: 160,
            }}
          >
            <ProfileUlbutton icon="wallet" name="Wallet" />
            <ProfileUlbutton icon="car" name="Delievry" />
            <ProfileUlbutton icon="message1" name="Messages" />
            <ProfileUlbutton icon="customerservice" name="Service" />
          </View>
        </ScrollView>
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    top: 5,
    height: "100%",
    // backgroundColor: color.grey,
  },
  profiletext: { fontSize: 28, fontWeight: "bold", top: 35, left: 15 },
});

export default ProfileScreen;
