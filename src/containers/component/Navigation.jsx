import React from 'react'
import { View, Image, Text } from 'react-native'

const icon = {
    account: require('../../assets/icon/account.png'),
    accoutActive: require('../../assets/icon/account-active.png'),
    help: require('../../assets/icon/help.png'),
    helpActive: require('../../assets/icon/help-active.png'),
    home: require('../../assets/icon/home.png'),
    homeActive: require('../../assets/icon/home-active.png'),
    inbox: require('../../assets/icon/inbox.png'),
    inboxActive: require('../../assets/icon/inbox-active.png'),
    order: require('../../assets/icon/order.png'),
    orderActive: require('../../assets/icon/order-active.png'),
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
