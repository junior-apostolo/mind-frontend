import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fe",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    borderRadius: 3,
  },
  txt: {
    color: "#8257e5",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    marginTop: 15,
  },
  button: {
    width: 300,
    height: 45,
    backgroundColor: "#8257e5",
    marginTop: 30,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
