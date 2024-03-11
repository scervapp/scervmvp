import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { signOut } from "aws-amplify/auth"
import DashboardButton from '../components/Restaurant/DashboardButton';

const RestaurantDashboard = ({navigation}) => {

    const handleSignOut = async  ()  => {
        try {    
          await signOut({ global: true });
            navigation.navigate("Welcome")
        } catch (error) {
      
          console.log('error signing out: ', error);
      
        }
    }
    return (
        <View style={styles.dashboardContainer}>
    
            <View style={styles.header}>
                <Text style={styles.heading}>Dashboard</Text>
            </View>
            <ScrollView>
                <View style={styles.buttonRow}>
                    <DashboardButton iconName="restaurant-menu" label="Menu Management" onPress={() => {console.log("Menu button pressed")}} />
                    <DashboardButton iconName="table-restaurant" label="Tables" onPress={() => {console.log("Table button pressed")}} />

                </View>
            </ScrollView>
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
    dashboardContainer: {
        flex: 1,                    // Occupy available space
        paddingTop: 50              // Space for the fixed header 
      },
      header: {
        position: 'absolute',       // Position it absolutely
        top: 0, left: 0, right: 0,  // Pin to the top
        backgroundColor: '#f5f5f5',  // Example background color
        padding: 15,
        alignItems: 'center'         // Center the header text
      },
      heading: {
        fontSize: 20,
        fontWeight: 'bold'
      },
});

export default RestaurantDashboard;
