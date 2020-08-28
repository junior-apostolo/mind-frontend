import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";
import PageHeader from "../../components/PageHeader/index";
import Button from "../../components/Button";

function Adm() {
  const [image, setImage] = useState(null);
  const [user, setUser] = useState("");

  
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("@CodeApi:token");
      const user = JSON.parse(await AsyncStorage.getItem("@CodeApi:user"));
      setUser(user);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PageHeader name={user.name} email={user.email} nivel={user.nivel} />

      <View>
        <Button nome="Editar Usuarios" navigation="EditUser" />
      </View>
    </View>
  );
}

export default Adm;
