import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
 import MyProfile from './MyProfile.js'
 import EditScreen from './EditProfile.js';


const ProfileStack = createStackNavigator();

const ProfileStackScreen = (props,{route,navigation}) => (
<ProfileStack.Navigator screenOptions={{
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
        <ProfileStack.Screen name="MyProfile" component={MyProfile} options={{title:'My Profile',headerShown:true}} />
         <ProfileStack.Screen name="EditScreen" component={EditScreen} options={{title:'Edit Profile',headerShown:true}} />
        
       


</ProfileStack.Navigator>
);

export default ProfileStackScreen; 