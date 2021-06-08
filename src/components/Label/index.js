import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Label = (props) => {

    return (
        <Text 
            style={styles.label}
            {...props}
        >{props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    label: {
        height: 40,
        marginHorizontal: 6,
        fontSize: 20,
        textAlignVertical: 'bottom',
        marginBottom: 3,
    },
})

export default Label;