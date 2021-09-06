import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
  import Message from './Message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const MessageStack = createStackNavigator();

const MessageStackScreen = (props,{route,navigation}) => (
<MessageStack.Navigator screenOptions={{
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
        <MessageStack.Screen name="Message" component={Message} options={{title:'Home',headerShown:true}} />


</MessageStack.Navigator>
);

export default MessageStackScreen; 