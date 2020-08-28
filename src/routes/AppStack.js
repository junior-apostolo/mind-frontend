import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing/App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Adm from "../pages/Adm";
import ListUsers from "../pages/ListUsers/UsersList";
import User from "../pages/User";
import EditUser from "../pages/EditUsers";
import UpdateUsers from "../pages/UpdateUsers";
import UpdatePerfil from "../pages/UpdatePerfil";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerStyle: { backgroundColor: "#8257e5" },
          headerTintColor: "#fff",
        }}
      >
        <Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Adm" component={Adm} options={{ headerShown: false }} />
        <Screen
          name="ListUsers"
          component={ListUsers}
          options={{ headerShown: false }}
        />
        <Screen name="User" component={User} options={{ headerShown: false }} />
        <Screen
          name="EditUser"
          component={EditUser}
          options={{ headerShown: false }}
        />
        <Screen
          name="UpdatePerfil"
          component={UpdatePerfil}
          options={{ headerShown: false }}
        />
        <Screen
          name="UpdateUsers"
          component={UpdateUsers}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
