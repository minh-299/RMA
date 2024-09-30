import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
const Triangle = () =>{
    // Tên biến và hàm đã được sửa lại cho đúng
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [sideC, setSideC] = useState('');
    const [result, setResult] = useState('');

    // Hàm kiểm tra tính hợp lệ của tam giác
    const isValidTriangle = (a, b, c) => {
        return a + b > c && a + c > b && b + c > a;
    };

    // Hàm tính chu vi
    const calculatePerimeter = (a, b, c) => a + b + c;

    // Hàm tính diện tích
    const calculateArea = (a, b, c) => {
        const s = calculatePerimeter(a, b, c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    };

    // Hàm xử lý khi người dùng bấm nút "Tính"
    const handleCheckTriangle = () => {
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            setResult('Vui lòng nhập số hợp lệ cho tất cả các cạnh.');
            return;
        }

        if (isValidTriangle(a, b, c)) {
            const perimeter = calculatePerimeter(a, b, c);
            const area = calculateArea(a, b, c);
            setResult(`Tam giác hợp lệ.\nChu vi: ${perimeter.toFixed(2)}\nDiện tích: ${area.toFixed(2)}`);
        } else {
            setResult('Ba cạnh không tạo thành tam giác hợp lệ.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nhập độ dài cạnh a:</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={sideA}
                onChangeText={setSideA}
            />

            <Text style={styles.label}>Nhập độ dài cạnh b:</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={sideB}
                onChangeText={setSideB}
            />

            <Text style={styles.label}>Nhập độ dài cạnh c:</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={sideC}
                onChangeText={setSideC}
            />

            <Button title="Tính" onPress={handleCheckTriangle} />

            <Text style={styles.result}>{result}</Text>
        </View>
    );
};
export default Triangle;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#e0e7ff", // Light purple background
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#5c4d89", // Darker purple for title
        textAlign: "center",
      },
      componentContainer: {
        width: '90%', // Use responsive width
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#ffffff", // White background for components
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.62,
        elevation: 4, // For Android shadow effect
      },
      label: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
        paddingHorizontal: 10,
      },
  });