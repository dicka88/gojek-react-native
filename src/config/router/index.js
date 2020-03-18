import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { 
    Splash,
    Home,
    Login,
    Signup   
 } from '../../containers/pages'

const Stack = createStackNavigator()

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="signin" component={Login} />
                <Stack.Screen name="signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}