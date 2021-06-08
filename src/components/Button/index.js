import React from 'react'
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Button = (props) => {

    return (
        <View style={styles.container}>
            <TouchableHighlight
                {...props}
                style={styles.button}>
                    <Text style={styles.text}>
                        {props.children}
                    </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor:'#CCCCCC',
        padding: 10,
        borderRadius: 4,
    },
    text: {
        fontSize: 18,
    }
})

export default Button;