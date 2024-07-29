import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

const AppointmentsScreen = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        console.log('Fetching appointments...');
        const response = await fetch('http://192.168.205.106:8000/api/getAppointments', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        const data = await response.json();
        console.log('Response:', data);
        
        if (response.ok) {
          setAppointments(data);
        } else {
          setError(data.error || 'Failed to fetch appointments');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#1E90FF" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointments</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.patient_id}</Text>
            <Text style={styles.cell}>{item.date}</Text>
            <Text style={styles.cell}>{item.time}</Text>
            <Text style={styles.cell}>{item.note}</Text>
            <Text style={styles.cell}>{item.status}</Text>

          </View>
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.cell, styles.headerText]}>Patient ID</Text>
            <Text style={[styles.cell, styles.headerText]}>Date</Text>
            <Text style={[styles.cell, styles.headerText]}>Time</Text>
            <Text style={[styles.cell, styles.headerText]}>Note</Text>
            <Text style={[styles.cell, styles.headerText]}>Status</Text>

          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  headerText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 8,
  },
  cell: {
    flex: 1,
    padding: 4,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AppointmentsScreen;
