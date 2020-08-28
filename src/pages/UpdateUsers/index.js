import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  AsyncStorage,
  Alert,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import api from "../../services/api";

function UpdateUsers() {
  const navigation = useNavigation();
  const [editUser, setEditUser] = useState([]);
  const [cpfField, setCpfField] = useState(false);
  const [profile, setProfile] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState(" ");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nivel, setNivel] = useState("");

  useEffect(() => {
    (async () => {
      const user = JSON.parse(await AsyncStorage.getItem("@CodeApi:editUser"));
      setEditUser(user);
      setCpfField(user.cpf);
      setName(user.name);
      setNivel(user.nivel);
      setEmail(user.email);
    })();
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  async function Update() {
    if (cpfField.isValid()) {
      if (password === " ") {
        const response = await api.put("projects/" + editUser._id, {
          cpf: cpfField.getRawValue(),
          name,
          email,
          nivel,
        });
      } else {
        const response = await api.put("projects/" + editUser._id, {
          cpf: cpfField.getRawValue(),
          name,
          email,
          nivel,
          password,
        });
      }
      Alert.alert("Alterado com sucesso!");
    } else {
      Alert.alert("CPF Invalido!");
    }
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topbar}>
            <BorderlessButton onPress={handleGoBack}>
              <Icon name="angle-left" size={40} style={styles.icon} />
            </BorderlessButton>
          </View>
          <View>
            <TouchableOpacity style={styles.viewStyle}>
              <Image
                style={styles.image}
                source={require("../../assets/images/avatar.jpg")}
              />
            </TouchableOpacity>

            <Text style={styles.txt}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu Nome"}
              onChangeText={(value) => setName(value)}
            >
              {editUser.name}
            </TextInput>

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
            >
              {editUser.email}
            </TextInput>

            <Text style={styles.txt}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite sua Senha"}
              onChangeText={(value) => setPassword(value)}
            />

            <Text style={styles.txt}>Nivel</Text>
            <TextInput
              style={styles.input}
              placeholder={""}
              onChangeText={(value) => setNivel(value)}
            >
              {editUser.nivel}
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={Update}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default UpdateUsers;
