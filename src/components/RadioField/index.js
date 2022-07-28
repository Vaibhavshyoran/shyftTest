import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RadioButton } from "react-native-paper";

const RadioField = (props) => {
    return (
        <TouchableOpacity style={style.mainContainer} onPress={props?.onSelect}>
            <RadioButton
                style={style.textField}
                {...props}
            />
            <Text style={style.label}>{props?.label}</Text>
        </TouchableOpacity>
    )
}

export default RadioField;

const style = StyleSheet.create({
    mainContainer: {
        flex:0.48,
        paddingVertical:10,
        flexDirection: 'row',
        borderWidth:1,
        borderColor:'grey',
        backgroundColor:'#ffffff',
        borderRadius:6
    },
    textField: {
        // flex: 0.48,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#ffffff',
        borderRadius: 6
    },
    label:{
        textAlign:'center',
        alignSelf:'center'
    }
})