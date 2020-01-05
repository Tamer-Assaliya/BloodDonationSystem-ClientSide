import {Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-elements";
import {FontAwesome} from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import Spacer from "./Spacer";
import React, {useState} from "react";


const CountryPickerComponent=  ({setReqInfo,ReqInfo,countryCallingCode,setCountryCallingCode})=>{

    const [countryCode, setCountryCode] = useState('PS');

    return(
<View style={styles.countryViewContainer}>
    <View style={styles.countryTextContainer}>
        <Text style={styles.LabelText}>
            <FontAwesome name='globe' size={18}/> Country </Text>
    </View>
    <TouchableOpacity style={styles.countryContainer}>
        <CountryPicker
            {...{
                countryCode: countryCode,
                withFilter: true,
                withFlag: true,
                withCountryNameButton: true,
                withAlphaFilter: true,
                withCallingCode: true,
                withEmoji: true,
                withFlagButton: true,
                onSelect: (country) => {
                    setCountryCallingCode(`+${country.callingCode[0]}`);
                    setCountryCode(country.cca2)
                    setReqInfo({...ReqInfo, country: country.name})
                },
                containerButtonStyle:
                    {alignSelf: 'center'}
            }}
        />
    </TouchableOpacity>
</View>
);

};

const styles = StyleSheet.create({
    countryViewContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        marginBottom:20
    },
    countryContainer:{
        borderColor:'gray',
        borderRadius:5,
        borderWidth:1,
        flex:1,
    },
    countryTextContainer:{
        alignSelf:'center'
    },
    LabelText:{
        color: 'gray',
        fontFamily: (Platform.OS==='ios')?'Cochin':'serif',
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:10
    },
});

export default CountryPickerComponent;