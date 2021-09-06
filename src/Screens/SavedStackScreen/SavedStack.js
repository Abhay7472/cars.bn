import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SavedCar from './SavedCar'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const SavedStack = createStackNavigator();

const SavedStackScreen = (props,{route,navigation}) => (
<SavedStack.Navigator screenOptions={{
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
        <SavedStack.Screen name="SavedCar" component={SavedCar} options={{title:'SavedCar',}} />


</SavedStack.Navigator>
);

export default SavedStackScreen; 