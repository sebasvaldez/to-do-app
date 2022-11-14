import React from 'react';
import {Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import SecondaryTitle from '../Components/Titles/SecondaryTitle';
import HighlightedText from '../Components/Texts/HighlightedText';
import MainText from '../Components/Texts/MainText';
import Input from '../Components/Input/Input';
import axios from 'axios';

const styles = require('../Styles/Styles');

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const baseUrl = 'https://api-nodejs-todolist.herokuapp.com';

  const handleName = text => {
    setName(text);
  };

  const handleEmail = text => {
    setEmail(text);
  };

  const handlePassword = text => {
    setPassword(text);
  };
  const handleConfirmPassword = text => {
    setConfirmPassword(text);
  };

  const submit = () => {
    console.log(name);
  };

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
          <MainTitle label={'Welcome Onboard!'} />
          <MainText label={'Lets help you meet up your tasks.'} />
        </View>
        <View style={styles.inputGroup}>
          <Input function={handleName} input={'Enter your full name'} />
          <Input function={handleEmail} input={'Enter your e-mail'} />
          <Input
            function={handlePassword}
            security={true}
            input={'Enter your password'}
          />
          <Input
            function={handleConfirmPassword}
            security={true}
            input={'Confirm password'}
          />
          <Button
            label={'Register'}
            runAction={submit}
            screenName={'Register'}
          />
          <HighlightedText
            label={'Already have an account?'}
            props={'Log In'}
            screenName={'Login'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
