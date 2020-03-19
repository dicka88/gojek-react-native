import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Inbox {
    constructor(props) {
        super(props)
    }

    render() {

        const EmptyContent = () => {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={} />
                    <View>
                        <Text style={{ fontWeight: 'bold'}} >Nothing content!</Text>
                        <Text>Lets waiting a beauty content.</Text>
                    </View>
                </View>
            )
        }

        const Content = () => {
            return (
                <View>
                    <Text>
                        I am rendering content
                    </Text>
                </View>
            )
        }

        const data = {
            empty: true
        }

        return (
            <View style={{ flex: 1 }} >
                <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Inbox
                    </Text>
                </View>
                { data.empty ? <EmptyContent /> : <Content /> }
            </View>
        )
    }
}