import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
 import DashBoard from '../TabScreens/DashBoard.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const DashBoardStack = createStackNavigator();

const HomeStackScreen = (props,{route,navigation}) => (
<DashBoardStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#000'},
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        },
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#000" onPress={() => props.navigation.openDrawer()}></Icon.Button> 
        ),

        headerRight: () => (
            <FontAwesome.Button name="bell" size={20} backgroundColor="#000" onPress={() => props.navigation.navigate('NotifiStackScreen', { screen: 'Notifications'})}></FontAwesome.Button>
        )
    }}>
        <DashBoardStack.Screen name="DashBoard" component={DashBoard} options={{title:'Home',}} />


</DashBoardStack.Navigator>
);

export default HomeStackScreen; 