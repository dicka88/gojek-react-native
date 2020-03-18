import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './app/pages/Login'
import Signup from './app/pages/Signup'
import Home from './app/pages/Home'
import Splash from './app/pages/Splash'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="signin" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}