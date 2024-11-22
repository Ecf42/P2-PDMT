import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import theCatApiClient from './Utils/TheCatApiClient';

export default function App() {
  const [imagens, setImagens] = useState<string[]>([]);

  const carregarImagens = async () => {
    const response = await theCatApiClient.get('search', { params: { limit: 5 } });
    const novasImagens = response.data.slice(0, 5).map((item: any) => item.url);
    setImagens(novasImagens);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={carregarImagens}>
        <Text style={styles.buttonText}>Gerar Imagens</Text>
      </Pressable>
      <FlatList
        data={imagens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    marginTop: 80,
    borderRadius: 4,
    padding: 4,
    alignContent: 'center',
  },
  image: {
    width: 500,
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
    margin: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
