import React from 'react';
import {Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import SecondaryText from '../Components/Titles/SecondaryTitle';
import HighlightedText from '../Components/Texts/HighlightedText';
import Input from '../Components/Input/Input';

const styles = require('../Styles/Styles');

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerEnd}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Image style={styles.elipse} source={require('../Assets/elipse.png')} />
      <View
        style={{
          ...styles.mainOnboarding,
          justifyContent: 'space-between',
        }}>
        <View style={styles.inputGroup}>
          <MainTitle label={'Welcome Back!'} />
          <Image
            style={styles.imgTitle}
            source={require('../Assets/login.png')}
          />
          <Input input={'Enter your e-mail'} />
          <Input input={'Confirm password'} />
        </View>
        <SecondaryText label={'Forgot password'} />
        <View style={styles.inputGroup}>
          <Button label={'Log in'} /*screenName={}*/ />
          <HighlightedText
            label={'Don’t have an account?'}
            props={' Sign Up'}
            screenName={'Register'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
