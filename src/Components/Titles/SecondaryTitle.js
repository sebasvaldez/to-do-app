import React from 'react';
import {Text} from 'react-native';
const styles = require('../../Styles/Styles');
import {showMessage, hideMessage} from 'react-native-flash-message';

const SecondaryTitle = textContent => {
  return (
    <Text
      style={styles.loginText}
      onPress={() => {
        showMessage({
          message: textContent.message,
          type: 'info',
          autoHide: true,
          duration: 3000,
          icon: 'info',
          backgroundColor: '#31bfb5',
          statusBarHeight: 30,
        });
      }}>
      {textContent.label}
    </Text>
  );
};

export default SecondaryTitle;
