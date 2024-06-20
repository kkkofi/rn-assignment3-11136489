import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import uidata from "../constants/uidata";
import { SIZES } from "../constants/theme";

const Categories = () => {
  return (
    <View style={{ backgroundColor: "#FBF9F7" }}>
      <View style={{ marginHorizontal: 12, marginBottom: 10 }}>
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Categories</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={uidata.Categories}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#FBF9F7",
              width: SIZES.width / 2,
              height: 200,
              borderRadius: 5,
              // padding: 10,
              margin: 10,
              borderWidth: 1,
              borderColor: "gray",
              // gap: 5,
            }}
          >
            <View style={{ gap: 5, padding: 5 }}>
              <Text style={{ fontWeight: 600, fontSize: 16 }}>{item.name}</Text>

              <Text>{item.task} Task</Text>
            </View>
            <Image
              style={{
                width: "100%",
                height: "75%",
                resizeMode: "contain",
              }}
              source={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
