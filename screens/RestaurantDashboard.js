import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signOut } from "aws-amplify/auth"

const RestaurantDashboard = ({navigation}) => {

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
            <Text style={styles.text}>Welcome Restaurant</Text>
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

export default RestaurantDashboard;
