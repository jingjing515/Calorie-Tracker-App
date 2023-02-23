import { StyleSheet } from "react-native";
export const inputStyles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  input: {
    color: "rebeccapurple",
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "100%",

    // marginVertical: 1,
  },
  button: {
    width: "50%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer2: {
    flexDirection: "column",
    marginTop: 10,
  },
  title: {
    width: "100%",
    marginVertical: 10,
    color: "rebeccapurple",
    fontSize: 25,
  },
  errorText: {
    width: "100%",
    marginVertical: 1,
  },
});
