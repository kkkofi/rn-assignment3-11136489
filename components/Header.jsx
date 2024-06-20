import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

// FBF9F7

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 12,
      }}
    >
      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Hello, Devs</Text>
        <Text style={{ fontSize: 12 }}>14 tasks today</Text>
      </View>

      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="person-outline" size={30} color={"black"} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
