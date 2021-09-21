import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
 import Calculator from './Calculator';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/Colors'


const CalculatorStack = createStackNavigator();

const CalculatorStackScreen = (props, { route, navigation }) => (
    <CalculatorStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "white"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: "black"

        },
        headerTitleStyle: {
            color: colors.PrimaryBlue,

        },
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#213884' onPress={() => props.navigation.openDrawer()}></Icon.Button>
        ),

        headerRight: () => (
            <Feather.Button name="message-square" size={22} backgroundColor="white" color='#213884' onPress={() => props.navigation.navigate('Message')}></Feather.Button>
        )
    }}>

              <CalculatorStack.Screen name="Calculator" component={Calculator} options={{ title: 'Calculator', }} />


    </CalculatorStack.Navigator>
);

export default CalculatorStackScreen;