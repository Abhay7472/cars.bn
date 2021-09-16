import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Home from './Home';
import New from './New';
import NewCar from './NewCar';
import OldCar from './OldCar';
import Search from './Search'
import AuctionLive from './AuctionLive'
import RentalCar from './RentalCar';
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
        <HomeStack.Screen name="New" component={New} options={{ title: 'New Cars', headerShown: true }} />
        <HomeStack.Screen name="NewCar" component={NewCar} options={{ title: 'New Car', headerShown: true }} />
        <HomeStack.Screen name="OldCar" component={OldCar} options={{ title: 'Old Car', headerShown: true }} />
        <HomeStack.Screen name="AuctionLive" component={AuctionLive} options={{ title: 'Auction Live', headerShown: true }} />
        <HomeStack.Screen name="RentalCar" component={RentalCar} options={{ title: 'Rental Car', headerShown: true }} />
        <HomeStack.Screen name="Search" component={Search} options={{ title: 'Search', headerShown: true }} />


    </HomeStack.Navigator>
);

export default HomeStackScreen;