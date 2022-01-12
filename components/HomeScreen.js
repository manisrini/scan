import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {capImageActions} from '../store';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleScan = () => {
    launchCamera({maxHeight: 50, maxWidth: 100}, res => {
      if (!res.didCancel) {
        console.log(res.assets[0].uri);
        dispatch(capImageActions.setImageUrl(res.assets[0].uri));
        navigation.navigate('CapturedImage', {name: 'CapturedImage'});
      }
    });
  };

  return (
    <View style={styles.content}>
      <Text style={{color: 'black', fontWeight: '600', fontSize: 25}}>
        Scan and upload your images here!!!
      </Text>
      <Button title="Scan here" onPress={handleScan}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
