import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function PageHeader({ name, email, nivel }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={handleGoBack}>
          <Icon name="angle-left" size={40} style={styles.icon} />
        </BorderlessButton>
      </View>
      <View style={styles.viewStyle}>
        <Image
          style={styles.image}
          source={require("../../assets/images/avatar.jpg")}
        />
        <Text style={styles.txt}>{name}</Text>
        <Text style={styles.txtEmail}>{email}</Text>
        <Text style={styles.Nivel}>{nivel}</Text>
      </View>
    </View>
  );
}

export default PageHeader;
