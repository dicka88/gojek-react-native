import React from 'react';
import { Text, Image } from 'react-native'

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

const TabsScreen = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused }) => < Icon focused = { focused }
            name = "home" / >
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            tabBarIcon: ({ focused }) => < Icon focused = { focused }
            name = "order" / >
        }
    },
    Help: {
        screen: Help,
        navigationOptions: {
            tabBarIcon: ({ focused }) => < Icon focused = { focused }
            name = "help" / >
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            tabBarIcon: ({ focused }) => < Icon focused = { focused }
            name = "inbox" / >
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarIcon: ({ focused }) => < Icon focused = { focused }
            name = "account" / >
        }
    }
}, {
    order: ['Home', 'Orders', 'Help', 'Inbox', 'Account'],
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'grey',
        style: {
            height: 60
        }
    }
})

const StackScreen = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login: {
        screen: Login
    },
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false,
        }
    },
    Signup: {
        screen: Signup
    }
}, {
    initialRouteName: 'Splash',
})

const SwitchScreen = createSwitchNavigator({
    Splash: Splash,
    Home: TabsScreen
}, {
    initialRouteName: "Splash"
})

export default createAppContainer(StackScreen)
export const Tabs = createAppContainer(TabsScreen)
export const Switch = createAppContainer(SwitchScreen)

// react-navigation 5

// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// const Stack = createStackNavigator()

// export default function Router() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="home" component={Home} />
//                 <Stack.Screen name="signin" component={Login} />
//                 <Stack.Screen name="splash" component={Splash} />
//                 <Stack.Screen name="signup" component={Signup} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }