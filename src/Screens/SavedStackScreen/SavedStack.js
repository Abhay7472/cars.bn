import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import SavedCar from './SavedCar'
import Calculator from './Calculator'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const SavedStack = createStackNavigator();

const SavedStackScreen = (props, { route, navigation }) => (
    <SavedStack.Navigator screenOptions={{
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

        <SavedStack.Screen name="SavedCar" component={SavedCar} options={{ title: 'Saved Car', }} />
        <SavedStack.Screen name="Calculator" component={Calculator} options={{ title: 'Calculator', }} />


    </SavedStack.Navigator>
);

export default SavedStackScreen;