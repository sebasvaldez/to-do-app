import React from 'react';
import {View, Image, StatusBar, Text, Pressable} from 'react-native';
import elipse from '../Assets/elipse.png';
import onboarding from '../Assets/onboarding.png';
import Button from '../Components/Button/Button';
import MainTitle from '../Components/Titles/MainTitle';
import MainText from '../Components/Texts/MainText';

const styles = require('../Styles/Styles');

const Welcome = ({navigation}) => {
  return (
    <View style={styles.containerEnd}>
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
        <Button label={'Get Started'} />
      </View>
    </View>
  );
};

export default Welcome;
