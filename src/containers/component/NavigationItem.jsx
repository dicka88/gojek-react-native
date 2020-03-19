import React from 'react'
import { Image } from 'react-native'

const icon = {
    account: require('../../assets/icon/account.png'),
    accountActive: require('../../assets/icon/account-active.png'),
    help: require('../../assets/icon/help.png'),
    helpActive: require('../../assets/icon/help-active.png'),
    home: require('../../assets/icon/home.png'),
    homeActive: require('../../assets/icon/home-active.png'),
    inbox: require('../../assets/icon/inbox.png'),
    inboxActive: require('../../assets/icon/inbox-active.png'),
    order: require('../../assets/icon/order.png'),
    orderActive: require('../../assets/icon/order-active.png'),
}

export default function Item({ focused, name }) {
    const activate = focused ? 'Active' : ''
    const path = name + activate
    
    return (
        <Image source={ icon[path] } />
    )
}