import React, { Component } from 'react'
import { View, Image, StatusBar } from 'react-native'

const icon = {
    gojek: require('../../assets/icon/gojek-icon.png')
}

export default class Splash extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) => setTimeout(() => { resolve('result') }, 2000 ))
    }
    
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('home');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 170, height: 235 }} source={icon.gojek} />
            </View>
        ) 
    }
}