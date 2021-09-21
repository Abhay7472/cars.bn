import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

import Payment from '../DrawerContainer/Payment';
import Used from './NewPostStackScreen/Used';
import AskAdmin from '../DrawerContainer/AskAdmin';
import Message from '../DrawerContainer/Message';
import PrivacyPolicy from '../DrawerContainer/PrivacyPolicy';
import RequestStatus from './RequestStatus';
import Photography from './Photography';
import Promotion from './Promotion';
import Sponsor from './Sponsor';
import MyPostDesign from './NewPostStackScreen/MyPostDesign';
import TermCondition from '../DrawerContainer/TermCondition';
import CreatePost1 from './NewPostStackScreen/CreatePost1'
import CreatePost2 from './NewPostStackScreen/CreatePost2'
import CreatePost3 from './NewPostStackScreen/CreatePost3'
import SuccessfullPostCreated from './NewPostStackScreen/SuccessfullPostCreated'
import ForAuction from './NewPostStackScreen/ForAuction';
import CreatePostPrice from './NewPostStackScreen/CreatePostPrice';
import AuctionLiveBidding from './AuctionLiveBidding';
import Dashboard from '../DrawerContainer/DashBoard'
import Third from './NewPostStackScreen/Third';
import Rental from './NewPostStackScreen/Rental';
// import Calculator from './Calculator';
import CreatePostUsed from './NewPostStackScreen/CreatePostUsed';
import colors from '../../constants/Colors'
//import { colors } from 'react-native-elements';


const DrawerContainer = createStackNavigator();

const DrawerContainerStack = (props, { navigation }) => (
  <DrawerContainer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: colors.white
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: "black"

    },
    headerTitleStyle: {
      color: colors.PrimaryBlue,

    },

    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="white" color='#213884' onPress={() => props.navigation.openDrawer()}></Icon.Button>
    ),

    // headerRight: () => (
    //   <Feather.Button name="message-square" size={22} backgroundColor="white" color='#213884' onPress={() => props.navigation.navigate('Message')}></Feather.Button>
    // )
  }}>

    <DrawerContainer.Screen name="Rental" component={Rental} options={{ title: 'Rental', headerTintColor: '#fff', }} />
    <DrawerContainer.Screen name="Payment" component={Payment} options={{ title: 'Payment', headerTintColor: '#fff', }} />
    <DrawerContainer.Screen name="Third" component={Third} options={{ title: 'Third', headerTintColor: '#fff', }} />
    <DrawerContainer.Screen name="Used" component={Used} options={{ title: 'Used', headerTintColor: '#fff', }} />
    <DrawerContainer.Screen name="AskAdmin" component={AskAdmin} options={{ title: 'Ask Admin' }} />
    <DrawerContainer.Screen name="Message" component={Message} options={{ title: 'Message' }} />
    <DrawerContainer.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Privacy Policy' }} />
    <DrawerContainer.Screen name="RequestStatus" component={RequestStatus} options={{ title: 'Request Status' }} />
    <DrawerContainer.Screen name="MyPostDesign" component={MyPostDesign} options={{ title: 'My Post' }} />
    <DrawerContainer.Screen name="CreatePost1" component={CreatePost1} options={{ title: 'Create Post' }} />
    <DrawerContainer.Screen name="CreatePost2" component={CreatePost2} options={{ title: 'Create Post' }} />
    <DrawerContainer.Screen name="CreatePost3" component={CreatePost3} options={{ title: 'Create Post' }} />
    <DrawerContainer.Screen name="TermCondition" component={TermCondition} options={{ title: 'Term & Condition' }} />
    <DrawerContainer.Screen name="SuccessfullPostCreated" component={SuccessfullPostCreated} options={{ title: 'Successfull Post Created' }} />
    <DrawerContainer.Screen name="ForAuction" component={ForAuction} options={{ title: ' For Auction' }} />
    <DrawerContainer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
    <DrawerContainer.Screen name="AuctionLiveBidding" component={AuctionLiveBidding} options={{ title: 'Auction Live Bidding' }} />
    <DrawerContainer.Screen name="CreatePostPrice" component={CreatePostPrice} options={{ title: 'Price' }} />
    <DrawerContainer.Screen name="CreatePostUsed" component={CreatePostUsed} options={{ title: 'Used' }} />
    <DrawerContainer.Screen name="Photography" component={Photography} options={{ title: 'Photography' }} />
    <DrawerContainer.Screen name="Promotion" component={Promotion} options={{ title: 'Promotion' }} />
    <DrawerContainer.Screen name="Sponsor" component={Sponsor} options={{ title: 'Sponsor' }} />
    {/* <DrawerContainer.Screen name="Calculator" component={Calculator} options={{ title: 'Calculator' }} /> */}

  </DrawerContainer.Navigator>
);

export default DrawerContainerStack;
