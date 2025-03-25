import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameGrid } from './containers/game-grid.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GameGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
