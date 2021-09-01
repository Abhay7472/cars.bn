import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from './constants/Colors';
import images from './constants/Images';


const SavedSccreen = ({ navigation }) => {

    const data1 = [
        { title: 'Ford', paragraph: '4250 km | Automatic', body: '25000$' },
        { title: "BMW", paragraph: '4250 km | Automatic', body: '25000$' },
        { title: 'Farari', paragraph: '4250 km | Automatic', body: '25000$' },
        { title: 'Audi', paragraph: '4250 km | Automatic', body: '25000$' },]

    const renderitems1 = ({ item }) => {
        return (

            <View style={styles.outerbox}>
                <Image style={styles.image} source={images.car} />
                <View style={styles.innerbox}>
                    <Text style={styles.title}> {item.title} </Text>
                    <Text style={styles.paragraph}> {item.paragraph}</Text>
                    <Text style={styles.paragraph}>{item.body}</Text>
                </View>
            </View>
        )
    }
    const renderitems2 = ({ item }) => {
        return (
            <View style={styles.outerbox}>
                <Image style={styles.image} source={images.cardImage} />
                <View style={styles.innerbox}>
                    <Text style={styles.title}> {item.title}</Text>
                    <Text style={styles.paragraph}>{item.paragraph}</Text>
                    <Text style={styles.paragraph}> {item.body}</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={images.union} style={styles.img}></Image>
                    <Text style={styles.text}>  Saved</Text>
                    <Feather name="message-square" color="#213884" size={30} style={{ alignSelf: 'flex-end', paddingLeft: "60%" }} />
                </View>
                <Text style={styles.head}> New</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems1} keyExtractor={item => item.title} />
                <Text style={styles.head}> Used</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems2} keyExtractor={item => item.title} />
                <Text style={styles.head}> Rent</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems2} keyExtractor={item => item.title} />
                <Text style={styles.head}> Auction</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems2} keyExtractor={item => item.title} />
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
        color: colors.PrimaryBlue,
        marginTop: 15,
        fontWeight: "bold",

    },
    head: {
        color: "red",
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        paddingLeft: 10,
        marginTop: 30,
        marginBottom: -10


    },
    flatList: {
        marginVertical: 20,


    },
    outerbox: {
        width: Dimensions.get('screen').width / 8 * 2,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        paddingRight: 20
    },
    image: {
        height: 100,
        width: '140%',
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
        fontSize: 15,

    },
    paragraph: {
        fontSize: 11,
        color: colors.PrimaryBlue
    }
})
export default SavedSccreen;
