import React from "react";
import styles from "./CardStyles";
import { View, Text } from "react-native";

const Card = props => {
  const { data, visible, onClick } = props;

  let cardStyles = [styles.card];
  if (visible) {
    cardStyles.push(styles.visible);
  }

  return (
    <View style={cardStyles} onClick={() => (onClick ? onClick() : null)}>
      <Text style={styles.content}>{data.name}</Text>
      <View style={styles.options}>
        <View style={[styles.optionItem, {
            borderLeftWidth : 0
        }]}>
          <Text>{"Element 1"}</Text>
        </View>
        <View style={styles.optionItem}>
          <Text>{"Element 2"}</Text>
        </View>
        <View style={styles.optionItem}>
          <Text>{"Element 3"}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
