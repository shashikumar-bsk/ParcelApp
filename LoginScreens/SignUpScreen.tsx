import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
    const navigation = useNavigation();
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
        <Image
          source={require('../assets/xlr-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.logoDivider} />

        {/* Title inside input container */}
        <View style={styles.inputContainer}>
          <Text style={styles.title}>
            Send a parcel to your loved ones in Less than a day OR Earn as a passenger and Fly for free
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter full name..."
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter mobile number..."
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email..."
            keyboardType="email-address"
            placeholderTextColor="#ccc"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password..."
            secureTextEntry
            placeholderTextColor="#ccc"
          />
        </View>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>SIGNUP</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already Have An Account? <Text style={styles.loginText}  onPress={() => navigation.navigate('Login' as never)}>LOG IN</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: '6%',
    paddingTop: '10%',
    paddingBottom: '5%',
    flexGrow: 1,
  },
  logo: {
    width: '100%',
    height: height * 0.08,
    marginBottom: '10%',
    marginTop:"5%"
  },
  logoDivider: {
    height: 1,
    backgroundColor: '#f2f0e4',
    opacity: 0.5,
    marginBottom: '8%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: '5%',
  },
  title: {
    color: '#FFD700',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: '4%',
    textAlign: 'left',
  },
  label: {
    color: '#FFD700',
    fontSize: width * 0.035,
    marginBottom: '2%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: '3%',
    paddingHorizontal: '4%',
  },
  signupButton: {
    backgroundColor: '#D4A437',
    borderRadius: 25,
    paddingVertical: '4%',
    alignItems: 'center',
    marginTop: '5%',
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  footerText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: '6%',
    fontSize: width * 0.035,
  },
  loginText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
