import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundClr = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textClr = type === "primary" ? "#FFFFFF" : "#171A20";
  // console.log(type);
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundClr }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textClr }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
