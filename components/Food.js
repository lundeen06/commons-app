import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

export const Food = ({ food }) => {
    return (
        <View key={food.name} style={styles.foodContainer}>
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.rating}>
                {food.avgRating.toFixed(1)}
                <View style={{ width: 3 }} />
                <Icon style={styles.star} name="star"></Icon>
            </Text>
            <TouchableOpacity style={styles.iconContainer} onpress={console.log(`report ${food.name}`)}>
                <Icon style={[styles.icon, styles.report]} name="flag-outline" />
            </TouchableOpacity>
            {/* <Text style={styles.subtitle}>Recommended: Yes</Text> */}
            {/* Render other properties as needed */}
        </View>
    )
};

styles = StyleSheet.create({
    foodContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        border: `5px solid ${Colors.lightGray}`,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.subtitle,
        height: '100%',
    },
    icon: {
        color: Colors.font, 
        fontSize: 12,
        height: '100%',
    },
    iconContainer: {
        width: 25, 
        height: 25,
        backgroundColor: Colors.lightGray,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    report: {
        color: Colors.font, 
        height: '100%',
    },
    rating: {
        fontSize: 14,
        height: '100%',
        fontWeight: '600',
        color: Colors.subtitle,
        marginTop: 5,
    },
      star: {
        color: Colors.font,
        fontSize: 12,
    },
})