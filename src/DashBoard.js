import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from './constants/Images';
import Button from './components/button';

const Dashboard = () => {
      
    const data1 = [
        { title: '2018 Toyota C HR 1.8', paragraph: 'Automatic | 4Seater | Sadan', body: 'Lodon Ispum is simple domy Text' },
        { title: "BMW", paragraph: '4250 km | Automatic', body: '25000$' },
        { title: 'Farari', paragraph: '4250 km | Automatic', body: '25000$' },
        { title: 'Audi', paragraph: '4250 km | Automatic', body: '25000$' },]

    const renderitems1 = ({ item }) => {
        return (

            <View style={styles.outerbox}>
                <Image style={styles.image} source={images.car} />
                <View style={styles.innerbox}>
                    <Text style={styles.title}> {item.title}  </Text>
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
                    <Text style={styles.text}> Dashboard  </Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btn}>
                        <Text style={styles.btntext}> Create Post</Text>
                        <Ionicons name="chevron-forward-outline" size={30} style={ styles.btnicon} />
                    </View>
                </TouchableOpacity>
                <View>
                <Text style={{color:"red",paddingTop:15,paddingLeft:15,fontSize:20}}>Featured</Text>                    
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems1} keyExtractor={item => item.title} />
                <Text style={{color:"red",paddingTop:15,paddingLeft:15,fontSize:20}}>New Arrival</Text>     
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems2} keyExtractor={item => item.title} />
                </View>
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