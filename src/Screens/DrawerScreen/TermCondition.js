import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/Colors';
import images from '../../constants/Images';

const TermCondition = ({navigation:{goBack}}) => {

    return (
        <ScrollView style={styles.main}>
            <View style={styles.upper}>
                <Image style={styles.img} source={images.carLogo} />
            </View>
            <View style={styles.lower}>
            <TouchableOpacity onPress={()=>goBack('Drawer')}>
                <Ionicons name="chevron-back" color={"#213884"} size={35} />
                </TouchableOpacity>
                <Text style={styles.heading}> Term & Conditions  </Text>
                <Text style={styles.head}>Lorem Ipsum</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.head}>Lorem Ipsum</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.head}>Lorem Ipsum</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.PrimaryBlue,
        flex: 1
    },
    upper: {
        backgroundColor: colors.PrimaryBlue,
        height: Dimensions.get('screen').height / 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower: {
        height: Dimensions.get('screen').height / 9 * 8,
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    img: {
        height: "100%",
        width: "50%",
    },
    heading: {
        color: colors.PrimaryBlue,
        fontSize: 22,
        fontFamily: 'sans-serif-medium',
        marginTop: 10,
        marginLeft: 5
    },
    head: {
        color: '#3B3B3B',
        marginLeft: 5,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        marginTop: 10,
    },
    body: {
        color: 'grey',
        marginLeft: 5,
        fontFamily: 'sans-serif-medium',
    }
})

export default TermCondition;