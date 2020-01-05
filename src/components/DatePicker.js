import {Platform, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-elements";
import {Entypo, FontAwesome} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Spacer from "./Spacer";
import React, {useState} from "react";

const DatePicker=({BirthDate,setBirthDate})=>{
    const [datePickerShown, setDatePickerShown] = useState(false);

return(
    <View>
        <Text style={styles.dateText}>
            <FontAwesome name='calendar' size={18} color='gray'/> Birth Date  </Text>
        <TouchableOpacity onPress={()=>{
            if(datePickerShown) setDatePickerShown(false);
            else setDatePickerShown(true);
        }} style={styles.dateContainer} >
            <Text style={{fontFamily:(Platform.OS==='ios')?'Cochin':'serif', fontSize: 20, fontWeight:'bold',color:'#8533ff'}}>
                {BirthDate.toDateString().slice(4)}</Text>
            {Platform.OS === 'ios'?<View style={{alignSelf:'center',right:5,position:'absolute'}}>
                {datePickerShown?<Entypo name="arrow-bold-up" size={20} color='#3d0099'/>:
                    <Entypo name="arrow-bold-down" size={20} color='#3d0099'/>}
            </View>:null}
        </TouchableOpacity>
    {datePickerShown?<DateTimePicker value={BirthDate}
                                     onChange={(event,date)=>{
                                         if(Platform.OS !== 'ios')
                                             setDatePickerShown(false);
                                         setBirthDate(date || BirthDate);
                                     }}
                                     mode='date'
                                     display="spinner"
    />:null}
    </View>
);
};

const styles = StyleSheet.create({
    dateText: {
        flex: 1,
        color: 'gray',
        fontFamily: (Platform.OS === 'ios') ? 'Cochin' : 'serif',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10
    },
    dateContainer: {

        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 10
    },
});

export default DatePicker;
