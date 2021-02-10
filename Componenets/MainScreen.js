import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import CategoryButton from "./CategoryButton";
import ItemCard from "./ItemCard";
import PopularItemCard from "./PopularItemCard";
import color from "../Config/color";
import Navbar from "./NavBar";

const MainScreen = ({ navigation }) => {
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
  const cat_list = [
    {
      id: 1,
      icon: "lamp",
    },
    {
      id: 2,
      icon: "bed",
    },
    {
      id: 3,
      icon: "cupboard",
    },
    {
      id: 4,
      icon: "cup",
    },
  ];
  const [active_Category, setactive_category] = useState("lamp");
  return (
    <View style={styles.maincontainer}>
      <ScrollView style={{ height: "100%", backgroundColor: color.white }}>
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
            applycolorscheme={false}
          />
        </View>
        <FlatList
          horizontal={true}
          style={styles.cat_list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={cat_list}
          keyExtractor={(catid) => catid.id.toString()}
          renderItem={({ item }) => (
            <CategoryButton
              icon={item.icon}
              size={30}
              style={{ height: 80, width: 100, top: 20, left: 30 }}
              isactive={item.icon == active_Category ? true : false}
              onPress={() => setactive_category(item.icon)}
              applycolorscheme={true}
            />
          )}
        />
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
          keyExtractor={(card) => card.id.toString()}
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
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: color.white,
    flexDirection: "column",
    height: "100%",
    top: Platform.OS == "android" ? 25 : 0,
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
export default MainScreen;
