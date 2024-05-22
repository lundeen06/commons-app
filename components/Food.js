import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

export const Food = ({ food }) => {
    return (
        <View style={styles.foodContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{food.name}</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>
                    {food.avgRating.toFixed(1)}
                    <View style={{ width: 3 }} />
                    <Icon style={styles.star} name="star" />
                </Text>
            </View>
            <Icon name="flash-outline">{food.calories}</Icon>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.reportContainer} onPress={() => console.log(`report ${food.name}`)}>
                    <Icon style={styles.icon} name="flag-outline" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreContainer} onPress={() => console.log(`view more on ${food.name}`)}>
                    <Icon style={styles.icon} name="chevron-forward-outline" />
                </TouchableOpacity>
            </View>
            
            {/* <Text style={styles.subtitle}>Recommended: Yes</Text> */}
            {/* Render other properties as needed */}
        </View>
    )
};

const styles = StyleSheet.create({
    foodContainer: {
        flexDirection: 'row', // Use flexDirection to arrange children in a row
        justifyContent: 'space-between', // Distribute space evenly between children
        alignItems: 'center', // Align children vertically in the center
        width: '100%', // Full width of the screen
        height: 50, // Fixed height for consistency
        // border: `5px solid ${Colors.lightGray}`, // Uncomment if needed
    },
    nameContainer: {
        flex: 1, // Take up equal space
        backgroundColor: '#f00',
        width: 100,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.subtitle,
        textWrap: 'break-word',
    },
    iconContainer: {
        flex: 1, // Take up equal space
        flexDirection: 'row', // Arrange icons in a row
        justifyContent: 'space-between', // Space between icons
        alignItems: 'center', // Center icons vertically
    },
    reportContainer: {
        backgroundColor: '#00f',
        marginLeft: 20,
    },
    moreContainer: {
        backgroundColor: '#f00',
        marginLeft: 20,
    },
    ratingContainer: {
        flex: 1, // Take up equal space
        backgroundColor: '#0f0',
        alignItems: 'flex-start', // Center icons vertically
    },
    icon: {
        color: Colors.font, 
        fontSize: 16,
    },
    rating: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.subtitle,
        marginRight: 5, // Add some spacing between the text and the icon
    },
    star: {
        color: Colors.font,
        fontSize: 12,
    },
});
