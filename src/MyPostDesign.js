import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from './constants/Colors';
import { Card } from 'react-native-elements/dist/card/Card';
import { SliderBox } from "react-native-image-slider-box";
import images from './constants/Images';

const MyPostDesign = () => {

    const Renderitems1 = () => {
        return (

            <View style={styles.outerbox}>
                <Image style={styles.image} source={images.car} />
                <View style={styles.innerbox}>
                    <Text style={styles.title}>Ford Mustang-2014</Text>
                    <Text style={styles.paragraph}> 4250km | Automatic</Text>
                    <Text style={[styles.paragraph, { color: "#213884", fontSize: 20 }]}> $ 25000</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={images.union} style={styles.img}></Image>
                    <Text style={styles.text}>My post</Text>
                </View>

                <Text style={[styles.text, { color: 'yellow', fontWeight: 'bold' }]}>Request Panding</Text>
                <Renderitems1 />

                <Text style={[styles.text, { color: 'green', fontWeight: 'bold' }]}>Approved</Text>
                <Renderitems1 />

                <Text style={[styles.text, { color: 'red', fontWeight: 'bold' }]}>Rejected</Text>
                <Renderitems1 />
                
            </View>
        </ScrollView>
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
    outerbox: {
        width: Dimensions.get('screen').width / 3 * 2,
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
        marginTop: 20
    },
    image: {
        height: 150,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //resizeMode: 'stretch'
    },
    innerbox: {
        padding: 10,
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
export default MyPostDesign
