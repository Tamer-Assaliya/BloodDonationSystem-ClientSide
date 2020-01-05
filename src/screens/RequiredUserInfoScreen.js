import React, {useContext} from "react";

import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import UserInfo from "../components/UserInfoForm";

const RequiredUserInfoScreen = () => {
    const { state, signup, signout, LoginWithGoogle, clearErrorMessage } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>Required Information To complete Registration  </Text>
            <Spacer>
                <UserInfo/>
            </Spacer>
        </SafeAreaView>
    );
};

RequiredUserInfoScreen.navigationOptions = {
    title: 'Complete Registration',
    tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({});

export default RequiredUserInfoScreen;
