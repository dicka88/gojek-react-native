import React, { Component } from 'react'
import { 
	View, 
	Text, 
	ScrollView, 
	Image, 
	StyleSheet,
	TouchableOpacity,
 } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faThumbsUp as solid } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as regular } from '@fortawesome/free-regular-svg-icons'


import { Gopay, Services, Topbar, } from '../../component'

export default class Home extends Component {
	static navigationOptions = {
		headerShown: false
	}

	constructor(props) {
		super(props)
	}

	render() {

		const content =  {
			length: [{
				id: 1,
				title: 'Here are your must-knows about COVID-19',
				information: 'Here are some information & tips on simple actions to minimize the risks of Coronavirus',
				subMenu: [
					{
						id: 1,
						images: require('../../../assets/dummy/topic1.png'),
						title: 'Learn it to get away from it',
						subTitle: 'All that you need to know about COVID-19 can be found here'
					},
					{
						id: 2,
						images: require('../../../assets/dummy/topic2.png'),
						title: 'Learn it to get away from it',
						subTitle: 'All that you need to know about COVID-19 can be found here'
					},
					{
						id: 3,
						images: require('../../../assets/dummy/topic3.png'),
						title: 'Learn it to get away from it',
						subTitle: 'All that you need to know about COVID-19 can be found here'
					}
				]
			},
			{
				id: 2,
				title: 'International WHO announcment about coronavirus',
				information: '2020/03/20 here WHO declare ',
				subMenu: [
					{
						id: 1,
						images: require('../../../assets/dummy/go-food-kfc.jpg')
					}
				]
			}
		]
		}

		return (
			<View style={{flex: 1}}>
				{/*top bar*/}
				<Topbar promoPress={ () => this.props.navigation.navigate('Promos') } />

				{/*body content*/}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{flex: 1, paddingHorizontal: 15, paddingTop: 5}}>
						{/*gopay*/}
						<Gopay />

						{/*services*/}
						<Services />
					</View>
					<View>
						{/* Topics */}
						<View style={{ backgroundColor: '#fff', paddingHorizontal: 0, paddingVertical: 15, borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>
							<View style={{ paddingLeft: 20 }} >
								<View>
									<Text style={{ fontWeight: 'bold', fontSize: 23 }}>Top picks for you</Text>
								</View>
								<View style={{ flexDirection: 'row', paddingTop: 5}}>
									<ScrollView horizontal showsHorizontalScrollIndicator={false}>
										<TouchableOpacity style={{ backgroundColor: 'green', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
											<Text style={{ color: 'white' }}>All</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
											<Text style={{ color: 'black' }}>Entertaiment</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
											<Text style={{ color: 'black' }}>Payments</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
											<Text style={{ color: 'black' }}>Promos</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
											<Text style={{ color: 'black' }}>Transport</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{ backgroundColor: 'white', marginHorizontal: 3, paddingHorizontal: 10, borderRadius: 20, borderColor: '#d1d1d1', padding: 5, borderWidth: 1, justifyContent: 'center' }}>
											<Text style={{ color: 'black' }}>Promos</Text>
										</TouchableOpacity>
									</ScrollView>
								</View>
							</View>
							{ 
								content.length.map( e => {
									return (
										<View key={e.id} style={{ marginTop: 4,}}>
											<View style={{ paddingLeft: 20, paddingTop: 10 }}>
												<Image style={{ width: 70, height: 20 }} source={require('../../../assets/logo/gojek.png')} />
												<View style={{ marginTop: 5 }}>
													<Text style={{ fontWeight: 'bold' }}>{ e.title }</Text>
												</View>
												<View>
													<Text style={{ color: 'grey' }}>
														{ e.information }
													</Text>
												</View>
											</View>
											<View>
												<View style={{ flexDirection: 'row', marginVertical: 10 }}>
													<ScrollView horizontal showsHorizontalScrollIndicator={false}>
														{
															e.subMenu.map(item => {
																return  (
																	<View key={item.id} style={{ flex: 1}}>
																		<Image style={{ 
																			marginLeft: 20, 
																			borderTopLeftRadius: 10, 
																			borderTopRightRadius: 10, 
																			width: 330, height: 200 
																			}} resizeMode='stretch' source={item.images} />
																		<View style={{ 
																			marginLeft: 20, 
																			borderBottomWidth: 3, 
																			borderLeftWidth: 1,
																			borderRightWidth: 1,
																			borderColor: '#e3e3e3',
																			borderBottomLeftRadius: 8, 
																			borderBottomRightRadius: 8, 
																			padding: 10, 
																			width: 330, 
																			height: 'auto' 
																		}}>
																			<Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title || 'null'}</Text>
																			<Text style={{ color: 'grey' }}>{item.subTitle || 'null'}</Text>
																			<View style={{ flex:1, margin: 10, alignItems: 'flex-end' }}>
																				<TouchableOpacity>
																					<FontAwesomeIcon icon={regular} />
																				</TouchableOpacity>
																			</View>
																		</View>
																	</View>
																	)
															})
														}	
													</ScrollView>
												</View>
											</View>
										</View>
									)
								}) 
							}
						</View>

					</View>
				</ScrollView>

				{/*bottom bar*/}
				{/* <Navigation /> */}
			</View>
		)
	}
}

const style = StyleSheet.create({

})