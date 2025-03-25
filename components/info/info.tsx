import { Text } from "react-native";

export function Info({ turn, win = '' }) {
    return (
        <>
            {win ? <Text>Felicitation ! {win} à gagné la partie !</Text> : <Text>C'est au tour de {turn} de jouer</Text>}
        </>
    );
};