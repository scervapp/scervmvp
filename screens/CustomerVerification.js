import React, {useState, useRef} from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { useNavigation, useRoute } from "@react-navigation/native"
import { useDispatch } from 'react-redux'
import { Auth }from "aws-amplify"
import colors from '../styles/appStyles'



const CustomerVerification = () => {
    const [code, setCode] = useState("");
    const [verificationError, setVerificationError] = useState(null)
    const inputRefs = useRef([]) // Array to store input references
    const navigation = useNavigation();

    const username = route.params.username;
    const dispatch = useDispatch(); // Access Redux dispatch

    const handleVerification = async () => {
        try {
          await Auth.confirmSignup(username, code);
          console.log("Signup confirmed");
    
          // Redux: Update user data if needed
          // Navigation
          navigation.navigate("CustomerDashboard");
        } catch (error) {
          setVerificationError("Invalid verification code. Please try again"); // Original code had mismatched bracket 
        }
      }; 

    const handleChange = (index, digit) => {
        const newCode = code.substring(0, index) + digit + code.substring(index + 1);
        setCode(newCode);

        // Focus shifting
        if(digit && index < 5) inputRefs.current[index + 1].focus() // Jump to next
        if(!digit && index > 0) inputRefs.current[index - 1].focus(); // Backspace - go back

    }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <View style={styles.codeInputContainer}>
        {Array(6).fill().map((_, index) => {
            <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.codeInputBox}
                maxLength={1}
                value={code[index] || ''}
                onChangeText={(digit) => handleChange(index, digit)} />


        })}
        </View>
        {verificationError && <Text style={styles.errorText}>{verificationError}</Text>}
        <Button title="Verify" onPress={handleVerification} style={styles.button} />
       
    </View>
  )
    }

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
    codeInputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly', 
      width: '80%', 
    },
    codeInputBox: {
      width: 50,
      height: 50,
      borderWidth: 1, 
      borderColor: colors.lightGray,  
      borderRadius: 8, 
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '500',
      color: colors.darkText, 
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
    }
  });

export default CustomerVerification
