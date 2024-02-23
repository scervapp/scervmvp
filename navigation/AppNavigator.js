import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {  useSelector} from 'react-redux';
import WelcomeScreen from '../components/Home/WelcomeScreen';
import CustomerDashboard from '../screens/CustomerDashboard';
import RestaurantDashboard from '../screens/RestaurantDashboard';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    // Access Redux state using useSelector
    const showWelcomePage = useSelector(state => state.navigation.showWelcomePage);
    const userRole = useSelector(state => state.navigation.userRole)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={showWelcomePage ? "Welcome": "Home"}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
                {/*Conditionally render dashboard screens based on userRole */}
                {userRole === "customer" && (
                    <Stack.Screen name="Home" component={CustomerDashboard} options={{headerShown: false}} />
                
                )}
                {userRole === "restaurant" && (
                    <Stack.Screen name="Home" component={RestaurantDashboard} options={{headerShown: false}} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;