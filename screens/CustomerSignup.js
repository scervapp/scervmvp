import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Label } from 'react-native';
import { signUp } from 'aws-amplify/auth';
import colors from '../styles/appStyles';

const CustomerSignup = ({ navigation }) => {
  // State variables for all attributes
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [signupError, setSignupError] = useState('');
  // ... State variables for your custom attributes

  const handleSignup = async ({
    isSignUpComplete, 
    userId, 
    nextStep,
    phone_number,
  }) => {
try {
     const { 
      isSignUpComplete,
      userId,
      nextStep,

     
    } = await signUp({
       username: email,
        password,
        options: {
          userAttributes: {
          "custom:userType": "customer",
          },
      
          // ... your custom attributes
        },
        autoSignIn: true,
        
      });
  

      console.log('Signup successful!');
      navigation.navigate('CustomerDashboard', { username: email });
    } catch (error) {
      console.log('Error signing up:', error);
      // ... Handle signup errors appropriately 
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Create Your Account</Text>

    <View style={styles.form}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail} 
          placeholder="youremail@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          maxLength={10}
        />
      </View>


      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

    
  


      {/* ... Input fields for custom attributes */}  

    </View>

    <Button title="Sign Up" onPress={handleSignup} style={styles.button} />

    {signupError && (
      <View style={styles.errorArea}> 
        <Text style={styles.errorText}>{signupError}</Text>
      </View>
    )} 
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',  // Subtle shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: colors.background, // Blend with the overall background
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
  },
  errorArea: {
    // ... Add styles for error display
  },
});

export default CustomerSignup;
