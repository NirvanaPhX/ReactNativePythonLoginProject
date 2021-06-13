import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ProfileScreen = ({naviagation, route}) => {
    const {user} = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                {user.username}'s Contact List
            </Text>
            <View style={styles.tableheader}>
                <Text style={styles.tableheadertext}>Name</Text>
                <Text style={styles.tableheadertext}>Phone Number</Text>
            </View>

            <View>
            {user.contact === '' ? 
            user.contact.map(entry => {
                return (
                    <View style={styles.tablecontent}>
                    <Text style={styles.tablecontenttext}>{entry.name}</Text>
                    <Text style={styles.tablecontenttext}>{entry.phonenumber}</Text>
                    </View>
                )    
            }) : <Text style={styles.nodatamsg}>No Contact Yet!</Text>}
            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10 
    },
    header: {
        padding: 8,
        fontSize: 23,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    tableheader: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tableheadertext: {
        fontSize: 18,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 3,
        width: '50%',
    },
    tablecontent: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tablecontenttext: {
        fontSize: 16,
        padding: 3,
        width: '50%',
    },
    nodatamsg: {
        color: 'lightgrey',
        padding: 5,
        fontSize: 23,
        textAlign: 'center',
    }
})

export default ProfileScreen;