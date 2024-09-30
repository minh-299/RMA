import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const PrimeNumberCheck = () => {
    const [number, setNumber] = useState("");
    const [isPrime, setIsPrime] = useState(null);
    const [sumPrimes, setSumPrimes] = useState(null);
  
    const isPrimeNumber = (num) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    const calculateSumPrimes = (n) => {
      let sum = 0;
      for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i)) {
          sum += i;
        }
      }
      return sum;
    };
  
    const handleCheckPrime = () => {
      const num = parseInt(number);
      if (isNaN(num) || num <= 0) {
        setIsPrime(null);
        setSumPrimes(null);
        return;
      }
  
      const primeCheck = isPrimeNumber(num);
      setIsPrime(primeCheck);
      if (primeCheck) {
        setSumPrimes(calculateSumPrimes(num));
      } else {
        setSumPrimes(null);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Kiểm tra số nguyên tố và tính tổng số nguyên tố</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số nguyên dương"
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
        />
        <Button title="Kiểm tra" onPress={handleCheckPrime} />
  
        {isPrime === true && (
          <Text>{`Số ${number} là số nguyên tố. Tổng các số nguyên tố từ 1 đến ${number} là: ${sumPrimes}`}</Text>
        )}
        {isPrime === false && (
          <Text>{`Số ${number} không phải là số nguyên tố.`}</Text>
        )}
      </View>
    );
  };
  
  export default PrimeNumberCheck;
  
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
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 20,
    },
  });