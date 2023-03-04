import 'react-native-gesture-handler';
import React from 'react'
// import Button from 'Button';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  InboxScreen,
  InformationScreen,
  AdultInformationScreen,
  SurgeriesScreen,
  ChronicConditionsScreen,
  ArrivingToHospitalScreen,
  ChildInformationScreen,
  NeonateScreen,
  ChildScreen,
  AdolescentScreen,
  GoingHomeScreen,
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
          <Stack.Screen name="Information" component={InformationScreen} />
          <Stack.Screen name="Adult" component={AdultInformationScreen} />
          <Stack.Screen name="ChronicConditions" component={ChronicConditionsScreen} />
          <Stack.Screen name="Surgeries" component={SurgeriesScreen} />
          <Stack.Screen name="Arriving" component={ArrivingToHospitalScreen} />
          <Stack.Screen name="GoingHome" component={GoingHomeScreen} />
          <Stack.Screen name="ChildInfo" component={ChildInformationScreen} />
          <Stack.Screen name="Neonate" component={NeonateScreen} />
          <Stack.Screen name="Child" component={ChildScreen} />
          <Stack.Screen name="Adolescent" component={AdolescentScreen} />
          <Stack.Screen name="MyAccount" component={MyAccountScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );


  
}
