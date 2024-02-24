import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Auth } from 'aws-amplify';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, stopLoading } from '../redux/actions/loadingActions'; 
import colors from '../styles/appStyles';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const CustomerSignup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [signupError, setSignupError] = useState(null)
  const isLoading = useSelector(state => state.loading.isLoading);
  const dispatch = useDispatch();

const handlePhoneChange = (newPhone) => {
    if(newPhone.length <= 10){
        setPhone(newPhone)
    }
 
  };

  const handleSignup = async () => {
    dispatch(startLoading());
    console.log("Auth object: ", Auth)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // artificial delay8
      await Auth.signUp({
        username: phone, 
        password,
        attributes: { email, phone_number: phone }, 
      });
      console.log("This is auth object", Auth)
      console.log('Sign-up initiated - check your phone for verification code');
      // ... Navigation or success actions 
      navigation.navigate("CustomerVerification", {username: phone})
    } catch (error) {
      console.log('Error signing up:', error);
      if(error.code === "UsernameExistsException"){
        setSignupError("An account with that email or phone number already exists.")
      } else if (error.code === "InvalidParameterException") {
        setPhoneError("Please enter a valid phone number")
      } else {
        setSignupError("Unexpected error occured. Please try again")
      }
      // ... Handle errors 
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color={colors.primary} />}

      <Text style={styles.title}>Create Your Account</Text>

      <Input 
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="janedoe@email.com"
        inputStyle={styles.input} 
        errorMessage={emailError}
      />
      <Input
        label="Phone Number (for Login)"
        value={phone}
        onChangeText={handlePhoneChange}
        placeholder="555-555-5555"
        inputStyle={styles.input}
        keyboardType="phone-pad"
        errorMessage={phoneError}
      />
      <Input 
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        inputStyle={styles.input} 
        secureTextEntry={true} 
      />

      <Button 
        title="Sign Up" 
        buttonStyle={styles.button}  
        onPress={handleSignup} 
      />

      <Text style={styles.loginLink}>
        Already have an account? <Text style={styles.linkText}>Log In</Text>
      </Text>
    </View> 
  );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 40, 
     backgroundColor: colors.background, 
   },
   title: {
     fontSize: 24,
     fontWeight: '600',
     marginBottom: 30,
   },
   input: {
     borderWidth: 1, 
     borderColor: '#E0E0E0', 
     borderRadius: 8,
     backgroundColor: colors.background,
     marginBottom: 10, 
   },
   button: {
     backgroundColor: colors.primary,  
     borderRadius: 5,
     padding: 15,
   },
   loginLink: {
     marginTop: 20,
   },
   linkText: {
    color: colors.primary,
   },
});

export default CustomerSignup; 
