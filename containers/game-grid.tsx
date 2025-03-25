import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, Button } from "react-native";
import getFirstTurn from "../services/get-first-turn.ts";
import { Info } from "../components/info/info.tsx";
import checkVictory from "../services/check-victory.ts";
import { Score } from "../components/score.tsx";

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
    const [ x, setX ] = useState(0);
    const [ o, setO ] = useState(0);

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
            <Score x={x} o={o}/>
            <Info turn={turn} win={win}/>
            <View style={styles.grid}>
                <Text></Text>
                {grid.map((row,rowIndex) => (
                    <View key={rowIndex} style={styles.row}>{row.map((col, colIndex) => (
                        <TouchableOpacity disabled={win ? true : grid[rowIndex][colIndex] !== ''} key={colIndex} style={styles.block} onPress={() => handlePress(rowIndex, colIndex)}>
                            <Text style={styles.content}>{col ?? ''}</Text>
                        </TouchableOpacity>
                    ))}</View>
                ))}
            </View>
            {win && <View style={styles.btnContainer}>
                  <Button title="Relancer la partie" onPress={handleReplay} color={'black'}></Button>
            </View>}
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
        marginVertical: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    block: {
        width: 90,
        height: 90,
        borderWidth: 3,
        borderColor: "#333",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        margin: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    content: {
        fontSize: 50
    },
    btnContainer: {
        marginTop: 20,
        borderRadius: 10,
        overflow: "hidden",
        width: 200,
    }
});