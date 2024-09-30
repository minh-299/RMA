import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const StepCount = () => {
    const [steps, setSteps] = useState(0);
    const [bgColor, setBgColor] = useState('#ADD8E6'); // Light blue

    useEffect(() => {
        if (steps >= 5) {
            setBgColor('green'); // Green for >= 5 steps
        } else {
            setBgColor('red'); // Red for < 5 steps
        }
    }, [steps]);

    const handleSteps = () => {
        setSteps(prevSteps => prevSteps + 1);
    };

    const resetSteps = () => {
        setSteps(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đếm Bước Chân</Text>
            <View style={[styles.stepCountContainer, { backgroundColor: bgColor }]}>
                <Text style={styles.text}>Bước: {steps}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Bước" onPress={handleSteps} color="#007BFF" />
                <Button title="Reset" onPress={resetSteps} color="#FF6F61" />
            </View>
        </View>
    );
};

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
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        width: '80%',
        paddingHorizontal: 10,
      },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: "#333",
    },
    stepCountContainer: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: "center",
        width: '80%', // Adjust width as needed
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    },
});

export default StepCount;
