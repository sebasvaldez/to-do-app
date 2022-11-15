import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const styles = require('../../Styles/Styles');
import {useNavigation} from '@react-navigation/native';

const HighlightedText = textContent => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerTextLink}>
      <Text style={{...styles.loginText, color: 'grey'}}>
        {textContent.label}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(textContent.screenName)}>
        <Text style={styles.loginText}>{textContent.props}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HighlightedText;
