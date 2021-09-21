import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../../constants/Colors'

export default function Third() {
    return (
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:25,color:colors.PrimaryBlue}}> third screen </Text>
        </View>
    )
}
