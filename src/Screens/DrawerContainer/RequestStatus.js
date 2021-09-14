

import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import images from '../../constants/Images';
import Button from '../../components/Button';
import colors from '../../constants/Colors'
import { Card } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const RequestStatus =()=>{

        return (
            <ScrollView>
                <View>

                    <Text style={{ padding: 15, paddingTop: 20, color: 'red', fontSize: 20 }}>Report</Text>
                    <Text style={{ color: colors.PrimaryBlue, fontSize: 15, paddingLeft: 10, paddingRight: 10 }}>
                        Its is a long stablish fact that a rander will be distracted by the readable content of a page when looking at its layou.
                        The point of using Loriam ispum is that it has a more-or-less </Text>
                </View>
                <View>
                    <Card style={styles.card} >

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 5 }}>
                          <TouchableOpacity onPress={()=>navigation.navigate('')}>
                           <Card style={{ backgroundColor: colors.PrimaryBlue, padding: 10, borderRadius: 10, height: 85 }}>
                                <Image source={images.exterior} />
                                <Text style={{ color: '#fff' }}>Exterior</Text>
                            </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('')}>
                                <Card style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 10 }}>
                                <Image source={images.carSeat} />
                                <Text style={{ color: colors.PrimaryBlue }}>Interior</Text>
                            </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('')}>
                            <Card style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 10 }}>
                                <Image source={images.roadtest} />
                                <Text style={{ color: colors.PrimaryBlue }}>  Road</Text>
                            </Card>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('')}>
                            <Card style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 10 }}>
                                <Image source={images.inspectionCar} />
                                <Text style={{ color: colors.PrimaryBlue }}>  Body</Text>
                            </Card>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               

                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue,false:<Entypo name="circle-with-cross" size={25}backgroundColor="white"color={Colors.Red} />}}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue, }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                            <CheckBox
                               
                                style={{ marginLeft: "50%" }}
                                tintColors={{ true: colors.PrimaryBlue,  }} />
                        </View>
                    </Card>
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
    checkbox: {
        marginLeft: '54%'
    },

    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,
        fontWeight: 'bold'
    },
    card: {
        shadowColor: colors.PrimaryBlue,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 15,

        margin: 25,

    },
})
export default RequestStatus;


 