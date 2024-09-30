import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const Temperature = () => {
    const [temperature, setTemperature] = useState(20); // Default starting temperature

    useEffect(() => {
        if (temperature > 30) {
            Alert.alert('Cảnh báo!', 'Nhiệt độ cao!');
        }
        else if(temperature<0){
            Alert.alert('Cảnh báo!', 'Nhiệt độ quá thấp!')
        }
    }, [temperature]);

    const increaseTemperature = () => {
        setTemperature(prevTemperature => prevTemperature + 1);
    };

    const decreaseTemperature = () => {
        setTemperature(prevTemperature => prevTemperature - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nhiệt độ hiện tại: {temperature}°C</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button title="Tăng Nhiệt Độ" onPress={increaseTemperature} color={"red"} />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button title="Giảm Nhiệt Độ" onPress={decreaseTemperature} color={"blue"}/>
                </View>
            </View>
        </View>
    );
};

export default Temperature;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e7ff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#5c4d89',
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'center', // Center the buttons in the row
        width: '100%', // Make the container take the full width
    },
    buttonWrapper: {
        marginHorizontal: 5, // Add horizontal margin between buttons
    },
});
