import React, {useContext, useState} from 'react';
import { View, StyleSheet, ScrollView,StatusBar} from 'react-native';
import {NavigationEvents, SafeAreaView} from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Text, Button, Input } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
import Spacer from "../components/Spacer";
import UserInfoForm from "../components/UserInfoForm";




const SignupScreen = ({ navigation }) => {
    const { state, signup, LoginWithGoogle, clearErrorMessage } = useContext(AuthContext);
    const [GoogleAuthResult,setGoogleAuthResult]=useState(null);
    //console.log(GoogleAuthResult);


    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
          <ScrollView scrollIndicatorInsets={{ right: 1 }}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <UserInfoForm
                headerText="Sign Up"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
            <Spacer>
                <SocialIcon
                    title='Sign In With google'
                    button
                    onPress={LoginWithGoogle}
                    type='google'
                />
            </Spacer>
           </ScrollView>
        </SafeAreaView>
    );
};
/* <View>

     {GoogleAuthResult?
         <Text> you are signed in with google email {GoogleAuthResult.user.email}
         as {GoogleAuthResult.user.name},
             id: {GoogleAuthResult.user.id}
             token: {GoogleAuthResult.accessToken}
             , </Text> :
         <Text> you are not signed in with google </Text>
     }
 </View>*/

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    }
});

export default SignupScreen;
