import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginLeft : 8,
    marginRight : 8,
    marginBottom : 8
    //marginTop: "100%",
    //transition: "0.5s ease all",
    //width: "calc(100% - 16px)",
    //opacity: 0
  },
  visible: {
    marginTop: 8,
    opacity: 1
  },
  content: {
    height: 200,
    backgroundColor: "blue"
  },
  options: {
    flexDirection: "row",
    height: 35
  },
  optionItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: "black",
    borderLeftWidth : 1
  }
});

export default styles;
