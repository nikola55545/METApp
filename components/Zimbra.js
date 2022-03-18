import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  LogBox 
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";
import AnimatedPullToRefresh from 'react-native-animated-pull-to-refresh'

var screenWidth = Dimensions.get("window").width;
var screenHeight = Dimensions.get("window").height;

export default class Zimbra extends Component {
  state = {
    isRefreshing: false,
  };
  componentDidMount() {
    setTimeout(this.onRefresh);
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }
  onRefresh = () => {
    this.setState({ isRefreshing: true });
    
    //Ovde ide kod sta treba da se uradi

    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 1000);

  }

  render() {
    return (
      <AnimatedPullToRefresh
        isRefreshing={this.state.isRefreshing}
        onRefresh={this.onRefresh}
        pullHeight={1 * screenHeight}
        backgroundColor={'#c9093d'}
        renderElement={
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <StatusBar style="light" />
            <WebView
              source={{
                uri: "https://mail.metropolitan.ac.rs/",
              }}
              style={{ width: screenWidth, height: screenHeight }}
            />
          </View>
        }
        duration={500}
        pullAnimationSource={require('../assets/loading.json')}
        startRefreshAnimationSource={require('../assets/loading.json')}
        refreshAnimationSource={require('../assets/loading.json')}
        endRefreshAnimationSource={require('../assets/loading.json')}

      />
    );
  }
}
const styles = StyleSheet.create({});
