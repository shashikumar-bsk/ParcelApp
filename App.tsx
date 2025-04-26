import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Components/HomeScreen';
import SignUpScreen from './LoginScreens/SignUpScreen';
import LoginScreen from './LoginScreens/LoginScreen';  // PascalCase!

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group>
          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{ headerShown: false, animation: 'slide_from_right', }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: 'black' },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, animation: 'slide_from_right', }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
