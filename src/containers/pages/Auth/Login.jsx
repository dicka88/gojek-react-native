import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Modal,} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookSquare, } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {

	state = {
		lang: 'id',
		barColor: 'white',
		modal: {
			visible: false
		},
	}

	componentDidMount() {

	}

	updateLang(props) {
		this.setState({
			...this.state,
			lang: props
		})
	}

	modal(props) {
		const act = props ? true : false
		const barColor = props ? 'rgba(52, 52, 52, 0.5)' : 'white'
		this.setState({
			...this.state,
			barColor: barColor,
			modal: {
				visible: act
			}
		})
	}

	render() {
		const img = {
			login: require('../../../assets/logo/gojek.png'),
			illustration: require('../../../assets/illustration/login.png')
		}

		const language = [
			{
				id: 'en',
				lang: 'English',
				color: '#3e6bb5'
			},{
				id: 'id',
				lang: 'Bahasa Indonesia',
				color: '#2bad41'
			}, {
				id: 'jv',
				lang: 'Boso Jowo',
				color: '#662b00'
			}, {
				id: 'ge',
				lang: 'Germany',
				color: '#ff4500'
			}
		]

		const ListLang = ({l18n}) => {
			return (
				<TouchableOpacity onPress={ () => this.updateLang(l18n.id) } key={l18n.id} style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ ...styles.buttonLang, backgroundColor: l18n.color, marginRight: 15, marginVertical: 10 }}>
							<Text style={{ fontWeight: 'bold', color: 'white' }}>{ l18n.id.toUpperCase() }</Text>
						</View>
						<Text>{ l18n.lang }</Text>
					</View>
					<View style={{ ...styles.buttonLang, backgroundColor:  this.state.lang == l18n.id ? 'green' : '#f2f2f2' }}>
						{ this.state.lang == l18n.id ? <FontAwesomeIcon color="white" icon={faCheck} /> : null }
					</View>
				</TouchableOpacity>
			)
		}

		return(
			<View style={styles.container}>
				<StatusBar barstyle="dark-content" backgroundColor={this.state.barColor} />
				<View style={styles.topbar}>
					<Image source={img.login} style={{ height: 25, width: 110, alignSelf: 'stretch' }} />
					<TouchableOpacity onPress={() => this.modal(true)} style={styles.buttonLang}>
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
					<View style={{ marginTop: 10 }}>
						<Text style={{ fontSize: 13 }}>By logging in or registering, I agree to our <Text onPress={() => this.props.navigation.navigate('Term')} style={{ color: 'green' }}>Terms of Service</Text> and <Text onPress={() => this.props.navigation.navigate('PrivacyPolicy')} style={{ color: 'green' }}>Privacy Policy.</Text></Text>
					</View>
				</View>
				{/* Modal Change Lang */}
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modal.visible}
				>
					<View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end', backgroundColor: 'rgba(52, 52, 52, 0.5)',}}>
						<TouchableOpacity onPress={ () => this.modal(false) } style={{ flex: 1, width: '100%'}}></TouchableOpacity>
						<View style={{ width: '100%', flex:1, position: 'absolute', bottom: 0, padding: 15, backgroundColor: 'white', }}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<View>
									<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Change Language</Text>
									<Text style={{ color: '#d1d1d1' }}>Which language do you prefer?</Text>
								</View>
								<TouchableOpacity style={{width: 40, alignItems: 'flex-end' }} onPress={() => this.modal(false)}>
									<FontAwesomeIcon icon={faTimes} />
								</TouchableOpacity>
							</View>
							{
								language.map(item => {
									return (
										<ListLang key={item.id} l18n={item} />
									)
								})
							}
						</View>
					</View>
				</Modal>
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
		height: 190 
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