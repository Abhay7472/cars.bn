import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from "react-native";
import Colors from '../../constants/Colors.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/AntDesign'
import { SliderBox } from "react-native-image-slider-box";


const Sponsor = ({ navigation }) => {

    const images = [
        "https://source.unsplash.com/1024x768/?audi",
        "https://source.unsplash.com/1024x768/?BMW",
        "https://source.unsplash.com/1024x768/?car?",
        "https://source.unsplash.com/1024x768/?bmw",
    ]


    const ImageCard = () => {
        return (
            <SliderBox
                images={images}
                sliderBoxHeight={300}
                dotColor={"#213884"}
                inactiveDotColor="white"
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={styles.paginationBoxStyle}
                dotStyle={styles.dotStyle}
                ImageComponentStyle={styles.ImageComponentStyle}
                imageLoadingColor="#2196F3"

            />)
    }

    const Card1 = () => {
        return (
            <View style={styles.card}>
                <View style={styles.row}>
                    <Ionicons name="mail" color={"#EA002A"} size={23} />
                    <Text style={styles.bigBlueText}>info@carsbn.com</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="call" color={"#EA002A"} size={23} />
                    <Text style={styles.bigBlueText}>+140-212345561</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="location-sharp" color={"#EA002A"} size={25} />
                    <Text style={styles.bigBlueText}>122, Baker Street, Jaipur, Rajasthan</Text>
                </View>
            </View>
        )
    }

    const Form = () => {
        return (
            <View>
                <Text style={styles.blueText} >Email</Text>
                <TextInput style={styles.input} placeholder="youmail@Example.com" />
                <Text style={styles.blueText}>Phone no.</Text>
                <TextInput style={styles.input} placeholder="+91 935685545" />
                <Text style={styles.blueText}>Message</Text>
                <TextInput style={styles.input} placeholder=" TYPE your message" />
                <TextInput placeholder="  Enter Amount"
                    placeholderTextColor={Colors.PrimaryBlue}
                    style={{ margin: 10, borderWidth: 2, alignSelf: 'center', }}>
                </TextInput>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext} >Request For Sponsor</Text>

                </TouchableOpacity>
            </View>
        )
    }


    return (
        <ScrollView style={styles.main}>
            <ImageCard />
            <View style={{ marginTop: 20 }}>
                <Card1 />
                <Form />
            </View>


        </ScrollView>
    )
}
export default Sponsor;

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "darkgrey",
        borderBottomWidth: 1,
        color: '#696969',
        fontFamily: 'sans-serif-medium',
        padding: 0,
    },
    blueText: {
        color: "#213884",
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'sans-serif-medium',
    },
    btn: {
        backgroundColor: "#213884",
        borderRadius: 50,
        alignSelf: 'center',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    btntext: {
        color: 'white',
        fontSize: 14,
        padding: 10
    },
    row: {
        flexDirection: 'row'
    },
    card: {
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 10,
    },
    bigBlueText: {
        color: "#213884",
        fontSize: 15,
        marginLeft: 5,
        fontFamily: 'sans-serif-medium',
        alignSelf: 'center'
    }, 
    paginationBoxStyle: {
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    ImageComponentStyle: {
        width: '100%',
        marginTop: 0,
    },
    btn: {
        height: 50,
        width: '70%',
        backgroundColor: "#213884",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15
    },
   
    

})