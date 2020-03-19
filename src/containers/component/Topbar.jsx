import React from 'react'
import { View, TextInput, Text, Image, StyleSheet } from 'react-native'

const icon = {
    search: require('../../assets/icon/search.png'),
    promo: require('../../assets/icon/promo.png'),
}

export default function Topbar() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={{ width: 20, height: 20 }} source={icon.search} />
                <TextInput style={{ height: 35,padding: 8, }} placeholder="Find food, places, or services" />
            </View>
            <View style={styles.promoContainer}>
                <Image style={{ width: 20, height: 20}} source={icon.promo} />
                <Text style={{ fontSize: 10}}>Promos</Text>
            </View>					
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'white', 
        height: 45,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 20, 
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'grey',
        width: 300,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 30
    },
    promoContainer: {
        flexDirection: 'row', 
        height: 35, 
        width: 80,
        paddingHorizontal: 10,
        backgroundColor: '#e8e8e8',
        borderRadius: 30, 
        alignItems: 'center', 
        justifyContent: 'space-between',
    }
})