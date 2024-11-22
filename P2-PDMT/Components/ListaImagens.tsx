import { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theCatApiClient from '../Utils/TheCatApiClient';
import React from 'react';
export default function ListaImagens() {
  const [imagemURL, setImagemURL] = useState<string | null>(null);
  useEffect(() => {
    const exibeImagem = async () => {
        const response = await theCatApiClient.get('search', {params: { limit: 1 }, });
        const imagem = response.data[0]?.url;
        setImagemURL(imagem); 
    };
    exibeImagem();
  }, []);
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemURL || undefined }} style={styles.imagem} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  imagem: {
    width: 400,
    height: 400,
  },
});