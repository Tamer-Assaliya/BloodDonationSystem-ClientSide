import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import TestScreen from "./src/screens/TestScreen";
//import { FontAwesome } from '@expo/vector-icons';



const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen,
      Test: TestScreen,

  }),
  mainFlow: createBottomTabNavigator({
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
          <AuthProvider>
            <App
                ref={navigator => {
                  setNavigator(navigator);
                }}
            />
          </AuthProvider>
  );
};
