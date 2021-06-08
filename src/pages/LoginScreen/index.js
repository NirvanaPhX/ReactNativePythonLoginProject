import React, {useState} from 'react'
import {View, Text, StyleSheet, } from 'react-native'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* Email Area */}
            <Label >Email Address</Label>
            <Input
                autoCorrect={false}
                autoFocus={true}
                autoCompleteType='email'
                placeholder='Your Email Address'
                keyboardType='email-address'
                onChangeText={email => setEmail(email)}
                text={email}
            />

            {/* Password Area */}
            <Label>Password</Label>
            <Input
                autoCorrect={false}
                autoFocus={false}
                autoCompleteType='password'
                placeholder='Your Password'
                keyboardType='default'
                onChangeText={password => setPassword(password)}
                text={password}
            />
            
            {/* Button Area */}
            <View style={styles.buttonarea}>
                <Button> Log In </Button>
                <Button> SignUp </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
    },
    buttonarea: {
        marginTop: 30,
    }
})

export default LoginScreen;