import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Payment from './Payment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const MyStack = createStackNavigator();

const PaymentStack = (props,{route,navigation}) => (
<MyStack.Navigator screenOptions={{
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
        <MyStack.Screen name="Payment" component={Payment} options={{title:'Home',headerShown:true}} />


</MyStack.Navigator>
);

export default PaymentStack; 