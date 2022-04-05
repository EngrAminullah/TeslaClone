import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";
import { StyledButton } from "../StyledButton";

const CarItem = ({ car, ...props }) => {
  const { name, tagline, tagLineCTA, image } = car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}&nbsp; <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {}}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;
