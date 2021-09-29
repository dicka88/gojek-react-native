import React, { Component } from 'react'
import { View } from 'react-native'

import Webview from '../../component/WebViewer'

export default class Term extends Component {

	render() {
		const uri = "https://www.gojek.com/en/terms-of-service/"

		return(
			<View style={{ flex: 1 }}>
                <Webview uri={uri} onNavigationStateChange={this.handleWebViewNavigationStateChange} />
			</View>
		)
	}
}