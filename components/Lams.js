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

export default class Lams extends Component {
  constructor(props) {
    super(props);
    this.webView = React.useRef();
  }

  _onRefresh() {
    this.setState({ refreshing: true });

    // Neki kod pa then this.setState({refreshing: false});
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  }

  getData = async () => {
    try {
      e = await AsyncStorage.getItem("email");
      p = await AsyncStorage.getItem("password");
      this.setState({ email: e });
      this.setState({ password: p });

      console.log("EE " + this.state.email);
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    await this.getData();
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
            ref={webView}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            source={{
              uri: "http://lams.metropolitan.ac.rs:8080/lams/index.do",
            }}
            incognito={true}
            injectedJavaScript={
              "document.getElementById('j_username').value = `" +
              this.state.email
                .substring(0, this.state.email.indexOf("@"))
                .toLowerCase() +
              "`;" +
              " document.getElementById('j_password').value = `" +
              this.state.password +
              "`;" +
              " document.getElementById('loginButton').click()"
            }
            style={{ width: screenWidth, height: screenHeight }}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
