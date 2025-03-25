import { StyleSheet, Text } from "react-native";

export function Info({ turn, win = '' }) {
    return (
        <>
            {win ? <Text style={styles.text}>Felicitation ! {win} à gagné la partie !</Text> : <Text style={styles.text}>C'est au tour de {turn} de jouer</Text>}
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});