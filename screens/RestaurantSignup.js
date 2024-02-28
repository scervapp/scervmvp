import React, {useState} from 'react'
import { View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import { stateOptions } from '../data/states';
import { cuisineOptions } from '../data/cuisines';
import { signUp } from "aws-amplify/auth"


const RestaurantSignup = ({navigation}) => {

    // State variables for form data
    const [restaurantName, setRestaurantName] = useState(''); 
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('NY');
    const [zipCode, setZipCode] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState('');
  

  const handleSubmit = async () => { 
    try {
      const  {
        isSignUpComplete,
        userId,
        nextStep,
      } = await signUp({
        username: email,
        password,
        name: contactName,
        options: {
          userAttributes: {
            "custom:userType": "restaurant",
            "custom:restaurantName": restaurantName,
            "custom:address": address,
            "custom:city": city,
            "custom:state": state,
            "custom:zipcode": zipCode,
            "custom:cuisine": cuisineType,
  
        
          }
        },
        autSignIn: true,
      })

      console.log("Restaurant Signup successful!");
      navigation.navigate("RestaurantDashboard", {username: email})
    } catch (error) {
      console.log("Error signing restaurant up: ", error)
    }
  }

    const handleConfirmPasswordChange = (text) => {
      setConfirmPassword(text); 
      if (password !== text) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError(''); 
      }
    }

  return (
    <View style={styles.signupContainer}> 
    <Text style={styles.header}>Join Our Restaurant Network</Text> 
    <ScrollView style={styles.formScrollView}>
    <View style={styles.form}> 
        <TextInput 
          style={styles.input} 
          placeholder="Restaurant Name"
          value={restaurantName} 
          onChangeText={(text) => setRestaurantName(text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Street Address"
          value={address} 
          onChangeText={(text) => setAddress(text)} 
        />
        <View style={[ styles.addressRow]}>
        <TextInput 
          style={styles.cityInput} 
          placeholder="City"
          value={city} 
          onChangeText={(text) => setCity(text)} 
        />
        <Picker 
          style={[ styles.stateInput]} 
          placeholder="State"
        
          selectedValue={state} 
          mode="dropdown"
          onValueChange={(value) => {        
            setState(value)} }
        >
          {stateOptions.map((option) => (
            <Picker.Item label={option.label} value={option.value} key={option.value} /> // Add key prop to avoid warning message 
          ))}
        </Picker>
        <TextInput 
          style={[ styles.zipInput]} 
          placeholder="Zip Code"
          value={zipCode} 
          onChangeText={(text) => setZipCode(text)} 
          keyboardType="numeric"
        />
        </View>
        <Picker 
          style={styles.input} 
          placeholder="Cuisine Type"
          selectedValue={cuisineType} 
          mode="dropdown"
          itemStyle={[styles.input]}
          onValueChange={(value) => {
            setCuisineType(value); // Update state with selected value
          }} 
        >
           {cuisineOptions.map((option) => (
            <Picker.Item label={option.label} value={option.value} key={option.value} /> // Add key prop to avoid warning message 
          ))}
        </Picker>
        <TextInput 
          style={styles.input} 
          placeholder="Contact Name"
          value={contactName} 
          onChangeText={(text) => setContactName(text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email"
          value={email} 
          onChangeText={(text) => setEmail(text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number"
          value={phoneNumber} 
          onChangeText={(text) => setPhoneNumber(text)} 
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input} 
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true} // Important for obscuring the password
/>

      <TextInput
        style={styles.input} 
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry={true} 
      />
        {passwordError && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}
      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1, 
    justifyContent: 'center', // Center the form vertically
    padding: 20, 
  },
  header: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20, 
    marginTop: 30,
  },
  form: {
    // Add styles for the form container 
  },
  sectionTitle: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 15, // Add spacing above sections 
  },
  input: {
    borderWidth: 1, 
    borderColor: 'lightgray', 
    padding: 10, 
    marginBottom: 10, 
  },
  addressRow: { // Style for the row containing address fields
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute elements 
    alignItems: 'center', // Vertically center in the row 
  },

  cityInput: {
    flex: 2.5, // Example distribution - adjust ratios as needed
    borderWidth: 1, 
    borderColor: 'lightgray', 
    padding: 10, 
    marginBottom: 10, 
  },
  stateInput: {
    flex: 1.5, 
    borderWidth: 1, 
    borderColor: 'lightgray', 
    padding: 20,
    marginBottom: 10, 
    marginLeft: 10, marginRight:10,
    color: "black",
  },
  zipInput: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: 'lightgray', 
    padding: 10, 
    marginBottom: 10, 
  },

errorText: {
  color: 'red', 
  marginBottom: 10, // Add spacing if needed
},

formScrollView: {
  flex: 1,
 
}
});

export default RestaurantSignup
