import React from 'react'
import { View, Text, Image, TouchableHighlight, TouchableOpacity ,Vibration, StyleSheet, Modal } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faImages, faBolt, faPhone, faPiggyBank, faCode, faPlus } from '@fortawesome/free-solid-svg-icons'
import BarCodeScanner from 'react-native-qrcode-scanner'
import QRCode from 'react-native-qrcode-generator'
import { RNCamera } from 'react-native-camera'

export default class Pay extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    state = {
        qrcodeScanned: 'hello',
        isCam: false,
        torch: false,
        modalVisible: false,
    }

    componentDidMount() {
        // Vibration.vibrate()
    }

    setTorch = () => {
        const vm = this
        this.setState({
            ...this.state,
            torch: !vm.state.torch
        })
    }

    handleModal = () => {
        const vm = this
        this.setState({
            ...this.state,
            modalVisible: !vm.state.modalVisible
        })
        console.log(this.state);

    }

    handleScanned = (scan) => {
        // show modal with qrcode scanned
        // alert(scan.data)
        // console.log(scan);
        
        Vibration.vibrate()
        this.handleModal()
        // this.setState({
        //     ...this.state,
        //     qrcodeScanned: scan.data
        // })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                <View style={{ flex: 5, backgroundColor: '#d1d1d1' }}>
                    <BarCodeScanner
                        reactivateTimeout={1000}
                        flashMode={this.state.torch ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                        fadeIn={true} 
                        showMarker={true} 
                        markerStyle={{ borderRadius: 10, width: 180, height: 180 }} 
                        reactivate={!this.state.modalVisible} 
                        onRead={(e) => this.handleScanned(e)}
                        containerStyle={{ flex: 1, top: 0, position: 'absolute' }}
                        cameraStyle={{ height: 660 }}
                    />
                    <View style={{ flex: 1, width: '100%', position: 'absolute', padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 33, width: 33, backgroundColor: 'white' }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </TouchableHighlight>
                        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 33, width: 33, backgroundColor: 'white' }}>
                                <FontAwesomeIcon icon={faImages} />
                            </View>
                            <TouchableHighlight onPress={() => this.setTorch()} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 33, width: 33, backgroundColor: this.state.torch ? '#edcc47' : 'white' }}>
                                <FontAwesomeIcon color={this.state.torch ? 'white' : 'black'} icon={faBolt} />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ width: '100%', padding: 5, position: 'absolute', bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }}>Use camera to scan QR code and pay</Text>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 20, }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Make payment</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: 7, alignItems: 'center', justifyContent: 'center', borderRadius: 50, height: 20, width: 20, backgroundColor: '#34ad56' }}>
                                <FontAwesomeIcon color="white" size={11} icon={faPlus} />
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'green' }}>SHORTCUT</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ paddingTop: 30, flex: 5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableHighlight style={{ marginBottom: 6, width: 55, height: 55, borderRadius: 50, backgroundColor: '#34ad56', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color="white" size={30} icon={faPhone} />
                                </TouchableHighlight>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>To phone{"\n"}  number</Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center' }}>
                                <TouchableHighlight style={{ marginBottom: 6, width: 55, height: 55, borderRadius: 50, backgroundColor: '#34ad56', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color="white" size={30} icon={faPiggyBank} />
                                </TouchableHighlight>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>To bank{"\n"}account</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableHighlight style={{ marginBottom: 6, width: 55, height: 55, borderRadius: 50, backgroundColor: '#34ad56', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color="white" size={30} icon={faCode} />
                                </TouchableHighlight>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>Using</Text>
                                    <Text style={{ fontSize: 12 }}>code</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 4, justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image style={{ width: 60, height: 40 }} source={ require('../../../assets/illustration/confirm.png')}  />
                            <Text style={{ fontSize: 12 }}>No recent {"\n"} receivers</Text>
                        </View>
                    </View>
                </View>
                {/* Modal qrcode */}
                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                        <TouchableOpacity style={{ padding: 20, borderColor: 'grey', backgroundColor: '#d1d1d1' }} onPress={() => this.handleModal()}>
                            <Text style={{ fontSize: 20 }}>Close me</Text>
                        </TouchableOpacity>
                        <QRCode
                            value={this.state.qrcodeScanned}
                            size={300}
                            bgColor='black'
                            fgColor='white' 
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0, marginLeft: 0, marginStart: 0,
        paddingHorizontal: 0, paddingLeft: 0, paddingStart: 0,
        height: '150%',
        padding: 0
    },
  });