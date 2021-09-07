import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

import Payment from '../DrawerContainer/Payment';
import AskAdmin from '../DrawerContainer/AskAdmin';
import Message from '../DrawerContainer/Message';
import PrivacyPolicy from '../DrawerContainer/PrivacyPolicy';
import RequestStatus from './RequestStatus';
import MyPostDesign from './NewPostStackScreen/MyPostDesign';
import TermCondition from '../DrawerContainer/TermCondition';
import { colors } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';





const DrawerContainer = createStackNavigator();

const DrawerContainerStack = (props, { navigation }) => (
  <DrawerContainer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: colors.white
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: "black"

    },
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#213884' onPress={() => props.navigation.openDrawer()}></Icon.Button>
    ),

    headerRight: () => (
      <Feather.Button name="message-square" size={22} backgroundColor="white" color='#213884' onPress={() => props.navigation.navigate('Payment')}></Feather.Button>
    )
  }}>

    <DrawerContainer.Screen name="Payment" component={Payment} options={{ title: 'Payment' }} />
    <DrawerContainer.Screen name="AskAdmin" component={AskAdmin} options={{ title: 'Ask Admin' }} />
    <DrawerContainer.Screen name="Message" component={Message} options={{ title: 'Message' }} />
    <DrawerContainer.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'PrivacyPolicy' }} />
    <DrawerContainer.Screen name="RequestStatus" component={RequestStatus} options={{ title: 'RequestStatus' }} />
    <DrawerContainer.Screen name="MyPostDesign" component={MyPostDesign} options={{ title: 'MyPostDesign' }} />
    <DrawerContainer.Screen name="TermCondition" component={TermCondition} options={{ title: 'TermCondition' }} />
  </DrawerContainer.Navigator>
);

export default DrawerContainerStack;
