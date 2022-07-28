import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react";
import Header from "../../components/Header";
import { useStore } from "../../store";


const Main = observer(() => {
    const {loan}= useStore();
    const _renderListItem=({item})=> {
        return(
            <View style={styles.formView}>
                <Text style={styles.title}>First Name: {item?.PersonalDetails?.FirstName}</Text>
                <Text style={styles.title}>Last Name: {item?.PersonalDetails?.LastName}</Text>
                <Text style={styles.title}>Email: {item?.PersonalDetails?.EmailAddress}</Text>
                <Text style={styles.title}>DOB: {item?.PersonalDetails?.DateOfBirth}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header title="Main" />
            <FlatList
            data={loan?.loansList}
            renderItem={_renderListItem}
            />
        </View>
    )
})

export default Main

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#ffffff'
},
formView:{
    margin:10,
    borderWidth:1,
    borderColor:'orange',
    borderRadius:8,
    padding:10,
    
},
title:{
    fontSize:13,
    color: 'grey'
}
})