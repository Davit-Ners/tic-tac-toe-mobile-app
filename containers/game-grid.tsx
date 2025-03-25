import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, Button } from "react-native";
import getFirstTurn from "../services/get-first-turn.ts";
import { Info } from "../components/info/info.tsx";
import checkVictory from "../services/check-victory.ts";

export function GameGrid() {

    const test = [
        ['', '0', '0'],
        ['', '0', ''],
        ['0', '', '0'],
    ]

    const [ grid, setGrid ] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    const [ turn, setTurn ] = useState(getFirstTurn());
    const [ win, setWin ] = useState('');

    const handlePress = (rowIndex: number, colIndex: number) => {
        if (!grid[rowIndex][colIndex] && !win) {
            const newGrid = grid.map((row, r) => (
                row.map((col, c) => (
                    colIndex === c && rowIndex === r ? turn : col
                ))
            ));
            setGrid(newGrid);
            if (checkVictory(newGrid, turn)) {
                console.log(`${turn} à gagné !`);
                setWin(turn);
                
            };
            setTurn(turn === 'X' ? '0' : 'X');
        }
    };

    const handleReplay = () => {
        setGrid([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        setWin('');
        setTurn(getFirstTurn());
    }
    
    return (
        <>
            <Info turn={turn} win={win}/>
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
            {win && <Button title="Relancer la partie" onPress={handleReplay}></Button>}
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