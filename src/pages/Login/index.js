import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Sign() {
    try {
      const response = await api.post("/auth/autenticate", {
        email,
        password,
      });

      const { token, user } = response.data;

      // criando uma AsyncStorage para utililizar tanto o token e as informaçoes do usuario de forma global
      await AsyncStorage.multiSet([
        ["@CodeApi:token", token],
        ["@CodeApi:user", JSON.stringify(user)],
      ]);

      if (user.nivel == 999) {
        navigation.navigate("Adm");
      } else if (user.nivel == 1) {
        navigation.navigate("User");
      } else {
        Alert.alert("Usuario desativado");
      }
    } catch (err) {
      Alert.alert("Email ou senha incorreto");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          onChangeText={(value) => setEmail(value)}
        />

        <Text style={styles.txt}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua Senha"
          onChangeText={(value) => setPassword(value)}
        />

        <TouchableOpacity
          onPress={Sign}
          activeOpacity={false}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
