import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import UserItem from "../../components/UserItem";
import styles from "./styles";
import PageHeaderList from "../../components/PageHeaderList";
import api from "../../services/api";
import { useLinkProps } from "@react-navigation/native";

function EditUser() {
  const [users, setUsers] = useState([]);

  // Faz varias requisiçoes. ponto a melhorar!!
  useEffect(() => {
    (async () => {
      const response = await api.get("projects/users");

      setUsers(response.data.user);
    })();
  });

  return (
    <View style={styles.container}>
      

      <PageHeaderList title="Usuarios disponiveis" />

      <ScrollView
        style={styles.userList}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 16 }}
      >
        {users &&
          users.map((user) => {
            return (
              <UserItem
                id={user._id}
                nome={user.name}
                email={user.email}
                cpf={user.cpf}
                nivel={user.nivel}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default EditUser;
