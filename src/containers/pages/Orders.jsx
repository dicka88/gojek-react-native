import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faListAlt as history } from '@fortawesome/free-regular-svg-icons'

export default class Orders extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const image = {
            no_order: require('../../assets/illustration/no_orders.png')
        }

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={{ 
                    height: 50, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#e3e3e3',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Ongoing orders
                    </Text>
                    <FontAwesomeIcon size={20} icon={history} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: '55%', height: 160 }} source={image.no_order} />
                    <View style={{ alignItems: 'center', marginTop: 35 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18}} >Let's order Gojek!</Text>
                        <Text style={{ marginTop: 10, color: 'grey' }}>Our drivers will be very happy to help you.</Text>
                    </View>
                </View>
            </View>
        )
    }
}