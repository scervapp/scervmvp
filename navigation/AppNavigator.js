import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {  useSelector} from 'react-redux';

import WelcomeScreen from '../screens/WelcomeScreen';
import RestaurantSignup from '../screens/RestaurantSignup';
import CustomerSignup from '../screens/CustomerSignup';
import CustomerVerification from '../screens/CustomerVerification';
import { Auth } from "aws-amplify"

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    // Access Redux state using useSelector
    const showWelcomePage = useSelector(state => state.navigation.showWelcomePage);
    const userRole = useSelector(state => state.navigation.userRole)

    console.log("Auth in App nav ", Auth )

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={showWelcomePage ? "Welcome": "Home"}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="RestaurantSignup" component={RestaurantSignup} options={{headerShown: false}} />
                <Stack.Screen name="CustomerSignup" component={CustomerSignup} options={{headerShown: false}}/>
                <Stack.Screen name="CustomerVerification" component={CustomerVerification} />
             
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;