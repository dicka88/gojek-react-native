import React, { Component } from 'react'
import { 
	View, 
	Text, 
	ScrollView, 
	Image, 
	StyleSheet, 
 } from 'react-native'

import component from '../component'
const { Gopay, Navigation, Services, Topbar } = component

export default class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		const content =  {
			length: [{
				title: 'Here are your must-knows about COVID-19',
				information: 'Here are some information & tips on simple actions to minimize the risks of Coronavirus',
				subMenu: [
					{
						images: require('../../assets/dummy/go-food-kfc.jpg')
					},
					{
						images: require('../../assets/dummy/go-food-kfc.jpg'),
					},
					{
						images: require('../../assets/logo/gojek.png'),
					}
				]
			},
			{
				title: 'International WHO annoncuement about coronavirus',
				information: '2020/03/20 here WHO declare ',
				subMenu: [
					{
						images: require('../../assets/dummy/go-food-kfc.jpg')
					}
				]
			}
		]
		}

		let contentData = []

		content.length.map( e => {
			contentData.push(
				<View style={{ marginTop: 4, padding: 6 }}>
					<Image source={require('../../assets/logo/gojek.png')} />
					<View>
						<View style={{ marginTop: 5 }}>
							<Text style={{ fontWeight: 'bold' }}>{ e.title }</Text>
						</View>
						<View>
							<Text style={{ color: 'grey' }}>
								{ e.information }
							</Text>
						</View>
						<View style={{ flexDirection: 'row', marginVertical: 10 }}>
							<ScrollView horizontal showsHorizontalScrollIndicator={false}>
								{
									e.subMenu.map(item => {
										return <Image style={{ marginRight: 10, borderRadius: 10, width: 300, height: 200 }} resizeMode='stretch' source={item.images} />
									})
								}	
							</ScrollView>
						</View>
					</View>
				</View>
			)
		})

		return (
			<View style={{flex: 1}}>
				{/*top bar*/}
				<Topbar />

				{/*body content*/}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={{flex: 1, paddingHorizontal: 15, paddingTop: 5}}>
						{/*gopay*/}
						<Gopay />

						{/*services*/}
						<Services />

						{/* Topics */}
						<View style={{ backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 15, borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>
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
							{ contentData }
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