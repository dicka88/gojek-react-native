import React, { Component } from 'react'
import { StyleSheet, Button, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default class Login extends Component {
	render() {
		const img = {
			login: require('../../assets/logo/gojek.png'),
			illustration: require('../../assets/illustration/login.png')
		}

		return(
			<View style={styles.container}>
				<StatusBar barstyle="dark-content" backgroundColor="white" />
				<View style={styles.topbar}>
					<Image source={img.login} style={{ height: 25, width: 115, alignSelf: 'stretch' }} />
					<TouchableOpacity style={styles.buttonLang}>
						<Text style={{ fontWeight: 'bold', color: 'white' }}>EN</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={img.illustration} />
				</View>
				<View style={{ marginTop: 40 }}>
					<View>
						<Text style={styles.textTitle}>Welcome to Gojek!</Text>
						<Text style={styles.textContent}>Are you ready to enjoy a whole new life without limits?</Text>
						<Text style={styles.textContent}>Lets go!</Text>
					</View>
					<View style={styles.buttonContainer}>
						 <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.buttonLogin} >
						 	<Text style={{ color: 'white', fontWeight: 'bold' }}>LOG IN</Text>
						 </TouchableOpacity>
						 <TouchableOpacity style={styles.buttonLogin} >
						 	<Text style={{ color: 'white', fontWeight: 'bold' }}>REGISTER</Text>
						 </TouchableOpacity>
					</View>
					<View style={styles.authContainer}>
						<TouchableOpacity style={styles.facebookContainer}>
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

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		padding: 20,
		backgroundColor: 'white'
	},
	topbar: { 
		height: 45, 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
	},
	buttonLang: { 
		borderRadius: 50, 
		backgroundColor: 'green', 
		height: 30,
		width: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'flex-end', 
		flexDirection: 'row' 
	},
	image: { 
		width: '80%', 
		height: 200 
	},
	buttonContainer: { 
		marginTop: 10, 
		flexDirection: 'row', 
		justifyContent: 'space-between' 
	},
	textTitle: { 
		fontWeight: 'bold', 
		fontSize: 25 
	},
	textContent: { 
		fontSize: 15 
	},
	authContainer: { 
		marginTop: 10 
	},
	buttonLogin: { 
		borderRadius: 5, 
		padding: 15, 
		width: '47%', 
		backgroundColor: '#1eb346', 
		alignItems: 'center'
	},
	facebookContainer: { 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center', 
		width: '100%', 
		backgroundColor: '#3b5998', 
		padding: 15,
		borderRadius: 5
	},
})