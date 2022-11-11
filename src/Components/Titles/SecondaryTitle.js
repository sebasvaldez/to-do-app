import React from 'react';
import {Text} from 'react-native';
const styles = require('../../Styles/Styles');
import {showMessage, hideMessage} from 'react-native-flash-message';

const SecondaryText = textContent => {
  return (
    <Text
      style={styles.loginText}
      onPress={() => {
        showMessage({
          message: 'Hemos enviado un mail para reestablecer su contraseña',
          type: 'info',
          autoHide: true,
          duration: 3000,
          icon: 'info',
          backgroundColor: '#2ECC71',
          statusBarHeight: 40,
        });
      }}>
      {textContent.label}
    </Text>
  );
};

export default SecondaryText;
