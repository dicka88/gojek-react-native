import React from 'react'
import { View, TextInput, Text, Image } from 'react-native'

export default function Topbar() {
    return (
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
                    <Image style={{width: 20, height:20}} source={require('../../src/icon/search.png')} />
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
                    <Image style={{ width: 20, height: 20}} source={require('../../src/icon/promo.png')} />
                    <Text style={{ fontSize: 10}}>Promos</Text>
                </View>					
            </View>
        </View>
    )
}