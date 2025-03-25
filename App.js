import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameGrid } from './containers/game-grid.tsx';
import { Header } from './containers/header.tsx';

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <StatusBar backgroundColor="black" style="light" />
        <GameGrid />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 25,
    backgroundColor: '#fff',
    gap: 25
  }
});