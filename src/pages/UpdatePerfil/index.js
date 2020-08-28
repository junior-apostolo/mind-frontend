import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Alert,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/api";
import { TextInputMask } from "react-native-masked-text";

function UpdatePerfil() {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);
  const [cpfField, setCpfField] = useState(false);
  const [profile, setProfile] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState(" ");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      const user = JSON.parse(await AsyncStorage.getItem("@CodeApi:user"));
      setUser(user);
      setCpfField(user.cpf);
      setName(user.name);
      setEmail(user.email);
    })();
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  async function Update() {
    if (cpfField.isValid()) {
      if (password === " ") {
        const response = await api.put("projects/" + user._id, {
          cpf: cpfField.getRawValue(),
          name,
          email,
        });
      } else {
        const response = await api.put("projects/" + user._id, {
          cpf: cpfField.getRawValue(),
          name,
          email,
          password,
          
        });
        
      }
      // atualizando as informaçoes no asyncStorage
        user.name = name
        user.cpf = cpfField.getRawValue()
        user.email = email
      await AsyncStorage.multiSet([["@CodeApi:user", JSON.stringify(user)]])
      Alert.alert("Alterado com sucesso!");
    } else {
      Alert.alert("CPF Invalido!");
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.topbar}>
            <BorderlessButton onPress={handleGoBack}>
              <Icon name="angle-left" size={40} style={styles.icon} />
            </BorderlessButton>
          </View>
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
            {user.name}
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
            {user.email}
          </TextInput>
          <Text style={styles.txt}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite sua Senha"}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity style={styles.button} onPress={Update}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default UpdatePerfil;
