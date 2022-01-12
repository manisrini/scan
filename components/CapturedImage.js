import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';

const CapturedImage = () => {
  const imageUrl = useSelector(state => state.capImage.imageurl);
  console.log(imageUrl);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          color: 'black',
        }}>
        Image Successfully uploaded!!!
      </Text>
    </View>
  );
};

export default CapturedImage;
