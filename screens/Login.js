import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import { fetchAuthSession, signIn } from "aws-amplify/auth";
import colors from "../styles/appStyles";

const Login = ({ navigation }) => { 

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [loginError, setLoginError] = useState("")

        const handleSimpleLogin = async () => {
            try {

                const { isSignedIn, nextStep } = await signIn({ 
                    username,
                     password,
                     options: { authFlowType: "USER_PASSWORD_AUTH" }
                     });
                navigation.navigate("CustomerDashboard");
              } catch (error) {
            
                console.log('error signing in', error);
            
              }
        }

        const handleLogin = async () => {

            console.log("Username and password", username, password)
        try {
          const { nextStep } = await signIn({
            username: username,
            password: password,
            options: { authFlowType: "USER_PASSWORD_AUTH" }
        });

          if (nextStep.signInStep === "DONE"){
            // Successful login, no further confirmation needed
            const authSession = await fetchAuthSession();
            const user = authSession.userSub; // or get attributes from authSession
            if(user.attributes.userType === "customer") {
                navigation.navigate("CustomerDashboard")
            }   else if (user.attributes.userType === "restaurant") {
                navigation.navigate("RestaurantDashboard")
            } else if (user.attributes.userType === "admin") {
                navigation.navigate("AdminDashboard")
            } else {
                
            }
          } else {
           handleConfirmationStep(nextStep); 
          }
           
    } catch (error) {
        console.log("Login Error", error)
        console.log("Details", error.message, error.code)
        setLoginError("Login failed, please try again")
    }
}

const handleConfirmationStep = async (nextStep) => {
    try {
        switch (nextStep.signInStep) {
            case "CONFIRM_SIGN_UP":
                // Handle confirmation step
                break;
            case "CONFIRM_FORGOT_PASSWORD":
                // Handle confirmation step
                break;
            default:
                break; // No further confirmation needed for other sign in steps.
                navigation.navigate("CustomerDashboard") // Navigate to the dashboard after successful login.
                break; // Navigate to the dashboard after successful login.
                navigation.navigate("RestaurantDashboard") // Navigate to the dashboard after successful login.
                navigation.navigate("AdminDashboard") // Navigate to the dashboard after successful login.
                break; // Navigate to the dashboard after successful login.
                navigation.navigate("CustomerDashboard") // Navigate to the dashboard after successful login.
                navigation.navigate("RestaurantDashboard") // Navigate to the dashboard after successful login.
                navigation.navigate("AdminDashboard") // Navigate to the dashboard after successful login.
                break; // Navigate to the dashboard after successful login.
                navigation.navigate("CustomerDashboard") // Navigate to the dashboard after successful login.
        }
    } catch (error) {
        
    }
}

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Login to Scerv</Text>

            </View>
            <View style={styles.form}>
        <View style={styles.inputGroup}>
            <Text style={styles.label}>Email or Phone Number</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your email or phone number"
                textContentType={'username'} // Helps with autofill
                autoCapitalize="none"
            />
        </View>

        <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={true}
                textContentType={'password'} // Helps with autofill
            />
        </View>

        <Button title="Login" onPress={handleSimpleLogin} style={styles.button} /> 
        </View>
        {loginError && <Text style={styles.errorText}>{loginError}</Text>}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 30,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',    // Center horizontally 
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
        backgroundColor: colors.inputBackground, 
    },
    button: {
        marginTop: 20,
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 8,
    },
    errorText: {
        // ... add styles for error display 
    },
    header: {
        marginBottom: 40, // Adjust spacing as desired
        alignItems: 'center', 
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary, 
    },
});

export default Login;