import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native'
import { TextInput } from "react-native-paper";

const InputField = (props) => {
    const [value, setValue] = useState(props?.value || '')
    const updateValue = (value) => {
        setValue(value);
        props?.onChangeHandler(props?.id,value);
    }
    return (
        <TextInput
            style={style.textField}
            onChangeText={updateValue}
            value={value}
            {...props}
        />
    )
}

export default InputField;

const style = StyleSheet.create({
    textField: {
        flex: 0.48,
        height: 60,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#ffffff',
        borderRadius: 6
    }
})