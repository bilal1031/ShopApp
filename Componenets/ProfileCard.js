import React from "react";
import { createPortal } from "react-dom";
import { View, StyleSheet, Image, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import color from "../Config/color";

const ProfileCard = ({ style }) => {
  const stat_items = [
    { id: 1, count: 840, countname: "Collect" },
    { id: 2, count: 51, countname: "Attention" },
    { id: 3, count: 200, countname: "Track" },
    { id: 4, count: 13, countname: "Coupon" },
  ];
  return (
    <View style={[styles.maindiv, style]}>
      <View style={styles.card_div}>
        <View style={styles.circle}></View>
        <View style={styles.profile_data_div}>
          <View style={styles.image_div}>
            <Image
              style={styles.image}
              source={require("../assets/shopapp-icon.png")}
            />
          </View>
          <View style={styles.name_div}>
            <Text style={styles.name_text}>Muhammad Bilal</Text>
            <Text style={styles.profile_text}>A trendsetter</Text>
          </View>
        </View>
        <FlatList
          style={{ top: 30, left: 10 }}
          horizontal={true}
          data={stat_items}
          keyExtractor={(stat_id) => stat_id.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.stats_data_div}>
              <Text style={styles.counttext}>{item.count}</Text>
              <Text style={styles.counttextinfo}>{item.countname}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card_div: {
    height: 200,
    width: "95%",
    backgroundColor: color.cardblue,
    borderRadius: 20,
    elevation: 10,
    overflow: "hidden",
  },
  circle: {
    height: 75,
    width: 75,
    backgroundColor: color.lightblue,
    borderRadius: 35,
    position: "absolute",
    right: -10,
    top: -20,
  },
  profile_data_div: {
    flexDirection: "row",
    //backgroundColor: color.white_lightblue,
    top: 20,
    left: 20,
    right: 20,
  },
  image_div: {
    height: 80,
    width: 80,
    backgroundColor: color.white,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    backgroundColor: color.grey,
    borderRadius: 35,
  },
  name_div: {
    left: 10,
    //backgroundColor: color.white,
    top: 10,
    height: "80%",
  },
  name_text: { fontSize: 24, color: color.white, fontWeight: "bold" },
  profile_text: { fontSize: 16, color: color.grey },
  stats_data_div: {
    width: 80,
    height: 80,
    //backgroundColor: color.lightblue,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 40,
  },
  counttext: { fontSize: 20, color: color.white },
  counttextinfo: { fontSize: 16, color: color.grey },
});
export default ProfileCard;
