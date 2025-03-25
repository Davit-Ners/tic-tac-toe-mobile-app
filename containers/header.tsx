import { StyleSheet, Text, View } from "react-native";

export function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Tic-Tac-Toe</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 50,
        backgroundColor: '#07447d',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        color: 'white'
    }
});