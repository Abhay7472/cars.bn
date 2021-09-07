import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Screens/ProfileStackScreen/MyProfile'
import Notification from '../Screens/NotificationStackScreen/Notification'
import Auction from '../Screens/AuctionStackScreen/Auction'
import DashBoardStack from '../Screens/DashBoardScreen/DashBoardStack'
import SavedCar from '../Screens/SavedStackScreen/SavedCar'
import Colors from '../constants/Colors'
//import { colors } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="DashBoardStack"
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
      name="DashBoardStack"
      component={DashBoardStack}
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
      component={SavedCar}
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
      component={Notification}
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
      component={Auction}
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
      component={Profile}
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
