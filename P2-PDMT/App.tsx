import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListaImagens from './Components/ListaImagens';

export default function App() {

  return (
    <View style={styles.container}>
      <ListaImagens/>
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