import React, { useState } from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";
import { StyledButton } from "../StyledButton";
import Home from "../Home";
import UserStack from "../Navigation/UserStack";

const CarItem = ({ car, ...props }) => {
  const [nav, setNav] = useState(false);
  const { name, tagline, tagLineCTA, image } = car;
  if (nav) {
    return (
      <View style={styles.carContainer}>
        <UserStack />
      </View>
    );
  } else {
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
            onPress={() => setNav(true)}
          />

          <StyledButton
            type="secondary"
            content={"Existing Inventory"}
            onPress={() => setNav(true)}
          />
        </View>
      </View>
    );
  }
};

export default CarItem;
