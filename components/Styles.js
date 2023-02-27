import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5cae9",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardStyle: {
    height: "80%",
    width: "80%",
    // flexWrap: "wrap",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "ivory",
    backgroundColor: "ivory",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 20,
    shadowRadius: 10,
    elevation: 10,
  },
  pressedStyle: {
    opacity: 0.5,
    backgroundColor: "#eee",
  },

  pressableDefault: { backgroundColor: "beige" },
  button: {
    alignItems: "center",
    backgroundColor: "#303f9f",
    width: "47%",
    height: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
  addButton: {
    alignItems: "flex-end",
    backgroundColor: "#303f9f",
    width: "47%",
    height: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
});

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
    color: "#303f9f",
    borderBottomColor: "#303f9f",
    borderBottomWidth: 2,
    width: "100%",

    // marginVertical: 1,
  },
  button: {
    width: "100%",
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
    color: "#303f9f",
    fontSize: 25,
  },
  errorText: {
    width: "100%",
    marginVertical: 1,
  },

  buttonText: {
    color: "#eee",
    alignItems: "center",
  },
  // button: {
  //   marginHorizontal: 10,
  //   width: "30%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});
