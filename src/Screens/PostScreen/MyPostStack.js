import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const MyPostStack = createStackNavigator();

const MyPostStackScreen = (props,{route,navigation}) => (
<MyPostStack.Navigator screenOptions={{
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
        <MyPostStack.Screen name="HomeScreen" component={HomeScreen} options={{title:'Home',}} />


</MyPostStack.Navigator>
);

export default MyPostStackScreen; 