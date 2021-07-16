import React from 'react';  
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native';

export default function LoadingPage({navigation}) {
  const api_base_url = "https://apis.solarialabs.com/shine/v1/vehicle-stats/specs";
  // https://apis.solarialabs.com/shine/v1/vehicle-stats/specs?make=Honda&model=Civid&year=2015&full-data=true&apikey=sTzM47mrl7633BfGwAWaXO10ZrarAy6O
  callApi = () => {
    fetch(api_base_url + new URLSearchParams({
      "make": "Honda",
      "model": "Civic",
      "year": "2015",
      "full-data": "true",
      "apikey": api_key
      }), {
      method: "GET",
    }).then(res => {
      console.log(res.json())
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Information Submitted</Text>
      <Button color="#351C15" title="Return" onPress={() => navigation.navigate("LoadingPage")}/>
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
  text: {
    fontSize: 14,
    paddingBottom: 10,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 30,
    fontSize: 15,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
  }
});
