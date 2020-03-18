import React from 'react';
import { StatusBar, View } from 'react-native'
import Router from './src/config/router'

export default function App() {
  return (
  	<View>
    	<StatusBar backgroundColor="#fff" barStyle="dark-content" />
    	<Router />
  	</View>
  )
}