import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";

var screenWidth = Dimensions.get("window").width;
var screenHeight = Dimensions.get("window").height;

export default class Isum extends Component {
  // webref = useRef();

  state = {
    refreshing: false,
    email: "",
    password: "",
  };

  getData = async () => {
    try {
      e = await AsyncStorage.getItem("email");
      p = await AsyncStorage.getItem("password");
      this.setState({ email: e });
      this.setState({ password: p });

      console.log(this.state.email);
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    await this.getData();
    // run = " document.getElementById('username').value = 'trajlabe'";
    console.log("`" + this.state.password + "`");
    run =
      "document.getElementById('username').value = `" +
      this.state.email.substring(0, this.state.email.indexOf("@")) +
      "`" +
      "; document.getElementById('password').value = `" +
      this.state.password +
      "`";
    +"; document.getElementsByClassName('t-beaneditor-submit')[0].click()";

    // +
    // this.state.email +
    // "; "document.getElementById('password').value = " +
    // this.state.password +
    // "; document.getElementsByClassName('t-beaneditor-submit')[0].click()";

    // setInterval(() => {
    //   this.webref.injectJavaScript(run);
    // }, 3000);
  }

  _onRefresh() {
    this.setState({ refreshing: true });

    // Neki kod pa then this.setState({refreshing: false});
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar style="light" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          <WebView
            ref={(r) => (this.webref = r)}
            source={{
              uri: "https://isum.metropolitan.ac.rs",
            }}
            style={{ width: screenWidth, height: screenHeight }}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
