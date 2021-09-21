import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Auction from './Auction';
//import ForAuction from './ForAuction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/Colors'

const AuctionStack = createStackNavigator();

const AuctionStackScreen = (props, { route, navigation }) => (
    <AuctionStack.Navigator screenOptions={{
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
        <AuctionStack.Screen name="Auction" component={Auction} options={{ title: 'Auction', }} />
        {/* <AuctionStack.Screen name="ForAuction" component={ForAuction} options={{ title: 'For Auction', }} /> */}


    </AuctionStack.Navigator>
);

export default AuctionStackScreen;