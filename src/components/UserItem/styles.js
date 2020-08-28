import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderColor: "#e6e6fe",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: "Poppins_600SemiBold",
    color: "#32264d",
    fontSize: 20,
  },
  email: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },
  cpf: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },
  nivel: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  editButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
});

export default styles;
