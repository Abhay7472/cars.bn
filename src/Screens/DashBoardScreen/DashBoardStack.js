import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import DashBoard from './DashBoard.js'
import Icon from 'react-native-vector-icons/Ionicons';

const DashBoardStack = createStackNavigator();

const HomeStackScreen = (props, { route, navigation }) => (
    <DashBoardStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "white"
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

        <DashBoardStack.Screen name="DashBoard" component={DashBoard} options={{ title: 'Home', headerShown: true }} />


    </DashBoardStack.Navigator>
);

export default HomeStackScreen;