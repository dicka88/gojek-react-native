import React, { Component } from 'react'
import { Text, View, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default class Topup extends Component {
  static navigationOptions = {
    headerShown: true,
    title: 'Top Up',
    headerStyle: {
      backgroundColor: '#3a85e0'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    animationEnabled: false
  }

  state = {
    pageActive: 'instant',
    amount: 0,
    alert: null
  }


  handleInput = (_, rawValue) => {
    this.setState({
      amount: rawValue,
    })

    this.setState({
      alert: rawValue < 10000 ? "minimum amount is Rp10.000" : null
    })
  }

  InstantPage = () => {
    const img = {
      coin1: require('../../../assets/illustration/topup/coin1.png'),
      coin2: require('../../../assets/illustration/topup/coin2.png'),
      coin3: require('../../../assets/illustration/topup/coin3.png'),
      coin4: require('../../../assets/illustration/topup/coin4.png'),
      visa: require('../../../assets/illustration/topup/visa.png'),
    }

    return (
      <>
        <View style={{ padding: 15 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#d1d1d1' }}>ENTER AMOUNT</Text>
            <TextInputMask
              ref={(ref) => this.moneyField = ref}
              type={'money'}
              options={{
                precision: 0,
                separator: ',',
                delimiter: '.',
                unit: 'Rp',
              }}
              includeRawValueInChangeText={true}
              value={this.state.amount || "0"}
              onChangeText={this.handleInput}
              maxLength={12}
              minLength={1}
              min={0}
              placeholderTextColor="#d1d1d1"
              style={{ fontSize: 30, fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#e8e8e8', height: 60 }} placeholder="Rp0"
            />
            {this.state.alert &&
              <Text style={{ color: 'red' }}>{this.state.alert}</Text>
            }
          </View>

          {/* if one of this === state.amount && add sign  */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.handleInput(null, 50000)} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 50, height: 50 }} source={img.coin1} />
              <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Rp50.000</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput(null, 100000)} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 50, height: 50 }} source={img.coin2} />
              <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Rp100.000</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput(null, 200000)} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 50, height: 50 }} source={img.coin3} />
              <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Rp200.000</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleInput(null, 500000)} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 50, height: 50 }} source={img.coin4} />
              <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Rp500.000</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 7, backgroundColor: '#e8e8e8' }} />
        <View style={{ flex: 1, padding: 15 }}>
          <View style={{ justifyContent: 'center', paddingVertical: 20 }}>
            <Text style={{ color: '#d1d1d1', fontWeight: 'bold', }}>PAYMENT METHOD</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 50 }}>
                  <Image style={{ width: 35, height: 35 }} source={img.visa} />
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Add BCA debit card</Text>
                  <Text>Add your card for an instant top up.</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', }}>
                <FontAwesomeIcon color="#d1d1d1" icon={faArrowRight} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 50 }}>
                  <Image style={{ width: 35, height: 35 }} source={img.visa} />
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Add BCA debit card</Text>
                  <Text>Add your card for an instant top up.</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', }}>
                <FontAwesomeIcon color="#d1d1d1" icon={faArrowRight} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 50 }}>
                  <Image style={{ width: 35, height: 35 }} source={img.visa} />
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Add BCA debit card</Text>
                  <Text>Add your card for an instant top up.</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', }}>
                <FontAwesomeIcon color="#d1d1d1" icon={faArrowRight} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 15 }}>
          <View style={{ paddingVertical: 10, marginBottom: 10, }}>
            <Text style={{ color: '#d1d1d1' }}>All your transactions are secure and fast. <Text style={{ color: 'green' }}>Learn more.</Text></Text>
          </View>
          <View style={{ width: '100%' }}>
            <TouchableOpacity disabled={this.state.alert === null} style={{ paddingVertical: 15, backgroundColor: this.state.alert === null ? 'green' : '#e8e8e8', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>PROCEED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }

  InstructionsPage = () => {
    return (
      <ScrollView>
        <Text>Instructions</Text>
      </ScrollView>
    )
  }

  _handlePage = (props) => {
    this.setState({
      pageActive: props
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor="#3a85e0" barStyle="light-content" />
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#3a85e0', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => this._handlePage('instant')} style={{ marginHorizontal: 5, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: this.state.pageActive != 'instant' ? '#3a85e0' : 'white' }}>
            <Text style={{ color: this.state.pageActive == 'instant' ? '#3a85e0' : 'white' }}>Instant</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handlePage('instructions')} style={{ marginHorizontal: 5, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: this.state.pageActive != 'instructions' ? '#3a85e0' : 'white' }}>
            <Text style={{ color: this.state.pageActive == 'instructions' ? '#3a85e0' : 'white' }}>Instructions</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 11 }}>
          {
            this.state.pageActive == 'instant' ? <this.InstantPage /> : <this.InstructionsPage />
          }
        </View>
      </View>
    )
  }
}
