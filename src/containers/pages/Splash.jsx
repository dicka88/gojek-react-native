import React, { Component, useEffect } from 'react'
import { View, Image, StatusBar } from 'react-native'

const icon = {
    gojek: require('../../assets/logo/gojek-circle.png')
}

export default class Splash extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) => setTimeout(() => { resolve('result') }, 1000 ))
    }
    
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        const session = false

        if (data !== null) {
            if(session) {
                this.props.navigation.navigate('Home');
            } else {
                this.props.navigation.navigate('Auth');
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' , alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 135, height: 185 }} source={icon.gojek} />
            </View>
        ) 
    }
}