import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
  import RequestStatus from './RequestStatus';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const RequestStatusStack = createStackNavigator();

const RequestStackScreen = (props,{route,navigation}) => (
<RequestStatus.Navigator screenOptions={{
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
        <RequestStatus.Screen name="Request Status" component={RequestStatus} options={{title:'Request Status',headerShown:true}} />


</RequestStatus.Navigator>
);

export default RequestStackScreen; 