import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Dimensions, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageView({ navigation, route }) {
  const [image, setImage] = useState(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { statusMedia } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const { statusCamera } = await ImagePicker.requestCameraPermissionsAsync();
        if (route.params.type === 'pick')
          pickImage()
        else if (route.params.type === 'take')
          openCamera()
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      navigation.navigate("LoadingPage")
    }
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      navigation.navigate("LoadingPage")
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && route.params.type === 'pick' && <Button color='#351C15' title="Choose Another Image" onPress={pickImage} />}
      {image && route.params.type === 'take' && <Button color='#351C15' title="Retake Image" onPress={openCamera} />}
      {image && <Image source={{ uri: image }} style={{ width: windowWidth, height: windowHeight * 0.6 }} />}
    </View>
  );
}