
import React, {useState, useEffect} from "react"
import awsExports from "./src/aws-exports";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigator from "./navigation/AppNavigator";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json"


Amplify.configure(awsExports)


const App = () => {
  const [isAmplifyReady, setIsAmplifyReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsAmplifyReady(true)
    }, 3000)
  }, [])
  return (
     <Provider store={store}>
      {isAmplifyReady ? <AppNavigator /> : null }
      </Provider>
  );
} 
export default App;