import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import CreateEventScreen from "../screens/CreateEventScreen";
import Home from "../screens/Home";
import NGOeventDetail from "../screens/NGOeventDetail";

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    CreateEventScreen: {
      screen: CreateEventScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    NGOeventDetail: {
      screen: NGOeventDetail,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);
