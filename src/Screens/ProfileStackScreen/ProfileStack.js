import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
 import MyProfile from './MyProfile.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ProfileStack = createStackNavigator();

const ProfileStackScreen = (props,{route,navigation}) => (
<ProfileStack.Navigator screenOptions={{
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
        <ProfileStack.Screen name="MyProfile" component={MyProfile} options={{title:'MyProfile',headerShown:true}} />


</ProfileStack.Navigator>
);

export default ProfileStackScreen; 