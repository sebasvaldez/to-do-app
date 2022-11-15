import React from 'react';
import {View, Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import elipse from '../Assets/elipse.png';

import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';

const styles = require('../Styles/Styles');
import Reactotron from 'reactotron-react-native';
import {useNavigation} from '@react-navigation/native';

const UserHome = () => {
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
          
          <MainTitle label={'Al fin lograste entrar!!!'} />
          
        </View>
        <Button label={'Log out'} onFunction={where} screenName={'Login'} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserHome;
