import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Colors from './constants/Colors.js'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SliderBox } from "react-native-image-slider-box";

const Design = ({ navigation }) => {

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

            />
        )
    }
    const Card1 = () => {
        return (
            <View style={styles.card}>
                <View style={styles.row}>
                    <Ionicons name="car" color={"#EA002A"} size={30} />
                    <Text style={styles.bigBlueText}>Audi</Text>
                </View>
                {/* <View style={styles.row}>
                    <Ionicons name="call" color={"#EA002A"} size={23} />
                    <Text style={styles.bigBlueText}>+140-212345561</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="location-sharp" color={"#EA002A"} size={25} />
                    <Text style={styles.bigBlueText}>122, Baker Street, Jaipur, Rajasthan</Text>
                </View> */}
            </View>
        )
    }

    const Card2 = () => {
        return (
            <View style={styles.card}>
                <View style={styles.row}>
                   <TouchableOpacity> 
                       <AntDesign name="calendar" color={"#EA002A"} size={30} />
                   </TouchableOpacity>
                    <Text style={styles.bigBlueText}>Choose a date for Photography </Text>
                
                </View>                
            </View>
        )
    }

     

    return (
        <ScrollView style={styles.main}>
            <ImageCard />
            <View style={{marginTop:20}}>
                <Card1/>
               <Card2/>
               <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext} >Request For Sponsor</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
export default Design

const styles = StyleSheet.create({
    btntext: {
        color: 'white',
        fontSize: 14,
        padding: 10,
        
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
        fontSize: 20,
        marginLeft: 5,
        fontFamily: 'sans-serif-medium',
        alignSelf: 'center'
    }, 
    main: {
        flex: 1,
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