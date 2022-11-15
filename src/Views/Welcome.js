import React from 'react';
import {View, Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import elipse from '../Assets/elipse.png';
import onboarding from '../Assets/onboarding.png';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import MainText from '../Components/Texts/MainText';
const styles = require('../Styles/Styles');
import Reactotron from 'reactotron-react-native';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  Reactotron.log('hello rendering world');
  const navigation = useNavigation();
  
  const where = () => {
    navigation.navigate('Login');
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
      <Image style={styles.elipse} source={elipse} />
      <View
        style={{
          ...styles.mainOnboarding,
          paddingBottom: 20,
          justifyContent: 'space-around',
        }}>
        <View style={styles.center}>
          <Image style={styles.imgTitle} source={onboarding} />
          <MainTitle label={'Gets things done with TODo'} />
          <MainText label={'Lorem ipsum dolor sit amet,'} />
          <MainText label={'consectur adipiscing elit. Magna in'} />
          <MainText label={'volutpat, tristique lacinia ut.'} />
          <MainText label={'Elementum non turpis nullam ipsum.'} />
        </View>
        <Button label={'Get Started'} onFunction={where} screenName={'Login'} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Welcome;
