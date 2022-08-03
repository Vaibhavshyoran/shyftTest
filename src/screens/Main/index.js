import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react";
import Header from "../../components/Header";
import { useStore } from "../../store";
const currentLoanList = [
    {
        id: 1,
        totalAmount: '$10000',
        emiAmount:'$110',
        totalEmi: 10,
        pendingEmi: 6,
        rateOfInterest: '10%',
        bankName: 'HDFC',
        startDate: '30-1-2022',
        closureDate: '30-10-2022'
    },
    {
        id: 2,
        totalAmount: '$5000',
        emiAmount:'$105',
        totalEmi: 6,
        pendingEmi: 2,
        rateOfInterest: '10%',
        bankName: 'ICICI',
        startDate: '10-2-2022',
        closureDate: '10-12-2020'
    }
]

const Main = observer(() => {
    const { loan } = useStore();

   
    const _renderListItem = ({ item }) => {
        return (
            <View style={styles.formView}>
                <Text style={styles.title}>First Name: {item?.PersonalDetails?.FirstName}</Text>
                <Text style={styles.title}>Last Name: {item?.PersonalDetails?.LastName}</Text>
                <Text style={styles.title}>Email: {item?.PersonalDetails?.EmailAddress}</Text>
                <Text style={styles.title}>DOB: {item?.PersonalDetails?.DateOfBirth}</Text>
            </View>
        )
    }

    const _noLoanApplication=()=> {
        return <Text style={styles.noApp}>You don't have any loan applications</Text>
    }
    const _renderMyLoanApplication = () => {
        return (
            <>
                <Text style={styles.sectionLabel}>My Loan Applications</Text>
                <FlatList
                    data={loan?.loansList}
                    renderItem={_renderListItem}
                    ListEmptyComponent={_noLoanApplication}
                />
            </>
        )
    }

    const _renderCurrentList = ({ item }) => {
        return (
            <View style={styles.formView}>
                <Text style={styles.bankName}>Bank Name: {item?.bankName}</Text>
                <Text style={styles.title}>Emi: {item?.pendingEmi}/{item?.totalEmi}</Text>
                <Text style={styles.title}>Date of End: {item?.closureDate}</Text>
                <Text style={styles.title}>Rate Of Interest: {item?.rateOfInterest}</Text>
                <Text style={styles.title}>Emi Amount: {item?.emiAmount}</Text>
            </View>
        )
    }

    const _renderCurrentLoan = () => {
        return (
            <>
                <Text style={styles.sectionLabel}>Current Loan</Text>
                <FlatList
                    keyExtractor={item => item?.id}
                    data={currentLoanList}
                    renderItem={_renderCurrentList}
                />
            </>
        )
    }


    return (
        <View style={styles.mainContainer}>
            <Header title="Main" />
            <View style={styles.container}>
                {_renderCurrentLoan()}
                {_renderMyLoanApplication()}
            </View>
        </View>
    )
})

export default Main

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        padding: 10
    },
    formView: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'teal',
        borderRadius: 8,
        padding: 10,

    },
    title: {
        fontSize: 13,
        color: '#2C3539'
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: '800',
        color: '#659EC7',
        marginLeft: 10
    },
    bankName: {
        fontSize: 16,
        color: '#033E3E',
        fontWeight: '600'
    },
    noApp:{
        alignSelf:'center',
        textAlign:'center',
        marginTop:10
    }
})