import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./styles";
import { TextInputMask } from "react-native-masked-text";
import api from "../../services/api";

function Register({ navigation }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [cpfField, setCpfField] = useState(false);

  async function Cadastrar() {
    try {
      if (cpfField.isValid()) {

        const response = await api.post("auth/register", {
          name,
          email,
          cpf: cpfField.getRawValue(),
          nivel: 1,
          path: "",
          password,
        });
        navigation.navigate("Login");
      } else {
        Alert.alert("CPF Invalido!");
      }
    } catch (err) {
      Alert.alert("Erro");
      navigation.navigate("Register");
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.viewStyle}>
            <Image
              style={styles.image}
              source={
                image == null
                  ? require("../../assets/images/avatar.jpg")
                  : { path: image.path }
              }
            />
          </TouchableOpacity>

          <Text style={styles.txt}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite seu Nome"}
            onChangeText={(value) => setName(value)}
          />

          <Text style={styles.txt}>CPF</Text>
          <TextInputMask
            style={styles.input}
            placeholder={"Digite seu CPF"}
            type={"cpf"}
            value={cpf}
            onChangeText={(text, ref = null) => {
              setCpf(text);
            }}
            ref={(ref) => {
              setCpfField(ref);
            }}
          />

          <Text style={styles.txt}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite seu Email"}
            onChangeText={(value) => setEmail(value)}
          />

          <Text style={styles.txt}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={"Digite sua Senha"}
            onChangeText={(value) => setPassword(value)}
          />

          <TouchableOpacity style={styles.button} onPress={Cadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Register;
