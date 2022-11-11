import React from 'react';
import {Text} from 'react-native';
const styles = require('../../Styles/Styles');

const SecondaryText = textContent => {
  return <Text style={styles.loginText}>{textContent.label}</Text>;
};

export default SecondaryText;
