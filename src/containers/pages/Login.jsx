import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, Image, StatusBar } from 'react-native'

export default class Login extends Component {
	render() {
		return(
			<View style={{ flex: 1}}>
				<Text>Hello i am signin page</Text>
				<Button title="Signup" onPress={() => this.props.navigation.navigate('signup')} />
			</View>
		)
	}
}