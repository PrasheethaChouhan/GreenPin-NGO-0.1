import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header, Icon } from "react-native-elements";
export default class Donation extends React.Component {
  constructor() {
    super();
    this.state = {
      username: firebase.auth().currentUser.email,
      NGO: "",
      eventId: "",
      eventDetail: false,
      preferenceOfUser: "",
      donationAmmount: "",
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1B2E0F",
          marginTop: -30,
        }}
      >
        <Header
          centerComponent={{
            text: "GreenPin",
            style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate("NotificationScreen");
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />

        <View style={styles.modalContainer}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 30,
              color: "#73FA79",
              marginTop: "-80%",
            }}
          >
            Donation List
          </Text>
          <TouchableOpacity style={styles.donation1Button}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Donation 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donation2Button}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Donation 2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donation2Button}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Donation 3
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "300",
    // fontFamily:'AvenirNext-Heavy',
    color: "green",
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: "#73FA79",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "blue",
    elevation: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },

  modalContainer: {
    flex: 1,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2E0F",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "white",
    color: "white",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    borderColor: "#73FA79",
  },
  registerButtonText: {
    color: "#73FA79",
    fontSize: 15,
    fontWeight: "bold",
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 60,
  },
  donation1Button: {
    width: "95%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#375C1E",
    elevation: 10,
    marginTop: "10%",
  },
  donation2Button: {
    width: "95%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#375C1E",
    elevation: 20,
    marginTop: "10%",
  },
});
