import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Help extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={{ 
                    height: 50, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#e3e3e3',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Help
                    </Text>
                    {/* <Image /> */}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image source={} /> */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18}} >No tips or help for you</Text>
                        <Text>Take care to this.</Text>
                    </View>
                </View>
            </View>
        )
    }
}