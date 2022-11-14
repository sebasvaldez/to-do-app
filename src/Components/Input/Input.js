import React from 'react';
import {TextInput} from 'react-native';

const styles = require('../../Styles/Styles');

function Input(text) {
  return (
    <TextInput
      placeholder={text.input}
      style={styles.input}
      placeholderTextColor="grey"
      onChangeText={text.function}
      secureTextEntry={text.security}
      keyboardType={text.keyboard}
      onFocus={text.onFocus}
    />
  );
}

export default Input;
