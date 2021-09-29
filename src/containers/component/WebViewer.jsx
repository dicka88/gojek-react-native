import React, { useState, useEffect } from 'react'
import { View, NetInfo, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import netInfo from '@react-native-community/netinfo'

export default function WebViewer(props) {

    const [conn, setConn] = useState(true)

    useEffect(() => {
        netInfo.fetch().then(state => {
            setConn(state.isConnected)
        })
    })

    return (
        <View style={{ flex: 1 }}>
            { conn 
                ? <WebView source={{ uri: props.uri }} /> 
                : <View><Text>You offline</Text></View>
            }
        </View>
    )
}