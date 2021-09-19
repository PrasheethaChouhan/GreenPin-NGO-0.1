import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import NotificationScreen from '../screens/NotificationScreen ';
import LogOut from '../screens/WelcomeScreen ';
import ForgotPass from '../screens/ForgotPass';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    NotificationScreen: {
      screen: NotificationScreen,
    },
    ForgotPass: {
      screen: ForgotPass,
    },
    LogOut: {
      screen: LogOut,
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
