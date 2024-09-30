import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Square = () => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);

    useEffect(()=>{
        const num = parseFloat(number);
        if (!isNaN(num)) {
            setResult(num * num);
        } else {
            setResult(null); // Clear the result if input is invalid
        }
    },[number])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tính Bình Phương</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='Nhập 1 số'
                value={number}
                onChangeText={setNumber}
            />
            {result !== null && (
                <Text style={styles.result}>Bình phương: {result}</Text>
            )}
        </View>
    );
};

export default Square; // Corrected export statement

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
    result: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
});
