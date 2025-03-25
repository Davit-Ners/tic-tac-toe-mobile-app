export default function getFirstTurn() {
    const rand = Math.round(Math.random());
    return rand === 0 ? 'X' : '0';
}