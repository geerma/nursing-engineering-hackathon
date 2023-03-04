import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  InboxScreen,
  MyAccountScreen
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Inbox" component={InboxScreen} />
          <Stack.Screen name="MyAccount" component={MyAccountScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
