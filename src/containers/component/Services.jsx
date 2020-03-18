import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const icon = {
    goRide: require('../../assets/icon/go-ride.png'),
    goCar: require('../../assets/icon/go-car.png'),
    goFood: require('../../assets/icon/go-food.png'),
    goBluebird: require('../../assets/icon/go-bluebird.png'),
    goSend: require('../../assets/icon/go-send.png'),
    goPulsa: require('../../assets/icon/go-pulsa.png'),
    goDeals: require('../../assets/icon/go-deals.png'),
    more: require('../../assets/icon/go-more.png')
}

const Item = ({ src, title }) => {
    return (
        <View style={styles.item}>
            <Image source={src} />
            <Text style={{color: 'black'}}>GoRide</Text>
        </View>
    )
}

export default function Services() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Item src={icon.goRide} title="Go Ride" />
                <Item src={icon.goCar} title="Go Car" />
                <Item src={icon.goFood} title="Go Food" />
                <Item src={icon.goBluebird} title="Go Bluebird" />
            </View>
            <View style={styles.subContainer}>
                <Item src={icon.goSend} title="Go Send" />
                <Item src={icon.goPulsa} title="Go Pulsa" />
                <Item src={icon.goDeals} title="Go Deals" />                                
                <Item src={icon.more} title="More" />                                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'white', 
        borderRadius: 5, 
        paddingVertical: 20, 
        marginVertical: 15,
    },
    subContainer: { 
        flexDirection: 'row', 
        marginBottom: 20,
    },
    item: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})