import { StyleSheet, Image } from 'react-native';
import React from 'react';
import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Link } from 'expo-router';


const Home = ()=> {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#ecf0f1" />
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images1/logo.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images1/home.jpg')}
          style={{
            width: 500,
            height: 450,
          }}
        />
        <View style={styles.servicesContainer}>
        <Text style={styles.contentText}>Our Services</Text>
          <View style={styles.serviceItem}>
            <Text style={styles.title}>Free Eye Check-Ups</Text>
            <Text style={styles.serviceDescription}>Regular eye check-ups are essential for maintaining good vision health. Our free eye check-ups ensure that you can monitor your eye health without any cost.</Text>
          </View>
          <View style={styles.serviceItem}>
            <Text style={styles.title}>Eyeglass Prescription</Text>
            <Text style={styles.serviceDescription}>Need a new eyeglass prescription? Our expert optometrists provide accurate prescriptions tailored to your vision needs, ensuring clear and comfortable vision.</Text>
          </View>
          <View style={styles.serviceItem}>
            <Text style={styles.title}>Eyeglass Free Repair</Text>
            <Text style={styles.serviceDescription}>Accidents happen! If your eyeglasses need repairs, don't worry. Our repair service is here to fix them for you at no cost, ensuring you can see clearly again in no time.</Text>
          </View>
        </View>
        <Link href={"home/login"}
        style={styles.title}>Push</Link>
      </View>
          
    </ScrollView>
  );
}
export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    // fontFamily: 'LeagueSpartan-Regular'
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '100%',
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  logo: {
    height: 50, // Set the height of your logo
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    height: 100,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  servicesContainer: {
    justifyContent: 'space-around', // Evenly spaces the services
    padding: 20, // Adds padding around the container
    backgroundColor: '#f5f5f5',
    gap: 32,
  },
  serviceItem: {
    backgroundColor: '#fff', // White background
    borderRadius: 8, // Equivalent to 0.5rem, assuming 1rem = 16px
    shadowColor: 'rgba(21,138,113,0.2)', // Light shadow for box-shadow
    shadowOffset: { width: 8, height: 8 }, // Shadow offset
    shadowOpacity: 1, // Full shadow opacity
    elevation: 3, // Elevation for Android (adds drop shadow)
    borderWidth: 1, // Border width
    borderColor: '#15718a;', // Light border color for --border
    padding: 10, // Equivalent to 2.5rem, assuming 1rem = 16px
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, // Space between title and description
  },
  serviceDescription: {
    fontSize: 14,
    textAlign: 'left',
  },
});