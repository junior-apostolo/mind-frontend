import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function PageHeaderList({ name, email, nivel, cpf, title }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={handleGoBack}>
          <Icon name="angle-left" size={40} style={styles.icon} />
        </BorderlessButton>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default PageHeaderList;
