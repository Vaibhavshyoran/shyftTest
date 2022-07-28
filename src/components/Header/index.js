import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header =(props)=> {
    return(
        <View style={styles.headerRow}>
            <Text style={styles.title}>{props?.title}</Text>
        </View>
    )
}

export default Header

const styles= StyleSheet.create({
    headerRow:{
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:10,
        backgroundColor:'lightgrey'
    },
    title:{
        textAlign:'center',
        alignSelf:'center',
        color:'maroon',
        fontSize:16,
        fontWeight:"800"
    }
})