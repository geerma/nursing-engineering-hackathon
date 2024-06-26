import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    alignItems: "center",
  },

  header: {
    fontSize: 30,
  },

  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    margin: 5,
  },

  button: {
    backgroundColor: "#424BB2",
    marginLeft: 26,
    marginRight: 26,
    marginTop: 20,
    height: 40,
    width: 300,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  navigation: {
    backgroundColor: "#ADD8E6",
    marginLeft: 26,
    marginRight: 26,
    marginTop: 20,
    height: 50,
    width: 200,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  navigationTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
