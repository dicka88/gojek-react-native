import React from 'react'
import { View, Image, Text } from 'react-native'

const icon = {
    account: require('../../src/icon/account.png'),
    accoutActive: require('../../src/icon/account-active.png'),
    help: require('../../src/icon/help.png'),
    helpActive: require('../../src/icon/help-active.png'),
    home: require('../../src/icon/home.png'),
    homeActive: require('../../src/icon/home-active.png'),
    inbox: require('../../src/icon/inbox.png'),
    inboxActive: require('../../src/icon/inbox-active.png'),
    order: require('../../src/icon/order.png'),
    orderActive: require('../../src/icon/order-active.png'),
}

const ItemNav = ({src, srcActive, active, title}) => {
    return (
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Image source={active ? srcActive : src} />
            <Text style={{color: active ? 'green' : 'grey'}}>{title}</Text>
        </View>
    )
}

export default function Navigation() {
    return (
        <View style={{height: 65, flexDirection: 'row', borderTopWidth: 0.7, borderTopColor: '#e8e8e8', backgroundColor: '#fff'}}>
            <ItemNav src={icon.home} srcActive={icon.homeActive} active={true} title="Home" />
            <ItemNav src={icon.order} srcActive={icon.orderActive} active={false} title="Order" />
            <ItemNav src={icon.help} srcActive={icon.helpActive} active={false} title="Help" />
            <ItemNav src={icon.inbox} srcActive={icon.inboxActive} active={false} title="Inbox" />
            <ItemNav src={icon.account} srcActive={icon.accountActive} active={false} title="Account" />
        </View>
    )
}
