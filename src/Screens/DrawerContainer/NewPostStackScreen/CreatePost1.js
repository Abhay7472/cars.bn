import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { RadioButton, TextInput } from 'react-native-paper';
import colors from '../../../constants/Colors';
import images from '../../../constants/Images';


const CreatePost1 = ({ navigation: { goBack } }) => {
    // const [enable, setEnable] = useState(true);
    const [checked, setChecked] = React.useState('first');


    const labels = []
    const customStyles = {
        separatorStrokeWidth: 2,
        currentStepIndicatorSize: 30,
        stepStrokeCurrentColor: 'red',
        stepStrokeWidth: 3,
        stepIndicatorCurrentColor: 'red',
        stepStrokeFinishedColor: 'red',
        stepStrokeUnFinishedColor: 'grey',
        separatorUnFinishedColor: 'red',
        separatorFinishedColor: 'grey',
        stepIndicatorUnFinishedColor: 'white',
    }


    const Detail = () => {

        return (
            <SafeAreaView onPress={() => { }} style={[styles.card,]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            // onPress={()=>navigation.navigate('RentalCar')}
                            color="red"
                        /><Text style={{ color: '#00008b', fontSize: 20 }}> Retail</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <RadioButton
                            value="Second"
                            status={checked === 'Second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Second')}
                            color="red"
                        /><Text style={{ color: '#00008b', fontSize: 20 }}> Sell</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
                        <RadioButton
                            value="Third"
                            status={checked === 'Third' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Third')}
                            color="red"
                        /><Text style={{ color: '#00008b', fontSize: 20 }}> Auction</Text>
                    </View>
                </View>
                <View style={styles.headerWrapper}>
                    <Text style={{ color: "#213884", fontSize: 20 }}> Registration Number </Text>
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="#666"
                        style={styles.input}
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.headerWrapper}>
                    <Text style={{ color: "#213884", fontSize: 20 }}> Current Message </Text>
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="#666"
                        style={styles.input}
                        autoCapitalize="none"
                    // onChangeText={(val) => handlepasswordCheckChange(val)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.btn}> Next </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }


    return (
        <View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => goBack('Drawer')}>
                    <Image source={images.union} style={styles.img} ></Image>
                </TouchableOpacity>
                <Text style={styles.text}>Create post</Text>
            </View>
            <View style={{ marginTop: 30, marginBottom: 20 }}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels}
                    stepCount='3' />
            </View>
            <View>
                <ImageBackground source={images.carImage} style={{ height: '70%', marginTop: 20, width: "100%" }}>
                    <Detail />
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,
        fontWeight: "500"
    },
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    card: {
        shadowColor: '#3D3D3D',
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginTop: 180,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,

    },
    cardText: {
        color: "#213884",
        margin: 10,
        fontSize: 20,

    },
    input: {
        backgroundColor: '#fff',
        fontSize: 15,
        //paddingTop: -20
    },
    headerWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 15,
        alignSelf: 'auto',
        color: colors.PrimaryBlue,
        paddingTop: 10
    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    },



})
export default CreatePost1;