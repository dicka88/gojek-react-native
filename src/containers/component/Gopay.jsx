import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const icon = {
    gopay: require('../../assets/icon/gopay.png'),
    pay: require('../../assets/icon/pay.png'),
    nearby: require('../../assets/icon/nearby.png'),
    topup: require('../../assets/icon/topup.png'),
    more: require('../../assets/icon/more.png'),
}

const Item = ({ src, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Image source={src} />
            <Text style={{color: 'white', fontFamily: 'OpenSans-Regular'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default function Gopay({props}) {
    return (
        <View>
            <View style={styles.header}>
                <Image style={{ aspectRatio: 6 }} source={icon.gopay} />
                <Text style={styles.money}>Rp23.706.600</Text>
            </View>
            <View style={styles.body}>
                <Item onPress={() => props.navigation.navigate('Pay')} src={icon.pay} title="Pay" />
                <Item onPress={() => props.navigation.navigate('Nearby')} src={icon.nearby} title="Nearby" />
                <Item onPress={() => props.navigation.navigate('Topup')} src={icon.topup} title="Topup" />
                <Item onPress={() => props.navigation.navigate('More')} src={icon.more} title="More" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: { 
        height: 40, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderTopRightRadius: 5, borderTopLeftRadius: 5, 
        backgroundColor: '#2F63BC',
        paddingHorizontal: 10,
    },
    money: { 
        fontFamily: 'OpenSans-Bold', 
        color: 'white', 
        fontWeight: 'bold' 
    },
    body: { 
        height: 90, 
        borderBottomLeftRadius: 5, 
        borderBottomRightRadius: 5, 
        backgroundColor: '#2A5DB4',
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        justifyContent: 'center', 
        flex: 1, 
        alignItems: 'center'
    }
})