import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import theCatApiClient from '../Utils/TheCatApiClient';

export default function ListaImagens({ setImagens }: { setImagens: (imagens: string[]) => void }) {
  const carregarImagens = async () => {
      const response = await theCatApiClient.get('search', { params: { limit: 10 } }); 
			const novasImagens = response.data.map((item: { url: string }) => item.url); 
      setImagens(novasImagens);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={carregarImagens}>
        <Text style={styles.buttonText}>Gerar Imagens</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:   {
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
    margin: 12,
  },
  buttonText:   {
    color: 'white',
    textAlign: 'center',
  },
});