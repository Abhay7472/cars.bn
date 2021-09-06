import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
 import PrivacyPolicy from './PrivacyPolicy';
 import TermCondition from './TermCondition';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const PrivacyStack = createStackNavigator();

const PrivacyPolicyStckScreen = (props,{route,navigation}) => (
<PrivacyPolicy.Navigator screenOptions={{
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
        <PrivacyPolicy.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{title:'Home',headerShown:true}} />
        <PrivacyPolicy.Screen name="TermCondition" component={TermCondition} options={{title:'Home',headerShown:true}} />


</PrivacyPolicy.Navigator>
);

export default PrivacyPolicyStckScreen; 