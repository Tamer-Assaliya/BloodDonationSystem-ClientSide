import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import Form4u from 'react-native-form4u';
import fields from '../components/SignUpTest/SignUpFields';
import validate from '../components/SignUpTest/SignUpFormValidationRules';

const Test = () => {

    const handleSubmit = (state) => {
        const {
            firstName, lastName, email, subject, password,
        } = state;

        Alert.alert(
            'Your info',
            `First Name: ${firstName.value}\n Last Name: ${lastName.value}\n Email: ${
                email.value
            }\n Subject: ${subject.value} \n Password: ${password.value}`,
        );
    };


    return (
        <Form4u
            formFields={fields}
            handleSubmit={handleSubmit}
            validation={validate}
            submitOnDirty
        />
    );
};

export default Test;