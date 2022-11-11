import React from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = require('../../Styles/Styles');

const Button = textButton => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.button}>
      <Text
        style={styles.buttonLabel}
        onPress={() => {
          navigation.navigate(textButton.screenName);
        }}>
        {textButton.label}
      </Text>
    </Pressable>
  );
};

export default Button;
