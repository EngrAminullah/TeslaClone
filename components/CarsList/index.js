import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./Cars";
import CarItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
