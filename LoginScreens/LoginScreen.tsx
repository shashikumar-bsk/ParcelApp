import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, backgroundColor: '#000' }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../assets/xlr-logo.png')} // put your XLR logo in assets folder
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.logoDivider} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Log Into Your Account</Text>
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

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate('ForgotPassword' as never)}>
          <Text style={styles.forgotText}>FORGOT YOUR PASSWORD?</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.footerContainer} >
          <Text style={styles.footerText}>
            Don't Have An Account? <Text style={styles.signupText} onPress={() => navigation.navigate('Signup' as never)}>SIGN UP</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '7%',
    paddingTop: '12%',
    paddingBottom: '10%',
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: height * 0.09,
    marginBottom: '8%',
  },
  logoDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    marginBottom: '8%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: '8%',
  },
  title: {
    color: '#FFD700',
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: '1%',
  },
  subtitle: {
    color: '#aaa',
    fontSize: width * 0.04,
  },
  
  inputContainer: {
    width: '100%',
    marginBottom: '4%',
  },
  label: {
    color: '#FFD700',
    fontSize: width * 0.04,
    marginBottom: '2%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    fontSize: width * 0.04,
  },
  loginButton: {
    backgroundColor: '#D4A437',
    borderRadius: 30,
    paddingVertical: '4%',
    alignItems: 'center',
    width: '100%',
    marginTop: '8%',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
  forgotContainer: {
    marginTop: '5%',
  },
  forgotText: {
    color: '#FFD700',
    fontSize: width * 0.035,
    textAlign: 'center',
  },
  divider: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    width: '90%',
    marginTop: '8%',
    marginBottom: '5%',
  },
  footerContainer: {
    marginTop: '5%',
  },
  footerText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: width * 0.04,
  },
  signupText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
