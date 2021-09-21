
import React, { Component, useState } from 'react'
import { Switch, FlatList, SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions, Pressable, } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { Picker } from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker'
import { Avatar } from 'react-native-elements';
import colors from '../../../constants/Colors';
import images from '../../../constants/Images';
import ImagePicker from 'react-native-image-crop-picker';
import { Card, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler'; 


const CreatePostPrice = ({navigation}) => {

    const [currentPosition, setCurrentPosition] = useState(2);
    const [pickerValue, setpickerValue] = React.useState('first');

    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveQdZi9pVUm0br0quUidx2fmdD1Y_KyCWOg&usqp=CAU');


    const chooseFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path);
        });
    }



    const UploadImage = () => {
        return (
            <View >
                <Avatar
                    onPress={chooseFromGallery}
                    activeOpacity={0.7}
                    source={{ uri: image }}
                    size={80}
                />

                <Image style={styles.icon} source={images.cancle1} />

            </View>
        )
    }
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => {
        setIsEnabled1(previousState => !previousState)
    }
    const toggleSwitch2 = () => {
        setIsEnabled2(previousState => !previousState)
    }
    const toggleSwitch3 = () => {
        setIsEnabled3(previousState => !previousState)
    }
    const labels = []
    const customStyles = {
        stepIndicatorSize: 25,
        separatorStrokeWidth: 2,
        currentStepIndicatorSize: 30,
        stepStrokeCurrentColor: 'white',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: 'red',
        stepStrokeUnFinishedColor: 'white',
        separatorFinishedColor: 'red',
        separatorUnFinishedColor: 'red',
        stepIndicatorFinishedColor: 'red',
        stepIndicatorUnFinishedColor: 'white',
        stepIndicatorCurrentColor: 'white',
    }


    return (
        <ScrollView>

            <View style={styles.indicatorContainer}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels}
                    currentPosition={currentPosition}
                    stepCount='3' />

                <View>
                    <Text style={[styles.dropSownText, { paddingTop: 20 }]}>Trim</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="abc" value="abc"></Picker.Item>
                        <Picker.Item label="marvel" value="marvel"></Picker.Item>
                        <Picker.Item label="xyz" value="xyz"></Picker.Item>
                    </Picker>

                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 5, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Transmission  </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="java" value="java"></Picker.Item>
                        <Picker.Item label="css" value="css"></Picker.Item>
                        <Picker.Item label="html" value="html"></Picker.Item>
                    </Picker>

                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 5, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> No. Of Doors   </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="1" value="1"></Picker.Item>
                        <Picker.Item label="2" value="2"></Picker.Item>
                        <Picker.Item label="3" value="3"></Picker.Item>
                    </Picker>

                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 0, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Seating Capacity  </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="50" value="50"></Picker.Item>
                        <Picker.Item label="60" value="60"></Picker.Item>
                        <Picker.Item label="30" value="30"></Picker.Item>
                    </Picker>
                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 0, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Body Type  </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="5" value="5"></Picker.Item>
                        <Picker.Item label="6" value="6"></Picker.Item>
                        <Picker.Item label="7" value="7"></Picker.Item>
                    </Picker>
                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 0, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Colour of the car   </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="red" value="red"></Picker.Item>
                        <Picker.Item label="blue" value="blue"></Picker.Item>
                        <Picker.Item label="black" value="black"></Picker.Item>
                    </Picker>
                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 0, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Price  </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View >
                <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 0, paddingTop: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Features  </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="Auto" value="Auto"></Picker.Item>
                        <Picker.Item label="reverse" value="reverse"></Picker.Item>
                        <Picker.Item label="air" value="air"></Picker.Item>
                    </Picker>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 30, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>
                        Sell your car within 24 Hours Useing quickSell  </Text>
                        <Switch
                            trackColor={{ false: "red", true: "green" }}
                            thumbColor={isEnabled1 ? "green": "red"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                </View>
            </View>
            <View>
                <Text style={[styles.dropSownText, { paddingTop: 10, }]}> Category  </Text>              
            </View>
            <View>
                    <Text style={[styles.dropSownText, { paddingLeft: 0, paddingTop: 20, borderTopWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}> Comment by Seller </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View >
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 30, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15, borderTopWidth: 1, borderTopLeftRadius: 20 }}>
                    1. Not Sure? Get Inspection By CarsBN </Text>
                    <Switch
                            trackColor={{ false: "red", true: "green" }}
                            thumbColor={isEnabled2 ? "green": "red"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
            </View>
            <Text style={{ paddingTop: 20, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>Upoad Images</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <View style={styles.box}>
                    <UploadImage />
                </View>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 15, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>
                    2. Professional Photos attracts more views  </Text>
                    <Switch
                            trackColor={{ false: "red", true: "green" }}
                            thumbColor={isEnabled3 ? "green": "red"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch3}
                            value={isEnabled3}
                        />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ paddingLeft: 22, color: colors.PrimaryBlue, fontSize: 15 }}>
                    Get proper photo with 360 angles ?  </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Third')}>
                <Text style={styles.btn}> Next </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        marginTop: 15
    },
    plusBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.PrimaryBlue,
        borderWidth: 1,
        height: 90,
        width: 110,
        borderRadius: 10,
        marginTop: 15

    },
    cancle: {
        position: 'absolute',
        right: -7,
        top: -7
    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 15
    },

    card: {
        shadowColor: colors.PrimaryBlue,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 15,
        marginRight: "40%",
        marginTop: 25,
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: colors.PrimaryBlue,
        marginTop: 15,
        fontWeight: "500"
    },
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    dropSownText: {
        color: colors.PrimaryBlue,
        fontSize: 18,
        paddingLeft: 10

    },
    picker: {
        width: 380,
        height: 45,
        borderBottomColor: colors.DarkGray3,
        borderBottomWidth: 1,
        color: '#000',
        borderColor: colors.PrimaryBlue,
        paddingRight: 20
    },
    indicatorContainer: {
        margin: 10,
        paddingTop: 16
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 20,
        backgroundColor: colors.white,
        borderBottomColor: colors.DarkGray3,
        height: 35,

    },
    headerWrapper: {
        borderBottomColor: colors.DarkGray3,
        borderBottomWidth: 2,
        fontSize: 15,
        alignSelf: 'auto',
        color: colors.PrimaryBlue,
        marginTop: 10
    },

    image: {
        height: 90,
        width: 110,


    },

    outerbox: {
        width: Dimensions.get('screen').width / 4 * 2,
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
        marginTop: 20,

    },
    flatList: {
        width: 40,
        height: 90,

    },
    icon: {
        left: 70,
        width: 20,
        height: 20,
        position: "absolute",
        zIndex: 1,
    }
})



export default CreatePostPrice;
