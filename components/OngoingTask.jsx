import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import uidata from "../constants/uidata";

const topics = [
  {
    id: 1,
    name: "Mobile Application Development",
    image: "https://example.com/images/ai.jpg",
  },
  {
    id: 2,
    name: "Web Development",
    image: "https://example.com/images/ml.jpg",
  },
  {
    id: 3,
    name: "Data Science",
    image: "https://example.com/images/data_science.jpg",
  },
  {
    id: 4,
    name: "Cybersecurity",
    image: "https://example.com/images/cybersecurity.jpg",
  },
  {
    id: 5,
    name: "Blockchain",
    image: "https://example.com/images/blockchain.jpg",
  },
  {
    id: 6,
    name: "Cloud Computing",
    image: "https://example.com/images/cloud_computing.jpg",
  },
  {
    id: 7,
    name: "Computer Networks",
    image: "https://example.com/images/computer_networks.jpg",
  },
  {
    id: 8,
    name: "Software Engineering",
    image: "https://example.com/images/software_engineering.jpg",
  },
  {
    id: 9,
    name: "Machine Learning",
    image: "https://example.com/images/web_development.jpg",
  },
  {
    id: 10,
    name: "Artificial Intelligence",
    image: "https://example.com/images/mobile_development.jpg",
  },
];

const MyComponent = () => {
  return (
    <View style={{ gap: 5, backgroundColor: "#FBF9F7" }}>
      <View style={{ marginHorizontal: 12 }}>
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Ongoing Task</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {topics.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  item: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
    height: 200,
    borderRadius: 5,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyComponent;
