import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theCatApiClient from './Utils/TheCatApiClient';

export default function App() {
  const [imagens, setImagens] = useState<string[]>([]);

  const carregarImagens = async () => {
    const response = await theCatApiClient.get('search', { params: { limit: 5 } });
    const novasImagens = response.data.slice(0, 5).map((item: any) => item.url);
    setImagens(novasImagens);
  };

  return (
    <LinearGradient
      colors={['#ffdfaa', '#ffd3a6', '#ffc6a2', '#f2b99d']} 
      style={styles.background}
    >
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  list: {
    width: '100%',
    marginTop: 20,
    padding: 10,
  },
  image: {
    width: 500,
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor:'#1e3a8a',
    borderWidth: 5
  },
  button: {
    backgroundColor: '#1e3a8a', 
    padding: 12,
    borderRadius: 4,
    marginVertical: 10,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
