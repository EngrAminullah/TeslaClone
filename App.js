import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";
import Home from "./components/Home";
import UserStack from "./components/Navigation/UserStack";

export default function App({ ...props }) {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <CarsList /> */}
      <UserStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
