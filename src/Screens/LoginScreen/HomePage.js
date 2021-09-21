import React, { useState, useEffect } from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import colors from '../../constants/Colors';
import { RadioButton, TextInput } from 'react-native-paper';



const HomePage = ({ navigation }) => {

    const [checked, setChecked] = React.useState('first');

    const data1 = [
        { title: 'One', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?tree' },
        { title: 'Two', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?nature' },
        { title: 'Three', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?girl' },
        { title: 'Four', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?water' },
    ]

    const data2 = [
        { title: 'One', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?water' },
        { title: 'Two', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?girl' },
        { title: 'Three', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?nature' },
        { title: 'Four', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?tree' },
    ]

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ]

    const renderitems1 = ({ item }) => {
        return (

            <View style={styles.outerbox}>
                <Image style={styles.image} source={{ uri: item.image }}  onPress={() => showAlert()}/>
                <View style={styles.innerbox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.paragraph}>{item.body}</Text>
                </View>
            </View>

        )
    }

    const renderitems2 = ({ item }) => {
        return (
            <View style={styles.outerbox}>
                <Image style={styles.image} source={{ uri: item.image }}  onPress={() => showAlert()}/>
                <View style={styles.innerbox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.paragraph}>{item.body}</Text>
                </View>
            </View>
        )
    }

    const ImageCard = () => {
        return (
            <SliderBox
                images={images}
                sliderBoxHeight={450}
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

    const showAlert = () => {
        Alert.alert('Welcome','Please SignIn to Continue', [
            {
                text: 'Skip',
                onPress: () => {
                    console.log('Skiped');
                },
            },
            {
                text: 'Proceed',
                onPress: () => {
                    navigation.navigate('UserLoginScreen');
                },
            },
        ]);
    }

    const RowButton = () => {
        return (

            <View style={styles.row}>
                <View >
                    <TouchableOpacity style={styles.blueButton}
                        onPress={() => showAlert()}>
                        <AntDesign name="star" color="white" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.btntext}>New</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.orangeButton}
                        onPress={() => showAlert()}>
                        <EvilIcons name="refresh" color="white" size={45} />
                    </TouchableOpacity>
                    <Text style={styles.btntext}>Used</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.brownButton}
                        onPress={() => showAlert()}>
                        <EvilIcons name="refresh" color="white" size={45} />
                    </TouchableOpacity>
                    <Text style={styles.btntext}>Sell</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.redButton}
                        onPress={() => showAlert()}>
                        <Entypo name="key" color="#fff" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.btntext}>Rent</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.purpleButton}
                        onPress={() => showAlert()}>
                        <FontAwesome name="thumbs-up" color="white" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.btntext}>Auction</Text>
                </View>
            </View>
        )
    }

    const SmallCard = ({ text, icon }) => {
        return (
            <View style={styles.smallCard}>
                <View style={styles.circle}>

                    <Ionicons name={icon} color="white" size={30} />
                </View>
                <View style={styles.Rectangle}>
                    <Text style={styles.whiteText}>{text}</Text>
                </View>
            </View>
        )
    }

    const UseCard = () => {
        return (
            <TouchableOpacity onPress={() => showAlert()}>
                <View style={styles.card}>
                    <Text style={styles.head}>Why Use CarsBN?</Text>
                    <Text style={styles.body}>It is a long established fact that a reader will be distracted by readable content of a page when looking as its layout.</Text>
                    <View style={styles.rowButton}>
                        <SmallCard text={"175 Inspection Point"} icon={"ios-car-sport"} />
                        <SmallCard text={"Fixed Price, No Hidden Fees"} icon={"ios-lock-closed"} />
                        <SmallCard text={"1 Year Warranty"} icon={"ios-car-sport"} />
                        <SmallCard text={"5 Day Money BAck Guarantee"} icon={"ios-car-sport"} />
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    return (

        <ScrollView style={styles.main} >
            <Ionicons name="menu-outline" color={colors.Blue} size={40} style={{ position: 'absolute', zIndex: 1 }}  onPress={() => showAlert()}/>
            <MaterialIcons name="chat-bubble-outline" color={colors.Blue} size={25} style={{ position: 'absolute', right: 10, top: 10, zIndex: 1 }}  onPress={() => showAlert()}/>
            <ImageCard />
            <View style={styles.container}>
                <RowButton />
                <UseCard />
                <Text style={styles.head}>Best Price Through Auction</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems1} keyExtractor={item => item.title} />
                <Text style={styles.head}>Hassle-Free Paperwork Registration Process</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data2} style={styles.flatList} renderItem={renderitems2} keyExtractor={item => item.title} />
                <Text style={styles.head}>How it works?</Text>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 8
    },
    paginationBoxStyle: {
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: "rgba(128, 128, 128, 0.92)"
    },
    radioButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        overflow: 'hidden'
    },
    ImageComponentStyle: {
        width: '100%',
        marginTop: 0,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
      //  marginHorizontal: 10
    },
    blueButton: {
        backgroundColor: 'skyblue',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:7
    },
    brownButton: {
        backgroundColor: colors.PrimaryBlue,
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:7
    },
    orangeButton: {
        backgroundColor: 'orange',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:7
    },
    redButton: {
        backgroundColor: colors.Red,
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:7
    },
    purpleButton: {
        backgroundColor: 'purple',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:7
    },
    btntext: {
        color: 'black',
        fontFamily: 'sans-serif-medium',
        marginTop: 10,
        alignSelf: 'center'
    },
    card: {
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    head: {
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center'
    },
    body: {
        textAlign: 'center',
        marginTop: 10
    },
    circle: {
        backgroundColor: colors.Blue,
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#DCDCDC',
        borderWidth: 2,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center'
    },
    Rectangle: {
        backgroundColor: colors.Blue,
        width: 130,
        height: 100,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    whiteText: {
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 13,
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 10,
        textAlign: 'center'
    },
    rowButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    smallCard: {
        marginTop: 10
    },
    image: {
        height: 150,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //resizeMode: 'stretch'
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
    },
    innerbox: {
        padding: 10,
    },
    flatList: {
        marginVertical: 10
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

export default HomePage;
