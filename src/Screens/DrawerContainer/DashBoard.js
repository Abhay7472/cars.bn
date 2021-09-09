import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../../constants/Images';
import Button from '../../components/Button';
import Colors from '../../constants/Colors'

import {getArticales} from '../../services/Auth'; 
import { colors } from 'react-native-elements';

const Dashboard = () => {

    const data1 = [
        { title: '2018 Toyota C HR 1.8', paragraph: 'Automatic | 4Seater | Sadan', body: 'Lodon Ispum is simple domy Text' },
        { title: "BMW", paragraph: '4250 km | Automatic', body: '25000$' },
        { title: 'Farari', paragraph: '4250 km | Automatic', body: '25000$' },
        { title: 'Audi', paragraph: '4250 km | Automatic', body: '25000$' },]

    const renderitems1 = ({ item }) => {
        return (

            <View style={styles.outerbox}>
                <Image style={styles.image} source={images.cardImage} />
                <View style={styles.innerbox}>
                    <Text style={styles.title}> {item.title}  </Text>
                    <Text style={styles.paragraph}> {item.paragraph}</Text>
                    <Text style={styles.paragraph}>{item.body}</Text>
                </View>
            </View>
        )
    }

    const Card1 = () => {

        return (
            <View style={[styles.card, {}]}>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={images.cardImage} style={{ width: "30%", height: "80%" }} />
                    <View >
                        <Text style={{ paddingLeft: 10, color: "green", fontSize: 20, fontWeight: '500' }}>APPROVED</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 3 }}> 2018 Toyota C-HR 1.8</Text>
                        <Text style={{ fontSize: 20, color: 'red', fontWeight: 'bold', paddingLeft: 5 }}>$20500</Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5 }}>Automatice | 4 Seater | Sadan</Text>
                        <TouchableOpacity >
                            <View style={styles.cardBtn}>
                                <Text style={styles.cardBtnText}>Boost your post for 10 days</Text>
                                {/* <Ionicons name="chevron-forward-outline" size={30}  style={{paddingRight:10}} /> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )

    }

    const Card2 = () => {

        return (
            <ScrollView>
                <View style={[styles.card, {}]}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={images.cardImage} style={{ width: "30%", height: "80%" }} />
                        <View >
                            <Text style={{ paddingLeft: 10, color:Colors.PrimaryBlue, fontSize: 18, fontWeight: 'bold' }}>PENDING ADMIN APPROVAL</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 3 }}> 2018 Toyota C-HR 1.8</Text>
                            <Text style={{ fontSize: 20, color:Colors.Red, fontWeight: 'bold', paddingLeft: 5 }}>$20500</Text>
                            <Text style={{ fontSize: 15, paddingLeft: 5 }}>Automatice | 4 Seater | Sadan</Text>
                            <TouchableOpacity >
                                <View style={styles.cardBtn}>
                                    <Text style={styles.cardBtnText}>Boost your post for 10 days </Text>
                                    {/* <Ionicons name="chevron-forward-outline" size={30}  style={{paddingRight:10}} /> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text
                        style={styles.view}>
                        View More</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    const RecentPostCard = () => {

        return (
            <ScrollView>
                <View style={[styles.card, {}]}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={images.cardImage} style={{ width: "30%", height: "100%" }} />
                        <View >
                            <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: '500' }}>PENDING ADMIN APPROVAL</Text>
                            <Text style={{ fontSize: 15, color: 'red', fontWeight: 'bold', paddingLeft: 5 }}>$20500</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Text style={[styles.colorbtn, { backgroundColor: "#FFC53E", paddingLeft: 30, paddingRight: 30, marginLeft: 10, marginRight: 10 }]}>Boost</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={[styles.colorbtn, { backgroundColor: "#73C5ED", paddingLeft: 20, paddingRight: 20 }]}>INSPECTION</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ paddingTop: 10 }}>
                                    <Text style={[styles.colorbtn, { backgroundColor: "#EA0787", marginLeft: 5, marginRight: 5 }]}>Boost</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingTop: 10 }}>
                                    <Text style={[styles.colorbtn, { backgroundColor: "#F2E646", marginLeft: 5, marginRight: 5 }]}>Boost</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingTop: 10 }}>
                                    <Text style={[styles.colorbtn, { backgroundColor: "#F68D1B", marginRight: 10 }]}>Boost</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </View>

            </ScrollView>
        )

    }
    return (
        <ScrollView>
            <View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={styles.btntext}> Create Post</Text>
                        <Ionicons name="chevron-forward-outline" size={30} style={styles.btnicon} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={{ color: "red", paddingTop: 15, paddingLeft: 15, fontSize: 20 }}>Featured</Text>
                    <View><Card1 >
                        <Image source={images.carLogo} style={{ width: "20%", height: '20%' }} />
                    </Card1>
                        <Card2 />
                        <Text style={{ color: 'red', padding: 10, fontSize: 15 }}>Recent Post</Text>
                        <RecentPostCard />
                        <RecentPostCard />
                        <TouchableOpacity>
                            <Text
                                style={styles.view}>
                                View More</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "red", paddingTop: 15, paddingLeft: 15, fontSize: 20 }}>Recent Transaction And Bids</Text>
                    <Text style={{ fontSize: 15, paddingLeft: 15, paddingTop: 10 }}>26 Aug 2021 </Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={renderitems1} keyExtractor={item => item.title} />
                    <Text style={{ fontSize: 15, paddingLeft: 15, paddingTop: 10 }}>25 Aug 2021 </Text>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={renderitems1} keyExtractor={item => item.title} />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    colorbtn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 15
    },

    card: {
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 20,
        margin: 10,
    },
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,

    },
    btn: {
        backgroundColor: "#213884",
        borderRadius: 40,
        fontWeight: 'bold',
        margin: 20,
        marginBottom: 10,
        flexDirection: 'row'
    },
    btntext: {
        color: "white",
        padding: 10,
        fontSize: 20
    },

    btnicon: {
        color: 'white',
        paddingTop: 6,
        paddingLeft: "50%"
    },
    cardBtn: {
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        fontWeight: 'bold',
        margin: 5,
        marginBottom: 10,
        flexDirection: 'row'
    },
    cardBtnText: {
        color: "red",
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    view: {
        alignSelf: 'flex-end',
        padding: 10,
        color: "red",
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 15
    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //resizeMode: 'stretch'
    },
    innerbox: {
        padding: 10,
    },
    outerbox: {
        width: Dimensions.get('screen').width / 4 * 2,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        marginHorizontal: 10,
        marginTop: 20,

    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    paragraph: {
        fontSize: 11
    }



})
export default Dashboard;