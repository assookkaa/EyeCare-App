import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images1/register.jpg')}
        style={{
          width: '100%',
          height: 300,


        }}
      />
      <View
        style={{
          backgroundColor: '#F5FCFF',
          width: '100%',
          padding: 24,
          alignItems: 'center',
          gap: 10,
        }}
      >
        <TextInput
          placeholder="Full Name"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
        />
        <Button title="Register" onPress={() => { }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default RegisterScreen;
