import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from  "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const [showWelcomePage, setShowWelcomePage] = useState(true);
   const handleRoleSelection = (role) => { 
    navigation.navigate(role === 'restaurant' ? 'RestaurantDashboard' : 'CustomerDashboard');   
    };

    if (showWelcomePage) {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to Scerv</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleRoleSelection('restaurant')}>
                    <Ionicons name="storefront-outline" size={80} />
                    <Text style={styles.buttonText}>Restaurant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleRoleSelection('customer')}>
                    <Ionicons name="people-circle-outline" size={80} />
                    <Text style={styles.buttonText}>Customer</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
    },
});

export default WelcomeScreen;
