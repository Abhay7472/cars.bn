

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import images from './constants/Images';
import Button from './components/button';
import colors from './constants/Colors'
import { Card } from 'react-native-elements/dist/card/Card';

const InspectionReport = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={images.union} style={styles.img}></Image>
                    <Text style={styles.text}> Inspection Report  </Text>
                </View>
                <Text style={{ padding: 15, paddingTop: 20, color: 'red', fontSize: 20 }}>Report</Text>
                <Text style={{ color: colors.PrimaryBlue, fontSize: 15, paddingLeft: 10, paddingRight: 10 }}>
                    Its is a long stablish fact that a rander will be distracted by the readable content of a page when looking at its layou.
                    The point of using Loriam ispum is that it has a more-or-less </Text>
            </View>
            <Card style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: colors.PrimaryBlue }}>
                        <Image source={images.exterior}
                            style={{ backgroundColor: "#213884" }} />
                        <Text style={{ color: '#fff' }}>Exterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.carSeat} />
                        <Text style={{ color: colors.PrimaryBlue }}>Exterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.roadtest} />
                        <Text style={{ color: colors.PrimaryBlue }}>Road Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.inspectionCar} />
                        <Text style={{ color: colors.PrimaryBlue }}> UnderBody</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            tintColor={{ true: "#213884", false: 'red' }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            tintColor={{ true: "#213884", false: 'red' }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            tintColor={{ true: "#213884", false: 'red' }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            tintColor={{ true: "#213884", false: 'red' }} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ color: colors.PrimaryBlue, fontSize: 18 }}>Lorium Ipsum</Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            tintColor={{ true: "#213884", false: 'red' }} />
                    </View>

                </View>
            </Card>
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
        marginLeft: '60%'
    },

    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,
        fontWeight: 'bold'

    },
})
export default InspectionReport;