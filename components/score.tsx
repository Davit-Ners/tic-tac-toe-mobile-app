import { StyleSheet, Text, View } from "react-native";

export function Score({ x, o }) {
    return (
        <View style={styles.scoreContainer}>
            <Text style={styles.text}>Score</Text>
            <Text style={styles.text}>X = {x} ||| 0 = {o}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scoreContainer: {
        borderWidth: 5,
        padding: 20,
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    text: {
        fontSize: 30
    }
});