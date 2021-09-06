import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
 import RentalCar from './RentalCar';
   
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MyPostStack = createStackNavigator();

const PostStackScreen = (props,{route,navigation}) => (
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
        <MyPostStack.Screen name="RentalCar" component={RentalCar} options={{title:'RentalCar',}} />
         


</MyPostStack.Navigator>
);

export default PostStackScreen; 