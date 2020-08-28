import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Button({ nome, navigation }) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={() => navigate(navigation)} style={styles.btn}>
        <Text style={styles.txt}>{nome}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
