import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const DashboardButton = ({ iconName, label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
      <Icon name={iconName} size={80} color="black" />
      </View>    
      
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
);

// ... your styles ...
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
  },
  dashboardContainer: {
      flex: 1,                    // Occupy available space
      paddingTop: 50              // Space for the fixed header 
    },
    header: {
      position: 'absolute',       // Position it absolutely
      top: 0, left: 0, right: 0,  // Pin to the top
      backgroundColor: '#f5f5f5',  // Example background color
      padding: 15,
      alignItems: 'center'         // Center the header text
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    iconContainer: {
      width: 100,
      height: 100,
      borderRadius: 25,
      backgroundColor: "blue",
      justifyContent: "center",
    }
});
export default DashboardButton;