import React from "react";
import styles from "./HeaderStyles";
import { Text, View, Image } from "react-native";

const logo = require("./img/logo.png");
const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        resizeMode={"contain"}
        source={logo}
      />
      <Text className="header__name" style={styles.title}>
        COVID Walks
      </Text>
    </View>
  );
};

export default Header;
