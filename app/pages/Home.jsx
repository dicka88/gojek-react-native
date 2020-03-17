import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native'

export default class Home extends Component {
	render() {
		const icon = {
			account: require('../src/icon/account.png'),
			accoutActive: require('../src/icon/account-active.png'),
			help: require('../src/icon/help.png'),
			helpActive: require('../src/icon/help-active.png'),
			home: require('../src/icon/home.png'),
			homeActive: require('../src/icon/home-active.png'),
			inbox: require('../src/icon/inbox.png'),
			inboxActive: require('../src/icon/inbox-active.png'),
			order: require('../src/icon/order.png'),
			orderActive: require('../src/icon/order-active.png'),
		}

		const ItemNav = ({src, srcActive, active, title}) => {
			return (
				<View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
					<Image source={active ? srcActive : src} />
					<Text style={{color: active ? 'green' : 'grey'}}>{title}</Text>
				</View>
			)
		}

		return (
			<View style={{flex: 1}}>
				{/*top bar*/}
				<View style={{ backgroundColor: 'white', height: 45 }}>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'flex-start',
							borderRadius: 30,
							borderWidth: 1,
							borderColor: 'grey',
							width: 300,
							alignItems: 'center',
							paddingHorizontal: 10
						}}>
							<Image style={{width: 20, height:20}} source={require('../src/icon/search.png')} />
							<TextInput 
								style={{ 
									height: 35,
									padding: 8,
								}}
								placeholder="Find food, places, or services"
							/>
						</View>
						<View style={{
							flexDirection: 'row', 
							height: 35, 
							width: 80,
							paddingHorizontal: 10,
							backgroundColor: '#e8e8e8',
							borderRadius: 30, 
							alignItems: 'center', 
							justifyContent: 'space-between',
						}}>
							<Image style={{ width: 20, height: 20}} source={require('../src/icon/promo.png')} />
							<Text style={{ fontSize: 10}}>Promos</Text>
						</View>					
					</View>
				</View>

				{/*body content*/}
				<View style={{flex: 1, paddingHorizontal: 20, paddingTop: 5}}>
					<ScrollView>
						<View>
							<View style={{ 
								height: 40, 
								flexDirection: 'row', 
								alignItems: 'center', 
								justifyContent: 'space-between', 
								borderTopRightRadius: 5, borderTopLeftRadius: 5, 
								backgroundColor: '#2F63BC',
								paddingHorizontal: 10,
							}}>
								<Image source={require('../src/icon/gopay.png')} />
								<Text style={{ color: 'white', fontWeight: 'bold' }}>Rp50.000</Text>
							</View>
							<View style={{ 
								height: 90, 
								borderBottomLeftRadius: 5, 
								borderBottomRightRadius: 5, 
								backgroundColor: '#2A5DB4' }}>
							</View>
						</View>
					</ScrollView>
				</View>

				{/*bottom bar*/}
				<View style={{height: 65, flexDirection: 'row', borderTopWidth: 0.7, borderTopColor: '#e8e8e8', backgroundColor: '#fff'}}>
					<ItemNav src={icon.home} srcActive={icon.homeActive} active={true} title="Home" />
					<ItemNav src={icon.order} srcActive={icon.orderActive} active={false} title="Order" />
					<ItemNav src={icon.help} srcActive={icon.helpActive} active={false} title="Help" />
					<ItemNav src={icon.inbox} srcActive={icon.inboxActive} active={false} title="Inbox" />
					<ItemNav src={icon.account} srcActive={icon.accountActive} active={false} title="Account" />
				</View>
			</View>
		)
	}
}

const style = StyleSheet.create({

})