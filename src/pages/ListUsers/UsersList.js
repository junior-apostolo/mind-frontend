import React from "react";
import { View, Text, ScrollView } from "react-native";
import UserItem from "../../components/UserItem";
import styles from "./styles";
import PageHeaderList from "../../components/PageHeaderList";

function ListUsers() {
  return (
    <View style={styles.container}>
      <PageHeaderList title="Usuarios disponiveis" />

      <ScrollView
        style={styles.userList}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 16 }}
      >
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </ScrollView>
    </View>
  );
}

export default ListUsers;
