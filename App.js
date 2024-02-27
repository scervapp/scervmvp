
import React, {useState, useEffect} from "react"
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigator from "./navigation/AppNavigator";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json"
import { AuthProvider } from "./context/authContext";


Amplify.configure(amplifyconfig)


const App = () => {

  

  return (
     <AuthProvider>
      <AppNavigator />
      </AuthProvider>
  );
} 
export default App;