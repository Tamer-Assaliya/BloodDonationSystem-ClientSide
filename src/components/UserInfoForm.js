import React, {useState} from 'react';
import { View,TouchableOpacity, StyleSheet,Platform, Picker } from 'react-native';
import Spacer from './Spacer';
import { Text, Button, Input } from 'react-native-elements';
import { Foundation,FontAwesome,Entypo,MaterialIcons  } from '@expo/vector-icons';
import CountryPicker from 'react-native-country-picker-modal';
import RadioGroup from 'react-native-radio-button-group';
import {SafeAreaView, withNavigation} from 'react-navigation';
import DatePicker from "./DatePicker";
import CountryPickerComponent from "./CountryPickerComponent";

const UserInfoForm = ({ navigation,headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [ReqInfo,setReqInfo]=useState({email:'',password:'',firstname:'',lastname:'',gender:'Male',
        bloodtype:'A+',phonenumber:'',country:'',city:''});
    const [BirthDate,setBirthDate]=useState(new Date());
    const [AddInfo,setAddInfo]=useState({street:'',buildingnumber:'',zipcode:'',ssn:''});

    const [SubmitTried,setSubmitTried]=useState(false);

    const [countryCallingCode, setCountryCallingCode] = useState('+970#########');

    var gender =Array.of(
        {id: 0, label: 'Male' },
        {id: 1, label: 'Female' },);

    var bloodType = Array.of(
        {id: 0, label: 'A+' },
        {id: 1, label: 'B+' },
        {id: 2, label: 'AB+' },
        {id: 3, label: 'O+' },
        {id: 4, label: 'A-' },
        {id: 5, label: 'B-' },
        {id: 6, label: 'AB-' },
        {id: 7, label: 'O-' },);

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer>

                <Input leftIcon={<Foundation name="mail" size={24} color='gray'/>} label="Email" value={ReqInfo.email}
                       onChangeText={(email)=>setReqInfo({...ReqInfo,email:email})} placeholder='email@address.com'
                       errorStyle={styles.errorStyle} errorMessage={(!ReqInfo.email&&SubmitTried)?"Required Field":null} autoCapitalize="none"
                       autoCorrect={false} leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                />

                <Input leftIcon={<FontAwesome name="lock" size={24} color='gray'/>} label="Password" value={ReqInfo.password}
                       onChangeText={(pass)=>setReqInfo({...ReqInfo,password:pass})} placeholder='Password' errorStyle={styles.errorStyle}
                       errorMessage={(!ReqInfo.password&&SubmitTried)?"Required Field":null} autoCapitalize="none" autoCorrect={false}
                       leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                        secureTextEntry
                />

                <View style={{ flexDirection:'row'}}>
                    <View  style={{flex:1}}>
                        <Input  value={ReqInfo.firstname}
                               onChangeText={(firstname)=>setReqInfo({...ReqInfo,firstname:firstname})} placeholder='First_Name'
                               errorStyle={styles.errorStyle} errorMessage={(!ReqInfo.firstname&&SubmitTried)?"Required Field":null}
                               autoCorrect={false} leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                               style={{flex:1,justifyContent: 'flex-start'}}
                        />
                    </View>
                    <View style={{flex:1}}>
                        <Input  value={ReqInfo.lastname}
                               onChangeText={(lastname)=>setReqInfo({...ReqInfo,lastname:lastname})} placeholder="Last_Name"
                               errorStyle={styles.errorStyle} errorMessage={(!ReqInfo.lastname&&SubmitTried)?"Required Field":null}
                               autoCorrect={false} leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                               style={{flex:1,justifyContent: 'flex-end'}}
                        />
                    </View>
                </View>

                <Input leftIcon={<MaterialIcons name="person" size={24} color='gray'/>} label="SSN" value={AddInfo.ssn}
                       onChangeText={(ssn)=>setAddInfo({...AddInfo,ssn:ssn})} placeholder='Optional'
                       errorStyle={styles.errorStyle} autoCapitalize="none"
                       autoCorrect={false} leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                />

                <View style={styles.ViewElement}>
                    <Text style={styles.LabelText}>Gender  </Text>
                    <RadioGroup horizontal
                                options={gender}
                                activeButtonId={0}
                                onChange={(option) => setReqInfo({...ReqInfo,gender:option.label})}
                                style={styles.LabelText}
                    />
                </View>

                <DatePicker BirthDate={BirthDate} setBirthDate={setBirthDate}/>

                <View style={styles.ViewElement}>
                    <Text style={styles.LabelText}>Blood Type  </Text>
                    <RadioGroup horizontal
                                activeButtonId={0}
                                options={bloodType}
                                onChange={(option) => setReqInfo({...ReqInfo,bloodtype:option.label})}
                    />
                </View>

                <CountryPickerComponent ReqInfo={ReqInfo} setReqInfo={setReqInfo}
                                        countryCallingCode={countryCallingCode} setCountryCallingCode={setCountryCallingCode}/>

                <Input label="Phone Number" placeholder={countryCallingCode}   autoCapitalize="none" autoCorrect={false}
                       leftIcon={<FontAwesome name="mobile-phone" size={24} color='gray'/>} value={ReqInfo.phonenumber}
                       onChangeText={(phonenumber)=>setReqInfo({...ReqInfo,phonenumber:phonenumber})}
                       errorStyle={styles.errorStyle} errorMessage={(!ReqInfo.phonenumber&&SubmitTried)?"Required Field":null}
                       leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                />

                <Input label="City" placeholder='City'  autoCorrect={false}
                       leftIcon={<MaterialIcons name="location-city" size={24} color='gray'/>} value={ReqInfo.city}
                       onChangeText={(city)=>setReqInfo({...ReqInfo,city:city})}
                       errorStyle={styles.errorStyle} errorMessage={(!ReqInfo.city&&SubmitTried)?"Required Field":null}
                       leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                />

                <Input label="Zip Code" placeholder='Optional'  autoCapitalize="none" autoCorrect={false}
                       leftIcon={<MaterialIcons name="location-city" size={24} color='gray'/>} value={AddInfo.zipcode}
                       onChangeText={(zipcode)=>setAddInfo({...AddInfo,zipcode:zipcode})}
                       errorStyle={styles.errorStyle}
                       leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                />

                <Input label="Street" placeholder='Optional'  autoCapitalize="none" autoCorrect={false}
                       leftIcon={<FontAwesome name="home" size={24} color='gray'/>} value={AddInfo.street}
                       onChangeText={(street)=>setAddInfo({...AddInfo,street:street})}
                       errorStyle={styles.errorStyle}
                       leftIconContainerStyle={styles.leftIconContainerStyle} containerStyle={styles.containerStyle}
                />

            </Spacer>

            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() =>{
                       // navigation.goBack();
                        let email=ReqInfo.email,password=ReqInfo.password,firstname=ReqInfo.firstname,lastname=ReqInfo.lastname,
                        ssn=AddInfo.ssn,gender=ReqInfo.gender,birthdate=BirthDate,bloodtype=ReqInfo.bloodtype,country=ReqInfo.country,
                        phonenumber=ReqInfo.phonenumber,city=ReqInfo.city, zipcode=AddInfo.zipcode,street=AddInfo.street;
                        onSubmit({ email, password, firstname, lastname, ssn, gender, birthdate,
                        bloodtype,country, phonenumber, city, zipcode, street});
                        setSubmitTried(true);
                    } }
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    },
    leftIconContainerStyle:{
        marginLeft:0,
        marginRight:5
    },
    errorStyle:{
        color: 'red'
    },
    containerStyle:{
        marginBottom:20
    },
    LabelText:{
        color: 'gray',
        fontFamily: (Platform.OS==='ios')?'Cochin':'serif',
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:10

    },
    ViewElement:{
        marginHorizontal:10,
        marginBottom:10
    },
    instructions: {
        fontSize: 12,
        textAlign: 'center',
        color: '#888',
        marginBottom: 5,
        alignSelf:'center'
    },
});

export default withNavigation(UserInfoForm);