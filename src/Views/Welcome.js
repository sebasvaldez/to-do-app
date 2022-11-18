import React from 'react';
import {View, Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import elipse from '../Assets/elipse.png';
import onboarding from '../Assets/onboarding.png';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import MainText from '../Components/Texts/MainText';
const styles = require('../Styles/Styles');
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import t from '../services/translate';

const Welcome = () => {
  const navigation = useNavigation();

  const where = () => {
    navigation.navigate('Login');
  };

  const [token, setToken] = React.useState('');

  //obtenemos el token del storage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        setToken(value);
        return token;
      }
    } catch (e) {
      // error reading value
    }
  };

  getData();

  if (token !== '') {
    navigation.navigate('UserHome');
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerEnd}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Image style={styles.elipse} source={elipse} />
        <View
          style={{
            ...styles.mainOnboarding,
            paddingBottom: 20,
            justifyContent: 'space-around',
          }}>
          <View style={styles.center}>
            <Image style={styles.imgTitle} source={onboarding} />
            <MainTitle label={t('welcome.mainTitle')} />
            <MainText label={t('welcome.mainText1')} />
            <MainText label={t('welcome.mainText2')} />
            <MainText label={t('welcome.mainText3')} />
            <MainText label={t('welcome.mainText4')} />
          </View>
          <Button label={t('welcome.btnStarted')} onPress={where} screenName={'Login'} />
        </View>
      </KeyboardAvoidingView>
    );
  }
};

export default Welcome;
