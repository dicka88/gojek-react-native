import React from 'react'
import { Text, View, Image } from 'react-native'

export default function Services() {
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 5, paddingVertical: 20, marginVertical: 15 }}>
            <View style={{ flexDirection: 'row', marginBottom: 20}}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-ride.png')} />
                    <Text style={{color: 'black'}}>GoRide</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-car.png')} />
                    <Text style={{color: 'black'}}>GoCar</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-food.png')} />
                    <Text style={{color: 'black'}}>GoFood</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-bluebird.png')} />
                    <Text style={{color: 'black'}}>GoBlueBird</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-send.png')} />
                    <Text style={{color: 'black'}}>GoSend</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-pulsa.png')} />
                    <Text style={{color: 'black'}}>GoPulsa</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-deals.png')} />
                    <Text style={{color: 'black'}}>GoDeals</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/go-more.png')} />
                    <Text style={{color: 'black'}}>More...</Text>
                </View>
            </View>
        </View>
    )
}