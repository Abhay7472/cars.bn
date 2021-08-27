import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import images from '../../constants/Images';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => {
            this.props.navigation.navigate("HomePage");
        }, 3000);
    }
    render() {
        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="dark-content" />
                <ImageBackground source={images.logo}
                    style={{ width: "100%", height: "100%", flex: 1 }} />

            </View>
        );
    };
}


// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },

});