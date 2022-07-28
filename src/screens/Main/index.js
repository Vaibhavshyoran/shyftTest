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
                <Text>{item?.PersonalDetails?.FirstName}</Text>
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
    flex:1
},
formView:{
    margin:10,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:8,
    padding:10
}
})