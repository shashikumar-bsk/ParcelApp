// screens/DeliveryPartnerScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export default function DeliveryPartnerScreen() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [flightDetails, setFlightDetails] = useState('');

  const handleSubmit = () => {
    if (!fullName || !phoneNumber || !passportNumber || !flightDetails) {
      alert('Please fill all required fields.');
      return;
    }

    // Normally, send data to backend here
    alert('Registration Successful! 🎉');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Become a Delivery Partner</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#ccc"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Passport Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your passport number"
            placeholderTextColor="#ccc"
            value={passportNumber}
            onChangeText={setPassportNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Flight Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Flight number or details"
            placeholderTextColor="#ccc"
            value={flightDetails}
            onChangeText={setFlightDetails}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: '6%',
    paddingTop: '15%',
    paddingBottom: '10%',
    flexGrow: 1,
  },
  title: {
    color: '#FFD700',
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: '10%',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: '6%',
  },
  label: {
    color: '#FFD700',
    fontSize: width * 0.045,
    marginBottom: '2%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    fontSize: width * 0.04,
  },
  submitButton: {
    backgroundColor: '#D4A437',
    borderRadius: 25,
    paddingVertical: '4%',
    alignItems: 'center',
    marginTop: '8%',
  },
  submitText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
});
