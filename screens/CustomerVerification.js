import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Text, ActivityIndicator } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { confirmSignUp, resendSignUpCode, fetchAuthSession,  } from 'aws-amplify/auth';
import colors from '../styles/appStyles';
import { startLoading, stopLoading } from '../redux/actions/loadingActions';
import {setUser} from "../redux/actions/userActions"
import { setIsLoggedIn } from '../redux/actions/authActions';




const CustomerVerification = ({ route, navigation }) => {
  const [code, setCode] = useState('');
  const [verificationError, setVerificationError] = useState(null);
  //const inputRefs = useRef([]); // Array to store input references

  const username = route.params.username;
  const dispatch = useDispatch(); // Access Redux dispatch
  const isLoading = useSelector((state) => state.loading.isLoading); // Access Redux state for isLoading status


  useEffect(() => {
    const checkConfirmation = async () => {
      try {
        dispatch(startLoading())
        const authSession = await fetchAuthSession();
        const {accessToken, idToken, refreshToken} = (await fetchAuthSession()).tokens ?? {};
        if(accessToken){
          console.log("auth session", accessToken)
        }
        

        if(!authSession.userSub){
          console.error("User not found in session");
          return;
        } else if (!authSession.userSub.attributes.email_verified){
          console.error("User not verified");
          setVerificationError("User not verified");
          return;
        }
        const user = authSession.userSub;
        console.log("this is the user ", authSession)

        if(user.attributes.email_verified && user.attributes.userType === "customer") {
          dispatch(setUser(user)) // dispatch action to set user data
          dispatch(setIsLoggedIn(true)) // dispatch action to set isLoggedIn status 
          navigation.navigate('CustomerDashboard');
        } else {
          // Handle the case where the user is not yet confirmed or not a customer
          console.log("Error checking confirmation", error)
        }
        
      } catch (error) {
        console.log("Error checking confirmation", error)
      } finally {
        setTimeout(() => {
        dispatch(stopLoading()) // dispatch action to stop loading
      }, 1500)
    
      }
    }
    checkConfirmation();
  }, [])

  const handleResendVerification = async () => {
    try {
      await resendSignUpCode(username);
      setVerificationError("A new verification code has been sent to your email");
    } catch (error) {
      console.error("Error sending code: ", error);
      setVerificationError("Failed to resend verification code. Please try again later")
    }
  }

  const handleVerification = async () => {


    try {
      console.log("ConfirmationCode: ", code)
      dispatch(startLoading());
      await confirmSignUp({username, confirmationCode: code})
      const updatedAuthSession = await fetchAuthSession();
      console.log("THis is updated AUth Sessiong", updatedAuthSession)
      if(updatedAuthSession.userSub.attributes.email_verified && updatedAuthSession.userSub.attributes.userType === "customer") {
        dispatch(setUser(updatedAuthSession.userSub)) // dispatch action to set user data
        dispatch(setIsLoggedIn(true)) // dispatch action to set isLoggedIn status
        navigation.navigate('CustomerDashboard');
      } else {
        console.log("Verification failed"); // Original code had mismatched bracket

        setVerificationError("Unexpected verification error. Please contact support")
      }
      // Redux: Update user data if needed
      // Navigation
      
    } catch (error) {
      console.log("Error confirming signup::", error)
      
    } finally {
      dispatch(stopLoading())
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <TextInput
   style={styles.codeInputBox} // Use your existing styles for consistency
   maxLength={6} 
   keyboardType="numeric"
   value={code}
   onChangeText={(newCode) => setCode(newCode)} 
   placeholder="Enter Code"
/>
      {verificationError && (
        <View style={styles.errorText}>
        <Text style={styles.errorText}>{verificationError}</Text>
        <Button title="Resend Code" onPress={handleResendVerification} />
        </View>
      )}
      <Button title="Verify" onPress={handleVerification} style={styles.button} />
      {isLoading && (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color={colors.primary} animating={isLoading} />
        </View>
      )}
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
    color: colors.primary,
  },
  codeInputBox: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: colors.darkText,
    backgroundColor: colors.inputBackground, // A light background color
    margin: 12, // Add spacing between boxes
  
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    alignItems: 'center',
  },

  errorText: {
    color: colors.error,
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
});

export default CustomerVerification;
