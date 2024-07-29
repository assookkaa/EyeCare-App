import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { Redirect } from 'expo-router';

const Home = () => {
  const [date, setDate] = useState(''); // State for date input
  const [time, setTime] = useState(''); // State for time input
  const [note, setNote] = useState(''); // State for note input
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleAppointment = async () => {
    try {
      setLoading(true); // Set loading indicator to true
      const response = await axios.post('http://192.168.205.106:8000/api/appointments', {
        date: date, // Ensure date state is populated from TextInput
        time: time, // Ensure time state is populated from TextInput
        note: note, // Ensure note state is populated from TextInput
        custom_id: 'EC2024AR002'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      console.log('Appointment created successfully:', response.data);
      setErrorMessage('Appointment created successfully!'); // Set success message
      // Clear input fields after successful appointment creation
      setDate('');
      setTime('');
      setNote('');

      return <Redirect href={"/tables"}/>
    } catch (error) {
      console.error('Error creating appointment:', error);
      if (error.response) {
        // Server returned an error response (4xx or 5xx)
        console.error('Server Error:', error.response.data);
        setErrorMessage('Failed to create appointment. Please try again.');
      } else if (error.request) {
        // Request made but no response received
        console.error('No Response from Server:', error.request);
        setErrorMessage('No response from server. Please try again later.');
      } else {
        // Something else happened
        console.error('Axios Error:', error.message);
        setErrorMessage('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false); // Set loading indicator back to false
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images1/logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images1/home.jpg')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Make an Appointment</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Date (YYYY-MM-DD)"
              value={date}
              onChangeText={setDate}
              style={styles.input}
            />
            <TextInput
              placeholder="Time"
              value={time}
              onChangeText={setTime}
              style={styles.input}
            />
            <TextInput
              placeholder="Note (optional)"
              value={note}
              onChangeText={setNote}
              style={styles.input}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleAppointment}
              disabled={loading} // Disable button when loading is true
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.buttonText}>Create Appointment</Text>
              )}
            </TouchableOpacity>
            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    marginBottom: 10,
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  servicesContainer: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Home;
