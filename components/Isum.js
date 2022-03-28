import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";

var screenWidth = Dimensions.get("window").width;
var screenHeight = Dimensions.get("window").height;

export default class Isum extends Component {
  state = {
    refreshing: false,
  };

  _onRefresh() {
    this.setState({ refreshing: true });

    // Neki kod pa then this.setState({refreshing: false});
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar style="light" />
        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />
        }>
        <WebView
          source={{
            uri: "https://isum.metropolitan.ac.rs/isum=1646237280032/",
          }}
          style={{ width: screenWidth, height: screenHeight }}
        />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
