import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import colors from "../styles/appStyles"

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Scerv</Text>

      {/* Customer Signup Section */}
      <Button 
        title="Sign Up" 
        buttonStyle={styles.customerButton}  
        onPress={() => navigation.navigate('CustomerSignup')}
      />
      <Text style={styles.existingAccount}>
        Already have an account? 
        <Text 
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')} 
        >
          Log In
        </Text>
      </Text>

      {/* Restaurants Section */}
      <TouchableOpacity style={styles.restaurantPromptContainer} onPress={() => navigation.navigate("RestaurantSignup")}> 
        <Text style={styles.restaurantPrompt}>
          Restaurants? Go Here
        </Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center', // Center vertically 
     alignItems: 'center', // Center horizontally
     padding: 20, 
     backgroundColor: colors.background,
   },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30, 
    color: colors.primary,
  },
  existingAccount: {
    marginTop: 20, 
  },
  loginLink: { 
    color: '#007bff', 
    textDecorationLine: 'underline'
  },
  customerButton: {
    backgroundColor: colors.primary,
  },
  restaurantPromptContainer: { 
    position: 'absolute', // Position at the bottom
    bottom: 20,
    alignSelf: 'center', // Center horizontally within its container
  },
  restaurantPrompt: {
    fontSize: 16,
    color: colors.secondary,  // Color for the entire prompt
    textDecorationLine: 'underline' 

  }
});

export default WelcomeScreen; 
