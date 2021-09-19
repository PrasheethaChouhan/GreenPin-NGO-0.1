import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import firebase from "firebase";
const { width } = Dimensions.get("screen");
import db from "../config";
import { Header, Badge } from "react-native-elements";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      ngoId: firebase.auth().currentUser.email,
      previousEvents: [],
    };
  }

  getEvents = () => {
    var email = this.state.ngoId;
    this.requestRef = db
      .collection("events")
      .where("ngoId", "==", email)
      .onSnapshot((snapshot) => {
        var dbpreviousEvents = [];

        snapshot.docs.map((doc) => {
          dbpreviousEvents.push(doc.data());
        });
        console.log(dbpreviousEvents);

        this.setState({
          previousEvents: dbpreviousEvents,
        });
        console.log(this.state.previousEvents);
      });
  };
  componentDidMount() {
    this.getEvents();
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 10,
            borderWidth: 2,
            borderColor: "white",
            margin: 5,
            borderRadius: 10,
          }}
          onPress={() => {
            this.props.navigation.navigate("NGOeventDetail", {
              eventDetails: item,
            });
          }}
        >
          <Image source={item.eventImage} style={styles.img} />
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", textAlign: "center", margin: 5 }}>
              Name: {item.eventName}
            </Text>
            <Text style={{ color: "white", textAlign: "center" }}>
              Event Id: {item.eventId}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 0,
          backgroundColor: "#1B2E0F",
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("CreateEventScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Create Event
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 0.8 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              padding: 10,
            }}
          >
            Previous Events
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: "#1B2E0F",
              color: "#82152b",
            }}
          >
            {this.state.previousEvents.length === 0 ? (
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20 }}>No event found</Text>
              </View>
            ) : (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.previousEvents}
                renderItem={this.renderItem}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "95%",
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#375C1E",
    marginTop: 10,
  },

  img: {
    flex: 0.4,
    width: "50%",
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
    justifyContent: "center",
  },
});
