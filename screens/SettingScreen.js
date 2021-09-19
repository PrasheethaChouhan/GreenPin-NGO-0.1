import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Avatar } from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';
import { Header, Icon, Badge } from 'react-native-elements';
const { width } = Dimensions.get('screen');

export default class SettingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      docId: '',
    };
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('users')
      .where('email_id', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };

  

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#1B2E0F',
          marginTop: -30,
        }}>
          <Header
          centerComponent={{
            text: 'GreenPin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />
          <ScrollView>
          <Avatar
          size={150}
          containerStyle={{flex: 2, marginLeft: 130, marginTop: 10}}
          rounded
          icon={{name: 'user', type: 'font-awesome'}}
          source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          />
            <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginBottom:40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            </TouchableOpacity>
            <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: -75,
              marginBottom:40,
              marginLeft: '35%',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
            }}>
              Update Profile
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginBottom:40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            </TouchableOpacity>
            <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: -75,
              marginBottom:40,
              marginLeft: '38%',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
            }}>
              About App 
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginBottom:40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}>
            </TouchableOpacity>
            <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: -75,
              marginBottom:40,
              marginLeft: '42%',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
            }}>
              Review 
            </Text>
            <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginBottom:40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen');
            }}>
            </TouchableOpacity>
            <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: -75,
              marginBottom:40,
              marginLeft: '41%',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
            }}>
              Log Out
            </Text>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
  },
  products: {
    width: width - 50 * 2,
    paddingVertical: 50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  shadow: {
    shadowColor: '#415136',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },

  postRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    width: Dimensions.get('window').width * 1,
  },
  postImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
  },
  userImage: {
    marginRight: 12,
  },
});
