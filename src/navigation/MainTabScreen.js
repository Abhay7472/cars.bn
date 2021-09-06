import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Screens/ProfileStackScreen/MyProfile'
import Notification from '../Screens/NotificationStackScreen/Notification'
 import Auction from '../Screens/AuctionStackScreen/Auction'
 import DashBoard from  '../Screens/DashBoardScreen/DashBoard.js'
import SavedCar from '../Screens/SavedStackScreen/SavedCar'



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
  options={{headerShown:true}}
    initialRouteName="Home"
    activeColor="#ff0000"
    tabBarOptions={{
      style:{
        backgroundColor:'white',
        keyboardHidesTabBar :true
        }
    }}   

  >
    <Tab.Screen
   // options={{headerShown:false}}
      name="HOME"
      component={DashBoard}
      options={{
        tabBarLabel: 'Home',
       // tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}  
    />
    <Tab.Screen
   // options={{headerShown:false}}
      name="Saved Car"
      component={SavedCar}
      options={{
        tabBarLabel: 'SAVED',
        // tabBarColor: '#0000cd',
       
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
        // tabBarColor: '#0000cd',
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
        // tabBarColor: '#0000cd',
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
        // tabBarColor: '#0000cd',
        tabBarIcon: ({ color }) => (
          <Icon name="person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
