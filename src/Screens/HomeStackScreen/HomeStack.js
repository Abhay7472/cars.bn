import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
 import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const HomeStackScreen = (props, { route, navigation }) => (
    <HomeStack.Navigator screenOptions={{
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
            <Feather.Button name="message-square" size={22} backgroundColor="white" color='#213884' onPress={() => props.navigation.navigate('Message')}></Feather.Button>
        )
    }}>

        <HomeStack.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: true }} />


    </HomeStack.Navigator>
);

export default HomeStackScreen;