import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./requick2.png')}
      />
      <Text style={styles.message}>Bem vindo ao Requick! Um app de coleta seletiva</Text>
      <Image
        style={styles.tinyLogo}
        source={require('./coleta.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3F5CE', // Cor de fundo verde claro
    padding: 20,
    alignItems: 'center', 
  },
  title: {
    marginTop: 32,
    fontSize: 32,
    textAlign: "center",
    color: '#333',
  },
  tinyLogo:{
    width: 300, // Largura da imagem
    height: 300, // Altura da imagem
    resizeMode: 'contain', // Faz a imagem se ajustar mantendo a proporção
    alignItems: "center",
    justifyContent: "center",
  },
  message:{
    marginTop: 1,
    fontSize:22,
    textAlign: "center",
  },
});
