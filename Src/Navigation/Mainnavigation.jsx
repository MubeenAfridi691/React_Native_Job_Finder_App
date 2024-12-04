import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from '../Screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Mainnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default Mainnavigation

const styles = StyleSheet.create({})