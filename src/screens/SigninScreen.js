import React, {useContext, useState} from 'react';
import {View, StyleSheet, Button, StatusBar} from 'react-native';
import {NavigationEvents, SafeAreaView} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import Spacer from "../components/Spacer";
import {SocialIcon} from "react-native-elements";

const SigninScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage, LoginWithGoogle } = useContext(Context);
    return (
        <View style={styles.container}>
            <SafeAreaView forceInset={{top:'always'}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />

                <NavLink
                text="Dont have an account? Sign up instead"
                routeName="Signup"
            />
            <Spacer>
                <SocialIcon
                    title='Sign In With google'
                    button
                    onPress={LoginWithGoogle}
                    type='google'
                />
            </Spacer>
                <Button title={"go to test screen"} onPress={()=>navigation.navigate('Test')}>   </Button>
            </SafeAreaView>
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 170
    }
});

export default SigninScreen;
