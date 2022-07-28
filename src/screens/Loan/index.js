import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ToastAndroid, FlatList } from "react-native";
import { observer } from "mobx-react";
import { Button } from "react-native-paper";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import RadioField from "../../components/RadioField";
import { useStore } from "../../store";
import isValidate from "../../utils/Validation";
const validateFields = (fieldObj) => {
    for (const key in fieldObj) {
        if((key === 'ResidentialProof') || (key === 'ResidentialProofID')){
            if(fieldObj['ResidentialProofID'] === 0){
                return {
                    isValid: false,
                    msg: 'Please select a Id doc'
                }
            }
        }else{
        const isValid = isValidate(key, fieldObj[key]);
        if (isValid?.length) {
            return {
                isValid: false,
                msg: isValid
            }
        }
    }
    }
    return {
        isValid: true,
        msg: null
    }
}

const personalDetailObj = {
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    PhoneNumber: '',
    DateOfBirth: 0
}
const addressObj = {
    StreetAddress: '',
    ApartmentNumber: 0,
    ZipCode: 0,
    State: ''

}
const idObj = {
    ResidentialProof: '',
    ResidentialProofID: 0,
    IdNumber: 0,
    IdState: ''
}
const idArray = [
    { label: 'Driver licence', value: 1 },
    { label: 'Non-Driver/State ID', value: 2 },
    { label: 'US Military', value: 3 },
    { label: 'US Passport', value: 4 }
]
const validationObj = {
    isValid: true,
    msg: 'Please fill all fields'
}
const Loan = observer(({ navigation }) => {
    const { loan } = useStore();
    const [personalDetail, setPersonalDetail] = useState(personalDetailObj)
    const [addressDetail, setAddressDetail] = useState(addressObj)
    const [idDetail, setIdDetail] = useState(idObj);
    const onChangeProfileHandler = (id, value) => {
        let modObj = { ...personalDetail };
        modObj[id] = value
        setPersonalDetail(modObj)
    }
    const onChangeAddressHandler = (id, value) => {
        let modObj = { ...addressDetail };
        modObj[id] = value
        setAddressDetail(modObj)
    }
    const onChangeIdHandler = (id, value) => {
        let modObj = { ...idDetail };
        modObj[id] = value
        setIdDetail(modObj)
    }

    const onSubmit = async () => {
        let checkPersonDetail = validateFields(personalDetail) ;
        let checkAddressDetail= validateFields(addressDetail);
        let checkIdDetail= validateFields(idDetail);
        if (checkPersonDetail?.isValid && checkAddressDetail?.isValid && checkIdDetail?.isValid) {
            const data = {
                PersonalDetails: {
                    FirstName: personalDetail.FirstName,
                    LastName: personalDetail.LastName,
                    EmailAddress: personalDetail.EmailAddress,
                    PhoneNumber: personalDetail.PhoneNumber,
                    DateOfBirth: personalDetail.DateOfBirth,
                },
                Address: {
                    StreetAddress: addressDetail.StreetAddress,
                    ApartmentNumber: addressDetail.ApartmentNumber,
                    ZipCode: addressDetail.ZipCode,
                    State: addressDetail.State,
                },
                Identification: {
                    ResidentialProof: idDetail.ResidentialProof,
                    ResidentialProofID: idDetail.ResidentialProofID,
                    IdNumber: idDetail.IdNumber,
                    IdState: idDetail.IdState,
                }
            }

            const res = loan.submitData(data);
            if (res) {
                ToastAndroid.showWithGravity(
                    'Successfully Submit',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
                navigation.navigate('Main');
            }
        } else {
            ToastAndroid.showWithGravity(
                checkPersonDetail?.msg || checkAddressDetail?.msg || checkIdDetail?.msg,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }
    const _renderPersonalDetail = () => {
        return (<View style={styles.formView}>
            <Text style={styles.formtitle}>
                Personal Details
            </Text>
            <View style={styles.fieldRow}>
                <InputField
                    id="FirstName"
                    label="First Name"
                    onChangeHandler={onChangeProfileHandler} />
                <InputField
                    id="LastName"
                    label="Last Name"
                    onChangeHandler={onChangeProfileHandler} />
            </View>
            <InputField
                id="EmailAddress"
                label="Email"
                keyboardType="email-address"
                onChangeHandler={onChangeProfileHandler} />
            <View style={styles.fieldRow}>
                <InputField
                    id="DateOfBirth"
                    label="Date Of Birth"
                    onChangeHandler={onChangeProfileHandler} />
                <InputField
                    id="PhoneNumber"
                    label="Phone Number"
                    keyboardType="phone-pad"
                    maxLength={10}
                    onChangeHandler={onChangeProfileHandler} />
            </View>
        </View>)
    }
    const _renderAddresDetail = () => {
        return (<View style={styles.formView}>
            <Text style={styles.formtitle}>
                Address
            </Text>
            <InputField
                id="StreetAddress"
                label="Street Address"
                onChangeHandler={onChangeAddressHandler} />
            <View style={styles.fieldRow}>
                <InputField
                    id="ApartmentNumber"
                    label="Apartment Address"
                    onChangeHandler={onChangeAddressHandler} />
                <InputField
                    id="ZipCode"
                    label="Zipcode"
                    keyboardType="numeric"
                    maxLength={6}
                    onChangeHandler={onChangeAddressHandler} />
            </View>
            <InputField
                id="State"
                label="State"
                onChangeHandler={onChangeAddressHandler} />
        </View>)
    }

    const onSelectId = (item) => {
        let obj = { ...idDetail }
        obj.ResidentialProofID = item.value;
        obj.ResidentialProof = item.label;
        setIdDetail(obj);
    }

    const _renderIdList = ({ item }) => {
        const onSelect = () => {
            onSelectId(item);
        }
        const checked = item?.value === idDetail?.ResidentialProofID ? "checked" : "unchecked";
        return <RadioField label={item.label} status={checked} onSelect={onSelect} />
    }
    const _renderIdentificationDetail = () => {
        return (<View style={styles.formView}>
            <Text style={styles.formtitle}>
                Identification
            </Text>
            <FlatList
                data={idArray}
                numColumns={2}
                renderItem={_renderIdList}
                columnWrapperStyle={styles.wrapper}
            />
            <View style={styles.fieldRow}>
                <InputField id="IdNumber" label="ID Number" onChangeHandler={onChangeIdHandler} />
                <InputField id="IdState" label="ID State" onChangeHandler={onChangeIdHandler} />
            </View>
        </View>)
    }
    return (
        <View style={styles.mainContainer}>
            <Header title="Loan" />
            <ScrollView style={styles.container}>
                <Text style={styles.maintitle}>
                    Customer Information
                </Text>
                {_renderPersonalDetail()}
                {_renderAddresDetail()}
                {_renderIdentificationDetail()}
                <Button
                    mode="contained"
                    style={styles.btn}
                    onPress={onSubmit}>
                    Submit
                </Button>
            </ScrollView>
        </View>
    )
})

export default Loan

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
        padding: 10
    },
    maintitle: {
        fontSize: 26,
        color:'black',
        fontWeight:'700'
    },
    formtitle: {
        fontSize: 20,
        color:'black',
        fontWeight:'700'
    },
    formView: {
        paddingVertical: 10
    },
    wrapper: {
        justifyContent: 'space-between',
        paddingVertical: 8
    },
    fieldRow: {
        marginVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btn: {
        marginBottom: 30
    }
})