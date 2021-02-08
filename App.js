import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import CategoryButton from "./Componenets/CategoryButton";
import ItemCard from "./Componenets/ItemCard";
import PopularItemCard from "./Componenets/PopularItemCard";
import color from "./Config/color";

export default function App() {
  //const [bgcolor, setbgcolor] = useState(color.grey);
  // const [diamondcolor, setdiamondcolor] = useState(color.white_lightblue);
  //const [iconcolor, seticoncolor] = useState(color.blue);
  const itemcard = [
    {
      id: 1,
      name: "Landscape",
      type: "Matter Model",
      price: "345",
      currency: "USD",
      image: {
        uri:
          "https://www.miliashop.com/164449-thickbox_default/random-light-ii-suspension-lamp-moooi.jpg",
      },
    },
    {
      id: 2,
      name: "Discuss Pendent",
      type: "Matter Model",
      price: "274",
      currency: "USD",
      image: {
        uri:
          "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Random/image-thumb__13216__header_fullscreen_2x_jpg/Random_Light_II_Black.jpg",
      },
    },
  ];
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={color.blue} style="light" />
      <View style={styles.top_div}>
        <Text style={styles.title}>Furniture</Text>
        <CategoryButton
          icon="cart"
          iconcolor={"black"}
          size={30}
          bgcolor={color.white_lightblue}
          diamondcolor={color.white}
          float={false}
          style={{ right: 10 }}
        />
      </View>
      <ScrollView
        horizontal={true}
        style={styles.cat_list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CategoryButton
          icon={"lamp"}
          iconcolor={color.white}
          size={30}
          bgcolor={color.blue}
          diamondcolor={color.lightblue}
          float={true}
          style={{ height: 80, width: 100, top: 20, left: 30 }}
        />
        <CategoryButton
          icon={"bed"}
          iconcolor={color.white}
          size={30}
          bgcolor={color.blue}
          diamondcolor={color.lightblue}
          float={true}
          style={{ height: 80, width: 100, top: 20, left: 30 }}
        />
        <CategoryButton
          icon={"cupboard"}
          iconcolor={color.white}
          size={30}
          bgcolor={color.blue}
          diamondcolor={color.lightblue}
          float={true}
          style={{ height: 80, width: 100, top: 20, left: 30 }}
        />
        <CategoryButton
          icon={"cup"}
          iconcolor={color.white}
          size={30}
          bgcolor={color.blue}
          diamondcolor={color.lightblue}
          float={true}
          style={{ height: 80, width: 100, top: 20, left: 30 }}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          //backgroundColor: color.grey,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, left: 20, fontWeight: "700" }}>
          Modern
        </Text>
        <Text style={{ fontSize: 13, left: 25, top: 2, color: color.grey }}>
          {"\u2B24"} Good quality item
        </Text>
      </View>
      <FlatList
        horizontal={true}
        style={{ top: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={itemcard}
        keyExtractor={(card) => card.id}
        renderItem={({ item }) => (
          <View style={styles.itemcard_div}>
            <ItemCard
              name={item.name}
              type={item.type}
              price={item.price}
              currency={item.currency}
              image={item.image}
            />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          //backgroundColor: color.grey,
          alignItems: "center",
          bottom: 5,
        }}
      >
        <Text style={{ fontSize: 24, left: 20, fontWeight: "700" }}>
          Popular
        </Text>
        <Text style={{ fontSize: 13, left: 25, top: 2, color: color.grey }}>
          {"\u2B24"} In recent month
        </Text>
      </View>
      <View style={{ left: 20 }}>
        <PopularItemCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: color.white,
    flexDirection: "column",
    top: 20,
  },
  top_div: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 20,
  },
  title: { fontSize: 30, fontWeight: "bold", fontFamily: "Roboto", left: 20 },
  cat_list: {
    top: 30,
    left: 0,
    backgroundColor: "transparent",
    height: 130,
    overflow: "visible",
  },
  itemcard_div: {
    height: 350,
    width: 250,
    left: 10,
    //backgroundColor: color.blue,
    alignItems: "center",
  },
});
