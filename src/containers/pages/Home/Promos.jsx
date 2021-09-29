import React from 'react'
import { View, Text, Image, Button, StatusBar, TouchableOpacity } from 'react-native'


export default class Promos extends React.Component {
    static navigationOptions = {
        headerShown: true,
        title: 'Promo',
        headerStyle: {
            backgroundColor: '#3a85e0'
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        animationEnabled: false
	}

    constructor(props) {
        super(props)
        this.state = {
            isEmpty: true,
            data: null
        }
    }
    
    componentDidMount(){

        // fetch api
    }

    DataRender = () => {
        const img = {
            promos: require('../../../assets/illustration/promos.png')
        }

        const { isEmpty } = this.state
        
        if(isEmpty) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: '70%', height: 150 }} source={img.promos} />
                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Here comes promo attack!</Text>
                        <Text style={{ fontSize: 14, color: '#b5b5b5' }}>We've put together all GoPay promos here. Let's start </Text>
                        <Text style={{ fontSize: 14, color: '#b5b5b5' }}>exploring and may you enjoy em all!</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <Text>Is data</Text>
            )
        }
    }
    
    render() {
        return (
            <View style={{ flex: 1, padding: 20, backgroundColor: 'white', }}>
                <StatusBar backgroundColor='#3a85e0' barStyle="light-content" />
                <View style={{ flex: 1}}>
                    <this.DataRender />
                </View>
                <View style={{ justifyContent: 'center', }}>
                    <TouchableOpacity style={{ backgroundColor: 'green', paddingVertical: 13,  borderRadius: 5, alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>GO EXPLORE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}