import React from 'react'
import {View, StyleSheet } from 'react-native'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Label>Username: </Label>
            <Input
                autoCorrect={false}
                autoFocus={true}
                placeholder='Enter your username'
                keyboardType='default'
            />

            <Label>Email Address: </Label>
            <Input
                autoCorrect={false}
                autoFocus={true}
                autoCompleteType='email'
                placeholder='Enter your email address'
                keyboardType='email-address'
            />

            <Label>Password: </Label>
            <Input
                autoCorrect={false}
                autoFocus={true}
                placeholder='Enter you password'
                keyboardType='default'
            />

            <Label>Password(again): </Label>
            <Input
                autoCorrect={false}
                autoFocus={true}
                placeholder='Enter you password again'
                keyboardType='default'
            />

            <View style={styles.buttonarea}>
                <Button>
                    Sign Up
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 20,
    },
    buttonarea: {
        marginTop: 80,
    }
})

export default SignUpScreen;