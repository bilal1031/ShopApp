import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import color from "../Config/color";
import ArrowButton from "./ArrowButton";

const PopularItemCard = ({ onPress }) => {
  return (
    <View>
      <View style={styles.main_div}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple(
            color.white_lightblue,
            false
          )}
        >
          <View style={styles.sub_div}>
            <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              style={styles.image}
            />
            <View style={styles.data_div}>
              <Text style={styles.title}>Areial Pendant</Text>
              <Text style={styles.discription}>
                Our Light direction is sure to provide quality
              </Text>
              <View
                style={{ flexDirection: "row", top: 65, position: "absolute" }}
              >
                <Text style={styles.price}>196</Text>
                <Text style={styles.currency}>USD</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      <ArrowButton style={{ left: "85%", elevation: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  main_div: {
    width: "90%",
    height: 100,
    backgroundColor: color.white,
    borderRadius: 20,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: { height: 80, width: 80, borderRadius: 10 },
  data_div: {
    flexDirection: "column",
    height: 80,
    width: "65%",
    //backgroundColor: color.white,
    marginLeft: 10,
  },
  title: { fontSize: 16, fontWeight: "bold", left: 10 },
  discription: {
    fontSize: 14,
    //fontWeight: "bold",
    color: color.grey,
    left: 10,
    top: 2,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.blue,
    left: 10,
    bottom: 5,
  },
  currency: { fontSize: 12, color: color.blue, left: 12 },
  sub_div: {
    width: "100%",
    height: 100,
    backgroundColor: color.white,
    borderRadius: 20,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PopularItemCard;
