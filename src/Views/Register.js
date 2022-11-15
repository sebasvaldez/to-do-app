import {Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import SecondaryTitle from '../Components/Titles/SecondaryTitle';
import HighlightedText from '../Components/Texts/HighlightedText';
import MainText from '../Components/Texts/MainText';
import Input from '../Components/Input/Input';
import axios from 'axios';
import reactotron from 'reactotron-react-native';
import React, {useEffect} from 'react';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

const styles = require('../Styles/Styles');

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const baseUrl = 'https://api-nodejs-todolist.herokuapp.com';
  const [validEmail, setValidEmail] = React.useState(false);
  const [validName, setValidName] = React.useState(false);
  const navigation = useNavigation();

  const handlePassword = text => {
    setPassword(text);
  };

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
    setName(text);
    if (text.length >= 7 && name !== '') {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

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

  const submit = async () => {
    if (validEmail && validName && password === confirmPassword) {
      reactotron.log('empezando a enviar');

      

     await axios
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
          navigation.navigate('Login');
          console.log(name, email, password);
        })
        .catch(error => {
          console.log(error.response);
        });
      reactotron.log('enviado');
      showMessages('Datos enviados');
    } else {
      errorMsg('Datos invalidos');
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
          <MainTitle label={'Welcome Onboard!'} />
          <MainText label={'Lets help you meet up your tasks.'} />
        </View>
        <View style={styles.inputGroup}>
          <Input
            function={checkValidName}
            input={'Enter your full name'}
            onFocus={() => {
              showMessages('Debe ingresar un nombre de más de 7 caracteres');
            }}
          />
          <Input
            function={checkValidEmail}
            input={'Enter your e-mail'}
            keyboard={'email-address'}
            onFocus={() => {
              showMessages('Debe ingresar una dirección de correo válida');
            }}
          />
          <Input
            function={handlePassword}
            security={true}
            input={'Enter your password'}
            onFocus={() => {
              showMessages('Debe ingresar una contraseña segura');
            }}
          />
          <Input
            function={handleConfirmPassword}
            security={true}
            input={'Confirm password'}
            onFocus={() => {
              showMessages('Las contraseñas deben coincidir');
            }}
          />
          <Button
            label={'Register'}
            onFunction={submit}
            screenName={'Register'}
          />
          <HighlightedText
            label={'Already have an account?'}
            props={' Log In'}
            screenName={'Login'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
