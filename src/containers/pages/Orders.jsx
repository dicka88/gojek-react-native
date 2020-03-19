import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Orders {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Ongoing orders
                    </Text>
                    <Image />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={} />
                    <View>
                        <Text style={{ fontWeight: 'bold'}} >Let's order Gojek!</Text>
                        <Text>Our drivers will be very happy to help you.</Text>
                    </View>
                </View>
            </View>
        )
    }
}