import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStack from '../Screens/ProfileStackScreen/ProfileStack'
import NotificationStack from '../Screens/NotificationStackScreen/NotificationStack'
import AuctionStack from '../Screens/AuctionStackScreen/AuctionStack'
import HomeStack from '../Screens/HomeStackScreen/HomeStack.js'
import SavedStack from '../Screens/SavedStackScreen/SavedStack'
import Colors from '../constants/Colors'
//import { colors } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    activeColor={Colors.Red}
    inactiveColor={Colors.PrimaryBlue}
    tabBarOptions={{
      style: {
        backgroundColor: 'white',
        keyboardHidesTabBar: true
      }
    }}

  >
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Saved Car"
      component={SavedStack}
      options={{
        tabBarLabel: 'SAVED',
        tabBarColor: '#fff',

        tabBarIcon: ({ color }) => (
          <Icon name="heart" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationStack}
      options={{
        tabBarLabel: 'Notification',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="AUCTION"
      component={AuctionStack}
      options={{
        tabBarLabel: 'AUCTION',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Icon name="hammer-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ProfileStack}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;