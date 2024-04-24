import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente sua lógica de login aqui
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
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
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Criar uma conta" onPress={handleNavigateToRegister} />
    </View>
  );
};

export default LoginScreen;