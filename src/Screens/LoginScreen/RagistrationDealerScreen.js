import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker'

import colors from '../../constants/Colors';
import images from '../../constants/Images'


const RagistrationDealerScreen = ({ navigation }) => {

    const ComponyDocument = async authProps => {

        try {
            // const header ={
            //     Authorization: authProps.idToken 
            // }
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            })

            console.log(results[0].uri);

        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }
    }

    const Form = () => {

        return (
            <ScrollView>
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
                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}> Company Name    </Text>
                        <TextInput placeholder=" Comapny Name  " style={styles.input}> </TextInput>
                    </View>
                    {/* <View style={[styles.headerWrapper, { marginTop: 5 }]}> */}
                    <Text style={{ color: "#213884", paddingTop: 10 }}>  Compony Document</Text>
                    <TouchableOpacity
                        onPress={() => ComponyDocument()}  >
                        <FontAwesome5 name="file-upload" size={30} style={{ paddingTop: 15, paddingLeft: 10 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        height: Dimensions.get('screen').height / 7 * 8,
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
        marginTop: 10
    },

})

export default RagistrationDealerScreen;
