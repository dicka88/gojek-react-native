import React from 'react'
import { Image, View, Text } from 'react-native'

export default function Gopay() {
    return (
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
                <Image style={{ aspectRatio: 6 }} source={require('../../src/icon/gopay.png')} />
                <Text style={{ fontFamily: 'OpenSans-Bold' ,color: 'white', fontWeight: 'bold' }}>Rp23.706.600</Text>
            </View>
            <View style={{ 
                height: 90, 
                borderBottomLeftRadius: 5, 
                borderBottomRightRadius: 5, 
                backgroundColor: '#2A5DB4',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/pay.png')} />
                    <Text style={{color: 'white', fontFamily: 'OpenSans-Regular'}}>Pay</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/nearby.png')} />
                    <Text style={{color: 'white', fontFamily: 'OpenSans-Regular'}}>Nearby</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/topup.png')} />
                    <Text style={{color: 'white', fontFamily: 'OpenSans-Regular'}}>Topup</Text>
                </View>
                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Image source={require('../../src/icon/more.png')} />
                    <Text style={{color: 'white', fontFamily: 'OpenSans-Regular'}}>More</Text>
                </View>
            </View>
        </View>
    )
}