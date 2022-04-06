import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native";
import styles from "./styles";
import UserStack from "../Navigation/UserStack";

const Home = () => {
  const [carList, setCarlist] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up Here!</Text>
      <View style={styles.input}>
        <TextInput placeholder="Type Your Email" style={styles.input1} />
        <TextInput
          secureTextEntry={true}
          placeholder="Type new password"
          style={styles.input1}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Type again password"
          style={styles.input1}
        />
      </View>
      <View style={styles.button}>
        <Button title="Sign Up" onPress={() => setNav(true)} />
      </View>
    </View>
  );
};

export default Home;
