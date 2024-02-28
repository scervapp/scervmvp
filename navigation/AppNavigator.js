import React, { useContext, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {  useSelector} from 'react-redux';

import WelcomeScreen from '../screens/WelcomeScreen';
import RestaurantSignup from '../screens/RestaurantSignup';
import CustomerSignup from '../screens/CustomerSignup';
import CustomerVerification from '../screens/CustomerVerification';
import CustomerDashboard from '../screens/CustomerDashboard';
import Login from '../screens/Login';
import decodeIdToken from '../utils/decodedIdToken';
import { checkAuthStatus } from '../service/authService';
import { useAuth } from '../context/authContext';
import RestaurantDashboard from '../screens/RestaurantDashboard';


const Stack = createNativeStackNavigator();
const navigationRef = React.createRef();


const AppNavigator = () => {

    const  { setIsLoggedIn, setUser, setIdToken, idToken, isLoggedIn, user } = useAuth()

    useEffect(() => {
        const authenticateUser = async () => {
            const {user, idToken} = await checkAuthStatus(); // check authentication status
            setIsLoggedIn(!!user); // set isLoggedIn state based on user existence
            setUser(user); // set user state
            setIdToken(idToken); // set idToken state
        }

        authenticateUser(); // Call the authentication function
        console.log("This is the new id Token", idToken)
    },[])
    
    // // Access Redux state using useSelector
    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // const idToken = useSelector(state => state.auth.idToken);
    //const showWelcomePage = useSelector(state => state.navigation.showWelcomePage);
    // const userType = useSelector(state => state.navigation.userType)
    // const readStatus = useSelector(state => state.example.readStatus)




   useEffect(() => {

    console.log("Is logged in ", isLoggedIn)


//         // Check if the user is logged in and ID token is available
        if(isLoggedIn && idToken){
            console.log("AppNav ", idToken)
            // Extract userType from ID token
           // const decodedToken = decodeIdToken(idToken);
           const userType = idToken['custom:userType'];

            // Navigate to appropriate screen based on userType
            if(userType === 'customer'){
                navigationRef.current?.navigate('CustomerDashboard');
            }   else if(userType === 'restaurant'){
                // Navigate to Restaurant Dashboard screen
                navigationRef.current?.navigate('RestaurantDashboard');
            }
            } else {
                console.log("Cant isLogged in or idToken", isLoggedIn)
            }
          
        
   }, [idToken, isLoggedIn])

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={WelcomeScreen}> 

                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="CustomerVerification" component={CustomerVerification} />
                <Stack.Screen name="RestaurantSignup" component={RestaurantSignup} options={{headerShown: false}} />
                <Stack.Screen name="CustomerSignup" component={CustomerSignup} options={{headerShown: false}}/>
                <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} options={{headerShown: false}}/>
                <Stack.Screen name="RestaurantDashboard" component={RestaurantDashboard} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
   
             
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;