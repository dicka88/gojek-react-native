import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from '../../containers/component/NavigationItem'

import {
    Home,
    Signup,
    Login,
    Splash,
    Inbox,
    Account,
    Help,
    Orders
} from '../../containers/pages'

// Tabscreen --------------------
const TabsScreen = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon focused = { focused } name = "home" />
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon focused = { focused } name = "order" />
        }
    },
    Help: {
        screen: Help,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon focused = { focused } name = "help" />
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon focused = { focused } name = "inbox" />
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarIcon: ({ focused }) => <Icon focused = { focused } name = "account" />
        }
    }
}, {
    order: ['Home', 'Orders', 'Help', 'Inbox', 'Account'],
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        labelStyle: {
            fontSize: 13
        },
        style: {
            height: 60,
            paddingVertical: 5
        }
    }
})

// Stack screen -------------------
const AuthScreen = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Login',
})

// const HomeScreen = createStackNavigator()
// const OrdersScreen = createStackNavigator()
// const HelpScreen = createStackNavigator()
// const InboxScreen = createStackNavigator()

// switch ---------------------------------

const SwitchScreen = createSwitchNavigator({
    Splash: Splash,
    Auth: AuthScreen,
    Home: TabsScreen
}, {
    initialRouteName: "Splash"
})

export default createAppContainer(AuthScreen)
export const Tabs = createAppContainer(TabsScreen)
export const Switch = createAppContainer(SwitchScreen)
