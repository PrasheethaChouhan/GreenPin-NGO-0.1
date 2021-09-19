import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import { AppTabNavigator } from "./components/AppTabNavigator";
import NotificationScreen from "./screens/NotificationScreen ";
//import MyHeader from './components/MyHeader';

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AppTabNavigator: { screen: AppTabNavigator },
  //MyHeader:{screen:MyHeader},
  NotificationScreen: { screen: NotificationScreen },
});

const AppContainer = createAppContainer(switchNavigator);
