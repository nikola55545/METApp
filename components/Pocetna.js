import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Modal from "react-native-modal";

export default class Pocetna extends Component {
  state = {
    visibleModal: null,
  };
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton("Zatvori", () =>
        this.setState({ visibleModal: null })
      )}
    </View>
  );
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar style="auto" />
        <Text>Pozdrav sa Pocetna.js!</Text>
        {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
        {this._renderButton("Meni", () => this.setState({ visibleModal: 1 }))}
        <Modal
          isVisible={this.state.visibleModal === 1}
          animationIn={"slideInRight"}
          animationOut={"slideOutRight"}
          style={styles.bottomModal}
        >
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "red",
    padding: 22,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "center",
    margin: 0,
  },
});
