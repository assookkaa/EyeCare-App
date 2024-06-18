import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    
       
    <View style={styles.container}>
    <Image source={require('../../../assets/images1/login.jpg')} 
      style = {{
        width:'100%',
        height: 300,
        
        
      }}
      />
      <View 
      style= {{
        backgroundColor: '#F5FCFF',
        width: '100%',
        padding: 24,
        alignItems: 'center',
        gap: 10, 
      }}
      >
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
       <Button title="Login" onPress={handleLogin} color="#1E90FF" />
       <Link href= "/home/register" style={{ color: '#1E90FF' }}>Go to Register</Link>
      </View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap:10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;