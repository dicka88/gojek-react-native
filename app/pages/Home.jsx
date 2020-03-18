import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native'

import Gopay from './component/Gopay'
import Topbar from './component/Topbar'
import Services from './component/Services'
import Navigation from './component/Navigation'

export default class Home extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				{/*top bar*/}
				<Topbar />

				{/*body content*/}
				<ScrollView>
					<View style={{flex: 1, paddingHorizontal: 20, paddingTop: 5}}>
						{/*gopay*/}
						<Gopay />

						{/*services*/}
						<Services />
					</View>
				</ScrollView>

				{/*bottom bar*/}
				<Navigation />
			</View>
		)
	}
}

const style = StyleSheet.create({

})