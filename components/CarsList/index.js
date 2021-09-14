import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const { width, height } = Dimensions.get("window");

const CarsList = (props) => {
  const renderItem = ({ item }) => <CarItem car={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={height}
      />
    </View>
  );
};

export default CarsList;
