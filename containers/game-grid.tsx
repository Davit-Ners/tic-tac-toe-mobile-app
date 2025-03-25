import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import getFirstTurn from "../services/get-first-turn.ts";
import { Info } from "../components/info/info.tsx";

export function GameGrid() {

    const [ grid, setGrid ] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);

    const [ turn, setTurn ] = useState(getFirstTurn());

    const handlePress = (rowIndex: number, colIndex: number) => {
        if (grid[rowIndex][colIndex] === null) {
            setGrid(prev => prev.map((row, r) => (
                row.map((col, c) => (
                    colIndex === c && rowIndex === r ? turn : col
                ))
            )));
            setTurn(turn === 'X' ? '0' : 'X');
        }
    };
    
    return (
        <>
            <Info turn={turn}/>
            <View style={styles.grid}>
                <Text></Text>
                {grid.map((row,rowIndex) => (
                    <View key={rowIndex} style={styles.row}>{row.map((col, colIndex) => (
                        <TouchableOpacity key={colIndex} style={styles.block} onPress={() => handlePress(rowIndex, colIndex)}>
                            <Text style={styles.content}>{col ?? ''}</Text>
                        </TouchableOpacity>
                    ))}</View>
                ))}
            </View>
        </>
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