import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { useAuth } from '../context/authContext';
import { Button } from 'react-native-elements';


const CustomerDashboard = ({route, navigation }) => {

    const {idToken} = useAuth()
    
   const handleSignOut = async  ()  => {
        try {    
          await signOut({ global: true });
            navigation.navigate("WelcomeScreen")
        } catch (error) {
      
          console.log('error signing out: ', error);
      
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome, {idToken.email} </Text>
            <Button title="Logout" onPress={handleSignOut}/>
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
