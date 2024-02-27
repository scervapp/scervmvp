// utils/decodeIdToken.js
const decodeIdToken = (idToken) => {
    // Split the ID token into its three parts: header, payload, signature
    const parts = idToken.split('.');
    // Extract the payload, which is the second part
    const encodedPayload = parts[1];
    // Decode the Base64-encoded payload to obtain the JSON string
    const decodedPayload = Buffer.from(encodedPayload, 'base64').toString('utf-8');
    // Parse the JSON string to obtain the object representation of the payload
    const payloadObject = JSON.parse(decodedPayload);
    return payloadObject;
};

export default decodeIdToken;
