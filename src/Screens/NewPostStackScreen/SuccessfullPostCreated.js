import React, { useState } from 'react'
import { Switch, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Slider } from 'react-native-elements';
import StepIndicator from 'react-native-step-indicator';
import colors from '../../constants/Colors';
import images from '../../constants/Images';

const SuccessfullPostCreated = () => {
    // const [enable, setEnable] = useState(true);

    const labels = []
    const customStyles = {
        separatorStrokeWidth: 2,
        currentStepIndicatorSize: 30,
        stepStrokeCurrentColor: 'red',
        stepStrokeWidth: 3,
        stepIndicatorCurrentColor: 'red',
        stepStrokeFinishedColor: 'red',
        stepStrokeUnFinishedColor: 'red',
        separatorUnFinishedColor: 'red',
        stepIndicatorUnFinishedColor: 'red',
    }

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.union} style={styles.img}></Image>
                <Text style={styles.text}>Create post</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels}
                    stepCount='3'
                />
            </View>
            <Image source={images.right} style={styles.img2} />
            <Text style={{ textAlign: "center", color: "#213884", fontSize: 20, fontWeight: "bold" }}>Thank you !</Text>
            <Text style={{ textAlign: "center", color: "#213884", fontSize: 20, marginTop: 5, marginBottom: 5 }}> Our Team is having a look and your post
                will be approved soon
            </Text>
            <Text style={{ textAlign: "center", color: "#213884", fontSize: 18, marginTop: 5, marginBottom: 5 }}>Want to reach more people ?</Text>
            <Text style={{ textAlign: 'auto', color: "#213884", marginLeft: 10, fontSize: 18, }}>
                Simply boost your post to appear first on <Switch /> our pages
            </Text>
            <View style={{ margin: 50, }}>
                <TouchableOpacity>
                    <Text style={styles.btn}> Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,
        fontWeight: "500"
    },
    Slider: {
        width: "30%",
        marginLeft: 30,
        marginTop: 30,
    },
    img2: {
        marginTop: 25,
        alignSelf: 'center',
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
        fontSize: 20
    },
})


export default SuccessfullPostCreated;
