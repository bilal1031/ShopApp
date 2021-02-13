import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./NavBar";
import ProfileCard from "./ProfileCard";
import color from "../Config/color";
import ProfileUlbutton from "./ProfileUlButton";
import ProfileOption from "./ProfileOption";
const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.maindiv}
        >
          <Text style={styles.profiletext}>Profile</Text>
          <ProfileCard style={{ top: 50 }} />
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
          <ProfileOption
            icon="home"
            name="Address"
            desc="Ensure your harvesting address"
            colour="#8c7aee"
          />
          <ProfileOption
            icon="lock"
            name="Privacy"
            desc="System permission change"
            colour="#f468b7"
          />
          <ProfileOption
            icon="setting"
            name="General"
            desc="Basic functional settings"
            colour="#ffc85a"
          />
          <ProfileOption
            icon="bells"
            name="Notification"
            desc="Take over the news in time"
            colour="#5cd1d3"
          />
          <View style={{ height: 100, width: "100%" }}></View>
        </ScrollView>
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    top: 10,
    height: "100%",
    // backgroundColor: color.grey,
  },
  profiletext: { fontSize: 28, fontWeight: "bold", top: 35, left: 15 },
});

export default ProfileScreen;
