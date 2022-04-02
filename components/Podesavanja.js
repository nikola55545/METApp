import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  Switch,
  Share
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

import AsyncStorage from "@react-native-async-storage/async-storage";

import ShareIcon from "../assets/icons/info.png";
import InfoIcon from "../assets/icons/share.png";

export default class Podesavanja extends Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false,
      switch2Value: false,
    };
  }
  toggleSwitch1 = (value) => {
    this.setState({ switch1Value: value });
    console.log("Switch 1 is: " + value);
  };
  toggleSwitch2 = (value) => {
    this.setState({ switch2Value: value });
    console.log("Switch 2 is: " + value);
  };

  odjaviMe = async () => {
    try {
      await AsyncStorage.setItem("email", "");
      await AsyncStorage.setItem("password", "");
    } catch (e) {
      console.log(e);
    }

    this.props.navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: 'LINK KA APLIKACIJI',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 10,
        }}
      >
        <StatusBar style="light" />
        <View style={styles.button}>
          <Switch
            trackColor={{ false: "#767577", true: "#c9093d" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch1}
            value={this.state.switch1Value}
            style={styles.switch}
          />
          <View>
            <Text>Zimbra Mail</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Obaveštenja o novim porukama
            </Text>
          </View>
        </View>

        <View style={styles.button}>
          <Switch
            trackColor={{ false: "#767577", true: "#c9093d" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.toggleSwitch2}
            value={this.state.switch2Value}
            style={styles.switch}
          />
          <View>
            <Text>Notifikacije</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Važne informacije - obaveštenja
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("OAplikaciji")}
        >
          <Image source={InfoIcon} style={styles.buttonIcon} />
          <View>
            <Text>O MET Aplikaciji</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Od MET studenata, za MET studente
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.onShare}
        >
          <Image source={ShareIcon} style={styles.buttonIcon} />
          <View>
            <Text>Preporuči prijatelju</Text>
            <Text style={{ color: "grey", fontSize: 13 }}>
              Preporuči MET aplikaciju svom prijatelju
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={this.odjaviMe}>
          <Text style={{ color: "#c9093d" }}>ODJAVA</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingTop: 15,
    paddingBottom: 15,
    paddingStart: 45,
    paddingEnd: 45,
    marginTop: 7.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    elevation: 5,
  },
  button: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    elevation: 5,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginEnd: 15,
  },
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
    marginStart: -10,
    marginEnd: 15,
  },
});
