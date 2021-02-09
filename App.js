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
import MainScreen from "./Componenets/MainScreen";

export default function App() {
  //const [bgcolor, setbgcolor] = useState(color.grey);
  //const [diamondcolor, setdiamondcolor] = useState(color.white_lightblue);
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
    <View>
      <MainScreen />
    </View>
  );
}
