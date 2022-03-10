import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Pocetna = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pozdrav sa Pocetna.js!</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </View>
  );
};

export default Pocetna;
