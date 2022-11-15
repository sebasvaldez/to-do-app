import React from 'react';
import {Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import SecondaryTitle from '../Components/Titles/SecondaryTitle';
import HighlightedText from '../Components/Texts/HighlightedText';
import Input from '../Components/Input/Input';
import {useNavigation} from '@react-navigation/native';
import reactotron from 'reactotron-react-native';
import axios from 'axios';

const styles = require('../Styles/Styles');

const Login = () => {
  const navigation = useNavigation();
  const [email, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const baseUrl = 'https://api-nodejs-todolist.herokuapp.com';

  const handleMail = text => {
    setMail(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };

  const login = async () => {

    await axios
      .post(
        `${baseUrl}/user/login`,
        {
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
        
        console.log(response.data);
        navigation.navigate('UserHome');
      })
      .catch(error => {
        reactotron.log(error.response);
       
      });
    console.log('enviado');
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
          <MainTitle label={'Welcome Back!'} />
          <Image
            style={styles.imgTitle}
            source={require('../Assets/login.png')}
          />
          <Input input={'Enter your e-mail'} function={handleMail} />
          <Input
            input={'Enter your password'}
            security={true}
            function={pass => {
              handlePassword(pass);
            }}
          />
        </View>
        <SecondaryTitle
          label={'Forgot password'}
          message={
            'Hemos enviado por email las instrucciones para reestablecer su contrasea'
          }
        />
        <View style={styles.inputGroup}>
          <Button label={'Log in'} onFunction={() => login()} />
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
