/* import React from "react";
import { View, Text } from "react-native";

const CarItem = (props) => {
  return (
    <View>
      <Text>My component</Text>
    </View>
  );
};

export default CarItem;
 */

import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = (props) => (
  <View style={styles.carContainer}>
    <ImageBackground
      source={require("../../assets/images/ModelX.jpeg")}
      style={styles.backgroundImage}
    />
    <View style={styles.titles}>
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subtitle}>Starting at $69,900</Text>
    </View>
  </View>
);

export default CarItem;
