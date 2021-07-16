import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image,  ScrollView, TextInput  } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/541; //541 is actual image width


export default function Main({navigation}) {
  return (
    <View style={styles.container}>
    <Image  style={{
    width: win.width/2,
    height: win.width/2,
    resizeMode: "contain",
    alignSelf: "center",
  }}
  source={require('../assets/UPS_logo.png')} />
    <Text>UPS Personal Vehicle Dispatch App</Text>
    <Button color="#351C15" title="Begin Loading" onPress={() => navigation.navigate("LoadingPage")}/>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFDBD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
