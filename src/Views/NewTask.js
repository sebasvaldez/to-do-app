import {View} from 'react-native';
import React from 'react';
const styles = require('../Styles/Styles');
import MainTitle from '../Components/Titles/MainTitle';
import Input from '../Components/Input/Input';
import axios from 'axios';
import Button from '../Components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const NewTask = () => {
  const baseUrl = 'https://api-nodejs-todolist.herokuapp.com';
  const [description, setDescription] = React.useState('');
  const [token, setToken] = React.useState('');
  const navigation= useNavigation()

  const handleDescription = text => {
    setDescription(text);
  };

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

  const saveTask = () => {
    axios.post(
      `${baseUrl}/task`,
      {
        description: description,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };

  return (
    <View style={styles.center}>
      <MainTitle label={'New Task'} />
      <Input input={'Write a new task'} function={handleDescription} />
      <Button label={'Create Task'} onPress={saveTask}/>
      <Button label={'Return home'} onPress={()=>{navigation.navigate('UserHome')}}/>
    </View>
  );
};

export default NewTask;
