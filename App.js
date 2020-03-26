import React from 'react';
import { StatusBar, View } from 'react-native'
import Router from './src/config/router'

export default function App() {
  return (
  	<View style={{ flex: 1 }}>
    	<StatusBar backgroundColor="#fff" barStyle="dark-content" />
    	<Router />
  	</View>
  )
}