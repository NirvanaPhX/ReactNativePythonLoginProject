import React, {useState} from 'react'
import {View, Text, StyleSheet, } from 'react-native'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        const validEmail = validateEmail(email)
        if (!validEmail) 
        console.log(email, password, validEmail)
    }

    // Validate email use regular expression
    const validateEmail = (email) => {
        let emailre = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailre.test(email.trim())
    }

    // Validate password use regular expression
    const validatePassword = (passowrd) => {
        return password
    }

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
            <View>
                {validateEmail(email) ? null : 
                <Text style={styles.errormsg}>
                    Invalid Email
                </Text> }
            </View>

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
            <View>
                {validatePassword(password) ? null : 
                <Text style={styles.errormsg}>
                    Invalid Password
                </Text> }
            </View>
            
            {/* Button Area */}
            <View style={styles.buttonarea}>
                <Button
                    onPress={onLogin}
                    > Log In 
                </Button>
                <Button
                    title="Sign up page"
                    onPress={() =>
                        navigation.navigate('SignUp')}> SignUp </Button>
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
    },
    errormsg: {
        color: 'red',
        paddingHorizontal: 6,
    },
})

export default LoginScreen;