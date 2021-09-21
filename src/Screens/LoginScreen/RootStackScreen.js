import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import HomePage from './HomePage';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import UserLoginScreen from './UserLoginScreen';
import RegistrationScreen from './RegistrationScreen'
import SocialLoginScreen from './SocialLoginScreen'
import RagistrationDealerScreen from './RagistrationDealerScreen'
import ForgetPassword from './ForgetPassword';
import colors from '../../constants/Colors'

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator screenOptions={{
    headerShown: null,
    statusbarColor: colors.PrimaryBlue,
  }}
  >
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="HomePage" component={HomePage} />
    <RootStack.Screen name="UserLoginScreen" component={UserLoginScreen} />
    <RootStack.Screen name="SocialLoginScreen" component={SocialLoginScreen} />
    <RootStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    <RootStack.Screen name="RagistrationDealerScreen" component={RagistrationDealerScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="ForgetPassword" component={ForgetPassword} />
  </RootStack.Navigator>
);

export default RootStackScreen;
