import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {`${tagline} `}
          <Text
            style={styles.taglineCTA}
            onPress={() => console.log(`CTA of ${name} was pressed`)}
          >
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => console.log("Custom Order was pressed")}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.log("Existing Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
