import React from 'react'
import {StyleSheet, TextInput} from 'react-native';

const Input = (props) => {

    return (
        <TextInput 
            style={styles.input}
            {...props}
            >
            {props.children}
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth:1,
        marginHorizontal: 6,
        marginBottom: 10,
    },
})

export default Input;