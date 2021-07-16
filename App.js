import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main.js'
import LoadingPage from './components/LoadingPage.js'
import CameraView from './components/CameraView.js'
import ImageView from './components/ImageView.js'
import HandleSubmit from './components/HandleSubmit.js'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ title: '' }} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} options={{ title: '' }} />
        <Stack.Screen name="CameraView" component={CameraView} options={{ title: '' }} />
        <Stack.Screen name="ImageView" component={ImageView} options={{ title: '' }} />
        <Stack.Screen name="HandleSubmit" component={HandleSubmit} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
