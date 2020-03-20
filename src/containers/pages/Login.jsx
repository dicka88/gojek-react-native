import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default class Login extends Component {
	render() {
		const img = {
			login: require('../../assets/logo/gojeknew.png'),
			illustration: require('../../assets/illustration/login.png')
		}

		return(
			<View style={{ flex: 1, padding: 20}}>
				<StatusBar barstyle="dark-content" backgroundColor="white" />
				<View style={{ height: 45, flexDirection: 'row', justifyContent: 'space-between', }}>
					<Image source={img.login} style={{ height: 25, width: 115, alignSelf: 'stretch' }} />
					<TouchableOpacity style={{ 
						borderRadius: 50, 
						backgroundColor: 'green', 
						height: 30,
						width: 30,
						justifyContent: 'center',
						alignItems: 'center',
						 }}>
						<Text style={{ fontWeight: 'bold', color: 'white' }}>EN</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
					<Image style={{ width: '80%', height: 200 }} source={img.illustration} />
				</View>
				<View style={{ marginTop: 40 }}>
					<View>
						<Text style={{ fontWeight: 'bold', fontSize: 25 }}>Welcome to Gojek!</Text>
						<Text style={{ fontSize: 15 }}>Are you ready to enjoy a whole new life without limits?</Text>
						<Text style={{ fontSize: 15 }}>Lets go!</Text>
					</View>
					<View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
						 <TouchableOpacity style={{ borderRadius: 5, padding: 15, width: '47%', backgroundColor: '#1eb346', alignItems: 'center', }} >
						 	<Text style={{ color: 'white', fontWeight: 'bold' }}>LOG IN</Text>
						 </TouchableOpacity>
						 <TouchableOpacity style={{ borderRadius: 5, padding: 15, width: '47%', backgroundColor: '#1eb346', alignItems: 'center', }} >
						 	<Text style={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Text>
						 </TouchableOpacity>
					</View>
					<View style={{ marginTop: 10 }}>
						<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#3b5998', padding: 15 }}>
							<FontAwesomeIcon size={30} style={{ color: 'white', position: 'absolute', left: 15 }} icon={faFacebookSquare} />
							<Text style={{ fontWeight: 'bold', color: 'white' }}>CONTINUE WITH FACEBOOK</Text>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 10, }}>
						 <Text style={{ fontSize: 13 }}>By logging in or registering, I agree to our <Text style={{ color: 'green' }}>Terms of Service</Text> and <Text style={{ color: 'green' }}>Privacy Policy</Text>.</Text>
					</View>
				</View>
			</View>
		)
	}
}