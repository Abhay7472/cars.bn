import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../Screens/TabScreens/ExploreScreen'
import Notification from '../Screens/TabScreens/Notification';
import Sell from '../Screens/TabScreens/Sell';
import Auction from '../Screens/TabScreens/Auction';
import Home1 from '../Screens/TabScreens/Home1';
import Saved from '../Screens/TabScreens/Saved';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#ff0000"

  >
    <Tab.Screen
      name="HOME"
      component={Home1}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="SAVED"
      component={Saved}
      options={{
        tabBarLabel: 'SAVED',
        tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="heart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="SELL"
      component={Sell}
      options={{
        tabBarLabel: 'SELL',
        tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="car-sport-outline" color={color} size={26} />
        ),
      }}
    />


    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarLabel: 'Notification',
        tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="AUCTION"
      component={Auction}
      options={{
        tabBarLabel: 'AUCTION',
        tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="hammer-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
