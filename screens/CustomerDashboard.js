import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerDashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Customer</Text>
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
