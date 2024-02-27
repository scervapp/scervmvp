import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import decodeIdToken from "../utils/decodedIdToken";






 export const checkAuthStatus = async () => {
    try {
        const {accessToken, idToken} = (await fetchAuthSession()).tokens ?? {};
        if(idToken.payload){
            const user = await getCurrentUser();
            return {user, idToken: idToken.payload}
        } else {
            return {user: null, idToken: null}
        }
    } catch (error) {
        console.log("Error checking auth status", error);
        return { user: null, idToken: null }
    }
 }