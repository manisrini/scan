import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import HomeScreen from './components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CapturedImage from './components/CapturedImage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
          }}></Stack.Screen>
        <Stack.Screen
          name="CapturedImage"
          component={CapturedImage}
          options={{title: 'Upload'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
