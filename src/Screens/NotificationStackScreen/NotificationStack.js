import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Notification from './Notification'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const NotificationStack = createStackNavigator();

const NotificationStackSrcreen = (props,{route,navigation}) => (
<NotificationStack.Navigator screenOptions={{
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

        <NotificationStack.Screen name="Notification" component={Notification} options={{title:'Notification',}} />


</NotificationStack.Navigator>
);

export default NotificationStackSrcreen; 