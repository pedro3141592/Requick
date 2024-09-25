import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const Cadastro = () => {
  const [cpf, setCpf] = useState('');
  const [cpfUsuario, setCpfUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (!cpf || !cpfUsuario || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      Alert.alert('Sucesso', 'Cadastro concluído!');
      setCpf('');
      setCpfUsuario('');
      setSenha('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="Digite o CPF"
        keyboardType="numeric"
      />

      <Text style={styles.label}>CPF do Usuário:</Text>
      <TextInput
        style={styles.input}
        value={cpfUsuario}
        onChangeText={setCpfUsuario}
        placeholder="Digite o CPF do usuário"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite a senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Fazer Log-In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3F5CE', // Cor de fundo verde claro
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF', // Cor de fundo dos inputs
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: '#C5C5C5', // Cor da borda dos inputs
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F7931E', // Cor laranja para o botão de cadastrar
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cadastro;
﻿