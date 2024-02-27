export const setIsLoggedIn = (isLoggedIn) => ({
    type: 'SET_IS_LOGGED_IN',
    payload: isLoggedIn,
});

export const setAuthenticatedUser = (user) => ({
    type: 'SET_AUTHENTICATED_USER',
    payload: user,
});

export const setIdToken = (idToken) => ({
    type: 'SET_ID_TOKEN',
    payload: idToken,
})