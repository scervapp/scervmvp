// // Import setIdToken action creator if not already imported
// import { setIdToken } from "../redux/actions/authActions";

// // Function to sanitize and dispatch idToken
// export const sanitizeAndDispatchIdToken = (dispatch, idToken) => {
//     // Ensure idToken is not null or undefined
//     if (!idToken) {
//         // If idToken is null or undefined, dispatch null to clear the idToken
//         dispatch(setIdToken(null));
//         return;
//     }

//     // Extract the payload from the idToken
//     const { payload, ...rest } = idToken;

//     // Ensure payload is an object
//     const sanitizedPayload = typeof payload === 'object' ? { ...payload } : {};

//     // Remove the toString function from the sanitized payload
//     delete sanitizedPayload.toString;

//     // Construct the sanitized idToken object
//     const sanitizedIdToken = { ...rest, payload: sanitizedPayload };

//     // Dispatch the sanitized idToken to the Redux store
//     dispatch(setIdToken(sanitizedIdToken));
// };
