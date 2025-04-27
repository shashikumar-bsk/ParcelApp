import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { RootParamList } from '../types';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  ReceiverDetailsScreen: undefined;
  ParcelSummaryScreen: { 
    weight: string; 
    productDescription: string;
    receiverName: string;
    receiverAddress: string;
    receiverNumber: string;
    receiverLocation: string;
  };
};

type ReceiverDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ReceiverDetailsScreen'
>;

const ReceiverDetailsScreen = () => {
  const navigation = useNavigation<ReceiverDetailsScreenNavigationProp>();
  const route = useRoute();
  const { weight, productDescription } = route.params as { weight: string; productDescription: string };

  const [receiverName, setReceiverName] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverNumber, setReceiverNumber] = useState('');
  const [receiverLocation, setReceiverLocation] = useState('');

  const handleSend = () => {
    if (!receiverName || !receiverAddress || !receiverNumber || !receiverLocation) {
      alert('Please fill all fields.');
      return;
    }

    navigation.navigate('ParcelSummaryScreen', {
      weight,
      productDescription,
      receiverName,
      receiverAddress,
      receiverNumber,
      receiverLocation,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Receiver Details</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Receiver Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter receiver's name..."
            placeholderTextColor="#ccc"
            value={receiverName}
            onChangeText={setReceiverName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Receiver Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter receiver's address..."
            placeholderTextColor="#ccc"
            value={receiverAddress}
            onChangeText={setReceiverAddress}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Receiver Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter receiver's 10-digit mobile number..."
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
            value={receiverNumber}
            onChangeText={(text) => {
              const digitsOnly = text.replace(/\D/g, '');
              if (digitsOnly.length <= 10) {
                setReceiverNumber(digitsOnly);
              } else {
                setReceiverNumber(digitsOnly.slice(0, 10));
              }
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Receiver Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter receiver's location..."
            placeholderTextColor="#ccc"
            value={receiverLocation}
            onChangeText={setReceiverLocation}
          />
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>SEND</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ReceiverDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: '6%',
    paddingTop: '20%',
    paddingBottom: '5%',
    flexGrow: 1,
  },
  title: {
    color: '#FFD700',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: '8%',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: '6%',
  },
  label: {
    color: '#FFD700',
    fontSize: width * 0.04,
    marginBottom: '2%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    fontSize: width * 0.04,
  },
  sendButton: {
    backgroundColor: '#D4A437',
    borderRadius: 25,
    paddingVertical: '4%',
    alignItems: 'center',
    marginTop: '8%',
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
});
