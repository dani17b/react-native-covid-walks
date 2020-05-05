import React from "react";
import { View, Animated } from "react-native";
import styles from "./AppStyles";
import Home from "./modules/home/Home";
import Header from "./components/header/Header";

// const logo = require("./assets/react-logo.png");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.imageAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.imageAnimation, {
        toValue: 1,
        duration: 1005
      })
    ).start();
  }

  render() {
    const rotationStyle = {
      transform: [
        {
          rotate: this.imageAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
          })
        }
      ]
    };

    return (
      <View style={styles.app}>
        {/* <View style={styles.appHeader}>
          <Animated.Image
            style={[styles.headerImage, rotationStyle]}
            resizeMode={"contain"}
            source={logo}
          />
          <Text style={styles.appTitle}>Welcome to React Native Web️</Text>
          <Text style={styles.appSubtitle}>Vanilla Edition</Text>
        </View> */}
        <Header />
        <Home />
      </View>
    );
  }
}
