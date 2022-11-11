import React from 'react';
import {Text} from 'react-native';
const styles = require('../../Styles/Styles');

const MainText = textContent => {
  return <Text style={styles.textDescription}>{textContent.label}</Text>;
};

export default MainText;
