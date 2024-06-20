import { StatusBar, StyleSheet, Text, View } from "react-native";
import {
  Header,
  Search,
  OngoingTask,
  Categories,
} from "../../components/index";

const index = () => {
  return (
    <View
      style={{
        gap: 20,
        // marginHorizontal: 12,
        backgroundColor: "#FBF9F7",
      }}
    >
      <Header />
      <Search />
      <Categories />
      <OngoingTask />

      {/* <StatusBar backgroundColor={"red"} barStyle={"light-content"} > */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
