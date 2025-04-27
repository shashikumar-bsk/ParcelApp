import React from 'react';
import { RootParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import SignUpScreen from './LoginScreens/SignUpScreen';
import LoginScreen from './LoginScreens/LoginScreen';  // PascalCase!
import EnterMobileNumberScreen from './ForgotPasswordScreens/EnterMobileNumberScreen';
import EnterOtpScreen from './ForgotPasswordScreens/EnterOtpScreen';
import ResetPasswordScreen from './ForgotPasswordScreens/ResetPasswordScreen';
import SendParcelScreen from './Components/SendParcelScreen';
import ReceiverDetailsScreen from './Components/ReceiverDetailsScreen';
import ParcelSummaryScreen from './Components/ParcelSummaryScreen';
import ParcelTrackingScreen from './Components/ParcelTrackingScreen';
import DeliveryPartnerScreen from './Components/DeliveryPartnerScreen/DeliveryPartnerScreen';
import ProfileScreen from './Components/ProfileScreen';


const Stack = createNativeStackNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group>
          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{ headerShown: false, animation: 'slide_from_right', }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, animation: 'slide_from_right', }}
          />
          <Stack.Screen
            name="EnterMobileNumber"
            component={EnterMobileNumberScreen}
            options={{ headerShown: false, animation: 'slide_from_right', }} />
          <Stack.Screen 
          name="EnterOtp" 
          component={EnterOtpScreen} 
          options={{ headerShown: false, animation: 'slide_from_right', }} />
          <Stack.Screen 
          name="ResetPassword" 
          component={ResetPasswordScreen} 
          options={{ headerShown: false, animation: 'slide_from_right', }} />

          <Stack.Screen
            name="SendParcelScreen"
            component={SendParcelScreen}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="ReceiverDetailsScreen"
            component={ReceiverDetailsScreen}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="ParcelSummaryScreen"
            component={ParcelSummaryScreen}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="ParcelTrackingScreen"
            component={ParcelTrackingScreen}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="DeliveryPartnerScreen"
            component={DeliveryPartnerScreen}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false, animation: 'slide_from_right' }}
          />


          

        </Stack.Group>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
