import React, { Component } from 'react'
import { 
	View, 
	Text, 
	ScrollView, 
	Image, 
	TextInput, 
	StyleSheet, 
	StatusBar
 } from 'react-native'

import { 
	Gopay,
    Topbar,
    Services,
	Navigation 
} from '../component'

export default class Home extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				{/*top bar*/}
				<Topbar />

				{/*body content*/}
				<ScrollView>
					<View style={{flex: 1, paddingHorizontal: 15, paddingTop: 5}}>
						{/*gopay*/}
						<Gopay />

						{/*services*/}
						<Services />

						{/* Topics */}
						<View style={{ backgroundColor: '#fff', borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>
							<View>
								<Text style={{ fontWeight: 'bold', fontSize: 23 }}>Top picks for you</Text>
							</View>
							<View style={{ flexDirection: 'row', padding: 8 }}>
								<ScrollView horizontal showsHorizontalScrollIndicator={false}>
									<View style={{ backgroundColor: 'green', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
										<Text style={{ color: 'white' }}>All</Text>
									</View>
									<View style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
										<Text style={{ color: 'black' }}>Entertaiment</Text>
									</View>
									<View style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
										<Text style={{ color: 'black' }}>Payments</Text>
									</View>
									<View style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
										<Text style={{ color: 'black' }}>Promos</Text>
									</View>
									<View style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
										<Text style={{ color: 'black' }}>Transport</Text>
									</View>
									<View style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
										<Text style={{ color: 'black' }}>Promos</Text>
									</View>
								</ScrollView>
							</View>
							<View style={{ marginTop: 4, padding: 6 }}>
								<Image source={require('../../assets/logo/gojek.png')} />
								<View>
									<View style={{ marginTop: 5 }}>
										<Text style={{ fontWeight: 'bold' }}>Here are your must-knows about COVID-19</Text>
									</View>
									<View>
										<Text style={{ color: 'grey' }}>
											Here are some information & tips on simple actions to minimize the risks of Coronavirus
										</Text>
									</View>
									<View style={{ flexDirection: 'row', marginVertical: 10 }}>
										<ScrollView horizontal showsHorizontalScrollIndicator={false}>
											<Image style={{ borderRadius: 10, width: 300, height: 200 }} resizeMode='stretch' source={require('../../assets/dummy/go-food-kfc.jpg')} />
											<Image style={{ marginLeft: 10, borderRadius: 10, width: 300, height: 200 }} resizeMode='stretch' source={require('../../assets/dummy/go-food-kfc.jpg')} />
											<Image style={{ marginLeft: 10, borderRadius: 10, width: 300, height: 200 }} resizeMode='stretch' source={require('../../assets/dummy/go-food-kfc.jpg')} />
											<Image style={{ marginLeft: 10, borderRadius: 10, width: 300, height: 200 }} resizeMode='stretch' source={require('../../assets/dummy/go-food-kfc.jpg')} />
										</ScrollView>
									</View>
								</View>
							</View>
						</View>

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