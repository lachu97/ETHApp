import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SentScreen from '../Views/SentScreen';
import HistoryScreen from "../Views/HistoryScreen";
import HomeScreen from "../Views/HomeScreen";
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Sent'} component={SentScreen} />
        <Stack.Screen name={'History'} component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
