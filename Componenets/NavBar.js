import React from "react";
import { FlatList, StyleSheet, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import color from "../Config/color";
import { useRoute } from "@react-navigation/native";
const Navbar = ({ navigation }) => {
  const route = useRoute();
  const navitems = [
    { id: 1, icon: "staro" },
    { id: 2, icon: "home" },
    { id: 3, icon: "search1" },
    { id: 4, icon: "user" },
  ];
  let active_panel = route.name;

  return (
    <View style={styles.navbar}>
      <FlatList
        horizontal={true}
        data={navitems}
        keyExtractor={(item_id) => item_id.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.icondiv,
              {
                backgroundColor:
                  active_panel == item.icon ? color.white : color.blue,
              },
            ]}
            onPress={() => {
              console.log(item.icon);
              navigation.navigate(item.icon);
            }}
          >
            <Icon
              name={item.icon}
              size={40}
              color={active_panel == item.icon ? color.blue : color.white}
            />
          </Pressable>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: color.blue,
    flexDirection: "row",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    paddingLeft: 10,
    elevation: 10,
    bottom: 0,
  },
  icondiv: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});
export default Navbar;
