import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView
} from "react-native";
import React, { Component, useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Modal from "react-native-modal";

import StudentBg from "../assets/studentbg.png";
import backgroundImage from "../assets/bg-login.jpg";
import LogoIcon from "../assets/icons/menu/logo.png";
import MenuIcon from "../assets/icons/menu/menu.png";
import BackIcon from "../assets/icons/menu/back.png";
import SettingsIcon from "../assets/icons/menu/settings.png";
import CloseIcon from "../assets/icons/menu/close.png";

import ISUMIcon from "../assets/icons/isum.png";
import LAMSIcon from "../assets/icons/lams.png";
import ZIMBRAIcon from "../assets/icons/zimbra.png";
import OBAVESTENJAIcon from "../assets/icons/obavestenja.png";
import POPUSTIIcon from "../assets/icons/popusti.png";
import KONTAKTIcon from "../assets/icons/kontakt.png";
import PlaceholderImage from "../assets/placeholder.png"
import FacebookIcon from '../assets/icons/fb.png';
import ViberIcon from '../assets/icons/viber.png';
import WhatsappIcon from '../assets/icons/whatsapp.png';
import LinkedinIcon from '../assets/icons/linkedin.png';
import InstagramIcon from '../assets/icons/instagram.png';
import YoutubeIcon from '../assets/icons/yt.png';

export default class Pocetna extends Component {
  state = {
    visibleModal: null,
  };
  _renderOptionButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <StatusBar style="light" />
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.topIconsContainer}>
          <View>
            <Image source={LogoIcon} style={styles.logoIcon} />
          </View>
          <View style={styles.menuButtons}>
            {/* -----------------------------------------------------------Podesavanja */}
            <TouchableOpacity
              onPress={({ navigation }) => {
                this.props.navigation.navigate("Podesavanja");
                this.setState({ visibleModal: null });
              }}
            >
              <Image source={SettingsIcon} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
            {/* -----------------------------------------------------------Close */}
            <TouchableOpacity
              onPress={() => this.setState({ visibleModal: null })}
            >
              <Image
                source={CloseIcon}
                style={{ width: 40, height: 40, marginLeft: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.gridWrap}>
          {/* -----------------------------------------------------------ISUM */}
          <TouchableOpacity
            onPress={({ navigation }) => {
              this.props.navigation.navigate("Isum");
              this.setState({ visibleModal: null });
            }}
          >
            <View style={styles.button}>
              <Image source={ISUMIcon} style={styles.optionButtons} />
              <Text>ISUM</Text>
            </View>
          </TouchableOpacity>
          {/* -----------------------------------------------------------LAMS */}
          <TouchableOpacity
            onPress={({ navigation }) => {
              this.props.navigation.navigate("Lams");
              this.setState({ visibleModal: null });
            }}
          >
            <View style={styles.button}>
              <Image source={LAMSIcon} style={styles.optionButtons} />
              <Text>LAMS</Text>
            </View>
          </TouchableOpacity>
          {/* -----------------------------------------------------------ZIMBRA */}
          <TouchableOpacity
            onPress={({ navigation }) => {
              this.props.navigation.navigate("Zimbra");
              this.setState({ visibleModal: null });
            }}
          >
            <View style={styles.button}>
              <Image source={ZIMBRAIcon} style={styles.optionButtons} />
              <Text>ZIMBRA</Text>
            </View>
          </TouchableOpacity>
          {/* -----------------------------------------------------------Obavestenja */}
          <TouchableOpacity
            onPress={({ navigation }) => {
              this.props.navigation.navigate("Obavestenja");
              this.setState({ visibleModal: null });
            }}
          >
            <View style={styles.button}>
              <Image source={OBAVESTENJAIcon} style={styles.optionButtons} />
              <Text>OBAVEŠTENJA</Text>
            </View>
          </TouchableOpacity>
          {/* -----------------------------------------------------------Popusti */}
          <TouchableOpacity
            onPress={({ navigation }) => {
              this.props.navigation.navigate("Popusti");
              this.setState({ visibleModal: null });
            }}
          >
            <View style={styles.button}>
              <Image source={POPUSTIIcon} style={styles.optionButtons} />
              <Text>POPUSTI</Text>
            </View>
          </TouchableOpacity>
          {/* -----------------------------------------------------------Kontakt */}
          <TouchableOpacity onPress={({ navigation }) => {
            this.props.navigation.navigate("Kontakt");
            this.setState({ visibleModal: null });
          }}>
            <View style={styles.button}>
              <Image source={KONTAKTIcon} style={styles.optionButtons} />
              <Text>KONTAKT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.metStudentsText}>Powered by MET Studenti</Text>
      </ImageBackground>
    </View>
  );
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <StatusBar style="light" />
        <View style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <ImageBackground source={StudentBg} style={styles.bgimage}>
              <View
                style={{
                  paddingTop: 75,
                  paddingBottom: 20,
                }}
              >
                <View style={styles.menuButtonsMainPage}>
                  <TouchableOpacity
                    onPress={({ navigation }) => {
                      this.props.navigation.navigate("Podesavanja");
                      this.setState({ visibleModal: null });
                    }}
                  >
                    <Image source={SettingsIcon} style={{ width: 40, height: 40 }} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ visibleModal: 1 });
                    }}
                  >
                    <Image
                      source={MenuIcon}
                      style={{ width: 40, height: 45, marginLeft: 40 }}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={{ color: "white", fontSize: 20, marginLeft: 20 }}>
                  DOBRO DOŠLI
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 30,
                    fontWeight: "bold",
                    marginLeft: 20,
                  }}
                >
                  Ime Prezime
                </Text>
              </View>
              <View style={styles.messageContainer}>
                <Text style={{fontSize: 15}}>Poruka</Text>
              </View>
            </ImageBackground>

            <View style={styles.unreadMailContainer}>
              <Text style={styles.categoryTitle}># Nepročitanih poruka</Text>
              <View style={styles.buttonMail}>
                <Text style={styles.unreadTitle}>Mail naslov</Text>
                <Text style={styles.unreadDesc}>Mail Desc</Text>
                <Text style={styles.unreadDate}>Mail Date</Text>
              </View>
              <View style={styles.buttonMail}>
                <Text style={styles.unreadTitle}>Mail naslov</Text>
                <Text style={styles.unreadDesc}>Mail Desc</Text>
                <Text style={styles.unreadDate}>Mail Date</Text>
              </View>
              <View style={styles.buttonMail}>
                <Text style={styles.unreadTitle}>Mail naslov</Text>
                <Text style={styles.unreadDesc}>Mail Desc</Text>
                <Text style={styles.unreadDate}>Mail Date</Text>
              </View>
              <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', width: '90%' }}>
                <TouchableOpacity style={styles.checkMailButton}>
                  <Text style={{ color: 'white' }}>PROVERI POSTU</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.unreadMailContainer}>
              <Text style={styles.categoryTitle}>Nova Obaveštenja</Text>
              <View style={styles.buttonMail}>
                <Text style={styles.unreadTitle}>Obavestenje naslov</Text>
                <Text style={styles.unreadDesc}>Obavestenje Desc</Text>
                <Text style={styles.unreadDate}>Obavestenje Date</Text>
              </View>
              <View style={styles.buttonMail}>
                <Text style={styles.unreadTitle}>Obavestenje naslov</Text>
                <Text style={styles.unreadDesc}>Obavestenje Desc</Text>
                <Text style={styles.unreadDate}>Obavestenje Date</Text>
              </View>
              <View style={styles.buttonMail}>
                <Text style={styles.unreadTitle}>Obavestenje naslov</Text>
                <Text style={styles.unreadDesc}>Obavestenje Desc</Text>
                <Text style={styles.unreadDate}>Obavestenje Date</Text>
              </View>
            </View>

            <View style={styles.unreadMailContainer}>
              <Text style={styles.categoryTitle}>Događaji</Text>
              <ScrollView horizontal={true} style={styles.horizontalContentView}>

                <TouchableOpacity style={styles.eventContainer}>
                  <Image source={PlaceholderImage} style={styles.eventImage} />
                  <Text style={styles.eventText}>Event Desc</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventContainer}>
                  <Image source={PlaceholderImage} style={styles.eventImage} />
                  <Text style={styles.eventText}>Event Desc</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventContainer}>
                  <Image source={PlaceholderImage} style={styles.eventImage} />
                  <Text style={styles.eventText}>Event Desc</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventContainer}>
                  <Image source={PlaceholderImage} style={styles.eventImage} />
                  <Text style={styles.eventText}>Event Desc</Text>
                </TouchableOpacity>

              </ScrollView>
              <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', width: '90%' }}>
                <TouchableOpacity style={styles.checkMailButton}>
                  <Text style={{ color: 'white' }}>SVI DOGAĐAJI</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.socialContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Text style={{ marginLeft: '5%', color: '#262626', fontSize: 17 }}>Pratite nas</Text>

                <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: '5%' }}>
                  <TouchableOpacity>
                    <Image source={FacebookIcon} style={styles.circularImage} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={InstagramIcon} style={styles.circularImage} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={YoutubeIcon} style={styles.circularImage} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={LinkedinIcon} style={styles.circularImage} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.gridWrapInstagram}>
                <TouchableOpacity>
                  <Image source={PlaceholderImage} style={styles.igPhoto} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={PlaceholderImage} style={styles.igPhoto} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={PlaceholderImage} style={styles.igPhoto} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={PlaceholderImage} style={styles.igPhoto} />
                </TouchableOpacity>

              </View>

              <Text style={styles.metStudentsTextRed}>Powered by MET Studenti</Text>

            </View>

          </ScrollView>
        </View>


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
    backgroundColor: "white",
    width: 150,
    height: 150,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },
  horizontalContentView: {
    flex: 1,
    paddingTop: 10
  },
  unreadMailContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 15
  },
  categoryTitle: {
    width: '90%',
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  eventContainer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 5,
    borderRadius: 10
  },
  eventImage: {
    width: 220,
    height: 123.75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  eventText:{
    margin: 10
  },
  circularImage: {
    borderRadius: 400 / 2,
    width: 50,
    height: 50,
    marginStart: 5,
  },
  socialContainer: {
    paddingTop: 15
  },
  buttonMail: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  messageContainer:{
    width: '90%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingStart: 20,
    paddingEnd: 20,
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 10,
  },
  checkMailButton: {
    backgroundColor: '#c9093d',
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 25,
    paddingEnd: 25,
    borderRadius: 400 / 2,
    marginTop: 10
  },
  modalContent: {
    backgroundColor: "#c9093d",
    padding: 0,
    width: "100%",
    height: "100%",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
  },
  bottomModal: {
    justifyContent: "center",
    margin: 0,
  },
  topIconsContainer: {
    flexDirection: "row",
    marginTop: 70,
    marginBottom: 20,
  },
  logoIcon: {
    width: 200,
    resizeMode: "contain",
    flex: 1,
    marginLeft: 20,
  },
  menuButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
    flex: 1,
  },
  menuButtonsMainPage: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  optionButtons: {
    resizeMode: "contain",
    width: 75,
    height: 75,
  },
  gridWrap: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
  gridWrapInstagram: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  metStudentsText: {
    color: "white",
    width: "100%",
    textAlign: "center",
    marginTop: 30,
  },
  metStudentsTextRed: {
    color: "#c9093d",
    width: "100%",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 35,
    fontSize: 15
  },
  bgimage: {
    alignItems: "center",
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  unreadTitle: {
    color: '#c9093d',
    fontWeight: 'bold',
  },
  unreadDesc: {},
  unreadDate: {
    color: '#c9093d',
  },
  igPhoto: {
    width: 160,
    height: 160,
    margin: 6,
    borderRadius: 7
  },
});
