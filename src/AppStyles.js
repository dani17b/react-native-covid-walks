import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: 200,
    height: 200
  },
  appTitle: {
    fontSize: 16,
    color: "white"
  },
  appSubtitle: {
    color: "white"
  },
  appIntro: {
    fontSize: 30,
    textAlign: "center"
  },
  appWebView: {
    flex: 1,
    width: "100%",
    height: 700
  }
});

export default styles;
