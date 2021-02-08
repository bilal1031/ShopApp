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

const ItemCard = ({ name, type, price, currency, image, onPress }) => {
  return (
    <View style={styles.main_div}>
      <Image source={image} style={styles.image} />
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(
          color.white_lightblue,
          false
        )}
      >
        <View style={styles.info_card}>
          <Text style={styles.name_text}>{name}</Text>
          <Text style={styles.mode_text}>{type}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price_text}>{price}</Text>
            <Text style={styles.currency_text}>{currency}</Text>
          </View>
          <ArrowButton />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  main_div: {
    width: 200,
    height: 300,
    // backgroundColor: "transparent",
    borderRadius: 20,
    flexDirection: "column",
    // elevation: 15,
  },
  image: { width: "100%", height: "90%", borderRadius: 20 },
  info_card: {
    width: 150,
    height: 100,
    backgroundColor: color.white,
    bottom: 50,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    elevation: 1,
  },
  name_text: { fontSize: 16, fontWeight: "bold", left: 10 },
  mode_text: {
    fontSize: 14,
    //fontWeight: "bold",
    color: color.grey,
    left: 10,
    bottom: 5,
  },
  price_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.blue,
    left: 10,
    bottom: 5,
  },
  currency_text: { fontSize: 12, color: color.blue, left: 12 },
});
export default ItemCard;
