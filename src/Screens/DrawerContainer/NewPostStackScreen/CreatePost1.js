import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { RadioButton, TextInput } from 'react-native-paper';
import colors from '../../../constants/Colors';
import images from '../../../constants/Images';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CreatePost1 = ({ navigation }) => {

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


    // const Detail = () => {

    //     return (
            
    //     )
    // }


    return (

        <SafeAreaView>
            <View style={{ marginTop: 20 }}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels}
                    stepCount="3" />
                <ImageBackground source={images.carImage} style={{ height: '70%', marginTop: 20, width: "100%" }}>
                <View style={[styles.card,]}>
                <View style={{ flexDirection: 'row', }}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        onPress={() => navigation.navigate('ForAuction')}
                        color="red"
                    /><Text style={{ color: '#00008b', fontSize: 20, paddingTop: 5, paddingRight: 10 }}> Retail</Text>
                    <RadioButton
                        value="Second"
                        status={checked === 'Second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Second')}
                        onPress={()=>navigation.navigate('CreatePostPrice')}
                        color="red"
                    /><Text style={{ color: '#00008b', fontSize: 20, paddingTop: 5, paddingRight: 10 }}> Sell</Text>
                    <RadioButton
                        value="Third"
                        status={checked === 'Third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Third')}
                        onPress={() => navigation.navigate('CreatePostAuction')}
                        color="red"
                    /><Text style={{ color: '#00008b', paddingTop: 3, fontSize: 20 }}> Auction</Text>
                </View>
                <View>
                    <Text style={{ color: "#213884", paddingTop: 10, fontSize: 20 }}> Registration Number </Text>
                    <TextInput
                        placeholder="Number"
                        placeholderTextColor={Colors.PrimaryBlue}
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    
            
                   
                        <Text style={{ color: "#213884", fontSize: 20, paddingTop: 10, paddingBottom: 5 }}> Current Message </Text>
                        <TextInput
                            placeholder="Number"
                            placeholderTextColor={Colors.PrimaryBlue}
                            style={[styles.input,{}]}
                            autoCapitalize="none"
                           // style={{ backgroundColor: "pink" }}
                        />
                        <TouchableOpacity >
                            <Text style={styles.btn}> Next </Text>
                        </TouchableOpacity>
                 
                    
                </View>               
         </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#3D3D3D',
        backgroundColor: 'white',
        elevation: 20,
        padding: 10,
        marginLeft: 20,
        marginRight: 25,
        borderRadius: 10,
        marginTop: "43%"
    },
    input: {
        backgroundColor: '#fff',
        fontSize: 15,
        borderBottomWidth:2

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
});

export default CreatePost1;

