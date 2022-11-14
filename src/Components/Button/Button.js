import React from 'react';
import {Pressable, Text} from 'react-native';

const styles = require('../../Styles/Styles');

const Button = textButton => {
  return (
    <Pressable style={styles.button}>
      <Text
        style={styles.buttonLabel}
        onPress={() => {
          textButton.onFunction();
        }}>
        {textButton.label}
      </Text>
    </Pressable>
  );
};

export default Button;
