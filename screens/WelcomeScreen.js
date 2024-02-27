import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { getCurrentUser, fetchAuthSession, signOut } from "aws-amplify/auth"

import colors from "../styles/appStyles"
import { useDispatch } from 'react-redux';
import { setAuthenticatedUser, setIsLoggedIn, setIdToken } from '../redux/actions/authActions';
import { sanitizeAndDispatchIdToken } from '../utils/sanitizeAndDispatchIdToken';
import { markAsRead } from '../redux/actions/exampleActions';
import { AuthContext } from '../context/authContext';

const WelcomeScreen = ({ navigation }) => {

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(markAsRead())
// }, [dispatch])


//   useEffect(() => {


//     const checkAuthStatus = async () => {
//       try {
//         const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
//         if(idToken) {
//           // User is authenticated
//           const user = await getCurrentUser();
//           dispatch(setAuthenticatedUser(user));
//           dispatch(setIdToken(idToken.payload))
//           dispatch(setIsLoggedIn(true));
      
        
      
      
//         } else {
//           // User is not authenticated
//           dispatch(setIsLoggedIn(false));
//           dispatch(setAuthenticatedUser(null));
//           dispatch(setIdToken(null));
    
//         }
//       } catch (error) {
//         // Error occured, handle accordingly
//         console.log("Error checking auth status: ", error);
//         dispatch(setIsLoggedIn(false));
//         dispatch(setAuthenticatedUser(null));
//         dispatch(setIdToken(null));
//       }
//     }
//     checkAuthStatus(); // Call the function to check auth status on page load
//   }, [dispatch])



  


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
