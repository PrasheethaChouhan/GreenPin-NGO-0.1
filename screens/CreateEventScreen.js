import * as React from "react";
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
  Alert,
} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header, Icon, Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
export default class CreateEventScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      ngoId: firebase.auth().currentUser.email,
      eventId: "",
      eventName: "",
      eventDetails: "",
      minimumDonationAmount: "",
      image: "#",
    };
  }
  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }
  submitEvent = async () => {
    var randomRequestId = this.createUniqueId();

    await this.uploadImage(this.state.image, randomRequestId);
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("events/" + imageName);

    await ref.put(blob).then((response) => {
      ref
        .getDownloadURL()
        .then((url) => {
          console.log("fetch successful" + url);
          this.setState({ image: url });
          console.log(this.state.image);
          db.collection("events").add({
            eventImage: this.state.image,
            ngoId: this.state.ngoId,
            eventId: imageName,
            eventName: this.state.eventName,
            eventDetails: this.state.eventDetails,
            minimumDonationAmount: this.state.minimumDonationAmount,
          });

          return Alert.alert("Event added successfully");
        })
        .catch((error) => {
          console.log("fetch unsuccesfully");
          this.setState({ image: "#" });
        });
    });
  };

  fetchImage = async (imageName) => {
    console.log("fetchImage executed");
    var storageRef = firebase
      .storage()
      .ref()
      .child("events/" + imageName);

    // Get the download URL
    await storageRef
      .getDownloadURL()
      .then((url) => {
        console.log("fetch successful" + url);
        this.setState({ image: url });
      })
      .catch((error) => {
        console.log("fetch unsuccesfully");
        this.setState({ image: "#" });
      });
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.setState({
        image: uri,
      });
    }
  };
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
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />
        <Avatar
          size={"xlarge"}
          rounded
          source={{
            uri: this.state.image,
          }}
          onPress={() => this.selectPicture()}
          showEditButton
        />

        <View style={styles.modalContainer}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 30,
              color: "#73FA79",
              marginTop: "-55%",
              marginBottom: 30,
            }}
          >
            Create your Event
          </Text>
          <TextInput
            style={styles.formTextInput}
            placeholder="Event Name"
            placeholderTextColor="white"
            onChangeText={(e) => {
              this.setState({
                eventName: e,
              });
            }}
            value={this.state.eventName}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Event Description"
            placeholderTextColor="white"
            multiline={true}
            onChangeText={(e) => {
              this.setState({
                eventDetails: e,
              });
            }}
            value={this.state.eventDetails}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Minimum Donation Amount"
            placeholderTextColor="white"
            keyboardType="numeric"
            onChangeText={(e) => {
              this.setState({
                minimumDonationAmount: e,
              });
            }}
            value={this.state.minimumDonationAmount}
          />

          <TouchableOpacity
            style={styles.donation2Button}
            onPress={() => {
              this.submitEvent(this.state.image);
            }}
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Create
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
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
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
    flex: 5,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2E0F",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
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
    marginBottom: 5,
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
    width: "60%",
    height: "5.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#0b7a07",
    elevation: 20,
    marginTop: "15%",
  },
});
