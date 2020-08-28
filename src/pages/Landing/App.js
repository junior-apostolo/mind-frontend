import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
//import {VscSignin,BsPencilSquare} from 'react-icons'
import LoginImg from "../../assets/images/bear-logo-image-440x440.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

function Landing() {
  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  function handleNavigateRegister() {
    navigation.navigate("Register");
  }

  return (
    <View style={styles.container}>
      <Image source={LoginImg} style={styles.banner} />

      <Text style={styles.title}>
        {" "}
        Seja Bem-vindo,{"\n"}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToLogin}
          style={[styles.button, styles.buttomPrimary]}
        >
          <Icon
            name="sign-in"
            size={45}
            color="#fff"
            style={styles.icon}
          ></Icon>

          <Text style={styles.buttonText}>Logar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateRegister}
          style={[styles.button, styles.buttomSecundary]}
        >
          <Icon name="pencil" size={45} color="#fff" style={styles.icon}></Icon>

          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
