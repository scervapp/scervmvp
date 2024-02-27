import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCurrentUser } from 'aws-amplify/auth';
import { useAuth } from '../context/authContext';


const CustomerDashboard = ({route}) => {

    const {idToken} = useAuth()
    
    console.log("User from customer", idToken.email)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {idToken.email} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CustomerDashboard;
