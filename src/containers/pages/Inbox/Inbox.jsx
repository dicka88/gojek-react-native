import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import moment from 'moment'

export default class Inbox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const icon = {
            no_inbox: require('../../../assets/illustration/no_orders.png'),
            gopay:  require('../../../assets/logo/gopay-circle.png'),
            gojek:  require('../../../assets/logo/gojek-notext.png'),
        }

        const EmptyContent = () => {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Image source={} /> */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18}} >Nothing content!</Text>
                        <Text>Lets waiting a beauty content.</Text>
                    </View>
                </View>
            )
        }

        const Content = () => {

            // category = gopay, gojek
            const contentLength = [{
                id: 1,
                category: 'gopay',
                time: '1584944379679',
                title: 'Jajan + Promo = Mantep!',
                subTitle: 'Klik dan cek promo GoPay disekitarmu buat dapetin banyak cashback',
                images: null
            },{
                id: 2,
                category: 'gopay',
                time: '1584944379679',
                title: 'Kuy beli makanan !',
                subTitle: 'Diskon 50% untuk hari ini, pesan GoFood sekarang !',
                images: require('../../../assets/illustration/cashback.png')
            },{
                id: 3,
                category: 'gojek',
                time: '1584944000000',
                title: 'Gojek ada dikotamu',
                subTitle: 'Kami berusaha agar layanan gojek sampai di kota mu',
                images: null
            },{
                id: 4,
                category: 'gopay',
                time: '1584944379679',
                title: 'Beli pulsa sekarang mudah !',
                subTitle: 'Lewat Gopay beli pulsa tidak perlu ke konter',
                images: null
            },
            ]

            const convertDate = (date) => {
                if(!date) return 'null'
                return moment(Number(date)).format('MMM DD h:mm A');
            }

            return (
                <ScrollView style={{ flex: 1, padding: 20 }}>
                    {
                        contentLength.map(e => {
                            return (
                                <View key={e.id} style={{ paddingBottom: 5, paddingTop: 10, borderBottomWidth: 1, borderBottomColor: '#e8e8e8' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={{width: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                            <Image style={{ width: 40, height: 40, position: 'absolute', top: 0, left: 0 }} source={icon[e.category]} />
                                        </View>
                                        <View style={{ width: '87%', justifyContent: 'flex-start' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: 'bold' }}>{e.title}</Text>
                                                <Text style={{ color: 'grey' }} >{convertDate(e.time)}</Text>
                                            </View>
                                            <View style={{marginTop: 5, flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                                                <Text style={{ color: 'grey' }}>{e.subTitle}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {
                                        e.images ? <Image style={{ width: '100%', height: 200, borderRadius: 8, marginVertical: 10 }} source={e.images} /> : <Text></Text>
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>
            )
        }

        const data = {
            empty: false
        }

        return (
            <View style={{ flex: 1 }} >
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
                        Inbox
                    </Text>
                    {/* <Image /> */}
                </View>
                { data.empty ? <EmptyContent /> : <Content /> }
            </View>
        )
    }
}