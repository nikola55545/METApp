import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import Pocetna from "./components/Pocetna";
import OAplikaciji from "./components/OAplikaciji";
import Obavestenja from "./components/Obavestenja";
import Popusti from "./components/Popusti";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pocetna"
          component={Pocetna}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Obavestenja"
          component={Obavestenja}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Popusti"
          component={Popusti}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="OAplikaciji"
          component={OAplikaciji}
          options={{ headerShown: true, title: "O Aplikaciji" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
