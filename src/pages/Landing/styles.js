import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fe",
    justifyContent: "center",
    padding: 40,
    paddingBottom: 150,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
    borderRadius: 5,
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#8257e5",
    fontSize: 20,
    lineHeight: 30,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: "#8257e5",
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttomPrimary: {
    backgroundColor: "#8257e5",
  },
  buttomSecundary: {
    backgroundColor: "#000",
  },
  buttonText: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 12,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
  },
});

export default styles;
