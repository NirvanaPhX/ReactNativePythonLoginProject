import React, {useState} from 'react'
import {View, Text, StyleSheet, Alert } from 'react-native'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import {reqSignUp} from '../../api/'

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    // Validate email use regular expression
    const validEmail = (email) => {
        let emailre = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailre.test(email.trim())
    }

    // Validate password
    const validPassword = (password) => {
        let passre = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/ 
        return passre.test(password.trim())
    }

    const passwordsMatch = (password1, password2) => {
        return password1 === password2
    }

    const SignUp = (username, email, password1, password2) => {
       if (!validEmail(email) || !validPassword(password1) || !passwordsMatch(password1, password2)) Alert.alert("Please change input as instructed"); 
       reqSignUp(username, email, password1)
    }

    return (
        <View style={styles.container}>
            <Label>Username: </Label>
            <Input
                autoCorrect={false}
                autoFocus={true}
                placeholder='Enter your username'
                keyboardType='default'
                onChangeText={username => setUsername(username)}
                text={username}
            />

            <Label>Email Address: </Label>
            <Input
                autoCorrect={false}
                autoFocus={false}
                autoCompleteType='email'
                placeholder='Enter your email address'
                keyboardType='email-address'
                onChangeText={email => setEmail(email)}
                text={email}
            />
            <View>
                {email.trim() === '' ? null : validEmail(email) ? null : <Text style={styles.errmsg}>Invalid Email Address</Text>}
            </View>

            <Label>Password: </Label>
            <Input
                autoCorrect={false}
                autoFocus={false}
                placeholder='Enter you password'
                keyboardType='default'
                onChangeText={password1 => setPassword1(password1)}
                text={password1}
            />
            <View>
                { password1.trim() === '' ? null : validPassword(password1) ? null : 
                <View>
                    <Text style={styles.errmsg}>Invalid Password.</Text>
                    <Text style={styles.errmsg}>Password has to be 8 digits and contains at least one digit, one lower case, one upper case and a special character.</Text>
                </View>}
            </View>

            <Label>Password(again): </Label>
            <Input
                autoCorrect={false}
                autoFocus={false}
                placeholder='Enter you password again'
                keyboardType='default'
                onChangeText={password2 => setPassword2(password2)}
                text={password2}
            />
            <View>
                {passwordsMatch(password1, password2) ? null : <Text style={styles.errmsg}>Password doesn't match</Text>}
            </View>

            <View style={styles.buttonarea}>
                <Button
                    onPress={() => SignUp(username, email, password1, password2)}>
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
    },
    errmsg: {
        color: 'red',
        paddingHorizontal: 6,
    }
})

export default SignUpScreen;