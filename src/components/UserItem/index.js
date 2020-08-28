import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

function UserItem(props) {
  const [image, setImage] = useState(null);
  const [editUser, setEditUsers] = useState();

  const navigation = useNavigation();

  async function handleToNavigateEdit() {
    const response = await api.get("projects/user/" + props.id);

    setEditUsers(response.data.user);

    await AsyncStorage.multiSet([
      ["@CodeApi:editUser", JSON.stringify(editUser)],
    ]);

    navigation.navigate("UpdateUsers");
  }

  return (
    <View key={props.id} style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={
            image == null
              ? require("../../assets/images/avatar.jpg")
              : { path: image.path }
          }
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{props.nome}</Text>
          <Text style={styles.email}>Email:{props.email}</Text>
          <Text style={styles.cpf}>CPF:{props.cpf} </Text>
          <Text style={styles.nivel}>Nivel:{props.nivel}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buttonsContainer}>
        <RectButton onPress={handleToNavigateEdit} style={styles.editButton}>
          <Icon name="cog" style={styles.icon}></Icon>
        </RectButton>
      </TouchableOpacity>
    </View>
  );
}

export default UserItem;
