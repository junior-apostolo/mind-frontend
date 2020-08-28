import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fe",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    borderRadius: 3,
  },
  txt: {
    color: "#8257e5",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
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
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  viewStyle: {
    alignItems: "center",
  },
  icon: {
    color: "#8257e5",
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
