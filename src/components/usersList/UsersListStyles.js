import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  users: {
    margin: 8,
    marginBottom: 0,
    height: 85,
    flexDirection: "row"
  },
  user: {
    width: 70,
    height: 8,
    marginRight: 8,
    flexDirection: "column",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2
  },
  name: {
    textAlign: "center",
    marginTop: 4
  }
});

export default styles;
