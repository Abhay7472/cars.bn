import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './constants/Colors';
import images from './constants/Images';



const CreatePost2 = ({ navigation }) => {

    const DropDown = () => {

        return (
            <View>
                <TouchableOpacity onPress={() => { }} style={[styles.card, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                    <Image source={images.cardImage} style={{ height: 50, width: 100, resizeMode: 'stretch' }} />
                    <Text style={styles.bigBlueText}
                        style={{ paddingRight: 90, color: "#213884", fontSize: 15 }}>Post Submitted to Admin!</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        //  <ScrollView>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.union} style={styles.img}></Image>
                <Text style={styles.text}>Auction</Text>
                <Feather
                    name="message-square"
                    size={30}
                    style={{ marginLeft: "55%", paddingTop: 15, color: "#213884" }}
                />
            </View>
            <Image source={images.carBannerDesign} style={styles.backImage} resizeMode='stretch' />

            <View >
                <Text style={{ paddingTop: 30, paddingLeft: 15, fontSize: 20 }}>My Auction</Text>
                <DropDown />
            </View>

            <View >
                <Text style={{ paddingTop: 30, paddingLeft: 15, fontSize: 20 }}>Live</Text>
                <DropDown />
            </View>

            <View >
                <Text style={{ paddingTop: 30, paddingLeft: 15, fontSize: 20 }}>UpComing</Text>
                <DropDown />
            </View>

            <View >
                <Text style={{ paddingTop: 30, paddingLeft: 15, fontSize: 20 }}>Previous</Text>
                <DropDown />
            </View>
        </View>
        // </ScrollView>

    )
}

const styles = StyleSheet.create({
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
        fontWeight: "500"
    },
    backImage: {

        width: '90%',
        height: '30%',
        marginTop: 30,
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        borderRadius: 20,

    },

    card: {
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 10,

    },




})
export default CreatePost2;


