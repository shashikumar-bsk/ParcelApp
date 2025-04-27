import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SendParcelScreen', { destination: 'Dubai' })} // Update the navigation and destination parameter
      >
        <Text style={styles.buttonText}>Send a Parcel to Dubai in 7 Hours</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      onPress={() => navigation.navigate('SendParcelScreen', { destination: 'Hyderabad' })} // Same here for Hyderabad
      >
        <Text style={styles.buttonText}>Send a Parcel to HYD in 7 Hours</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PassengerRegister')}
      >
        <Text style={styles.buttonText}>Fly to Dubai for Free</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('DeliveryPartner')}
      >
        <Text style={styles.buttonText}>Rent Your Baggage Space & Earn</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.smallText}
        onPress={() => navigation.navigate('DeliveryPartnerScreen')}
      >
        <Text style={{ color: '#aaa', fontSize: 12, marginTop: 20 }}>Become a Delivery Partner</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: '5%', // 5% horizontal padding
    paddingTop: '30%',       // 10% top padding
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: '#f4c542',
    paddingVertical: '4%',   // responsive vertical padding
    paddingHorizontal: '5%',
    borderRadius: 10,
    width: '100%',
    marginBottom: '13%',
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: '13%',
  },
  smallText: {
    marginTop: '5%',
  },
});
