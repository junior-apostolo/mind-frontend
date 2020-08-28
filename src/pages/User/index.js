import React, { useEffect, useState } from "react";
import { View, AsyncStorage } from "react-native";
import PageHeader from "../../components/PageHeader/index";
import Button from "../../components/Button";

function User() {
  const [image, setImage] = useState(null);
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("@CodeApi:token");
      const user = JSON.parse(await AsyncStorage.getItem("@CodeApi:user"));
      setUser(user);
    })();
  });

  return (
    <View style={{ flex: 1 }}>
      <PageHeader name={user.name} email={user.email} />

      <View>
        <Button nome="Editar Perfil" navigation="UpdatePerfil" />
      </View>
    </View>
  );
}

export default User;
