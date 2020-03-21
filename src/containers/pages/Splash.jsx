import React, { Component } from 'react'
import { View, Image, StatusBar } from 'react-native'

const icon = {
    gojek: require('../../assets/logo/gojek-circle.png')
}

export default class Splash extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) => setTimeout(() => { resolve('result') }, 1500 ))
    }
    
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        
        if (data !== null) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' , alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 150, height: 205 }} source={icon.gojek} />
            </View>
        ) 
    }
}