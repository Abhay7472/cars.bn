import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import colors from '../../constants/Colors';
import images from '../../constants/Images';
 


const CreatePost2 = ({navigation}) => {

    const DropDown = () => {

        return (
            <View>
                <TouchableOpacity onPress={() => { }} style={[styles.card, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                    <Text style={styles.bigBlueText}>Post Submitted to Admin!</Text>
                    <Ionicons name="checkmark-done" color="#213884" size={30} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.union} style={styles.img}></Image>
                <Text style={styles.text}>Create post</Text>
            </View>

            <Image source={images.PostImage} style={{ borderRadius: 40, alignSelf: 'center', marginTop: 20 }} />

            <DropDown />

            <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity>
                    <Text style={[styles.btn, { paddingLeft: 35, paddingRight: 35 }]}>Sponcer Post</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.btn, { paddingLeft: 35, paddingRight: 35 }]}>Promote Post</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity>
                    <Text style={styles.btn}>Request Inspection </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btn} onPress={()=>navigation.navigate('Payment')}> 360'View Request</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    card: {
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 25
    },
    bigBlueText: {
        color: "#213884",
        fontSize: 25,
        marginLeft: 10,
        alignSelf: 'center',

    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: '200'
    },



})
export default CreatePost2;
