import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../constants/Colors';
import images from '../../constants/Images'


const Login = () => {


    const Form = () => {
        const navigation = useNavigation();
        return (
            <View>
                <View style={styles.headerWrapper}>
                    <Text style={{ color: "#213884" }}> First Name </Text>
                    <TextInput placeholder="First name" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}> Last Name </Text>
                    <TextInput placeholder="Last name" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}>  Email </Text>
                    <TextInput placeholder=" Email" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}> Phone Number   </Text>
                    <TextInput placeholder=" Phone Number" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}> Flat No / Street Name </Text>
                    <TextInput placeholder="Flat No / Street Name" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}>  City </Text>
                    <TextInput placeholder="City" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}> State </Text>
                    <TextInput placeholder="State" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}>  Password </Text>
                    <TextInput placeholder="Password" style={styles.input}> </TextInput>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}> Confirm Password </Text>
                    <TextInput placeholder="Confirm Password" style={styles.input}> </TextInput>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('SignInScreen')}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (

        <ScrollView style={styles.main}>
            <View style={styles.upper}>
                <Image style={styles.img} source={images.carLogo} />
            </View>
            <View style={styles.lower}>
                <Ionicons name="chevron-back" color={"#213884"} size={35} />
                <Text style={styles.heading}>Registration</Text>
                <Form />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#213884",
        flex: 1
    },
    upper: {
        backgroundColor: "#213884",
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
        width: '50%'
    },
    heading: {
        color: "#213884",
        fontSize: 22,
        fontFamily: 'sans-serif-medium',
        marginVertical: 10,
        marginLeft: 5
    },
    btn: {
        height: 50,
        width: '95%',
        backgroundColor: "#213884",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30
    },
    text: {
        color: 'white',
        fontSize: 17
    },
    input: {
        color: 'grey',
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        padding: 0
    },
    headerWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 15,
        alignSelf: 'auto',
        color: colors.PrimaryBlue,
        paddingTop: 5
    },

})

export default Login;
