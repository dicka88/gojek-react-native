import React, { Component } from 'react'
import { View } from 'react-native'

import Webview from '../../component/WebViewer'

export default class Policy extends Component {

	render() {
		const uri = "https://www.gojek.com/privacy-policy/"
		return(
			<View style={{ flex: 1 }}>
                <Webview uri={uri} onNavigationStateChange={this.handleWebViewNavigationStateChange} startInLoadingState={true}/>
			</View>
		)
	}
}