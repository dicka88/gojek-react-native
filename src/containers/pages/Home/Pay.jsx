import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faImage, faLightbulb, faPhone, faPiggyBank, faCode } from '@fortawesome/free-solid-svg-icons'

export default class Pay extends React.Component {
    state = {
        isCam: false
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                <View style={{ flex: 5, backgroundColor: '#d1d1d1' }}>
                    <View style={{ flex: 1, width: '100%', position: 'absolute', padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 33, width: 33, backgroundColor: 'white' }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </TouchableHighlight>
                        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 33, width: 33, backgroundColor: 'white' }}>
                                <FontAwesomeIcon icon={faImage} />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 33, width: 33, backgroundColor: 'white' }}>
                                <FontAwesomeIcon icon={faLightbulb} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', padding: 5, position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }}>Use camera to scan QR code and pay</Text>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 20, }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Make payment</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'green' }}>SHORTCUT</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ borderRightWidth: 1, padding: 10, flex: 5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, justifyContent: 'center' }}>
                                <TouchableHighlight style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: '#34ad56', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color="white" size={30} icon={faPhone} />
                                </TouchableHighlight>
                                <Text>To phone number</Text>
                            </View>
                            <View style={{ borderWidth: 1, justifyContent: 'center' }}>
                                <TouchableHighlight style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: '#34ad56', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color="white" size={30} icon={faPiggyBank} />
                                </TouchableHighlight>
                                <Text>To bank account</Text>
                            </View>
                            <View style={{ borderWidth: 1, justifyContent: 'center' }}>
                                <TouchableHighlight style={{ width: 55, height: 55, borderRadius: 50, backgroundColor: '#34ad56', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color="white" size={30} icon={faCode} />
                                </TouchableHighlight>
                                <Text>Using code</Text>
                            </View>
                        </View>
                        <View style={{ flex: 4, justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image style={{ width: 60, height: 40 }} source={ require('../../../assets/illustration/confirm.png')}  />
                            <Text>No order</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}