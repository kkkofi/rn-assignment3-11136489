import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20,
        marginHorizontal: 12,
      }}
    >
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(searchString) => {
            this.setState({ searchString });
          }}
          underlineColorAndroid="transparent"
        />
      </View>

      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0522F",
        }}
      >
        <Ionicons name="filter-outline" size={30} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF9F7",
    borderWidth: 1,
    borderRadius: 5,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#FBF9F7",
    color: "#424242",
    // borderWidth: 1,
    // borderRadius: 10,
  },
});
