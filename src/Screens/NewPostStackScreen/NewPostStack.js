import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CreatePost1 from './CreatePost1';
import CreatePost2 from './CreatePost2';
import CreatePost3 from './CreatePost3';
import SuccessfullPostCreated from './SuccessfullPostCreated';

const NewPostStack = createStackNavigator();

const NewPostStackSrcreen = (props,{navigation}) => (
<NewPostStack.Navigator screenOptions={{
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
        <NewPostStack.Screen name="CreatePost3" component={CreatePost3} options={{title:'Create Post',}} />
        <NewPostStack.Screen name="CreatePost1" component={CreatePost1} options={{title:'Create Post',}} />
        <NewPostStack.Screen name="CreatePost2" component={CreatePost2} options={{title:'Create Post',}} />
        
        <NewPostStack.Screen name="SuccessfullPostCreated" component={SuccessfullPostCreated} options={{title:'Create Post',}} />


</NewPostStack.Navigator>
);

export default NewPostStackSrcreen; 