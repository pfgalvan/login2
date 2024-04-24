import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Implemente a lógica de registro aqui
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Confirmar senha:', confirmPassword);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastre-se</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: 'gray', width: 200, marginBottom: 10, padding: 5 }}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;