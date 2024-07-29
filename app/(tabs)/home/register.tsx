import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.205.106:8000/api/register', {
        firstname: firstName,
        lastname: lastName,
        birthdate,
        gender,
        email,
        password,
        password_confirmation: confirmPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
    
      console.log(response.data); // Log response data for debugging
    
      // Optionally, navigate to another screen upon successful registration
      // navigation.navigate('Home'); // Assuming you have navigation set up

    } catch (error) {
      console.error('Error registering:', error);

      // Display an alert to the user with error message
      if (error.response) {
        // Server responded with an error status code
        Alert.alert('Registration Failed', error.response.data.message);
      } else if (error.request) {
        // Request was made but no response was received
        Alert.alert('Registration Failed', 'No response received from server');
      } else {
        // Something else happened while setting up the request
        Alert.alert('Registration Failed', error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images1/register.jpg')}
          style={styles.image}
        />
        <View style={styles.formContainer}>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            placeholder="Birthdate"
            style={styles.input}
            value={birthdate}
            onChangeText={text => setBirthdate(text)}
          />
          <TextInput
            placeholder="Gender"
            style={styles.input}
            value={gender}
            onChangeText={text => setGender(text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <Button title="Register" onPress={handleRegister} />
          <Link href="/home/login" style={styles.loginLink}>
            Go Back to Login
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  formContainer: {
    backgroundColor: '#F5FCFF',
    width: '100%',
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
  loginLink: {
    color: '#1E90FF',
    marginTop: 10,
  },
});

export default RegisterScreen;
