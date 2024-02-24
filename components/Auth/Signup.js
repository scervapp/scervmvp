import React, {useState } from "react"
import { View, TextInput, Button, StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {Auth } from "aws-amplify"

const Signup = () => {
    // ...Other state variables
    const [role, setRole] = useState("customer"); //Default role

}