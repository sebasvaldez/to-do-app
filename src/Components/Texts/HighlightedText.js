import React from 'react';
import {Text, View} from 'react-native';
const styles = require('../../Styles/Styles');

const HighlightedText = textContent => {
  return (
    <View style={{paddingTop: 15}}>
      <Text style={styles.loginText}>
        <Text style={{color: 'grey'}}>{textContent.label}</Text>
        <Text>{textContent.props}</Text>
      </Text>
    </View>
  );
};

export default HighlightedText;
