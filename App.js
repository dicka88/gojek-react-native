import React from 'react';
import { StatusBar } from 'react-native'
import Router from './src/config/router'

export default function App() {
  return (
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Router />
  )
}