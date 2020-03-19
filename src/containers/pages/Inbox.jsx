import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Inbox extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const EmptyContent = () => {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image source={} /> */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18}} >Nothing content!</Text>
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
                        Inbox
                    </Text>
                    {/* <Image /> */}
                </View>
                { data.empty ? <EmptyContent /> : <Content /> }
            </View>
        )
    }
}