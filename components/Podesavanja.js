import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  Switch
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

import ShareIcon from '../assets/icons/info.png';
import InfoIcon from '../assets/icons/share.png';

export default class Podesavanja extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSwitch: null,
    }
  }
  toggleSwitch = (switchNumber) => {
    this.setState({
      activeSwitch: switchNumber === this.state.activeSwitch ? null : switchNumber
    })
  };
  switchOne = (value) => { this.toggleSwitch(1) };
  switchTwo = (value) => { this.toggleSwitch(2) };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", paddingTop: 10 }}>
        <StatusBar style="dark" />

        <View style={styles.button}>
          <Switch
            trackColor={{ false: "#767577", true: "#c9093d" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.switchOne}
            value={this.state.activeSwitch === 1}
            style={styles.switch}
          />
          <View>
            <Text>Zimbra Mail</Text>
            <Text style={{ color: 'grey', fontSize: 13 }}>Obaveštenja o novim porukama</Text>
          </View>
        </View>

        <View style={styles.button}>
          <Switch
            trackColor={{ false: "#767577", true: "#c9093d" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.switchTwo}
            value={this.state.activeSwitch === 2}
            style={styles.switch}
          />
          <View>
            <Text>Notifikacije</Text>
            <Text style={{ color: 'grey', fontSize: 13 }}>Važne informacije - obaveštenja</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('OAplikaciji')}>
          <Image source={InfoIcon} style={styles.buttonIcon} />
          <View>
            <Text>O MET Aplikaciji</Text>
            <Text style={{ color: 'grey', fontSize: 13 }}>Od MET studenata, za MET studente</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('Share Context')}>
          <Image source={ShareIcon} style={styles.buttonIcon} />
          <View>
            <Text>Preporuči prijatelju</Text>
            <Text style={{ color: 'grey', fontSize: 13 }}>Preporuči MET aplikaciju svom prijatelju</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={() => this.props.navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}>
          <Text style={{ color: '#c9093d' }}>ODJAVA</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: 'white',
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
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    width: '90%',
    borderRadius: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

    elevation: 5,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginEnd: 15,
  },
  switch: {
    transform: [{ scaleX: .9 }, { scaleY: .9 }],
    marginStart: -10,
    marginEnd: 15,
  }
});