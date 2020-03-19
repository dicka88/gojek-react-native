import React from 'react';
import { Text } from 'react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Home, Signup, Login, Splash } from '../../containers/pages'

const TabsScreen = createBottomTabNavigator({
    Home,
    Login,
    Signup
})

const SwitchScreen = createSwitchNavigator({
    Splash: Splash,
    Home: Home
}, {
    initialRouteName: "Splash"
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