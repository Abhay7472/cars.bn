import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './navigation/DrawerContent';
import MainTabScreen from './navigation/MainTabScreen';
import RootStackScreen from './Screens/LoginScreen/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';

import AskAdmin from './Screens/DrawerScreen/AskAdmin';
import NewPostStackSrcreen from './Screens/NewPostStackScreen/CreatePost1' 
import MyPostDesign from '../src/Screens/NewPostStackScreen/MyPostDesign';
import RequestStatus from './Screens/DrawerScreen/RequestStatus';
import TermCondition from './Screens/DrawerScreen/TermCondition';
import PrivacyPolicy from './Screens/DrawerScreen/PrivacyPolicy';

import { AuthContext } from './model/context';

const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },

  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="DashBoard" component={MainTabScreen}  />
            <Drawer.Screen name="MyPostDesign" component={MyPostDesign} options={{ headerShown: false }}/>             
            <Drawer.Screen name="NewPostStackSrcreen" component={NewPostStackSrcreen}options={{ headerShown: false }} />
            <Drawer.Screen name="RequestStatus" component={RequestStatus}options={{ headerShown: false }} />
            <Drawer.Screen name="TermCondition" component={TermCondition} options={{ headerShown: false }} />
            <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
            <Drawer.Screen name="AskAdmin" component={AskAdmin} options={{ headerShown: false }} />
          </Drawer.Navigator>
        )
          :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


export default App;













