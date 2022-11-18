import {Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import HighlightedText from '../Components/Texts/HighlightedText';
import MainText from '../Components/Texts/MainText';
import Input from '../Components/Input/Input';
import axios from 'axios';
import reactotron from 'reactotron-react-native';
import React, {useEffect} from 'react';
import {showMessage} from 'react-native-flash-message';
import t from '../services/translate';
const styles = require('../Styles/Styles');

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const baseUrl = 'https://api-nodejs-todolist.herokuapp.com';
  const [validEmail, setValidEmail] = React.useState(false);
  const [validName, setValidName] = React.useState(false);
  const [validPassword, setValidPassword] = React.useState(false);
  const [token, setToken] = React.useState('');

  //seteamos los estados de los inputs luego de realizar la comprobacion
  const handleConfirmPassword = text => {
    setConfirmPassword(text);
  };
  const checkValidEmail = text => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setEmail(text);
    if (emailRegex.test(text) && email !== '') {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const checkValidName = text => {
    const nameRegex = /^[a-zA-Z_ ]*$/;
    setName(text);
    if (nameRegex.test(text) && name !== '') {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };
  const checkValidPassword = text => {
    setPassword(text);
    if (password.length >= 7 && password !== '') {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  //esto podria hacerse en una sola funcion que pase nombre y color
  const errorMsg = message => {
    showMessage({
      message: message,
      type: 'info',
      autoHide: true,
      duration: 3000,
      icon: 'info',
      backgroundColor: '#f12222',
      statusBarHeight: 30,
    });
  };
  const showMessages = prop => {
    showMessage({
      message: prop,
      type: 'info',
      autoHide: true,
      duration: 3000,
      icon: 'info',
      backgroundColor: '#31bfb5',
      statusBarHeight: 30,
    });
  };

  //submit del formulario. faltaria agregar una funcion que borre los inputs despues de enviado el formulario
  const submit = () => {
    if (
      validEmail &&
      validName &&
      validPassword &&
      password === confirmPassword
    ) {
      reactotron.log('empezando a enviar');
      axios
        .post(
          `${baseUrl}/user/register`,
          {
            name: name,
            email: email,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          console.log(response);
          reactotron.log(response);
          reactotron.log(response.data);
          setToken(response.data.token);
          reactotron.log(token);
          showMessages(t('message.sended'));
        })
        .catch(error => {
          console.log(error.response);
          reactotron.log('error');
        });
    } else {
      errorMsg(t('message.invalid'));
    }
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
          <MainTitle label={t('register.mainTitle')} />
          <MainText label={t('register.mainText')} />
        </View>
        <View style={styles.inputGroup}>
          <Input
            function={checkValidName}
            input={t('register.placeHolderName')}
            onFocus={() => {
              showMessages(t('message.name'));
            }}
          />
          <Input
            function={checkValidEmail}
            input={t('register.placeHolderEmail')}
            keyboard={'email-address'}
            onFocus={() => {
              showMessages(t('message.email'));
            }}
          />
          <Input
            function={checkValidPassword}
            security={true}
            input={t('register.placeHolderPassword')}
            onFocus={() => {
              showMessages(t('message.password'));
            }}
          />
          <Input
            function={handleConfirmPassword}
            security={true}
            input={t('register.placeHolderConfirmPassword')}
            onFocus={() => {
              showMessages(t('message.confirmPassword'));
            }}
          />
          <Button label={t('register.registerBtn')} onPress={submit} screenName={'Register'} />
          <HighlightedText
            label={t('register.highlightedText')}
            props={' Log In'}
            screenName={'Login'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  
  );
};

export default Register;
