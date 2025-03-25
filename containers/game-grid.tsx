import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function GameGrid() {

    const [ grid, setGrid ] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    const handlePress = (rowIndex: number, colIndex: number): void => {
        console.log(rowIndex, colIndex);
    };
    
    return (
        <View style={styles.grid}>
            <Text></Text>
            {grid.map((row,rowIndex) => (
                <View key={rowIndex} style={styles.row}>{row.map((col, colIndex) => (
                    <TouchableOpacity key={colIndex} style={styles.block}>
                        <Text style={styles.content}>{col ?? ''}</Text>
                    </TouchableOpacity>
                ))}</View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: "row",
        gap: 5

    },
    grid: {
        display: 'flex',
        flexDirection: "column",
        gap: 5
    },
    block: {
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: 'black',
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center"
        
    },
    content: {
        fontSize: 50
    }
});