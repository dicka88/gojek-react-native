import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        try {
            const ft = await fetch('https://api.github.com/users/dicka88')
            const json = await ft.json()
            
            this.setState({
                data: json
            })
        } catch (e) {
            alert("Connection is off")
        }

    }

    RenderData = () => {
        const { login, id, name, location, bio } = this.state.data
        return (
            <>
                <Text>Login : { login }</Text>
                <Text>id : { id }</Text>
                <Text>Name : { name }</Text>
                <Text>Location : { location }</Text>
                <Text>Quotes : { bio }</Text>
            </>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroudColor: 'black' }} >
                <View style={{ 
                    height: 50, 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    borderBottomWidth: 1, 
                    borderBottomColor: '#e3e3e3',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                        Account
                    </Text>
                    {/* <Image /> */}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image source={} /> */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18}} >Soon :)</Text>
                        <Text>Take care to this.</Text>
                        {
                            this.state.data && <this.RenderData />
                        }
                    </View>
                </View>
            </View>
        )
    }
}