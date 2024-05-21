import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images, Colors, auth } from "../config";

export const DiningHall = ({ hall }) => {
    const styles = StyleSheet.create({
        container: {
          marginBottom: 10,
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: 175, // Adjusted height to accommodate potential changes due to ImageBackground
          borderRadius: 20,
          overflow: 'hidden',
        },
        name: {
          color: Colors.white,
          fontSize: 20,
          fontWeight: '600',
          marginBottom: 10,
          marginLeft: 30,
        },
        // Define a separate style for the ImageBackground
        imageBackground: {
            width: '100%',
            height: 175,
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
        },
        // Style for the overlay View
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // 20% black tint
        },
        // Container View for the ImageBackground and overlay
        imageContainer: {
            width: '100%',
            height: 175,
            borderRadius: 20,
        },
        statusMessage: {
            marginLeft: 30,
            padding: 3,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 10,
        },
        statusMessageText: {
            color: Colors.white,
            fontSize: 12,
            fontWeight: '600',
        }
    });

    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log(`${hall.name} pressed`)}>
            <View style={styles.imageContainer}>
                <ImageBackground source={{ uri: hall.img }} style={styles.imageBackground}>
                    {/* Place the overlay behind the Text component */}
                    <View style={styles.overlay}></View>
                    {hall.open? (
                        <View style={[styles.statusMessage, {backgroundColor: '#50c93b'}]}>
                            <Text style={styles.statusMessageText}>
                                Open
                            </Text>
                        </View>
                    ) : (
                        <View style={[styles.statusMessage, {backgroundColor: '#b2323d'}]}>
                            <Text style={styles.statusMessageText}>
                                Closed
                            </Text>
                        </View>
                    )}
                    <Text style={styles.name}>{hall.name}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
};
