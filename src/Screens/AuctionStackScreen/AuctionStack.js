import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
 import Auction from './Auction';
 import AuctionLiveBidding from './AuctionLiveBidding';
 import ForAuction from './ForAuction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const AuctionStack = createStackNavigator();

const AuctionStackScreen = (props,{route,navigation}) => (
<AuctionStack.Navigator  screenOptions={{
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
        <AuctionStack.Screen name="Auction" component={Auction} options={{title:'Auction',}} />
        <AuctionStack.Screen name="AuctionLiveBidding" component={AuctionLiveBidding} options={{title:'AuctionLiveBidding',}} />
        <AuctionStack.Screen name="ForAuction" component={ForAuction} options={{title:'ForAuction',}} />


</AuctionStack.Navigator>
);

export default AuctionStackScreen; 