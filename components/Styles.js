import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5cae9",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    // flex: 1,
    height: "100%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textContainer: {
    backgroundColor: "#303f9f",
    width: "90%",
    // height: 45,
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },

  cardStyle: {
    height: "50%",
    width: "90%",
    // flexWrap: "wrap",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#7986cb",
    backgroundColor: "#7986cb",
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
    color: "#7986cb",
  },
  addButton: {
    alignItems: "flex-end",
    backgroundColor: "#303f9f",
    width: "10%",
    height: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
    color: "red",
  },
  text: {
    color: "#eee",
    marginLeft: 15,
    fontSize: 20,
    alignItems: "center",
  },
  calorieStyle: {
    color: "#eee",
    alignItems: "flex-end",
    fontSize: 20,
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
  editInput: {
    color: "#303f9f",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center",
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
  editTitle: {
    width: "100%",
    marginVertical: 10,
    color: "#303f9f",
    fontSize: 20,
  },
  errorText: {
    width: "100%",
    marginVertical: 1,
  },

  buttonText: {
    color: "#eee",
    alignItems: "center",
  },
});
